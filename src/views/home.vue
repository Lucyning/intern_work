<template>
  <div id="home">
   <div id="right">
     <div id="map"></div>
     <div id="smallMap"></div>
   </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import Navtab from '../components/left-tag.vue'
import chinaJson from '../json/china.json'

import anhui from '../json/anhui.json'
import aomen from '../json/aomen.json'
import beijing from '../json/beijing.json'
import chongqing from '../json/chongqing.json'
import fujian from '../json/fujian.json'
import gansu from '../json/gansu.json'
import guangdong from '../json/guangdong.json'
import guangxi from '../json/guangxi.json'
import guizhou from '../json/guizhou.json'
import hainan from '../json/hainan.json'
import hebei from '../json/hebei.json'
import heilongjiang from '../json/heilongjiang.json'
import henan from '../json/henan.json'
import hubei from '../json/hubei.json'
import hunan from '../json/hunan.json'

import jiangsu from '../json/jiangsu.json'
import jiangxi from '../json/jiangxi.json'
import jilin from '../json/jilin.json'
import liaoning from '../json/liaoning.json'
import ningxia from '../json/ningxia.json'
import neimenggu from '../json/neimenggu.json'

import qinghai from '../json/qinghai.json'
import shandong from '../json/shandong.json'
import shanghai from '../json/shanghai.json'
import shanxi from '../json/shanxi.json'
import shanxi1 from '../json/shanxi1.json'
import sichuan from '../json/sichuan.json'
import taiwan from '../json/taiwan.json'
import tianjin from '../json/tianjin.json'
import xianggang from '../json/xianggang.json'
import xinjiang from '../json/xinjiang.json'
import xizang from '../json/xizang.json'
import yunnan from '../json/yunnan.json'
import zhejiang from '../json/zhejiang.json'




