(function() {
  const fn = function() {
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
    const element = document.getElementById("c3f85147-eda8-4a90-8870-67c9fc324cb8");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c3f85147-eda8-4a90-8870-67c9fc324cb8' but no matching script tag was found.")
        }
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.3.min.js"];
      const css_urls = [];
    
      const inline_js = [    function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                  const docs_json = '{"2a5b5eee-5701-4ef5-996c-64c1ac80f14b":{"defs":[],"roots":{"references":[{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gB+QFygcqb8AkvbM2OqMvwDAPZTAZEQ/ABNdkUAak78AFo4kwaykPwDgu3qf/FM/QBB6xSIVsb8AEruac6iQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"20673"},"selection_policy":{"id":"20672"}},"id":"20660","type":"ColumnDataSource"},{"attributes":{"source":{"id":"20660"}},"id":"20662","type":"CDSView"},{"attributes":{},"id":"20628","type":"LinearScale"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"20667"},"group":null,"major_label_policy":{"id":"20668"},"ticker":{"id":"20637"}},"id":"20636","type":"LinearAxis"},{"attributes":{},"id":"20643","type":"WheelZoomTool"},{"attributes":{},"id":"20645","type":"UndoTool"},{"attributes":{"callback":null},"id":"20647","type":"HoverTool"},{"attributes":{"coordinates":null,"data_source":{"id":"20660"},"glyph":{"id":"20659"},"group":null,"hover_glyph":null,"view":{"id":"20662"}},"id":"20661","type":"GlyphRenderer"},{"attributes":{},"id":"20673","type":"Selection"},{"attributes":{"axis":{"id":"20632"},"coordinates":null,"group":null,"ticker":null},"id":"20635","type":"Grid"},{"attributes":{"below":[{"id":"20632"}],"center":[{"id":"20635"},{"id":"20639"}],"height":288,"left":[{"id":"20636"}],"output_backend":"webgl","renderers":[{"id":"20661"}],"title":{"id":"20663"},"toolbar":{"id":"20650"},"toolbar_location":null,"width":432,"x_range":{"id":"20624"},"x_scale":{"id":"20628"},"y_range":{"id":"20626"},"y_scale":{"id":"20630"}},"id":"20623","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"20630","type":"LinearScale"},{"attributes":{},"id":"20637","type":"BasicTicker"},{"attributes":{},"id":"20641","type":"PanTool"},{"attributes":{},"id":"20667","type":"BasicTickFormatter"},{"attributes":{},"id":"20668","type":"AllLabels"},{"attributes":{},"id":"20672","type":"UnionRenderers"},{"attributes":{"children":[{"id":"20679"},{"id":"20677"}]},"id":"20680","type":"Column"},{"attributes":{"toolbar":{"id":"20678"},"toolbar_location":"above"},"id":"20679","type":"ToolbarBox"},{"attributes":{"children":[[{"id":"20623"},0,0]]},"id":"20677","type":"GridBox"},{"attributes":{},"id":"20640","type":"ResetTool"},{"attributes":{"overlay":{"id":"20649"}},"id":"20644","type":"LassoSelectTool"},{"attributes":{},"id":"20671","type":"AllLabels"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"20659","type":"Scatter"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20649","type":"PolyAnnotation"},{"attributes":{"coordinates":null,"group":null,"text":"Centered eight - Non centered eight"},"id":"20663","type":"Title"},{"attributes":{"axis":{"id":"20636"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20639","type":"Grid"},{"attributes":{"tools":[{"id":"20640"},{"id":"20641"},{"id":"20642"},{"id":"20643"},{"id":"20644"},{"id":"20645"},{"id":"20646"},{"id":"20647"}]},"id":"20650","type":"Toolbar"},{"attributes":{"toolbars":[{"id":"20650"}],"tools":[{"id":"20640"},{"id":"20641"},{"id":"20642"},{"id":"20643"},{"id":"20644"},{"id":"20645"},{"id":"20646"},{"id":"20647"}]},"id":"20678","type":"ProxyToolbar"},{"attributes":{},"id":"20624","type":"DataRange1d"},{"attributes":{"coordinates":null,"formatter":{"id":"20670"},"group":null,"major_label_policy":{"id":"20671"},"ticker":{"id":"20633"}},"id":"20632","type":"LinearAxis"},{"attributes":{},"id":"20646","type":"SaveTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20648","type":"BoxAnnotation"},{"attributes":{},"id":"20670","type":"BasicTickFormatter"},{"attributes":{},"id":"20626","type":"DataRange1d"},{"attributes":{"overlay":{"id":"20648"}},"id":"20642","type":"BoxZoomTool"},{"attributes":{},"id":"20633","type":"BasicTicker"}],"root_ids":["20680"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"2a5b5eee-5701-4ef5-996c-64c1ac80f14b","root_ids":["20680"],"roots":{"20680":"c3f85147-eda8-4a90-8870-67c9fc324cb8"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
    function(Bokeh) {
        }
      ];
    
      function run_inline_js() {
        for (let i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();