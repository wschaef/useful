
cons listCustomProperties = () => {
    var props = [].slice.call(document.styleSheets)
      .map((styleSheet) => [].slice.call(styleSheet.cssRules))
      .flat()
      .filter(cssRule => cssRule.type === 3) //assumption only referenced css contains css vars
      .map(cssRule => cssRule.styleSheet.rules)
      .map(cssRulesList => [].slice.call(cssRulesList))
      .flat()
      .filter(cssStyleRule => cssStyleRule.type === 1)
      .map(cssStyleRule => cssStyleRule.style)
      .map(cssStyleDeclaration => [].slice.call(cssStyleDeclaration))
      .flat()
    console.log(props)
    return props
  }
