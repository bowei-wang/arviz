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
    
    
    const element = document.getElementById("f1589956-af1c-449f-9fe4-48ec906d0240");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f1589956-af1c-449f-9fe4-48ec906d0240' but no matching script tag was found.")
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
                  const docs_json = '{"1b863a5c-080c-4a18-a9af-c705cb4d0b45":{"defs":[],"roots":{"references":[{"attributes":{"children":[[{"id":"21078"},0,0]]},"id":"21142","type":"GridBox"},{"attributes":{},"id":"21134","type":"AllLabels"},{"attributes":{},"id":"21133","type":"BasicTickFormatter"},{"attributes":{"toolbars":[{"id":"21105"}],"tools":[{"id":"21095"},{"id":"21096"},{"id":"21097"},{"id":"21098"},{"id":"21099"},{"id":"21100"},{"id":"21101"},{"id":"21102"}]},"id":"21143","type":"ProxyToolbar"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21104","type":"PolyAnnotation"},{"attributes":{"axis":{"id":"21091"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"21094","type":"Grid"},{"attributes":{},"id":"21136","type":"Selection"},{"attributes":{},"id":"21081","type":"DataRange1d"},{"attributes":{"coordinates":null,"data_source":{"id":"21114"},"glyph":{"id":"21115"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21117"},"nonselection_glyph":{"id":"21116"},"view":{"id":"21119"}},"id":"21118","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21103","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21115","type":"Circle"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"21133"},"group":null,"major_label_policy":{"id":"21134"},"ticker":{"id":"21088"}},"id":"21087","type":"LinearAxis"},{"attributes":{},"id":"21092","type":"BasicTicker"},{"attributes":{},"id":"21083","type":"LinearScale"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"21124","type":"Span"},{"attributes":{"below":[{"id":"21087"}],"center":[{"id":"21090"},{"id":"21094"}],"height":500,"left":[{"id":"21091"}],"output_backend":"webgl","renderers":[{"id":"21118"},{"id":"21122"},{"id":"21124"},{"id":"21125"}],"title":{"id":"21126"},"toolbar":{"id":"21105"},"toolbar_location":null,"width":500,"x_range":{"id":"21079"},"x_scale":{"id":"21083"},"y_range":{"id":"21081"},"y_scale":{"id":"21085"}},"id":"21078","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21136"},"selection_policy":{"id":"21135"}},"id":"21114","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"21103"}},"id":"21097","type":"BoxZoomTool"},{"attributes":{},"id":"21100","type":"UndoTool"},{"attributes":{"children":[{"id":"21144"},{"id":"21142"}]},"id":"21145","type":"Column"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"21138"},"selection_policy":{"id":"21137"}},"id":"21121","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"21102","type":"HoverTool"},{"attributes":{},"id":"21130","type":"BasicTickFormatter"},{"attributes":{},"id":"21131","type":"AllLabels"},{"attributes":{"coordinates":null,"data_source":{"id":"21121"},"glyph":{"id":"21120"},"group":null,"hover_glyph":null,"view":{"id":"21123"}},"id":"21122","type":"GlyphRenderer"},{"attributes":{},"id":"21138","type":"Selection"},{"attributes":{"tools":[{"id":"21095"},{"id":"21096"},{"id":"21097"},{"id":"21098"},{"id":"21099"},{"id":"21100"},{"id":"21101"},{"id":"21102"}]},"id":"21105","type":"Toolbar"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"21120","type":"Scatter"},{"attributes":{},"id":"21079","type":"DataRange1d"},{"attributes":{},"id":"21135","type":"UnionRenderers"},{"attributes":{"axis_label":"ESS for small intervals","coordinates":null,"formatter":{"id":"21130"},"group":null,"major_label_policy":{"id":"21131"},"ticker":{"id":"21092"}},"id":"21091","type":"LinearAxis"},{"attributes":{"axis":{"id":"21087"},"coordinates":null,"group":null,"ticker":null},"id":"21090","type":"Grid"},{"attributes":{},"id":"21137","type":"UnionRenderers"},{"attributes":{},"id":"21095","type":"ResetTool"},{"attributes":{},"id":"21101","type":"SaveTool"},{"attributes":{},"id":"21098","type":"WheelZoomTool"},{"attributes":{},"id":"21085","type":"LinearScale"},{"attributes":{"source":{"id":"21114"}},"id":"21119","type":"CDSView"},{"attributes":{"overlay":{"id":"21104"}},"id":"21099","type":"LassoSelectTool"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"21125","type":"Span"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21117","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21116","type":"Circle"},{"attributes":{"source":{"id":"21121"}},"id":"21123","type":"CDSView"},{"attributes":{},"id":"21096","type":"PanTool"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"21126","type":"Title"},{"attributes":{},"id":"21088","type":"BasicTicker"},{"attributes":{"toolbar":{"id":"21143"},"toolbar_location":"above"},"id":"21144","type":"ToolbarBox"}],"root_ids":["21145"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"1b863a5c-080c-4a18-a9af-c705cb4d0b45","root_ids":["21145"],"roots":{"21145":"f1589956-af1c-449f-9fe4-48ec906d0240"}}];
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