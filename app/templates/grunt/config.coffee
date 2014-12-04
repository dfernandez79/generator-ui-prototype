module.exports =
  site:
    dir: '.generated'
    vendor: '<%%=config.site.dir%>/vendor'
    fonts: '<%%=config.site.dir%>/fonts'
  src:
    dir: 'src'
  livereloadPort: <%=props.livereloadPort%>
  serverPort: <%=props.serverPort%>
