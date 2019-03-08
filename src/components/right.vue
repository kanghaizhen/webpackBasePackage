<template>
  <div class="k-right">
    <div class="k-banner">
      <img src="../assets/images/banner.jpg" alt="" width="820" height="256">
    </div>
    <div class="k-detail">
      <div class="k-detail-title">
        <span class="k-detail-icon">
          <i class="k-font k-font-user"></i>
        </span>
        <span class="k-value">自我评价</span>
      </div>
      <div class="k-content">
        <div class="k-text">
          <p>10年前端开发经验，精通webpack，gulp等前端自动化构建工具，熟悉vue，react等前端框架，针对项目能设计出具有良好扩展性和灵活性的技术框架。</p>
          <p>善于逻辑思维，和产品设计，你能快速的定位问题并提出合理的解决方案。</p>
          <p>有带领团队的经验，能根据个人情况安排合适的工作，提供团队的开发效率，能制定规范的开发规范。</p>
        </div>
      </div>
    </div>
    <div class="k-detail">
      <div class="k-detail-title">
        <span class="k-detail-icon">
          <i class="k-font k-font-work"></i>
        </span>
        <span class="k-value">工作经历</span>
      </div>
      <div class="k-content">
        <div class="k-table">
          <dl>
            <dt>公司</dt>
            <dd>广联达科技股份有限公司</dd>
          </dl>
          <dl>
            <dt>时间</dt>
            <dd> 2015年11月至今 </dd>
          </dl>
          <dl>
            <dt>职位</dt>
            <dd>前端架构师</dd>
          </dl>
          <dl>
            <dt>工作内容</dt>
            <dd>
              <p>该工作主要负责 BIMFACE三维渲染引擎 JSSDK 的相关工作</p>
              <ol>
                <li>根据功能需求，设计 JSSDK 的架构方案</li>
                <li>根据功能木块，设计合理 API</li>
                <li>基于 JSSDK ，开发丰富的插件</li>
                <li>设计良好的交互方案，对接不同的业务需求</li>
              </ol>
            </dd>
          </dl>
          <dl>
            <dt>公司</dt>
            <dd>上海微客来软件技术有限公司</dd>
          </dl>
          <dl>
            <dt>时间</dt>
            <dd> 2013年12月 -- 2015年11月 </dd>
          </dl>
          <dl>
            <dt>职位</dt>
            <dd>前端Leader</dd>
          </dl>
          <dl>
            <dt>工作内容</dt>
            <dd>
              <p>负责微客来各产品线的前端工作。</p>
              <ol>
                <li>新员工的招聘与培训</li>
                <li>结合产品线，选择适合的技术方案</li>
                <li>前端开发规范的制定，代码检查</li>
                <li>前端技术沉淀，技术分享</li>
              </ol>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="k-detail">
      <div class="k-detail-title">
        <span class="k-detail-icon">
          <i class="k-font k-font-education"></i>
        </span>
        <span class="k-value">教育经历</span>
      </div>
      <div class="k-content">
        <div class="k-table">
          <table>
            <tr>
              <th>时间</th>
              <th>学校</th>
              <th>学历</th>
              <th>专业</th>
            </tr>
            <tr>
              <td> 2006年9月 -- 2009年7月 </td>
              <td>郑州信息科技职业学院</td>
              <td>大专</td>
              <td>计算机/多媒体</td>
            </tr>
            <tr>
              <td> 2003年9月 -- 2006年7月 </td>
              <td>杞县高中</td>
              <td>高中</td>
              <td>理科</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less">
@edge-length: 20px;
@icon-height: 10px;
@icon-width: sqrt(pow(@edge-length, 2) - pow(@icon-height, 2));
.k-right{
  width: 820px;
  align-self: stretch;
  background: #ffffff;
  .k-detail-title{
    margin: 20px 0;
    padding: 0 20px;
    position: relative;
    .k-detail-icon{
      position: absolute;
      display: block;
      width: 34px;
      height: @edge-length;
      background: #f56c6c;
      text-align: center;
      left: -17px;
      .k-font{
        font-size: 16px;
        line-height: @edge-length;
      }
      &:before{
        display: block;
        position: absolute;
        border-bottom: @icon-height solid #f56c6c;
        border-left: @icon-width solid transparent;
        border-right: @icon-width solid transparent;
        content: '';
        left: 0;
        top: -@icon-height;
      }
      &:after{
        display: block;
        position: absolute;
        border-top: @icon-height solid #f56c6c;
        border-left: @icon-width solid transparent;
        border-right: @icon-width solid transparent;
        content: '';
        left: 0;
        bottom: -@icon-height;
      }
    }
    .k-value{
      font-size: 20px;
      margin-left: 10px;
    }
  }
}
.k-text{
  line-height: 30px;
  text-indent: 2em;
  margin: 0 20px;
}
.k-table{
  margin: 20px 30px;
  border: 1px solid #ddd;
  line-height: 30px;
  dl{
    width: 100%;
    display: flex;
  }
  table{
    width: 100%;
  }
  th{
    border: 1px solid #fff;
    border-collapse: collapse;
  }
  td{
    border: 1px solid #eee;
    border-collapse: collapse;
    padding: 0 10px;
  }
  dt,
  dd{
    flex-grow: 1;
    padding: 0 10px;
  }
  th,dt{
    background: #eee;
    width: 100px;
    flex-grow: 0;
  }
  dt{
    border-top: 1px solid #fff;
  }
  dd{
    border-top: 1px solid #eee;
  }
  ol{
    padding-left: 1em;
    list-style: decimal inside;
  }

}
</style>
