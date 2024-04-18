import "./index.scss";
const Basic = () => {
  return (
    <div>
      {/* 元素选择器 类选择器 ID选择器 */}
      <div className="div-border">
        <h4> 元素选择器-h4</h4>
        <p className="classSelector">类选择器-className .classSelector</p>
        <p id="idSelector">ID选择器-id .idSelector</p>
      </div>

      {/* 类选择器-最常用 */}
      <div className="div-border">
        <p className="purple">类选择器-紫色 .purple</p>
        <p className="blue">类选择器-蓝色 .blue </p>
        <p className="yellow">类选择器-黄色 .yellow</p>
        {/* id选择器-id必须唯一 */}
      </div>

      {/* 可以公用一个元素选择器  */}
      <div className="div-border">
        <nav className="blue">nav元素选择器-公用蓝色选择器 .nav .blue</nav>
        <header className="blue">
          header元素选择器-公用蓝色选择器 .header .blue
        </header>
        <footer className="blue">
          footer元素选择器-公用蓝色选择器 .footer .blue
        </footer>
      </div>

      {/* 层级关系 */}
      <div className="div-border">
        <div className="parent">
          <div className="child">
            层级关系-父类选择器-子类选择器 .parent .child{" "}
          </div>
        </div>
        <div className="child">层级关系-子类选择器 .child</div>
      </div>

      {/* 同一个元素分类多个类 */}
      <div className="div-border">
        <div className="violet text-lg text-center">
          复杂样式-同一个元素分类多个类 violet text-lg text-center
        </div>
      </div>

      {/* 颜色，这里介绍RGB HEX */}
      <div className="div-border">
        <div className="rgb">颜色-用RGB表示颜色</div>
        <div className="hex">颜色-用HEX表示颜色</div>
      </div>

      {/* 颜色，背景颜色 边框颜色*/}
      <div className="div-border">
        <div className="backgournd-color">
          颜色-背景颜色 background-color: aqua
        </div>
        <div className="border-color">
          颜色-边框颜色 border: 3px solid #eb46e0
        </div>
      </div>

      {/* 颜色，透明度*/}
      <div className="div-border">
        <div className="background-color text-opacity">
          颜色透明度 color: rgb(235,70,224,0.5)
        </div>
        <div className="background-color opacity">
          opacity调节整体透明度 opacity: 0.5;
        </div>
      </div>

      {/* 字体font-family 字大小字高字重 font-size font-height font-weight*/}
      <div className="div-border">
        <p className="text-1">
          字体 font-family: 'Courier New', Courier, monospace
        </p>
        <p className="text-2">字大小 行高 font-size: 24px line-height: 32px</p>
        <p className="text-3">
          字重 font-weight: 7 font-style: italic text-decoration: line-through
        </p>
      </div>

      {/* 盒子模型 */}
      <div className="div-border">
        <div className="box-model">盒子模型</div>
      </div>

      {/* display 布局 */}
      <div className="div-border">
        <div>默认块级-独占一行：div</div>
        <p>默认块级-独占一行：p</p>
        <h1>默认块级-独占一行：h1</h1>
        <a href="https://www.baidu.com"> 默认内联-不独占一行：a</a>
        <span>默认内联-不独占一行：span</span>
        <br></br>
        <span className="block">手动块级-独占一行：.block </span>
        <div className="inline">手动内联-不独占一行：.inline </div>
        <div className="inline-block">手动内联块级-设置宽高：.inline-block</div>
      </div>
      {/* flex 布局 */}
      <div className="div-border">
        <div className="flex gap ">
          <div>flex布局 默认水平：项目1</div>
          <div>flex布局 默认水平：项目2</div>
          <div>flex布局 默认水平：项目3</div>
        </div>
        <div className="flex">
          <div className="flex-item">flex布局 项目1-flex 1：flex-item</div>
          <div className="flex-item">flex布局 项目2-flex 1：flex-item</div>
          <div className="flex-item">flex布局 项目3-flex 1：flex-item</div>
        </div>
        <div className="flex-direction">
          <div>flex布局 flex-direction-项目1： flex-direction:column</div>
          <div>flex布局 flex-direction-项目2： flex-direction:column</div>
          <div>flex布局 flex-direction-项目3： flex-direction:column</div>
        </div>
        <div className="flex gap">
          <div>flex 默认水平+间距gap-项目1: gap</div>
          <div>flex 默认水平+间距gap-项目2: gap</div>
          <div>flex 默认水平+间距gap-项目3: gap</div>
        </div>
        <div className="flex justify-content">
          <div>flex 主轴 交叉轴练习-项目1</div>
          <div>flex 主轴 交叉轴练习-项目2</div>
          <div>flex 主轴 交叉轴练习-项目3</div>
        </div>
      </div>
      {/* grid 布局 */}
      <div className="div-border">
        <div className="grid">
          <div>grid布局 项目1</div>
          <div>grid布局 项目2</div>
          <div>grid布局 项目3</div>
          <div>grid布局 项目4</div>
          <div>grid布局 项目5</div>
          <div>grid布局 项目6</div>
          <div>grid布局 项目7</div>
          <div>grid布局 项目8</div>
          <div>grid布局 项目9</div>
        </div>
      </div>
      {/* 定位 */}
      <div className="div-border">
        <div className="fixed">
          <div>fixed固定定位</div>
        </div>
        <div>
          <div>absolute绝对定位 项目1</div>
          <div className="absolute">absolute绝对定位 项目2</div>
          <div>absolute绝对定位 项目3</div>
        </div>
        <div>
          <div>static静态定位 默认 项目1</div>
        </div>
        <div>
          <div>relative定位 项目1</div>
          <div className="relative">relative定位 项目2</div>
          <div>relative定位 项目3</div>
        </div>
      </div>
    </div>
  );
};

export default Basic;
