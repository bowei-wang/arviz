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
    
    
    const element = document.getElementById("cc06c767-fae6-4040-a8a5-221bdc98e002");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'cc06c767-fae6-4040-a8a5-221bdc98e002' but no matching script tag was found.")
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
                  const docs_json = '{"b93a5d41-af77-4e8b-a923-4d73bc32f87f":{"defs":[],"roots":{"references":[{"attributes":{},"id":"48444","type":"UnionRenderers"},{"attributes":{},"id":"48459","type":"BasicTickFormatter"},{"attributes":{},"id":"48445","type":"Selection"},{"attributes":{},"id":"48460","type":"AllLabels"},{"attributes":{},"id":"48467","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48377","type":"VBar"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48375","type":"VBar"},{"attributes":{},"id":"48468","type":"Selection"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"48363","type":"BoxAnnotation"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48442"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48443"},"ticker":{"id":"48314"}},"id":"48313","type":"LinearAxis"},{"attributes":{},"id":"48446","type":"UnionRenderers"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4166666666666665},"id":"48387","type":"Span"},{"attributes":{},"id":"48447","type":"Selection"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48445"},"selection_policy":{"id":"48444"}},"id":"48374","type":"ColumnDataSource"},{"attributes":{},"id":"48461","type":"UnionRenderers"},{"attributes":{"tools":[{"id":"48355"},{"id":"48356"},{"id":"48357"},{"id":"48358"},{"id":"48359"},{"id":"48360"},{"id":"48361"},{"id":"48362"}]},"id":"48365","type":"Toolbar"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48382","type":"VBar"},{"attributes":{},"id":"48462","type":"Selection"},{"attributes":{"source":{"id":"48374"}},"id":"48379","type":"CDSView"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"48364","type":"PolyAnnotation"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"48404","type":"Title"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48447"},"selection_policy":{"id":"48446"}},"id":"48381","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"48381"},"glyph":{"id":"48382"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48384"},"nonselection_glyph":{"id":"48383"},"view":{"id":"48386"}},"id":"48385","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48389","type":"VBar"},{"attributes":{"source":{"id":"48381"}},"id":"48386","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"48374"},"glyph":{"id":"48375"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48377"},"nonselection_glyph":{"id":"48376"},"view":{"id":"48379"}},"id":"48378","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48376","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"48395"},"glyph":{"id":"48396"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48398"},"nonselection_glyph":{"id":"48397"},"view":{"id":"48400"}},"id":"48399","type":"GlyphRenderer"},{"attributes":{},"id":"48448","type":"UnionRenderers"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48451"},"selection_policy":{"id":"48450"}},"id":"48395","type":"ColumnDataSource"},{"attributes":{},"id":"48314","type":"BasicTicker"},{"attributes":{},"id":"48449","type":"Selection"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48384","type":"VBar"},{"attributes":{"source":{"id":"48395"}},"id":"48400","type":"CDSView"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.41666666666666663},"id":"48380","type":"Span"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48397","type":"VBar"},{"attributes":{},"id":"48463","type":"UnionRenderers"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.4166666666666665},"id":"48394","type":"Span"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48409","type":"VBar"},{"attributes":{"ticks":[0,1,2,3]},"id":"48434","type":"FixedTicker"},{"attributes":{},"id":"48464","type":"Selection"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48462"},"selection_policy":{"id":"48461"}},"id":"48406","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48407","type":"VBar"},{"attributes":{},"id":"48450","type":"UnionRenderers"},{"attributes":{},"id":"48451","type":"Selection"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48398","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48390","type":"VBar"},{"attributes":{"source":{"id":"48388"}},"id":"48393","type":"CDSView"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48396","type":"VBar"},{"attributes":{},"id":"48465","type":"UnionRenderers"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48383","type":"VBar"},{"attributes":{},"id":"48311","type":"LinearScale"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48391","type":"VBar"},{"attributes":{"axis":{"id":"48313"},"coordinates":null,"group":null,"ticker":null},"id":"48316","type":"Grid"},{"attributes":{},"id":"48466","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"48406"},"glyph":{"id":"48407"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48409"},"nonselection_glyph":{"id":"48408"},"view":{"id":"48411"}},"id":"48410","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48408","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.4166666666666665},"id":"48401","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48449"},"selection_policy":{"id":"48448"}},"id":"48388","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"48317"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"48320","type":"Grid"},{"attributes":{"coordinates":null,"data_source":{"id":"48388"},"glyph":{"id":"48389"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48391"},"nonselection_glyph":{"id":"48390"},"view":{"id":"48393"}},"id":"48392","type":"GlyphRenderer"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48439"},"group":null,"major_label_policy":{"id":"48440"},"ticker":{"id":"48402"}},"id":"48317","type":"LinearAxis"},{"attributes":{},"id":"48456","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"48474"},{"id":"48472"}]},"id":"48475","type":"Column"},{"attributes":{},"id":"48457","type":"AllLabels"},{"attributes":{},"id":"48321","type":"ResetTool"},{"attributes":{"overlay":{"id":"48329"}},"id":"48323","type":"BoxZoomTool"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48428","type":"VBar"},{"attributes":{"callback":null},"id":"48328","type":"HoverTool"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48430","type":"VBar"},{"attributes":{},"id":"48322","type":"PanTool"},{"attributes":{},"id":"48327","type":"SaveTool"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.480769230769231},"id":"48426","type":"Span"},{"attributes":{},"id":"48324","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.480769230769231},"id":"48433","type":"Span"},{"attributes":{"overlay":{"id":"48330"}},"id":"48325","type":"LassoSelectTool"},{"attributes":{},"id":"48326","type":"UndoTool"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48468"},"selection_policy":{"id":"48467"}},"id":"48427","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"48427"},"glyph":{"id":"48428"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48430"},"nonselection_glyph":{"id":"48429"},"view":{"id":"48432"}},"id":"48431","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"48347"},"coordinates":null,"group":null,"ticker":null},"id":"48350","type":"Grid"},{"attributes":{"source":{"id":"48427"}},"id":"48432","type":"CDSView"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48429","type":"VBar"},{"attributes":{"toolbars":[{"id":"48331"},{"id":"48365"}],"tools":[{"id":"48321"},{"id":"48322"},{"id":"48323"},{"id":"48324"},{"id":"48325"},{"id":"48326"},{"id":"48327"},{"id":"48328"},{"id":"48355"},{"id":"48356"},{"id":"48357"},{"id":"48358"},{"id":"48359"},{"id":"48360"},{"id":"48361"},{"id":"48362"}]},"id":"48473","type":"ProxyToolbar"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"48329","type":"BoxAnnotation"},{"attributes":{"toolbar":{"id":"48473"},"toolbar_location":"above"},"id":"48474","type":"ToolbarBox"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48423","type":"VBar"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"48330","type":"PolyAnnotation"},{"attributes":{},"id":"48345","type":"LinearScale"},{"attributes":{"coordinates":null,"data_source":{"id":"48413"},"glyph":{"id":"48414"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48416"},"nonselection_glyph":{"id":"48415"},"view":{"id":"48418"}},"id":"48417","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.48076923076923067},"id":"48412","type":"Span"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48456"},"group":null,"major_label_policy":{"id":"48457"},"ticker":{"id":"48434"}},"id":"48351","type":"LinearAxis"},{"attributes":{"source":{"id":"48420"}},"id":"48425","type":"CDSView"},{"attributes":{},"id":"48348","type":"BasicTicker"},{"attributes":{"below":[{"id":"48347"}],"center":[{"id":"48350"},{"id":"48354"},{"id":"48412"},{"id":"48419"},{"id":"48426"},{"id":"48433"}],"height":331,"left":[{"id":"48351"}],"output_backend":"webgl","renderers":[{"id":"48410"},{"id":"48417"},{"id":"48424"},{"id":"48431"}],"title":{"id":"48436"},"toolbar":{"id":"48365"},"toolbar_location":null,"width":496,"x_range":{"id":"48305"},"x_scale":{"id":"48343"},"y_range":{"id":"48307"},"y_scale":{"id":"48345"}},"id":"48340","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48464"},"selection_policy":{"id":"48463"}},"id":"48413","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48421","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48415","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48422","type":"VBar"},{"attributes":{},"id":"48360","type":"UndoTool"},{"attributes":{},"id":"48439","type":"BasicTickFormatter"},{"attributes":{"tools":[{"id":"48321"},{"id":"48322"},{"id":"48323"},{"id":"48324"},{"id":"48325"},{"id":"48326"},{"id":"48327"},{"id":"48328"}]},"id":"48331","type":"Toolbar"},{"attributes":{},"id":"48440","type":"AllLabels"},{"attributes":{},"id":"48309","type":"LinearScale"},{"attributes":{"callback":null},"id":"48362","type":"HoverTool"},{"attributes":{},"id":"48442","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48459"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48460"},"ticker":{"id":"48348"}},"id":"48347","type":"LinearAxis"},{"attributes":{"overlay":{"id":"48364"}},"id":"48359","type":"LassoSelectTool"},{"attributes":{},"id":"48443","type":"AllLabels"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4807692307692308},"id":"48419","type":"Span"},{"attributes":{"source":{"id":"48413"}},"id":"48418","type":"CDSView"},{"attributes":{},"id":"48305","type":"DataRange1d"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48414","type":"VBar"},{"attributes":{"source":{"id":"48406"}},"id":"48411","type":"CDSView"},{"attributes":{},"id":"48307","type":"DataRange1d"},{"attributes":{"below":[{"id":"48313"}],"center":[{"id":"48316"},{"id":"48320"},{"id":"48380"},{"id":"48387"},{"id":"48394"},{"id":"48401"}],"height":331,"left":[{"id":"48317"}],"output_backend":"webgl","renderers":[{"id":"48378"},{"id":"48385"},{"id":"48392"},{"id":"48399"}],"title":{"id":"48404"},"toolbar":{"id":"48331"},"toolbar_location":null,"width":496,"x_range":{"id":"48305"},"x_scale":{"id":"48309"},"y_range":{"id":"48307"},"y_scale":{"id":"48311"}},"id":"48304","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"48358","type":"WheelZoomTool"},{"attributes":{},"id":"48361","type":"SaveTool"},{"attributes":{},"id":"48355","type":"ResetTool"},{"attributes":{},"id":"48343","type":"LinearScale"},{"attributes":{},"id":"48356","type":"PanTool"},{"attributes":{"overlay":{"id":"48363"}},"id":"48357","type":"BoxZoomTool"},{"attributes":{"coordinates":null,"data_source":{"id":"48420"},"glyph":{"id":"48421"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48423"},"nonselection_glyph":{"id":"48422"},"view":{"id":"48425"}},"id":"48424","type":"GlyphRenderer"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48466"},"selection_policy":{"id":"48465"}},"id":"48420","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48416","type":"VBar"},{"attributes":{"children":[[{"id":"48304"},0,0],[{"id":"48340"},0,1]]},"id":"48472","type":"GridBox"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"48436","type":"Title"},{"attributes":{"axis":{"id":"48351"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"48354","type":"Grid"},{"attributes":{"ticks":[0,1,2,3]},"id":"48402","type":"FixedTicker"}],"root_ids":["48475"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"b93a5d41-af77-4e8b-a923-4d73bc32f87f","root_ids":["48475"],"roots":{"48475":"cc06c767-fae6-4040-a8a5-221bdc98e002"}}];
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