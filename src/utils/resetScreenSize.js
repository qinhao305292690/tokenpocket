function resetScreenSize(dw, dh) {
  let init = () => {
    let _el = document.getElementById('app');
    console.log(_el, 'el');
    let hScale = window.innerHeight / (dh || 1080);
    let wScale = window.innerWidth / (dw || 1920);
    console.log(window.innerHeight, window.innerWidth)
    _el.style.transform = 'scaleX(' + wScale + ') scaleY(' + hScale + ')'

    _el.style.transformOrigin = "left top"
  }

  let lazyFun;

//窗口大小发送改变时自动调整

  window.onresize = () => {
    clearTimeout(lazyFun);

    lazyFun = setTimeout(() => {
      init()

    }, 600)
  }

  init()
}

export default resetScreenSize;
