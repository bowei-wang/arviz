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
    
    
    const element = document.getElementById("93d69ca9-e169-474a-9e18-8fffd76c2f4b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '93d69ca9-e169-474a-9e18-8fffd76c2f4b' but no matching script tag was found.")
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
                  const docs_json = '{"03f23558-97d7-4004-8181-fd92a0da4a51":{"defs":[],"roots":{"references":[{"attributes":{"toolbars":[{"id":"17370"}],"tools":[{"id":"17360"},{"id":"17361"},{"id":"17362"},{"id":"17363"},{"id":"17364"},{"id":"17365"},{"id":"17366"},{"id":"17367"}]},"id":"17398","type":"ProxyToolbar"},{"attributes":{"children":[[{"id":"17343"},0,0]]},"id":"17397","type":"GridBox"},{"attributes":{"below":[{"id":"17352"}],"center":[{"id":"17355"},{"id":"17359"}],"height":288,"left":[{"id":"17356"}],"output_backend":"webgl","renderers":[{"id":"17381"}],"title":{"id":"17383"},"toolbar":{"id":"17370"},"toolbar_location":null,"width":432,"x_range":{"id":"17344"},"x_scale":{"id":"17348"},"y_range":{"id":"17346"},"y_scale":{"id":"17350"}},"id":"17343","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17365","type":"UndoTool"},{"attributes":{"axis":{"id":"17356"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"17359","type":"Grid"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17369","type":"PolyAnnotation"},{"attributes":{},"id":"17391","type":"AllLabels"},{"attributes":{"coordinates":null,"group":null,"text":"centered model - non centered model"},"id":"17383","type":"Title"},{"attributes":{},"id":"17346","type":"DataRange1d"},{"attributes":{"coordinates":null,"formatter":{"id":"17390"},"group":null,"major_label_policy":{"id":"17391"},"ticker":{"id":"17353"}},"id":"17352","type":"LinearAxis"},{"attributes":{},"id":"17353","type":"BasicTicker"},{"attributes":{"axis":{"id":"17352"},"coordinates":null,"group":null,"ticker":null},"id":"17355","type":"Grid"},{"attributes":{},"id":"17344","type":"DataRange1d"},{"attributes":{"callback":null},"id":"17367","type":"HoverTool"},{"attributes":{},"id":"17390","type":"BasicTickFormatter"},{"attributes":{},"id":"17361","type":"PanTool"},{"attributes":{},"id":"17350","type":"LinearScale"},{"attributes":{"toolbar":{"id":"17398"},"toolbar_location":"above"},"id":"17399","type":"ToolbarBox"},{"attributes":{},"id":"17366","type":"SaveTool"},{"attributes":{},"id":"17387","type":"BasicTickFormatter"},{"attributes":{},"id":"17360","type":"ResetTool"},{"attributes":{},"id":"17363","type":"WheelZoomTool"},{"attributes":{},"id":"17348","type":"LinearScale"},{"attributes":{},"id":"17357","type":"BasicTicker"},{"attributes":{"coordinates":null,"data_source":{"id":"17380"},"glyph":{"id":"17379"},"group":null,"hover_glyph":null,"view":{"id":"17382"}},"id":"17381","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"17369"}},"id":"17364","type":"LassoSelectTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17368","type":"BoxAnnotation"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gB+QFygcqb8AkvbM2OqMvwDAPZTAZEQ/ABNdkUAak78AFo4kwaykPwDgu3qf/FM/QBB6xSIVsb8AEruac6iQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"17393"},"selection_policy":{"id":"17392"}},"id":"17380","type":"ColumnDataSource"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"17387"},"group":null,"major_label_policy":{"id":"17388"},"ticker":{"id":"17357"}},"id":"17356","type":"LinearAxis"},{"attributes":{"children":[{"id":"17399"},{"id":"17397"}]},"id":"17400","type":"Column"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"17379","type":"Scatter"},{"attributes":{},"id":"17392","type":"UnionRenderers"},{"attributes":{},"id":"17388","type":"AllLabels"},{"attributes":{},"id":"17393","type":"Selection"},{"attributes":{"overlay":{"id":"17368"}},"id":"17362","type":"BoxZoomTool"},{"attributes":{"source":{"id":"17380"}},"id":"17382","type":"CDSView"},{"attributes":{"tools":[{"id":"17360"},{"id":"17361"},{"id":"17362"},{"id":"17363"},{"id":"17364"},{"id":"17365"},{"id":"17366"},{"id":"17367"}]},"id":"17370","type":"Toolbar"}],"root_ids":["17400"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"03f23558-97d7-4004-8181-fd92a0da4a51","root_ids":["17400"],"roots":{"17400":"93d69ca9-e169-474a-9e18-8fffd76c2f4b"}}];
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