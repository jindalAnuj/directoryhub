var _slicedToArray=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,u=!1,r=void 0;try{for(var s,a=e[Symbol.iterator]();!(o=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);o=!0);}catch(e){u=!0,r=e}finally{try{!o&&a.return&&a.return()}finally{if(u)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function rangePlugin(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var n=void 0;return{onParseConfig:function(){t.config.mode="range",t.config.allowInput=!0,n=t.config.altInput?t.config.altFormat:t.config.dateFormat},onReady:function(){e.input?t.secondInput=e.input instanceof Element?e.input:window.document.querySelector(e.input):(t.secondInput=t._input.cloneNode(),t.secondInput.removeAttribute("id"),t.secondInput._flatpickr=null),t.secondInput.setAttribute("data-fp-omit",""),t._bind(t.secondInput,["focus","click"],function(e){t.open(e,t.secondInput),t.selectedDates[1]&&(t.latestSelectedDateObj=t.selectedDates[1],t._setHoursFromDate(t.selectedDates[1]),t.jumpToDate(t.selectedDates[1]));var n=[!1,!0];t._firstInputFocused=n[0],t._secondInputFocused=n[1]}),t._bind(t.secondInput,"blur",function(e){t.isOpen=!1}),t._bind(t.secondInput,"keydown",function(e){"Enter"===e.key&&(t.setDate([t.selectedDates[0],t.secondInput.value],!0,n),t.secondInput.click())}),e.input||t._input.parentNode.insertBefore(t.secondInput,t._input.nextSibling),t.config.ignoredFocusElements.push(t.secondInput),t._input.removeAttribute("readonly"),t.secondInput.removeAttribute("readonly"),t._bind(t._input,"focus",function(e){t.latestSelectedDateObj=t.selectedDates[0],t._setHoursFromDate(t.selectedDates[0]);var n=[!0,!1];t._firstInputFocused=n[0],t._secondInputFocused=n[1],t.jumpToDate(t.selectedDates[0])}),t._bind(t._input,"keydown",function(e){"Enter"===e.key&&t.setDate([t._input.value,t.selectedDates[1]],!0,n)}),t.setDate(t.selectedDates)},onChange:function(){t.selectedDates.length||setTimeout(function(){t.selectedDates.length||(t.secondInput.value="",t._prevDates=[])},10)},onDestroy:function(){e.input||t.secondInput.parentNode.removeChild(t.secondInput),delete t._prevDates,delete t._firstInputFocused,delete t._secondInputFocused},onValueUpdate:function(e,o){if(t.secondInput){if(t._prevDates=!t._prevDates||e.length>=t._prevDates.length?e.map(function(e){return e}):t._prevDates,t._prevDates.length>e.length){var u=e[0];t._firstInputFocused?t.setDate([u,t._prevDates[1]]):t._secondInputFocused&&t.setDate([t._prevDates[0],u])}var r=t.selectedDates.map(function(e){return t.formatDate(e,n)}),s=_slicedToArray(r,2),a=s[0];t._input.value=void 0===a?"":a;var i=s[1];t.secondInput.value=void 0===i?"":i}}}}}"undefined"!=typeof module&&(module.exports=rangePlugin);