export default {
  name: 'home' ,
  components: {
    Navtab,
  } ,
  mounted: function(){
       echarts.registerMap('china', chinaJson);
       var chart = echarts.init(document.getElementById('map'));
       chart.setOption({
           title: {text: '健康检测中心数据后台',
                  },
           tooltip: {
                   trigger: 'item',
                   formatter: function (params) {
                          return '当前位置' + ':'+params.data.name+'<br />'+'机构数'+':'+params.data.totalCompany+'<br />'+
                          '累计检测干预人数'+':'+params.data.totalPeople+'<br />'+'正在监测干预人数'+':'+params.data.onEye;
                   }
               },

           series: [
                   {
                       name: '中国',
                       type: 'map',
                       mapType: 'china',
                       label: {
                           normal: {
                               show: true
                           },
                           emphasis: {
                               show: true
                           }
                       },
                       data:[
                          {name:'北京',totalCompany:'100',totalPeople:'5000',onEye:'1000'},
                          {name:'内蒙古',totalCompany:'100',totalPeople:'5000',onEye:'1000'},
                          {name:'山东',totalCompany:'100',totalPeople:'5000',onEye:'1000'},
                          {name:'广东',totalCompany:'100',totalPeople:'5000',onEye:'1000'},
                          {name:'四川',totalCompany:'100',totalPeople:'5000',onEye:'1000'},
                          {name:'山西',totalCompany:'100',totalPeople:'5000',onEye:'1000'}

                       ]
                   }
               ]
       });
       var locationName;
       chart.on('click', function (params) {
           var city = params.name;
           for(var i = 0;i<provincesText.length;i++){
                if(city==provincesText[i]){
                    break;
                }
           }
           locationName = provinces[i];
           clickShow(locationName);


       });

        var provinces = ['shanghai', 'hebei','shanxi','neimenggu','liaoning','jilin','heilongjiang','jiangsu','zhejiang','anhui','fujian','jiangxi','shandong','henan','hubei','hunan','guangdong','guangxi','hainan','sichuan','guizhou','yunnan','xizang','shanxi1','gansu','qinghai','ningxia','xinjiang', 'beijing', 'tianjin', 'chongqing', 'xianggang', 'aomen'];
        var provincesText = ['上海', '河北', '山西', '内蒙古', '辽宁', '吉林','黑龙江',  '江苏', '浙江', '安徽', '福建', '江西', '山东','河南', '湖北', '湖南', '广东', '广西', '海南', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '北京', '天津', '重庆', '香港', '澳门'];

       function clickShow(locationName){
           switch (locationName)
           {
               case 'anhui':
                 echarts.registerMap(locationName,anhui);
                 break;
               case 'aomen':
                 echarts.registerMap(locationName,aomen);
                 break;
               case 'beijing':
                 echarts.registerMap(locationName,beijing);
                 break;
               case 'chongqing':
                 echarts.registerMap(locationName,chongqing);
                 break;
               case 'fujian':
                 echarts.registerMap(locationName,fujian);
                 break;
               case 'gansu':
                 echarts.registerMap(locationName,gansu);
                 break;
               case 'guangdong':
                 echarts.registerMap(locationName,guangdong);
                 break;
               case 'guangxi':
                 echarts.registerMap(locationName,guangxi);
                 break;
               case 'guizhou':
                 echarts.registerMap(locationName,guizhou);
                 break;
               case 'hainan':
                 echarts.registerMap(locationName,hainan);
                 break;
               case 'hebei':
                 echarts.registerMap(locationName,hebei);
                 break;
               case 'heilongjiang':
                 echarts.registerMap(locationName,heilongjiang);
                 break;
               case 'henan':
                 echarts.registerMap(locationName,henan);
                 break;
               case 'hubei':
                 echarts.registerMap(locationName,hubei);
                 break;
               case 'hunan':
                 echarts.registerMap(locationName,hunan);
                 break;
               case 'jiangsu':
                 echarts.registerMap(locationName,jiangsu);
                 break;
               case 'jiangxi':
                 echarts.registerMap(locationName,jiangxi);
                 break;
               case 'jilin':
                 echarts.registerMap(locationName,jilin);
                 break;
               case 'liaoning':
                 echarts.registerMap(locationName,liaoning);
                 break;
               case 'neimenggu':
                 echarts.registerMap(locationName,neimenggu);
                 break;
               case 'ningxia':
                 echarts.registerMap(locationName,ningxia);
                 break;
               case 'qinghai':
                 echarts.registerMap(locationName,qinghai);
                 break;
               case 'shandong':
                 echarts.registerMap(locationName,shandong);
                 break;
               case 'shanghai':
                 echarts.registerMap(locationName,shanghai);
                 break;
               case 'shanxi':
                 echarts.registerMap(locationName,shanxi);
                 break;
               case 'shanxi1':
                 echarts.registerMap(locationName,shanxi1);
                 break;
               case 'sichuan':
                 echarts.registerMap(locationName,sichuan);
                 break;
               case 'taiwan':
                 echarts.registerMap(locationName,taiwan);
                 break;
               case 'tianjin':
                 echarts.registerMap(locationName,tianjin);
                 break;
               case 'xianggang':
                 echarts.registerMap(locationName,xianggang);
                 break;
               case 'xinjiang':
                 echarts.registerMap(locationName,xinjiang);
                 break;
               case 'xizang':
                 echarts.registerMap(locationName,xizang);
                 break;
               case 'yunnan':
                 echarts.registerMap(locationName,yunnan);
                 break;
               case 'zhejiang':
                 echarts.registerMap(locationName,zhejiang);
                 break;
           };
           var smallChart = echarts.init(document.getElementById('smallMap'));

           smallChart.setOption({
                      tooltip: {
                              trigger: 'item',
                              formatter: function (params) {
                                                       return '当前位置' + ':'+params.data.name+'<br />'+'机构数'+':'+params.data.totalCompany+'<br />'+
                                                       '累计检测干预人数'+':'+params.data.totalPeople+'<br />'+'正在监测干预人数'+':'+params.data.onEye;
                                                }
                          },


                      series: [
                              {
                                  name: '地图',
                                  type: 'map',
                                  mapType:locationName,
                                  label: {
                                      normal: {
                                          show: true
                                      },
                                      emphasis: {
                                          show: true
                                      }
                                  },
                                  data:[

                                  ]
                              }
                          ]
                  });
              }
  }
}
</script>
<style>
#right{
    position:relative;
    margin-left:15%;
}
#map{
    position:absolute;
    left:0;
    top:100px;
    width:600px;
    height:400px;
}
#smallMap{
      position:absolute;
      top:100px;
      left:450px;
      width:600px;
      height:400px;
}
</style>
