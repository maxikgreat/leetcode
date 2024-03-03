/**
 * @param {string} selector
 * @return {{css: Function}}
 */
function $(selector) {
  const element = document.querySelector(selector)

  function css(prop, value) {
    this.style[prop] = value
  }

  return {
    css: css.bind(element),
  }
}

// const button = $('button')
//
// button.css
