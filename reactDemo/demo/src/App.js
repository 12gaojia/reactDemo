import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/gauge';
import  'echarts/lib/chart/bar';
// import  'echarts/lib/chart/category';

// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
class App extends Component {
  constructor(props){
    super(props)
    this.state={
        services:[],
    }
}
  componentDidMount(){
    var myChart2 = Echarts.init(document.getElementById('chartdiv'));
    // 这里可以ajax请求接口
    var datas=[
      {'title':'能量表抄表状态',status:'较差','titleBtm':'综合抄表状态'},
      {'title':'智能报警统计',status1:'62.5%','status2':'70%','status3':'90%'},
      {'title':'年换表率',status:'4.178%','titleBtm':'2017-2018年能量表换表率统计'}
    ];
      this.setState({
        services : datas,
    })
    console.log(Echarts);
    myChart2.setOption({
      title: { text: '抄表率状态' },
      tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: '业务指标',
            type: 'gauge',
            detail: {formatter:'{value}%'},
            data: [{value: 50, name: '完成率'}]
        }
    ]
    });
    var myChart = Echarts.init(document.getElementById('chartdivSecond'));
    myChart.setOption({
      title: { text: '能量厂商统计' },
      color: ['#ff9800'],
      tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis : [
          {
              type : 'category',
              data : ['hyd', 'dye', '其他'],
              axisTick: {
                  alignWithLabel: true
              }
          }
      ],
      yAxis : [
          {
              type : 'value'
          }
      ],
      series : [
          {
              name:'直接访问',
              type:'bar',
              barWidth: '60%',
              data:[10, 52, 200]
          }
      ]

    });
    var myChart3 = Echarts.init(document.getElementById('chartdivThird'));
    myChart3.setOption({
      title: {
        text: '世界人口总量',
  
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['2011年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['巴西','印尼']
    },
    series: [
        {
            name: '2011年',
            type: 'bar',
            data: [18203, 23489]
        },
        
    ]
    });
   
  }
  render() {
      //判断state里是否有数据，state一个页面只有一个，所以在这我写成数组了
      if(this.state.services.length){
        var titlest=this.state.services[0]
        var titlest1=this.state.services[1]
        var titlest2=this.state.services[2]
        console.log(titlest1)
      }else{
        var titlest=this.state.services
        var titlest1=this.state.services
        var titlest2=this.state.services
      }
    return (
      <div className="App">
        <div className="content">
          <div className="title">能量抄表指标</div>
          <div className='tab1'>
            <div className="float" >
              <div className='title1' >{titlest.title}</div>
              <div className='box1'>{titlest.status}</div>
              <div className='box2'>{titlest.titleBtm}</div>
            </div>
            <div id="chartdiv" className="float" style={{ width: 300, height: 300 }}></div>
            <div className="float" >
              <div className='title1' >{titlest1.title}</div>
              <div className='title1Box'>高级别报警：{titlest1.status1}</div>
              <div className='title1Box'>中级别报警：{titlest1.status2}</div>
              <div className='title1Box'>低级别报警：{titlest1.status3}</div>
            </div>
            <div className="float" >
              <div className='title1' >{titlest2.title}</div>
              <div className='box1'>{titlest2.status}</div>
              <div className='box2'>{titlest2.titleBtm}</div>
            </div>
            <div className="float" >
              <div className='title1' >热计量客户统计</div>
              <div className='box1'>{titlest2.status}</div>
              <div className='box2'>{titlest2.titleBtm}</div>
            </div>
            <div id="chartdivSecond" className="float" style={{ width: 300, height: 300 }}></div>
            <div id="chartdivThird" className="float" style={{ width: 600, height: 300 }}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
