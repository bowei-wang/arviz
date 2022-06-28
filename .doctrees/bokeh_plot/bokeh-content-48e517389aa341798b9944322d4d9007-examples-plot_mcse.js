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
    
    
    const element = document.getElementById("c03a8943-87b3-4371-8f8a-5cc327b32551");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c03a8943-87b3-4371-8f8a-5cc327b32551' but no matching script tag was found.")
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
                  const docs_json = '{"88da1065-0366-4ea6-9f48-51c588480063":{"defs":[],"roots":{"references":[{"attributes":{},"id":"41809","type":"LinearScale"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"41887"},"group":null,"major_label_policy":{"id":"41888"},"ticker":{"id":"41812"}},"id":"41811","type":"LinearAxis"},{"attributes":{"axis_label":"MCSE for quantiles","coordinates":null,"formatter":{"id":"41870"},"group":null,"major_label_policy":{"id":"41871"},"ticker":{"id":"41780"}},"id":"41779","type":"LinearAxis"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"41866","type":"Title"},{"attributes":{"axis":{"id":"41811"},"coordinates":null,"group":null,"ticker":null},"id":"41814","type":"Grid"},{"attributes":{"axis_label":"MCSE for quantiles","coordinates":null,"formatter":{"id":"41884"},"group":null,"major_label_policy":{"id":"41885"},"ticker":{"id":"41816"}},"id":"41815","type":"LinearAxis"},{"attributes":{"toolbars":[{"id":"41793"},{"id":"41829"}],"tools":[{"id":"41783"},{"id":"41784"},{"id":"41785"},{"id":"41786"},{"id":"41787"},{"id":"41788"},{"id":"41789"},{"id":"41790"},{"id":"41819"},{"id":"41820"},{"id":"41821"},{"id":"41822"},{"id":"41823"},{"id":"41824"},{"id":"41825"},{"id":"41826"}]},"id":"41897","type":"ProxyToolbar"},{"attributes":{},"id":"41877","type":"UnionRenderers"},{"attributes":{},"id":"41812","type":"BasicTicker"},{"attributes":{"callback":null},"id":"41826","type":"HoverTool"},{"attributes":{},"id":"41773","type":"LinearScale"},{"attributes":{},"id":"41878","type":"Selection"},{"attributes":{"axis":{"id":"41775"},"coordinates":null,"group":null,"ticker":null},"id":"41778","type":"Grid"},{"attributes":{"toolbar":{"id":"41897"},"toolbar_location":"above"},"id":"41898","type":"ToolbarBox"},{"attributes":{"axis":{"id":"41815"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"41818","type":"Grid"},{"attributes":{},"id":"41884","type":"BasicTickFormatter"},{"attributes":{},"id":"41816","type":"BasicTicker"},{"attributes":{"source":{"id":"41838"}},"id":"41843","type":"CDSView"},{"attributes":{"overlay":{"id":"41827"}},"id":"41821","type":"BoxZoomTool"},{"attributes":{},"id":"41885","type":"AllLabels"},{"attributes":{},"id":"41820","type":"PanTool"},{"attributes":{},"id":"41819","type":"ResetTool"},{"attributes":{},"id":"41784","type":"PanTool"},{"attributes":{},"id":"41825","type":"SaveTool"},{"attributes":{},"id":"41887","type":"BasicTickFormatter"},{"attributes":{},"id":"41803","type":"DataRange1d"},{"attributes":{},"id":"41822","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"41828"}},"id":"41823","type":"LassoSelectTool"},{"attributes":{},"id":"41824","type":"UndoTool"},{"attributes":{},"id":"41888","type":"AllLabels"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"41846","type":"Span"},{"attributes":{"children":[{"id":"41898"},{"id":"41896"}]},"id":"41899","type":"Column"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"41827","type":"BoxAnnotation"},{"attributes":{"children":[[{"id":"41766"},0,0],[{"id":"41802"},0,1]]},"id":"41896","type":"GridBox"},{"attributes":{"coordinates":null,"data_source":{"id":"41853"},"glyph":{"id":"41854"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"41856"},"nonselection_glyph":{"id":"41855"},"view":{"id":"41858"}},"id":"41857","type":"GlyphRenderer"},{"attributes":{},"id":"41780","type":"BasicTicker"},{"attributes":{},"id":"41889","type":"UnionRenderers"},{"attributes":{"axis":{"id":"41779"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"41782","type":"Grid"},{"attributes":{"coordinates":null,"data_source":{"id":"41848"},"glyph":{"id":"41847"},"group":null,"hover_glyph":null,"view":{"id":"41850"}},"id":"41849","type":"GlyphRenderer"},{"attributes":{},"id":"41788","type":"UndoTool"},{"attributes":{},"id":"41890","type":"Selection"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"41847","type":"Scatter"},{"attributes":{"overlay":{"id":"41791"}},"id":"41785","type":"BoxZoomTool"},{"attributes":{},"id":"41783","type":"ResetTool"},{"attributes":{"end":1,"start":-0.05},"id":"41805","type":"DataRange1d"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"41851","type":"Title"},{"attributes":{"callback":null},"id":"41790","type":"HoverTool"},{"attributes":{},"id":"41786","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"41828","type":"PolyAnnotation"},{"attributes":{"source":{"id":"41848"}},"id":"41850","type":"CDSView"},{"attributes":{},"id":"41776","type":"BasicTicker"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"41860","type":"Span"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"41876"},"selection_policy":{"id":"41875"}},"id":"41838","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"41792"}},"id":"41787","type":"LassoSelectTool"},{"attributes":{},"id":"41789","type":"SaveTool"},{"attributes":{"below":[{"id":"41775"}],"center":[{"id":"41778"},{"id":"41782"}],"height":500,"left":[{"id":"41779"}],"output_backend":"webgl","renderers":[{"id":"41842"},{"id":"41844"},{"id":"41845"},{"id":"41846"},{"id":"41849"}],"title":{"id":"41851"},"toolbar":{"id":"41793"},"toolbar_location":null,"width":500,"x_range":{"id":"41767"},"x_scale":{"id":"41771"},"y_range":{"id":"41769"},"y_scale":{"id":"41773"}},"id":"41766","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"41791","type":"BoxAnnotation"},{"attributes":{},"id":"41870","type":"BasicTickFormatter"},{"attributes":{},"id":"41807","type":"LinearScale"},{"attributes":{"end":1,"start":-0.05},"id":"41769","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41854","type":"Circle"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"41859","type":"Span"},{"attributes":{},"id":"41871","type":"AllLabels"},{"attributes":{"below":[{"id":"41811"}],"center":[{"id":"41814"},{"id":"41818"}],"height":500,"left":[{"id":"41815"}],"output_backend":"webgl","renderers":[{"id":"41857"},{"id":"41859"},{"id":"41860"},{"id":"41861"},{"id":"41864"}],"title":{"id":"41866"},"toolbar":{"id":"41829"},"toolbar_location":null,"width":500,"x_range":{"id":"41803"},"x_scale":{"id":"41807"},"y_range":{"id":"41805"},"y_scale":{"id":"41809"}},"id":"41802","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41840","type":"Circle"},{"attributes":{},"id":"41891","type":"UnionRenderers"},{"attributes":{},"id":"41873","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41841","type":"Circle"},{"attributes":{},"id":"41892","type":"Selection"},{"attributes":{"source":{"id":"41863"}},"id":"41865","type":"CDSView"},{"attributes":{},"id":"41874","type":"AllLabels"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"41892"},"selection_policy":{"id":"41891"}},"id":"41863","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41856","type":"Circle"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"41861","type":"Span"},{"attributes":{"coordinates":null,"data_source":{"id":"41838"},"glyph":{"id":"41839"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"41841"},"nonselection_glyph":{"id":"41840"},"view":{"id":"41843"}},"id":"41842","type":"GlyphRenderer"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"41873"},"group":null,"major_label_policy":{"id":"41874"},"ticker":{"id":"41776"}},"id":"41775","type":"LinearAxis"},{"attributes":{},"id":"41771","type":"LinearScale"},{"attributes":{"tools":[{"id":"41783"},{"id":"41784"},{"id":"41785"},{"id":"41786"},{"id":"41787"},{"id":"41788"},{"id":"41789"},{"id":"41790"}]},"id":"41793","type":"Toolbar"},{"attributes":{},"id":"41875","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41839","type":"Circle"},{"attributes":{},"id":"41876","type":"Selection"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"41878"},"selection_policy":{"id":"41877"}},"id":"41848","type":"ColumnDataSource"},{"attributes":{"tools":[{"id":"41819"},{"id":"41820"},{"id":"41821"},{"id":"41822"},{"id":"41823"},{"id":"41824"},{"id":"41825"},{"id":"41826"}]},"id":"41829","type":"Toolbar"},{"attributes":{},"id":"41767","type":"DataRange1d"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"41845","type":"Span"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"41844","type":"Span"},{"attributes":{"source":{"id":"41853"}},"id":"41858","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"41890"},"selection_policy":{"id":"41889"}},"id":"41853","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"41863"},"glyph":{"id":"41862"},"group":null,"hover_glyph":null,"view":{"id":"41865"}},"id":"41864","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41855","type":"Circle"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"41862","type":"Scatter"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"41792","type":"PolyAnnotation"}],"root_ids":["41899"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"88da1065-0366-4ea6-9f48-51c588480063","root_ids":["41899"],"roots":{"41899":"c03a8943-87b3-4371-8f8a-5cc327b32551"}}];
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