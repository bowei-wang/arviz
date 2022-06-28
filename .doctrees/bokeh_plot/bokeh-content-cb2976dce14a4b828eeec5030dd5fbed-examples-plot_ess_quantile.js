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
    
    
    const element = document.getElementById("45577690-5a53-491b-b705-a7f46abdc5c9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '45577690-5a53-491b-b705-a7f46abdc5c9' but no matching script tag was found.")
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
                  const docs_json = '{"49f7ae90-a7fa-49ed-8f48-6af63724069d":{"defs":[],"roots":{"references":[{"attributes":{},"id":"21216","type":"PanTool"},{"attributes":{"axis_label":"ESS for quantiles","coordinates":null,"formatter":{"id":"21245"},"group":null,"major_label_policy":{"id":"21246"},"ticker":{"id":"21212"}},"id":"21211","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQC8UfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1ASsbCePPwnkB+Du/cq5qgQH8ihBoHoKBAjJ8qLZB5oECYlOwhLnyfQD8CvMP22p1A58Gm42rqnEALInuU09KdQICWYY7d25xA2A/0ZSlsnEBzLBEly1mdQE4F40OedZlAKS7heDC7m0BmB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21251"},"selection_policy":{"id":"21250"}},"id":"21234","type":"ColumnDataSource"},{"attributes":{},"id":"21251","type":"Selection"},{"attributes":{"toolbar":{"id":"21256"},"toolbar_location":"above"},"id":"21257","type":"ToolbarBox"},{"attributes":{"axis":{"id":"21211"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"21214","type":"Grid"},{"attributes":{"below":[{"id":"21207"}],"center":[{"id":"21210"},{"id":"21214"}],"height":500,"left":[{"id":"21211"}],"output_backend":"webgl","renderers":[{"id":"21238"},{"id":"21240"}],"title":{"id":"21241"},"toolbar":{"id":"21225"},"toolbar_location":null,"width":500,"x_range":{"id":"21199"},"x_scale":{"id":"21203"},"y_range":{"id":"21201"},"y_scale":{"id":"21205"}},"id":"21198","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"21215","type":"ResetTool"},{"attributes":{},"id":"21212","type":"BasicTicker"},{"attributes":{},"id":"21220","type":"UndoTool"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"21248"},"group":null,"major_label_policy":{"id":"21249"},"ticker":{"id":"21208"}},"id":"21207","type":"LinearAxis"},{"attributes":{"children":[{"id":"21257"},{"id":"21255"}]},"id":"21258","type":"Column"},{"attributes":{},"id":"21205","type":"LinearScale"},{"attributes":{"callback":null},"id":"21222","type":"HoverTool"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21224","type":"PolyAnnotation"},{"attributes":{},"id":"21221","type":"SaveTool"},{"attributes":{"toolbars":[{"id":"21225"}],"tools":[{"id":"21215"},{"id":"21216"},{"id":"21217"},{"id":"21218"},{"id":"21219"},{"id":"21220"},{"id":"21221"},{"id":"21222"}]},"id":"21256","type":"ProxyToolbar"},{"attributes":{},"id":"21199","type":"DataRange1d"},{"attributes":{"source":{"id":"21234"}},"id":"21239","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21235","type":"Circle"},{"attributes":{},"id":"21201","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21223","type":"BoxAnnotation"},{"attributes":{},"id":"21248","type":"BasicTickFormatter"},{"attributes":{},"id":"21245","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"21224"}},"id":"21219","type":"LassoSelectTool"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"21240","type":"Span"},{"attributes":{},"id":"21218","type":"WheelZoomTool"},{"attributes":{},"id":"21249","type":"AllLabels"},{"attributes":{"coordinates":null,"data_source":{"id":"21234"},"glyph":{"id":"21235"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21237"},"nonselection_glyph":{"id":"21236"},"view":{"id":"21239"}},"id":"21238","type":"GlyphRenderer"},{"attributes":{},"id":"21246","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21237","type":"Circle"},{"attributes":{"children":[[{"id":"21198"},0,0]]},"id":"21255","type":"GridBox"},{"attributes":{"coordinates":null,"group":null,"text":"sigma"},"id":"21241","type":"Title"},{"attributes":{},"id":"21250","type":"UnionRenderers"},{"attributes":{},"id":"21208","type":"BasicTicker"},{"attributes":{"tools":[{"id":"21215"},{"id":"21216"},{"id":"21217"},{"id":"21218"},{"id":"21219"},{"id":"21220"},{"id":"21221"},{"id":"21222"}]},"id":"21225","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21236","type":"Circle"},{"attributes":{},"id":"21203","type":"LinearScale"},{"attributes":{"overlay":{"id":"21223"}},"id":"21217","type":"BoxZoomTool"},{"attributes":{"axis":{"id":"21207"},"coordinates":null,"group":null,"ticker":null},"id":"21210","type":"Grid"}],"root_ids":["21258"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"49f7ae90-a7fa-49ed-8f48-6af63724069d","root_ids":["21258"],"roots":{"21258":"45577690-5a53-491b-b705-a7f46abdc5c9"}}];
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