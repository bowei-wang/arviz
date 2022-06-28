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
    
    
    const element = document.getElementById("639b4409-893a-4055-90f6-04bf53d4954a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '639b4409-893a-4055-90f6-04bf53d4954a' but no matching script tag was found.")
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
                  const docs_json = '{"1f2f52a5-29be-42e2-8373-5406a34331d6":{"defs":[],"roots":{"references":[{"attributes":{},"id":"18156","type":"PanTool"},{"attributes":{"callback":null},"id":"18162","type":"HoverTool"},{"attributes":{"axis_label":"ranked models","coordinates":null,"formatter":{"id":"18207"},"group":null,"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"18208"},"ticker":{"id":"18174"}},"id":"18151","type":"LinearAxis"},{"attributes":{"toolbar":{"id":"18224"},"toolbar_location":"above"},"id":"18225","type":"ToolbarBox"},{"attributes":{"source":{"id":"18176"}},"id":"18181","type":"CDSView"},{"attributes":{"coordinates":null,"group":null,"text":"Model comparison\\nhigher is better"},"id":"18204","type":"Title"},{"attributes":{},"id":"18218","type":"UnionRenderers"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18183","type":"MultiLine"},{"attributes":{"coordinates":null,"data_source":{"id":"18194"},"glyph":{"id":"18195"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18197"},"nonselection_glyph":{"id":"18196"},"view":{"id":"18199"}},"id":"18198","type":"GlyphRenderer"},{"attributes":{},"id":"18212","type":"UnionRenderers"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18164","type":"PolyAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18178","type":"Scatter"},{"attributes":{"tools":[{"id":"18155"},{"id":"18156"},{"id":"18157"},{"id":"18158"},{"id":"18159"},{"id":"18160"},{"id":"18161"},{"id":"18162"}]},"id":"18165","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18190","type":"Circle"},{"attributes":{"coordinates":null,"dimension":"height","group":null,"line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.68796724389903},"id":"18200","type":"Span"},{"attributes":{},"id":"18210","type":"BasicTickFormatter"},{"attributes":{},"id":"18145","type":"LinearScale"},{"attributes":{"label":{"value":"ELPD difference"},"renderers":[{"id":"18180"},{"id":"18186"}]},"id":"18202","type":"LegendItem"},{"attributes":{"click_policy":"hide","coordinates":null,"group":null,"items":[{"id":"18202"},{"id":"18203"}]},"id":"18201","type":"Legend"},{"attributes":{"axis_label":"elpd_loo (log)","coordinates":null,"formatter":{"id":"18210"},"group":null,"major_label_policy":{"id":"18211"},"ticker":{"id":"18148"}},"id":"18147","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18179","type":"Scatter"},{"attributes":{"data":{"x":{"__ndarray__":"/kMNnx6wPsCE0HHBgM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"18217"},"selection_policy":{"id":"18216"}},"id":"18188","type":"ColumnDataSource"},{"attributes":{},"id":"18207","type":"BasicTickFormatter"},{"attributes":{},"id":"18214","type":"UnionRenderers"},{"attributes":{"children":[{"id":"18225"},{"id":"18223"}]},"id":"18226","type":"Column"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18195","type":"MultiLine"},{"attributes":{"source":{"id":"18194"}},"id":"18199","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18196","type":"MultiLine"},{"attributes":{"data":{"x":{"__ndarray__":"hNBxwYDPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"18213"},"selection_policy":{"id":"18212"}},"id":"18176","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"18182"},"glyph":{"id":"18183"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18185"},"nonselection_glyph":{"id":"18184"},"view":{"id":"18187"}},"id":"18186","type":"GlyphRenderer"},{"attributes":{},"id":"18215","type":"Selection"},{"attributes":{},"id":"18208","type":"AllLabels"},{"attributes":{"data":{"xs":[[-30.89672005978525,-30.724396750606648]],"ys":[[-0.75,-0.75]]},"selected":{"id":"18215"},"selection_policy":{"id":"18214"}},"id":"18182","type":"ColumnDataSource"},{"attributes":{"above":[{"id":"18201"}],"below":[{"id":"18147"}],"center":[{"id":"18150"},{"id":"18154"}],"height":500,"left":[{"id":"18151"}],"output_backend":"webgl","renderers":[{"id":"18180"},{"id":"18186"},{"id":"18192"},{"id":"18198"},{"id":"18200"}],"title":{"id":"18204"},"toolbar":{"id":"18165"},"toolbar_location":null,"width":500,"x_range":{"id":"18139"},"x_scale":{"id":"18143"},"y_range":{"id":"18141"},"y_scale":{"id":"18145"}},"id":"18138","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"18164"}},"id":"18159","type":"LassoSelectTool"},{"attributes":{},"id":"18217","type":"Selection"},{"attributes":{},"id":"18160","type":"UndoTool"},{"attributes":{"data":{"xs":[[-32.053182324911575,-29.322752162886484],[-32.237685546932575,-29.38343126345932]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"18219"},"selection_policy":{"id":"18218"}},"id":"18194","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18197","type":"MultiLine"},{"attributes":{"source":{"id":"18188"}},"id":"18193","type":"CDSView"},{"attributes":{},"id":"18211","type":"AllLabels"},{"attributes":{},"id":"18213","type":"Selection"},{"attributes":{},"id":"18143","type":"LinearScale"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18163","type":"BoxAnnotation"},{"attributes":{"ticks":[0.0,-1.0]},"id":"18174","type":"FixedTicker"},{"attributes":{},"id":"18219","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"18188"},"glyph":{"id":"18189"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18191"},"nonselection_glyph":{"id":"18190"},"view":{"id":"18193"}},"id":"18192","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"18151"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"18154","type":"Grid"},{"attributes":{},"id":"18139","type":"DataRange1d"},{"attributes":{"source":{"id":"18182"}},"id":"18187","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":null},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18191","type":"Circle"},{"attributes":{"toolbars":[{"id":"18165"}],"tools":[{"id":"18155"},{"id":"18156"},{"id":"18157"},{"id":"18158"},{"id":"18159"},{"id":"18160"},{"id":"18161"},{"id":"18162"}]},"id":"18224","type":"ProxyToolbar"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18189","type":"Circle"},{"attributes":{},"id":"18158","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"data_source":{"id":"18176"},"glyph":{"id":"18177"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18179"},"nonselection_glyph":{"id":"18178"},"view":{"id":"18181"}},"id":"18180","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"18147"},"coordinates":null,"group":null,"ticker":null},"id":"18150","type":"Grid"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18184","type":"MultiLine"},{"attributes":{},"id":"18148","type":"BasicTicker"},{"attributes":{"children":[[{"id":"18138"},0,0]]},"id":"18223","type":"GridBox"},{"attributes":{},"id":"18161","type":"SaveTool"},{"attributes":{},"id":"18155","type":"ResetTool"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18177","type":"Scatter"},{"attributes":{},"id":"18216","type":"UnionRenderers"},{"attributes":{"end":0.5,"start":-1.5},"id":"18141","type":"DataRange1d"},{"attributes":{"overlay":{"id":"18163"}},"id":"18157","type":"BoxZoomTool"},{"attributes":{"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18185","type":"MultiLine"},{"attributes":{"label":{"value":"ELPD"},"renderers":[{"id":"18192"},{"id":"18198"}]},"id":"18203","type":"LegendItem"}],"root_ids":["18226"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"1f2f52a5-29be-42e2-8373-5406a34331d6","root_ids":["18226"],"roots":{"18226":"639b4409-893a-4055-90f6-04bf53d4954a"}}];
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