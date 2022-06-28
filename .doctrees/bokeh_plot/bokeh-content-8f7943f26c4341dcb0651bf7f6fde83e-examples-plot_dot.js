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
    
    
    const element = document.getElementById("8e5e7039-c848-4f55-a2a1-0b29bb6f9507");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '8e5e7039-c848-4f55-a2a1-0b29bb6f9507' but no matching script tag was found.")
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
                  const docs_json = '{"4e5a948a-0fbd-4e78-9edd-2ff0e0e71f5a":{"defs":[],"roots":{"references":[{"attributes":{},"id":"20532","type":"AllLabels"},{"attributes":{"callback":null},"id":"20492","type":"HoverTool"},{"attributes":{},"id":"20469","type":"DataRange1d"},{"attributes":{"line_alpha":0.1,"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"20506","type":"Line"},{"attributes":{},"id":"20482","type":"BasicTicker"},{"attributes":{"coordinates":null,"group":null},"id":"20528","type":"Title"},{"attributes":{"overlay":{"id":"20494"}},"id":"20489","type":"LassoSelectTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"20519","type":"Circle"},{"attributes":{},"id":"20531","type":"BasicTickFormatter"},{"attributes":{},"id":"20478","type":"BasicTicker"},{"attributes":{},"id":"20475","type":"LinearScale"},{"attributes":{},"id":"20488","type":"WheelZoomTool"},{"attributes":{"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"20505","type":"Line"},{"attributes":{},"id":"20538","type":"UnionRenderers"},{"attributes":{},"id":"20542","type":"UnionRenderers"},{"attributes":{},"id":"20473","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"20524","type":"Circle"},{"attributes":{},"id":"20536","type":"UnionRenderers"},{"attributes":{"source":{"id":"20516"}},"id":"20521","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"20510"},"glyph":{"id":"20511"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20513"},"nonselection_glyph":{"id":"20512"},"view":{"id":"20515"}},"id":"20514","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-1.9040259413199274,1.8078221014364193],"y":[0,0]},"selected":{"id":"20537"},"selection_policy":{"id":"20536"}},"id":"20504","type":"ColumnDataSource"},{"attributes":{"tools":[{"id":"20485"},{"id":"20486"},{"id":"20487"},{"id":"20488"},{"id":"20489"},{"id":"20490"},{"id":"20491"},{"id":"20492"}]},"id":"20495","type":"Toolbar"},{"attributes":{"below":[{"id":"20477"}],"center":[{"id":"20480"},{"id":"20484"}],"height":360,"left":[{"id":"20481"}],"match_aspect":true,"output_backend":"webgl","renderers":[{"id":"20508"},{"id":"20514"},{"id":"20520"},{"id":"20526"}],"title":{"id":"20528"},"toolbar":{"id":"20495"},"toolbar_location":null,"width":720,"x_range":{"id":"20469"},"x_scale":{"id":"20473"},"y_range":{"id":"20471"},"y_scale":{"id":"20475"}},"id":"20468","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"20535","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"#fa7c17"},"line_alpha":{"value":0.2},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"20525","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"20504"},"glyph":{"id":"20505"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20507"},"nonselection_glyph":{"id":"20506"},"view":{"id":"20509"}},"id":"20508","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"20517","type":"Circle"},{"attributes":{},"id":"20486","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"20518","type":"Circle"},{"attributes":{"children":[[{"id":"20468"},0,0]]},"id":"20547","type":"GridBox"},{"attributes":{},"id":"20541","type":"Selection"},{"attributes":{},"id":"20537","type":"Selection"},{"attributes":{"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"20511","type":"Line"},{"attributes":{"source":{"id":"20504"}},"id":"20509","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"20512","type":"Line"},{"attributes":{"coordinates":null,"data_source":{"id":"20522"},"glyph":{"id":"20523"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20525"},"nonselection_glyph":{"id":"20524"},"view":{"id":"20527"}},"id":"20526","type":"GlyphRenderer"},{"attributes":{"source":{"id":"20510"}},"id":"20515","type":"CDSView"},{"attributes":{},"id":"20471","type":"DataRange1d"},{"attributes":{},"id":"20490","type":"UndoTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20493","type":"BoxAnnotation"},{"attributes":{"data":{"x":[-0.667808853419204,0.6382905789859445],"y":[0,0]},"selected":{"id":"20539"},"selection_policy":{"id":"20538"}},"id":"20510","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#fa7c17"},"hatch_color":{"value":"#fa7c17"},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"20523","type":"Circle"},{"attributes":{},"id":"20540","type":"UnionRenderers"},{"attributes":{"source":{"id":"20522"}},"id":"20527","type":"CDSView"},{"attributes":{},"id":"20534","type":"BasicTickFormatter"},{"attributes":{"toolbar":{"id":"20548"},"toolbar_location":"above"},"id":"20549","type":"ToolbarBox"},{"attributes":{"children":[{"id":"20549"},{"id":"20547"}]},"id":"20550","type":"Column"},{"attributes":{"line_alpha":0.2,"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"20513","type":"Line"},{"attributes":{},"id":"20491","type":"SaveTool"},{"attributes":{"line_alpha":0.2,"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"20507","type":"Line"},{"attributes":{"data":{"x":{"__ndarray__":"FRx+8A5uAsDsq3R/ipD6v+yrdH+KkPq/7Kt0f4qQ+r80ET6N8b3yvzQRPo3xvfK/NBE+jfG98r80ET6N8b3yv6IYAQonyui/ohgBCifK6L+iGAEKJ8rov6IYAQonyui/ohgBCifK6L+iGAEKJ8rov3TEbrelstm/dMRut6Wy2b90xG63pbLZv3TEbrelstm/dMRut6Wy2b90xG63pbLZv3TEbrelstm/WhicSp3OqL9aGJxKnc6ov1oYnEqdzqi/WhicSp3OqL9aGJxKnc6ov1oYnEqdzqi/WhicSp3OqL9EFimaSU/TP0QWKZpJT9M/RBYpmklP0z9EFimaSU/TP0QWKZpJT9M/RBYpmklP0z9EFimaSU/TP456/k5DI+Q/jnr+TkMj5D+Oev5OQyPkP456/k5DI+Q/jnr+TkMj5D/ZQm3RXADwP9lCbdFcAPA/2UJt0VwA8D/ZQm3RXADwP9By6jDXYPY/0HLqMNdg9j/Qcuow12D2P2DXuW8eufw/YNe5bx65/D+lK8ris3EDQA==","dtype":"float64","order":"little","shape":[50]},"y":{"__ndarray__":"Hkoo7ZC0xD8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yPx5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z/qZRdGR3j8Px5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z/qZRdGR3j8Pzi8sMC10gBAHkoo7ZC0xD8tb7xj2Q7fP6Zccii14ek/2kCDz/4d8j9iU80KI0v3P+plF0ZHePw/OLywwLXSAEAeSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yP2JTzQojS/c/6mUXRkd4/D84vLDAtdIAQB5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yPx5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpPx5KKO2QtMQ/LW+8Y9kO3z8eSijtkLTEPw==","dtype":"float64","order":"little","shape":[50]}},"selected":{"id":"20543"},"selection_policy":{"id":"20542"}},"id":"20522","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"20493"}},"id":"20487","type":"BoxZoomTool"},{"attributes":{"toolbars":[{"id":"20495"}],"tools":[{"id":"20485"},{"id":"20486"},{"id":"20487"},{"id":"20488"},{"id":"20489"},{"id":"20490"},{"id":"20491"},{"id":"20492"}]},"id":"20548","type":"ProxyToolbar"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20494","type":"PolyAnnotation"},{"attributes":{},"id":"20539","type":"Selection"},{"attributes":{},"id":"20485","type":"ResetTool"},{"attributes":{"coordinates":null,"data_source":{"id":"20516"},"glyph":{"id":"20517"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20519"},"nonselection_glyph":{"id":"20518"},"view":{"id":"20521"}},"id":"20520","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"20477"},"coordinates":null,"group":null,"ticker":null},"id":"20480","type":"Grid"},{"attributes":{},"id":"20543","type":"Selection"},{"attributes":{"axis":{"id":"20481"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20484","type":"Grid"},{"attributes":{"coordinates":null,"formatter":{"id":"20531"},"group":null,"major_label_policy":{"id":"20532"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"20482"}},"id":"20481","type":"LinearAxis"},{"attributes":{"data":{},"selected":{"id":"20541"},"selection_policy":{"id":"20540"}},"id":"20516","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"formatter":{"id":"20534"},"group":null,"major_label_policy":{"id":"20535"},"ticker":{"id":"20478"}},"id":"20477","type":"LinearAxis"}],"root_ids":["20550"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"4e5a948a-0fbd-4e78-9edd-2ff0e0e71f5a","root_ids":["20550"],"roots":{"20550":"8e5e7039-c848-4f55-a2a1-0b29bb6f9507"}}];
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