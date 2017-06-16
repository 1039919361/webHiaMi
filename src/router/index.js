import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/page/home'
import Hello from '@/components/Hello'
import foot from '@/view/page/home/parent'
import indexTab from '@/view/page/children/indexTab'
import classTab from '@/view/page/children/classTab'
import beauty from '@/view/page/children/Beauty'
import gehu from '@/view/page/children/gehu'
import classify from '@/view/classify/'
import shop from '@/view/shop/'
import myself from '@/view/myself/'
import parent from '@/view/page/home/parent'
import classparent from '@/view/classify/classparent'
import classsent from '@/view/classify/classsent'
import enroll from '@/view/page/children/enrollpage'
import shopDetail from '@/view/shopDetail'
import search from '@/view/search'
import searchclassify from "@/view/search/searchclassify"
import fav from '@/view/myself/fav'
import coupon from "@/view/myself/coupon"
import couponK from "@/view/myself/couponK"
import couponYsy from "@/view/myself/couponYsy"
import couponGq from "@/view/myself/couponGq"
import address from '@/view/myself/address'
import addAddress from '@/view/myself/addAddress'
import binding from '@/view/myself/binding'
import service from '@/view/myself/service'
Vue.use(Router)

export default new Router({
  mode:'history',
  scrollBehavior (savedPosition){
  	if(savedPosition){
  		return savedPosition
  	} else{
  		return { x: 0, y: 0 }
  	}
  },
  routes: [
    {
      path: '/',
      component: parent,
      name:'parent',
      redirect: '/home/index/2'
    },  
    {
      path:'/fav',
      component:fav
    },
    {
      path:'/addAddress',
      component:addAddress
    },
    {
      path:'/address',
      component:address
    },{
      path:'/binding',
      component:binding
    },
    {
      path:'/service',
      component:service
    },
    {
      path:'/coupon',
      component:coupon,
      redirect: '/coupon/couponK',
      children:[
        {
          path:'couponK',
          component:couponK
        },
        {
          path:'couponYsy',
          component:couponYsy
        },
        {
          path:'couponGq',
          component:couponGq
        }
      ]
    },
    {
      path: '/enroll',
      name:'enroll',
      params:{toUrl:''},
      component: enroll
    },
    {
      path:'/search',
      name:'search',
      component:search
    },
    {
      path:'/searchclassify/:pageId',
      name:'searchclassify',
      component:searchclassify
    },
    {
      path:'/shopDetail/:ProductID',
      name:'shopDetail',
      component:shopDetail
    },
    {
      path: '/parent',
      component: parent,
      redirect: '/home/index/2',
      children:[
      {
      path: '/home',
      name: 'home',
      component: home,
      children : [
        {
          path: 'index/:id',
          component: indexTab
        },
        {
          path: 'class/:id',
          component: classTab
        },
        {
          path: 'beauty/:id',
          component: beauty
        },{
          path: 'gehu/:id',
          component: gehu
        }
      ]
        },
        {
          path:'classify',
          component: classify,
          redirect: 'classify/classparent',
          children:[
            {
              path: 'classparent',
              component: classparent
            },
            {
              path: 'classsent',
              component: classsent
            }
          ]
        },
        {
          path:'shop',
          name:'shop',
          component: shop
        },
        {
          path:'myself',
          name:'myself',
          component: myself,
          beforeEnter : (to,from,next) => {
              // console.log(to,from);
              // next();
            var user=window.localStorage['userInfor'];
            console.log(to)
            // 会打印一个对象 是你点击的路由
            if( !user ){
              next({ path: '/enroll',query:{"to":to.name} })
            }else{
              next()
            }

          }
        }

      ]
    }
  ]
})
