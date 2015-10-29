{
/*
This file is part of Ext JS 4.1

Copyright (c) 2011-2012 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as
published by the Free Software Foundation and appearing in the file LICENSE included in the
packaging of this file.

Please review the following information to ensure the GNU General Public License version 3.0
requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department
at http://www.sencha.com/contact.

Build date: 2012-04-20 14:10:47 (19f55ab932145a3443b228045fa80950dfeaf9cc)
*/
}{

/* Topic: README FIRST

	Please copy <env.js> to your mpages folder and customize to your environment
	For best results include your customized env.js file before including this
	one.
*/
/* Topic: License
	The MIT License

	Copyright (c) 2010 University of New Mexico Hospitals

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/
/*  */
if (typeof univnm === "undefined") {
	window.univnm ={};
}
univnm.jslib={};
if (typeof $env == "undefined") $env={};

/* Class: JSON
	A JSON implmentation for browsers that do not have a native JSON object

	Note:
		You should normally not use this directly, use univnm.jslib.jsonEncode
		and univnm.jslib.jsonDecode instead

	See:
	* http://www.JSON.org/json2.js



	2010-11-17
	Public Domain.
	NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
	See http://www.JSON.org/js.html
	*/
	if(!this.JSON){this.JSON={mode:"software"};}
	(function(){"use strict";function f(n){return n<10?'0'+n:n;}
	if(typeof Date.prototype.toJSON!=='function'){String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf();};}
	var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}
	function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
	if(typeof rep==='function'){value=rep.call(holder,key,value);}
	switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
	gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
	v=partial.length===0?'[]':gap?'[\n'+gap+
	partial.join(',\n'+gap)+'\n'+
	mind+']':'['+partial.join(',')+']';gap=mind;return v;}
	if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==='string'){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}
	v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+
	mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}
	if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}
	rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}
	return str('',{'':value});};}
	if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}
	return reviver.call(holder,key,value);}
	text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+
	('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}
	if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}
	throw new SyntaxError('JSON.parse');};}}());

/* Class:  jaaulde
	Javascript cookie mangement

	See:
	* http://code.google.com/p/cookies/

	Copyright (c) 2005 - 2010, James Auldridge
	All rights reserved.

	Licensed under the BSD, MIT, and GPL (your choice!) Licenses:
	http://code.google.com/p/cookies/wiki/License

	*/
	var jaaulde=window.jaaulde||{};jaaulde.utils=jaaulde.utils||{};jaaulde.utils.cookies=(function(){var resolveOptions,assembleOptionsString,parseCookies,constructor,defaultOptions={expiresAt:null,path:'/',domain:null,secure:false};resolveOptions=function(options){var returnValue,expireDate;if(typeof options!=='object'||options===null){returnValue=defaultOptions;}else
	{returnValue={expiresAt:defaultOptions.expiresAt,path:defaultOptions.path,domain:defaultOptions.domain,secure:defaultOptions.secure};if(typeof options.expiresAt==='object'&&options.expiresAt instanceof Date){returnValue.expiresAt=options.expiresAt;}else if(typeof options.hoursToLive==='number'&&options.hoursToLive!==0){expireDate=new Date();expireDate.setTime(expireDate.getTime()+(options.hoursToLive*60*60*1000));returnValue.expiresAt=expireDate;}if(typeof options.path==='string'&&options.path!==''){returnValue.path=options.path;}if(typeof options.domain==='string'&&options.domain!==''){returnValue.domain=options.domain;}if(options.secure===true){returnValue.secure=options.secure;}}return returnValue;};assembleOptionsString=function(options){options=resolveOptions(options);return((typeof options.expiresAt==='object'&&options.expiresAt instanceof Date?'; expires='+options.expiresAt.toGMTString():'')+'; path='+options.path+(typeof options.domain==='string'?'; domain='+options.domain:'')+(options.secure===true?'; secure':''));};parseCookies=function(){var cookies={},i,pair,name,value,separated=document.cookie.split(';'),unparsedValue;for(i=0;i<separated.length;i=i+1){pair=separated[i].split('=');name=pair[0].replace(/^\s*/,'').replace(/\s*$/,'');try
	{value=decodeURIComponent(pair[1]);}catch(e1){value=pair[1];}if(typeof JSON==='object'&&JSON!==null&&typeof JSON.parse==='function'){try
	{unparsedValue=value;value=JSON.parse(value);}catch(e2){value=unparsedValue;}}cookies[name]=value;}return cookies;};constructor=function(){};constructor.prototype.get=function(cookieName){var returnValue,item,cookies=parseCookies();if(typeof cookieName==='string'){returnValue=(typeof cookies[cookieName]!=='undefined')?cookies[cookieName]:null;}else if(typeof cookieName==='object'&&cookieName!==null){returnValue={};for(item in cookieName){if(typeof cookies[cookieName[item]]!=='undefined'){returnValue[cookieName[item]]=cookies[cookieName[item]];}else
	{returnValue[cookieName[item]]=null;}}}else
	{returnValue=cookies;}return returnValue;};constructor.prototype.filter=function(cookieNameRegExp){var cookieName,returnValue={},cookies=parseCookies();if(typeof cookieNameRegExp==='string'){cookieNameRegExp=new RegExp(cookieNameRegExp);}for(cookieName in cookies){if(cookieName.match(cookieNameRegExp)){returnValue[cookieName]=cookies[cookieName];}}return returnValue;};constructor.prototype.set=function(cookieName,value,options){if(typeof options!=='object'||options===null){options={};}if(typeof value==='undefined'||value===null){value='';options.hoursToLive=-8760;}else if(typeof value!=='string'){if(typeof JSON==='object'&&JSON!==null&&typeof JSON.stringify==='function'){value=JSON.stringify(value);}else
	{throw new Error('cookies.set() received non-string value and could not serialize.');}}var optionsString=assembleOptionsString(options);document.cookie=cookieName+'='+encodeURIComponent(value)+optionsString;};constructor.prototype.del=function(cookieName,options){var allCookies={},name;if(typeof options!=='object'||options===null){options={};}if(typeof cookieName==='boolean'&&cookieName===true){allCookies=this.get();}else if(typeof cookieName==='string'){allCookies[cookieName]=true;}for(name in allCookies){if(typeof name==='string'&&name!==''){this.set(name,null,options);}}};constructor.prototype.test=function(){var returnValue=false,testName='cT',testValue='data';this.set(testName,testValue);if(this.get(testName)===testValue){this.del(testName);returnValue=true;}return returnValue;};constructor.prototype.setOptions=function(options){if(typeof options!=='object'){options=null;}defaultOptions=resolveOptions(options);};return new constructor();})();(function(){if(window.jQuery){(function($){$.cookies=jaaulde.utils.cookies;var extensions={cookify:function(options){return this.each(function(){var i,nameAttrs=['name','id'],name,$this=$(this),value;for(i in nameAttrs){if(!isNaN(i)){name=$this.attr(nameAttrs[i]);if(typeof name==='string'&&name!==''){if($this.is(':checkbox, :radio')){if($this.attr('checked')){value=$this.val();}}else if($this.is(':input')){value=$this.val();}else
	{value=$this.html();}if(typeof value!=='string'||value===''){value=null;}$.cookies.set(name,value,options);break;}}}});},cookieFill:function(){return this.each(function(){var n,getN,nameAttrs=['name','id'],name,$this=$(this),value;getN=function(){n=nameAttrs.pop();return!!n;};while(getN()){name=$this.attr(n);if(typeof name==='string'&&name!==''){value=$.cookies.get(name);if(value!==null){if($this.is(':checkbox, :radio')){if($this.val()===value){$this.attr('checked','checked');}else
	{$this.removeAttr('checked');}}else if($this.is(':input')){$this.val(value);}else
	{$this.html(value);}}break;}}});},cookieBind:function(options){return this.each(function(){var $this=$(this);$this.cookieFill().change(function(){$this.cookify(options);});});}};$.each(extensions,function(i){$.fn[i]=this;});})(window.jQuery);}})();



/* Class: univnm.jslib
	A library of useful MPage related functions required by other UNM code
	libraries
*/
/* Function: univnm.jslib.debug_window
	Creates a new browser window and displays an interactive view of the
	supplied object

	Parameters:
		data	-	String or object to display
		title	-	title of the window


	Detail:
		if a window exists with _title_ it is reused, otherwise a new window is
		created. _data_ will be displayed at the top of the window with a hard
		rule <hr> underneath. The window gets a reference to the object to the
		displayed state of the object is its current state, and may not
		represent the state at the time of the call to debug_window
	*/
	univnm.jslib.debug_window = function debug_window(data,title){
		if (!data) alert("'data' parameter is required.\n\nStack:\n" + get_stack());
		if (!title) title="debug";

		title = title.replace(/\W+/g,"_").left(30);
		var win;
		var class_vars = arguments.callee;
		if (!arguments.callee.windows) arguments.callee.windows = {};
		var windows = arguments.callee.windows;

		if (windows[title] && !windows[title].closed){
			win = windows[title];
			win.focus();
		} else {
			win = windows[title] = window.open("",title,"width=800,height=600,scrollbars=1,resizable=1");
			win.document.write([
				'<html><body>',
					'<style>',
					'td{',
						'background-color:#CCCCFF;',
						'font-family:sans-serif;',
						'font-size:8pt;',
						'overflow:auto;',
					'}',
					'td.key{ ',
						'background-color:#6666FF;',
						'font-weight:bold;',
						'width:10%;',
						'padding-left:10px;',
						'padding-right:10px;',
						'cursor:pointer;',

					'}',
					'.object{',
						'background-color:#6666FF;',
						'border: 1px solid black;',
						'margin:5px;',
						'padding:2px;',
						'cursor:pointer;',
					'}',
					'</style>',
					'<script>',
						'function typeOf(element){',
							'var type= "other"',
							'try{',
								'type= typeof element;',
								'if (type=="object"&&element instanceof Array){',
									'type=="array"	',
								'}',
							'} catch(e){}',
							'return type;',
						'}',
						'var objects = new Array();',
						'function dump_object(o,parent_element){',
							'if (typeOf(o) == "object" || typeOf(o) == "array"){',
								'objects.push(o);',
								'var index = objects.length -1;',
								'var tbl = document.createElement("table");',
								'tbl.style.width="100%";',
								'parent_element.appendChild(tbl);',
								'parent_element.appendChild(document.createElement("hr"));',
								'var	keys = new Array();',
								'for (var x in o) {',
									'keys.push(x);',
								'}',
								'if (typeOf(o) == "array"){',
									'keys.sort(function (a,b){',
										'try {',
											'return a-b',
										'} catch (e){return 0}',
									'});',
								'} else {',
									'keys.sort();',
								'}',
								'for (x= 0;x < keys.length; ++x){',
									'var row =tbl.insertRow(tbl.rows.length);',
									'var cell = row.insertCell(row.cells.length);',
									'cell.innerHTML = keys[x];',
									'cell.className = "key";',

									'cell.onclick=function(){',
										'if (this.nextSibling.style.display=="none"){',
											'this.nextSibling.style.display="block"',
										'} else {',
											'this.nextSibling.style.display="none";',
										'}',
									'}',
									'var cell = row.insertCell(row.cells.length);',


									'try{',
										'var curObj =o[keys[x]];',
									'} catch(e){',
										'continue	',
									'}',
									'var type = typeOf(curObj);',
									'if (type == "object"){',
										'cell.appendChild(document.createElement("div"));',

										'cell.firstChild.innerHTML=(o instanceof Array?"ARRAY":"OBJECT") + "(click to expand)";',
										'cell.firstChild.className="object";',
										'cell.firstChild.style.display = "block";',
										'cell.firstChild.setAttribute("index",index);',
										'cell.firstChild.setAttribute("key",keys[x]);',
										'cell.firstChild.onclick=function(){',
											'this.style.display="none";',
											'dump_object(objects[this.getAttribute("index")][this.getAttribute("key")], this.parentNode);',
										'}',

									'} else {',
										'cell.appendChild(document.createElement("pre"));',
										'cell.firstChild.innerHTML = o[keys[x]];',
									'}',
								'}',

							'} else if (type=="function"){',
								'cell.appendChild(document.createElement("pre"));',
								'cell.firstChild.innerHTML = o[keys[x]].toSource().replace(/;/g,"\\;\\n\\t").replace(/\\{/g,"\\{\\n\\t\\t");',
							'}else {',
								'var text = document.createElement("pre");',
								'text.innerHTML = o.toString();',
								'parent_element.appendChild(text);',
								'parent_element.appendChild(document.createElement("hr"));',
							'}',
						'}',
					'<'+'/script>',
					'<div id="content" style="width:100%;"></div>',
				'</body></html>'
			].join("\n"));
		}

		var timer = window.setInterval(function(){
			if (win.dump_object){
				win.dump_object(data,win.document.getElementById("content"));
				win.document.title = title;
				window.clearInterval(timer);
			}
		},500);

	};
/* Function: univnm.jslib.fixCclJson
	returns _obj_ with every property converted to lowerCase, and
	unneeded top-level properties removed

	Parameters:
		obj			-  object to examine

	Detail:
		The CCL function CNVTRECTOJSON converts records into JSON with an
		unnecessary top-level property and with  uppercase properties which can
		affect readability and cause compatibility issues with libraries. This
		function returns a new object without the top level property and
		recursively renames all-upper-case properties to lowercase.

	Note:
		if _obj_ does not contain a single top-level uppercase property, then
		it will not be removed. It should be safe to call this function against
		objects that were not produced from CNVTRECTOJSON

	Example:
		An object like this:

		(code)
		{
			DATA:{
				DATA:[{
					MRN:"8621200",
					ACC:"00000XR20108000027",
					TYPE:"Chest 1 View",
					DATE_ORDERED:"2010-04-15 00:00:01",
					DATE_COMPLETED:"2010-04-15 00:00:01",
					STATUS:"Exam Completed"
				}],
				TOTALROWS:1
			}
		}
		(end)

		Will be converted to this:

		(code)
		{
			data:[{
				mrn:"8621200",
				acc:"00000XR20108000027",
				type:"Chest 1 View",
				date_ordered:"2010-04-15 00:00:01",
				date_completed:"2010-04-15 00:00:01",
				status:"Exam Completed"
			}],
			totalrows:1
		}
		(end)
	*/
	univnm.jslib.fixCclJson =function fixCclJson(obj){
		var copyProps = function(src){
			var dest ={};
			var i;
			var me = arguments.callee;

			if (src && typeof src == "object"){
				for (var p in src){
					me(src[p]);
					if (p == p.toUpperCase() && p != parseInt(p,10)){
						var newProp = p.toLowerCase();
						src[newProp] = src[p];
						delete src[p];
					}

				}
			}
			return src;

		};

		var props = univnm.ObjectLib.getProperties(obj);
		if (
			props.length ==1 &&
			props[0] == props[0].toUpperCase()
		){
			return copyProps(obj[props[0]]);
		} else {
			return copyProps(obj);
		}
	};
/* Function: univnm.jslib.getQuerystring
	returns values from the URL query string

	Parameters:
		key			-	Query variable to check
		_default	-	*Optional, default ""*
						value to return if the _key_ does not exist in the URL

	*/
	univnm.jslib.getQuerystring = function getQuerystring(key, default_){
		if (default_===null) default_="";
		key = key.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
		var regex = new RegExp("[\\?&]"+key+"=([^&#]*)");
		var qs = regex.exec(window.location.href.replace(/%26/g,"&"));
		if (qs === null) {
			return default_;
		} else {
			return qs[1];
		}
	};
/* Function: univnm.jslib.ccl_callback
	Uses XMLCclRequest to perform a a callback against a CCL script. This
	function is used internally by <ccl_proxy.js>, <ccl_direct_proxy.js> and
	<PCRemotingProvider.js>

	Parameters:
		options		-	A JS object containing the options to this callback.
						See below

	Options:
		Only _ccl_ is required. all other options have defaults defined in
		ccl_callback.defaults, see *Defaults* below


		ccl				-	*String*
							Name of the CCL script to execute.
		parameters		-	*Array, devault ["MINE"]*
							Parameters in the order required by the CCL script.
		async			-	*Boolean, default false*
							Should this call be asynchronous? If true,
							then _onsuccess_ will be called, otherwise
							the response will be returned immediately
		serviceUrl		-	*String, default undefined*
							Overrides value in <$env.serviceUrl> for this callback
		cclMask			-	*String, default undefined*
							Overrides value in <$env.cclMask> for this callback

		result_xml		-	*Boolean, default false*
							Should we return the result as XML?

		eval_result		-	*Boolean, default false*
							Should we evaluate the responseText as JSON?

		execute_result	-	*Boolean, default false*
							Should we execute the responseText as
							JavaScript?
		fail_on_string	-	*Boolean, default true*
							Only for when _eval_result_ == true. Fires
							failure event if eval result is a string.
							This is intended for catching error messages
							sent back from the server. Make sure to
							override this if a raw string is valid response
							for your callback
		onexception		-	*Function, default alert("exception: " + exception);*
							This is a function to be executed in case of client-side
							exception. The function will be passed the
							following parameters:
								* exception 	- 	The exception object
								* cclrequest	-	The XMLCclRequest
													Object
								* options		-	A reference to the
													options object for
													this callback


		onsuccess		-	*Function, default alert("success! " +value);*
							Called on successful callback when async == true
							and execute_result == false. The function will be
							passed the following parameters:
								* value		 	- 	the result of the callback. will be cclrequest.responseText
													or a JS object if eval_response==true
								* cclrequest	-	The XMLCclRequest
													Object
								* options		-	A reference to the
													options object for
													this callback



		onfailure		-	*Function, default alert(cclrequest.responseText);*
							This is a function to be executed in case of server-side
							exception. The function will be passed the following
							parameters:
								* cclrequest	-	The XMLCclRequest
													Object
								* options		-	A reference to the
													options object for
													this callback

		onbegin			-	*Function, default function(){}*
							Called before before data sent. Good for
							setting feedback, like displaying a loading
							screen.
							The function will be passed the following
							parameters:
								* cclrequest	-	The XMLCclRequest
													Object
								* options		-	A reference to the
													options object for
													this callback
		onend			-	*Function, default function(){}*
							Called after success, failure, or exception.
							Good for re-setting feedback, like hiding a
							loading screen
							The function will be passed the following
							parameters:
								* cclrequest	-	The XMLCclRequest
													Object
								* options		-	A reference to the
													options object for
													this callback

	Note:
		The _options_ object passed to the _on*_ event handlers will have an
		additional property, callback_id, which is a unique number set
		internally by ccl_callback for tracking callbacks. See *ccl_callback.history* below

	Properties:
		The ccl_callback function itself has global properties:

		ccl_callback.defaults	-	The default options object, see *Defaults* below.
									The default value for any _options_ property can be
									set by changinf the value of the property in
									ccl_callback.defaults. This is useful for globally
									overriding exception behavior
		ccl_callback.history	-	A <univnm.DataSet> that contains a row for each
									callback made. See *History Row Properties* below
									for details

	Defaults:
	(code)
	ccl_callback.defaults={
		ccl:"",
		parameters:["MINE"],
		url_parameters:"",
		url_prefix:"",
		async:false,
		result_xml:false,
		eval_result:false,
		fail_on_string:true,
		execute_result:false,
		historySize:100,
		// --------- callbacks ----------
		onexception:function (exception,cclrequest,options){
			alert("exception: " + exception);
		},
		onsuccess:function (value,cclrequest,options){
			alert("success! " +value);
		},
		onfailure:function (cclrequest,options){
			alert(xmlhttp.responseText);
		},
		onbegin:function(xmlhttp,options){

		},
		onend:function(xmlhttp,options){

		}

	}
	(end)

	History Row Properties:
		id				-	the callback_id of the callback
		ccl				-	The CCL called
		params			-	The parameters passed to the CCL
		responseText	-	If the callback completed, the responseText
		xhr				-	If the callback completed, XMLCCLRequest or XMLHTTPRequest object used
		options			-	The options object passed to ccl_callback
		started			-	JS Date when the callback started
		ended			-	JS Date when the callback ended
		elapsed			-	Elapsed milliseconds for the request

	EXAMPLES:
	(code)
		//set default error handler
		ccl_callback.defaults.onexception = function(exception,cclrequest,options){
			var title = "Callback Error in id: " + options.callback_id;

			univnm.jslib.debug_window(Error Detail:,title)
			univnm.jslib.debug_window(e,title)
			univnm.jslib.debug_window(Request Detail:,title)
			univnm.jslib.debug_window(req,title)
			univnm.jslib.debug_window(Options Detail:,title)
			univnm.jslib.debug_window(Options,title)
		}

		//Cause all scripts on this page to use an mpage service proxy
		univnm.jslib.ccl_callback.defaults.serviceUrl="/callback_proxy.cfm?domain=P126&ccl={ccl}&parameters={params}"



		//synchronous callback, returning JS object:
			var ids=univnm.jslib.ccl_callback({
				ccl:"shared_echo_ids",
				parameters:["MINE", "$USR_Personid$","$PAT_Personid$","$VIS_Encntrid$"],
				eval_result:true
			});
			univnm.jslib.debug_window(ids);

		//asynchronous callback, no JSON handling:
			univnm.jslib.ccl_callback({
				ccl:"shared_echo_ids",
				parameters:["MINE", "$USR_Personid$","$PAT_Personid$","$VIS_Encntrid$"],
				async:true,
				onsuccess:function (value){
					univnm.jslib.debug_window(value);
				}
			});

	(end)
	*/
	univnm.jslib.ccl_callback =function ccl_callback(option_override){
		var me = arguments.callee;
		var my = me;
		//apply default options
			var options = univnm.ObjectLib.setDefaultProperties(option_override,my.defaults);

		var collapseParams =function(){
			return options.parameters.map(function(arg){
				//fix for bizare handling of % in mpage service "get"s
				if (
					$env.mpageType == "external" &&
					typeof arg === "string" &&
					$env.serviceMethod != "POST"
				) {
					arg = arg.replace(/%/g,"%25");
				}
				if (typeof(arg) == 'string'){
					if (!/'/.test(arg)){
						return "'" + arg + "'";
					}else if (!/\^/.test(arg)){
						return '^' + arg +'^';
					} else if (!/"/.test(arg) && $env.mpageType != "external"){
						return '"' + arg +'"';
					}else{
						throw new Error("Unable to find a quote for " + arg);
					}
				} else {
					return arg;
				}
			}).join();
		};



		if (!("seqNum" in my)) my.seqNum=0;
		my.seqNum++;
		options.callback_id = my.seqNum +0;//force copy by value, just for safety

		if (!("history" in my)) my.history =[];
		if (my.history.length > my.defaults.historySize) my.history.shift();

		var myHistoryRow ={
			id:options.callback_id,
			ccl:univnm.jslib.applyCclMask(options.ccl,options.cclMask),
			params:collapseParams(),
			started:new Date(),
			ended:new Date(),
			elapsed:0,
			responseText:"",
			xhr:{},
			options:options
		};
		if (!("history" in my)) my.history =new univnm.DataSet({
			columns:univnm.ObjectLib.getKeys(myHistoryRow),
			data:[]
		});
		if (my.history.length > 100) my.history.shift();
		my.history.push(myHistoryRow);
		// Modify onbegin
			univnm.ObjectLib.before(options,"onbegin",function(xmlhttp,options){
				options.endFunction=$profiler.begin(
					"ccl_callback ({id}): {ccl} {params}".format({
						id:myHistoryRow.id,
						ccl:options.ccl,
						params:collapseParams()
					})
				);
			});
		// Modify onend
			univnm.ObjectLib.before(options,"onend",function(xmlhttp,options){
				options.endFunction();
				delete xmlhttp.onreadystatechange;

				if (typeof XMLCCLREQUESTOBJECTPOINTER =="object"){
					for (var id in XMLCCLREQUESTOBJECTPOINTER){
						if (XMLCCLREQUESTOBJECTPOINTER[id] === xmlhttp){
							delete XMLCCLREQUESTOBJECTPOINTER[id];
						}
					}
				}
				myHistoryRow.ended =new Date();
				myHistoryRow.elapsed =myHistoryRow.ended.getTime() - myHistoryRow.started.getTime();
				myHistoryRow.responseText=xmlhttp.responseText.trim().toFixedWidth(30," ","...");

			});

		if (!("cclMask" in $env)){
			$env.cclMask="{ccl}";
		}
		var
			http,
			url = univnm.jslib.applyCclMask(options.ccl,options.cclMask)
		;
		var xmlhttp;
		var method = ($env.serviceMethod || "GET").toUpperCase();
		if ($env.mpageType=="external"){
			url = ($env.serviceUrl||""),
			url = url.replace(
				/\{ccl\}/g,
				univnm.jslib.applyCclMask(options.ccl,options.cclMask)
			).replace(
				/\{params\}/g,
				collapseParams()
			);
			url = url.replace(/\+/g,"%2B");

			try {
				xmlhttp= new XMLHttpRequest();
			} catch (e) {
				try {
					xmlhttp= new ActiveXObject("Msxml2.XMLHTTP");
				} catch (e) {
					try {
						xmlhttp= new ActiveXObject("Microsoft.XMLHTTP");
					} catch (e){
						try {
							xmlhttp= window.createRequest();
						} catch (e) {
							alert("XMLHttpRequest is not supported by this browser.");
							return null;
						}
					}
				}
			}

		} else {
			xmlhttp = new XMLCclRequest();
		}
		if (options.async){
			xmlhttp.onreadystatechange=function (){
				if (xmlhttp.readyState==4) {
					options.onend(xmlhttp,options);
					var status=null;
					try{
						status = xmlhttp.status;
					} catch(e){
						options.onexception(e,xmlhttp,options);
					}

					if (status=="200" || status=="0"){
						if (options.eval_result){
							try {
								var text = xmlhttp.responseText.trim();
								var value = univnm.jslib.jsonDecode(xmlhttp.responseText.replace(/\\f/g, '').replace(/\\u000C/g, '')
									.replace(/_CARET_/g, "^").replace(/_DOLLA_/g, "$"));
								if (options.fail_on_string && typeof value == "string"  && value.length){
									options.onfailure(xmlhttp,options);
								} else{
									options.onsuccess(value, xmlhttp, options);
								}
							} catch(e){
								options.onexception(e,xmlhttp,options);
							}
						} else{
							if (options.execute_result){
								try {
									eval(xmlhttp.responseText.replace(/\\f/g, '').replace(/\\u000C/g, '')
									.replace(/_CARET_/g, "^").replace(/_DOLLA_/g, "$"));
								} catch(e){
									options.onexception(e,xmlhttp,options);
								}
							} else if (options.result_xml){
								options.onsuccess(xmlhttp.responseXML, xmlhttp, options);
							} else {
								try {
									options.onsuccess(xmlhttp.responseText, xmlhttp, options);

								} catch(e){
									options.onexception(e,xmlhttp,options);
								}
							}
						}
					}
					else{
						options.onfailure(xmlhttp,options);
					}
				}
				else{}
			};
		}
		myHistoryRow.xhr=xmlhttp;
		try {
			options.onbegin(xmlhttp,options);
			if (method == "POST" && $env.mpageType=="external"){
				var params = "parameters=" + encodeURIComponent(collapseParams());
				xmlhttp.open("POST", url, options.async);
				xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				xmlhttp.send(params);
			}else{
				xmlhttp.open("GET", url, options.async);
				xmlhttp.send(collapseParams());
			}

			if (!options.async){
				options.onend(xmlhttp,options);
				if (xmlhttp.readyState==4) {
					var status = xmlhttp.status;
					if (status=="200" || status=="0"){
						if (options.eval_result){
							var value = univnm.jslib.jsonDecode(xmlhttp.responseText.replace(/\\f/g, '').replace(/\\u000C/g, '')
									.replace(/_CARET_/g, "^").replace(/_DOLLA_/g, "$"));
							if (options.fail_on_string && typeof value == "string" && value.length){
								return options.onfailure(xmlhttp,options);
							} else{
								return value;
							}

						} else if (options.result_xml){
							return xmlhttp.responseXML;
						} else{
							return xmlhttp.responseText;
						}
					}
					else{
						return options.onfailure(xmlhttp,options);
					}
				}
				else{
					return options.onfailure(xmlhttp,options);
				}
			}
		} catch(e){

			options.onexception(e,xmlhttp,options);
		}
		return null;
	};
	univnm.jslib.ccl_callback.defaults={
		ccl:"",
		historySize:100,
		parameters:["MINE"],
		url_parameters:"",
		url_prefix:"",
		async:false,
		result_xml:false,
		eval_result:false,
		fail_on_string:true,
		execute_result:false,
		// --------- callbacks ----------
		onexception:function (exception,cclrequest,options){
			alert("exception: " + exception +":" +(exception.stack||""));
		},
		onsuccess:function (value,cclrequest,options){
			alert("success! " +value);
		},
		onfailure:function (cclrequest,options){
			alert("failure in " +options.ccl +": " + options.parameters +"\n"+ cclrequest.responseText);
		},
		onbegin:function(xmlhttp,options){

		},
		onend:function(xmlhttp,options){

		}
	};
/* Function: univnm.jslib.jsonDecode
	Decodes a JSON string into an object

	Parameters:
		str		-	string to decode
		reviver	-	*Optional, default null*
					reviver function. See
					https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/JSON/parse

	This function will try to use a native JSON object if available
	(IE8+, standards mode). Regardless, dates in the form of "/Date(time_in_ms)/"
	will be auto-converted into native date values. These date values are created
	automatically by <univnm.jslib.jsonEncode>. The resulting object is then
	run through <univnm.jslib.fixCclJson> and returned


	Example:
	(code)
		var obj = univnm.jslib.jsonDecode('{"name":"Joe Schmoe", "dob":"/Date(172130400000)/"}')
	(end)
	*/
	univnm.jslib.jsonDecode = function jsonDecode(str, reviver){
		if (typeof str != "string" || str.trim().length <2) return null;
		if (!reviver) reviver = function(k,v){return v;};
		var obj={};
		try{
			obj = JSON.parse(str,function(k, v) {
				var isJsonDate = typeof v == "string" && v.match(/\/Date\((\d+)\)\//);
				if (isJsonDate){
					return new window.Date(parseInt(isJsonDate[1],10));
				}
				return reviver(k,v);
			});
		}catch(e){
			console.log(e.stack);
			console.log("while decoding " + str);
			throw e;

		}

		return univnm.jslib.fixCclJson(obj);
	};
/* Function: univnm.jslib.jsonEncode
	Encodes an object into a JSON string

	Parameters:
		obj			-	object to encode
		replacer	-	*Optional, default null*
						Replacer function. See
						https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/JSON/stringify
		indent		-	*Optional, default null*
						Controls "pretty printing". See
						https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/JSON/stringify

	This function will try to use a native JSON object if available
	(IE8+, standards mode). Regardless, dates will be encoded into the resulting
	JSON string in the form of "/Date(time_in_ms)/". These date values are parsed
	automatically by <univnm.jslib.jsonDecode>.


	Example:
	(code)
		var json = univnm.jslib.jsonEncode({
			name:"Joe Schmoe",
			dob:Date.parseDate("02/16/1973","m/d/Y")
		})
	(end)
	*/
	univnm.jslib.jsonEncode = function jsonDecode(str,replacer,indent){
		//var used = [];
		if (!replacer) replacer= function(k,v){return v;};
		return JSON.stringify(str,function(k, v) {
			// if (used.indexOf(v) > -1 && typeof v == "object") {
			// 	return "max recursion";
			// }
			// used.push(v);
			if (v && v instanceof Date){
				return "/Date({0})/".format(v.getTime());
			}
			return replacer(k,v);
		},indent);
	};
/* Function: univnm.jslib.load_mpage_ids
	loads mpage variables into the global scope

	Loads the following variables in the univnm scope:
		user_id			-	The id of the logged in user
		patient_id		-	The id of the current patient
		encounter_id	-	The id of the current encounter
		cur_node		-	Script node server name
		cur_user		-	Script User Name
		cur_server		-	SCP server number (e.g. 79)
		full_name		-	Lastname, Firstname of current user

	The source of these variables is searched in the following order:
		local	-	If load_mpage_ids has already been called on this page,
					those values are returned
		url		-	if "patient_id" "user_id" or "encounter_id" are defined in
					the URL, they will be used
		CCL		-	if <$env.mpageType> is "org" or "chart" then a CCL callback
					to univnm_echo_ids is made to extract the available ids for
					that type
		cookie	-	if none of the above options are available, but the values
					exist in a cookie set by a call to load_mpage_ids in a
					parent page, those values will be used
		dummy	-	if no other source is available, values of 100 will be used
					for each variable

	EXAMPLE:
	(code)
		window.onload=function(){
			load_mpage_ids();
		}
	(end)

	Note:
		This function depends on a CCL program called "univnm_echo_ids". A copy
		of this file is included in the "shared/univnm" directory

	*/
	univnm.jslib.load_mpage_ids = function load_mpage_ids(){
		var varnames=["user_id","patient_id","encounter_id","cur_node","cur_user","cur_server","full_name"];
		var remotenames=["cur_node","cur_user","cur_server","full_name"];
		var persist = function(){
			varnames.filter(function(nme){
				return "patient_id,encounter_id".listContains(name);
			}).forEach(function(name){
				jaaulde.utils.cookies.set(name,univnm[name]);
			});
			univnm.person_id = univnm.patient_id;
			jaaulde.utils.cookies.set("person_id",univnm.person_id);
			$env._ids_loaded = true;
		};
		if ($env._ids_loaded) {
			//alert("loaded")
			return;
		}
		//check CCL
			var o ={
				ccl:"univnm_echo_ids",
				async:false,
				eval_result:true,
				onfailure:function(){},
				onexception:function(){}
			};
			var ids;
			switch($env.mpageType){
				case "org":
					o.parameters=["MINE",parseInt(univnm.jslib.getQuerystring("user_id",0),10) || "$USR_Personid$",0,0];
					break;
				case "chart":
					o.parameters=["MINE",parseInt(univnm.jslib.getQuerystring("user_id",0),10) || "$USR_Personid$","$PAT_Personid$","$VIS_Encntrid$"];
					break;
				case "external":
					o.parameters=["MINE",parseInt(univnm.jslib.getQuerystring("user_id",0),10),0,0];
					break;
			}
			try{
			//univnm.jslib.debug_window(o)
				ids=univnm.jslib.ccl_callback(o);
				//univnm.jslib.debug_window(ids)
				univnm.ObjectLib
					.getKeys(ids)
					.filter(function(k){ //remove zeroes
						return ids[k] !== 0;
					})
					.forEach(function(k){
						var v = ids[k];
						if (v == parseInt(v,10)){
							univnm[k] = parseInt(v,10);
						} else {
							univnm[k] = v;
						}
					});
			}catch(e){
				//ignore this if it is not working
			}


		//check URL & cookie
			var foundValuesInUrl=false;
			varnames.forEach(function(name){
				//URL always wins

				if (univnm.jslib.getQuerystring(name,false)){
					univnm[name]=parseInt(univnm.jslib.getQuerystring(name),10);
				} else if (!(name in univnm)){
					if (jaaulde.utils.cookies.get(name)){
						univnm[name]=parseInt(jaaulde.utils.cookies.get(name),10);
					} else univnm[name]=100;
				}
			});
			if ("patient_id" in univnm) univnm.person_id = univnm.patient_id;
			if ("person_id" in univnm) univnm.patient_id = univnm.person_id;

		return persist();
	};
/* Function: univnm.jslib.loadScript
	loads a JS file and executes a callback when done

	Parameters:
		url				-	URL or Array of Urls of JS source file(s) to include
		callback		-	*Optional, default function(){}*
							function to call after script is loaded.
		allowDuplicate	-	*Optional, default false*
							if false, the URL will not be loaded if it has been
							loaded previously. This makes sense for libraries.
							If true, then a unique value is added to the url to
							prevent caching. This makes sense for a JSONP call

	Example:
	(code)
		function buildEntryStore(){
			window.entryStore = new univnm.QueryStore({
				sql:[
					'select *',
					'from cust_entries',
					'where person_id ={user_id}',
				''].join("\n"),
				extraParams:univnm
			})

		}
		if (!univnm.ext.QueryStore){
			univnm.jslib.loadScript(
				"../shared/univnm/ext/QueryStore.js",
				buildEntryStore
			)
		} else buildEntryStore();
	(end)

	See Also:
		*	JSONP: http://stackoverflow.com/questions/2067472/please-explain-jsonp
	*/
	univnm.jslib.loadScript =function loadScript(url,callback,allowDuplicate){
		if (url instanceof Array){
			var load = function (){
				if (!url.length) return callback();
				return loadScript(url.shift(),load,allowDuplicate);
			};
			return load();
		}
		var my = arguments.callee;
		if (!callback) callback = function(){};
		if (!("srcCache" in my)) my.srcCache = {};
		if (!allowDuplicate && (url in my.srcCache)) return callback();


		var head= document.getElementsByTagName('head')[0];

		var script= document.createElement('script');
		script.type= 'text/javascript';
		if (allowDuplicate){
			var cacheBuster = new Date().getTime();
			script.src= url + (/\?/.test(url)?"&":"?") +"cacheBuster="+cacheBuster;
		} else {
			script.src= url;
			my.srcCache[url] = true;
		}

		var p1= $profiler.begin("loadScript: " + url);
		script.onload = function() {
			if ( ! script.onloadDone ) {
				script.onloadDone = true;
				p1();
				callback();
			}
		};
		script.onreadystatechange = function() {
			if (
				( "loaded" === script.readyState || "complete" === script.readyState) &&
				! script.onloadDone
			) {
				script.onloadDone = true;
				callback();
			}
		};
		head.insertBefore( script, head.firstChild );
	};
/* Function: univnm.jslib.loadCss
	loads one or more CSS files

	Parameters:
		url				-	URL of CSS source file to include, or array of urls
							If array, all urls will be loaded before calling _callback_
		callback		-	*Optional, default function(){}*
							function to call after script is loaded.
	*/
	univnm.jslib.loadCss =function loadCss(url){
		if (!url) return;
		if (url instanceof Array){
			return url.forEach(function(url){
				loadCss(url);
			});
		}

		var my = arguments.callee;
		if (!("srcCache" in my)) my.srcCache = {};
		if ( (url in my.srcCache)) return;

		var head= document.getElementsByTagName('head')[0];

		var link= document.createElement('link');
		link.rel  = 'stylesheet';
		link.type = 'text/css';
		link.href = url;
		link.media = 'all';
		my.srcCache[url] = true;
		var p1= $profiler.begin("loadCss " + url);
		head.appendChild( link);

	};
/* Function: univnm.jslib.MD5
	(Message-Digest Algorithm) http://www.webtoolkit.info/

	Parameters:
	string	-	string to hash

	Returns MD5 hash of _string_
	*/
	univnm.jslib.MD5 = function MD5(string) {
		function RotateLeft(lValue, iShiftBits) {
			return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
		}

		function AddUnsigned(lX,lY) {
			var lX4,lY4,lX8,lY8,lResult;
			lX8 = (lX & 0x80000000);
			lY8 = (lY & 0x80000000);
			lX4 = (lX & 0x40000000);
			lY4 = (lY & 0x40000000);
			lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
			if (lX4 & lY4) {
				return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
			}
			if (lX4 | lY4) {
				if (lResult & 0x40000000) {
					return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
				} else {
					return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
				}
			} else {
				return (lResult ^ lX8 ^ lY8);
			}
		}

		function F(x,y,z) { return (x & y) | ((~x) & z); }
		function G(x,y,z) { return (x & z) | (y & (~z)); }
		function H(x,y,z) { return (x ^ y ^ z); }
		function I(x,y,z) { return (y ^ (x | (~z))); }

		function FF(a,b,c,d,x,s,ac) {
			a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
			return AddUnsigned(RotateLeft(a, s), b);
		}

		function GG(a,b,c,d,x,s,ac) {
			a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
			return AddUnsigned(RotateLeft(a, s), b);
		}

		function HH(a,b,c,d,x,s,ac) {
			a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
			return AddUnsigned(RotateLeft(a, s), b);
		}

		function II(a,b,c,d,x,s,ac) {
			a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
			return AddUnsigned(RotateLeft(a, s), b);
		}

		function ConvertToWordArray(string) {
			var lWordCount;
			var lMessageLength = string.length;
			var lNumberOfWords_temp1=lMessageLength + 8;
			var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
			var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
			var lWordArray=Array(lNumberOfWords-1);
			var lBytePosition = 0;
			var lByteCount = 0;
			while ( lByteCount < lMessageLength ) {
				lWordCount = (lByteCount-(lByteCount % 4))/4;
				lBytePosition = (lByteCount % 4)*8;
				lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount)<<lBytePosition));
				lByteCount++;
			}
			lWordCount = (lByteCount-(lByteCount % 4))/4;
			lBytePosition = (lByteCount % 4)*8;
			lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
			lWordArray[lNumberOfWords-2] = lMessageLength<<3;
			lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
			return lWordArray;
		}

		function WordToHex(lValue) {
			var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
			for (lCount = 0;lCount<=3;lCount++) {
				lByte = (lValue>>>(lCount*8)) & 255;
				WordToHexValue_temp = "0" + lByte.toString(16);
				WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
			}
			return WordToHexValue;
		}

		function Utf8Encode(string) {
			string = string.replace(/\r\n/g,"\n");
			var utftext = "";

			for (var n = 0; n < string.length; n++) {

				var c = string.charCodeAt(n);

				if (c < 128) {
					utftext += String.fromCharCode(c);
				}
				else if((c > 127) && (c < 2048)) {
					utftext += String.fromCharCode((c >> 6) | 192);
					utftext += String.fromCharCode((c & 63) | 128);
				}
				else {
					utftext += String.fromCharCode((c >> 12) | 224);
					utftext += String.fromCharCode(((c >> 6) & 63) | 128);
					utftext += String.fromCharCode((c & 63) | 128);
				}

			}

			return utftext;
		}

		var x=Array();
		var k,AA,BB,CC,DD,a,b,c,d;
		var S11=7, S12=12, S13=17, S14=22;
		var S21=5, S22=9 , S23=14, S24=20;
		var S31=4, S32=11, S33=16, S34=23;
		var S41=6, S42=10, S43=15, S44=21;

		string = Utf8Encode(string);

		x = ConvertToWordArray(string);

		a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;

		for (k=0;k<x.length;k+=16) {
			AA=a; BB=b; CC=c; DD=d;
			a=FF(a,b,c,d,x[k+0], S11,0xD76AA478);
			d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
			c=FF(c,d,a,b,x[k+2], S13,0x242070DB);
			b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
			a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
			d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);
			c=FF(c,d,a,b,x[k+6], S13,0xA8304613);
			b=FF(b,c,d,a,x[k+7], S14,0xFD469501);
			a=FF(a,b,c,d,x[k+8], S11,0x698098D8);
			d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
			c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
			b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
			a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
			d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
			c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
			b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
			a=GG(a,b,c,d,x[k+1], S21,0xF61E2562);
			d=GG(d,a,b,c,x[k+6], S22,0xC040B340);
			c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
			b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
			a=GG(a,b,c,d,x[k+5], S21,0xD62F105D);
			d=GG(d,a,b,c,x[k+10],S22,0x2441453);
			c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
			b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
			a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
			d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
			c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
			b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);
			a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
			d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
			c=GG(c,d,a,b,x[k+7], S23,0x676F02D9);
			b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
			a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
			d=HH(d,a,b,c,x[k+8], S32,0x8771F681);
			c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
			b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
			a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
			d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
			c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
			b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
			a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
			d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
			c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
			b=HH(b,c,d,a,x[k+6], S34,0x4881D05);
			a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
			d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
			c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
			b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
			a=II(a,b,c,d,x[k+0], S41,0xF4292244);
			d=II(d,a,b,c,x[k+7], S42,0x432AFF97);
			c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
			b=II(b,c,d,a,x[k+5], S44,0xFC93A039);
			a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
			d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
			c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
			b=II(b,c,d,a,x[k+1], S44,0x85845DD1);
			a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
			d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
			c=II(c,d,a,b,x[k+6], S43,0xA3014314);
			b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
			a=II(a,b,c,d,x[k+4], S41,0xF7537E82);
			d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
			c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
			b=II(b,c,d,a,x[k+9], S44,0xEB86D391);
			a=AddUnsigned(a,AA);
			b=AddUnsigned(b,BB);
			c=AddUnsigned(c,CC);
			d=AddUnsigned(d,DD);
		}

		var temp = WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);

		return temp.toLowerCase();
	};
/* Function: univnm.jslib.namespace
	returns a reference to the supplied namespace, creating it if necessary

	Parameters:
		name		-	String in the form of "base.sub.sub"


	Example:
	(code)
		univnm.jslib.namespace("pcch.libs.Custom").value1 = "woot!";

		// pcch.libs.Custom is guranteed to exist  now
		// because of the namespace() call
		pcch.libs.Custom.value2 ="righteous!";

	(end)
	*/
	univnm.jslib.namespace=function(name){
		var parts =name.split(".");
		var result = window;
		while (parts.length){
			var part = parts.shift();
			result = result[part] = result[part] || {};
		}
		return result;
	};

/* Function: univnm.jslib.applyCclMask
	applies the $env.cclMask template to a string

	Parameters:
		ccl 		-	name of CCL to wrap in the masking template
		mask		-	*optional, default $env.cclMask*
						mask to apply, overriding global cclMask


	Example:
	(code)
		$env.cclMask = "1_{ccl}_b"

		alert(univnm.jslib.applyCclMask("univnm_echo_ids"))
		// alerts "1_univnm_echo_ids_b"
	(end)
	*/
	univnm.jslib.applyCclMask = function applyCclMask(ccl,mask){
		var cclMask = mask||$env.cclMask||"{ccl}";

		return cclMask.replace(/\{ccl\}/g,ccl);
	};
/* Class: univnm.ObjectLib
	Additional object related functions


	*/
	univnm.ObjectLib = {};
	/* Function: $O
		wraps an object with the univnm.ObjectLib functions.

		Parameters:
		obj	-	object to wrap

		returns _obj_ with all functions in univnm.ObjectLib attached, with _object_ as the target


		Example:

		(code)
			var thing={
				name:"thing",
				purpose"do Stuff!"
			}

			//via univnm.ObjectLib
			univnm.ObjectLib.setDefaultProperties(thing,{
				newProp:"I'm a new property"
			})

			//via $O
			$O(thing).setDefaultProperties({
				newProp2:"another new prop"
			})

		(end)

		*/
		if (typeof $O == "undefined"){
			function $O(obj){
				function buildFunction(prop){
					return function(){
						var args = Array.parse(arguments);
						args.unshift(this);
						return univnm.ObjectLib[prop].apply(this,args);
					};
				}
				for (var prop in univnm.ObjectLib){
					obj[prop] = buildFunction(prop);
				}

				return obj;
			}
		}
	/* Function: before
		Prepends supplied function to the event chain of an object.

		Parameters:
			obj				- object to apply to
			functionName 	- name of the function on an object to modify
			functionObj		- function object to append



		Detail:
			Existing functions are preserved and executed after the supplied function.
			This is a shortcut for creating chain functions and is the equivalent of
			(code)
			obj[functionName] = obj[functionName].before(functionObj)
			(end)
			See <Function.createChainFunction> for how chain functions work.

		Examples:
		(code)
			var obj={
				stuff:function (text){
					console.log("in orig")
					return text + " " + this.myVal;
				},
				myVal:"firstObj"
			}

			var obj2={
				myVal:"secondObj"
			}


			univnm.ObjectLib.before(obj,"stuff",function(text){
				var chain = arguments.callee.chain;
				console.log("in before")
				chain.args[0] = "before " + text
				if (text == "dude!"){
					// exit now with this return value, nothing after will be executed
					chain.exit("sweet!")
				}

			})

			univnm.ObjectLib.after(obj,"stuff",function(text){
				var chain = arguments.callee.chain;
				console.log("in after")
				return chain.lastReturn + " after "
			})

			console.log(obj.stuff("woot!") +"<hr>");
			console.log(obj.stuff("dude!") +"<hr>");

			obj2.stuff = obj.stuff;
			console.log(obj2.stuff("woot!") +"<hr>");

		(end)
		*/
		univnm.ObjectLib.before=function( obj, functionName, functionObj){
			var $this = obj;
			//does the function exist?
			if (functionName in $this) {
				//is the function a chain header?
				if (!("chainArray" in $this[functionName])){
					var originalFunction =$this[functionName];
					$this[functionName]=Function.createChainFunction([$this[functionName]]);
					$O(originalFunction).applyTo($this[functionName]);
				}
			} else {
				$this[functionName]=Function.createChainFunction();
			}
			if("chainArray" in functionObj){
				$this[functionName].chainArray=
					functionObj.chainArray.concat($this[functionName].chainArray);
			} else {
				$this[functionName].chainArray.unshift(functionObj);
			}
		};
	/* Function: after
		Appends supplied function to the event chain of an object.

		Parameters:
			obj				- object to apply to
			functionName 	- name of the function on an object to modify
			functionObj		- function object to append



			Detail:
			Existing functions are preserved and executed after the supplied function.
			This is a shortcut for creating chain functions and is the equivalent of
			(code)
			obj[functionName] = obj[functionName].before(functionObj)
			(end)
			See <Function.createChainFunction> for how chain functions work.

		Examples:
		*	see <before>

		(end)
		*/
		univnm.ObjectLib.after=function( obj, functionName, functionObj){
			if (!functionObj) functionObj=function(){};
			var $this = obj;

			//does the function exist?
			if (functionName in $this) {
				//is the function a chain header?
				if (!("chainArray" in $this[functionName])){
					var originalFunction =$this[functionName];
					$this[functionName]=Function.createChainFunction([$this[functionName]]);
					originalFunction.applyTo($this[functionName]);
				}
			} else {
				$this[functionName]=Function.createChainFunction();
			}
			if("chainArray" in functionObj){
				$this[functionName].chainArray=
					$this[functionName].chainArray.concat(functionObj.chainArray);
			} else {
				$this[functionName].chainArray.push(functionObj);
			}
		};

	/* Function: appendFunction
		alias for <after>
		*/
		univnm.ObjectLib.appendFunction=univnm.ObjectLib.after;
	/* Function: applyTo
		Copies all properties (including Function properties and "hidden") of an object to another

		Parameters:
			obj					-	object to copy from
			target				-	object to copy to
			shouldOverwrite 	- 	*Optional, default false* Should existing properties in
									_target_ be replaced by the properties in _source_?

		Returns:
			_target_

		Detail:
			This can be used for copying the properties of an object to a local
			scope by applying to 'this', or simulating inheritance (even multiple
			inheritance) on instantiated objects by copying the properties of
			another object

		Examples:
			(code)
				// Make Myna's functions such as abort() and dump() available
				// without the Myna prefix
				univnm.ObjectLib.applyTo(Myna,this);

			(end)
		*/
		univnm.ObjectLib.applyTo=function(obj,target,shouldOverwrite){

			if (shouldOverwrite === undefined) shouldOverwrite=false;
			for (var x in obj) {
				if (shouldOverwrite || target[x] === undefined){
					try {//sometimes this fails, for instance if "key" is readonly
						target[x] = obj[x];
					} catch(e){}
				}
			}
			return target;
		};

	/* Function: getKeys
		returns a list of non-function properties in an object by order of appearance

		Parameters:
			obj 	-	 object to examine

		Returns:
			An alphabetized array of properties in an object

		*/
		univnm.ObjectLib.getKeys = function(obj){
			var result=[];
			var isXml = typeof obj ==="xml";

			try {
			for (var x in obj){
			if (isXml && x != parseFloat(x)) continue;
				if (typeof x === "string"){
					try{ //ie doesn't like you looking at certain things (like in window)
						if (obj[x] instanceof Function || typeof obj[x] == "function") continue;
					} catch (e) {continue;}
					result.push(x);
				}
			}
			} catch (e) {return [];}
			return result;
		};
	/* Function: getProperties
		returns an alphabetized list of all properties in an object

		Parameters:
			obj 	-	 object to examine

		Returns:
			An alphabetized array of properties in an object

		*/
		univnm.ObjectLib.getProperties = function(obj){
			var result=[];
			try {
			for (var x in obj){
				if (typeof x === "string"){
					result.push(x);
				}
			}
			} catch (e) {return [];}
			return result.sort(function(left,right) {
				try { //ie also freaks out over the sort for some reason
					left=left.toLowerCase();
					right=right.toLowerCase();
					if (left > right) return 1;
					if (left < right) return -1;
					return 0;
				} catch(e){return 0;}
			});
		};
	/* Function: checkRequired
		Ensures that certain properties defined.

		Parameters:
			obj			-	object to examine
			required 	- 	Array of property name strings to look for

		Returns:
			void

		Detail:
			This function is intended for Javascript Objects being used as data containers.
			Particularly JS objects passed as function parameters.

			This function simply checks to see if every string in the _required_ array has
			a corresponding property in an object. The first time a property is not found, an
			exception is raised.

		*/
		univnm.ObjectLib.checkRequired=function (obj,required){
			required.forEach(function(key){
				if (obj[key] === undefined) {
					var msg = "Required property '" + key +"' undefined";
						msg+= " in " + univnm.ObjectLib.toJson(obj);
					throw new Error (msg);
				}
			});
		};

	/* Function: toJson
		Converts the supplied object to JSON (http://www.json.org)

		Shortcut to <univnm.jslib.jsonEncode>

		Parameters:
			obj	-	 object to convert

		Returns:
			JSON string that represents _obj_
		*/
		univnm.ObjectLib.toJson=function(obj) {
			return univnm.jslib.jsonEncode(obj);
		};
	/* Function: toStruct
		returns a copy of an object with all the function properties removed

		Parameters:
			object 	-	object to inspect

		*/
		univnm.ObjectLib.toStruct=function( obj){
			var $this = obj;
			var result ={};
			for (var prop in $this){
				if (typeof $this[prop] != "function") {
					result[prop] = $this[prop];
				}
			}
			return result;
		};

	/* Function: setByPath
		sets a property or nested object property of this object

		Parameters:
			obj				- 	object to apply to
			path				-	dot separated path to the property to set
			value				-	value to set


		Returns:
			_obj_

		Detail:
			Often times it is convenient to store key value pairs as a dot separated
			path and a value, especially in HTML forms which do not support structured
			parameters like so:

			> <input name="Users.336642.firstName" value = "Mark">

			Calling this function against an object will walk the nested object tree,
			creating objects as necessary, until the final property is set to the value


		Example:
			(code)
				var result = univnm.ObjectLib.setByPath({},"Users.336642.firstName","Mark")
				univnm.ObjectLib.setByPath(result,"Users.536642.firstName","Bob")
				// result Equals
				// {
				// 	Users:{
				// 		"336642":{
				// 			firstName:"Mark"
				// 		},
				// 		"536642":{
				// 			firstName:"Bob"
				// 		},
				// 	}
				// }

				// the * means append otherwise the array index is used even if out of order
				var result = {}
				univnm.ObjectLib.setByPath(result,"Users[*].firstName","Mark")
				univnm.ObjectLib.setByPath(result,"Users[0].firstName","Bob")
				// result Equals
				// {
				// 	Users:[
				//		{
				// 			firstName:"Bob"
				// 		},
				// 		{
				// 			firstName:"Mark"
				// 		}
				//	]
				// }

			(end)

		Note:
			This function is applied automatically against $req.data for params that
			contain periods

		*/
		univnm.ObjectLib.setByPath=function (obj,path,value){
			if (!path.listLen(".")){
				obj[path] = value;
			} else {
				var parts = path.split(".");
				var lastProp = parts.pop();

				var target=parts.reduce(function(obj,prop){
					//console.log(prop)
					if (/\[[\d|*]+\]/.test(prop)){
						var match = prop.match(/(.*?)\[(.*?)\]/);
						var arrayProp = match[1], index=match[2];
						if (!(arrayProp in obj)) obj[arrayProp] = [];
						obj = obj[arrayProp];
						if (index == "*") {
							prop = obj.length;
						} else {
							prop = parseInt(index,10);
						}
					}
					return obj[prop] || (obj[prop] ={});
				},obj);

				if (/\[[\d|*]+\]/.test(lastProp)){
					var match = lastProp.match(/(.*?)\[(.*?)\]/);
					var arrayProp = match[1], index=match[2];
					if (!(arrayProp in target)) target[arrayProp] = [];
					target = target[arrayProp];
					if (index == "*") {
						lastProp = target.length;
					} else {
						lastProp = parseInt(index,10);
					}
				}
				target[lastProp] =value;
			}
			return obj;
		};
	/* Function: setDefaultProperties
		sets default properties on an object

		Parameters:
			obj				- 	object to apply to
			defaults		- 	Object that represents the default properties
			looseMatch	-	If true, consider "null" values and 0 length strings to be
								the same as undefined. By default, only strictly undefined
								properties are overwritten by their _defaults_.


		Returns:
			_obj_

		Detail:
			Every property in _defaults_ is checked against this. If the
			property is undefined in this, it is copied from _defaults_.

		Example:
			(code)
			$res.data.setDefaultProperties({
				name:"bob",
				isDeceased:false
			});

			(end)

		*/
		univnm.ObjectLib.setDefaultProperties=function (obj,defaults,looseMatch){
			for (var key in defaults) {
				if (obj[key] === undefined ||
					looseMatch && (
						obj[key] === null
						|| obj[key] === ""
					)
				) {
					try {//sometimes this fails, for instance if "key" is readonly
						obj[key] = defaults[key];
					} catch(e){}
				}
			}
			return obj
		}



	/* Function: forEach
		loops over each non-function property of an object an executes the
		supplied function against it.

		Parameters:
			obj			-	Object to loop over
			func 		-	Function to execute. See below for the parameters it will
							be passed

		Callback Parameters:
			element		-	the value of property
			name		-	the name of the property
			index		-	ordinal of this element
			object		-	a reference to an object



		Detail:
			This function is modeled after the JS function <Array.forEach>.

		Example:
			(code)
			var emp ={
				id:12,
				name:"Bob"
				occupation:"being awsome",
				isDeceased:false
			}

			univnm.ObjectLib.forEach(emp,function(element,name,object){
				alert(name + ": " + element +"<br>");
			})
			(end)

		*/
		univnm.ObjectLib.forEach=function (obj,func){
			univnm.ObjectLib.getKeys(obj).forEach(function (key,i){
				func(obj[key],key,i,obj);
			})
		}
	/* Function: map
		returns new Object with the results of calling a provided function on every
		non-function element in _obj_.

		Parameters:
			obj		-	Object to loop over
			func 		-	Function to execute. See below for the parameters it will
							be passed

		Callback Parameters:
			element		-	the value of property
			name			-	the name of the property
			index		-	ordinal of this element
			object		-	a reference to this object



		Detail:
			This function is modeled after the JS function <Array.map>.

		Example:
			(code)
			//make sure null values come across as empty strings
			var emp = {
				id:12,
				name:"Bob",
				age:null,
				occupation:"being awesome",
				isDeceased:false
			}

			var fixedEmp = univnm.ObjectLib.map(emp,function(element,name,object){
				if (element === null) {
					return ""
				} else {
					return element
				}
			})

			(end)

		*/
		univnm.ObjectLib.map=function (obj,func){
			var newObj =$O({})
			univnm.ObjectLib.getKeys(obj).forEach(function (key,i){
				newObj[key] =func(obj[key],key,i,obj);
			})
			return newObj
		}
	/* Function: filter
		returns new Object with only the key/values from _obj_ object that pass a test function

		Parameters:
			obj		-	Object to loop over
			func 		-	Function to execute. return true to include this key/value
							See below for the parameters it will be passed

		Callback Parameters:
			element		-	the value of property
			name			-	the name of the property
			index		-	ordinal of this element
			object		-	a reference to this object



		Detail:
			This function is modeled after the JS function <Array.filter>.

		Example:
			(code)
			// remove null values
			var emp = {
				id:12,
				name:"Bob",
				age:null,
				occupation:"being awesome",
				isDeceased:false
			}

			var fixedEmp = univnm.ObjectLib.filter(emp,function(element,name,object){
				return element !== null
			})

			(end)

		*/
		univnm.ObjectLib.filter=function (obj,func){
			var newObj =$O({})
			univnm.ObjectLib.getKeys(obj)
			.filter(function(key,i){
				return func(obj[key],key,i,obj)
			})
			.forEach(function (key){
				newObj[key] =obj[key];
			})
			return newObj
		}
	/* Function: toArray
		returns an Array of objects with a "key" property and a "value" property
		mapping to the  keys and values of this object

		Parameters:
			obj					-	Object to loop over
			includeFunctions	- *Optional, default false*
										By default only properties that are not functions are
										mapped. Set this to true to include functions
			localOnly			-	*Optional, default false*
										By default both local and prototype properties are
										mapped, set this to true limit to only local
										properties


		Note:
			if <univnm.DataSet> is available, then a univnm.DataSet is returned, which allows
			recreating the object via result.toMap("key","value")

		Example:
			(code)
			var obj = {first_name:"Bob",last_name:"Dobb"}
			var array = univnm.ObjectLib.toArray(obj)
			//returns [{key:"first_name",value:"Bob"},{key:"lasst_name",value:"Dobb"}]


			(end)

		*/
		univnm.ObjectLib.toArray=function (obj,includeFunctions,localOnly){
			var result =[]
			result.columns = []

			for (var p in obj){
				if (!localOnly || obj.hasOwnProperty(p)){
					var value,d;
					if ("getOwnPropertyDescriptor" in Object){
						try{
							d =Object.getOwnPropertyDescriptor(obj,p)
							value=("get" in d)?d.get:d.value;
						} catch(e){
							value = obj[p]
						}
					}else{
						value = obj[p]
					}
					if (includeFunctions || typeof value != "function"){
						result.columns.push(p)
						result.push({
							key:p,
							value:value
						})
					}
				}
			}
			return (typeof Myna != "undefined" && typeof univnm.DataSet != "undefined")
				? new univnm.DataSet(result)
				: result
		}
	/* Function: typeOf
		an enhanced replacement of the the Javscript builtin typeof function.

		Parameters:
			object 	-	object to inspect

		Returns:
			a string representing the type of the object

		Detail:
			The builtin JavaScript typeof function does not identify some stamndard objects,
			specifically Arrays, Dates, and Nulls. When running in ObjectLib, it is also important to
			know when the object is a Java object. This function returns the standard typeof
			strings as well as the following:

			* null
			* array
			* class
			* date

		*/
		univnm.ObjectLib.typeOf=function(object) {
			var s = typeof object;
			if (s === 'object') {
				if (object) {
					if (object instanceof String){
						return 'string';
					} else if (typeof object["length"] === 'number' &&
							/* !(object.propertyIsEnumerable('length')) && */
							typeof object.splice === 'function') {
						return 'array';
					} else if (object instanceof Date){
						return 'date';
					} else if (typeof object["getClass"] =="function" && String(object) != "[object Object]") {
						return 'class';
					}
				} else {
					return 'null';
				}
			}

			return s;
		}

/* Class: univnm.DataSet
	A normalized data structure for working with tabular data
	*/
	/* Constructor: univnm.DataSet
		Creates a new univnm.DataSet Object

		Parameters:
			options		-	Either an array to be converted to a univnm.DataSet, or and
								object containing detailed options. If an array, the array
								must contain at least one record, and the record should
								have all the non-function properties expected in the
								univnm.DataSet so that <univnm.DataSet.columns> can be inferred. If this
								is an object it should conform to the Options Object
								defined below.

		Options Object:
			data		-	*Optional default []*
							This is an array of initial data. May be empty.
			columns		-	*Optional default []*
							Either a comma separated list, an array of column names, or
							an object whose non-function properties represent the column
							names. These define the known properties of the objects in a
							univnm.DataSet array. If _columns_ is not provided, but _data_
							contains at least one row, _columns_ will be calculated as all
							the non-function properties of the first row.
		Detail:
			univnm.DataSet is a wrapper for an array of objects. This is treated much like the result set
			of a query, but does not need to come from a query. univnm.DataSet's provide a
			normalized way to represent any tabular data
		*/
		univnm.DataSet =function (options){
			if (!options) return univnm.ObjectLib.applyTo(this,[],true)

			var ds
			if (this == window) throw new SyntaxError("DataSet is an object contructor. Please use the  'new' operator");

			if (options instanceof Array){
				//shallowly copies the data on to this object
				univnm.ObjectLib.applyTo(this,options,true)
				ds = options

				if (options.length) ds.columns = univnm.ObjectLib.getKeys(ds[0]);

			} else if (options instanceof Object){
				/* initial data */
					if (options.data instanceof Array){
						ds = options.data
					} else {
						ds=[]
					}
					univnm.ObjectLib.applyTo(this,ds,true)
				/* columns */
					if (typeof options.columns =="string"){
						ds.columns = options.columns.split(/,/)
					} else if (options.columns instanceof Array){
						ds.columns = univnm.ObjectLib.applyTo(options.columns,[]);

					} else if (options.columns instanceof Object){
						ds.columns = univnm.ObjectLib.getKeys(options.columns);
					}

				/* loader */
					if (options.loader instanceof Function){
						ds.loader = options.loader;
					}
			}
			return ds;
		}
		univnm.DataSet.prototype.columns = [];
		univnm.DataSet.prototype.load = function(options){
			if (this.loader){
				options = options||{}
				options.maxRows = options.maxRows;
				options.startRow = options.startRow||1;
				this.length=0;
				var ds = this;
				this.loader(options).forEach(function(e){
					ds.push(e);
				})
			}

			return this;
		};
	/* Property: array
		This is the underlying array for this DataSet
	*/
	/* Function: collapse
		returns a new dataSet where columns are collapsed into arrays, based on
		one or more partition column

		Parameters:
			partitionColumns	-	Array of column names, in order of significance,
			makeUnique			-	*Optional, default false*
									If true, make collapsed arrays unique

		Example:
		(code)
			store:{
				type:"query",
				autoLoad:true,
				sql:"select * from cust_values where  rownum < 100",
				post:function (data) {
					return data.collapse(["application","key"],true)
				}
			},

		(end)
		*/
		univnm.DataSet.prototype.collapse = function(partitionColumns, makeUnique){
			var result =new univnm.DataSet({
				columns:this.columns,data:[]
			})
			if (!this.length) return result;

			var index = {};

			this.forEach(function(row){
				var key = partitionColumns.map(function(col){
					return String(row[col]);
				}).join();

				if (index[key]){
					univnm.ObjectLib.getKeys(row)
					.filter(function(col){
						return !partitionColumns.contains(col)
					})
					.forEach(function(col){
						if (!(index[key][col] instanceof Array)){
							index[key][col] = [index[key][col]]
						}
						if (makeUnique){
							index[key][col].appendUnique(row[col])	;
						} else {
							index[key][col].push(row[col])	;
						}
					})
				} else {
					result.push(
						index[key] = univnm.ObjectLib.applyTo(row,{})
					);
				}

			})
			return result;
		}
	/* Function: containsByCol
		returns true if any row in the DataSet has a _column_ value that matches
		_compare_

		Parameters:
			column			-	name of the column to search.
			compare		-	RegExp, string regular expresion, or function to compare.
								if _compare_ is a function, it will be called with the
								"Compare Function Arguments" below. The supplied compare
								function should return true if the current row should be
								output

		Compare Function Arguments:
			columnValue	-	Value of _column_ in the current row,
			data			-	An object that represents all the columns in this row
			index			-	The index of the current row
			dataset		-	A reference to this dataset

		*/
		univnm.DataSet.prototype.containsByCol = function(column, compare){
			if (!column) throw new SyntaxError("column is required")
			if (!compare
				|| (
					!(compare instanceof RegExp )
					&& !(typeof compare =="string")
					&& !(compare instanceof Function)
				)
			) throw new SyntaxError("compare is required, and must be either a RegExp object,a string regular expression, or a function")
			if (typeof compare  =="string") compare = new RegExp(compare);
			if (compare instanceof RegExp){
				var regex = compare;
				compare = function(columnValue){
					return regex.test(columnValue)
				}
			}
			for (var x=0; x < this.length; ++x){
				if (compare(this[x][column],this[x],x,this)){
					return true;
				}
			}
			return false;
		};
	/* Function: findFirstByCol
		returns the first row in the DataSet whose _column_ value matches _compare_, or
		null if no matches

		Parameters:
			column			-	name of the column to search.
			compare		-	RegExp, string regular expresion, or function to compare.
								if _compare_ is a function, it will be called with the
								"Compare Function Arguments" below. The supplied compare
								function should return true if the current row should be
								output

		Compare Function Arguments:
			columnValue	-	Value of _column_ in the current row,
			data			-	An object that represents all the columns in this row
			index			-	The index of the current row
			dataset		-	A reference to this dataset

		*/
		univnm.DataSet.prototype.findFirstByCol = function DataSet_findFirst(column, compare){
			if (!column) throw new SyntaxError("column is required")
			if (!compare
				|| (
					!(compare instanceof RegExp )
					&& !(typeof compare  =="string" || String(compare) == compare)
					&& !(compare instanceof Function)

				)
			) throw new SyntaxError("compare is required, and must be either a RegExp object,a string regular expression, or a function")
			if (typeof compare=="string" || String(compare) == compare) compare = new RegExp("^"+String(compare).escapeRegex()+"$");
			if (compare instanceof RegExp){
				var regex = compare;
				compare = function(columnValue){
					return regex.test(columnValue)
				}
			}
			for (var x=0; x < this.length; ++x){
				if (compare(this[x][column],this[x],x,this)){
					return this[x];
				}
			}
			return null;
		};
	/* Function: findAllByCol
		returns a new DataSet of all the rows in this DataSet whose _column_ value
		matches _compare_

		Parameters:
			column			-	name of the column to search.
			compare		-	RegExp, string regular expression, or function to compare.
								if _compare_ is a function, it will be called with the
								"Compare Function Arguments" below. The supplied compare
								function should return true if the current row should be
								output

		Compare Function Arguments:
			columnValue	-	Value of _column_ in the current row,
			data			-	An object that represents all the columns in this row
			index			-	The index of the current row
			dataset		-	A reference to this DataSet

		*/
		univnm.DataSet.prototype.findAllByCol = function DataSet_findAll(column, compare){
			var $this = this;
			if (!column) throw new SyntaxError("column is required")
			if (!compare
				|| (
					!(compare instanceof RegExp )
					&& !(typeof compare  =="string")
					&& !(compare instanceof Function)
				)
			) throw new SyntaxError("compare is required, and must be either a RegExp object,a string regular expression, or a function")
			if (typeof compare  =="string") compare = new RegExp("^"+compare.escapeRegex()+"$");
			if (compare instanceof RegExp){
				var regex = compare;
				compare = function(columnValue){
					return regex.test(columnValue)
				}
			}
			return new univnm.DataSet({
				columns:$this.columns,
				data:$this.filter(function(row,index,dataset){
					return compare(row[column],index,row,dataset)
				})
			})

		};
	/* Function: valueArray
		returns an array of the values of a column.

		Parameters:
			columnName		-	String Column name to return
		*/
		univnm.DataSet.prototype.valueArray=function(columnName){
			var name=columnName;
			return Array.prototype.map.call(this,function(element){ return element[name]})
		}
	/* Function: map
		Creates a new DataSet with the results of calling a provided function on every element in this array.

		See:
			<Array.map>
		*/
		univnm.DataSet.prototype.map = function(func) {
			return new univnm.DataSet({
				data:Array.prototype.map.call(this,func),
				columns:this.columns
			})
		}
	/* Function: filter
		Performs Array.filter, but returns a new DataSet with the same columns as
		this one

		See:
			<Array.filter>
		*/
		univnm.DataSet.prototype.filter = function() {
		  var args = Array.prototype.slice.call(arguments,0);
		  return new univnm.DataSet({
				data:Array.prototype.filter.apply(this,args),
				columns:this.columns
		  })
		}
	/* Function: concat
		Performs Array.concat, but returns a new DataSet with the same columns as
		this one

		See:
			<Array.concat>
		*/
		univnm.DataSet.prototype.concat = function(otherArray) {
			var data= []
			this.forEach(function(row){
				data.push(row)
			})
			otherArray.forEach(function(row){
				data.push(row)
			})
			return new univnm.DataSet({
				data:data,
				columns:this.columns
			})
		}
	/* Function: slice
		Performs Array.slice, but returns a new DataSet with the same columns as
		this one

		See:
			<Array.slice>
		*/
		univnm.DataSet.prototype.slice = function() {
			var args = Array.prototype.slice.call(arguments,0);
			return new univnm.DataSet({
				data:Array.prototype.slice.apply(this,args),
				columns:this.columns
			})
		}
	/* Function: merge
		merges another DataSet into this one, by a common column value

		Parameters:
			ds			-	Other dataset to merge into this one
			column		-	String name of column that the two DataSets have in common

		Example:
		(code)
			var a = new univnm.DataSet([{
				id:1,
				name:"bob"
			}])

			var a = new univnm.DataSet([{
				id:1,
				age:15
			}])

			a.merge(b,"id")
		(end)

		*/
		univnm.DataSet.prototype.merge = function(ds,column) {
			var $this = this
			if (!ds || !("columns" in ds)) throw new Error("First Param must be an instance of DataSet")
			var myColumns = this.columns.join()
			ds.columns.forEach(function(colname){
				if (!myColumns.listContains(colname)) {
					$this.columns.push(colname)
				}
			})
			if (!this.columnIndex) this.columnIndex={};
			if (!this.columnIndex[column]){
				this.columnIndex[column] ={};
				this.forEach(function(row){
					$this.columnIndex[column][row[column]] = row;
				})
			};

			ds.forEach(function(relatedRow){
				// var relatedRow= ds.findFirstByCol(column,row[column])
				var row= $this.columnIndex[column][relatedRow[column]]
				if (row){
					ds.columns.filter(function(colname){
						return colname != column}
					).forEach(function(col){
						row[col] = relatedRow[col]
					})
				}
			})
		}
	/* Function: minByCol
		returns the "smallest" value of a column.

		Parameters:
			column		-	column to compare
			compare	-	*Optiional, default: function(a,b){return a < b}*
							A compare function like sort() uses to determine the minimum
							value

		*/
		univnm.DataSet.prototype.minByCol = function(column,compare) {
			if (!compare) compare = function(a,b){return a < b}
			return this.reduce(function(result,e){
				if (result === null ||compare(e[column],result)) {
					return e[column];
				} else return result;
			},null);
		}
	/* Function: maxByCol
		returns the "largest" value of a column.

		Parameters:
			column		-	column to compare
			compare	-	*Optiional, default: function(a,b){return a > b}*
							A compare function like sort() uses to determaxe the maximum
							value

		*/
		univnm.DataSet.prototype.maxByCol = function(column,compare) {
			if (!compare) compare = function(a,b){return a > b}
			return this.reduce(function(result,e){
				if (result === null ||compare(e[column],result)) {
					return e[column];
				} else return result;
			},null);
		}
	/* Function: sumByCol
		returns a sum of the values of a column.

		Parameters:
			column		-	column to sum
			accessor	-	*Optional, default: function(element){return element}*
							A function that takes an element of the column and returns a
							value to be summed. This is useful to force integer math or
							to sum a property of the objects in the column rather than
							the objects themselves.

		*/
		univnm.DataSet.prototype.sumByCol = function(column,accessor) {
			if (!accessor) accessor = function(element){return element}
			return this.reduce(function(result,e){
				return result + accessor(e[column]);
			},0);
		}
	/* Function: sortByCol
		sorts the DataSet by the supplied column and compare function.

		Parameters:
			column		-	column to sort
			compare	-	*Optiional, default: String.compareAlpha*
							A compare function that takes 2 elements and returns either
							1, 0, or -1

			Example:
			(code)
				var files = new Myna.File("/").listFiles()
				files.sortByCol("fileName",String.compareNatural)
			(end)

		*/
		univnm.DataSet.prototype.sortByCol = function(column,compare) {
			if (!compare) compare=String.compareAlpha;
			this.sort(function(a,b){
				return compare(a[column],b[column])
			})
		}
	/* Function: avgByCol
		returns an average of the column.

		Parameters:
			column		-	column to average
			accessor	-	*Optional, default: function(element){return element}*
							A function that takes an element of the column and returns a
							value to be averaged. This is useful to force integer math
							or to average a property of the objects in the column rather
							than the objects themselves.

		Note:
			null values are ignored. If you want to count nulls as 0, use this
			_accessor_

			(code)
				function(element){
					return element===null?0:element;
				}
			(end)
		*/
		univnm.DataSet.prototype.avgByCol = function(column,accessor) {
			if (!accessor) accessor = function(element){return element}
			return this.filter(function(e){
				return accessor(e[column]) !== null;
			}).reduce(function(result,e,index,array){
				if (index < array.length -1){
					return result + accessor(e[column]);
				} else {
					result += accessor(e[column]);
					return result / array.length + " : " + array.length;
				}
			},0);
		}
	/* Function: toHtmlTable
		returns an HTML table of this dataset
		*/
		univnm.DataSet.prototype.toHtmlTable = function() {
			var columns =this.columns
			var ds = this
			var result =""
				+ '<table border="1" class="dataset-table" cellpading="2">'
				+ '<tr class="dataset-column-headrow">'
				+ columns.map(function(col){

						return '<th align="left" style="background-color:silver;padding:4px;">' + col + '</th>';
				}).join("") + '</tr>'
				+ ds.map(function(row,index){
						return '<tr class="dataset-column-datarow " >'
						+ columns.map(function(col){
							try{
								return '<td align="left" style="'+(index%2?"background-color:silver;":"background-color:lightblue;")+'">' + row[col] + '</td>';
							} catch (e){
								return '<td align="left" style="'+(index%2?"background-color:silver;":"background-color:lightblue;")+'">[UNKNOWN]</td>';
							}
						}).join("")
						+ '</tr>'
				}).join("")
				+"</table>";
			return result
		}
	/* Function: pivot
		returns a new DataSet pivoted around a key, category, and value

		Parameters:
			keyField		-	Column name that contains the unique value for
								every row in the result. Duplicate values for
								calculated columns will overwrite, missing
								values will be set to null

			categoryField 	-	Column name that contains the new columns that
								should be created. These names will be cleaned
								such that invalid characters are replaced with
								"_" and the result is lower cased. If this would
								result in a blank column (such as numeric
								values) then "category_<value>" is used for the
								column name. If that still doesn't work, then
								"category__unknown" is used for the column name

			valueField		-	Column name that contains the values for each key
			cleanFieldName	-	*Optional*
								function to clean pivot values before converting
								them to field names. The default is to strip
								spaces and non alpha numeric characters

		Detail:
			The purpose of this function is to convert a data set that looks like
			this

			(code)
				user  | category       | value
				----------------------------------
				bob	  | Age            | 35
				sally | Age            | 25
				bob   | Favorite Color | blue
				sally | Favorite Color | yellow
				bob   | Start Date     | 01/01/2001
				sally | Start Date     | 05/16/1997
			(end)

			into something like this

			(code)
				user   | age | favorite_color | start _date
				--------------------------------------------
				bob    | 35  | blue           | 01/01/2001
				sally  | 25  | yellow         | 05/16/1997
			(end)

			The above transform would be accomplished with

			(code)
				ds.pivot("user","category","value")
			(end)

		*/
		univnm.DataSet.prototype.pivot = function(keyField,categoryField,valueField, cleanFieldName){
			var $this = this;
			var data = []
			var keyIndex={}

			var columns=$this.columns.filter(function(colName){
				return ![categoryField,valueField].contains(colName)
			});
			var calculated;
			cleanFieldName = cleanFieldName || function (fieldName){
				var result = String(fieldName).replace(/^[\W\d_]+/,"").replace(/\W+/g,"_").replace(/[\W_]$/,"")
				if (!result) {
					result= cleanFieldName("category_"+fieldName);
					if (result == "category_") return "category__unknown"
				}
				return result.toLowerCase()
			}

			this.forEach(function(row){
				var key =row[keyField]

				if (!(key in keyIndex)) {
					var newRow = {}
					newRow[keyField] = key

					keyIndex[key] = data[data.push(newRow)-1]
				}
				var category = cleanFieldName(row[categoryField]);
				if (!columns.contains(category)){
					columns.push(category)
				}

				keyIndex[key][category] = row[valueField]
				$this.columns.filter(function(colName){
					return ![keyField,categoryField,valueField].contains(colName)
				}).forEach(function(colName){
					keyIndex[key][colName] = row[colName]
				})
			})
			data = data.map(function(row){
				columns.forEach(function(col){
					if (!(col in row)) row[col] = null
				})
				return row
			})
			var ds = new univnm.DataSet({
				columns:columns,
				data:data
			})
			return ds

		}

	/* Function: toStruct
		converts a DataSet into an hierarchical object

		Parameters:
			keyCols				-	Array of column names, in order of significance,
			remainingProperty	-	*Optional, default null*
									if keyCols does not uniquely identify every
									row in the DataSet, and _remainingProperty_
									is defined, then the remain rows will be
									added to this property as an array.
			full				-	*Optional, default false*
									If true, each level in the hierarchy contains
									all the values of the first row of that branch,
									and sub trees branch of the col name

		The purpose of this function is to convert flat result sets into a
		structured hierarchy. This is best illustrated by examples

		Examples:
		(code)
		// Original Set
			//	employee_id	| title					| position_code | department_name			 | department_code
			//	----------- | --------------------- | ------------- | -------------------------- | ---------------
			//	100000001	| Cp Tech-Mental Health	| 01021C		| MILAGRO					 | 01106550
			//	100000003	| Universal Interviewer	| 054700		| MED SPECIALTIES CLINIC B	 | 01017120
			//	100000075	| Clerk Outpt			| 054700		| MED SPECIALTIES CLINIC B	 | 01017120
			//	100001035	| Clerk Outpt			| 054700		| MED SPECIALTIES CLINIC B	 | 01017120

		var simple = original_set.toStruct(["position_code","department_code"])
			[ Object ]
			  +-[01021C] [ Object ]
			  | \-[01106550] [ Array ]
			  |   \-[0] [ Object ]
			  |     +-[department_code] 01106550
			  |     +-[department_name] MILAGRO
			  |     +-[employee_id] 100000001
			  |     +-[position_code] 01021C
			  |     \-[title] Cp Tech-Mental Health
			  \-[054700] [ Object ]
				\-[01017120] [ Array ]
				  +-[0] [ Object ]
				  | +-[department_code] 01017120
				  | +-[department_name] MED SPECIALTIES CLINIC B
				  | +-[employee_id] 100000003
				  | +-[position_code] 054700
				  | \-[title] Universal Interviewer
				  +-[1] [ Object ]
				  | +-[department_code] 01017120
				  | +-[department_name] MED SPECIALTIES CLINIC B
				  | +-[employee_id] 100000075
				  | +-[position_code] 054700
				  | \-[title] Clerk Outpt
				  \-[2] [ Object ]
					+-[department_code] 01017120
					+-[department_name] MED SPECIALTIES CLINIC B
					+-[employee_id] 100001035
					+-[position_code] 054700
					\-[title] Clerk Outpt
		var simple_with_rows = original_set.toStruct(["position_code","department_code"],"rows")
			[ Object ]
			  +-[01021C] [ Object ]
			  | \-[01106550] [ Object ]
			  |   \-[rows] [ Array ]
			  |     \-[0] [ Object ]
			  |       +-[department_code] 01106550
			  |       +-[department_name] MILAGRO
			  |       +-[employee_id] 100000001
			  |       +-[position_code] 01021C
			  |       \-[title] Cp Tech-Mental Health
			  \-[054700] [ Object ]
				\-[01017120] [ Object ]
				  \-[rows] [ Array ]
					+-[0] [ Object ]
					| +-[department_code] 01017120
					| +-[department_name] MED SPECIALTIES CLINIC B
					| +-[employee_id] 100000003
					| +-[position_code] 054700
					| \-[title] Universal Interviewer
					+-[1] [ Object ]
					| +-[department_code] 01017120
					| +-[department_name] MED SPECIALTIES CLINIC B
					| +-[employee_id] 100000075
					| +-[position_code] 054700
					| \-[title] Clerk Outpt
					\-[2] [ Object ]
					  +-[department_code] 01017120
					  +-[department_name] MED SPECIALTIES CLINIC B
					  +-[employee_id] 100001035
					  +-[position_code] 054700
					  \-[title] Clerk Outpt
		var full_with_rows = original_set.toStruct(["position_code","department_code"],"rows")
			[ Object ]
			  +-[department_code] 01106550
			  +-[department_name] MILAGRO
			  +-[employee_id] 100000001
			  +-[position_code] [ Object ]
			  | +-[01021C] [ Object ]
			  | | +-[department_code] [ Object ]
			  | | | \-[01106550] [ Object ]
			  | | |   +-[department_code] 01106550
			  | | |   +-[department_name] MILAGRO
			  | | |   +-[employee_id] 100000001
			  | | |   +-[position_code] 01021C
			  | | |   +-[rows] [ Array ]
			  | | |   | \-[0] [ Object ]
			  | | |   |   +-[department_code] 01106550
			  | | |   |   +-[department_name] MILAGRO
			  | | |   |   +-[employee_id] 100000001
			  | | |   |   +-[position_code] 01021C
			  | | |   |   \-[title] Cp Tech-Mental Health
			  | | |   \-[title] Cp Tech-Mental Health
			  | | +-[department_name] MILAGRO
			  | | +-[employee_id] 100000001
			  | | +-[position_code] 01021C
			  | | \-[title] Cp Tech-Mental Health
			  | \-[054700] [ Object ]
			  |   +-[department_code] [ Object ]
			  |   | \-[01017120] [ Object ]
			  |   |   +-[department_code] 01017120
			  |   |   +-[department_name] MED SPECIALTIES CLINIC B
			  |   |   +-[employee_id] 100000003
			  |   |   +-[position_code] 054700
			  |   |   +-[rows] [ Array ]
			  |   |   | +-[0] [ Object ]
			  |   |   | | +-[department_code] 01017120
			  |   |   | | +-[department_name] MED SPECIALTIES CLINIC B
			  |   |   | | +-[employee_id] 100000003
			  |   |   | | +-[position_code] 054700
			  |   |   | | \-[title] Universal Interviewer
			  |   |   | +-[1] [ Object ]
			  |   |   | | +-[department_code] 01017120
			  |   |   | | +-[department_name] MED SPECIALTIES CLINIC B
			  |   |   | | +-[employee_id] 100000075
			  |   |   | | +-[position_code] 054700
			  |   |   | | \-[title] Clerk Outpt
			  |   |   | \-[2] [ Object ]
			  |   |   |   +-[department_code] 01017120
			  |   |   |   +-[department_name] MED SPECIALTIES CLINIC B
			  |   |   |   +-[employee_id] 100001035
			  |   |   |   +-[position_code] 054700
			  |   |   |   \-[title] Clerk Outpt
			  |   |   \-[title] Universal Interviewer
			  |   +-[department_name] MED SPECIALTIES CLINIC B
			  |   +-[employee_id] 100000003
			  |   +-[position_code] 054700
			  |   \-[title] Universal Interviewer
			  \-[title] Cp Tech-Mental Health


		(end)
		*/
		univnm.DataSet.prototype.toStruct = function(keyCols, remainingProperty, full){
			if (!this.length) return {}
			var result =full?univnm.ObjectLib.applyTo(this[0],{}):{};
			var base =full?result[keyCols[0]] = {}:result;
			var $this = this;
			this.forEach(function(row,index){
				var path=""
				var curArray= keyCols.reduce(function(parent,colName,index){
					path+="."+colName
					//univnm.jslib.debug_window(path +" starting col  " + colName )
					var colVal = row[colName];
					//if (colVal == parseInt(colVal)) colVal = colName +"_"+colVal
					var curRow;
					if (!(colVal in parent)){
						//univnm.jslib.debug_window(path +" adding " + colName +" : " +colVal + " : " +index)
						var curRow = parent[colVal] =full?univnm.ObjectLib.applyTo(row,{}):{};

						//parent.push(parent[colVal])
						if (index < keyCols.length-1) {
							 if (full) curRow[keyCols[index +1]] ={}
						} else if (remainingProperty){

							curRow[remainingProperty] =new univnm.DataSet({
								columns:$this.columns
							})
						} else if (!full){
							curRow = parent[colVal]  =new univnm.DataSet({
								columns:$this.columns
							})
						}
					} else {
						curRow =parent[colVal]
					}

					if (index < keyCols.length-1) {
						//univnm.jslib.debug_window(path +" decending to " + keyCols[index +1],  parent[colVal][keyCols[index +1]])

						return full?curRow[keyCols[index +1]]:curRow;
					} else if (remainingProperty){
						return curRow[remainingProperty];
					} else if (!full){
						return curRow;
					} else {
						return parent
					}


				},base)
				if (remainingProperty ||!full){
					curArray.push(univnm.ObjectLib.applyTo(row,{}))
				}

			})
			return result;
		}

/* Class: univnm.Profiler
	Stores execution times between begin() and end() functions

	Detail:
		The univnm.Profiler class is for tracking execution time. More than one
		univnm.Profiler can be active at a time, but generally it is most convenient
		to use the global $profiler instance.

	Note:
		univnm.ccl_callback automatically logs callback times to $profiler

	Example:
		(code)
			<!--  LOAD THE GENERAL JS LIBS -->
			<script src="../shared/js/mpages_core.js"></script>
			<script src="../shared/js/mpages_jslib.js"></script><script>$profiler.mark("jslib loaded");</script>

			<script src="../jquery/jquery-1.4.2.min.js"></script><script>$profiler.mark("jQuery loaded");</script>
			<script src="../ext/ext-3.2.1/adapter/jquery/ext-jquery-adapter.js"></script><script>$profiler.mark("jQuery adapter loaded");</script>
			<script src="../ext/ext-3.2.1/ext-all.js"></script><script>$profiler.mark("Ext loaded");</script>
			<script src="../shared/js/jquery.mpages.js"></script><script>$profiler.mark("jquery.mpages loaded");</script>
			<script src="../shared/js/PCRemotingProvider.js"></script><script>$profiler.mark("PCRemotingProvider loaded");</script>


			<script>
				window.onload = function(){
					$profiler.mark("onload started")
					var cb = function(){
						univnm.jslib.ccl_callback({
								ccl:"mark_test",
								parameters:["MINE","1","2","3"],
								async:true
						})
					}


					cb.repeat(10)

					setTimeout(function(){
						univnm.jslib.debug_window($profiler.getAveragesHtml())
						univnm.jslib.debug_window($profiler.getSummaryHtml())
					},1000)
					$profiler.mark("onload finished")
				}

			</script>
		(end)

		Displays HTML somewhat like this...

		(code)
		Label                                              | Num Entires     | Average Ms
		-------------------------------------------------- | --------------- | ---------------
		ccl_callback: mark_test ^MINE^,MINE,1,2,3          | 10              | 126.5


		Label                                              | Elapsed Millis  | Elapsed Total
		-------------------------------------------------- | --------------- | ---------------
		jslib loaded                                       |                 | 87
		jQuery loaded                                      |                 | 154
		jQuery adapter loaded                              |                 | 180
		Ext loaded                                         |                 | 788
		jquery.mpages loaded                               |                 | 792
		PCRemotingProvider loaded                          |                 | 796
		onload started                                     |                 | 893
		ccl_callback: mark_test ^MINE^,MINE,1,2,3          | 139             | 894
		ccl_callback: mark_test ^MINE^,MINE,1,2,3          | 134             | 903
		ccl_callback: mark_test ^MINE^,MINE,1,2,3          | 132             | 909
		ccl_callback: mark_test ^MINE^,MINE,1,2,3          | 130             | 914
		ccl_callback: mark_test ^MINE^,MINE,1,2,3          | 127             | 920
		ccl_callback: mark_test ^MINE^,MINE,1,2,3          | 125             | 925
		ccl_callback: mark_test ^MINE^,MINE,1,2,3          | 123             | 931
		ccl_callback: mark_test ^MINE^,MINE,1,2,3          | 121             | 936
		ccl_callback: mark_test ^MINE^,MINE,1,2,3          | 118             | 942
		ccl_callback: mark_test ^MINE^,MINE,1,2,3          | 116             | 948
		onload finished                                    |                 | 953

		(end)

	*/

	/* Constructor: univnm.Profiler
		Constructor function for univnm.Profiler class

		Parameters:
			start		-	*Optional, default new Date().getTime()*
							Milliseconds since epoch to use as starting point.

		Returns:
			Reference to univnm.Profiler instance
		*/
		univnm.Profiler=function (start){
			this.times = [];
			this.labels = {};
			this.start = start || new Date().getTime();
		}

	univnm.Profiler.prototype.start=0;

	/* Function: begin
		Sets begin point for a given label.

		Parameters:
			label		-	string label for this event
			time		- 	*Optional, default new Date().getTime()*
							Time to record for this entry

		Returns:
			A function that can be used to set the end time. This functions can
			be called with no parameters to set the end time to "now" or you can
			pass a millisecond timestamp to set a specific end time. This can be
			useful for asynchronous operations to make sure that correct entry
			is updated

		Detail:
			If an entry with this label was already pending, it is closed
			and a new entry is started.

		Example:
		(code)
			$profiler.begin("Doin' Stuff")
			doStuff();
			$profiler.end("Doin' Stuff")

			var endFunction =$profiler.begin("Doin' Stuff Asynchronously")
			var doStuffWithCallback(args,callback) {
				callAsyncFunction()
			}
			var doStuffWithCallback(args,function(result){
				// use encosed end function to set end time on the correct begin()
				endFunction()
				... handle result ...
			})

		(end)

		See:
		* <end>
		*/
		univnm.Profiler.prototype.begin = function(label,time){
			var key=label.replace(/[\W]*/,""),
				entry={
					label:label,
					begin:time || new Date().getTime()
				}
			this.times.push(entry);
			if (this.labels[key] && !this.labels[key].end){
				this.end(key,entry.begin);
			}
			this.labels[key] = entry;
			return function(time){
				entry.end=time||new Date().getTime()
				var dur = entry.end - entry.begin;
				if (dur > 100 && label.substr(0, 12) != "ccl_callback") {
					//console.log(label + " took a while: " + dur.toString() + "ms");
				}
			}
		}


	/* Function: end
		Sets end point for a given label.

		Parameters:
			label		-	string label for this event
			time		- 	*Optional, default new Date().getTime()*
							Time to record for this entry

		Detail:
			If no entry is pending for this label, one is created with the same time,
			and the entries *isMark* property is set to true;
		*/
		univnm.Profiler.prototype.end = function(label,time){
			var now=time||new Date().getTime(),
				key=label.replace(/[\W]*/,"");
			if (!this.labels[key]){
				this.begin(label,now);
				this.labels[key].isMark=true;
			}
			this.labels[key].end=now;
		}
	/* Function: mark
		Sets a bookmark entry.

		Parameters:
			label		-	string label for this event
			time		- 	*Optional, default new Date().getTime()*
							Time to record for this entry

		Detail:
			This is the same behavior as <end> when there is no <begin>.
			An entry is created with both begin and end set to _time_ and
			the entry's *isMark* property is set.
		*/
		univnm.Profiler.prototype.mark=function(label,time){

			label =String(label);
			this.end(label)
			///var now=time||new Date().getTime(),
			//	key=label.replace(/[\W]*/,"");
			//this.end(label)
			// this.begin(label,now);
			//this.labels[key].isMark=true;
			//this.labels[key].end=now; */
		}
	/* Function: getAveragesArray
		returns an array of tasks with average execution time in milliseconds

		Note:
		This will only return entries with a "begin" and "end".

		See:
		* <getAveragesHtml>
		*/
		univnm.Profiler.prototype.getAveragesArray = function(){
			var tasks ={}

			this.times.filter(function(t){
				return !t.isMark && parseInt(t.end - t.begin) == t.end - t.begin;
			}).forEach(function(t){
				if (!(t.label in tasks)){
					tasks[t.label] = []
				}
				tasks[t.label].push(t.end - t.begin)
			})

			return univnm.ObjectLib.getKeys(tasks).sort().map(function(label){
				return {
					label:label,
					averageMs:parseInt(tasks[label].avg()),
					numEntries:tasks[label].length
				}
			})
		}
	/* Function: getAveragesHtml
		returns <getTaskAverages> in an HTML table.
		*/
		univnm.Profiler.prototype.getAveragesHtml = function(){
			var msg=[
				'<style>',
					'.profiler_table {',
						'border:1px solid black;',
					'}',
					'.profiler_table th{',
						'font-weight:bold;',
					'}',
					'.profiler_table td{',
						'border:1px solid black;',
					'}',
					'.profiler_table .alt_row td{',
						'background-color:silver',
					'}',
				'</style>',
				'<table class=profiler_table>',
				'<tr>',
				'<th>Label</th><th>Num Entries</th><th>Average Ms</th>',
				'</tr>'
			];
			this.getAveragesArray().forEach(function(t,index){
				var alt_row = (index%2==0) ? "alt_row":"";
				msg.push("<tr class='" +alt_row + "'>");
				msg.push("<td>" + String(t.label) +"</td>");
				msg.push("<td>" + String(t.numEntries) +"</td>");
				msg.push("<td>" + String(t.averageMs) +"</td>");
				msg.push("</tr>");
			});

			msg.push("</table>") ;

			return msg.join("\n");
		}
	/* Function: getAveragesText
		returns a text table of average times.

		*/
		univnm.Profiler.prototype.getAveragesText = function(){
			var delim = " | ";
			var msg=[
				"Label".toFixedWidth(50) + delim + "Num Entires".toFixedWidth(15)+ delim + "Average Ms".toFixedWidth(15),
				"-".repeat(50) + delim + "-".repeat(15)+ delim + "-".repeat(15)
			]
			this.getAveragesArray().forEach(function(t,index){
				msg.push(String(t.label).toFixedWidth(50," ","...","middle")
					+ delim + String(t.numEntries).toFixedWidth(15)
					+ delim + String(t.averageMs).toFixedWidth(15)
				);
			});

			return msg.join("\n");
		}
	/* Function: getSummaryArray
		returns an array of all the entries.

		Detail:
			Each entry is an object with *begin* and *end* proerties,
			and optionally *isMark* or *isAverage* properties.
		*/
		univnm.Profiler.prototype.getSummaryArray = function(){
			var $this = this;
			return this.times.filter(function(entry){
				return entry.end
			}).map(function(entry,i){

				entry.total=entry.begin - $this.start;

				if (entry.isMark) {
					entry.type = "Checkpoint"
					entry.elapsed="";
				} else {
					entry.type = "Task"
					entry.elapsed=entry.end - entry.begin;
				}
				entry.totalText = Date.formatInterval(entry.total)
				return entry

			})

		}
	/* Function: getSummaryHtml
		returns an HTML summary of all the entries.

		*/
		univnm.Profiler.prototype.getSummaryHtml = function(){
			var msg=[
				'<style>',
					'.profiler_table {',
						'border:1px solid black;	',
					'}',
					'.profiler_table th{',
						'font-weight:bold;',
					'}',
					'.profiler_table td{',
						'border:1px solid black;',
					'}',
					'.profiler_table .alt_row td{',
						'background-color:silver;',
					'}',
				'</style>',
				'<table class=\'profiler_table\'>',
				'<tr> ',
					'<th>Label</th>',
					'<th>Task Ms</th>',
					'<th>Elapsed</th>',
				'</tr>'
			]
			var $this=this;
			this.times.filter(function(entry){
				return entry.end
			}).forEach(function(entry,i){
				var elapsed=entry.end - entry.begin;
				var total=entry.begin - $this.start;
				var label=entry.label;

				if (entry.isMark) {
					elapsed="&nbsp;";
					label = "MARK: " + label
				} else {
					label = "TASK: " + label
				}


				var alt_row = (i%2==0) ? "alt_row":"";
				msg.push("<tr class='" +alt_row + "'>");
				msg.push("<td>" + String(label) +"</td>");
				msg.push("<td>" + String(elapsed) +"</td>");
				msg.push("<td>" + String(Date.formatInterval(total)) +"</td>");
				msg.push("</tr>");
			})


			msg.push("</table>");

			return msg.join("\n");
		}

	/* Function: profile
		attaches profiling hooks to an object

		Parameters:
			obj		-	object to profile
			name	-	String. Name of this object to use in profile logs
			logArgs	-	*Optional, default false*
						If true, log arguments to function in the profiler

		Detail:
			This attaches "begin" and "end" profiling to every function in _obj_,
			and getters
		*/
		// Myna.Profiler.prototype.profile = function(obj,name,logArgs){
		// 	var $this = this;
		// 	var p;


		// 	function applyProfiler(target,prop,propName){
		// 		if (typeof target[prop] == "function"){
		// 			if (ObjectLib.getProperties(target[prop].prototype).length) return false;

		// 			//Myna.println(prop)
		// 				var chain = arguments.callee.chain;
		// 				var msg = name +"::" + propName +"(";
		// 				if (logArgs) {
		// 					try{
		// 					msg+=JSON.stringify(chain.args,null,"   ");
		// 					} catch(e){}
		// 				}
		// 				msg+=")";
		// 				chain._profileEnd = $this.begin(msg);
		// 				return chain.lastReturn;
		// 			});
		// 			ObjectLib.after(target,prop,function(){
		// 				var chain = arguments.callee.chain;
		// 				chain._profileEnd();
		// 				return chain.lastReturn;
		// 			});
		// 			return true;
		// 		}
		// 		return false;
		// 	}

		// 	for (p in obj){
		// 		applyProfiler(obj,p,p);
		// 	}

		// };

	/* Function: getSummaryText
		returns a text summary of all the entries.

		*/
		univnm.Profiler.prototype.getSummaryText = function(){
			var delim = " | ";
			var msg="";
				msg += "Label".toFixedWidth(50) + delim + "Elapsed Millis".toFixedWidth(15) + delim + "Elapsed Total".toFixedWidth(15) + "\n";
				msg += "-".repeat(50) + delim + "-".repeat(15) + delim + "-".repeat(15) + "\n";

			var total=0,entry,elapsed,label;
			for (var x=0; x < this.times.length; ++x){
				entry = this.times[x];
				if (!entry.end) continue;
				elapsed=entry.end - entry.begin;
				total=entry.begin - this.start;
				label=entry.label

				if (entry.isMark) {
					elapsed="";
				}

				if (entry.isAverage){
					elapsed=entry.average +" / " + entry.sum;
					total="";
					label +=" (Avg/Sum  of " + entry.numEntries +" entries)"
				}

				msg += String(label).toFixedWidth(50," ","...","middle") + delim
				msg += String(elapsed).toFixedWidth(15) + delim
				msg += String(total).toFixedWidth(15) + "\n";

			}

			return msg;
		}
	var $profiler=new univnm.Profiler()


/* Class: univnm.jslib.async
	Asynchronous function utilities


	Detail:
		The purpose of the Async library is to execute a group of asynchronous
		functions, with a single callback when they are complete. <marshal>
		executes the functions all at the same time, and <sequence> executes
		them in the order defined. Both of these functions return an async handle object
		that keeps track of the progress. To execute a function when all the
		async functions are complete, call "then(somefunction)" on the returned
		handle object.

		See:
		* <marshal>
		* <sequence>

		Note:
			both <marshal> and <sequence> recognize the returned async handle object,
			so these handle objects can be used to nest multiple sets of callbacks like
			so

		(code)
			var firstSet = univnm.jslib.async.sequence(f1,f2,..fn);
			var secondSet = univnm.jslib.async.sequence(f1,f2,..fn);
			//at this point both sets are executing their sequences in parallel
			univnm.jslib.async.marshal(
				firstSet,
				secondSet
			).then(function(){
				alert("both sets done!")
			})

		(end)
	*/
	univnm.jslib.async = {
	/* Function: marshal
			Executes multiple async functions and then a single handler when done

			Parameters:
				functions	-	one or more async functions that accept a
								function as their first	parameter, or an array
								of such functions. You can also use the returned
								handle from <marshal> or <sequence>
				scope		-	*Optional, default {}*
								the "this" object used for the callback
								functions and the _then_ handler


			returns:
				handle object with a "then" function. Call this with a function
				to execute when all async functions are complete

			Example:
			(code)
				univnm.jslib.async.marshal(
					function(done){
						var result = this; //all callbacks share "this"
						window.setTimeout(function(){
							console.log(1)
							result.val1 = "one!"
							done()
						},100)
					},
					function(done){
						var result = this;
						window.setTimeout(function(){
							console.log(2)
							result.val2 = "two!"
							done()
						},200)
					},
					function(done){
						var result = this;
						window.setTimeout(function(){
							console.log(3)
							result.val3 = "three!"
							done()
						},50)
					}
				).then(function(){
					//this runs when all callbacks are done
					console.log("all done!", this)//
				})

			This outputs:
				3
				1
				2
				all done!, Object
					val1:"one!",
					val2:"two!",
					val3:"three!"

			(end)

			You can also delay the final handler until a later time by saving
			the handle object and calling then() when you are ready

			(code)
			<script>

				var allCallbacks = univnm.jslib.async.marshal(
					function(done){
						ajax1(done);
					},
					function(done){
						ajax2(done);
					},
					function(done){
						ajax3(done);
					},
				)
				window.onload = function(){
					//this will execute immediately if all the callbacks are done,
					otherwise it will wait until they are all done before executing
					allCallbacks.then(function(){
						alert("Yippie! all done!")
					})
				}
			</script>
			(end)

			You can also build your callback set ahead of time and just pass an
			array of functions to univnm.jslib.async


			(code)
			<script>

				var allCallbacks = []

				if (condition1){
					allCallbacks.push(function(done){
						ajax1(done);
					})
				}

				if (condition2){
					allCallbacks.push(function(done){
						ajax2(done);
					})
				}

				if (condition3){
					allCallbacks.push(function(done){
						ajax3(done);
					})
				}


				//if the array is empty, the "then" function is immediately executed
				univnm.jslib.async.marshal(allCallbacks).then(function(){
					alert("all done!")
				})

			</script>
			(end)


		*/
		marshal:function(){
			var args= Array.parse(arguments)
			var scope = typeof args.last() =="object" && args.length > 1 && !("then" in args.last())?args.pop():{};
			if (args.first({}) instanceof Array) args = args.first()
			args = args.map(function(arg){
				var f=arg
				if (typeof f != "function") {
					f=function(done){
						arg.then(done)
					}
				}
				return function(done){
					f.call(scope,done);
				}
			})
			var handle ={
				count:args.length,
				then:function(thenFunction){
					if (thenFunction) {
						this.listeners.push(thenFunction);
					}


					if (!handle.count) {
						this.listeners.forEach(function(f){
							f.call(scope);
						})
						this.listeners =[];
					}
					return this
				},
				listeners:[]
			}
			var done =function(){
				if(!--handle.count){
					handle.then()
				}
			}
			args.forEach(function(f){
				try{
					f(done);
				} catch (e){
					if (typeof console != "undefined") console.log(e.stack)
					done()
				}
			})
			return handle;
		},
	/* Function: sequence
			Executes multiple async functions, one after the other, and then a
			single handler when done

			Parameters:
				functions	-	one or more async functions that accept a
								function as their first	parameter, or an array
								of such functions. You can also use the returned
								handle from <marshal> or <sequence>
				scope		-	*Optional, default {}*
								the "this" object used for the callback
								functions and the _then_ handler

			returns:
				handle object with a "then" function. Call this with a function
				to execute when all async functions are complete

			Example:
			(code)
				univnm.jslib.async.sequence(
					function(done){
						var result = this; //all callbacks share "this"
						window.setTimeout(function(){
							result.val1 = "one!"
							console.log(1)
							done()
						},100)
					},
					function(done){
						var result = this;
						window.setTimeout(function(){
							result.val2 = "two!"
							console.log(2)
							done()
						},200)
					},
					function(done){
						var result = this;
						window.setTimeout(function(){
							result.val3 = "three!"
							console.log(3)
							done()
						},50)
					}
				).then(function(){
					//this runs when all callbacks are done
					console.log("all done!", this)
				})

			This outputs:
				1
				2
				3
				all done!, Object
					val1:"one!",
					val2:"two!",
					val3:"three!"

			(end)

			You can also delay the final handler until a later time by saving
			the handle object and calling then() when you are ready

			(code)
			<script>

				var allCallbacks = univnm.jslib.async.sequence(
					function(done){
						ajax1(done);
					},
					function(done){
						ajax2(done);
					},
					function(done){
						ajax3(done);
					},
				)
				window.onload = function(){
					//this will execute immediately if all the callbacks are done,
					otherwise it will wait until they are all done before executing
					allCallbacks.then(function(){
						alert("Yippie! all done!")
					})
				}
			</script>
			(end)

		*/
		sequence:function(){
			var args= Array.parse(arguments);
			var scope = typeof args.last() =="object"  && args.length > 1 && !("then" in args.last())?args.pop():{};
			if (args.first({}) instanceof Array) args = args.first()
			args = args.map(function(arg){
				var f=arg
				if (typeof f != "function") {
					f=function(done){
						arg.then(done)
					}
				}
				return function(done){
					f.call(scope,done);
				}
			})
			var handle ={
				then:function(thenFunction){
					if (thenFunction) {
						this.listeners.push(thenFunction);
					}


					if (!args.length) {
						this.listeners.forEach(function(f){
							f.call(scope);
						})
						this.listeners =[];
					}
					return this
				},
				listeners:[]
			}
			var done =function(){
				args.shift();
				if(args.length){
					runFunction(args.first());
				} else {
					handle.then();

				}
			}
			var runFunction = function(f){
				try{
					f.call(scope,done);
				} catch (e){
					if (typeof console != "undefined") console.log(e)
					done()
				}
			}
			//first function or dummy return if no functions
			runFunction(args.first(function(done){done()}));

			return handle;
		}
	}
/* Class: Number
	Extensions to the JavaScript Number object

	*/

	/* Function: times
		Executes the supplied function parseInt(this) times.

		Parameters:
			func	-	a function to execute. This function will be called with the
						current 0-based index

		Example:
		(code)
			//extra dot forces "5" to be a number
			5..times(function(i){
				console.log(i + "<br>")
			});
		(end)
		*/
		Number.prototype.times = function(func){
			for (var x=0; x < parseInt(this); ++x){
				func(x);
			}
		}
/* Class: Array
	Additional functions on the JS Array object
	*/
	/* Function: every
		Tests whether all elements in the array pass the test implemented by the provided function.

		See:
			https://developer.mozilla.org/En/Core_JavaScript_1.5_Reference/Global_Objects/Array/every
		*/
		if (!Array.prototype.every)
		{

			Array.prototype.every = function(fun /*, thisp*/)
			{
				var len = this.length;
				if (typeof fun != "function")
					throw new TypeError();

				var thisp = arguments[1];
				for (var i = 0; i < len; i++)
				{
					if (i in this &&
							!fun.call(thisp, this[i], i, this))
						return false;
				}

				return true;
			};
		}
	/* Function: filter
		Creates a new array with all elements that pass the test implemented by the provided function.

		See:
			https://developer.mozilla.org/En/Core_JavaScript_1.5_Reference/Global_Objects/Array/filter
		*/
		if (!Array.prototype.filter)
		{

			Array.prototype.filter = function(fun /*, thisp*/){
				var len = this.length;
				if (typeof fun != "function")
					throw new TypeError();

				var res = new Array();
				var thisp = arguments[1];
				for (var i = 0; i < len; i++)
				{
					if (i in this)
					{
						var val = this[i]; // in case fun mutates this
						if (fun.call(thisp, val, i, this))
							res.push(val);
					}
				}

				return res;
			};
		}
	/* Function: forEach
		Executes a provided function once per array element.

		See:
			https://developer.mozilla.org/En/Core_JavaScript_1.5_Reference/Global_Objects/Array/forEach
		*/
		if (!Array.prototype.forEach){
			Array.prototype.forEach = function(fun /*, thisp*/){
				var len = this.length;
				if (typeof fun != "function")
					throw new TypeError();

				var thisp = arguments[1];
				for (var i = 0; i < len; i++)
				{
					if (i in this)
					fun.call(thisp, this[i], i, this);
				}
			};
		}
	/* Function: marshalEach
		Executes a provided function once per array element, asynchronously and
		returns a <univm.jslib.async.marshal> result

		Parameters:
			fun 		-	function to execute with each item in this array.
							See *Function Parameters* below for the arguments
							passed to _fun_ when called

		Function Parameters:
			done	-	function to be called when you are done processing. This
						must be called somewhere in your handler function
			value	-	value of current element
			index	-	array index of the current element
			array	-	reference to the array being looped over

		Each iteration will be called in it's own setTimeout, os it is important
		to call then() on the result in order to continue processing

		Example:
		(code)
			//break up a long running task to prevent script timeout errors
			univnm.db.query("select..",function(result){
				result.marshalEach(function(done,row){
					//do something intense with the row, like modifying the DOM
					done()
				}).then(function(){
					alert("all done with query")
				})
			})
		(end)
		See:
			* <forEach>
			* <univm.jslib.async.marshal>
		*/
		Array.prototype.marshalEach = function(fun){
			return univnm.jslib.async.marshal(
				this.map(function(item,index,sourceArray){
					return function(done){
						fun(done,item,index,sourceArray);
					}
				})
			)
		};
	/* Function: sequenceEach
		Executes a provided function once per array element, asynchronously,
		but in guaranteed in-order, and returns a <univm.jslib.async.sequence>
		result

		Parameters:
			fun 		-	function to execute with each item in this array.
							See *Function Parameters* below for the arguments
							passed to _fun_ when called

		Function Parameters:
			done	-	function to be called when you are done processing. This
						must be called somewhere in your handler function
			value	-	value of current element
			index	-	array index of the current element
			array	-	reference to the array being looped over

		Each iteration will be called in it's own setTimeout, os it is important
		to call then() on the result in order to continue processing

		Example:
		(code)
			//break up a long running task to prevent script timeout errors
			univnm.db.query("select..",function(result){
				result.sequenceEach(function(done,row){
					//do something intense with the row, like modifying the DOM
					done()
				}).then(function(){
					alert("all done with query")
				})
			})
		(end)
		See:
			* <forEach>
			* <univm.jslib.async.marshal>
		*/
		Array.prototype.sequenceEach = function(fun){
			return univnm.jslib.async.sequence(
				this.map(function(item,index,sourceArray){
					return function(done){
						fun(done,item,index,sourceArray);
					}
				})
			)
		};
	/* Function: indexOf
		Returns the first index at which a given element can be found in the array, or -1 if it is not present.

		See:
			https://developer.mozilla.org/En/Core_JavaScript_1.5_Reference/Global_Objects/Array/indexOf
		*/
		if (!Array.prototype.indexOf){
			Array.prototype.indexOf = function(elt /*, from*/)
				{
				var len = this.length;

				var from = Number(arguments[1]) || 0;
				from = (from < 0)
					 ? Math.ceil(from)
					 : Math.floor(from);
				if (from < 0)
					from += len;

				for (; from < len; from++)
				{
					if (from in this &&
						this[from] === elt)
					return from;
				}
				return -1;
			};
		}
	/* Function: lastIndexOf
		Returns the last index at which a given element can be found in the array, or -1 if it is not present.

		See:
			https://developer.mozilla.org/En/Core_JavaScript_1.5_Reference/Global_Objects/Array/lastIndexOf
		*/
		if (!Array.prototype.lastIndexOf){
			Array.prototype.lastIndexOf = function(elt /*, from*/){
				var len = this.length;

				var from = Number(arguments[1]);
				if (isNaN(from))
				{
					from = len - 1;
				}
				else
				{
					from = (from < 0)
						 ? Math.ceil(from)
						 : Math.floor(from);
					if (from < 0)
					from += len;
					else if (from >= len)
					from = len - 1;
				}

				for (; from > -1; from--)
				{
					if (from in this &&
						this[from] === elt)
					return from;
				}
				return -1;
			};
		}
	/* Function: map
		Creates a new array with the results of calling a provided function on every element in this array.

		See:
			https://developer.mozilla.org/En/Core_JavaScript_1.5_Reference/Global_Objects/Array/map
		*/
		if (!Array.prototype.map){
			Array.prototype.map = function(fun /*, thisp*/)
				{
				var len = this.length;
				if (typeof fun != "function")
					throw new TypeError();

				var res = new Array(len);
				var thisp = arguments[1];
				for (var i = 0; i < len; i++)
				{
					if (i in this)
					res[i] = fun.call(thisp, this[i], i, this);
				}

				return res;
			};
		}
	/* Function: dim
		returns an array of size _count_ containing null objects

		Parameters:
			count		-	number of integers in returned array


		Example:
		(code)
			var strings = Array.dim(5).map(function(element,index){
				return "String " + index++;
			})
		(end)
		*/
		if (!Array.dim){

			Array.dim = function(count){
				var result=[]
				for (var x = 0; x < count; ++x){
					 result.push(null);
				}
				return result
			};
		}



	/* Function: reduce
		Apply a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value.

		See:
			https://developer.mozilla.org/En/Core_JavaScript_1.5_Reference/Global_Objects/Array/reduce
		*/
		if (!Array.prototype.reduce){
			Array.prototype.reduce = function(fun /*, initial*/){
				var len = this.length;
				if (typeof fun != "function")
					throw new TypeError();

				// no value to return if no initial value and an empty array
				if (len == 0 && arguments.length == 1)
					throw new TypeError();

				var i = 0;
				if (arguments.length >= 2)
				{
					var rv = arguments[1];
				}
				else
				{
					do
					{
					if (i in this)
					{
						rv = this[i++];
						break;
					}

					// if array contains no values, no initial value to return
					if (++i >= len)
						throw new TypeError();
					}
					while (true);
				}

				for (; i < len; i++)
				{
					if (i in this)
					rv = fun.call(null, rv, this[i], i, this);
				}

				return rv;
			};
		}
	/* Function: reduceRight
		Apply a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value.

		See:
			https://developer.mozilla.org/En/Core_JavaScript_1.5_Reference/Global_Objects/Array/reduceRight
		*/
		if (!Array.prototype.reduceRight){
			Array.prototype.reduceRight = function(fun /*, initial*/){
				var len = this.length;
				if (typeof fun != "function")
					throw new TypeError();

				// no value to return if no initial value, empty array
				if (len == 0 && arguments.length == 1)
					throw new TypeError();

				var i = len - 1;
				if (arguments.length >= 2)
				{
					var rv = arguments[1];
				}
				else
				{
					do
					{
					if (i in this)
					{
						rv = this[i--];
						break;
					}

					// if array contains no values, no initial value to return
					if (--i < 0)
						throw new TypeError();
					}
					while (true);
				}

				for (; i >= 0; i--)
				{
					if (i in this)
					rv = fun.call(null, rv, this[i], i, this);
				}

				return rv;
			};
		}
	/* Function: some
		Tests whether some element in the array passes the test implemented by the provided function.

		See:
			https://developer.mozilla.org/En/Core_JavaScript_1.5_Reference/Global_Objects/Array/some
		*/
		if (!Array.prototype.some){

			Array.prototype.some = function(fun /*, thisp*/)
				{
				var len = this.length;
				if (typeof fun != "function")
					throw new TypeError();

				var thisp = arguments[1];
				for (var i = 0; i < len; i++)
				{
					if (i in this &&
						fun.call(thisp, this[i], i, this))
					return true;
				}

				return false;
			};
		}

	/* Function: min
		returns the "smallest" member of the array.

		Parameters:
			compare	-	*Optional, default: function(a,b){return a < b}*
							A compare function like sort() uses to determine the minimum
							value

		*/
		Array.prototype.min = function(compare) {
			if (!compare) compare = function(a,b){return a < b}
			return this.reduce(function(result,e){
				if (result === null ||compare(e,result)) {
					return e;
				} else return result;
			},null);
		}

	/* Function: max
		returns the "largest" member of the array.

		Parameters:
			compare	-	*Optional, default: function(a,b){return a > b}*
							A compare function like sort() uses to determaxe the maximum
							value

		*/
		Array.prototype.max = function(compare) {
			if (!compare) compare = function(a,b){return a > b}
			return this.reduce(function(result,e){
				if (result === null ||compare(e,result)) {
					return e;
				} else return result;
			},null);
		}

	/* Function: sum
		returns a sum of the array.

		Parameters:
			accessor	-	*Optional, default: function(element){return element}*
							A function that takes an element of the array and returns a
							value to be summed. This is useful to force integer math or
							to sum a property of the objects in the array rather than
							the objects themselves.

		*/
		Array.prototype.sum = function(accessor) {
			if (!accessor) accessor = function(element){return element}
			return this.reduce(function(result,e){
				return result + accessor(e);
			},0);
		}

	/* Function: avg
		returns an average of the array.

		Parameters:
			accessor	-	*Optional, default: function(element){return element}*
							A function that takes an element of the array and returns a
							value to be averaged. This is useful to force integer math
							or to average a property of the objects in the array rather
							than the objects themselves.
		Note:
			null values are ignored. If you want to count nulls as 0, use this
			_accessor_

			(code)
				function(element){
					return element===null?0:element;
				}
			(end)
		*/
		Array.prototype.avg = function(accessor) {
			if (!accessor) accessor = function(element){return element}
			return this.filter(function(e){
				return accessor(e) !== null;
			}).reduce(function(result,e,index,array){
				if (index < array.length -1){
					return result + accessor(e);
				} else {
					result += accessor(e);
					return result / array.length;
				}
			},0);
		}
	/* Function: last
		returns the last value in this array

		Parameters:
			defaultValue	-	*Optional, default throws error*
								If defined, this value will be returned if the
								Array is empty. Otherwise an error is thrown
		*/
		Array.prototype.last = function(){
			if (this.length) return this[this.length-1]
			if (arguments.length) return arguments[0]
			throw new Error("Attempt to call last() on empty Array without specifying a defaultValue")
		}
	/* Function: first
		returns the first value in this array

		Parameters:
			defaultValue	-	*Optional, default throws error*
								If defined, this value will be returned if the
								Array is empty. Otherwise an error is thrown
		*/
		Array.prototype.first = function(){
			if (this.length) return this[0]
			if (arguments.length) return arguments[0]
			throw new Error("Attempt to call first() on empty Array without specifying a defaultValue")
		}

	/* Function: parse
		Static function that returns an array from an array like object, or null if
		conversion is not possible

		Parameters:
			obj						-	object to convert
			accessFunction		-	*Optional, default function(obj,index){return obj[index]}*
										function that takes _obj_ and an index and returns
										the item at that index
			lengthFunction		-	*Optional, default function(obj){return obj.length}*
										function that takes _obj_ and returns the length of
										the collection

		Detail:
			Takes an array-like object and returns an array containing its items.

		Example:
		(code)
		//convert function arguments into an array of arguments
		function echoArgs(){
			console.log(Array.parse(arguments))
		}

		// client side example:
		// getElementsByTagName() returns an array-like collection, but it doesn't
		// have any of the Array extras like "filter"
		univnm.jslib.debug_window(
			Array.parse(document.getElementsByTagName("div"))
			.filter(function(div){
				return /panel/.test(div.className);
			})
		)
		(end)

		Note:
			Built-in handling exisits for E4X nodes, such that these are valid syntax:

			(code)
				var array = Array.parse(xml.entry.title)
				var array = Array.parse(xml..*)
			(end)
		*/
		Array.parse = function ParseArray(obj,accessFunction,lengthFunction){
			var result =[];
			if (typeof XML != "undefined" && obj instanceof XML){
				accessFunction =  function(obj,index){return obj[index]}
				lengthFunction =function(obj){return obj.length()}
			}
			if (!accessFunction) accessFunction = function(obj,index){return obj[index]}
			if (!lengthFunction) lengthFunction = function(obj){return obj.length}



			for (var x=0; x < lengthFunction(obj); ++x){
				result.push(accessFunction(obj,x));
			}
			return result;
		}

	/* Function: compact
		removes undefined values from an array

		Detail:
			Modifies an array in place by removing values and renumbering the indexes

		Example:
		(code)
			//create an array with 50 null values
			var a=Array.dim(50);
			// now delete half of them
			Array.dim(25).forEach(function(d,i){
				delete a[i];
			})
			console.log(a.length);//prints 50
			//now compact
			a.compact();
			console.log(a.length);//prints 25
		(end)
		*/
		Array.prototype.compact = function compactArray(){
			var a =this;
			for (var i = a.length-1;i >=0;--i){
				if (a[i] === undefined) a.splice(i,1);
			}
		}

	/* Function: contains
		searches an array and returns true if one or more are found

		Parameters:
			search	-	a simple value or a function to identify a matching entry. If
							this is function, it will be called with a the current array
							item and should return *true* if this is a matching item

		Note:
			unlike <indexOf> This function does a loose comparison. This means that
			if, for instance you search for *false*, you will match entries with values
			of null, undefined, "",0,etc

		Examples:
		(code)
			//does the array contain "woot" ?
			return someArray.contains("woot");

			//does the array contain an entry that contains "woot" ?
			return someArray.contains(function(entry){
				return /woot/.test(entry)
			});

			//does the array contain "woot" and "dude"?
			return ["woot","dude"].every(someArray.contains)

			//does the array contain an entry that contains "woot" OR "dude"?
			return ["woot","dude"].some(function(term){
				return someArray.contains(function(entry){
					return new RegExp(term).test(entry);
				})
			})

		(end)
		*/
		Array.prototype.contains = function contains(search){
			for (var x=0; x<this.length;++x){
				if (typeof search === "function"){
					if (search(this[x],x,this)) return true;
				} else {
					if (this[x] == search) return true
				}
			}
			return false;
		}
	/* Function: appendUnique
		adds a new element to this array, if that element is not already in this array.

		Parameters:
			val			-	value to append
			looseCheck	-	*Optional, default false*
								Normally this function uses the "same in type and value"
								operator (===). Setting this argument to true will causes
								this function to use the looser, and slower "same in value"
								operator (==)
			accessor	-	*Optional, default false*
							function to run against each item to retrieve the compared value
		Returns:
			_val_

		*/
		Array.prototype.appendUnique=function(val,looseCheck,accessor){
			var exists;

			if (looseCheck){
				if (!accessor) accessor = function(e){return e}
				exists = this.some(function(e){return accessor(e) == accessor(val)})

			} else if (accessor){
				if (!accessor) accessor = function(e){return e}
				exists = this.some(function(e){return accessor(e) === accessor(val)})
			} else {
				exists = (this.indexOf(val) != -1)
			}
			if (!exists) this.push(val)
			return val
		};
	/* Function: getUnique
		returns a copy of this array that only contains unique items

		Parameters:
			looseCheck	-	*Optional, default false*
								Normally this function uses the "same in type and value"
								operator (===). Setting this argument to true will causes
								this function to use the looser, and slower "same in value"
								operator (==)
			accessor	-	*Optional, default false*
							function to run against each item to retrieve the compared value

		Examples:
		(code)
			//exact matching 1 != "1"
			someArray.getUnique();

			//loose matching 1 == "1"
			someArray.getUnique(true);

			//exact object matching 1 != "1"
			someArray.getUnique(false,function(e){return e.name});

			//loose object matching 1 == "1"
			someArray.getUnique(true,function(e){return e.name});
		(end)
		*/
		Array.prototype.getUnique=function(looseCheck,accessor){
			if (!accessor) accessor = function(e){return e}
			return this.filter(function(curVal,i,a){
				return !a.slice(i+1).some(function(futureVal){
					if (looseCheck){
						return accessor(curVal) == accessor(futureVal)
					} else {
						return accessor(curVal) === accessor(futureVal)
					}
				})
			})
		};

	/* Function: toDataSet
		returns a new DataSet object based on this array

		Parameters:
			columns		-	*Optional, default first row properties*
							Array of strings. If defined this overrides DataSet's
							column detection

		Note:
		if DataSet is not included, this array is returned


		*/
		Array.prototype.toDataSet=function(columns){
			if (typeof univnm.DataSet != "undefined"){
				return new univnm.DataSet({
					columns:columns||univnm.ObjectLib.getKeys(this[0]),
					data:this
				})
			} else return thi
		};



/* Class: String
	Additional functions on the JS String object


	*/

	/* Property: htmlEscapeChars
		array of characters to be translated by <escapeHtml> and <unEscapeHtml>
		*/
		String.htmlEscapeChars=[
			";",
			"&",
			"#",
			"<",
			">",
			"'",
			"\"",
			"(",
			")",
			"%",
			"+",
			"-"
		];


		String.regexEscapeChars=[
			",",
			"/",
			"*",
			"+",
			"?",
			"|",
			"{",
			"[",
			"(",
			")",
			"^",
			"$",
			".",
			"#",
			"\\"
		];
	/* Function: after
		returns all the characters after the first _count_ characters

		Parameters:
			count 	-	number of characters to skip

		Example:
		(code)

			var requestDir = $server.requestDir;
			//this is an example only. $server.requestUrl does this for you
			var requestUrl = requestDir.after($server.rootDir.length);
		(end)


		*/
		String.prototype.after=function(count){
			if (count<0 || count > this.length) return "";
			return this.slice(count);
		};
	/* Function: before
		returns all the characters before the last _count_ characters

		Parameters:
			count 	-	number of characters to remove from the end of the string

		Example:
		(code)
			var requestUrl = $server.requestUrl;
			var contextRelativeUrl = requestUrl.after($server.rootUrl.length);
			//this is an example only. $server.rootDir does this for you
			var rootDir = $server.requestDir.before(contextRelativeUrl.length);
		(end)


		*/
		String.prototype.before=function(count){
			if (count<0 || count > this.length) return "";
			return this.substr(0,this.length-count);
		};
	/* function: charToHtmlEntity
		returns the HTML/XML entity of the supplied character in &#code; format where code is the decimal ASCII code

		Parameters:
			c - 1 character string to convert

			*/
		String.charToHtmlEntity = function(c){
			return "&#" + c.charCodeAt(0) + ";";
		};
	/* Function: compareAlpha
		A static sort function that will compare two strings by lexigraphical order.

		Paramters:
			a	-	first string to compare
			b	-	second string to compare


		Returns:
			-1	-	if _a_ > _b_
			 0	-	if _a_ == _b_
			 1	-	if _a_ < _b_



		*/
		String.compareAlpha = function(a,b) {
			a = String(a);
			b = String(b);
			if(a > b){
				return 1;
			}
			if(a < b){
				return -1;
			}
			return 0;

		};
	/* Function: compareAlphaReverse
		A descending version of <compareAlpha>.

		Paramters:
			a	-	first string to compare
			b	-	second string to compare


		Returns:
			-1	-	if _a_ < _b_
			 0	-	if _a_ == _b_
			 1	-	if _a_ > _b_

		see <compareAlpha>
		*/
		String.compareAlphaReverse = function(a,b) {
			return String.compareAlpha(b,a);
		};
	/* Function: compareNatural
		A static sort function that will compare two strings in a natural way.

		Paramters:
			a	-	first string to compare
			b	-	second string to compare


		Returns:
			-1	-	if _a_ > _b_
			 0	-	if _a_ == _b_
			 1	-	if _a_ < _b_

		Detail:
			The standard sort function does ASCII comparisons of the entire string.
			Humans tend to sort based on parts of the string, applying numeric and
			alpha sorts as appropriate, and ignoring case. Take this list:

			(code)
				var stringArray="A8,a10,A11,a14c,a14b9,a14B10,A14B10,a14b10,a9".split(/,/);
			(end)

			Calling stringArray.sort() will result in

			(code)
				A11
				A14B10
				A8
				a10
				a14B10
				a14b10
				a14b9
				a14c
				a9
			(end)

			This is a valid ASCII sort, but doesn't look "right" to humans.
			Calling stringArray.sort(String.compareNatural) will result in

			(code)
				A8
				a9
				a10
				A11
				a14b9
				A14B10
				a14B10
				a14b10
				a14c
			(end)


		*/
		String.compareNatural = function(a,b) {
			var
				left,
				right,
				retVal,
				compare,
				x,
				rightPart,
				leftPart
			;
			left = String(a).toLowerCase().match(/(\D+|\d+)/g);
			right = String(b).toLowerCase().match(/(\D+|\d+)/g);
			if (left === undefined || left === null) {left=[];}
			if (right === undefined || right === null) {right=[];}
			retVal =0;

			//print("<hr> " + a +" to " + b + " <p>")

			compare = function(a,b){
				//check for pure numeric comparison
				if (parseInt(a,10) == a && parseInt(b,10) == b){
					a= parseInt(a,10);
					b= parseInt(b,10);
				}
				//print("comparing " + a + " to " + b +" <br>")
				if ( a < b) {
					return -1;
				}
				if ( a > b){
					return 1;
				}
				return 0;
			};

			for (x=0;x < left.length;++x){
				rightPart = right[x];
				if (rightPart === undefined) {
					retVal = 0;
					continue;
				}
				leftPart = left[x];
				if (leftPart === undefined) {
					retVal = 0;
					continue;
				}

				retVal=compare(leftPart,rightPart);
				if (retVal !== 0) {break;}
			}
			//print("returning " + retVal)
			return retVal;
		};
	/* Function: compareNaturalReverse
		A descending version of <compareNatural>.

		Paramters:
			a	-	first string to compare
			b	-	second string to compare


		Returns:
			-1	-	if _a_ < _b_
			 0	-	if _a_ == _b_
			 1	-	if _a_ > _b_

		see <compareNatural>
		*/
		String.compareNaturalReverse = function(a,b) {
			return String.compareNatural(b,a);
		};
	/* Function: compareNumeric
		A static sort function that will compare two strings by lexigraphical order.

		Paramters:
			a	-	first string to compare
			b	-	second string to compare


		Returns:
			-1	-	if _a_ > _b_
			 0	-	if _a_ == _b_
			 1	-	if _a_ < _b_



		*/
		String.compareNumeric = function(a,b) {
			a = parseFloat(a);
			b = parseFloat(b);
			if(a > b){
				return 1;
			}
			if(a < b){
				return -1;
			}
			return 0;

		};
	/* Function: compareNumericReverse
		A descending version of <compareNumeric>.

		Paramters:
			a	-	first string to compare
			b	-	second string to compare


		Returns:
			-1	-	if _a_ < _b_
			 0	-	if _a_ == _b_
			 1	-	if _a_ > _b_

		see <compareNumeric>
		*/
		String.compareNumericReverse = function(a,b) {
			return String.compareNumeric(b,a);
		};
	/* Function: escapeHtml
		replaces common symbols with their HTML entity equivalents

		Detail:
			the purpose of this function is to prevent a string from being
			interpreted as HTML/Javascript when output on a webpage. Becasue nearly
			all user supplied input wll eventually be displayed on a web page, this
			function is executed against all input be default.

		Returns:
			converted string

		Detail:
			escapes the following symbols:
			(code)
			;	becomes &#59;
			&	becomes &#38;
			#	becomes &#35;
			<	becomes &#60;
			>	becomes &#62;
			'	becomes &#39;
			"	becomes &#34;
			(	becomes &#40;
			)	becomes &#41;
			%	becomes &#37;
			+	becomes &#43;
			-	becomes &#45;
			(end code)
		See:
			<$req.data>,<$req.rawData>,<unEscapeHtml>
		*/
		String.prototype.escapeHtml=function(string){
			var
				new_string = "",
				c,
				x,
				escapeIndex
			;
			for (x=0; x < this.length; ++x){
				c= this.charAt(x);
				escapeIndex =String.htmlEscapeChars.indexOf(c);
				if (escapeIndex !== -1){
					new_string+=String.charToHtmlEntity(c);
				} else {
					new_string+=c;
				}
			}
			return new_string;
		};
	/* Function: escapeRegex
		returns string with symbols that might be interpreted as regex escaped

		Detail:
			the purpose of this function is to prevent a string from being
			interpreted as a regex string when using new RegExp

		Returns:
			converted string

		*/
		String.prototype.escapeRegex=function(string){
			return Array.parse(this,function(o,i){return o.charAt(i)}).map(function(c){
				if (String.regexEscapeChars.indexOf(c) !== -1){
					return "\\" + c;
				} else {
					return c;
				}
			}).join("");

			/* var new_string = ""
			this.length.times(function(x){
				var c= this.charAt(x);
				var escapeIndex =String.regexEscapeChars.indexOf(c);
				if (escapeIndex != -1){
					new_string+="\\" + c;
				} else {
					new_string+=c;
				}
			})
			return new_string; */
		};
	/* Function: format
		returns a string with parameters replaced

		Parameters:
			values...		-	Either multiple value parameters, a single parameter array
									or a JS object containing key/value pairs

		Detail:
			This provides a very simple templating system for strings. Bracketed terms
			(e.g.{1} or {paramName}) in this string are replaced with that matching index
			in _values_. For parameter list or a single parameter array, positional
			terms ({0},{1},...{n}) are replaced. For a single object parameter,
			matching property names are replaced ({age},{height},{DOB})

		Returns:
			converted string

		Example:
			(code)
				var saying = "This is the {0} of our {1}. words:{0},{1}".format("summer","discontent")
				var saying2 = "This is the {season} of our {feeling}. words:{season},{feeling}".format({
					season:"summer",
					feeling:"discontent"
				})
			(end)
		*/
		String.prototype.format=function(values){
			var args = Array.parse(arguments);
			var isArray=false
			if (args.length > 1) {
				isArray = true
			} else  if (args.length == 1 ){
				if(!args[0]) return new String(this);
				if ( typeof args[0] == "object" && "length" in args[0] && "concat" in args[0]){
					args = args[0];
					isArray=true;
				} else if (args[0] == parseFloat(args[0]) || typeof args[0] == "string" || "getTime" in args[0] ){
					isArray = true
				} else {//property object
					args=args[0]
				}
			} else return new String(this);

			if (isArray){
				if (!args.length) return new String(this);
				return this.replace(/{(\d+)}/g, function(match, number) {
					return typeof args[number] != 'undefined'? String(args[number]) : match;
				})
			} else {
				return this.replace(/{(\w+)}/g, function(match, key) {
					return key in args? String(args[key]) : match;
				})
			}
		}



	/* Function: htmlEntityToChar
		returns the chatacter representation of the supplied HTML/XML entity

		Parameters:
			e - HTML/XML entity in &#code; format where code is the decimal ASCII code
			*/
		String.htmlEntityToChar = function(e){
			var code =e.match(/^&#(\d+);$/);
			return String.fromCharCode(code[1]);
		};


	/* Function: left
		returns the left side of a string

		Parameters:
			count 	-	number of characters to return

		Returns:
			The left _count_ characters of _string_



		*/
		String.prototype.left=function(count){
			return this.substr(0,count);
		};
	/* Function: listAppend
		returns new list (string) with value appended (does not modify original string).

		Parameters:
			val			-	String value to append
			delimiter	-	*Optional, default ","*
							String delimiter to append to
							this string before _val_. If this string is empty, or
							currently ends with _delimiter_, _delimiter_ will not be
							appended.
							returned string
			qualifier	-	*Optional, default null*
							String to put before and after _val_

		Returns:
			A new list with _val_ appended.

		*/
		String.prototype.listAppend=function(val, delimiter,qualifier){
			if (!delimiter) {delimiter =",";}
			if (!qualifier) {qualifier ="";}
			val = String(val);
			var result =String(this);
			if (delimiter.length && result.length && result.right(delimiter.length) !== delimiter){
				result += delimiter;
			}
			if (qualifier.length && val.charAt(0) !== qualifier){
				result += qualifier + val + qualifier;
			} else {
				result += val;
			}
			return result;
		};

	/* Function: listAppendUnique
		returns new list (string) with value appended, if not already in list

		Parameters:
			val			-	String value to append
			delimiter	-	*Optional, default ","*
							String delimiter to append to
							this string before _val_. If this string is empty, or
							currently ends with _delimiter_, _delimiter_ will not be
							appended.
							returned string
			qualifier	-	*Optional, default null*
							String to put before and after _val_

		Returns:
			A new list with _val_ appended.

		*/
		String.prototype.listAppendUnique=function(val, delimiter,qualifier){
			if (this.listContains(val, delimiter,qualifier)){
				return  String(this);
			} else {
				return this.listAppend(val, delimiter,qualifier);
			}
		};



	/* Function: listAppendUniqueNoCase
		returns new list (string) with value appended, if not already in list, ignoring case

		Parameters:
			val			-	String value to append
			delimiter	-	*Optional, default ","*
							String delimiter to append to
							this string before _val_. If this string is empty, or
							currently ends with _delimiter_, _delimiter_ will not be
							appended.
							returned string
			qualifier	-	*Optional, default null*
							String to put before and after _val_



		*/
		String.prototype.listAppendUniqueNoCase=function(val, delimiter,qualifier){
			if (this.listContainsNoCase(val, delimiter,qualifier)){
				return  String(this);
			} else {
				return this.listAppendUnique(val, delimiter,qualifier);
			}
		};
	/* Function: listAfter
		returns this list minus the first element.

		Parameters:
			delimiter	- 	*Optional default ','*
							String delimiter between values
			qualifier	-	*Optional, default null*
							String that is on both sides of values in the string

		*/
		String.prototype.listAfter=function(delimiter,qualifier){
			if (delimiter === undefined) {delimiter=",";}
			var a = this.listToArray(delimiter);
			if (a.length) {
				a.shift();
				return a.join(delimiter);
			} else {
				return "";
			}
		};
	/* Function: listBefore
		returns this list minus the last element.

		Parameters:
			delimiter	- 	*Optional default ','*
							String delimiter between values


		*/
		String.prototype.listBefore=function(delimiter){
			if (delimiter === undefined) {delimiter=",";}
			var a = this.listToArray(delimiter);
			if (a.length) {
				a.pop();
				return a.join(delimiter);
			} else {
				return "";
			}
		};
	/* Function: listContains
		returns true if list contains the value.

		Parameters:
			val			-	String Value to search for. If _val_ is a list with the same
							delimiter then all values in _val_ must also be in this string
			delimiter	- 	*Optional default ','*
							String delimiter between values
			qualifier	-	*Optional, default null*
							String found before and after _val_
		Returns:
			true if _val_ exists in this string

		*/
		String.prototype.listContains=function(val, delimiter, qualifier){
			if (String(val).listLen(delimiter,qualifier) > 1){
				var $this = this;
				return String(val).listToArray(delimiter,qualifier).every(function(val){
					return $this.listFind(val,0,delimiter,qualifier) > -1;
				});
			} else {
				return this.listFind(val,0,delimiter,qualifier) > -1;
			}
		};
	/* Function: listContainsNoCase
		returns true if list contains the value, ignoring case.

		Parameters:
			val			-	String Value to search for. If _val_ is a list with the same
							delimiter then all values in _val_ must also be in this string
			delimiter	- 	*Optional default ','*
							String delimiter between values
			qualifier	-	*Optional, default null*
							String that is on both sides of values in the string

		Returns:
			true if _val_ exists in _list_

		*/
		String.prototype.listContainsNoCase=function(val, delimiter,qualifier){
			if (String(val).listLen(delimiter,qualifier) > 1){
				var $this = this;
				return String(val).listToArray(delimiter,qualifier).every(function(val){
					return $this.listFindNoCase(val,0,delimiter,qualifier) > -1;
				});
			} else {
				return this.listFindNoCase(val,0,delimiter,qualifier) > -1;
			}
		};

	/* Function: listFind
		returns the index of a value in a list

		Parameters:
			val			- 	String value to search for

			startFrom	-	*Optional default 0*
							Index to start looking for a match

			delimiter	- 	*Optional default ','*
							String delimiter between values

			qualifier	-	*Optional, default null*
							String that is on both sides of values in the string

		Returns:
			index of first found match, or -1 if no match

		*/
		String.prototype.listFind=function(val,startFrom,delimiter,qualifier){
			var
				arr,
				x
			;

			val = String(val);
			if (startFrom === undefined ) {startFrom = 0;}
			if (!delimiter) {delimiter =",";}
			if (!qualifier) {qualifier ="";}

			if (qualifier && qualifier.length && val.charAt(0) != qualifier){
				qualifier =String(qualifier);
				val = qualifier+val+qualifier;
			}

			arr =this.listToArray(delimiter);
			for (x=startFrom; x < arr.length; ++x){
				if (val == arr[x]) {return x;}
				//else console.log(val +"!="+arr[x])
			}
			return -1;
		};
	/* Function: listFindNoCase
		returns the index of a value in a list, ignoring case

		Parameters:

			val			- 	String value to search for

			startFrom	-	*Optional default 0*
							Index to start looking for a match

			delimiter	- 	*Optional default ','*
							String delimiter between values
			qualifier	-	*Optional, default null*
							String that is on both sides of values in the string

		Returns:
			index of first found match, or -1 if no match

		*/
		String.prototype.listFindNoCase=function(val,startFrom,delimiter,qualifier){
			return this.toLowerCase().listFind(String(val).toLowerCase(),startFrom,delimiter,qualifier);
		};

	/* Function: listFirst
		returns the first value of a list.

		Parameters:
			delimiter	- 	*Optional default ','*
							String delimiter between values
			qualifier	-	*Optional, default null*
							String that is on both sides of values in the string

		Returns:
			the first value of _list_


		*/
		String.prototype.listFirst=function(delimiter,qualifier){
			if (delimiter === undefined) {delimiter=",";}
			if (qualifier === undefined) {qualifier="";}
			var a = this.listToArray(delimiter);

			if (a.length) {
				return a.shift().match(new RegExp(qualifier+"(.*)" + qualifier))[1];
			} else {
				return "";
			}
		};
	/* Function: listLast
		returns the last value of a list.

		Parameters:
			delimiter	- 	*Optional default ','*
							String delimiter between values
			qualifier	-	*Optional, default null*
							String that is on both sides of values in the string
		Returns:
			the last value of _list_


		*/
		String.prototype.listLast=function(delimiter,qualifier){
			if (delimiter === undefined) {delimiter=",";}
			if (qualifier === undefined) {qualifier="";}
			var a = this.listToArray(delimiter);
			if (a.length) {
				return a.pop().match(new RegExp(qualifier+"(.*)" + qualifier))[1];
			} else {
				return "";
			}
		};
	/* Function: listLen
		returns the length of a list

		Parameters:
			delimiter	- 	*Optional default ','*
							String delimiter between values

		Returns:
			number of values in this string


		*/
		String.prototype.listLen=function(delimiter){
			if (!delimiter) {delimiter =",";}
			return this.listToArray(delimiter).length;
		};
	/* Function: listMakeUnique
		returns new list (string) with each item represented only once

		Parameters:
			delimiter	-	*Optional, default ","*
							String delimiter to append to
							this string before _val_. If this string is empty, or
							currently ends with _delimiter_, _delimiter_ will not be
							appended.
							returned string
		*/
		String.prototype.listMakeUnique=function( delimiter){
			var newList = "";
			if (!delimiter) {delimiter=",";}

			this.listToArray(delimiter).forEach(function(item){
				newList = newList.listAppendUnique(item,delimiter);
			});

			return newList;
		};
	/* Function: listMakeUniqueNoCase
		returns new list (string) with each item represented only once, regardless
		of case. If an item appears more than once in different upper/lower case,
		only the first occurance is kept.

		Parameters:
			delimiter	-	*Optional, default ","*
							String delimiter to append to
							this string before _val_. If this string is empty, or
							currently ends with _delimiter_, _delimiter_ will not be
							appended.
		*/
		String.prototype.listMakeUniqueNoCase=function(delimiter){
			var newList = "";
			if (!delimiter) {delimiter=",";}

			this.listToArray(delimiter).forEach(function(item){
				newList = newList.listAppendUniqueNoCase(item, delimiter);
			});
			return newList;
		};
	/* Function: listQualify
		returns new list (string) with each item surrounded by a qualifying symbol

		Parameters:
			symbol		-	*Optional, default ' (single quote)*
			delimiter	-	*Optional, default ","*
								The delimiter for this list
			qualifier	-	*Optional, default null*
								Current qualifier for this list
		*/
		String.prototype.listQualify=function(symbol,delimiter,qualifier){
			var newList = "";
			if (!delimiter) {delimiter=",";}
			if (!qualifier) {qualifier="";}

			this.listToArray(delimiter,qualifier).forEach(function(item){
				newList = newList.listAppend(symbol +item +symbol, delimiter);
			});
			return newList;
		};
	/* Function: listSame
		returns true if the provided list contains the smae elements as this list
		regardless of order. Both lists must use the same qualifier and delimiter

		Parameters:
			list		-	list to compare to this one
			delimiter	- 	*Optional default ','*
							String delimiter between values

		*/
		String.prototype.listSame=function(list,delimiter){
			list=String(list);
			if (!delimiter) {delimiter =",";}

			return this.listToArray(delimiter).sort().join(delimiter)
				=== list.split(delimiter).sort().join(delimiter);
		};

	/* Function: listSameNoCase
		returns true if the provided list contains the smae elements as this list
		regardless of order. Both lists must use the same qualifier and delimiter

		Parameters:
			list		-	list to compare to this one
			delimiter	- 	*Optional default ','*
							String delimiter between values

		*/
		String.prototype.listSameNoCase=function(list,delimiter){
			if (!delimiter) {delimiter =",";}

			return this.toLowerCase().split(delimiter).sort().join(delimiter)
				=== list.toLowerCase().split(delimiter).sort().join(delimiter);
		};
	/* Function: listSort
		returns a copy of this list sorted by the supplied sort function

		Parameters:
			sortFun		-	*Optional, default String.compareAlpha*
							A function that takes two strings and
							returns -1, 0, or 1. If null the default Array sort is
							used. This function will be passed to Array.sort(). The
							String.compare* functions are easy plugins for this

			delimiter	- 	*Optional default ','*
							String delimiter between values
			qualifier	-	*Optional, default null*
							String remove from both sides of each item


			Detail:
				This function converts the string list into an array of string items,
				sorts the array with _sortFunc_, and returns the array converted
				back into a string list.

			See:
			*	<http://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Reference:Global_Objects:Array:sort>
			*	<String.compareAlpha>
			*	<String.compareAlphaReverse>
			*	<String.compareNumeric>
			*	<String.compareNumericReverse>
			*	<String.compareNatural>
			*	<String.compareNaturalReverse>
		*/
		String.prototype.listSort=function(sortFunc,delimiter,qualifier){
			if (!delimiter) {delimiter =",";}
			if (!qualifier) {qualifier ="";}

			var array =this.listToArray(delimiter,qualifier);

			array.sort(sortFunc);

			if (qualifier.length){
				array = array.map(function(item){
					return qualifier+item+qualifier;
				});
			}
			return array.join(delimiter);
		};
	/* Function: listToArray
		returns an array of the items in this list

		Parameters:
			delimiter	- 	*Optional default ','*
							String delimiter between values
			qualifier	-	*Optional, default null*
							String remove from both sides of each item
		*/
		String.prototype.listToArray=function(delimiter,qualifier){
			var
				array,
				matches,
				s
			;
			if (!delimiter) {delimiter =",";}
			if (!qualifier) {qualifier ="";}
			if (typeof delimiter === "string"){
				delimiter = delimiter.escapeRegex();
			}

			array =this.split(new RegExp(delimiter)).filter(function(item){
				return item && item.length;
			});

			s = this;
			if (qualifier && qualifier.length){
				array = array.map(function(item){
					matches=item.match(new RegExp(qualifier +"(.*?)"+qualifier));
					if (matches && matches.length ===2){
						return matches[1];
					} else {
						throw new Error("This list "+ s.left(15) +"... does not contain the supplied qualifier: " + qualifier);
					}

				});
			}
			return array;
		};

	/* Function: toFixedWidth
		returns this string padded/truncated to the specified length

		Parameters:
			count 			-	number of characters to return. If this is 0 or negative an
								empty string will be returned
			pad				-	*Optional, default " "*
								Character to add to the right side of the string to pad to
								the fixed width
			placeHolder		-	*Optional, default undefined*
								If defined, this string will be used as the placeholder for
								text removed to make the string fit the the fixed length.
								The length of this string is subtracted from _count_ so that
								the resulting string will not exceed _count_
			truncateFrom	-	*Opitional, default "end"*
								This sets where the placholder will be placed in the string
								and from where characters will be removed. Valid values are
								"start", "middle" and "end"


		Returns:
			returns a string forced to _count_ length, truncating or padding as
			necessary

		Example:
		(code)
			var delim = " | ";
			var str = "Description".toFixedWidth(15) + delim + "Price".toFixedWidth(5) + "\n";
			data.forEach(function(row){
				str += row.desc.toFixedWidth(15," ","...") + delim
						+ "$" + String(row.price).toFixedWidth(4)
			})
		(end)

		*/
		String.prototype.toFixedWidth=function(count,pad,placeHolder,truncateFrom){
			var s = new String(this);
			if (!pad) pad = " ";
			if (!placeHolder) placeHolder = "";
			if (!truncateFrom) truncateFrom = "end";
			if (count < 0) count=0;
			if (count ==0) return "";
			if (s.length == count) return new String(this);

			if (s.length > count){
				switch (truncateFrom.toLowerCase()){
				case "start":
					return placeHolder +s.right(count).after(placeHolder.length);
				case "middle":
					var half = (count - placeHolder.length)/2
					var left = Math.floor(half);
					var right = Math.ceil(half);
					return s.left(left)+ placeHolder + s.right(right);
				case "end":
					return s.left(count).before(placeHolder.length) + placeHolder;

				}
			} else {
				return s + " ".repeat(count -s.length);
			}
		};


	/* Function: parseJson
		Converts a JSON (http://www.json.org) string into an object

		This is a shortcut to <univnm.jslib.jsonDecode>
		Returns:
			Number String Array or Object contained in the JSON text

		Throws:
			*SyntaxError* if not properly formatted

		*/
		String.prototype.parseJson=function(){
			return univnm.jslib.jsonDecode(this)
		};
	/* Function: right
		returns the right side of a string

		Parameters:
			count 	-	number of characters to return

		Returns:
			The right _count_ characters of _string_

		*/
		String.prototype.right=function(count){
			return this.substring(this.length-count);
		};
	/* Function: repeat
		returns a copy of this string repeated _count_ times

		Parameters:
			count 		-	number of times to copy the provided string
			delimiter	-	*Optional, default null* string to put between each copy
							of the string. This will not be placed at the ent of the
							returned string
			qualifier	-	*Optional, default null* string to put before and after
							each copy of the string

		*/
		String.prototype.repeat=function(count,delimiter,qualifier){
			var
				result,
				x
			;
			if (!delimiter) {delimiter ="";}
			if (!qualifier) {qualifier ="";}
			result ="";
			for (x=0; x< count; ++x){
				result += qualifier + String(this) + qualifier;
				if (delimiter.length && x < count-1){
					result += delimiter;
				}
			}
			return result;
		};
	/* Function: titleCap
		Capitalizes the first letter of every word in string

		Returns:
			_text_ with the first letter of every word captialized.



		*/
		String.prototype.titleCap=function(smart){
			if (smart) {
				var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|of|on|or|the|to|vs?\.?|via)$/i;

				return this.replace(/([^\W_]+[^\s\-]*) */g, function (match, p1, index, title) {
					if (index > 0 && index + p1.length !== title.length &&
						p1.search(smallWords) > -1 && title.charAt(index - 2) !== ":" &&
						title.charAt(index - 1).search(/[^\s\-]/) < 0) {
						return match.toLowerCase();
					}

					if (p1.substr(1).search(/[A-Z]|\../) > -1) {
						return match;
					}

					return match.charAt(0).toUpperCase() + match.substr(1);
				});
			} else {
				return this.split(/ /).map(function(text){
					if (text.length){
						text=text.substr(0,1).toUpperCase() + text.substr(1).toLowerCase();
					}
					return text;
				}).join(" ");
			}
		};
	/* Function: trim
		returns a new string with beginning and trailing whitespace removed
		*/
		String.prototype.trim=function(){
			return  String(this).replace(/^\s+|\s+$/g,"");
		};
	/* Function: unEscapeHtml
		reverses the replacements in <escapeHtml>

		Parameters:
			chars		-	*Optional default <htmlEscapeChars>* string of characters to
							restore. Leave this undefined to use the same set of
							characters as <escapeHtml>
		Returns:
			converted string


		See:
			<$req.data>,<$req.rawData>,<escapeHtml>
		*/
		String.prototype.unEscapeHtml=function(chars){
			var
				e,
				regex,
				character
			;
			if (!chars){
				chars = String.htmlEscapeChars;
			} else {
				chars = chars.match(/(.)/g);
			}

			return chars.reduce(function(string,c,index,list){
				e = String.charToHtmlEntity(c);
				regex = new RegExp(e,"g");
				character = String.htmlEntityToChar(e);

				return string.replace(regex,character);
			},this);
		};

/* Class: Function
	Additional functions on the JS Function object

	*/
	/* Function: repeat
		executes this function repeatedly, returning results as array

		Parameters:
			count		-	number of times to execute this function

		Detail:
			When this this function is executed, it will be passed 2 parameters:
			_index_ and _count_. _index_ is the current iteration number, starting
			with 0. _count_ is the original _count_ passed to repeat.

		Examples:
		(code)
		//pre-defined function
		var f = function(index,count){
			console.log("loop #" + index + " of " +count+"<br>");
		}
		f.repeat(10);

		//anonymous function
		//The Object keyword is only necessary when not assigning the result
		Object(function(index,count){
			console.log("loop #" + index + " of " +count+"<br>");
		}).repeat(10);

		//building results
		var array = ((function(index,count){
			return(index +","+count)
		}).repeat(10))

		(end)

		See also: <Array.forEach>
		*/
		Function.prototype.repeat = function(count){
			var f = this;
			var result =[];
			for (var x=0; x < count; ++ x){
				result.push(f(x,count));
			}
			return result
		}
	/* Function: bind
		returns a version of this function bound to a specific scope object

		Parameters:
			scope			-	object to bind as "this"
			n1+				-	any arguments after _scope_ will be bound to the function
								as well. Any arguments passed to the returned function will
								appended to these when calling the returned function

		Detail:
			The purpose of this function is to bind a function to a specific scope. If
			this function is later assigned to another object, it will still apply to
			it's bound scope.

		Note:
			This function is API compatible with the EcmaScript 5 "bind" function


		Example:
		(code)
		var obj={
			name"bob"
		}
		var f = function(){
			console.log(this.name)
		}

		var bound =f.bind(obj);

		bound(); //prints bob
		f();//throws an error

		//example using bound arguments

		var logError = Myna.log.bind({},"ERROR");
		logError("something bad happend")

		(end)

		*/
		Function.prototype.bind = Function.prototype.bind ||function(o) {
			 // Save the this and arguments values
			 var self = this, boundArgs = arguments;
			 return function() {
				  // Build up an argument list
				  var args = [], i;
				  for(i = 1; i < boundArgs.length; i++)
						args.push(boundArgs[i]);
				  for(i = 0; i < arguments.length; i++)
						args.push(arguments[i]);
				  // Now invoke self as a method of o
				  return self.apply(o, args);
			 };
		};
	/* Function: cache
		returns a caching version of this function

		Detail:
			The purpose of this function is to create a lazy-loading versiom of this
			function. The first time this function is called, the original function is
			executed, and subsequent calls immediately return the cached value. If
			this function takes a single param that can be converted to a string, then
			that will be used a s a cache key, allowing multiple values to be cached

		Note:
			This will only work properly with functions that do not take parameters.

		Warning:
			*Do not use this for prototype functions*, unless you intend to cache the
			result across ALL instances of this class. To have caching per instance,
			you can set this in the constructor function, or you can create a lazy
			loading version like this:

			(code)
				var myClass = function(){
					//define in constructor
					this.getEmployee=(function(empId){
						...do stuff...
					}).cache()
				}

				//or use lazy-load method
				myClass.prototype.getManager=function(managerId){
					this.getManager =(function(managerId){
						...do stuff...
					}).cache()
					return this.getManager(managerId)
				}
			(end)


		Example:
		(code)
		//old way:

		var f= function getEmployee(empId){
			var my = arguments.callee
			if (!(empId in my)){
				my[empId] = dm.getManager("employees").getById(empId);
				 = value;
			}
			return my[empId];
		}

		//new way:
		var f = (function(empIds){
			return dm.getManager("employees").getById(empId);
		}).cache();
		(end)

		*/
		Function.prototype.cache =function cache(){
			var cache={}
			var func = this
			return function(key){
				key = String(key||"value")
				if (!(key in cache)){
					cache[key] = func.call(this, key);
				}
				return cache[key];
			}
		}
	/* Function: createCallback
		returns a callback function that will execute this function with the
		supplied arguments

		Detail:
			The purpose of this function is to simplify calling a function with a
			defined set of paramters.

		Note:
			This function was adapted from Ext 2.0.1 (http://extjs.com)

		Example:
		(code)
		//old way:
		var f= function(){
			myFunc("woot!",false);
		}

		//new way:
		var f = myFunc.createCallback("woot!",false);
		(end)

		*/
		Function.prototype.createCallback = function(/*args...*/){
			  // make args available, in function below
			  var args = arguments;
			  var method = this;
			  return function() {
					return method.apply(window || $server.globalScope, args);
			  };
		 }

	/* Function: after
		returns a chain function out of this function and another function, new
		function second

		Parameters:
			func		-	a function to chain after this function. This function may
							be a chain function

		See <createChainFunction> for a description of chain functions
		*/
		Function.prototype.after = function(func){
			return Function.createChainFunction([this,func]);
		}

	/* Function: before
		returns a chain function out of this function and another function, new
		function first

		Parameters:
			func		-	a function to chain before this function. This function may
							be a chain function

		See <createChainFunction> for a description of chain functions
		*/
		Function.prototype.before = function(func){
			return Function.createChainFunction([func,this]);
		}
	/* Function: createChainFunction
		returns a function that will execute a chain of functions when called.

		Parameters:
			initialChain		-	*Optional, default []*
									Array to use as the initial function chain

		Detail:
			This creates a function that will execute a chain of functions stored in
			the returned function's chainArray property. Before each function is
			called a chain property will be set on the function with metadata about
			the function chain. See "Chain Object Properties" below. The chain object
			can be used to manipulate the chain by altering the return value from
			previous functions in the chain, altering the arguments to the next
			function in the chain, or by exiting early via chain.exit(). The final
			result of the function chain will be returned by the chain function.

		Note:
			The same "chain" property is passed to each function in the chain and thus
			provides a mechanism for earlier functions in the chain to communicate
			with later functions in the chain

		Chain Object Properties:
			exitChain			-	If set to true, then no other functions in the chain
									will be executed and the return from this function
									will be the final one. See the _exit_ function for
									combining this setting with a return
			lastReturn		-	The return value from the function that executed before
									this one in the chain
			args				-	An array of the arguments to the next function in the
									chain. Altering this array will alter the arguments to
									the next function
			index				-	The 0-based position of this function in the chain
			array				-	The complete array of functions in this chain
			exit(retval)		-	a function that takes a return value and sets
									_exitChain_ to true and returns _retval_ as the final
									value

		Example:
		(code)
			var obj={
				stuff:function (text){
					console.log("in orig")
					return text + " " + this.myVal;
				},
				myVal:"firstObj"
			}

			var obj2={
				myVal:"secondObj"
			}


			obj.stuff=obj.stuff.before(function(text){
				var chain = arguments.callee.chain;
				console.log("in before")
				chain.args[0] = "before " + text
				if (text == "dude!"){
					// exit now with this return value, nothing after will be executed
					chain.exit("sweet!")
				}

			})

			obj.stuff=obj.stuff.after(function(text){
				var chain = arguments.callee.chain;
				console.log("in after")
				return chain.lastReturn + " after "
			})

			console.log(obj.stuff("woot!") +"<hr>");
			console.log(obj.stuff("dude!") +"<hr>");

			obj2.stuff = obj.stuff;
			console.log(obj2.stuff("woot!") +"<hr>");
		(end)

		See Also:
			* <Function.before>
			* <Function.after>
			* <univnm.ObjectLib.before>
			* <univnm.ObjectLib.after>
		*/
		Function.createChainFunction=function(initialChain){
			var f = function(){
				var functions = arguments.callee.chainArray;
				var $this = this;
				//var args = Array.parse(arguments);
				var finalState=functions.reduce(function(state,f,index,array){
					if (state.exitChain) return state;
					f.chain = state;
					f.chain.index = index;
					f.chain.array = array;
					f.chain.exit = function(retval){
						throw {retval:retval}
					}
					try{
						state.lastReturn=f.apply($this,state.args);
					} catch(e){
						if ("retval" in e){
							state.lastReturn = e.retval;
							state.exitChain=true
						}else{
							throw e;
						}
					}
					state.args = f.chain.args
					return state;
				},{
					exitChain:false,
					lastReturn:undefined,
					args:Array.parse(arguments)
				})

				return finalState.lastReturn;
			}
			f.chainArray=(initialChain||[]).reduce(function(chain,f){
				//expand nested chains
				if ("chainArray" in f){
					f.chainArray.forEach(function(f){
						//we'll assume no further nested chains
						chain.push(f);
					})

				} else {
					chain.push(f);
				}
				return chain;
			},[])

			return f;
		}
	/* Function: createDelegate
		returns a function that executes this function with supplied scope and
		arguments

		Parameters:
			obj			-	*Optional, default window or $server.globalScope*
							object to use as the "this" scope when the function is
							executed
			args		-	*Optional, default[]*
							Array of arguments to call this function with.
			appendArgs	-	*Optional, default false*
							- By default, if _args_ is defined, then when this
							delegate is called, any passed arguments will be
							ignored.
							- If _appendArgs_ is a boolean true (not just a
							boolean equivalent), then when this function is called,
							any passed arguments will used, and _args_ will be
							appended to the passed in arguments.
							- If _appendArgs_ is a number, then _args_ will be
							inserted into the passed arguments at the indicated
							position. For example, a value of 0 would cause _args_
							to be placed before the passed in arguments instead of
							after them.


		Detail:
			The purpose of this function is to simplify calling a function with a
			defined set of parameters, and a defined scope.

		Note:
			This function was adapted from Ext 2.0.1 (http://extjs.com)

		Example:
		(code)

			var a={
			myVal:20,
			myFunc:function(label,otherVal){
				console.log("<br>label:" + label + "<br>myVal:" + this.myVal
					+ "<br>otherVal:" + otherVal + "<br>");
			}
		}
		var b;

		// Problem:
		// Can't set default values, and a's function executes against b's properties
		b={
			myVal:10,
			myFunc:a.myFunc
		}
		b.myFunc("Doh!");

		// classic solution:
		b={
			myVal:10,
			myFunc:function(label){
				var args = [label,"calling from b"]

				a.myFunc.apply(a,args);
			}
		}
		b.myFunc("woot!");

		// with createDelegate:
		// appends "calling form b" to the arguments passed to myFunc
		b={
			myVal:10,
			myFunc:a.myFunc.createDelegate(a,["calling from b"],true)
		}
		b.myFunc("woot! woot!");

		(end)
		*/
		 Function.prototype.createDelegate = function(obj, args, appendArgs){
			  var method = this;
			  return function() {
					var callArgs = args || arguments;
					if(appendArgs === true){
						 callArgs = Array.prototype.slice.call(arguments, 0);
						 callArgs = callArgs.concat(args);
					}else if(typeof appendArgs == "number"){
						 callArgs = Array.prototype.slice.call(arguments, 0); // copy arguments first
						 var applyArgs = [appendArgs, 0].concat(args); // create method call params
						 Array.prototype.splice.apply(callArgs, applyArgs); // splice them in
					}
				var scope;
				if (obj){
					scope=obj;
				} else if (typeof window != "undefined"){
					scope=window;
				} else if (typeof $server != "undefined"){
					scope= $server.globalScope;
				}
					return method.apply(scope, callArgs);
			  };
		 }

	/* Function: createSequence
		creates and returns a combined function call sequence of this function
		followed by the passed function. The resulting function returns the results
		of the orginal function.

		Parameters:
			fcn		-	function to append to this one
			object 	-	*Optional, default window or $server.globalScope*
						The scope of the passed fcn

		Note:
			This function was adapted from Ext 2.0.1 (http://extjs.com)

		Example:
		(code)

		var first = function(){
			print("I am first<br>")
		}
		var second = function(){
			print("I am second<br>")
		}
		var seq  = first.createSequence(second)
		seq();

		(end)
		 */
		Function.prototype.createSequence = function(fcn, scope){
			  if(typeof fcn != "function"){
					return this;
			  }
			  var method = this;
			  return function() {
					var retval = method.apply(this || window, arguments);
				var callScope;
				if (scope){
					callScope=scope;
				} else if (typeof this != "undefined"){
					callScope=this;
				} else if (typeof window != "undefined"){
					callScope=window;
				} else if (typeof $server != "undefined"){
					callScope= $server.globalScope;
				}
					fcn.apply(callScope, arguments);
					return retval;
			  };
		 }

	/* Function: createInterceptor
		returns a function that executes a supplied interceptor function, then this
		function unless the interceptor returns false.

		Parameters:
			fcn		-	function to execute BEFORE this function
			scope	-	scope to execute _fcn_ within

		Detail:
			The passed _fcn_ is called before the this function. If it returns a
			real boolean false (not null or undefined) then this function will not
			be executed. This should only be used on functions that don't noramally
			return a value, such as event functions.

		Note:
			This function was adapted from Ext 2.0.1 (http://extjs.com)

		Example:
		(code)

		var doEmployeeStuff = function(){
			print("Doing useful stuff<br>")
		}
		var doManagerStuff = function(){
			print("Intercepted! Doing manager stuff instead!<br>")
			return false;
		}
		var doWork  = doEmployeeStuff.createInterceptor(doManagerStuff)
		doWork();

		(end)
		*/
		Function.prototype.createInterceptor=function(fcn, scope){
			  if(typeof fcn != "function"){
					return this;
			  }
			  var method = this;
			  return function() {
					fcn.target = this;
					fcn.method = method;
				var callScope;
				if (scope){
					callScope=scope;
				} else if (typeof this != "undefined"){
					callScope=this;
				} else if (typeof window != "undefined"){
					callScope=window;
				} else if (typeof $server != "undefined"){
					callScope= $server.globalScope;
				}
					if(fcn.apply(callScope, arguments) === false){
						 return undefined;
					} else {
						return method.apply(callScope, arguments);
					}
			  };
		}
/* Class: Date
	Enhanced Date handling

	Topic: Licence/Credits
	 * Copyright (C) 2004 Baron Schwartz <baron at sequent dot org>
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.

		This date class adapted from http://code.google.com/p/flexible-js-formatting/.

		The date parsing and format syntax is a subset of
		PHP's date(http://www.php.net/date) function, and the formats that are
		supported will provide results equivalent to their PHP versions.

		Adpated from Myna Application Server: <http://www.mynajs.org>

	Topic: Overview/Usage




	Following is the list of all currently supported formats:
	(code)
	Sample date:
	'Wed Jan 10 2007 15:05:01 GMT-0600 (Central Standard Time)'

	Format  Output      Description
	------  ----------  --------------------------------------------------------------
	  d      10         Day of the month, 2 digits with leading zeros
	  D      Wed        A textual representation of a day, three letters
	  j      10         Day of the month without leading zeros
	  l      Wednesday  A full textual representation of the day of the week
	  S      th         English ordinal day of month suffix, 2 chars (use with j)
	  w      3          Numeric representation of the day of the week
	  z      9          The julian date, or day of the year (0-365)
	  W      01         ISO-8601 2-digit week number of year, weeks starting on Monday (00-52)
	  F      January    A full textual representation of the month
	  m      01         Numeric representation of a month, with leading zeros
	  M      Jan        Month name abbreviation, three letters
	  n      1          Numeric representation of a month, without leading zeros
	  t      31         Number of days in the given month
	  L      0          Whether it's a leap year (1 if it is a leap year, else 0)
	  Y      2007       A full numeric representation of a year, 4 digits
	  y      07         A two digit representation of a year
	  a      pm         Lowercase Ante meridiem and Post meridiem
	  A      PM         Uppercase Ante meridiem and Post meridiem
	  g      3          12-hour format of an hour without leading zeros
	  G      15         24-hour format of an hour without leading zeros
	  h      03         12-hour format of an hour with leading zeros
	  H      15         24-hour format of an hour with leading zeros
	  i      05         Minutes with leading zeros
	  s      01         Seconds, with leading zeros
	  u      001 to 999 Milliseconds, with leading zeros
	  O      -0600      Difference to Greenwich time (GMT) in hours
	  o      -06:00      Difference to Greenwich time (GMT) in hours:minutes
	  T      CST        Timezone setting of the machine running the code
	  Z      -21600     Timezone offset in seconds (negative if west of UTC, positive if east)
	(end)

		 Example usage (note that you must escape format specifiers with '\\' to render them as character literals):
	(code)
	var dt = new Date('1/10/2007 03:05:01 PM GMT-0600');
	console.log(dt.format('Y-m-d'));                         //2007-01-10
	console.log(dt.format('F j, Y, g:i a'));                 //January 10, 2007, 3:05 pm
	console.log(dt.format('l, \\t\\he dS of F Y h:i:s A'));  //Wednesday, the 10th of January 2007 03:05:01 PM
	 (end)

		 Here are some standard date/time patterns that you might find helpful.  They
		 are not part of the source of Date.js, but to use them you can simply copy this
		 block of code into any script that is included after Date.js and they will also become
		 globally available on the Date object.  Feel free to add or remove patterns as needed in your code.
		 (code)
	Date.patterns = {
		ISO8601Long:"Y-m-d H:i:s",
		ISO8601Short:"Y-m-d",
		ShortDate: "n/j/Y",
		LongDate: "l, F d, Y",
		FullDateTime: "l, F d, Y g:i:s A",
		MonthDay: "F d",
		ShortTime: "g:i A",
		LongTime: "g:i:s A",
		SortableDateTime: "Y-m-d\\TH:i:s",
		UniversalSortableDateTime: "Y-m-d H:i:sO",
		YearMonth: "F, Y"
	};
	(end)

		 Example usage:
		 (code)
	var dt = new Date();
	console.log(dt.format(Date.patterns.ShortDate));
	(end)
	*/

	Date.parseFunctions = {count:0};
	Date.parseRegexes = [];
	Date.formatFunctions = {count:0};

	Date.prototype.dateFormat = function(format, ignore_offset) {
		if (Date.formatFunctions[format] == null) {
			Date.createNewFormat(format);
		}
		var func = Date.formatFunctions[format];
		if (ignore_offset || ! this.offset) {
		  return this[func]();
		} else {
		  return (new Date(this.valueOf() - this.offset))[func]();
		}
	};
	/* Function: format
		 Formats a date given the supplied format string
		 format - {String}The format string

		Returns:
		 {String} The formatted date
		 @method
		*/
		Date.prototype.format =Date.prototype.dateFormat

		Date.createNewFormat = function(format) {
			var funcName = "format" + Date.formatFunctions.count++;
			Date.formatFunctions[format] = funcName;
			var code = "Date.prototype." + funcName + " = function(){return ";
			var special = false;
			var ch = '';
			for (var i = 0; i < format.length; ++i) {
				ch = format.charAt(i);
				if (!special && ch == "\\") {
					special = true;
				}
				else if (special) {
					special = false;
					code += "'" + Date.escape(ch) + "' + ";
				}
				else {
					code += Date.getFormatCode(ch);
				}
			}
			eval(code.substring(0, code.length - 3) + ";}");
		};

		Date.getFormatCode = function(character) {
			switch (character) {
			case "d":
				return "Date.leftPad(this.getDate(), 2, '0') + ";
			case "D":
				return "Date.dayNames[this.getDay()].substring(0, 3) + ";
			case "j":
				return "this.getDate() + ";
			case "l":
				return "Date.dayNames[this.getDay()] + ";
			case "S":
				return "this.getSuffix() + ";
			case "w":
				return "this.getDay() + ";
			case "z":
				return "this.getDayOfYear() + ";
			case "W":
				return "this.getWeekOfYear() + ";
			case "F":
				return "Date.monthNames[this.getMonth()] + ";
			case "m":
				return "Date.leftPad(this.getMonth() + 1, 2, '0') + ";
			case "M":
				return "Date.monthNames[this.getMonth()].substring(0, 3) + ";
			case "n":
				return "(this.getMonth() + 1) + ";
			case "t":
				return "this.getDaysInMonth() + ";
			case "L":
				return "(this.isLeapYear() ? 1 : 0) + ";
			case "Y":
				return "this.getFullYear() + ";
			case "y":
				return "('' + this.getFullYear()).substring(2, 4) + ";
			case "a":
				return "(this.getHours() < 12 ? 'am' : 'pm') + ";
			case "A":
				return "(this.getHours() < 12 ? 'AM' : 'PM') + ";
			case "g":
				return "((this.getHours() %12) ? this.getHours() % 12 : 12) + ";
			case "G":
				return "this.getHours() + ";
			case "h":
				return "Date.leftPad((this.getHours() %12) ? this.getHours() % 12 : 12, 2, '0') + ";
			case "H":
				return "Date.leftPad(this.getHours(), 2, '0') + ";
			case "i":
				return "Date.leftPad(this.getMinutes(), 2, '0') + ";
			case "s":
				return "Date.leftPad(this.getSeconds(), 2, '0') + ";
			case "O":
				return "this.getGMTOffset() + ";
			case "T":
				return "this.getTimezone() + ";
			case "Z":
				return "(this.getTimezoneOffset() * -60) + ";
			default:
				return "'" + Date.escape(character) + "' + ";
			}
		};

	/* function: toJSON
	 Make toJSON consistent across all browsers
	*/
	Date.prototype.toJSON = function() {
		return "/Date(" + this.getTime() + ")/";
	}


	/* function: parseDate
		 Parses the passed string using the specified format. Note that this function expects dates in normal calendar
		 format, meaning that months are 1-based (1 = January) and not zero-based like in JavaScript dates.  Any part of
		 the date format that is not specified will default to the current date value for that part.  Time parts can also
		 be specified, but default to 0.  Keep in mind that the input date string must precisely match the specified format
		 string or the parse operation will fail.
		 Example Usage:
		(code)
		//dt = Fri May 25 2007 (current date)
		var dt = new Date();

		//dt = Thu May 25 2006 (today's month/day in 2006)
		dt = Date.parseDate("2006", "Y");

		//dt = Sun Jan 15 2006 (all date parts specified)
		dt = Date.parseDate("2006-1-15", "Y-m-d");

		//dt = Sun Jan 15 2006 15:20:01 GMT-0600 (CST)
		dt = Date.parseDate("2006-1-15 3:20:01 PM", "Y-m-d h:i:s A" );
		(end)
			 input - {String}The unparsed date as a string
			 format - {String}The format the date is in

		Returns:
		 {Date} The parsed date
			 @static
		*/
		Date.parseDate = function(input, format) {
			if (Date.parseFunctions[format] == null) {
				Date.createParser(format);
			}
			var func = Date.parseFunctions[format];
			return Date[func](input);
		};

		Date.createParser = function(format) {
			var funcName = "parse" + Date.parseFunctions.count++;
			var regexNum = Date.parseRegexes.length;
			var currentGroup = 1;
			Date.parseFunctions[format] = funcName;

			var code = "Date." + funcName + " = function(input){\n"
				+ "var y = -1, m = -1, d = -1, h = -1, i = -1, s = -1, z = 0;\n"
				+ "var d = new Date();\n"
				+ "y = d.getFullYear();\n"
				+ "m = d.getMonth();\n"
				+ "d = d.getDate();\n"
				+ "var results = input.match(Date.parseRegexes[" + regexNum + "]);\n"
				+ "if (results && results.length > 0) {" ;
			var regex = "";

			var special = false;
			var ch = '';
			for (var i = 0; i < format.length; ++i) {
				ch = format.charAt(i);
				if (!special && ch == "\\") {
					special = true;
				}
				else if (special) {
					special = false;
					regex += Date.escape(ch);
				}
				else {
					obj = Date.formatCodeToRegex(ch, currentGroup);
					currentGroup += obj.g;
					regex += obj.s;
					if (obj.g && obj.c) {
						code += obj.c;
					}
				}
			}

			code += "if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0 && s >= 0)\n"
				+ "{return new Date(y, m, d, h, i, s).applyOffset(z);}\n"
				+ "else if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0)\n"
				+ "{return new Date(y, m, d, h, i).applyOffset(z);}\n"
				+ "else if (y > 0 && m >= 0 && d > 0 && h >= 0)\n"
				+ "{return new Date(y, m, d, h).applyOffset(z);}\n"
				+ "else if (y > 0 && m >= 0 && d > 0)\n"
				+ "{return new Date(y, m, d).applyOffset(z);}\n"
				+ "else if (y > 0 && m >= 0)\n"
				+ "{return new Date(y, m).applyOffset(z);}\n"
				+ "else if (y > 0)\n"
				+ "{return new Date(y).applyOffset(z);}\n"
				+ "}return null;}";

			Date.parseRegexes[regexNum] = new RegExp("^" + regex + "$");
			eval(code);
		};

		Date.formatCodeToRegex = function(character, currentGroup) {
			switch (character) {
			case "D":
				return {g:0,
				c:null,
				s:"(?:Sun|Mon|Tue|Wed|Thu|Fri|Sat)"};
			case "j":
			case "d":
				return {g:1,
					c:"d = parseInt(results[" + currentGroup + "], 10);\n",
					s:"(\\d{1,2})"};
			case "l":
				return {g:0,
					c:null,
					s:"(?:" + Date.dayNames.join("|") + ")"};
			case "S":
				return {g:0,
					c:null,
					s:"(?:st|nd|rd|th)"};
			case "w":
				return {g:0,
					c:null,
					s:"\\d"};
			case "z":
				return {g:0,
					c:null,
					s:"(?:\\d{1,3})"};
			case "W":
				return {g:0,
					c:null,
					s:"(?:\\d{2})"};
			case "F":
				return {g:1,
					c:"m = parseInt(Date.monthNumbers[results[" + currentGroup + "].substring(0, 3)], 10);\n",
					s:"(" + Date.monthNames.join("|") + ")"};
			case "M":
				return {g:1,
					c:"m = parseInt(Date.monthNumbers[results[" + currentGroup + "]], 10);\n",
					s:"(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)"};
			case "n":
			case "m":
				return {g:1,
					c:"m = parseInt(results[" + currentGroup + "], 10) - 1;\n",
					s:"(\\d{1,2})"};
			case "t":
				return {g:0,
					c:null,
					s:"\\d{1,2}"};
			case "L":
				return {g:0,
					c:null,
					s:"(?:1|0)"};
			case "Y":
				return {g:1,
					c:"y = parseInt(results[" + currentGroup + "], 10);\n",
					s:"(\\d{4})"};
			case "y":
				return {g:1,
					c:"var ty = parseInt(results[" + currentGroup + "], 10);\n"
						+ "y = ty > Date.y2kYear ? 1900 + ty : 2000 + ty;\n",
					s:"(\\d{1,2})"};
			case "a":
				return {g:1,
					c:"if (results[" + currentGroup + "] == 'am') {\n"
						+ "if (h == 12) { h = 0; }\n"
						+ "} else { if (h < 12) { h += 12; }}",
					s:"(am|pm)"};
			case "A":
				return {g:1,
					c:"if (results[" + currentGroup + "] == 'AM') {\n"
						+ "if (h == 12) { h = 0; }\n"
						+ "} else { if (h < 12) { h += 12; }}",
					s:"(AM|PM)"};
			case "g":
			case "G":
			case "h":
			case "H":
				return {g:1,
					c:"h = parseInt(results[" + currentGroup + "], 10);\n",
					s:"(\\d{1,2})"};
			case "i":
				return {g:1,
					c:"i = parseInt(results[" + currentGroup + "], 10);\n",
					s:"(\\d{2})"};
			case "s":
				return {g:1,
					c:"s = parseInt(results[" + currentGroup + "], 10);\n",
					s:"(\\d{2})"};
			case "O":
			case "P":
				return {g:1,
					c:"z = Date.parseOffset(results[" + currentGroup + "], 10);\n",
					s:"(Z|[+-]\\d{2}:?\\d{2})"}; // "Z", "+05:00", "+0500" all acceptable.
			case "T":
				return {g:0,
					c:null,
					s:"[A-Z]{3}"};
			case "Z":
				return {g:1,
					c:"s = parseInt(results[" + currentGroup + "], 10);\n",
					s:"([+-]\\d{1,5})"};
			default:
				return {g:0,
					c:null,
					s:Date.escape(character)};
			}
		};


		Date.parseOffset = function(str) {
		  if (str == "Z") { return 0 ; } // UTC, no offset.
		  var seconds ;
		  seconds = parseInt(str[0] + str[1] + str[2]) * 3600 ; // e.g., "+05" or "-08"
		  if (str[3] == ":") {            // "+HH:MM" is preferred iso8601 format ("O")
			seconds += parseInt(str[4] + str[5]) * 60;
		  } else {                      // "+HHMM" is frequently used, though. ("P")
			seconds += parseInt(str[3] + str[4]) * 60;
		  }
		  return seconds ;
		};

		// convert the parsed date into UTC, but store the offset so we can optionally use it in dateFormat()
		Date.prototype.applyOffset = function(offset_seconds) {
		  this.offset = offset_seconds * 1000 ;
		  this.setTime(this.valueOf() + this.offset);
		  return this ;
		};
		/* function: getTimezone
			 Get the timezone abbreviation of the current date (equivalent to the format specifier 'T').

		Returns:
		 {String} The abbreviated timezone name (e.g. 'CST')
		 */
		Date.prototype.getTimezone = function() {
			return this.toString().replace(
				/^.*? ([A-Z]{3}) [0-9]{4}.*$/, "$1").replace(
				/^.*?\(([A-Z])[a-z]+ ([A-Z])[a-z]+ ([A-Z])[a-z]+\)$/, "$1$2$3").replace(
				/^.*?[0-9]{4} \(([A-Z]{3})\)/, "$1");
		};

		/* Function: getGMTOffset
			 Get the offset from GMT of the current date (equivalent to the format specifier 'O').

		Returns:
		 {String} The 4-character offset string prefixed with + or - (e.g. '-0600')
		 */
		Date.prototype.getGMTOffset = function() {
			return (this.getTimezoneOffset() > 0 ? "-" : "+")
				+ Date.leftPad(Math.floor(this.getTimezoneOffset() / 60), 2, "0")
				+ Date.leftPad(this.getTimezoneOffset() % 60, 2, "0");
		};

		/* Function: getDayOfYear
			 Get the numeric day number of the year, adjusted for leap year.

		Returns:
		 {Number} 0 through 364 (365 in leap years)
		 */

		Date.prototype.getDayOfYear = function() {
			var num = 0;
			Date.daysInMonth[1] = this.isLeapYear() ? 29 : 28;
			for (var i = 0; i < this.getMonth(); ++i) {
				num += Date.daysInMonth[i];
			}
			return num + this.getDate() - 1;
		};

		/* Function: getWeekOfYear
			 Get the string representation of the numeric week number of the year
			 (equivalent to the format specifier 'W').

		Returns:
		 {String} '00' through '52'
		 */
		Date.prototype.getWeekOfYear = function() {
			// Skip to Thursday of this week
			var now = this.getDayOfYear() + (4 - this.getDay());
			// Find the first Thursday of the year
			var jan1 = new Date(this.getFullYear(), 0, 1);
			var then = (7 - jan1.getDay() + 4);
			document.write(then);
			return Date.leftPad(((now - then) / 7) + 1, 2, "0");
		};

		/* Function:
			 Whether or not the current date is in a leap year.

		Returns: isLeapYear
		 {Boolean} True if the current date is in a leap year, else false
		 */
		Date.prototype.isLeapYear = function() {
			var year = this.getFullYear();
			return ((year & 3) == 0 && (year % 100 || (year % 400 == 0 && year)));
		};

		/* Function: getFirstDayOfMonth
			 Get the first day of the current month, adjusted for leap year.  The returned value
			 is the numeric day index within the week (0-6) which can be used in conjunction with
			 the {@link #monthNames} array to retrieve the textual day name.
			 Example:
			(code)
		var dt = new Date('1/10/2007');
		console.log(Date.dayNames[dt.getFirstDayOfMonth()]); //output: 'Monday'
		(end)

		Returns:
		 {Number} The day number (0-6)
		 */
		Date.prototype.getFirstDayOfMonth = function() {
			var day = (this.getDay() - (this.getDate() - 1)) % 7;
			return (day < 0) ? (day + 7) : day;
		};

		/* Function: getLastDayOfMonth
			 Get the last day of the current month, adjusted for leap year.  The returned value
			 is the numeric day index within the week (0-6) which can be used in conjunction with
			 the {@link #monthNames} array to retrieve the textual day name.
			 Example:
			(code)
		var dt = new Date('1/10/2007');
		console.log(Date.dayNames[dt.getLastDayOfMonth()]); //output: 'Wednesday'
		(end)

		Returns:
		 {Number} The day number (0-6)
		 */
		Date.prototype.getLastDayOfMonth = function() {
			var day = (this.getDay() + (Date.daysInMonth[this.getMonth()] - this.getDate())) % 7;
			return (day < 0) ? (day + 7) : day;
		};

		/* Function: getDaysInMonth
			 Get the number of days in the current month, adjusted for leap year.

		Returns:
		 {Number} The number of days in the month
		 */
		Date.prototype.getDaysInMonth = function() {
			Date.daysInMonth[1] = this.isLeapYear() ? 29 : 28;
			return Date.daysInMonth[this.getMonth()];
		};

		/* Function: getSuffix
			 Get the English ordinal suffix of the current day (equivalent to the format specifier 'S').

		Returns:
		 {String} 'st, 'nd', 'rd' or 'th'
		 */
		Date.prototype.getSuffix = function() {
			switch (this.getDate()) {
				case 1:
				case 21:
				case 31:
					return "st";
				case 2:
				case 22:
					return "nd";
				case 3:
				case 23:
					return "rd";
				default:
					return "th";
			}
		};

		Date.escape = function(string) {
			return string.replace(/('|\\)/g, "\\$1");
		};

		Date.leftPad = function (val, size, ch) {
			var result = new String(val);
			if (ch == null) {
				ch = " ";
			}
			while (result.length < size) {
				result = ch + result;
			}
			return result;
		};

		Date.daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
		Date.monthNames =
		   ["January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"];
		Date.dayNames =
		   ["Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday"];
		Date.y2kYear = 50;
		Date.monthNumbers = {
			Jan:0,
			Feb:1,
			Mar:2,
			Apr:3,
			May:4,
			Jun:5,
			Jul:6,
			Aug:7,
			Sep:8,
			Oct:9,
			Nov:10,
			Dec:11};
		Date.patterns = {
			ISO8601LongPattern: "Y\\-m\\-d\\TH\\:i\\:sO",
			ISO8601ShortPattern: "Y\\-m\\-d",
			ShortDatePattern: "n/j/Y",
			LongDatePattern: "l, F d, Y",
			FullDateTimePattern: "l, F d, Y g:i:s A",
			MonthDayPattern: "F d",
			ShortTimePattern: "g:i A",
			LongTimePattern: "g:i:s A",
			SortableDateTimePattern: "Y-m-d\\TH:i:s",
			UniversalSortableDateTimePattern: "Y-m-d H:i:sO",
			YearMonthPattern: "F, Y"};

		/* Function: clone
			 Creates and returns a new Date instance with the exact same date value as the called instance.
			 Dates are copied and passed by reference, so if a copied date variable is modified later, the original
			 variable will also be changed.  When the intention is to create a new variable that will not
			 modify the original instance, you should create a clone.

			 Example of correctly cloning a date:
			 (code)
		//wrong way:
		var orig = new Date('10/1/2006');
		var copy = orig;
		copy.setDate(5);
		console.log(orig);  //returns 'Thu Oct 05 2006'!

		//correct way:
		var orig = new Date('10/1/2006');
		var copy = orig.clone();
		copy.setDate(5);
		console.log(orig);  //returns 'Thu Oct 01 2006'
		(end)

		Returns:
		 {Date} The new Date instance
		 */
		Date.prototype.clone = function() {
			return new Date(this.getTime());
		};

		/* Function: clearTime
			 Clears any time information from this date
		 clone - {Boolean}true to create a clone of this date, clear the time and return it

		Returns:
		 {Date} this or the clone
		 */
		Date.prototype.clearTime = function(clone){
			if(clone){
				return this.clone().clearTime();
			}
			this.setHours(0);
			this.setMinutes(0);
			this.setSeconds(0);
			this.setMilliseconds(0);
			return this;
		};


		/*   Date interval constant @static @type String */
		Date.MILLI = "ms";
		/*   Date interval constant @static @type String */
		Date.SECOND = "s";
		/*   Date interval constant @static @type String */
		Date.MINUTE = "mi";
		/*   Date interval constant @static @type String */
		Date.HOUR = "h";
		/*   Date interval constant @static @type String */
		Date.DAY = "d";
		/*   Date interval constant @static @type String */
		Date.MONTH = "mo";
		/*   Date interval constant @static @type String */
		Date.YEAR = "y";

		/* Function: add
			 Provides a convenient method of performing basic date arithmetic.  This method
			 does not modify the Date instance being called - it creates and returns
			 a new Date instance containing the resulting date value.

			 Parameters:
			 interval			-	Either a Date Interval Type (see below) or a time in
									milliseconds to add to this date (see <Date.getInterval>).
									If this is a negative time, it will be subtracted
			 value				-	*Optional default 0*
									This is only necessary if _interval_ is a Date Interval
									Type (see below). In that case this the number of units to
									add. If this is a negative value it will be subtracted

			Date Interval Types:
				Date.MILLI 	-	"ms"
				Date.SECOND 	-	"s"
				Date.MINUTE 	-	"mi"
				Date.HOUR 	-	"h"
				Date.DAY 		-	"d"
				Date.MONTH	-	"mo"
				Date.YEAR		-	"y"

			Returns:
				The new Date instance

			Examples:
			(code)
			//Basic usage:
			var dt = new Date('10/29/2006').add(Date.DAY, 5);
			console.log(dt); //returns 'Fri Oct 06 2006 00:00:00'

			//can also use string codes:
			var dt = new Date('10/29/2006').add("d", 5);
			console.log(dt); //returns 'Fri Oct 06 2006 00:00:00'

			//Or use an interval for applying to multiple dates
			var interval = Date.getInterval("d",7) //one week
			//add a week to all the dates in the 'preDefinedDates' array
			var modifiedDates =preDefinedDates.map(function(date){
				return date.add(interval);
			})


			//Negative values will subtract correctly:
			var dt2 = new Date('10/1/2006').add(Date.DAY, -5);
			console.log(dt2); //returns 'Tue Sep 26 2006 00:00:00'

			//You can even chain several calls together in one line!
			var dt3 = new Date('10/1/2006').add(Date.DAY, 5).add(Date.HOUR, 8).add(Date.MINUTE, -30);
			console.log(dt3); //returns 'Fri Oct 06 2006 07:30:00'
			(end)
		 */
		Date.prototype.add = function(interval, value){
		  var d = this.clone();
		  if (!interval || value === 0) return d;
		  //if we have a numeric interval
		  if (parseInt(interval) == interval) {
			  d.setMilliseconds(this.getMilliseconds() + interval);
			  return d;
		  }
		  switch(interval.toLowerCase()){
			case Date.MILLI:
			  d.setMilliseconds(this.getMilliseconds() + value);
			  break;
			case Date.SECOND:
			  d.setSeconds(this.getSeconds() + value);
			  break;
			case Date.MINUTE:
			  d.setMinutes(this.getMinutes() + value);
			  break;
			case Date.HOUR:
			  d.setHours(this.getHours() + value);
			  break;
			case Date.DAY:
			  d.setDate(this.getDate() + value);
			  break;
			case Date.MONTH:
			  var day = this.getDate();
			  if(day > 28){
				  day = Math.min(day, this.getFirstDateOfMonth().add('mo', value).getLastDateOfMonth().getDate());
			  }
			  d.setDate(day);
			  d.setMonth(this.getMonth() + value);
			  break;
			case Date.YEAR:
			  d.setFullYear(this.getFullYear() + value);
			  break;
		  }
		  return d;
		};

		/*
		 * Copyright (C) 2009 Mark Porter <mark@porterpeople.com>
		 *
		 * Permission is hereby granted, free of charge, to any person obtaining a copy
		 * of this software and associated documentation files (the "Software"), to deal
		 * in the Software without restriction, including without limitation the rights
		 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		 * copies of the Software, and to permit persons to whom the Software is
		 * furnished to do so, subject to the following conditions:
		 *
		 * The above copyright notice and this permission notice shall be included in
		 * all copies or substantial portions of the Software.
		 *
		 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
		 * THE SOFTWARE.
		*/

		/* Function: diff
			 returns returns the time between two date objects

			 Parameters:
				d1		-	First date if lest than _d2_ result will be positive
				d2		-	Second date
				scale	-	*Optional, default Date.MILLI*
							The result will be dived by this interval to produce
							a result in this scale

			 Example:
			 (code)
				//return the difference in the d1 and d2 to the nearest week
				alert("Age: " + Math.round(Date.diff(create_date,new Date(),Date.WEEK)) );

			 (end)
		 */
		Date.diff=function(d1,d2,scale){
			if (!scale) scale = Date.MILLI
			return (d2.getTime() -d1.getTime())/Date.getInterval(scale)
		};
		/* Function: getInterval
			 returns a time interval in milliseconds. This can be used with <Date.add>
			 instead of specifying the type and length

			Parameters:
				interval		-	Either a Date Interval Type (see below) or a time in
									milliseconds to add to this date (see <Date.getInterval>).
									If this is a negative time, it will be subtracted
				count			-	*Optional default 1*
									Number of _interval_ values to return

			Date Interval Types:
				Date.MILLI 	-	"ms"
				Date.SECOND 	-	"s"
				Date.MINUTE 	-	"mi"
				Date.HOUR 	-	"h"
				Date.DAY 		-	"d"
				Date.MONTH	-	"mo"
				Date.YEAR		-	"y"

			Note:
				* Date.MONTH is always 30 days
				* Date.YEAR is always 365 days



			Example:
			(code)
			var interval = Date.getInterval("d",7) //one week
			//add a week to all the dates in the 'preDefinedDates' array
			var modifiedDates = preDefinedDates.map(function(date){
				return date.add(interval);
			})

			(end)
		 */
		Date.getInterval = function(interval, count){
			if (!count) count=1;
			if (!interval) return 0;
			switch(interval.toLowerCase()){
			case Date.MILLI:
				return count
			case Date.SECOND:
				return count * 1000;
			case Date.MINUTE:
				return count * 1000 * 60;
			case Date.HOUR:
				return count * 1000 * 60 *60;
			case Date.DAY:
				return count * 1000 * 60 *60 *24;
			case Date.MONTH:
				return count * 1000 * 60 *60 *24*30;
			case Date.YEAR:
				return count * 1000 * 60 *60 *24*365;
			}
		  return 0;
		};
		/* Function: parseInterval
			 returns an object with a breakdown of the units in an interval

			Parameters:
				interval		-	an interval in milliseconds to format

			returned object properties:
			* milliSeconds
			* seconds
			* minutes
			* hours
			* days
			* weeks
			* years

		 */
		Date.parseInterval = function(interval){

			var second = 1000;
			var minute = second*60;
			var hour = minute*60;
			var day = hour*24;
			var week = day*7;
			var year = day*365;
			var result={}

			result.years = Math.floor(interval/year);
			interval = interval % year;

			result.weeks = Math.floor(interval/week);
			interval = interval % week;


			result.days = Math.floor(interval/day);
			interval = interval % day;

			result.hours = Math.floor(interval/hour);
			interval = interval % hour;

			result.minutes = Math.floor(interval/minute);
			interval = interval % minute;

			result.seconds = Math.floor(interval/second);
			interval = interval % second;

			result.milliseconds = interval;

			return result
		}
		/* Function: formatInterval
			 returns an interval in milliseconds as human readable string.

			Parameters:
				interval		-	an interval in milliseconds to format
				options			-	formating options, see *Options* below

			Options:
				precision 		-	*Optional, default Date.MILLI*
									Level of precision to use. This defines the smallest
									unit to be returned
				scale			-	*Optional, default null*
									Integer. If defined, this is the number of places
									from the left to return. This will ignore empty
									places if _removeEmpty_ is true
				removeEmpty		-	*Optional, default true*
									Boolean. if true, 0 valuse will be stripped from the
									result.
				sep				-	*Optional, default ', '*
									String. Separator to use between time parts
				style			-	*Optional, default 'long'*
									Output style. See *Styles* below

			Styles:
				long		-	Example: 1 year, 1 week, 4 days, 10 hours, 8 minutes, 3 seconds, 667 milliseconds
				short		-	Example: 1y, 1w, 4d, 10h, 8m, 31s, 125ms
				none		-	Example: 1, 1, 4, 10, 9, 1, 642

			Example:
			(code)
				var interval = new Date().getTime() - new Date().add(Date.DAY,-376).clearTime()

				console.log(Date.formatInterval(interval))
				//prints: 1 year, 1 week, 4 days, 10 hours, 11 minutes, 17 seconds, 332 milliseconds

				console.log(Date.formatInterval(interval,{
					precision: Date.SECOND,
					scale:2,
					removeEmpty:false,
					sep:":",
					style:"none"
				}))
				//prints (year:weeks): 1:1

			(end)
		 */
		Date.formatInterval = function(interval,options){
			if (!options) options={}
			univnm.ObjectLib.setDefaultProperties(options,{
				precision: Date.MILLI,
				scale:null,
				removeEmpty:true,
				sep:", ",
				style:"long"
			})


			interval = Math.floor(interval/Date.getInterval(options.precision))
						* Date.getInterval(options.precision);

			var result=[]

			var parts={}

			var parts = Date.parseInterval(interval)

			$O(parts)
			.filter(function(v,k,i){
				return v || !options.removeEmpty
			})
			.filter(function(v,k,i){
				return !options.scale || i < options.scale
			})
			.forEach(function(v,k,i){
				switch (options.style){
				case "none":
					result.push(v);
					break;
				case "short":
					result.push("{0}{1}".format(
						v,
						k=="milliseconds"?"ms":k.left(1)
					))
					break;
				case "long":
				default:
					result.push("{0} {1}".format(
						v,
						v==0 ||v > 1?k:k.before(1)
					))
					break;

				}
			})
			return result.join(options.sep)


		};

	/* Function: monthsBetween
		 [static] returns the number of whole calendar months between two dates

		Parameters:
			d1		-	first date
			d2		-	second date

		Note:
			if d1 > d2 the answer will be negative

	 */
	Date.monthsBetween = function(d1,d2){
		var coefficient=1
		if (d1 > d2) {
			[d1,d2] =[d2,d1];
			coefficient=-1
		}
		var count =0
		while (d1.getYear() < d2.getYear()){
			d1 = d1.add("y",1)
			count+=12
		}
		while (d1.getMonth() < d2.getMonth()){
			d1 = d1.add("mo",1)
			count++
		}
		return coefficient *count;
	}
/*  */


if (!("$env" in this)) this.$env ={}
$env.load =function(){
	var v;
	var env=[{
		name:"mpageType",
		defaultValue:"external"
	},{
		name:"cclMask",
		defaultValue:"{ccl}"
	}]

	env.forEach(function(def){
		var key = "env_" + def.name.toLowerCase();
		var v = univnm.jslib.getQuerystring(key,false);
		if (v) {
			$env[def.name] = v;
			jaaulde.utils.cookies.set(key,v);
			return;
		}
		// OR Cookie
		v = jaaulde.utils.cookies.get(key);
		if (v) {
			$env[def.name] = v;
			return;
		}
		// leave at default
		if (!(def.name in $env)) $env[def.name] = def.defaultValue;
	})
}
$env.load()






}{
/*global Ext univnm*/
Ext.define("univnm.ext.QueryProxy",{
	extend:"Ext.data.DataProxy",
	alias: 'proxy.query',
	read: function load(operation,cb,store){
		var isSenchaTouch = (function() {
			return ("version" in Ext);
		})();
	/* init */
		var my = arguments.callee;
		var $this =this;
		if (!my.modelCounter) my.modelCounter =1;
		if (!my.modelNames) my.modelNames={};

		/* import properties from model, if not locally defined */
			/* if (this.model){
				"sql,map,pivot,post".split(",").forEach(function(p){
					if (!$this[p]) $this[p] = $this.model[p];
				})
				Ext.applyIf(this.model.extraParams, this.extraParams)
			} */

		var
		params=operation.params||{},
			callback=cb||function(){},
			scope=store||this
		;
		Ext.applyIf(params,this.extraParams||{});
		//if (this.debugParams){
		//	console.log(params,"Store Params")	;
		//}
		//console.log(params,"params")
		// console.log(this,"this")

		if (isSenchaTouch) {
			Ext.applyIf(this, this.config);
			Ext.applyIf(operation, operation.config);
		}


		if (! ("sql" in this)){
			throw new Error(
				"'sql' must be defined for QueryProxy, or readSql must be defined in the model"
			);
		}
		var modelClass = this.model;
		var modelDef;
		if (modelClass) {
			modelDef = new modelClass();
		}
	/* find SQL */
		if (!this.sql){ //Check for RowProxy compatible models
			if (modelDef && modelDef.readSql){
				if (modelDef.readSql instanceof Array){
					this.sql =modelDef.readSql.join(" ");
				} else {
					this.sql =modelDef.readSql;
				}
				this.sql =this.sql.format({
					conditions:"1=1"
				});
			} else if (modelDef && modelDef.proxy && modelDef.proxy.readSql){
				if (modelDef.proxy.readSql instanceof Array){
					this.sql =modelDef.proxy.readSql.join(" ");
				} else {
					this.sql =modelDef.proxy.readSql;
				}
				this.sql =this.sql.format({
					conditions:"1=1",
					table:modelDef.table
				});
				//console.log(this.sql)
			} else {
				throw new Error(
					"'sql' must be defined for QueryProxy, or readSql must be defined in the model"
				);
			}
		} else if (!/select/i.test(this.sql)){
			if (document.getElementById(this.sql)){
				this.sql = document.getElementById(this.sql).innerHTML;

			}else {
				var args = Array.parse(arguments);
				var proxy = this;
				Ext.Ajax.request({
					url:this.sql,
					success:function(r){
						proxy.sql = r.responseText;
						load.apply(proxy,args);
					}
				});
				return;
			}
		}


		if(this.sql instanceof Array){
			this.sql = this.sql.join(' ');
		}

	/* sandbox parameters so that Ext doesn't grab them
			from the global scope in tests
		*/

		if (typeof params.tableExtension == "undefined"){
			params.tableExtension = $env.tableExtension
		}
		if (!params.tableExtension) params.tableExtension ="";


		this.sql.replace(/\{(\w+)\}/g,function(str,term){
			if (!(term in params)) params[term] = null;
			return str;
		});
		/* check tpl "if" statements also */
		this.sql.replace(/<tpl if=["'].*?(\w+).*?["']>/g,function(str,term){
			if (!(term in params)) params[term] = undefined;
			return str;
		});
		univnm.ObjectLib.getKeys(params).forEach(function (k) {
			if (params[k] && typeof params[k] == "object" && params[k] instanceof Date){
				params[k] =params[k].format('d-m-Y H:i:s');
			}
		});
	/*apply parameters*/
		var queryParams = params;
		if (this.convertParams){
			var convertParams = this.convertParams;
			if (convertParams instanceof Array){
				queryParams={};
				univnm.ObjectLib.getKeys(params).forEach(function (p) {
					if (convertParams.contains(p)){
						queryParams[p] = univnm.db.toSql(params[p]);
					} else {
						queryParams[p] = params[p];
					}
				})
			} else {
				queryParams = univnm.db.toSql(queryParams);
			}

		}
		params.sql =new Ext.XTemplate(this.sql).apply(queryParams);

	/* find/create model */
		var modelName;

		if (this.sql in my.modelNames){
			modelName	= my.modelNames[this.sql];
		} else {
			modelName ="DynamicQueryModel" +(++my.modelCounter);
			my.modelNames[this.sql] = modelName;
		}
		//console.log(my.modelNames)

		//console.log(reader)

		/* params = ObjectLib.applyTo(params,{
			sort:"rownum",
			dir:""
		},true) */
		//console.log(params)
	/* Fix dates in sorters */
		(operation.sorters || []).forEach(function(sort){
			if (/_date$/.test(sort.property)) sort.property= sort.property.replace(/_date/,"_dt_tm");
		});

		var parsedSql;
		//console.log(params)

	/* apply paging window */
		if ( operation.limit && !this.pivot){
			params.start =(parseInt(operation.start,10)||0) +1;
			params.end = parseInt(operation.start,10) + parseInt(operation.limit,10);
			params.sorters = operation.sorters;
			parsedSql = new Ext.XTemplate([
				/*'SELECT * FROM (',
					'SELECT ',
						'rownum rnum, ',
						'a.*,',
						'(select count(*) from (',
							'{sql}',
						')) total_rows',
					'FROM(',
						'{sql} ',

						'<tpl if="sorters.length">',
							'Order By ',
								'<tpl for="sorters">',
									'{property} {direction}',
									'<tpl if="xindex != parent.sorters.length ">,</tpl>',
								'</tpl>',
						'</tpl>',
					') a ',
					'WHERE rownum <= {end}',
				')',
				'WHERE rnum >={start}'*/
				"select * from ( ",
				"    SELECT ",
				"        \"_data\".*, ",
				"        rownum rnum, ",
				"        count(*) over () total_rows ",
				"    FROM ( ",
				"		{sql} ",
				"        <tpl if='sorters.length'> ",
				"        Order By ",
				"        <tpl for='sorters'> ",
				"            {property} {direction} ",
				"            <tpl if='xindex != parent.sorters.length'>,</tpl> ",
				"        </tpl> ",
				"        </tpl> ",
				"    ) \"_data\" ",
				") ",
				"WHERE rnum BETWEEN {start} and {end} "
			].join(" ")).apply(params);

		} else {
			//console.log("operation", operation)
			parsedSql = new Ext.XTemplate(
				params.sql,
				'<tpl if="typeof sort !==\'undefined\'">Order By {sort} {dir}</tpl>'
			).apply(params);
		}
		//debug_window(params)

		//console.log(parsedSql,"sql")
	/* Run query */
		var pf1 = $profiler.begin("Query: " + store.$className);
		univnm.db.query(parsedSql,function(result){
			pf1();
			var pf2 = $profiler.begin("Post Processing on Query: " + store.$className);
		/* init */
		//console.log(result);
			var total;
			var orig = result;
		/* Function: completeLoad */
			function completeLoad(result){
				try{
					if (result.length) {
						result.columns = univnm.ObjectLib.getKeys(result[0]);
					}
					if (!store.model && !store._model){
						if (typeof window[modelName] === "undefined"	){
							if (isSenchaTouch) {
								Ext.define(modelName , {
									extend: 'Ext.data.Model',
									config: {
										fields:result.columns,
										idField: result.columns[0]
									}
								});
								operation.setModel(window[modelName]);
							} else {
								Ext.define(modelName , {
									extend: 'Ext.data.Model',
									fields:result.columns
								});
							}
						}
						$this.setModel(window[modelName],true);


					} else {
						// console.log($this.getModel().prototype.fields.keys.join(","));
						result.columns.forEach(function(col) {
							if (!(col in this.getModel().prototype.fields.map)) {
								this.getModel().prototype.fields.add(new Ext.data.Field(col));
							}
						}, $this);
					}
											if (window[modelName] && !window[modelName].prototype.fields.getCount()){
							window[modelName].prototype.fields.addAll(
								result.columns.map(function(col){
									return new Ext.data.Field(col);
								})
							);
						}

					//$this.setModel({fields:result.columns})
					var r = new Ext.data.reader.Json({root:"rows"});

					$this.setReader(r);
					//console.log(r)

					//store.recordType = r.recordType;
					//store.reader = r;
					//store.fields = r.recordType.prototype.fields;


					//console.log(result.columns.join(),"columns")
					/* console.log("result",result)
					console.log("total",total) */
					if (isSenchaTouch) {
						operation.process('read', r.readRecords(result));

					} else {
						result = r.read({
							rows:result,
							total:total
						});
						Ext.apply(operation, {
							resultSet: result
						});
						operation.setCompleted();
						operation.setSuccessful();
					}
					Ext.callback(callback, scope || $this, [operation]);
					pf2();
				} catch(e){
					console.log(e.stack);
				}
				/* console.log(records,"records")
				callback.call(scope, records, arg, true); */
			}

		/* map */
			if ($this.map){
				result = result.map($this.map.bind($this));
			}
		/* filter */
			if ($this.filter){
				result = result.filter($this.filter.bind($this));
			}
		/* pivot */
			if ($this.pivot){
				result = result.pivot($this.pivot.keyField,$this.pivot.categoryField,$this.pivot.valueField,$this.pivot.fieldSanitizer);
				if ($this.pivot.map){
					result = result.map($this.pivot.map.bind($this));
				}
				//debug_window(result.toHtmlTable())
				total = result.length;
				//console.log(result,"pivot")
			} else total=result.length?result[0].total_rows:0;

		/* post */
			if ($this.post){
				var retval = $this.post(result,function(result){
					completeLoad(result);
				},params);
				if (retval) completeLoad(retval);
			} else {
				completeLoad(result);
			}
		});

	},
	api:{},
	update: function(params, records){}
});

/* Class:	univnm.ext.QueryStore
	Ext DateStore implementation that uses <query.js> to retrieve data

	Config Options:
		sql		-	If this is an SQL select statement, it is used directly. If
					this is an ID of a dom element, then the content of that
					element is used. If this is a URL to a file, then the
					content of that file is used. Regardless, this SQL will be
					treated as an Ext.XTemplate and merged with any the store's
					params and baseParams

		map		-	*Optional, default null*
					*Function*.
					If defined, <DataSet.map> will be called against the value
					returned by the underlying query, passing this function as
					the handler

		filter	-	*Optional, default null*
					*Function*.
					If defined, <DataSet.filter> will be called against the value
					returned by the underlying query, passing this function as
					the handler. Run after _map_

		pivot	-	*Optional, default null*
					*Object*
					If defined, <DataSet.pivot> will be called against the value
					returned by the underlying query, using the options defined
					here. See *Pivot Options* below. Run after _map_ and _filter_

		post	-	*Optional, default null*
					*Function*.
					If defined ,this function will called with with the query result
					and a finisher function. This _post_ function can manipulate the
					result in any way and eitehr return the new result, or call the
					finishing function with the new result. Runs after map,filter,
					and pivot

		convertParams	-	*Optional, default null*
							*Boolean or Array[String]*
							If this is "true" then every params passed to this
							store is passed through <univnm.db.toSql>. If this
							is an array of strings, then only parameters with
							these names will be converted

	Pivot Options:
		keyField		-	The key column in the query
		categoryField	-	The category column in the query
		valueField		-	The value column
		map				-	*Optional, default null*
							*Function*.
							This performs the same function as the _map_
							property in the config, but is run after pivoting

	Special Behaviors:
		*	if "limit" is defined and "pivot" is not, then the query
			will be pagenated
		*	If remoteSort = true, then an "order by" clause
			will be added to the the SQL. If sortInfo is defined, it will set
			the initial sort. If remoteSort=true, then you can put multiple
			columns in the "field" property and set "direction" to space (" ")
		*	"_date" pseudo columns in parameters will be converted to "_dt_tm"


	See Also:
		* <query.js>

	Examples:
	(code)
		...
		store: store=new Ext.data.QueryStore({
			storeId:"sqlstore",
			sql:"vitals",
			remoteSort: true,
			autoLoad:true,
			map:function(row){
				if(/^temperature/i.test(row.code_display)) row.code_display = "Temperature"
				return row
			},
			pivot:{
				keyField:"event_end_date",
				categoryField:"code_display",
				valueField:"value",
				map:function(row,index,result){
					result.columns.forEach(function(col){
						// kinda dumb, but lets 0 out nulls
						if (!row[col]) row[col] =0
					})
					return row
				}
			},
			post:function(result,finish){
				query("some more stuff,function(more){
					result.merge(more)
					finish(result)
				})
			}
			baseParams:{
				person_id:72436989,
				encounter_id:43378087,
				start_date:query.toDate(new Date().add(Date.DAY,-1)),
				end_date:query.toDate(new Date()),
				limit:25
			},
			sortInfo:{
				field:'event_end_data',
				direction:'DESC'
			}
		}),
		...
		<sql id="qryVitals">
			SELECT
				code_display(72, c.EVENT_CD) AS code_display
				,code_display_key(72, c.EVENT_CD) AS code_display_key
				, c.result_val as value
				, c.event_end_dt_tm
				, to_char(c.event_end_dt_tm,'DAY MM-DD HH24:MI') date_label

			FROM clinical_event	c
			WHERE c.person_id = {person_id}
			AND c.event_end_dt_tm BETWEEN {start_date} AND {end_date}
			AND c.encntr_id = {encounter_id}
			AND c.event_cd IN (
				code_lookup(72, 'SPO2'),
				code_lookup(72, 'TEMPERATUREORAL'),
				code_lookup(72, 'TEMPERATURETYMPANIC'),
				code_lookup(72, 'TEMPERATURERECTAL'),
				code_lookup(72, 'TEMPERATURETEMPORAL'),
				code_lookup(72, 'TEMPERATUREAXILLARY'),
				code_lookup(72, 'HEARTRATEMONITORED'),
				code_lookup(72, 'RESPIRATORYRATE'),
				code_lookup(72, 'SYSTOLICBLOODPRESSURE'),
				code_lookup(72, 'DIASTOLICBLOODPRESSURE'),
				code_lookup(72, 'SYSTOLICBLOODPRESSURE'),
				code_lookup(72, 'MEANARTERIALPRESSURE'),
				code_lookup(72, 'MEANARTERIALPRESSURECUFF'),
			0)
		</sql>
	(end)
*/
Ext.define("univnm.ext.QueryStore",{
	extend:"Ext.data.Store",
	alias:"store.query",
	buildConfig: function(config) {
		// each transaction upon a singe record will generate a distinct Direct transaction since Direct queues them into one Ajax request.
		var c = Ext.apply({
			mergeColumns: this.mergeColumns,
			toDataSet: this.toDataSet,
			getDeferred: this.getDeferred
		},config, {
			batchTransactions: false,
			defaultPageSize:0,
			pageSize:0
		});
		var rv =  Ext.apply(c, {
			proxy: {
				type: "query",
				sql:config.sql||this.sql,
				convertParams:config.convertParams,
				pivot:config.pivot||this.pivot,
				map:config.map||this.map,
				filter:config.proxyFilter||this.proxyFilter,
				post:config.post||this.post,
				extraParams:config.extraParams||this.extraParams
			},
			reader: new Ext.data.reader.Json(Ext.copyTo({root:"data"}, c, 'idProperty'), c.fields)
		});
		return rv;
	},

	constructor: function(config){
		this.callParent([ //rv ]);
			this.buildConfig(config)
		]);
	},

	getDeferred: function getDeferred() {
		var deferred = univnm.jslib.async.marshal(function (done) {
			if (this.isLoading()) this.on("load", done, { single: true }); else setTimeout(done);
		}, this);
		getDeferred = function() { return deferred; };
		return deferred;
	},

	mergeColumns: function(ds, options) {
		var model = this.getProxy().getModel(), changes = 0;
		if (ds.length === 0) return;
		options = options || {};
		options = Ext.apply({
			idProperty: model.prototype._idProperty || model.prototype.idProperty,
			columns: options.columns || ds.columns || univnm.ObjectLib.getKeys(ds[0])
		}, options);
		var store = this;

		if (!(options.idProperty in model.prototype.fields.map)) {
			throw new Error("idProperty " + options.idProperty + " not in source model/store");
		}

		options.columns.forEach(function(col) {
			if (!(col in model.prototype.fields.map)) {
				model.prototype.fields.add(new Ext.data.Field(col));
			}
		});

		store.suspendEvents(false);
		ds.forEach(function(row) {
			var rec = store.getById(row[options.idProperty]);
			if (rec) {
				options.columns.forEach(function(col) {
					rec.set(col, row[col]);
				});
				rec.commit();
				changes++;
			} else {
				console.error("Trying to merge rows");
			}
		});
		store.resumeEvents(true);
		store.fireEvent('refresh', store);
		console.log('Merged rows: '+changes);
		if (changes === 0 && ds.length > 0) {
			console.error("nothing merged");
		}
	},
	/*Function: toDataSet
		returns a DataSet of this store's data

		Example:
		(code)
			var emps = Ext.StoreMgr.get("employees").toDataSet()
				.findAllByCol("manager_id",record.get("employee_id"))
				.valueArray("employee_id")
				.join()
		(end)
	*/
	toDataSet:function(){
		var records = this.snapshot||this.data;
		return new univnm.DataSet({
			columns:this.getProxy().getModel().prototype.fields.keys,
			data:records.items.map(function(record){
				return record.data;
			})
		});
	}
});


}{
/* Class:  univnm.ext.BetterActionColumn
	An Ext4 ActionColumn implementation with extra features
	
	Detail:
		This is an extension of Ext.grid.column.Action that allows for per-row 
		icon swapping and using an icon class instead of an icon URL. Width is 
		also automatically set to fit the number of icons 	 
	
	Topic: Examples
	(code)
		//Single Button
		...
		columns:[{
			xtype:"betteractioncolumn",
			text:"Options",
			dataIndex:"id",
			eventName:"actionAdd",
			handler:function(view,rowIndex,colIndex,item,e){
				var value = view.getStore().getAt(rowIndex).get(this.dataIndex)
				console.log("btn2 " + value)
			},
			tooltip:"col1",
			iconCls:"icon_add",
			
			// instead of a class can use a url
			//icon:"http://blah/blah/blah/images/delete.png",
			
			// Instead of a class, you can use a function that returns a class
			// Takes same paramters as a header renderer 
			//getClass:function(value,meta,record){
			//	if (record.get("has_entries")) return "icon_delete"
			//	return "icon_add"
			//}
			
		}]
		...
		listeners:{
			actionAdd:function(data){
				alert("called 'add' against column " + data.col.dataIndex +" with value " + data.value)
			}
		}
		...
		(end)
		
		(code)
		//Multiple Buttons
		...
		columns:[{
			xtype:"betteractioncolumn",
			text:"Options",
			dataIndex:"id",
			items:[{
				handler:function(view,rowIndex,colIndex,item,e){
					var value = view.getStore().getAt(rowIndex).get(this.dataIndex)
					console.log("btn1 " + value)
				},
				eventName:"actionAdd",
				tooltip:"col1",
				iconCls:"icon_add"
			},{
				handler:function(view,rowIndex,colIndex,item,e){
					var value = view.getStore().getAt(rowIndex).get(this.dataIndex)
					console.log("btn2 " + value)
				},
				tooltip:"col2",
				iconCls:"icon_delete"
			}] 
			
		}],
		...
		listeners:{
			actionAdd:function(data){
				alert("called 'add' against column " + data.col.dataIndex +" with value " + data.value)
			}
		}
		...
	(end)
	
	Property: eventName
		causes an event with this name to fire against the grid/tree containing 
		this column when the button is clicked
		
		Paramters:
			data	-	Object containing event information, see *Data:* below
			
		Data:
			src		-	The component clicked on.
			value	-	value of the cell containing the action button
			record	-	the record in the row clicked on
			col		-	The column definition (the same as src for single buttons)
			owner	-	grid or tree that owns this column
			store	-	store that backs this view. Note this is NOT the tree store if this column is in a tree
			
*/
Ext.define('univnm.ext.BetterActionColumn', {
	extend: 'Ext.grid.column.Action',
	alias:'widget.betteractioncolumn',
	constructor: function(config) {
		var me = this,
			cfg = Ext.apply({}, config),
			items = cfg.items || [me]
		;
		
		config.width =  items.length*18
		this.callParent(arguments);
		
		// Items is an array property of ActionColumns
		// 	Renderer closure iterates through items creating an <DIV> element 
		//	for each and tagging with an identifying
		//	class name x-action-col-{n}
		me.renderer = function(v, meta) {
			//  Allow a configured renderer to create initial value (And set the other values in the "metadata" argument!)
			var args = Array.parse(arguments);
			v = Ext.isFunction(cfg.renderer) ? cfg.renderer.apply(this, arguments)||'' : '';
			meta.tdCls += ' ' + Ext.baseCSSPrefix + 'action-col-cell';
			
			return v+ items.map(function(item,i){
				item.enable = Ext.Function.bind(me.enableAction, me, [i]);
				var iconStyle ="width:16px;height:16px;float:left;cursor:pointer;" 
				if (item.icon) {
					iconStyle +=" background: url("+item.icon+") 0 0 no-repeat !important;";
				}
				
				return new Ext.Template(
					//'<img height="16" width="16"/>',
					'<div ',
						'alt="{altText}" ',
						'class="  {disabledClass} {itemClass}"',
						'style="{style}"',
						'{toolTip}',
						'><div style="height:16px;width:16px" class="{colIconClass} {colIconIdClass}"></div></div>',
				'').apply({
					altText:item.altText || me.altText,
					icon:item.icon || Ext.BLANK_IMAGE_URL,
					colIconClass:Ext.baseCSSPrefix + 'action-col-icon',
					colIconIdClass:Ext.baseCSSPrefix + 'action-col-' + String(i),
					disabledClass:item.disabled 
						? Ext.baseCSSPrefix + 'item-disabled' 
						: ' ',
					itemClass:Ext.isFunction(item.getClass) 
						? item.getClass.apply(item.scope||me.scope||me, args) 
						: item.iconCls || '',
					toolTip:item.tooltip?'data-qtip="'+ item.tooltip + '"':'',
					style:iconStyle
					
				})
			}).join(" ")
		}; 
	},
	processEvent: function(type, view, cell, recordIndex, cellIndex, e){
		
        var me = this,
            match = e.getTarget().className.match(me.actionIdRe),
            item, fn;
            
        if (match) {
            item = me.items[parseInt(match[1], 10)];
            if (item) {
                if (type == 'click') {
                	if (item.eventName){
  						view.ownerCt.fireEvent(item.eventName,{
                			src:item,
                			col:me,
                			owner:view.ownerCt,
                			store:view.getStore(),
                			record:view.getStore().getAt(recordIndex),
                			value:view.getStore().getAt(recordIndex).get(me.dataIndex)
                		})
                		//return false
                	}
                    
                } else if (type == 'mousedown' && item.stopSelection !== false) {
                    return false;
                }
            }
        }
        return me.callParent(arguments);
    }
})
}{
/* Class: univnm.ext.SequenceGenerator
	(proxy type = seq) Ext.data.idGenerator that loads from a database sequence
	
	
	Config Properties:
		sequence		-	String, default 'cust_main_seq'
							name of sequence to query for new ids
	
	Note:
		The sequence query is a synchronous callback and is triggered whenever 
		a new model instance is created that does not define an id value. This 
		should not be used on models that might be created in a large batch
		
	Example:
	(code)
		Ext.define('MPAGE.model.Menu', {
			extend: 'Ext.data.Model',
			proxy:"row",
			table:"cust_menus",
			fields:[
				{name:"id",									sqlDefault:"#cust_menus_seq.nextval"},
				{name:"name",		naturalKey:true},
				{name:"base_dir",	naturalKey:true, defaultValue:"file:/I:/custom/mpages"},
				{name:"title"}
			],
			idgen: {
				type: 'seq',
				sequence:"cust_menus_seq"
			},
			readSql:[
				"Select ",
				"	id, ",
				"	name, ",
				"	title, ",
				"	base_dir ",
				"from ",
				"	cust_menus t",
				"where ",
				"	{conditions} "
			]
		});

		
		
	(end)	
	
*/
Ext.define('univnm.ext.SequenceGenerator', {
	extend: 'Ext.data.IdGenerator',
	alias: 'idgen.seq',
	/* constructor:function(config){
		this.
		this.callParent(arguments)
	} */
	sequence:"cust_seq_main",
	generate:function(){
		return univnm.db.query(
			"select {sequence}.nextval from dual",
			this
		)[0].nextval
	}
});
}{
/* 
 *	Notification / Toastwindow extension for Ext JS 4.x
 *
 *	Copyright (c) 2011 Eirik Lorentsen (http://www.eirik.net/)
 *
 *	Examples and documentation at: http://www.eirik.net/Ext/ux/window/Notification.html
 *
 *	Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 *	and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 *	Version: 2.0
 *	Last changed date: 2012-03-06
 */
//Ext.util.CSS.createStyleSheet(".ux-notification-window .x-window-body {text-align: center;padding: 15px 5px 15px 5px;width: 200px;} .ux-notification-light .x-window-header {background-color: transparent;	} body .ux-notification-light {background-image: url('../shared/img/fader.png');} .ux-notification-light .x-window-body {text-align: center;padding: 15px 5px 18px 5px;width: 200px;background-color: transparent;border: 0px solid white;}", 'myId');
Ext.define('univnm.ext.Notification', {
	extend: 'Ext.window.Window',
	alias: 'widget.uxNotification',

	cls: 'ux-notification-window',
	autoHide: true,
	autoHeight: true,
	plain: false,
	draggable: false,
	shadow: false,
	focus: Ext.emptyFn,

	// For alignment and to store array of rendered notifications. Defaults to document if not set.
	manager: null,

	useXAxis: false,

	// Options: br, bl, tr, tl, t, l, b, r
	position: 'br',

	// Pixels between each notification
	spacing: 6,

	// Pixels from the managers borders to start the first notification
	paddingX: 30,
	paddingY: 10,

	slideInAnimation: 'easeIn',
	slideBackAnimation: 'bounceOut',
	slideInDuration: 1500,
	slideBackDuration: 1000,
	hideDuration: 500,
	autoHideDelay: 7000,
	stickOnClick: true,
	stickWhileHover: true,

	// Private. Do not override!
	isHiding: false,
	readyToHide: false,

	// Caching coordinates to be able to align to final position of siblings being animated
	xPos: 0,
	yPos: 0,

	statics: {
		defaultManager: {
			el: null
		}
	},

	getXposAlignedToManager: function () {
		var me = this;

		var xPos = 0;

		// Avoid error messages if the manager does not have a dom element
		if (me.manager && me.manager.el && me.manager.el.dom) {
			if (!me.useXAxis) {
				// Element should already be aligned verticaly
				return me.el.getLeft();
			} else {
				// Using getAnchorXY instead of getTop/getBottom should give a correct placement when document is used
				// as the manager but is still 0 px high. Before rendering the viewport.
				if (me.position == 'br' || me.position == 'tr' || me.position == 'r') {
					xPos += me.manager.el.getAnchorXY('r')[0];
					xPos -= (me.el.getWidth() + me.paddingX);
				} else {
					xPos += me.manager.el.getAnchorXY('l')[0];
					xPos += me.paddingX;
				}
			}
		}

		return xPos;
	},

	getYposAlignedToManager: function () {
		var me = this;

		var yPos = 0;

		// Avoid error messages if the manager does not have a dom element
		if (me.manager && me.manager.el && me.manager.el.dom) {
			if (me.useXAxis) {
				// Element should already be aligned horizontaly
				return me.el.getTop();
			} else {
				// Using getAnchorXY instead of getTop/getBottom should give a correct placement when document is used
				// as the manager but is still 0 px high. Before rendering the viewport.
				if (me.position == 'br' || me.position == 'bl' || me.position == 'b') {
					yPos += me.manager.el.getAnchorXY('b')[1];
					yPos -= (me.el.getHeight() + me.paddingY);
				} else {
					yPos += me.manager.el.getAnchorXY('t')[1];
					yPos += me.paddingY;
				}
			}
		}

		return yPos;
	},

	getXposAlignedToSibling: function (sibling) {
		var me = this;

		if (me.useXAxis) {
			if (me.position == 'tl' || me.position == 'bl' || me.position == 'l') {
				// Using sibling's width when adding
				return (sibling.xPos + sibling.el.getWidth() + sibling.spacing);
			} else {
				// Using own width when subtracting
				return (sibling.xPos - me.el.getWidth() - me.spacing);
			}
		} else {
			return me.el.getLeft();
		}

	},

	getYposAlignedToSibling: function (sibling) {
		var me = this;

		if (me.useXAxis) {
			return me.el.getTop();
		} else {
			if (me.position == 'tr' || me.position == 'tl' || me.position == 't') {
				// Using sibling's width when adding
				return (sibling.yPos + sibling.el.getHeight() + sibling.spacing);				
			} else {
				// Using own width when subtracting
				return (sibling.yPos - me.el.getHeight() - sibling.spacing);
			}
		}
	},

	getNotifications: function (alignment) {
		var me = this;

		if (!me.manager.notifications[alignment]) {
			me.manager.notifications[alignment] = [];
		}

		return me.manager.notifications[alignment];
	},

	beforeShow: function () {
		var me = this;

		// 1.x backwards compatibility
		if (Ext.isDefined(me.corner)) {
			me.position = me.corner;
		}
		if (Ext.isDefined(me.slideDownAnimation)) {
			me.slideBackAnimation = me.slideDownAnimation;
		}
		if (Ext.isDefined(me.autoDestroyDelay)) {
			me.autoHideDelay = me.autoDestroyDelay;
		}
		if (Ext.isDefined(me.slideInDelay)) {
			me.slideInDuration = me.slideInDelay;
		}
		if (Ext.isDefined(me.slideDownDelay)) {
			me.slideBackDuration = me.slideDownDelay;
		}
		if (Ext.isDefined(me.fadeDelay)) {
			me.hideDuration = me.fadeDelay;
		}

		// 'bc', lc', 'rc', 'tc' compatibility
		me.position = me.position.replace(/c/, '');

		switch (me.position) {
			case 'br':
				me.paddingFactorX = -1;
				me.paddingFactorY = -1;
				me.siblingAlignment = "br-br";
				if (me.useXAxis) {
					me.managerAlignment = "bl-br";
				} else {
					me.managerAlignment = "tr-br";
				}
				break;
			case 'bl':
				me.paddingFactorX = 1;
				me.paddingFactorY = -1;
				me.siblingAlignment = "bl-bl";
				if (me.useXAxis) {
					me.managerAlignment = "br-bl";
				} else {
					me.managerAlignment = "tl-bl";
				}
				break;
			case 'tr':
				me.paddingFactorX = -1;
				me.paddingFactorY = 1;
				me.siblingAlignment = "tr-tr";
				if (me.useXAxis) {
					me.managerAlignment = "tl-tr";
				} else {
					me.managerAlignment = "br-tr";
				}
				break;
			case 'tl':
				me.paddingFactorX = 1;
				me.paddingFactorY = 1;
				me.siblingAlignment = "tl-tl";
				if (me.useXAxis) {
					me.managerAlignment = "tr-tl";
				} else {
					me.managerAlignment = "bl-tl";
				}
				break;
			case 'b':
				me.paddingFactorX = 0;
				me.paddingFactorY = -1;
				me.siblingAlignment = "b-b";
				me.useXAxis = 0;
				me.managerAlignment = "t-b";
				break;
			case 't':
				me.paddingFactorX = 0;
				me.paddingFactorY = 1;
				me.siblingAlignment = "t-t";
				me.useXAxis = 0;
				me.managerAlignment = "b-t";
				break;
			case 'l':
				me.paddingFactorX = 1;
				me.paddingFactorY = 0;
				me.siblingAlignment = "l-l";
				me.useXAxis = 1;
				me.managerAlignment = "r-l";
				break;
			case 'r':
				me.paddingFactorX = -1;
				me.paddingFactorY = 0;
				me.siblingAlignment = "r-r";
				me.useXAxis = 1;
				me.managerAlignment = "l-r";
				break;
			}

		if (typeof me.manager == 'string') {
			me.manager = Ext.getCmp(me.manager);
		}

		// If no manager is provided or found, then the static object is used and the el property pointed to the body document.
		if (!me.manager) {
			me.manager = me.statics().defaultManager;

			if (!me.manager.el) {
				me.manager.el = Ext.getBody();
			}
		}
		
		if (typeof me.manager.notifications == 'undefined') {
			me.manager.notifications = {};
		}

		if (me.stickOnClick) {
			if (me.body && me.body.dom) {
				Ext.fly(me.body.dom).on('click', function () {
					me.cancelAutoHide();
					me.addCls('notification-fixed');
				}, me);
			}
		}

		me.el.hover(
			function () {
				me.mouseIsOver = true;
			},
			function () {
				me.mouseIsOver = false;
			},
			me
		);
		
		if (me.autoHide) {
			me.task = new Ext.util.DelayedTask(me.doAutoHide, me);
			me.task.delay(me.autoHideDelay);
		}

		var notifications = me.getNotifications(me.managerAlignment);

		if (notifications.length) {
			me.el.alignTo(notifications[notifications.length - 1].el, me.siblingAlignment, [0, 0]);
			me.xPos = me.getXposAlignedToSibling(notifications[notifications.length - 1]);
			me.yPos = me.getYposAlignedToSibling(notifications[notifications.length - 1]);
		} else {
			me.el.alignTo(me.manager.el, me.managerAlignment, [(me.paddingX * me.paddingFactorX), (me.paddingY * me.paddingFactorY)]);
			me.xPos = me.getXposAlignedToManager();
			me.yPos = me.getYposAlignedToManager();
		}

		Ext.Array.include(notifications, me);

		me.stopAnimation();
		
		me.el.animate({
			to: {
				x: me.xPos,
				y: me.yPos,
				opacity: 1
			},
			easing: me.slideInAnimation,
			duration: me.slideInDuration,
			dynamic: true
		});

	},

	slideBack: function () {
		var me = this;

		var notifications = me.getNotifications(me.managerAlignment);
		var index = Ext.Array.indexOf(notifications, me)

		// Not animating the element if it already started to hide itself or if the manager is not present in the dom
		if (!me.isHiding && me.el && me.manager && me.manager.el && me.manager.el.dom && me.manager.el.isVisible()) {

			if (index) {
				me.xPos = me.getXposAlignedToSibling(notifications[index - 1]);
				me.yPos = me.getYposAlignedToSibling(notifications[index - 1]);
			} else {
				me.xPos = me.getXposAlignedToManager();
				me.yPos = me.getYposAlignedToManager();
			}

			me.stopAnimation();

			me.el.animate({
				to: {
					x: me.xPos,
					y: me.yPos
				},
				easing: me.slideBackAnimation,
				duration: me.slideBackDuration,
				dynamic: true
			});
		}
	},

	cancelAutoHide: function() {
		var me = this;

		if (me.autoHide) {
			me.task.cancel();
			me.autoHide = false;
		}
	},

	doAutoHide: function () {
		var me = this;

		/* Delayed hiding when mouse leaves the component.
		   Doing this before me.mouseIsOver is checked below to avoid a race condition while resetting event handlers */
		me.el.hover(
			function () {
			},
			function () {
				me.hide();
			},
			me
		);
		
		if (!(me.stickWhileHover && me.mouseIsOver)) {
			// Hide immediately
			me.hide();
		}
	},


	hide: function () {
		var me = this;

		// Avoids restarting the last animation on an element already underway with its hide animation
		if (!me.isHiding && me.el) {

			me.isHiding = true;

			me.cancelAutoHide();
			me.stopAnimation();

			me.el.animate({
				to: {
					opacity: 0
				},
				easing: 'easeIn',
				duration: me.hideDuration,
				dynamic: false,
				listeners: {
					afteranimate: function () {
						if (me.manager) {
							var notifications = me.getNotifications(me.managerAlignment);
							var index = Ext.Array.indexOf(notifications, me);
							if (index != -1) {
								Ext.Array.erase(notifications, index, 1);

								// Slide "down" all notifications "above" the hidden one
								for (;index < notifications.length; index++) {
									notifications[index].slideBack();
								}
							}
						}

						me.readyToHide = true;
						me.hide();
					}
				}
			});
		}

		// Calling parents hide function to complete hiding
		if (me.readyToHide) {
			me.isHiding = false;
			me.readyToHide = false;
			me.removeCls('notification-fixed');
			this.callParent(arguments);
		}
	}

});


/*	Changelog:
 *
 *	2011-09-01 - 1.1: Bugfix. Array.indexOf not universally implemented, causing errors in IE<=8. Replaced with Ext.Array.indexOf.
 *	2011-09-12 - 1.2: Added config options: stickOnClick and stickWhileHover.
 *	2011-09-13 - 1.3: Cleaned up component destruction.
 *	2012-03-06 - 2.0: Renamed some properties ending with "Delay" to the more correct: "Duration".
 *                    Moved the hiding animation out of destruction and into hide.
 *	                  Renamed the corresponding "destroy" properties to "hide".
 *                    (Hpsam) Changed addClass to addCls.
 *                    (Hpsam) Avoiding setting 'notification-fixed' when auto hiding.
 *                    (Justmyhobby) Using separate arrays to enable managers to mix alignments.
 *                    (Kreeve_ctisn) Removed default title.
 *	                  (Jmaia) Center of edges can be used for positioning. Renamed corner property to position.
 *                    (Hpsam) Hiding or destroying manager does not cause errors.
 */
}{
/* Class: univnm.ext.RowProxy
	(proxy type = row) model proxy that can load via <univnm.db.query> and save/destroy
	via <univnm.db.saveRow>

	This proxy depends on meta data set in the model to work properly, see
	*Model Properties*  and *Field Properties* below

	Model Properties:
		table			-	String.
							Name of the table the model represents

		fields			-	Array.
							Some extra properties are available on fields. See
							*Field Extras* below

		reloadAfterSave	-	Boolean, default false,
							Should values be reloaded from the DB after saves?
							Normally the values generated by the save in the
							primary table are applied to the saved row. This
							should only be necessary if the model includes meta
							fields that need to be queried via _readSql_

		readSql			-	String, default "select * from {table} t where {conditions}"
							This sql string will be used in load operations. You
							generally only need to set it if your model has meta
							columns that are not in the underlying table. Note
							that the main table is aliased to "t" this is
							important as any conditions the proxy generates will
							also use this alias.



	FieldExtras:
		naturalKey		-	Boolean, default false.
							Set to true for fields that form a natural key. This
							can be used to to update fields when you don't know the
							primary key value

		meta			-	Boolena, default false.
							Set to true for fields that are not in the underlying
							table. A great use for this is in bridge tables that
							are only associating foreign keys, but you want to
							display columns from the foreign tables. Meta columns
							are ignored in save and destroy operations

		sqlDefault		-	String|Number|Date|Array|Struct, default undefined.
							SQL default value. This will be passed as the value
							to <univnm.db.saveRow> when no value is explicitly set.
							the same data conversion rules apply as with saveRow


	Example:
	(code)
		Ext.define('MPAGE.model.Application', {
			extend: 'Ext.data.Model',
			proxy:"row",
			table:"cust_applications",
			fields:[
				{name:"id", sqlDefault:"#cust_applications_seq.nextval"},
				{name:"display_name"},
				{name:"app_name", naturalKey:true},
				{name:"is_portlet", sqlDefault:"#null"},
				{name:"description", sqlDefault:"#null"}
			]
		});
		var app = MPAGE.model.Application.load(10,{
			callback:function(record){
				record.set("description",record.get("name") + " is awesome!");
				record.save()
			}
		})

		Ext.define('MPAGE.model.Perm', {
			extend: 'Ext.data.Model',
			proxy:"row",
			table:"cust_aros_acos",
			fields:[
				{name:"id",				sqlDefault:"#cust_aros_acos_seq.nextval"},

				{name:"aro_id",			naturalKey:true},
				{name:"aco_id",			naturalKey:true},

				{name:"app_id",			meta:true},
				{name:"right_name",		meta:true},
				{name:"app_name",		meta:true},
				{name:"display_name",	meta:true},
				{name:"group_name",		meta:true}
			],
			reloadAfterSave:true,
			readSql:[
				"Select ",
				"	t.id, ",
				"	t.aro_id, ",
				"	t.aco_id, ",
				"	co.foreign_key app_id, ",
				"	co.alias right_name, ",
				"	app.app_name, ",
				"	app.display_name, ",
				"	ro.alias ",
				"group_name ",
				"From ",
				"	cust_aros_acos t ",
				"		join cust_acos co on( co.id = t.aco_id ",
				") ",
				"	join cust_aros ro on( ro.id = t.aro_id ",
				") ",
				"left ",
				"	join cust_applications app on( app.id = co.foreign_key ",
				") ",
				"Where ",
				"	1=1 ",
				"	and ro.model = 'Role' ",
				"	and co.model='Right' ",
				"   and {conditions} "
			]
		});

		var perm = new MPAGE.model.Perm({
			aro_id:1334,
			aco_id:6653
		}).save({
			callback:function(record){
				// This represents the id that was generated by the sequence, if
				// this was an insert, or the existing id if this was an update
				// This behavior does NOT require reloadAfterSave:true
				console.log(record.get("id"))

				// Because we set readSql, and reloadAfterSave:true, a second
				// callback using readSql was performed, and by now  group_name
				// is available in resulting record
				console.log(record.get("group_name"))
			}
		})


	(end)

*/
Ext.define('univnm.ext.RowProxy', {
    extend: 'Ext.data.proxy.Client',
    alias: 'proxy.row',
    constructor: function(config) {
        this.callParent([config]);
        //ensures that the reader has been instantiated properly
        this.setReader(this.reader);
    },
    readSql:"select * from {table} t where {conditions}",
    reloadAfterSave:false,
    loadDataByNaturalKey:function(values,cb){
		var modelClass = this.getModel()
		var def = new modelClass()
		var sql = def.readSql||this.readSql;
		univnm.db.query(
			sql,
			{
				table:def.table,
				conditions:def.fields.items
					.filter(function(f){
						return f.naturalKey
					}).map(function(f){
						return "t.{0} = {1}".format(
							f.name,
							univnm.db.toSql(values[f.name]).replace(/~/g,"_TILDE_")
							.replace(/\|/g,"_PIPE_").replace(/\^/g, "_CARET_")
						)
					}).join(" and ")
			},
			function(result){
				if (result.length == 1){
					if (cb) cb(result[0]);
				} else {
					throw new error("expecting a single row response for natural key.")
				}
			}
		)
	},
	stripMetaColumns:function(data){
		var modelClass = this.getModel();
		var def = new modelClass();
		var result = {}
		def.fields.items.forEach(function(f){
			if (!f.meta) {
				result[f.name] = data[f.name];
			}
		})

		return result;
	},
	hasValue:function(value){
		return value || value === 0
	},
    create: function(operation,callback,scope) {
		var records = operation.getRecords();
		var $this = this;
		//check metadata and cache results
		var modelClass = this.getModel();
		var def = new modelClass();

		//cache some metadata
		if (!("naturalKeys" in modelClass)){
			modelClass.naturalKeys = def.fields.items.filter(function(f){
				return f.naturalKey
			})
		}

		//Using marshal here because this may, or may not be an async operation.
		//Regardless, then() will fire and the op will complete
		univnm.jslib.async.marshal(function(opDone){
			//exit early if there is nothing to do. This effectively makes the
			//operation synchronous
			if (!records.length) return opDone();

			//only get here if there are records to save

			//inner marshal to handle individual rows
			univnm.jslib.async.marshal(
				// run each of these async
				records.filter(function(record){
					//skip any unmodified records
					return record.dirty;
				}).map(function(record){

					var hasValidNatualKey = false;
					var data =$this.stripMetaColumns(record.getData());
					// determine criteria: primary key or natural key
					if ( $this.hasValue(data[def.idProperty]) ){
						data[def.idProperty + " ="] = data[def.idProperty];
						delete data[def.idProperty];

					} else if (modelClass.naturalKeys.length){
						hasValidNaturalKey =modelClass.naturalKeys.every(function(f){
							var prop = f.name;
							if ( $this.hasValue(data[prop]) ){
								data[prop +" ="] = data[prop];
								delete data[prop];
								return true;
							} else return false
						})

						if (!hasValidNaturalKey) {
							console.log("Unable to save record",record)
							throw new Error(
								"Unable to save record. No naturalKey defined (or naturalKey "
								+ "fields have no value) and primary key has no value."
							)
						}
					} else {
						console.log("Unable to save record",record)
						throw new Error(
							"Unable to save record. No naturalKey defined and primary key has no value."
						)
					}


					// set sqlDefaults where appropriate
					$O(data).getKeys().forEach(function(prop){
						if ( !$this.hasValue(data[prop]) ){
							data[prop] = def.fields.map[prop].sqlDefault
						}
					})

					//return async callback function that will save the record
					return function(rowDone){
						univnm.db.saveRow(
							def.table,
							'set',
							data,
							function(result){
								if (result.length){
									record.set(result.first())
								}

								var reloadAfterSave = record.reloadAfterSave;
								if ("reloadAfterSave" in operation){
									reloadAfterSave = operation.reloadAfterSave;
								}

								if (reloadAfterSave){
									// Do another callback to update this record.
									// We'll wait until the record is updated to let
									// async know this row is done
									if ($this.hasValue(record.get(def.idProperty))){
										modelClass.load(
											record.get(def.idProperty),
											{
												callback:function(response){
													record.set(response.getData());
													rowDone();
												}
											}
										)
									} else if (hasValidNaturalKey) {
										$this.loadDataByNaturalKey(record.data,function(data){
											record.set(data);
											//let async know this row is done
											rowDone()
										})
									} else rowDone();//can't reload
								} else rowDone()//let async know this row is done
							}
						)
					}
				})
			).then(opDone)//all records created

		}).then(function(){
		//commit records
			records.forEach(function(record){
				record.commit();
			})

			//complete operation
			operation.setCompleted();
			operation.setSuccessful();
			Ext.callback(callback, scope || this, [operation]);
		})

    },
    update: function() {
        this.create.apply(this, arguments);
    },

    destroy: function(operation,callback,scope) {
        var records = operation.getRecords();
    	var $this = this;
    	//Using marshal here because this may, or may not be an async operation.
    	//Regardless, then() will fire and the op will complete
    	univnm.jslib.async.marshal(function(opDone){
    		//exit early if there is nothing to do. This effectively makes the
    		//operation synchronous
    		if (!records.length) return opDone();

    		//only get here if there are records to delete
    		var def = records[0];
			//inner marshal to handle individual rows
			univnm.jslib.async.marshal(
				// run each of these async
				records.map(function(record){
					var data =$this.stripMetaColumns(record.getData());
					var criteria ={};

					if (
						typeof def.idProperty == "string"
						&& (
							data[def.idProperty]
							|| data[def.idProperty] == 0
						)
					){
						criteria[def.idProperty] = data[def.idProperty];

					} else {
						var naturalKeys = $O(data).getKeys()
							.filter(function(prop){
								return def.fields.map[prop].naturalKey
							})
						var hasNaturalKey =naturalKeys.length
							&& naturalKeys.every(function(prop){
									criteria[prop] = data[prop];
								return data[prop] || data[prop] === 0
							})

						if (!hasNaturalKey) {
							throw new Error(
								"Unable to delete record. No naturalKey defined (or naturalKey "
								+ "fields have no value) and primary key has no value."
							)
						}
					}

					//return async callback function that will save the record
					return function(rowDone){
						univnm.db.saveRow(
							def.table,
							'remove',
							criteria,
							rowDone//let async know this row is done
						)
					}
				})
			).then(opDone)//all records created

    	}).then(function(){
    		//commit records
			records.forEach(function(record){
				record.commit();
				record.stores.forEach(function(store){
					store.remove(record)
				})
			})

			//complete operation
			operation.setCompleted();
			operation.setSuccessful();

			Ext.callback(callback, scope || this, [operation]);
    	})
    },

    read: function(operation, callback, scope) {
    	var modelClass = this.getModel();
    	var def = new modelClass();
    	var idCol = def.idProperty;
    	var idVal = operation.id;


    	if (!idVal && idVal !== 0){
			operation.setCompleted();
			operation.setException(new Error("Id is required for read operation on RowProxy"));
			Ext.callback(callback, scope || me, [operation]);
    	}else {
    		var sql = def.readSql||this.readSql;
    		univnm.db.query(
    			sql,
    			{
    				table:def.table,
    				conditions:"t.{idCol} = {idVal}".format({
						idCol:idCol,
						idVal:univnm.db.toSql(idVal)
					})
    			},
    			function(result){
    				if (result.length){
    					operation.records = result.map(function(data){
    						return new modelClass(data)
    					})
    				}
    				operation.setCompleted();
					operation.setSuccessful();
					Ext.callback(callback, scope || this, [operation]);
    			}
    		)

    	}

    	/* //console.log("called read against rowProxy:",operation)
    	var proxyClass= Ext.ClassManager.get("univnm.ext.QueryProxy");
    	if (proxyClass){
    		var modelClass= this.getModel();
    		var def = new modelClass();
    		new proxyClass({
				sql:"select * from {}".format(def.table)
    		})
    	} else {
			operation.setCompleted();
			operation.setException(new Error("univnm.ext.QueryProxy is required for read operations"));
			Ext.callback(callback, scope || me, [operation]);
		} */
    },

    clear: Ext.emptyFn
});



}{
/*global Ext */
/* Class:  univnm.ext.SupaGrid
	An Ext4 grid implementation with extra features

	Detail:
	This component takes all the normal Grid config options, plus extra options
	that enhance the standard grid.

	Topic: Example
	(code)
		...
		xtype:"supagrid",
		paged:true,// creates paging toolbar
		//infiniteScroll:true, //enable this for infiniteScrolling
		editFormConfig:{ // creates edit form
			xtype:"host.form",//this had best exist somewhere

			position:"right",//create form in right-side dock
			editTriggerCol:"host_name"//open form when host_name" column is clicked"

		},
		filterPosition:"top",//put the filter in the top dock slot

		store:{
			type:"host",//this should already exist
			autoLoad:true,
			remoteSort:true
		},
		tbar:[{
			text:"Add Host",
			handler:function(){
				creates a new "host" entry and opens the edit form
				this.up("grid").showEditForm({host_name:"Wicked"})
			}
		}],

		columns:[
				{dataIndex:"host_name", text:"Host Name", filterable:true},
				{dataIndex:"alias" },
				{dataIndex:"address", text:"Address", filterable:true },
				//assumes 'hostfiltercombo' exists
				{dataIndex:"name", text:"Template Name", filterable:true, filterControl:"hostfiltercombo"}
			]
		})(),
		loadMask: true,
		listeners:{
			//listens to any cellclik in the "address" column
			address_cellclick:function(value,record,col,grid){
				console.log("clicked value " + value)
			}

		}
		...
	(end)

	Property: paged
		*Grid Property* Setting this grid property to "true" will create a
		paging toolbar on the bottom of the grid, and will set the pageSize to
		the number of rows visible in the grid. This should result in each page
		fitting within the grid view, without scrolling

	Property: infiniteScroll
		*Grid Property* Setting this grid property to "true" will create a
		paging toolbar on the bottom of the grid, and will set the pageSize to
		the number of rows visible in the grid. This should result in each page
		fitting within the grid view, without scrolling

	Property: filterPosition
		*Grid Property* sets the dock position for the filter panel

		Only applies when <filterable> is true for at least one column

		Possible Values:
			top		-	displays in the top dock position, with a horizontal layout
			bottom	-	displays in the bottom dock position, with a horizontal layout
			left	-	displays in the left dock position, with a vertical layout
			right	-	displays in the right dock position, with a vertical layout

		See:
			* <filterable>

	Property: editFormConfig
		*Grid Property* An Ext config that describes a panel to display when clicking on a row.

		This panel must either be, or include, a form

		Extra options:
			position		-	*Optional, default "popup"*
								Where to display the edit form. See *Possible Positions* below
			editTriggerCol	-	*Optional, default null* If defined, column which triggers
								a form edit. can be either id, dataIndex, or header
								text, but should be unique. If not defined, selecting
								a row, rather than clicking a cell, triggers a form edit
			hideMode		-	*Optional, default 'hidden'*
								set to 'disabled' to have the form always visable
								but disabled when no reacrod is loaded. This may
								be required by certain layouts. Try this if the
								edit panel is not opening when you click a record

		Possible Positions:
			popup	-	displays in a modal Window
			top		-	displays in the top dock position, panel should have a horizontal layout
			bottom	-	displays in the bottom dock position, panel should have a horizontal layout
			left	-	displays in the left dock position, panel should have a vertical layout
			right	-	displays in the right dock position, panel should have a vertical layout

		Basic Form Properties and Functions added by SupaGrid:
			currentRow	-	Property.
							The row used to populate the form. Set by
							SupaGrid on the Basic Form instance when loading

			close		-	Function.
							A function that will close the form, whether it is
							docked or a modal Window

		Form Panel Events  added by SupaGrid:
			beforegridload	-	Fires before loading a record into the form.
								Passes (formPanel,record). Return false
								from a listener to cancel load

	Property: filterAutoCollapse
		*Grid Property* should the filter form collapse after each apply?

	Property: filterMode
		*Grid Property* local store filtering or remote filtering, *default remote*

		Possible Values:
		* local
		* remote

	Property: filterAutoLoad
		*Grid Property* set to true to immediately fire <applyFilter> after render

	Property: filterButtonText
		*Grid Property* set to text you want the button to display, *default "Filter"*

	Property: filterOnSelect
		*Grid Property* *Default false* set to "true" to suppress filtering on enter/select

	Property: filterResetButtonText
		*Grid Property* set to text you want the button to display, *default "Reset Filter"*

	Property: filterResetButtonHide
		*Grid Property* set to true to hide the Filter Reset Button

	Property: filterSuppressTitle
		*Grid Property* If true, suppresses the title on the filter panel

		See Also:
			<toggleFilter>

	Property: filterTitle
		*Grid Property* set to text you want the panel to display, *default "Filter"*

	Property: filterable
		*Column Property* set to true on columns that should be filtered

		Setting this to true for at least one column will enable filtering. A
		panel is created that contains all the filterable columns and "Filter"
		and "Clear" buttons. Appling the filter will internally call <applyFilter>
		which sets extraParams on the store and reloads it

		See:
		* <filterPosition>
		* <applyFilter>
		* <filterType>
		* <filterLabel>
		* <filterLabelAlign>
		* <filterValue>
		* <filterControl>

	Property: filterType
		*Column Property* filter type to display

		Normally filters are displayed as a textbox, but if "date" is set in
		this property, an field set containing and start and end date field will
		be displayed. The matching fields on the store will be <dataIndex>_start
		and <dataIndex>_end respectively

		See:
			* <filterable>
			* <filterControl>

	Property: filterLabel
		*Column Property* text to display as the columns filter label *Default, column header text*

		See:
			* <filterable>

	Property: filterLabelAlign
		*Column Property* how to align labels in the filter panel *Default, top*


		See:
			* <filterable>


	Property: filterValue
		*Column Property* default value for filter on this column *Default, null*

		See:
			* <filterable>

	Property: filterControl
		*Column Property* control to use for filtering this column *Default, textfield*

		this can be either a string xtype, a component config object, or an instance of an existing control

		See:
			* <filterable>

	Property: eventName
		*Column Property* name of event to fire when this column is clicked

		If defined, SupaGrid will fire an event with this name. See the cellclick event for details

		See:
			* <filterable>
	Function: applyFilter
		recalculates grid pageSize, and reloads this grid's store, applying a filter if available


		Parameters:
			filter	-	*Optional, default null*
						JS Object of field values.
						Ignored if there are no filterable columns. Applies
						these values to the filter form before reloading

	Function: resetFilter
		resets the filter to default values

	Function: showEditForm
		displays the edit form for a given record

		Parameters:
			record	-	*Optional, default {}*
						If record is an instance of This grid's store's Model,
						then it is used directly to load the form. If it is a
						simple JS object or is undefined, a new Model record is
						inserted into the store and the form is loaded from its
						values.

	Function: toggleFilter
		Expands or collapses the filter panel

	Function: expandFilter
		Expands the filter panel

	Function: collapseFilter
		Collapses the filter panel

	Event: <column.dataIndex>_cellclick
		Each column will generate a cellclick event, when a cell in that column is clicked

		Parameters:
			value		-	the value of the cell clicked
			record		-	the record of the row clicked
			col			-	The column definition of the column clicked
			grid		-	The grid that fired this event

	Event: before_filter
		fired before executing a filter. Return false to cancel filtering

		Parameters:
			grid		-	A reference to the SupaGrid that fired this event
			form		-	A reference to the BasicForm for the filter

	Event: filter
		fired when a filter is executed, the filter may or may not be finished applying.

		Parameters:
			grid		-	A reference to the SupaGrid that fired this event
			form		-	A reference to the BasicForm for the filter



*/
Ext.define('univnm.ext.SupaGrid', {
	extend: 'Ext.grid.Panel',
	alias:'widget.supagrid',
	initComponent:function(){
		this.events={
			before_filter:true,
			filter:true
		};
		var config = this;
		var grid = this;
		grid.formId = Ext.id();
		var lineHeight = this.lineHeight || Ext.isChrome?22:21;
		/* infiniteScroll */
			if (this.infiniteScroll){
				if (!this.store.buffered){
					//duck-type an instantiated store
					if ("events" in this.store){
						throw new Error("Stores must be buffered for infiniteScroll");
					} else {
						this.store.buffered = true;
					}
				}
				Ext.apply(this,{
					verticalScrollerType: 'paginggridscroller',
					invalidateScrollerOnRefresh: false
				});
			}
		/* applyFilter function */
			this.applyFilter=Ext.Function.createBuffered(function(extraOptions){

				var store =this.getStore();
				var params = store.proxy.extraParams||{};
				var grid = this;
				var filterDef =[];
				var fp = this.down("form[formId="+grid.formId+"]");
				var form = fp.form;
				if (this.fireEvent("before_filter",this,form) === false) return;

				if (this.filtered){
					if (extraOptions){
						form.setValues(extraOptions);
					}

					var titleText=[];

					filterCols.forEach(function(col){
						switch(col.filterType||"string"){
						case "date":
							var val_start =form.findField(col.dataIndex+"_start").getValue();
							if (val_start){
								params[col.dataIndex+"_start"] = val_start;
								filterDef.push(col.startFilterFn?{startFilterFn:function (r) {return col.filterFn(r,val);}}:{
									filterFn: function(record) {
										var colVal = record.get(col.dataIndex);
										//console.log(colVal.clearTime(), val_start, colVal.clearTime() >= val_start)
										return colVal && colVal.clearTime(true) >= val_start;
									}
								});

								titleText.push((col.text||col.header) + ">='" + val + "'");
							} else {
								delete params[col.dataIndex+"_start"];
							}

							var val_end =form.findField(col.dataIndex+"_end").getValue();
							if (val_end){
								params[col.dataIndex+"_end"] = val_end;
								titleText.push((col.text||col.header) + "<='" + val_end + "'");
								filterDef.push(col.endFilterFn?{endFilterFn:function (r) {return col.filterFn(r,val);}}:{
									filterFn: function(record) {
										var colVal = record.get(col.dataIndex);
										//console.log(colVal.clearTime(), val_end, colVal.clearTime() <= val_end)
										return colVal && colVal.clearTime(true) <= val_end;

									}
								});
							} else {
								delete params[col.dataIndex+"_end"];
							}

							break;
						default:
							//console.log(form)
							var val =form.findField(col.dataIndex).getValue()||"";

							if (val){
							//console.log('here')
								params[col.dataIndex] = val;
								titleText.push((col.text||col.header) + ": '" + val + "'");
								var pattern = params[col.dataIndex];

								switch(true){
									case typeof pattern == "number":
										filterDef.push(col.filterFn?{filterFn:function (r) {return col.filterFn(r,val);}}:{
											property:col.dataIndex,
											value:pattern
										});
										break;
									case typeof pattern == "string":
										filterDef.push(col.filterFn?{filterFn:function (r) {return col.filterFn(r,val);}}:{
											property:col.dataIndex,
											value:new RegExp(params[col.dataIndex].escapeRegex(), 'i')
										});
										break;
									case col.filterControl.xtype == "timefield":
										filterDef.push(col.filterFn?{filterFn:function (r) {return col.filterFn(r,val);}}:{
											filterFn: function(record) {
												if (!params[col.dataIndex]) return true;

												var colVal = record.get(col.dataIndex);
												var searchVal = params[col.dataIndex];
												if (!colVal) return false;

												if (typeof colVal == "string"){
													searchVal = form.findField(col.dataIndex).getRawValue();
													return colVal.toLowerCase() == searchVal.toLowerCase();
												}
												if (colVal instanceof Date){
													colVal = Ext.Date.format(colVal,"H:i:s");
													searchVal =Ext.Date.format(searchVal,"H:i:s");

													return colVal == searchVal;
												}


											}
										});
										break;
									case col.filterControl.xtype == "datefield":
										filterDef.push(col.filterFn?{filterFn:function (r) {return col.filterFn(r,val);}}:{
											filterFn: function(record) {
												if (!params[col.dataIndex]) return true;

												var colVal = record.get(col.dataIndex);
												var searchVal = params[col.dataIndex];
												if (!colVal) return false;

												if (typeof colVal == "string"){
													searchVal = form.findField(col.dataIndex).getRawValue();
													return colVal.toLowerCase() == searchVal.toLowerCase();
												}
												if (colVal instanceof Date){
													colVal = Ext.Date.format(colVal,"m/d/Y");
													searchVal =Ext.Date.format(searchVal,"m/d/Y");

													return colVal == searchVal;
												}


											}
										});
										break;

								}

							} else {
								//delete params[col.dataIndex]
								params[col.dataIndex] = null;
							}
						}
					});

					window.setTimeout(function(){
						var title = "Filter: ";
						if(grid.filterTitle) title = grid.filterTitle;
						fp.setTitle(title+titleText.join("|"));
						if(config.filterAutoCollapse) grid.collapseFilter();
					},100);



				}
				if (config.filterMode == "local"){
					store.clearFilter();
					if (filterDef.length){
						store.filter(filterDef);
					}
				} else{
					this.fireEvent("filter",this,form);
					store.proxy.extraParams = params;
					if (config.paged || config.infiniteScroll){
						window.setTimeout(function(){
							store.pageSize =  parseInt((grid.view.getHeight())/lineHeight,10);
							if (config.paged){
								store.loadPage(1);
							} else {
								store.guaranteeRange(0, store.pageSize);
							}

						},100);
					}else{
						store.load();
					}
				}

			},300,this);

		/* resetFilter function */
			this.resetFilter=function(){
				var fp = this.down("form[formId="+grid.formId+"]");
				fp.form.reset();
				fp.applyFilter();
			};

		/* filter bar */
			if (!this.dockedItems) this.dockedItems = [];
			try{
				var filterCols = this.columns.filter(function(col){
					return col.filterable;
				});
			} catch(e){
				filterCols = [];
			}

			if (filterCols.length){
				config.filtered = true;
				var filterPosition = this.filterPosition||'top';

				var layout ="top,bottom".listContains(filterPosition)?"hbox":"vbox";
				var labelAlign=this.filterLabelAlign||"top";

				var doLayout=function(p){
					//p.up("supagrid").ownerCt.doLayout()
					//p.up("supagrid").doComponentLayout()

				};

				this.dockedItems.push({
					xtype: 'form',
					dock: filterPosition,
					formId:grid.formId,
					collapsible:"top,bottom".listContains(filterPosition),
					width:"left,right".listContains(filterPosition)?200:undefined,
					animCollapse:false,
					listeners:{
						show:doLayout,
						hide:doLayout,
						expand:doLayout,
						collapse:doLayout
					},
					title:config.filterTitle||"Filter",
					preventHeader:config.filterSuppressTitle,
					layout:{
						type:layout,
						defaultMargins:{top: 2, right: 2, bottom: 2, left: 2}

					},
					frame:true,
					applyFilter:function(){
						var g = this.up("supagrid");
						g.applyFilter.apply(g,Array.parse(arguments));
					},
					resetFilter:function(){
						var g = this.up("supagrid");
						g.resetFilter.apply(g,Array.parse(arguments));
					},
					items:filterCols.map(function(col){
						var defaultField = {
							xtype:"textfield",
							fieldLabel:col.filterLabel||col.header||col.text,
							labelAlign:labelAlign,
							name:col.dataIndex,
							value:col.filterValue||"",
							flex:layout=="hbox"?1:0,
							enableKeyEvents:true,
							itemId:"filter_" +col.dataIndex,
							listeners:config.filterOnSelect?{
								keyup:function(text,e){
									if (e.keyCode == 13) {
										this.up("supagrid").applyFilter();
									}
									if(this.up("supagrid").filterMode == "local" ){

										this.up("supagrid").applyFilter();
									}
								},
								select:function(){
									this.up("supagrid").applyFilter();
								}
							}:undefined
						};

						if (col.filterControl){
							if (typeof col.filterControl == "string"){
								col.filterControl = {xtype:col.filterControl};
							}
							//col.filterControl.itemId = "filter_" +col.data_index
							return Ext.applyIf(col.filterControl,defaultField);
						}
						switch(col.filterType||"string"){
						case "date":
							return {
								xtype:"fieldset",
								title:col.header||col.text,
								layout:{
									type:layout
								},
								width:layout=="hbox"?225:undefined,
								height:layout=="vbox"?100:undefined,


								items:[Ext.apply({},{
									xtype:"datefield",
									//fieldLabel:"From",
									hideLabel:true,
									name:col.dataIndex + "_start",
									value:col.filterValueStart||col.filterValue||"",
									//itemId:"filter_" +col.data_index+ "_start",
									//width:100,
									labelAlign:"right"//"layout=="hbox"?"right":"top"
								},defaultField),
								{xtype:"label", text:"To:", width:20, flex:0},
								Ext.applyIf({},{
									xtype:"datefield",
									//fieldLabel:"To",
									hideLabel:true,
									name:col.dataIndex + "_end",
									//itemId:"filter_" +col.data_index+ "_end",
									value:col.filterValueEnd||col.filterValue||"",
									flex:1,
									labelAlign:"left"//"layout=="hbox"?"right":"top"
								},defaultField)]
							};

						default:
							return defaultField;
						}
					}).concat(
						(function(){
							if (layout=="hbox"){
								return [{
									xtype:"button",
									text:config.filterButtonText||"Filter",
									style:"margin-top:20px",
									handler:function(){
										var fp = this.up("form");
										fp.applyFilter();
									}
								},{
									xtype:"button",
									text:config.filterResetButtonText||"Reset Filter",
									style:"margin-top:20px",
									handler:function(){
										var fp = this.up("form");
										fp.form.reset();
										fp.applyFilter();
									},
									hidden: config.filterResetButtonHide||false
								}];
							} else return [];

						})()
					),
					buttons:(function(){
						if (layout=="vbox"){
							return [{
								xtype:"button",
								text:"Filter",
								handler:function(){
									var fp = this.up("form");
									fp.applyFilter();
								}
							},{
								xtype:"button",
								text:config.filterResetButtonText||"Reset Filter",
								handler:function(){
									var fp = this.up("form");
									fp.form.reset();
									fp.applyFilter();
								}
							}];
						} else return undefined;

					})()
				});
				/* filter togle functions */
					this.toggleFilter = function(){
						if (layout != "hbox") return;
						if(config.filterSuppressTitle){
							var p = this.down("form[formId="+grid.formId+"]");
							if (p.isHidden()){
								p.show();
							} else {
								p.hide();
							}
							this.doComponentLayout();
						} else {
							this.down("form[formId="+grid.formId+"]").toggleCollapse();
						}
					};
					this.expandFilter = function(){
						if (layout != "hbox") return;
						if(config.filterSuppressTitle){
							this.down("form[formId="+grid.formId+"]").show();
						} else {
							this.down("form[formId="+grid.formId+"]").expand();
						}
						this.doComponentLayout();
					};
					this.collapseFilter = function collapseFilter(){
						if (layout != "hbox") return;
						var p = this.down("form[formId="+grid.formId+"]");
						if(config.filterSuppressTitle){
							if (p.isVisible()) {
								p.hide();
							}
						} else {
							p.collapse();
						}
						this.doComponentLayout();
					};




			}
		/* Edit form - before init */
			if (this.editFormConfig){
				if (!grid.editFormConfig.position) grid.editFormConfig.position="popup";
				if (grid.editFormConfig.position == "popup"){
					this.showEditForm=function(record){
						grid.el.mask("loading..");
						if (!record || !record.isModel) {
							var model =grid.getStore().proxy.getModel();
							record = new model(record||{});
							grid.getStore().add(record);
						}
						grid.editFormConfig.close=function(){
							win.close();
						};

						var title =grid.editFormConfig.title||"Editing Record " + record.internalId;
						delete grid.editFormConfig.title;
						var win =new Ext.Window({
							title:title,
							iconCls:grid.editFormConfig.iconCls,
							/* frame:true,*/
							constrain:true,
							autoShow:true,
							layout:"fit",
							modal:true,
							items:[Ext.apply(grid.editFormConfig,{
								supagrid:grid,
								setTitle:function(val){
									this.up("window").setTitle(val);
								}
							})],
							listeners:{
								afterrender:function(){
									var panel = this.down("form");
									var form=panel.form;
									grid.el.unmask();
									form.currentRecord = record;
									form.reset();
									panel.addEvents("beforegridload");
									if (panel.fireEvent("beforegridload",panel,record)){
										form.loadRecord(record);
									}
									form.close=function(){
										win.close();
									};

								}
							}

						});
					};
				}else{
					if (!this.dockedItems) this.dockedItems = [];

					grid.editFormConfig.dock=grid.editFormConfig.position;
					if (grid.editFormConfig.hideMode=="disabled"){
						grid.editFormConfig.disabled=true;
					} else {
						grid.editFormConfig.hidden=true;
					}
					//grid.editFormConfig.hidden=true;
					grid.editFormConfig.formPane=true;

					this.dockedItems.push(grid.editFormConfig);

					this.showEditForm=function(record){
						grid.el.mask("loading..");
						window.setTimeout(function(){
							if (!record || !record.isModel) {
								var model =grid.getStore().proxy.getModel();
								record = new model(record||{});
								grid.getStore().add(record);
							}
							var pane = grid.down("panel[formPane=true]");

							pane.setTitle(grid.editFormConfig.title||"Editing Record " + record.internalId);
							pane.show();
							pane.setDisabled(false);
							grid.ownerCt.doLayout();

							var panel = pane.is("form")?pane:pane.down("form");
							panel.supagrid =grid;
							var form = panel.form;
							form.currentRecord = record;
							panel.close = form.close = function(){
								if (grid.editFormConfig.hideMode=="disabled"){
									pane.setDisabled(true);
								} else {

									pane.hide();
									grid.ownerCt.doLayout();
								}
							};
							if (panel.fireEvent("beforegridload",panel,record) !==false){
								form.reset();
								form.loadRecord(record);
								grid.el.unmask();
							}
						},100);



					};
				}
			}

		this.callParent(arguments);
		/* add custom header_name_cellclick events */
			this.addEvents.apply(this,
				this.view.getGridColumns().map(function(col){
					return (col.id||col.dataIndex) + "_cellclick";
				})
			);
		/* fire cellClicks */
			this.addListener("cellclick",function(
				/* Ext.grid.view		*/	view,
				/* HTMLElement			*/	cell,
				/* Number				*/	cellIndex,
				/* Ext.data.Model		*/	record,
				/* HTMLElement			*/	row,
				/* Number				*/	rowIndex,
				/* Ext.EventObject		*/	e
				){

				var grid = view.ownerCt;
				var col =view.getGridColumns()[cellIndex];
				//console.log("click col " + col.text, grid)
				if (grid.editFormConfig && !grid.editFormConfig.editTriggerCol){
					grid.showEditForm(record);
					return false;
				}

				if (!col) return;
				var value = record.get(col.dataIndex);
				var store = grid.getStore();
				if (typeof col.eventName != "undefined"){
					//console.log("fired", col.eventName, value,record,col,grid)
					this.fireEvent(col.eventName, value,record,col,grid,cell);
				}
				this.fireEvent((col.dataIndex) + "_cellclick", value,record,col,grid,cell);
				this.fireEvent((col.id) + "_cellclick", value,record,col,grid,cell);
				this.fireEvent((col.text) + "_cellclick", value,record,col,grid,cell);
				/* console.log("fired", (col.dataIndex) + "_cellclick", value,record,col,grid)
				console.log("fired", (col.id) + "_cellclick", value,record,col,grid)
				console.log("fired", (col.text) + "_cellclick", value,record,col,grid) */

				if (grid.editFormConfig){
					var editTriggerCol = grid.editFormConfig.editTriggerCol;
					if (editTriggerCol){
						if (
							editTriggerCol == col.id
							|| editTriggerCol == col.dataIndex
							|| editTriggerCol == col.header
							|| editTriggerCol == col.text
							|| editTriggerCol == col.itemId
						){
							grid.showEditForm(record);
						}
					}
				}
				//return false;
			});
		/* Edit form - after init */
			if (this.editFormConfig){
				if (!this.editFormConfig.editTriggerCol){
					this.getSelectionModel().addListener("select",function(rowmodel,record){
						grid.showEditForm(record);
					});
				}
			}
		/* paging */
			if (this.paged){
				this.addDocked({
					xtype: 'pagingtoolbar',
					store: this.getStore(),
					dock: 'bottom',
					displayInfo: true
				});
			}

		/* column selector */
		try{
			this.headerCt.on('menucreate', function(ct, menu, eOpts){
				menu.items.items.forEach(function(menuItem, index){
					if(menuItem.itemId == 'columnItem'){
						menuItem.text = 'SHOW/HIDE Columns';
						delete(menuItem.menu);
					}

				});
				menu.on('click', function(menu, item, e, eOpts){
					if(item.itemId == 'columnItem'){
						var displayColumns = [];
						var columns = ct.getGridColumns();
						columns.forEach(function(column){
							if(column.text.length > 0 && column.text != '&#160;'){
								var label = '<b>'+column.text+'</b>';
								if("description" in column && column.description.length > 0){
									label = label+': '+column.description;
								}
								displayColumns.push({
									checked: !column.isHidden(),
									boxLabel: label,
									name: column.dataIndex,
									inputValue: 1,
									listeners: {
										change: function(checkbox, newValue, oldValue, eOpts){
											if(checkbox.getValue()){
												column.show();
											} else {
												column.hide();
											}
										}
									}
								});
							}
						});
						// displayColumns.sort(String.compareNatural);
						displayColumns = displayColumns.sort(function(a,b) {
							return String.compareNatural(a.name, b.name);
						});

						Ext.widget('window', {
							title: 'SHOW/HIDE Columns',
							maxHeight: 600,
							minHeight: 300,
							width: 600,
							layout: 'fit',
							resizable: true,
							modal: true,
							defaults:{
								border: false
							},
							items: [{
								layout: 'fit',
								frame: true,
								autoScroll: true,
								fieldDefaults: {
									labelAlign: 'top',
									labelWidth: 100,
									labelStyle: 'font-weight:bold'
								},
								items: [{
									xtype: 'checkboxgroup',
									columns: 1,
									defaultType: 'checkbox',
									items: displayColumns
								}]
							}],
							buttons: [{
								text: 'Close',
								handler: function() {
									grid.fireEvent('column_selector_closed', {});
									this.up('window').close();
								}
							}]
						}).show();
					}
				});
			});
		} catch(e){

		}
		if (this.filterAutoLoad){
			this.applyFilter();
		}
	}
});
}{
/*global univnm Ext console $O*/
univnm.db ={}

/* Topic: Dependencies
	The univnm.db.query and univnm.db.saveRow functions have certain Oracle, CCL,
	and JS library dependencies

	Oracle Dependencies:
	* A custom schema, in your domain's Oracle DB called unmh
	* univnm/cust_tables.sql run in unmh schema
	* V500 must grant select to your custom schema for any tables you want to
		access with univnm.db.query()

	CCL Dependencies:
	* univnm_query_to_json.prg	(included in the univnm folder of this distribution)
	* univnm_row_manager.prg	(included in the univnm folder of this distribution)


	JS Dependencies:
	* <jslib.js>


*/

/* Topic: License
	The MIT License

	Copyright (c) 2012 University of New Mexico Hospitals

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/


/* Class: univnm.db */
/* Function: univnm.db.query
	Queries the server and returns a <univnm.DataSet> object of the results

	Parameters:
	sql			-		SQL to execute. Can be an SQL string, an array of strings,
						or a series of string arguments. See examples below
	params		-		*Optional, default null*
						if this is a function, it is assumed to be _callback_.
						If this an object, it is assumed to be the parameters to
						be merged into _sql_
	callback	-		*Optional, default null*
						If defined, then this will be an asynchronous callback
						with the result returned as the first param to _callback_.
						If not defined, a synchronous callback is made and the
						result is returned from this function
	Note:
		any column that ends with "dt_tm" will added as a new column ending in
		"date" that has an actual JS date value. For example, a univnm.db.query
		that contains "updt_dt_tm" will have a resultset that contains a
		"updt_dt_tm" that is a string value and "updt_date" that is a Date()
		object

	SQL and Params:
		The SQL string passed into query is expected to be either a template to
		be used with <String.format> or, if ExtJS is available and Ext.XTemplate.

		if _params_ is passed, then this object will be merged with _sql_ before
		executing

	Code Lookups:
		Code lookups for where clauses can be performed efficiently by using a
		special comment in your code: /* CODESET 72 WBC HGB HCT * / Note that
		there is no space between * and /. The result will be pasted in as a
		comma-separated list of code values. If a given display key has more
		than one code value in the selected code set, all values will be
		inserted. <univnm.db.cacheCodes> will be called internally to cache code
		values

	See Also:
		* <univnm.db.codeLookup>
		* <univnm.db.cacheCodes>
		* <String.format>
		* <http://docs.sencha.com/ext-js/4-1/#!/api/Ext.XTemplate>

	Examples:

	Single SQL string:
	(code)
		//callback can be passed as the second argument
		univnm.db.query(
		"SELECT univnm_code.display(o.CATALOG_CD) display, O.ORIG_ORDER_DT_TM, o.CATALOG_CD FROM ORDERS O where o.active_ind = 1 AND o.encntr_id = 41416065 ORDER BY O.ORIG_ORDER_DT_TM DESC",
		function(result){
			univnm.jslib.debug_window(result.toHtmlTable())
		})
	(end)

	SQL string array param:
	(code)
		univnm.db.query(
			[
				'SELECT',
					'univnm_code.display(o.CATALOG_CD) display,',
					'O.ORIG_ORDER_DT_TM,',
					'o.CATALOG_CD',
				'FROM',
				'ORDERS O',
				'where',
					'o.active_ind = 1',
					'AND o.encntr_id = 41416065 ',
				'ORDER BY',
					'O.ORIG_ORDER_DT_TM   DESC '
			],
			function(result){ //if last param is a function, it assumed to be the callback function
				univnm.jslib.debug_window(result.toHtmlTable())
			}
		)
	(end)

	Using a template:
	(code)
		<script>
		univnm.db.query(
			[
				'SELECT  ',
					'univnm_code.display(c.EVENT_CD) AS code_display ',
					',univnm_code.display_key(c.EVENT_CD) AS code_display_key ',
					', c.result_val as value ',
					', c.event_end_dt_tm',

				'FROM clinical_event   c ',
				'WHERE c.person_id = {person_id} ',
				'AND c.event_end_dt_tm BETWEEN {start_date} AND {end_date} ',
				'AND c.encntr_id = {encounter_id} ',
				'AND c.event_cd IN ( /* CODESET 72 ',
					' SPO2 ',
					' TEMPERATUREORAL ',
					' TEMPERATURETYMPANIC ',
					' TEMPERATURERECTAL ',
					' TEMPERATURETEMPORAL ',
					' TEMPERATUREAXILLARY ',
					' HEARTRATEMONITORED ',
					' RESPIRATORYRATE ',
					' SYSTOLICBLOODPRESSURE ',
					' DIASTOLICBLOODPRESSURE ',
					' SYSTOLICBLOODPRESSURE ',
					' MEANARTERIALPRESSURE ',
					' MEANARTERIALPRESSURECUFF * /',
				'0)'
			],
			{
				person_id:1111111111,
				encounter_id:22222222222,
				start_date:univnm.db.toDate(new Date().add(Date.DAY,-1)),
				end_date:univnm.db.toDate(new Date())
			},
			function(result){ //if last param is a function, it assumed to be the callback function
				debug_window(result.toHtmlTable())
			}
		)
		</script>

	(end)


	*/
	univnm.db.query = function query(){
		var sql,params,cb;
		var args = Array.parse(arguments);
		var $this = this;
		var queryResult;

		if (typeof args.last() == "function"){
			cb = args.pop();
		}
		if (args.length > 1 && typeof args.last() == "object"){
			params = args.pop();
		}
		if (args.first() instanceof Array){
			args[0] = args[0].join(" ");
		}

		sql = args.join(" ");

		var codes =null;
		var missingCodes=false;
		sql = sql
			//fix single line comments
			.replace(/--(.*)$/mg,"/* $1 */")
			.replace(/\s/g," ")
			//optimize out code lookups
			/*.replace(/code_lookup\(\s*(\d+)\s*,\s*'(\w+)'\)/ig,function(str,code_set,display_key){
				return univnm.db.codeLookup(code_set,display_key);
			})*/
			.replace(/\/\*\s*CODESET\s*(\d+)\s*((?:\w+\s*)+)\*\//ig,function(str,code_set,display_keys){
				display_keys.split(/\s+/).forEach(function(display_key){
					if (!display_key) return;
					if (!codes) codes={};
					if (!codes[code_set]) codes[code_set] =[];
					//console.log(codes)
					codes[code_set].appendUnique(display_key);
					if (
						!$this.codeCache[code_set] ||
						!$this.codeCache[code_set][display_key]
					) {
						missingCodes =true;
					}
				});
				return str;
			});

		// we might need to do an async code lookup, so we're marshaling here
		univnm.jslib.async.marshal(function(done){
			// do we need to lookup codes?
			if(missingCodes){
				if (cb){
					return $this.cacheCodes(codes,function(){
						done();
					});
				}else{
					$this.cacheCodes(codes);
					done();
				}
			} else done();
		}).then(function(){
			//do we need to substitute codes?
			if (codes){
				sql =sql.replace(/\/\*\s*CODESET\s*(\d+)\s*((?:\w+\s*)+)\*\//ig,function(str,code_set,display_keys){
					return display_keys.split(/\s+/)
					.filter(function(display_key){
						return display_key;
					})
					.map(function(display_key){
						return $this.codeCache[code_set][display_key];
					});
				});
			}

			if (!params) params = {};

			if (typeof params.tableExtension == "undefined"){
				params.tableExtension = $env.tableExtension
			}
			if (!params.tableExtension) params.tableExtension ="";

			if (typeof Ext == "undefined"){
				sql = sql.format(params);
			} else {
				sql = new Ext.XTemplate(sql).apply(params);
			}


			function formatResult(result){
				if (typeof result == "string") throw new Error(result);

				result = new univnm.DataSet(result);
				result.columns.forEach(function(colName){
					if (/dt_tm$/.test(colName) ){
						var dateCol = colName.replace(/dt_tm$/,"date");
						result.columns.push(dateCol);
					}
				});
				result.forEach(function(row){
					result.columns.forEach(function(colName){
						if (
							typeof row[colName] == "string" &&
							row[colName].length &&
							/^\d{4}-\d\d-\d\d \d\d:\d\d:\d\d$/.test(row[colName])
						){
							try{
								row[colName] =Date.parseDate(row[colName],"Y-m-d H:i:s");
							} catch(e){}
						}
					});
				});

				return result;
			}

			var o = {
				ccl:"univnm_query_to_json",
				async:false,
				parameters:[sql],
				eval_result:true
			};
			if (cb){
				o.onsuccess = function(result){
					cb(formatResult(result));
				};
				o.async=true;
				univnm.jslib.ccl_callback(o);
			} else{
				queryResult = formatResult(univnm.jslib.ccl_callback(o));
			}
		});



		return queryResult;
	};
/* Property: univnm.db.codeCache
	contains a chacke of code values by code set and display key

	See:
		* <univnm.db.codeLookup>
		* <univnm.db.cacheCodes>

	*/
	univnm.db.codeCache = {};
/* Function: univnm.db.codeLookup
	looks up a code from the code_value table.

	Parameters:
		code_set		-	code set to search
		display_key		-	display key to search


	Throws and exception if the code is not found

	Example:
	(code)
		var ADMIN = uninvnm.db.codeLookup(88,'ADMIN');
	(end)

	See:
		* <univnm.db.codeCache>
		* <univnm.db.cacheCodes>
		* <univnm.db.query>
	*/
	univnm.db.codeLookup = function(code_set,display_key){
		if (!this.codeCache[code_set]) this.codeCache[code_set] ={};
		if (!this.codeCache[code_set][display_key]){
			var work ={};
			work[code_set]=[display_key];
			this.cacheCodes(work);
		}
		return this.codeCache[code_set][display_key];
	};
/* Function: univnm.db.cacheCodes
	preCaches code values so that calls to <codeLookup> run faster

	Parameters:
		codes	-	JS object
					Keyed by codeset, each value containing an array of
					display keys
		cb		-	*Optional, default null*
					Function
					If defined, cacheCodes will be run async and _cb_ will
					be called when codes are ready

	Example:
	(code)
		//background load code values
		univnm.db.cacheCodes(
			{
				88:['ADMIN','BEDROCK'],
				72:['WBC','HBC','DIFFIS']
			},
			function(){}
		)
	(end)
	*/
	univnm.db.cacheCodes = function(codes,cb){
		var values = {
			code_sets:[],
			display_keys:[]
		};
		var $this = this;


		for (var code_set in codes){
			codes[code_set].forEach(function(display_key){
				if (
					!$this.codeCache[code_set] ||
					!$this.codeCache[code_set][display_key]
				){
					values.code_sets.appendUnique(code_set);
					values.display_keys.appendUnique("'"+display_key+"'");
				}
			});
		}

		var sql = [
			"select ",
			"	code_value, code_set, display_key ",
			"from ",
			"	code_value ",
			"where ",
			"	code_set in ({code_sets}) ",
			"	and display_key  in ({display_keys}) "
		];
		var data;
		if (values.code_sets.length){
			univnm.jslib.async.marshal(function(done){
				if (cb){
					$this.query(sql,values,function(result){
						data = result;
						done();
					});
				}else{
					data =$this.query(sql,values);
					done();
				}
			}).then(function(){
				data.forEach(function(row){
					if (!$this.codeCache[row.code_set]){
						$this.codeCache[row.code_set]={};
					}
					if (!$this.codeCache[row.code_set][row.display_key]){
						$this.codeCache[row.code_set][row.display_key]=[];
					}

					$this.codeCache
						[row.code_set]
						[row.display_key]
						.appendUnique(row.code_value);
				});
				//validate that all the codes were found
				var missingCodes =[];
				for (var code_set in codes){
					codes[code_set].forEach(function(display_key){
						if (
							!$this.codeCache[code_set] ||
							!$this.codeCache[code_set][display_key]
						){
							missingCodes.push(code_set+":"+display_key);
						}
					});
				}
				if(missingCodes.length){
					throw new Error("Unable to fins these code values: " + missingCodes)
				}
				if (cb) cb();
			});
		} else if (cb) cb();

	};
/* Function: univnm.db.toDate
	converts a JS date into a Oracle to_date function string

	Parameters:
		date		-	JS Date object

	Example:
	(code)
		var result =univnm.db.query([
			'SELECT  ',
			'		code_display(72, c.EVENT_CD) AS code_display ',
			'		,code_display_key(72, c.EVENT_CD) AS code_display_key ',
			'		, c.result_val as value ',
			' FROM clinical_event   c ',
			' WHERE c.person_id = {person_id} ',
			' AND c.updt_dt_tm BETWEEN {start_date} AND {end_date} ',
			' AND c.encntr_id = {encounter_id} ',
			' AND c.event_cd IN ( ',
			'     code_lookup(72, \'DIRECTCOOMBSIGG\'), ',
			'     code_lookup(72, \'TBILIRUBIN\') ',
			' ) '
		],
		{
			person_id:patient_id,
			encounter_id:encounter_id,
			start_date:univnm.db.toDate(C.range_start),
			end_date:univnm.db.toDate(C.range_end)
		});
	(end)

	*/
	univnm.db.toDate = function(date){
		if (!(date instanceof Date)){
			throw new Error("univnm.db.toDate only works for native Date objects");
		}
		return "to_date('" +date.format('d-m-Y H:i:s') +"', 'DD-MM-YYYY HH24:MI:SS')";

	};
/* Function: univnm.db.toSql
	converts a native JS value into an SQL string

	Parameters:
		value			-	JS Number,string,null,date, JS Object or array. See
							*Conversions"* below
		encodeObjects	-	Boolean, default false.
							if true, Arrays and JS Objects are encoded as JSON
							with the "#JSON" header for storage in custom tables

	Conversions:
		Number		-	converted to raw string

		String		-	If the value starts with '#' then the # is removed and
						the value is returned. If the value is a date string in
						the form of "d-m-Y H:i:s" it is treated like a date
						(see below). Otherwise the value is wrapped in
						single ticks('), with any internal ticks doubled. Hard
						returns are replaced with ' || chr(10) || '

		Date		-	converted to a to_date() string via <univnnm.db.toDate>

		Null		-	converted to "NULL"

		Array		-	(if !encodeObjects)
						returns an "in" list "(items1,item2,...itemN)" where
						each item is formatted via the above rules

		JS Object	-	(if !encodeObjects)
						returns a new object where each of the values are
						converted via toSql(value)



	Example:
	(code)
		var result =univnm.db.query([
			'SELECT  c.result_val as value ',
			' FROM clinical_event   c ',
			' WHERE c.person_id = {person_id} ',
			' AND c.updt_dt_tm BETWEEN {start_date} AND {end_date} ',
			' AND c.encntr_id = {encounter_id} ',
			' AND c.event_cd IN {codes}'
		],
		univnm.db.toSql({
			person_id:patient_id,
			encounter_id:encounter_id,
			start_date:new Date().clearTime().add(Date.DAY,-1),
			end_date:new Date().clearTime(),
			codes:[
				"#code_lookup(72, 'DIRECTCOOMBSIGG')",
				"#code_lookup(72, 'TBILIRUBIN')"
			]
		})
		);
	(end)

	*/
	univnm.db.toSql = function toSql(value,encodeObjects){
		// convert null/undefined/emptystring/NaN etc
		// do this first to prevent matching "" as a string
		if (!value && value !== 0) value ="#NULL";

		//Convert string
		if (typeof value === "string"){
			if (value.charAt(0) == "#"){
				value = value.substring(1);
			} else {
				var d;
				if ( (d=Date.parseDate(value,"d-m-Y")) ||  (d=Date.parseDate(value,"d-m-Y H:i:s")) ){
					value = d;
				} else value = "'{0}'".format(value.replace(/'/g,"''"));
			}

		}



		//convert date
		if (value instanceof Date) {
			value = univnm.db.toDate(value);
		}
		//convert boolean
		if (!!value === value) value = value?"'#JSONtrue'":"'#JSONfalse'";

		if (encodeObjects){
			//json encode
			if (typeof value == "object"){
				value = "'#JSON{0}'".format(
					univnm.jslib.jsonEncode(value).replace(/'/g,"''")
				);
			}
		} else {
			if (value instanceof Array){
				value = "({0})".format(
					value.map(function(v){
						return toSql(v);
					}).join()
				);

			} else if (typeof value == "object"){
				var newObj = {};
				for (var p in value){
					newObj[p] = toSql(value[p]);
				}
				return newObj;
			}
		}

		//fix hard returns
		value = String(value).replace(/\n+/g,function (str) {
			return "' || {0} ||'".format(
				Array.dim(str.length).map(function (argument) {
					return " CHR(10) "
				}).join(" || ")
			)
		}).replace(/~+/g,function (str) {
			return "' || {0} ||'".format(
				Array.dim(str.length).map(function (argument) {
					return " CHR(126) "
				}).join(" || ")
			)
		}).replace(/[\u0000-\u001F]+/g,"")


		return value;
	};


/* Function: univnm.db.saveRow
	Saves a row of data to a custom table

	Parameters:
		table	-	name of tablet to modify. Only tables in unmh beginning with
					"cust_" can be modified. The "cust_" is implied, so
					"cust_values" and "values" would both refer to the same table
		type	-	One of "insert,update,remove,set".
					See *Insert Type, Update Type, etc* below
		data	-	Either a row or an array of rows to save. If this is an array,
					then each row will be handled separately on th eback-endA row
					is a JS object where the properties are column names and the
					values are the values for those columns. Some save types
					support a space and an operator in the property(column) name
					to indicate that the column should be used in the where clause,
					using that operator. values are interpreted by type. See *Value parsing* below
		cb		-	*Optional, default null*
					Function. If defined, this call will be made asynchronously
					and _cb_ will be called when finished. Other wise this call
					will be made synchronously and will return when finished.

	Value Parsing:
		Values in rows are translated via the following rules:

		* Null values are converted to "#NULL"
		* String values that start with a # are passed through as raw SQL values
		* Other String values are wrapped in single quotes and any internal
			single quotes are escaped
		* Dates are converted to to_date strings (See univnm.db.toDate)
		* booleans are converted to either 1 or 0
		* Final string value will have all hard-returns converted to ' || chr(10) || '

	Insert Type:
		The "insert" type is used for inserting rows in to the table. Operators
		in the column names are ignored, and all values in the row are inserted

		(code)
			var data =[{
				id:"#Null",//pull from sequence trigger
				application:C.options.appname,
				key:"refreshDate",
				value:new Date()
			}]
			univnm.db.saveRow("values","insert",data,function(){})
		(end)

	Update Type:
		The "update" type is used for updating rows in the table. Operators
		in the column names indicate the where expression. All values in the row
		are updated.

		(code)
			var data =[{
				"application = ":C.options.appname,
				"key =":"refreshDate",
				value:new Date()
			}]
			univnm.db.saveRow("values","update",data,function(){})
		(end)

	Remove Type:
		The "remove" type is used for removing rows from the table. All columns
		are used in the where expression. The assumed operator is "="

		(code)
			//remove values like 'refresh%' older than 7 days
			var data =[{
				application:C.options.appname,
				"key like":"refresh%",
				"value <":"#sysdate -7"

			}]
			univnm.db.saveRow("values","remove",data,function(){})
		(end)

	Set Type:
		The "set" type is used for updating or inserting rows based on a natural
		key. Operators in the column names indicate the where expression, however
		the only valid operator is "=". if a row exists matching the where
		expression it is updated, otherwise inserted.

		(code)
			var data =[{
				"application =":C.options.appname,
				"key =":"refreshDate",
				value:"#sysdate"
			}]
			univnm.db.saveRow("values","set",data,function(){})
		(end)

	*/
	univnm.db.saveRow = function saveRow(table,type,data,cb){
		var result=[];


		if (!cb) cb = function(){};
		if (!data) return cb();
		if (!(data instanceof Array)){
			data = [data];
		}
		if (data.length === 0) {
			return cb();
		}
		var workArray = [];
		var batchArray =[];
		var length=0;
		table = table.replace(/^cust_/i,"");

		var te = $env.tableExtension;
		var ignored = ($env.tableExtensionIgnore||[]).map(function (name) {
			return name.replace(/^cust_/i,"");
		})
		if (te && !ignored.contains(table) && table.right(te.length) != te){
			table+=te;
		}

		if (this.debug) {
			data.forEach(function(row) {
				console.log("univnm_row_manager DRY RUN", ["MINE",table,type,row]);
				result.push(row);
			});
			if (cb) {
				cb(result);
			}
			return result;
		}

		data.forEach(function(data){
			//console.log("saveRow data = " ,data)
			var row = $O(data).toArray().map(function(tuple){
				//convert to SQL and escape magic characters used by row_manager
				var value = univnm.db.toSql(tuple.value,true)
					.replace(/~/g,"_TILDE_")
					.replace(/\|/g,"_PIPE_")
					.replace(/\^/g, "_CARET_")
					.replace(/\$/g, "_DOLLA_");
				if (value.toUpperCase() == '#NULL'){
					tuple.key =tuple.key.listFirst(" ") + " is";
				}
				return tuple.key+":"+String(value);
			}).join("|");

			if (length + row.length > 30000){
				if (!length) {
					throw new Error(
						"data too large for saveRow ({0}k > 50k)"
						.format(row.length/1024)
					);
				}

				batchArray.push(workArray.join("~"));
				workArray =[];
				length=0;
			}
			length += row.length;
			workArray.push(row);
		});
		batchArray.push(workArray.join("~"));

		if (cb){
			univnm.jslib.async.marshal(
				batchArray.map(function(col_values){
					return function(done){
						var o = {
							ccl:"univnm_row_manager",
							parameters:["MINE",table,type,col_values],
							eval_result:true,
							onsuccess:function(data){
								result = result.concat(data);
								done();
							},
							async:true
						};

						univnm.jslib.ccl_callback(o);
					};

				})
			).then(function(){
				cb(result);
			});
		} else {
			batchArray.forEach(function(col_values){
				var o = {
					ccl:"univnm_row_manager",
					parameters:["MINE",table,type,col_values],
					eval_result:true,
					async:false
				};

				var data =univnm.jslib.ccl_callback(o);
				result = result.concat(data);
			});
			return result;
		}
	};

}{
$env.tableExtensionIgnore.push("cust_applications");
Ext.define('MPAGE.model.Application', {
	extend: 'Ext.data.Model',
	proxy:"row",
	table:"cust_applications",
	fields:[
		{name:"id"}, 
		{name:"display_name"}, 
		{name:"app_name", naturalKey:true}, 
		{name:"is_portlet", sqlDefault:"0"}, 
		{name:"description", sqlDefault:"#null"}
	],
	idgen: {
		type: 'seq',
		sequence:"cust_applications_seq"
	}
});

}{
Ext.define("MPAGE.store.Application", {
	extend: "univnm.ext.QueryStore",
	alias:"store.application",
	model: "MPAGE.model.Application",
	autoLoad:true,
	sorters:[{
		property:"app_name",
		direction:"asc"
	}]
});
}{
$env.tableExtensionIgnore.push("cust_acos");
Ext.define('MPAGE.model.Right', {
	extend: 'Ext.data.Model',
	proxy:"row",
	table:"cust_acos",
	fields:[
		{name:"id", sqlDefault:"#cust_acos_seq.nextval"},
		{name:"parent_id", sqlDefault:"#0"},
		{name:"model", sqlDefault:"Right"},
		{name:"foreign_key", sqlDefault:"#0"},
		{name:"alias", naturalKey:true},
		{name:"lft", sqlDefault:"#NULL"},
		{name:"rght", sqlDefault:"#NULL"},
		{name:"path", sqlDefault:"#NULL"},
		{
			name: "is_trogdor",
			meta:true,
			convert: function(v, r) {
				return r.data.alias.indexOf("trogdor/") == 0;
			}
		},
		{
			name: "is_build",
			meta:true,
			convert: function(v, r) {
				return r.data.alias.indexOf("build/") == 0;
			}
		},
		{
			name: "is_prod",
			meta:true,
			convert: function(v,r) {
				return !(r.data.alias.indexOf("build/") == 0 || r.data.alias.indexOf("trogdor/") == 0);
			}
		},
		{
			name: "environment",
			meta:true,
			convert: function(v,r) {
				switch(true) {
					case r.data.is_trogdor:
						return "Trogdor";
					case r.data.is_prod:
						return "Production";
					case r.data.is_build:
						return "Build";
					default: return "lolwhat";
				}
			}
		}

	]
});

}{
Ext.define("MPAGE.store.Right", {
	extend: "univnm.ext.QueryStore",
	alias:"store.right",
	model: "MPAGE.model.Right",
	autoLoad:true,
	sql:"select * from cust_acos where model = 'Right'",
	sorters:[{
		property:"alias",
		direction:"asc"
	}],
	groupers: [
		{
			property: "environment"
		}
	]
});
}{
$env.tableExtensionIgnore.push("cust_aros");
Ext.define('MPAGE.model.Group', {
	extend: 'Ext.data.Model',
	proxy:"row",
	table:"cust_aros",
	fields:[
		{name:"id",								sqlDefault:"#cust_aros_seq.nextval"},
		{name:"parent_id",		naturalKey:true,	defaultValue:0},
		{name:"model",			naturalKey:true,	defaultValue:"Role"},
		{name:"foreign_key",	naturalKey:true,	defaultValue:0},
		{name:"alias",			naturalKey:true},
		{name:"previously_added",			meta:true},
		{
			name: "is_trogdor",
			meta:true,
			convert: function(v, r) {
				return r.data.alias.indexOf("trogdor/") == 0;
			}
		},
		{
			name: "is_build",
			meta:true,
			convert: function(v, r) {
				return r.data.alias.indexOf("build/") == 0;
			}
		},
		{
			name: "is_prod",
			meta:true,
			convert: function(v,r) {
				return !(r.data.alias.indexOf("build/") == 0 || r.data.alias.indexOf("trogdor/") == 0);
			}
		},
		{
			name: "environment",
			meta:true,
			convert: function(v,r) {
				switch(true) {
					case r.data.is_trogdor:
						return "Trogdor";
					case r.data.is_prod:
						return "Production";
					case r.data.is_build:
						return "Build";
				}
			}
		},
		{
			name: "application",
			meta:true,
			convert:function(v,r) {
				return r.get("alias").replace("trogdor/", "").replace("build/", "").replace("/admin", "").split("/").first() || "Custom Group";
			}
		}
	]
});

}{
Ext.define("MPAGE.store.Group", {
	extend: "univnm.ext.QueryStore",
	alias:"store.group",
	model: "MPAGE.model.Group",
	autoLoad:true,
	sql:[
		"select",
		"	ro.id,",
		"	ro.parent_id,",
		"	ro.model,",
		"	ro.foreign_key,",
		"	ro.alias ",
		"from",
		"	cust_aros ro ",
		"where",
		"	1=1 ",
		"	and nvl(parent_id,0) =0 ",
		"	and model = 'Role' ",
		"order by lower(alias)"
	],
	sorters: [
		{
			property: "environment",
			direction: "asc"
		},
		{
			property: "group_name",
			direction: "asc"
		}
	],
	groupers: [
		{
			property: "application"
		}
	]
})
}{
$env.tableExtensionIgnore.push("cust_aros_acos");
Ext.define('MPAGE.model.Perm', {
	extend: 'Ext.data.Model',
	proxy:"row",
	table:"cust_aros_acos",
	fields:[
		{name:"id",				sqlDefault:"#cust_aros_acos_seq.nextval"},

		{name:"aro_id",			naturalKey:true},
		{name:"aco_id",			naturalKey:true},

		{name:"app_id",			meta:true},
		{name:"right_name",		meta:true},

		{name:"group_name",		meta:true} ,
		{
			name: "is_trogdor",
			meta:true,
			convert: function(v, r) {
				return r.data.right_name.indexOf("trogdor/") == 0;
			}
		},
		{
			name: "is_build",
			meta:true,
			convert: function(v, r) {
				return r.data.right_name.indexOf("build/") == 0;
			}
		},
		{
			name: "is_prod",
			meta:true,
			convert: function(v,r) {
				return !(r.data.right_name.indexOf("build/") == 0 || r.data.right_name.indexOf("trogdor/") == 0);
			}
		},
		{
			name: "environment",
			meta:true,
			convert: function(v,r) {
				switch(true) {
					case r.data.is_trogdor:
						return "Trogdor";
					case r.data.is_prod:
						return "Production";
					case r.data.is_build:
						return "Build";
					default: return "lolwhat";
				}
			}
		},
		{
			name: "application_name",
			meta:true,
			convert:function(v,r) {
				return r.get("right_name").replace("trogdor/", "").replace("build/", "").replace("/admin", "").split("/").first() || "Custom Group";
			}
		}
	],
	reloadAfterSave:true,
	readSql:[
		"Select ",
		"	t.id, ",
		"	t.aro_id, ",
		"	t.aco_id, ",
		"	co.foreign_key app_id, ",
		"	co.alias right_name, ",
		"	ro.alias ",
		"group_name ",
		"From ",
		"	cust_aros_acos t ",
		"		join cust_acos co on( co.id = t.aco_id ",
		") ",
		"	join cust_aros ro on( ro.id = t.aro_id ",
		") ",

		"Where ",
		"	1=1 ",
		"	and ro.model = 'Role' ",
		"	and co.model='Right' ",
		"   and {conditions} "
	]
});

}{
Ext.define("MPAGE.store.Perm", {
	extend: "univnm.ext.QueryStore",
	alias:"store.perm",
	model: "MPAGE.model.Perm",
	autoLoad:true,
	sorters:[
		{
			property: "environment",
			direction: "asc"
		},
		{
			property:"alias",
			direction:"asc"
		}
	],
	groupers: [
		{
			property: "application_name"
		}
	]
});
}{
$env.tableExtensionIgnore.push("cust_menus");
Ext.define('MPAGE.model.Menu', {
	extend: 'Ext.data.Model',
	proxy:"row",
	table:"cust_menus",
	fields:[
		{name:"id"},
		{name:"name",		naturalKey:true},
		{name:"base_dir",	naturalKey:true, defaultValue:"file:/I:/custom/mpages"},
		{name:"title"}
	],
	idgen: {
        type: 'seq',
        sequence:"cust_menus_seq"
    },
	readSql:[
		"Select ",
		"	id, ",
		"	name, ",
		"	title, ",
		"	base_dir ",
		"from ",
		"	cust_menus t",
		"where ",
		"	{conditions} "
	]
});

}{
Ext.define("MPAGE.store.Menu", {
	extend: "univnm.ext.QueryStore",
	alias:"store.group",
	model: "MPAGE.model.Menu",
	autoLoad:true,
	sorters:[{
		property:"base_dir",
		direction:"ASC"
	},{
		property:"name",
		direction:"ASC"
	}]
	
})
}{
$env.tableExtensionIgnore.push("cust_sections");
Ext.define('MPAGE.model.Section', {
	extend: 'Ext.data.Model',
	proxy:"row",
	table:"cust_sections",
	fields:[
		{name:"id",									sqlDefault:"#cust_sections_seq.nextval"},
		{name:"menu_id",	naturalKey:true},
		{name:"name",		naturalKey:true},
		{name:"weight"		} 
	],
	readSql:[
		"Select ",
		"	id, ",
		"	menu_id, ",
		"	name, ",
		"	weight ",
		"From ",
		"	cust_sections t ",
		"where ",
		"	{conditions} "
		
	]
});

}{
Ext.define("MPAGE.store.Section", {
	extend: "univnm.ext.QueryStore",
	alias:"store.group",
	model: "MPAGE.model.Section",
	extraParams:{
		menu_id:0
	},
	sql:[
		"Select ",
		"	id, ",
		"	menu_id, ",
		"	name, ",
		"	weight ",
		"From ",
		"	cust_sections t ",
		"where ",
		"	1=1 <tpl if='menu_id'> ",
		"		and menu_id={menu_id} ",
		"    <tpl else> ",
		"    	and menu_id=0 ",
		"    </tpl> "
	],
	sorters:[{
		property:"weight",
		direction:"DESC"
	}]
	
})
}{
$env.tableExtensionIgnore.push("cust_entities");
Ext.define('MPAGE.model.Entity', {
	extend: 'Ext.data.Model',
	proxy:"row",
	table:"cust_entities",
	fields:[
		{name:"id",									sqlDefault:"#cust_entities_seq.nextval"},
		{name:"section_id",			naturalKey:true},
		{name:"application_id",		naturalKey:true},
		{name:"icon"				},
		{name:"params"				},
		{name:"url"					},
		{name:"display_name",			meta:true},
		{name:"app_name",			meta:true}       
		 
	],
	reloadAfterSave:true,
	readSql:[
		"Select ",
		"	t.id, ",
		"	t.section_id, ",
		"	t.application_id, ",
		"	t.icon, ",
		"	t.params, ",
		"	t.url, ",
		"	app.display_name, ",
		"	app.app_name ",
		"From ",
		"	cust_entities t, ",
		"	cust_applications app ",
		"where app.id = t.application_id ",
		"and {conditions} "
	]
});

}{
Ext.define("MPAGE.store.Entity", {
	extend: "univnm.ext.QueryStore",
	alias:"store.group",
	model: "MPAGE.model.Entity",
	extraParams:{
		section_id:0
		
	},
	sql:[
		"Select ",
		"	t.id, ",
		"	t.section_id, ",
		"	t.application_id, ",
		"	t.icon, ",
		"	t.params, ",
		"	t.url, ",
		"	app.display_name, ",
		"	app.app_name ",
		"From ",
		"	cust_entities t, ",
		"	cust_applications app ",
		"where app.id = t.application_id ",
		"    <tpl if='section_id'> ",
		"	and section_id={section_id} ",
		"    <tpl else> ",
		"	and section_id=0 ",
		"    </tpl> "
		
	],
	sorters:[{
		property:"app_name",
		direction:"ASC"
	}]
	
})
}{
Ext.define("MPAGE.store.ROSearch", {
	extend: "univnm.ext.QueryStore",
	alias:"store.ro_search",
	model: "MPAGE.model.Group",
	sql:[
		"<tpl if=\"!query\"> ",
			"select * from dual where 1=0",
		"</tpl>",
		"<tpl if=\"query\"> ",
		"select ",
			"code_value foreign_key, ",
			"display alias, ",
			"'CernerRole' model,",
			"CASE WHEN exists ( ",
				"select ",
					"'x' ",
				"from ",
					"cust_aros ro ",
				"where ",
					"ro.model = 'CernerRole' ",
					"and ro.foreign_key=cv.code_value ",
					"and ro.parent_id = {pid} ",
			") THEN 'Yes' ELSE 'No' END previously_added",
		"from ",
			"code_value cv ",
		"where ",
			"1=1 ",
			"and lower(display) like lower('%{query}%')",
			"and code_set= 88 ",
			"and active_ind= 1 ",
		"UNION ",
		"select ",
			"person_id foreign_key, ",
			"name_full_formatted alias, ",
			"'User' model,",
			"CASE WHEN exists ( ",
				"select ",
					"'x' ",
				"from ",
					"cust_aros ro ",
				"where ",
					"ro.model = 'User' ",
					"and ro.foreign_key=p.person_id ",
					"and ro.parent_id = {pid} ",
			") THEN 'Yes' ELSE 'No' END previously_added",
		"from ",
			"prsnl p ",
		"where ",
			"1=1 ",
			"and ( ",
				"p.name_last_key like upper('{query}%') ",
				"or p.name_first_key like upper('{query}%') ",
			") ",
			"",
			"and active_ind = 1 ",
		"order by previously_added,alias ",
		"</tpl> "

	],
	extraParams:{
		pid:0
	}
})
}{
Ext.define("MPAGE.store.GroupMember", {
	extend: "univnm.ext.QueryStore",
	alias:"store.group_member",
	model: "MPAGE.model.Group",
	sql:[
		"select ",
		"	ro.id, ",
		"	ro.parent_id, ",
		"	ro.model, ",
		"	ro.foreign_key, ",
		"	ro.alias ",
		"from ",
		"	cust_aros ro ",
		"where ",
		"	1=1 ",
		"	and ro.model in ( ",
		"		'CernerRole', ",
		"		'User' ",
		"	) ",
		"	and parent_id = <tpl if=\"pid\"> {pid} <tpl else> -1 </tpl> "
	],
	extraParams:{
		pid:"-1"
	}
})
}{
Ext.define("MPAGE.view.Viewport", {
	extend: 'Ext.container.Viewport',
	requires: [
		
	],
	defaults: {
		//border:false
		//bodyStyle: "background-color: #ffffff;"
	},
	addCenterTab:function(config,ordinal){
		Ext.apply(config,{
			closable:true
		})
		var tabPanel = this.down("*[itemId=center_tabs]");
		tabPanel.show();
		if (tabPanel.items.containsKey(config.id)){
			tabPanel.setActiveTab(config.id)
		}else {
			if (ordinal != undefined){
				tabPanel.insert(ordinal,config);	
			} else {
				tabPanel.add(config);
			}
			tabPanel.setActiveTab(config.id)
		}
		
	},
	layout: 'fit',
	items:[{
		frame:false,
		layout:"fit",
		border:false,
		
		items:[{//center_tabs
			itemId:"center_tabs",
			//hidden:true,
			xtype:"tabpanel",
			autoDestroy:true,
			activeTab:0,
			items:[
				"app_main_grid",
				"right_main_grid",
				"group_main_grid",
				"perm_main_grid",
				"menu_main_panel"
			].map(function(xtype){
				return {
					xtype:xtype,
					closable:false
				}
			}),
			listeners: {
				afterrender:function(p){
					
					
				}
			}
			
		}]
	}]
		
});
}{
Ext.define('MPAGE.view.AppMainGrid', {
	extend: 'univnm.ext.SupaGrid',
	alias:'widget.app_main_grid',
	//requires:["MPAGE.store.Application"],
	title:"Applications",
	iconCls:"icon_applications",
	bbar:[{
		text:"Add Application",
		iconCls:"icon_application_add",
		handler:function(b){
			var view =b.up("app_main_grid");
			view.fireEvent("add_app",{src:view})
		}
	},{
		//xtype:"tbfill"
	},{
		xtype:"tbtext",
		baseCls:"help",
		text:"Double-click a row to edit"
	},{
		xtype:"tbfill"
	}],
	plugins:[{
		ptype:"rowediting",
		errorSummary:false,
		clicksToMoveEditor:1,
		clicksToEdit:2,
		autoCancel:true
	}],
	store:"Application",
	filterMode:"local",
	filterSuppressTitle:true,
	columns: [{
		xtype:'betteractioncolumn',
		width:25,
		iconCls: 'icon_delete',
		tooltip: 'Delete App',
		handler:function(view,rowIndex,colIndex,item,e){
			var model = view.getStore().getAt(rowIndex)
			if (confirm("Delete Application '{app_name}'?".format(model.data))){
				var v = view.up("app_main_grid");
				v.fireEvent("delete_app",{
					src:v,
					model:model
				})
			}
		}
	}/*,{
		text:"ID",
		width:35,
		dataIndex: 'id'
	}*/,{
		text: 'App Name',
		width:150,
		sortable: true,
		dataIndex: 'app_name',
		editor:{
			allowBlank:false,
			xtype:"textfield"
		},
		filterable:true

	},{
		text: 'Display Name',
		width:150,
		sortable: true,
		editor:{
			allowBlank:false,
			xtype:"textfield"
		},
		dataIndex: 'display_name'

	},{
		text: 'Description',
		editor:{
			xtype:"textfield"
		},
		sortable: true,
		flex:1,
		dataIndex: 'description'

	}],
	initComponent:function(config){

		this.callParent(arguments);
		this.on("activate",function(panel){
			if (this.activated){
				panel.getStore().load()
			}
			this.activated = true;
		})
		this.on("edit",function(editor,e){
			this.fireEvent("save_app",{
				src:this,
				model:e.record
			})
		})

	}
})
}{
Ext.define('MPAGE.view.EntityMainGrid', {
	extend: 'Ext.grid.Panel',
	alias:'widget.entity_main_grid',
	title:"Entities",
	//iconCls:"icon_menu",
	bbar:[{
		text:"Add Menu Item",
		iconCls:"icon_menu_add",
		handler:function(b){
			var view =b.up("entity_main_grid");
			view.fireEvent("add_entity",{src:view})
		}
	},{
		//xtype:"tbfill"
	},{
		xtype:"tbtext",
		baseCls:"help",
		text:"Double-Click to edit link"
	},{
		xtype:"tbfill"
	}],
	store:"Entity",
	plugins:[{
		ptype:"rowediting",
		errorSummary:false,
		clicksToMoveEditor:1,
		clicksToEdit:2,
		autoCancel:true
	}],
	columns: [{
		xtype:'betteractioncolumn',
		width:25,
		iconCls: 'icon_delete',
		tooltip: 'Delete Entity',
		handler:function(view,rowIndex,colIndex,item,e){

			var model = view.getStore().getAt(rowIndex)
			if (confirm("Delete Entity '{app_name}'?".format(model.data))){
				var v = view.up("entity_main_grid");
				v.fireEvent("delete_entity",{
					src:v,
					model:model
				})
			}
		}

	},{
		text: 'Application',
		width:150,
		sortable: true,
		dataIndex: 'application_id',
		editor:{
			xtype:"combobox",
			store:"Application",
			editable:false,
			queryMode:"local",
			displayField:"app_name",
			valueField:"id"
		},
		renderer:function(val,meta,record){
			return record.get("app_name");
		}


	},{
		text: 'Display Name',
		width:150,
		sortable: true,
		dataIndex: 'display_name'
	},{
		text: 'Icon',
		width:32,
		flex:1,
		sortable: true,
		dataIndex: 'icon',
		editor:{
			xtype:"textfield"
		},
		renderer:function(val){
			if (val){
				if (!(val.indexOf(".") === 0 || val.indexOf("file:") === 0 || val.indexOf("/") === 0)) {
					val = ($env.instance == "trogdor"? "../menu3/": "../menu/") + val;
				}
				return "<img width='20' height='20' src='{0}'>".format(val);
			} else return ""
		}

	},{
		text: 'URL / CCL',
		width:100,
		sortable: true,
		editor:{
			xtype:"textfield"
		},
		flex:1,
		dataIndex: 'url'
	},{
		text: 'Params',
		width:100,
		sortable: true,
		editor:{
			xtype:"textfield"
		},
		flex:1,
		dataIndex: 'params'
	}],
	listeners:{
	},
	initComponent:function(config){

		this.callParent(arguments);
		this.on("edit",function(editor,e){
			this.fireEvent("save_entity",{
				src:this,
				model:e.record
			})
		})
	}
})
}{
Ext.define('MPAGE.view.RightMainGrid', {
	extend: 'univnm.ext.SupaGrid',
	alias:'widget.right_main_grid',
	title:"Rights",
	iconCls:"icon_right",
	bbar:[{
		text:"Add Right",
		iconCls:"icon_right_add",
		handler:function(b){
			var view =b.up("right_main_grid");
			view.fireEvent("add_right",{src:view})
		}
	},{
		//xtype:"tbfill"
	},{
		xtype:"tbtext",
		baseCls:"help",
		text:"Double-click a row to edit"
	},{
		xtype:"tbfill"
	}],
	filterSuppressTitle:true,
	filterMode:'local',
	store:"Right",
	plugins:[{
		ptype:"rowediting",
		errorSummary:false,
		clicksToMoveEditor:1,
		clicksToEdit:2,
		autoCancel:true
	}],
	columns: [{
		xtype:'betteractioncolumn',
		width:25,
		iconCls: 'icon_delete',
		tooltip: 'Delete Right',
		handler:function(view,rowIndex,colIndex,item,e){

			var model = view.getStore().getAt(rowIndex)
			if (confirm("Delete Right '{alias}'?".format(model.data))){
				var v = view.up("right_main_grid");
				v.fireEvent("delete_right",{
					src:v,
					model:model
				})
			}
		}

	},{
		text: 'Right Name',
		filterable:true,
		editor:{
			allowBlank:false,
			xtype:"textfield"
		},
		flex:1,
		sortable: true,
		dataIndex: 'alias'

	},
	{
		text: "Environment",
		dataIndex: "environment"
	}],
	features: [{ftype:'grouping'}],
	listeners:{
		activate:function(panel){
			if (this.activated){
				panel.getStore().load()
			}
			this.activated = true;
		}
	},
	initComponent:function(config){


		this.callParent(arguments);
		this.on("edit",function(editor,e){
			this.fireEvent("save_right",{
				src:this,
				model:e.record
			})
		})
	}
})
}{
Ext.define('MPAGE.view.GroupMainGrid', {
	extend: 'univnm.ext.SupaGrid',
	alias:'widget.group_main_grid',
	title:"User Groups",
	iconCls:"icon_group",
	bbar:[{
		text:"Add Group",
		iconCls:"icon_group_add",
		handler:function(b){
			var view = b.up("group_main_grid");
			view.fireEvent("add_group",{src:view})
		}
	},{
		//xtype:"tbfill"
	},{
		xtype:"tbtext",
		baseCls:"help",
		text:"Click a row to edit"
	},{
		xtype:"tbfill"
	}],
	store:"Group",
	filterMode:"local",
	filterSuppressTitle:true,
	editFormConfig:{
		xtype:"group_form",
		position:"right",
		title:"Edit Group"
	},
	columns: [/* {
		xtype:'betteractioncolumn',
		width:25,
		iconCls: 'icon_group_edit',
		tooltip: 'Manage Group',
		handler:function(view,rowIndex,colIndex,item,e){
			var model = view.getStore().getAt(rowIndex)
			var v = view.up("group_main_grid");
			v.fireEvent("edit_group",{
				src:v,
				model:model
			})
		}
	}, */{
		text: 'Group Name',
		filterable:true,
		flex: 5,
		sortable: true,
		dataIndex: 'alias'

	}, {
		text: "Application",
		dataIndex: "application",
		flex: 2
	}, {
		text: "Environment",
		dataIndex: "environment",
		flex: 1
	}],
	features: [{ftype:'grouping'}],
	initComponent:function(config){
		this.callParent(arguments);
		this.on("activate",function(panel){
			if (this.activated){
				panel.getStore().load()
			}
			this.activated = true;
		})
	}
})
}{
/*jshint undef:false*/
Ext.define('MPAGE.view.GroupForm', {
	extend: 'Ext.form.Panel',
	alias:'widget.group_form',
	width:400,
	layout: {
		type: 'vbox',
		align:"stretch"
	},
	frame:true,
	defaults:{
		labelStyle:"font-weight:bold",
		labelWidth:170
	},
	buttons:[{
		text:"Delete",
		hidden:this.appEdit||this.permEdit,
		handler:function(b){
			var view = b.up("group_form")
			view.fireEvent("delete_group",{
				src:view,
				model:view.form.currentRecord
			})

		}
	},{
		text:"Save",
		hidden:this.appEdit||this.permEdit,
		handler:function(b){
			var view = b.up("group_form")
			var form = view.form
			if (form.isValid()){
				form.updateRecord(form.currentRecord);
				view.fireEvent("save_group",{
					src:view,
					model:view.form.currentRecord
				})
			}
		}
	}],
	initComponent:function(){
		Ext.apply(this,{
			items:[
				{
					name:"alias",
					fieldLabel:"Group Name",
					hidden:this.appEdit||this.permEdit,
					xtype:"textfield"
				},
				{
					border:false,
					bodyCls:C.frameClass,
					xtype:"fieldcontainer",
					fieldLabel:"Members",
					items:[
						{
							xtype:"button",
							iconCls:"icon_find",
							text:"Add",
							handler:function(c){
								var view=c.up("group_form");
								C.showWin("Add Members",{
									xtype:"supagrid",
									store:"ROSearch",
									selModel:Ext.create("Ext.selection.CheckboxModel",{}),
									columns:[
										{dataIndex:"alias", text:"Alias", flex:1},
										{dataIndex:"model", text:"Type"},
										{dataIndex:"previously_added", text:"In Group?"},
										{dataIndex:"query", text:"Search", filterable:true, hidden:true}
									].map(function (col) {
										col.renderer = function (val,meta,record) {
											if (record.get("previously_added") == 'Yes'){
												meta.tdCls="added_memeber"
											}
											return val
										}
										return col
									}),
									filterSuppressTitle:true,
									filterButtonText:"Search",
									filterResetButtonText:"Clear Search",
									defaultFocus: "textfield",
									buttons:[{
										text:"Add Selected Members",
										iconCls:"icon_group_add",
										handler:function(c){
											var records = c.up("supagrid").getSelectionModel().getSelection();
											//records.forEach(function (record) {
												view.fireEvent("add_members",{
													view:view,
													grid:c.up("supagrid"),
													group:view.form.currentRecord,
													members:records
												})
											//})
											//c.up("window").close();

											// C.infoMsg("Adding Members...")
											// c.up("supagrid").resetFilter()
										}
									}]
								},false);
								setTimeout(function() {
									Ext.ComponentQuery.query("textfield[name=query]").first().focus();
								}, 100);

							}
						},
						{
							xtype: "button",
							text: "Merge",
							iconCls:"icon_find",
							handler: function(c) {
								// var c = button.up("group_form");
								var w = Ext.create("Ext.window.Window", {
									title: "Merge Members",
									width: 350,
									height: 100,
									items: [
										{
											xtype: 'combobox',
											width:300,
											fieldLabel:"From",
											triggerAction: 'all',
											//allQuery:"__FAIL__",
											store: "Group",
											queryMode:"local",
											displayField:'alias',
											valueField:'id',
											triggerCls:"x-form-search-trigger",
											minChars:1,
											lazyRender: true,
											listClass: 'x-combo-list-small',
											listeners:{
												select:function(d,records){
													var view = c.up("group_form");
													Ext.Msg.confirm("Confirmation", "Are you sure you want to merge members?", function(b, text) {
														debugger;
														if (b == "no") return;
														view.fireEvent("merge_group",{
															src:view,
															from:records.first(),
															to:view.form.currentRecord
														});
														d.getStore().clearFilter();
														d.setValue("");
														w.close();
													});

												}
											},
											height:40
										}
									]
								});
								w.show();
								setTimeout(function() {
									Ext.ComponentQuery.query("window combobox").first().focus();
								}, 100);
							}
						}
					]
				},
				{
					itemId:"ro_member_grid",
					xtype:"supagrid",
					preventHeader:true,
					flex:1,
					labelAlign:"top",
					store:"GroupMember",
					columns: [
						{
							xtype:'betteractioncolumn',
							width:25,
							iconCls: 'icon_delete',
							tooltip: 'Remove Member',
							handler:function(view,rowIndex){
								var model = view.getStore().getAt(rowIndex)
								var v = view.up("group_form");
								v.fireEvent("delete_member",{
									src:v,
									model:model
								})
							}
						},
						{
							text: 'Alias',
							flex: 1,
							sortable: true,
							dataIndex: 'alias'

						},
						{
							text: 'Type',
							sortable: true,
							dataIndex: 'model',
							align: 'center'

						}
					]
				}
			]
		});

		this.callParent(arguments);
	}
})
}{
Ext.define('MPAGE.view.MenuMainGrid', {
	extend: 'Ext.grid.Panel',
	alias:'widget.menu_main_grid',
	title:"Top Level Menus",
	//iconCls:"icon_menu",
	bbar:[{
		text:"Add Menu",
		iconCls:"icon_menu_add",
		handler:function(b){
			var view =b.up("menu_main_grid");
			view.fireEvent("add_menu",{src:view})
		}
	},{
		//xtype:"tbfill"
	},{
		xtype:"tbtext",
		baseCls:"help",
		text:"Click a row to view sections, Double-Click to edit menu"
	},{
		xtype:"tbfill"
	}],
	store:"Menu",
	plugins:[{
		ptype:"rowediting",
		errorSummary:false,
		clicksToMoveEditor:1,
		clicksToEdit:2,
		autoCancel:true
	}],
	columns: [ /* {
		text:"ID",
		dataIndex:"id"
	}, */{
		xtype:'betteractioncolumn',
		width:25,
		iconCls: 'icon_delete',
		tooltip: 'Delete Menu',
		handler:function(view,rowIndex,colIndex,item,e){

			var model = view.getStore().getAt(rowIndex)
			if (confirm("Delete Menu '{title}'?".format(model.data))){
				var v = view.up("menu_main_grid");
				v.fireEvent("delete_menu",{
					src:v,
					model:model
				})
			}
		}

	}, {
		text: 'Title',
		width:100,
		sortable: true,
		editor:{
			allowBlank:false,
			xtype:"textfield"
		},
		dataIndex: 'title'

	},{
		text: 'Base Directory',
		flex:1,
		sortable: true,
		editor:{
			allowBlank:false,
			xtype:"textfield"
		},
		dataIndex: 'base_dir'

	},{
		text: 'Menu Name',
		width:100,
		sortable: true,
		editor:{
			allowBlank:false,
			xtype:"textfield"
		},
		dataIndex: 'name'

	},{
		width: 55,
		tooltip: "Edit Menu's Sections",
		renderer: function(val,md,record){
			var id =Ext.id();
			return new Ext.Template(
				'<a id="{id}" href="#" onclick="{onclick}">{val}</a>',
			'').apply({
				onclick:C.genClickFunction(
					id,
					"menu_main_grid",
					"edit_sections",
					record
				),
				val:"Sections",
				id:id
			});
		}
	}],
	listeners:{
	},
	initComponent:function(config){

		this.callParent(arguments);
		this.on("edit",function(editor,e){
			this.fireEvent("save_menu",{
				src:this,
				model:e.record
			})
		})
	}
})
}{
Ext.define('MPAGE.view.PermMainGrid', {
	extend: 'univnm.ext.SupaGrid',
	alias:'widget.perm_main_grid',
	title:"Permissions",
	iconCls:"icon_perm",
	bbar:[{
		text:"Add Permission",
		iconCls:"icon_perm_add",
		handler:function(b){
			var view =b.up("perm_main_grid");
			view.fireEvent("add_perm",{src:view})
		}
	},{
		//xtype:"tbfill"
	},{
		xtype:"tbtext",
		baseCls:"help",
		text:"Double-click a row to edit, or click the row to manage the associated group."
	},{
		xtype:"tbfill"
	}],
	editFormConfig:{
		xtype:"group_form",
		permEdit:true,
		position:"right",
		editTriggerCol:"edit_group",
		title:"Edit Group"

	},
	filterMode:"local",
	filterSuppressTitle:true,
	plugins:[{
		ptype:"rowediting",
		errorSummary:false,
		clicksToMoveEditor:1,
		clicksToEdit:2,
		autoCancel:true
	}],
	store:"Perm",
	columns: [/*{
		text: 'ID',
		width:35,
		//hidden:true,
		sortable: true,
		dataIndex: 'id'

	}, */{
		xtype:'betteractioncolumn',
		width:25,
		iconCls: 'icon_delete',
		tooltip: 'Delete Perm',
		handler:function(view,rowIndex,colIndex,item,e){
			var model = view.getStore().getAt(rowIndex)
			if (confirm("Delete Permission '{right_name}' -> '{group_name}'?".format(model.data))){
				var v = view.up("perm_main_grid");
				v.fireEvent("delete_perm",{
					src:v,
					model:model
				})
			}
		}
	},{
		text: 'Right Name',
		width:250,
		sortable: true,
		dataIndex: 'aco_id',
		editor:{
			xtype:"combobox",
			store:"Right",
			editable:false,
			queryMode:"local",
			displayField:"alias",
			valueField:"id"
		},
		renderer:function(val,meta,record){
			return record.get("right_name")
		}

	},{
	// 	xtype:'betteractioncolumn',
	// 	width:25,
	// 	iconCls: 'icon_group_edit',
	// 	tooltip: 'Edit Group',
	// 	itemId:"edit_group"
	// },{
		text: 'Group Name',
		width:250,
		sortable: true,
		dataIndex: 'aro_id',
		editor:{
			xtype:"combobox",
			store:"Group",
			editable:false,
			queryMode:"local",
			displayField:"alias",
			valueField:"id"
		},
		renderer:function(val,meta,record){
			return record.get("group_name");
		}

	},{
		text: 'Application',
		filterable:true,
		hidden:true,
		filterFn:function(record,app_name) {
			var right = record.get("right_name");
			return new RegExp(app_name +"(\/|$)").test(right);
		},
		filterControl:{
			xtype:"combobox",
			queryMode:"local",
			store:"Application",
			displayField:"app_name",
			valuField:"app_name",
			editable:false

		},
		dataIndex: 'right_name'
	},{
		text: 'Group Name',
		filterable:true,
		dataIndex: 'group_name',
		hidden:true,
		filterControl:{
			//fieldLabel:"Application",
			xtype:"combobox",
			store:"Group",
			queryMode:"local",
			displayField:"alias",
			valuField:"alias",
			editable:false
		}
	},
	{
		text: "Application",
		dataIndex: "application_name"
	},
	{
		text: "Environment",
		dataIndex: "environment"
	}],
	features: [{ftype:'grouping'}],
	listeners:{
		activate:function(panel){
			if (this.activated){
				panel.getStore().load()
			}
			this.activated = true;
		},
		sortchange:function(ct,col,dir){
			if (col.dataIndex == 'aro_id'){
				Ext.StoreMgr.get("Perm").sort({
					property:"group_name",
					direction:dir
				})
			} else if (col.dataIndex == 'aco_id') {
				Ext.StoreMgr.get("Perm").sort({
					property:"right_name",
					direction:dir
				})
			}
		}
	},
	initComponent:function(config){

		this.features =[
			Ext.create('Ext.grid.feature.Grouping',{
				groupHeaderTpl: '({rows.length}) "{name}" ',
				//hideGroupedHeader:true,
				startCollapsed:true
			})
		]
		this.callParent(arguments);
		this.on("edit",function(editor,e){
			this.fireEvent("save_perm",{
				src:this,
				model:e.record
			})
		})
	}
})
}{
Ext.define('MPAGE.view.SectionMainGrid', {
	extend: 'Ext.grid.Panel',
	alias:'widget.section_main_grid',
	title:"Sections",
	//iconCls:"icon_menu",
	tbar:[{
		text:"Add Section",
		iconCls:"icon_menu_add",
		handler:function(b){
			var view =b.up("section_main_grid");
			view.fireEvent("add_section",{src:view})
		}
	},{
		//xtype:"tbfill"
	},{
		xtype:"tbtext",
		baseCls:"help",
		text:"Click a row to view Links, Double-Click to edit section"
	},{
		xtype:"tbfill"
	}],
	store:"Section",
	plugins:[{
		ptype:"rowediting",
		errorSummary:false,
		clicksToMoveEditor:1,
		clicksToEdit:2,
		autoCancel:true
	}],
	columns: [{
		xtype:'betteractioncolumn',
		width:25,
		iconCls: 'icon_delete',
		tooltip: 'Delete Section',
		handler:function(view,rowIndex,colIndex,item,e){
			
			var model = view.getStore().getAt(rowIndex)
			if (confirm("Delete Section '{name}'?".format(model.data))){
				var v = view.up("section_main_grid");
				v.fireEvent("delete_section",{
					src:v,
					model:model
				})
			}
		}
			
	},{
		text: 'Section Name',
		width:100,
		sortable: true,
		flex:1,
		editor:{
			allowBlank:false,
			xtype:"textfield"
		},
		dataIndex: 'name'
		
	},{
		text: 'weight',
		width:100,
		editor:{
			allowBlank:false,
			xtype:"numberfield"
		},
		sortable: true,
		dataIndex: 'weight'
		
	}],
	listeners:{
	},
	initComponent:function(config){
		
		this.callParent(arguments);
		this.on("edit",function(editor,e){
			this.fireEvent("save_section",{
				src:this,
				model:e.record
			})
		})
	}
})
}{
Ext.define("MPAGE.view.MenuDetails", {
	extend: "Ext.tab.Panel",
	alias: "widget.menu_details",
	tabPosition: "top",
	removePanelHeader: true,
	requires: ["MPAGE.store.Section"],

	constructor: function(config) {
		this.store = Ext.StoreManager.get("Section");
		this.tabItems = [];
		this.callParent([config]);

		this.store.on({
			load: this.onMenuChange,
			scope: this
		});
	},

	onMenuChange: function(store) {
		this.tabItems.forEach(function(p) {
			this.remove(p);
		}, this);
		this.tabItems = [];
		store.data.items.forEach(function(section) {
			this.addMenuSection(section);
		}, this);
		this.setActiveTab(this.tabItems[0]);
	},

	addMenuSection: function(section) {
		this.tabItems.push(this.add({
			title: section.data.name,
			xtype: "entity_main_grid",
			record: section,
			preventHeader: true
		}));
	}
});
}{
Ext.define('MPAGE.controller.Application', {
	extend: 'Ext.app.Controller',
	views:[
		"AppMainGrid"
	],
	init: function() {
		var controller = this;
		this.control({
			'viewport': {
				menu_app: this.menuClick
			},
			'app_main_grid': {
				add_app:function(event){
					var s =event.src.getStore() 
					s.add(new s.model())
				},
				save_app: function(event){
					this.saveApp(event.model)
				},
				delete_app: function(event){
					this.deleteApp(event.model)
				}
				
			} 
			
			
			
		});
	},
	buildMatchingRights:function(model){
		
		var rightStore = Ext.StoreMgr.get("Right")
		var c = this.getController("Right")
		//this is defined in app.js
		baseRights.forEach(function(pattern){
			var alias = pattern.format(model.data);
			var rightIndex = rightStore.find("alias",alias);
			
			if (rightIndex == -1){
				var right = new MPAGE.model.Right({
					alias:alias
				})
				right.dirty = true;
				rightStore.add(right);
				c.saveRight(right,function(){
					C.infoMsg("Right {0} created.".format(alias))
				})
			} else {
				c.saveRight(rightStore.getAt(rightIndex));	
			}
		})
		
	},
	saveApp:function(model,cb){
		model.save({
			callback:function(record){
				if (cb) cb(record);
			}
		})
		this.buildMatchingRights(model)
	},
	deleteApp:function(model,cb){
		model.destroy({
			callback:function(record){
				if (cb) cb(record);
			}
		})
		
	},
	
	
	menuClick:function(item, EventObject, eOpts){
		
		Ext.ComponentQuery.query("viewport")[0].addCenterTab({
			id:"app_main",
			xtype:"app_main_grid"
		})
	}
	
});
}{
Ext.define('MPAGE.controller.Entity', {
	extend: 'Ext.app.Controller',
	views:[
		"EntityMainGrid"
	],
	init: function() {
		var controller = this;
		this.control({
			'entity_main_grid': {
				add_entity:function(event){
					var s =event.src.getStore() 
					s.add(new s.model({
						section_id:s.getProxy().extraParams.section_id
					}))
				},
				save_entity: function(event){
					this.saveEntity(event.model)
				},
				delete_entity: function(event){
					this.deleteEntity(event.model)
				},
			}
		});
	},
	saveEntity:function(model,cb){
		console.log("got here");
		model.save({
			callback:function(record){
				if (cb) cb(record);
			}
		})
	},
	deleteEntity:function(model,cb){
		model.destroy({
			callback:function(record){
				record.stores.forEach(function(store){
					store.remove(record)
				})
				if (cb) cb(record);
			}
		})
		
	}

});
}{
Ext.define('MPAGE.controller.Right', {
	extend: 'Ext.app.Controller',
	views:[
		"RightMainGrid"
	],
	init: function() {
		var controller = this;
		this.control({
			'viewport': {
				menu_right: this.menuClick
			},
			'right_main_grid': {
				add_right:function(event){
					var s =event.src.getStore() 
					s.add(new s.model())
				},
				save_right: function(event){
					this.saveRight(event.model)
				},
				delete_right: function(event){
					this.deleteRight(event.model)
				}
				
			}
		});
	},
	buildMatchingGroup:function(model){
		var groupStore = Ext.StoreMgr.get("Group")
		//this is defined in app.js
		var alias = model.get("alias");
		var groupIndex = groupStore.find("alias",alias);
		var c = this.getController("Group")
		if (groupIndex == -1){
			var group = new MPAGE.model.Group({
				alias:alias
			})
			group.dirty = true;
			c.saveGroup(group,function(){
				groupStore.add(group);
				C.infoMsg("Group {0} created.".format(alias))
			})
			
		} else {
			c.saveGroup(groupStore.getAt(groupIndex));
		}
		
	},
	saveRight:function(model,cb){
		var $this =this;
		model.save({
			callback:function(record){
				$this.buildMatchingGroup(model)
				if (cb) cb(record);
				
			}
		})
		
	},
	deleteRight:function(model,cb){
		model.destroy({
			callback:function(record){
				record.stores.forEach(function(store){
					store.remove(record)
				})
				if (cb) cb(record);
			}
		})
		
	},
	menuClick:function(){
		Ext.ComponentQuery.query("viewport")[0].addCenterTab({
			id:"right_main",
			xtype:"right_main_grid"
		})
	}
	
});
}{
/*jshint undef:false*/
Ext.define('MPAGE.controller.Group', {
	extend: 'Ext.app.Controller',
	requires:[
		"MPAGE.view.GroupMainGrid",
		"MPAGE.view.GroupForm"
	],
	init: function() {
		//var controller = this;
		this.control({
			'viewport': {
				menu_group: this.menuClick
			},
			'group_main_grid':{
				add_group:function(event){
					event.src.showEditForm()
				}
			},
			'group_main_grid > group_form':{
				beforegridload:function(fp,record){
					Ext.StoreMgr.get("ROSearch").getProxy().extraParams.pid =record.data.id
					var ms = Ext.StoreMgr.get("GroupMember");
					ms.getProxy().extraParams.pid =record.data.id
					ms.load()
				}
			},
			'group_form':{
				
				save_group: function(event){
					this.saveGroup(event.model,function(){
						C.infoMsg("Group '{alias}' saved".format(event.model.data))
					})
				},
				merge_group: function(event){
					event.src.el.mask("Merging members")
					this.mergeGroup(event.from,event.to,function(){
						event.src.down("*[itemId=ro_member_grid]").getStore().load({
							callback:function(){
								event.src.el.unmask();
							}
						})
					})
				},
				delete_group:function(event){
					event.src.form.close()
					this.deleteGroup(event.model,function(){
						C.infoMsg("Group '{alias}' removed".format(event.model.data))
					})
				},
				add_member:function(event){
					var store = Ext.StoreMgr.get("GroupMember")
					if (store.find("id",event.member.get("id") == -1)) {
						this.addMember(event.group,event.member,function(){
							store.add(event.member)
						})
					}
				},
				add_members:function(event){
					var store = Ext.StoreMgr.get("GroupMember")
					//if (store.find("id",event.member.get("id") == -1)) {
						C.infoMsg("Adding Group Members")
						this.addMembers(event.group,event.members,function(){
							
							store.load()
							event.grid.resetFilter();
						})
					//}
				},
				delete_member: function(event){
					this.deleteMember(event.model)
				}
			}
			
		});
	},
	buildMatchingPerm:function(model){
		var alias = model.get("alias");
		var permStore = Ext.StoreMgr.get("Perm");
		var rightStore = Ext.StoreMgr.get("Right");
		var rightIndex = rightStore.find("alias",alias);
		var c = this.getController("Perm")
		
		if (rightIndex != -1){
			var right = rightStore.getAt(rightIndex)
			var permIndex = permStore.findBy(function(r){
				return r.data.aro_id == model.data.id  && r.data.aco_id == right.data.id
			});
			if (permIndex == -1){
				var perm = new MPAGE.model.Perm({
					aro_id:model.data.id,
					aco_id:right.data.id
				})
			
				perm.dirty = true;
				c.savePerm(perm,function(){
					permStore.add(perm);
				})
				
			}	
		} 
	},
	mergeGroup:function(from,to,cb){
		var $this =  this;
		
		var sourceMembers = Ext.create("MPAGE.store.GroupMember",{
			extraParams:{
				pid:from.get("id")
			}
		})
		sourceMembers.load({
			callback:function(){
				univnm.jslib.async.marshal(
					//transform array of members into array of marshal functions
					sourceMembers.data.items.map(function(member){
						//transform "from" member into a new insert of this 
						//member under "to" group
						member.set({
							id:null,//will trigger lookup via natural key
							parent_id:to.get("id")//re-parent
						});
						//return marshal function that will add/update this member
						return function(done){
							member.save({
								callback:done//let marshal know this callback is complete
							})
						} 
					})
				).then(cb)//all saves are done now, call mergeGroup callback 
			}
		})
	},
	saveGroup:function(model,cb){
		var $this =  this;
		model.save({
			callback:function(record){
				$this.buildMatchingPerm(model);
				if (cb) cb(record);
			}
		})
		
	},
	deleteGroup:function(model,cb){
		model.destroy({
			callback:function(record){
				if (cb) cb(record);
			}
		})
	},
	addMember:function(group,member,cb){
		univnm.jslib.async.marshal(function(done){
			if(!group.get("id")){
				group.save({
					callback:done
				})	
			} else done();
		}).then(function(){
			member.set("parent_id",group.get("id"))
			member.save({
				callback:cb
			})
		})
		
	},
	addMembers:function(group,members,cb){
		univnm.jslib.async.sequence(
			function(done){
				if(!group.get("id")){
					group.save({
						callback:done
					})	
				} else done();
			},
			univnm.jslib.async.marshal(members.map(function (member) {
				return function (done) {
					member.set("parent_id",group.get("id"))
					member.save({callback:done})
				}
			}))
		).then(cb)
		
	},
	deleteMember:function(model,cb){
		model.destroy({
			callback:function(record){
				record.stores.forEach(function(store){
					store.remove(record)
				})
				if (cb) cb(record);
			}
		})
		
	},
	
	menuClick:function(item, EventObject, eOpts){
		Ext.ComponentQuery.query("viewport")[0].addCenterTab({
			id:"group_main",
			xtype:"group_main_grid"
		})
	}
	
});
}{
Ext.define('MPAGE.controller.Section', {
	extend: 'Ext.app.Controller',
	views:[
		"SectionMainGrid"
	],
	init: function() {
		var controller = this;
		this.control({
			'section_main_grid': {
				add_section:function(event){
					var s =event.src.getStore()
					s.add(new s.model({
						menu_id:s.getProxy().extraParams.menu_id
					}))
				},
				save_section: function(event){
					this.saveSection(event.model)
				},
				delete_section: function(event){
					this.deleteSection(event.model)
				},
				select:function(selModel, record, rowIndex,eOpts){
					this.loadRelated(record)
				}
			},
			'menu_details': {
				tabchange: function(tabpanel, newcard, oldcard) {
					this.loadRelated(newcard.record);
				}
			}
		});
	},
	loadRelated:function(model){
		var id = model?model.get("id"):0;
		var s =Ext.StoreMgr.get("Entity")
		s.getProxy().extraParams.section_id = id
		s.load();
	},
	saveSection:function(model,cb){
		model.save({
			callback:function(record){
				if (cb) cb(record);
			}
		})
	},
	deleteSection:function(model,cb){
		model.destroy({
			callback:function(record){
				record.stores.forEach(function(store){
					store.remove(record)
				})
				if (cb) cb(record);
			}
		})

	}

});
}{
Ext.define('MPAGE.controller.Perm', {
	extend: 'Ext.app.Controller',
	requires:[
		"MPAGE.view.PermMainGrid"
	],

	refs: [
		{
			selector: "perm_main_grid",
			ref: "grid"
		}
	],

	init: function() {
		var controller = this;
		this.control({
			'viewport': {
				menu_perm: this.menuClick
			},

			'perm_main_grid > group_form':{
				beforegridload:function(fp,record){
					if (record.data.aro_id) {
						MPAGE.model.Group.load(record.data.aro_id,{
							callback:function(group){
								Ext.StoreMgr.get("ROSearch").getProxy().extraParams.pid =record.data.aro_id
								var ms = Ext.StoreMgr.get("GroupMember");
								ms.getProxy().extraParams.pid =record.data.aro_id
								ms.load()
								fp.form.currentRecord = group;
								fp.form.loadRecord(group)
							}
						})
					} else {
						// return false;
						this.getGrid().down("panel[formPane=true]").hide();
					}
					/*  */

					return true;
				}
			},
			'perm_main_grid': {
				add_perm:function(event){
					var s =event.src.getStore()
					s.insert(0,new s.model())
				},
				save_perm: function(event){
					this.savePerm(event.model)
				},
				delete_perm: function(event){
					this.deletePerm(event.model)
				},
				select:function(selModel, record, rowIndex,eOpts){
					this.showEditForm(record);
					// this.loadRelated(record)
				}
			}
		});
	},
	savePerm:function(model,cb){
		model.save({
			callback:function(record){
				//TODO: create perm group and permissions entries
				if (cb) cb(record);
			}
		})
	},
	deletePerm:function(model,cb){
		model.destroy({
			callback:function(record){
				record.stores.forEach(function(store){
					store.remove(record)
				})
				if (cb) cb(record);
			}
		})

	},
	menuClick:function(){
		Ext.ComponentQuery.query("viewport")[0].addCenterTab({
			id:"perm_main",
			xtype:"perm_main_grid"
		})
	},

	showEditForm: function(record) {
		this.getGrid().showEditForm(record);
	}

});
}{
Ext.define('MPAGE.view.MenuMainPanel', {
	requires: ["MPAGE.view.MenuDetails"],
	extend: 'Ext.panel.Panel',
	alias:'widget.menu_main_panel',
	title:"Menus",
	iconCls:"icon_menu",
	layout:{
		type:"hbox",
		align:"stretch"
	},
	items:[
		{
			xtype:"menu_main_grid",
			flex:1,
			preventHeader: true

		},
		{
			xtype: "container",
			flex: 3,
			layout: {
				type: "vbox",
				align: "stretch"
			},
			items: [
				{
					xtype: "menu_details",
					flex: 1,
					padding: 20
				}
				// {
				// 	xtype:"section_main_grid",
				// 	flex:1

				// },
				// {
				// 	xtype:"entity_main_grid",
				// 	flex:1

				// }
			]
		}
	],
	listeners:{
		activate:function(panel){
			if (this.activated){
				//TODO: Find stores and reload them
			}
			this.activated = true;
		}
	},
	initComponent:function(config){

		this.callParent(arguments);
	}
})
}{
Ext.define('MPAGE.controller.Menu', {
	extend: 'Ext.app.Controller',
	views:[
		"MenuMainPanel",
		"MenuMainGrid"
	],
	init: function() {
		var controller = this;
		this.control({
			'viewport': {
				menu_menu: this.menuClick
			},
			'menu_main_grid': {
				add_menu:function(event){
					var s =event.src.getStore()
					s.add(new s.model())
				},
				save_menu: function(event){
					this.saveMenu(event.model)
				},
				delete_menu: function(event){
					this.deleteMenu(event.model)
				},
				select:function(selModel, record, rowIndex,eOpts){
					this.loadRelated(record)
				},
				edit_sections: function(event) {
					this.editSections(event.value);
				}
			}

		})
	},
	loadRelated:function(model){
		var id = model?model.get("id"):0;
		var s =Ext.StoreMgr.get("Section")
		s.getProxy().extraParams.menu_id = id
		s.load();
	},
	saveMenu:function(model,cb){
		var $this = this;
		model.save({
			callback:function(record){
				$this.loadRelated(record);
				if (cb) cb(record);
			}
		})
	},
	deleteMenu:function(model,cb){
		var $this = this;
		model.destroy({
			callback:function(record){
				$this.loadRelated(null);//clear selection
				record.stores.forEach(function(store){
					store.remove(record);
				})
				if (cb) cb(record);
			}
		})

	},

	menuClick:function(){
		Ext.ComponentQuery.query("viewport")[0].addCenterTab({
			id:"menu_main",
			xtype:"menu_main_panel"
		})
	},

	editSections: function(record) {
		this.loadRelated(record);
		var w = Ext.create("Ext.window.Window", {
			title: "Edit Sections",
			modal: true,
			width: 500,
			height: 300,
			layout: "fit",
			items: [
				{
					xtype: "section_main_grid",
					flex: 1,
					preventHeader: true
				}
			]
		});
		w.on({
			"destroy": function() {
				this.loadRelated(record);
			},
			scope: this
		})
		w.show();
	}
});
}{
/* Topic: MPage Core 
	Core functions for URL based MPages...
	
	This file will declare a global "inMpage" boolean variable that will be true 
	if running inside of powerchart. This is indicated by passing "mpage=true" 
	in the URl. If running on an MPage then the followinf Powerchart functions 
	are defined:
		
		* XMLCclRequest
		* APPLINK
		* MPAGES_EVENT
		* CCLLINK
		* CCLLINKPOPUP
		* CCLNEWPOPUPWINDOW
		
*/
/* Topic: License 
	The MIT License
	
	Copyright (c) 2010 University of New Mexico Hospitals 
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/



/* Property: inMpage 
	are we in an MPage?

	true if:
	* previously set to true	
	* mpage=true appears in the URL 
	* "DiscernObjectFactory" in window.external
*/
if (inMpage === undefined){
	var inMpage = "DiscernObjectFactory" in window.external;
	if (/[\?|&]mpage=true/i.test(location.search.replace(/%26/g,"&"))){
		inMpage = true;
	}
}

if (inMpage){
	window._handleLargeData = function(value){
		if (!document.getElementById("__ID_CCLPostParams_7253__")){
			var el=document.createElement('<input id="__ID_CCLPostParams_7253__" />')
			//el.style.display="none";
			document.body.appendChild(el);
		}
		document.getElementById("__ID_CCLPostParams_7253__").value = value;
		return value.substring(0,2000)
	}
	
	window.APPLINK__ = function(){}
	window.APPLINK = function ( mode, appname, param ){
		param = _handleLargeData(param);
		location.href="javascript:APPLINK__(" + mode + ",\"" + appname + "\",\"" + param + "\"," + param.length +")"
	}
	
	window.CCLLINK__ = function(){}
	window.CCLLINK = function ( program, param, nViewerType ){
		param = _handleLargeData(param);
		location.href = "javascript:CCLLINK__(\""+program +"\",\""+param+"\","+nViewerType+","+param.length+")";
	}
	
	window.MPAGES_EVENT__ = function(){}
	window.MPAGES_EVENT = function ( eventType, eventParams ){
		eventParams = _handleLargeData(eventParams);
		location.href = "javascript:MPAGES_EVENT__(\"" + eventType + "\",\"" + eventParams + "\"," + eventParams.length +")";
	}
	
	window.CCLEVENT__=function(){}
	window.CCLEVENT = function( eventId, eventData ){
		_handleLargeData(eventData);
		location.href ="javascript:CCLEVENT__(\"" + eventId + "\")";
	}


	window.CCLLINKPOPUP__ = function(){}
	window.CCLLINKPOPUP = function ( program, param, sName, sFeatures, bReplace ){
		param = _handleLargeData(param);
		location.href = "javascript:CCLLINKPOPUP__(\"" + program + "\",\"" + param + "\",\"" + sName + "\",\"" + sFeatures + "\"," + bReplace + "," + param.length +")"; 
	}
	
	window.popupWindowHandle=null;
	window.getPopupWindowHandle = function() {
		return popupWindowHandle;
	}
	
	window.CCLNEWPOPUPWINDOW = function (sUrl,sName,sFeatures,bReplace){
		popupWindowHandle = window.open(sUrl,sName,sFeatures,bReplace);
		popupWindowHandle.focus();
	}
	
	/*
	* XMLCclRequest JavaScript Library v1.0.0
	*
	* based on contributions from Joshua Faulkenberry
	* Lucile Packard Children's Hospital at Stanford
	*
	* Date: 2009-04-9
	* Revision: 1
	*/
		window.XMLCclRequest = function(options) {
			/* *********** Attributes *************/
				this.onreadystatechange = function() {
					return null;
				};
				this.options = options || {};
				this.readyState = 0;
				this.responseText = ""; 
				this.status = 0;
				this.statusText = ""; 
				this.sendFlag = false; 
				this.errorFlag = false; 
				this.responseBody = 
				this.responseXML = 
				this.async = true;
				this.requestBinding = null;
				this.requestText = null;
				
			/* ************* Events ***************/
				//Raised when there is an error.
				this.onerror = 
				
			/* ************* Methods **************/ 
				//Cancels the current CCL request.
				this.abort = 
				
				//Returns the complete list of response headers.
				this.getAllResponseHeaders = 
				
				//Returns the specified response header.
				this.getResponseHeader = function() {
					return null;
				};
				
				//Assigns method, destination URL, and other optional attributes of a pending request.
				this.open = function(method, url, async) {
					if (method.toLowerCase() != "get" && method.toLowerCase() != "post") {
						this.errorFlag = true;
						this.status = 405;
						this.statusText = "Method not Allowed";
						return false;
					}
					this.method = method.toUpperCase();
					this.url = url;
					this.async = async!=null?(async?true:false):true;
					this.requestHeaders = null;
					this.responseText = "";
					this.responseBody = this.responseXML = null;
					this.readyState = 1;
					this.sendFlag = false;
					this.requestText = "";
					this.onreadystatechange();
				};
				
				//Sends a CCL request to the server and receives a response.
				this.send = function(param) {
					if (this.readyState != 1) {
						this.errorFlag = true;
						this.status = 409;
						this.statusText = "Invalid State";
						return false;
					}
					if (this.sendFlag) {
						this.errorFlag = true;
						this.status = 409;
						this.statusText = "Invalid State";
						return false;
					}
					this.sendFlag = true;
					this.requestLen = param.length;
					this.requestText = param;
					var uniqueId = this.url + "-" + (new Date()).getTime() + "-" + Math.floor(Math.random() * 99999);
					top.XMLCCLREQUESTOBJECTPOINTER[uniqueId] = this;
					 
					location.href= "javascript:XMLCCLREQUEST_Send(\"" + uniqueId + "\")";
					//var el = document.getElementById("__ID_CCLLINKHref_7443__");
				};
				
				//Adds custom HTTP headers to the request.
				this.setRequestHeader = function(name, value) {
					if (this.readyState != 1) {
						this.errorFlag = true;
						this.status = 409;
						this.statusText = "Invalid State";
						return false;
					}
					if (this.sendFlag) {
						this.errorFlag = true;
						this.status = 409;
						this.statusText = "Invalid State";
						return false;
					}
					if (!value) { return false; }
					if (!this.requestHeaders) {
						this.requestHeaders = [];
					}
					this.requestHeaders[name] = value;
				};
		}
		if (!top.XMLCCLREQUESTOBJECTPOINTER){
			top.XMLCCLREQUESTOBJECTPOINTER = [];
		}
		window.evaluate = function evaluate(x)
		{
			try{
				return eval(x.replace(/XMLCCLREQUESTOBJECTPOINTER/g,"top.XMLCCLREQUESTOBJECTPOINTER"))
			} catch(e){
				return 
			}
		}
	
	
} else {
	window.APPLINK = function (mode, appname, param ){
		alert([
			"called APPLINK:",
			"\tmode: " + mode,
			"\tappname: " + appname,
			"\tparam: " + param
		].join("\n"))
	}
	window.CCLLINK= function (program, param, nViewerType ){
		alert([
			"called CCLLINK:",
			"\tprogram: " + program,
			"\tparam: " + param,
			"\tnViewerType: " + nViewerType
		].join("\n"))
	}
	window.MPAGES_EVENT = function ( eventType, eventParams ){
		alert([
			"called MPAGES_EVENT:",
			"\teventType: " + eventType,
			"\teventParams: " + eventParams
		].join("\n"))
	}
	/* window.XMLCclRequest = function(options) {
		alert([
			"called XMLCclRequest"
		].join("\n"))
		return {}
	} */
	window.CCLLINKPOPUP = function ( program, param, sName, sFeatures, bReplace ){
		alert([
			"called CCLLINKPOPUP:",
			"\tprogram: " + program,
			"\tparam: " + param,
			"\tsName: " + sName,
			"\tsFeatures: " + sFeatures,
			"\tbReplace: " + bReplace
		].join("\n"))
	}
}
}{

}{
univnm.controller_shared=true;
Ext.Loader.setConfig({enabled:true});
Ext.Loader.setPath("univnm", "../univnm");
/*  */
/* Topic: Dependencies
	JS library dependencies

	Application Dependencies:
	* <menu>	For application name lookup
	* <deity>	ACL application (for permissions checks, and masquerading)


	JS Dependencies:
	* <univnm.jslib>
	* <univnm.ext.Notification>
	* <univnm.db>
	* <univnm.ext.QueryStore> and dependencies


*/

/* Topic: License
	The MIT License

	Copyright (c) 2012 University of New Mexico Hospitals

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/
/* Class: C
	Global Object that holds information about this application and useful functions

	This is the base UI frame for all mpages.

	Features:
	* error console
	* debug console
	* automatic ACL(permissions) access test
	* stats access logging
	* runtime ACL checks
	* Profiler log
	* ccl callback log
	* PowerChart compatible console.log/error/debug
	* Display of current user, patient id, encounter id, server node, and server number
	* keyboard code to masquerade as another user or launch the permissions
		editor (controlled by ACL)

	Detail:

	This should be loaded before any controllers, views, stores, etc
	To properly init your application, you app name must be MPAGE and you must
	include C.controllers in your controllers definition:

	(code)
		Ext.application({
			name: 'MPAGE',
			controllers:C.controllers.concat([
				"MyExtraController",
				"MyOtherController"
			])
		});

	(end)

	See <C.controllers> for an example of using C.controllers in you controller
	definitions

*/
Ext.ns("C");
Ext.apply(C, {
/* Property: C.errorUrl
	url to post error reports to.
	*/
	errorUrl:"http://trogdor.health.unm.edu/main/apps/mpages/mpage_error_report.cfm",
/* Property: C.controllers
	Array of controller names to add to the application definition.

	example:
	(code)
		C.controllers.push("Perm")
		Ext.define('MPAGE.controller.Perm', {
			extend: 'Ext.app.Controller',
			...
		})
		...
		Ext.application({
			name: 'MPAGE',
			controllers:C.controllers,
			...
		})
	(end)



	*/
	controllers:[],

/* Property: C.frameClass
	Class used by Ext for frame backgrounds

	This is useful for nested panels to have a matching background to
	framed parents

	Example:
	(code)
		frame:true,
		items:[{
			region:"north",
			height:125,
			bodyCls:C.frameClass,
		...
	(end)

	*/
	frameClass:"x-panel-body-default-framed",

/* Function: C.about
		Displays the "about" screen. This is the same window triggered by
		clicking the "help" tool

		Parameters:
			errorText		-	*Optional*
								If defined, this text will be displayed in an
								"error" tab

	*/
	about:function(errorText){
		Ext.widget("controller_about",{
			errorText:errorText
		});

	}
});

/* Function: C.infoMsg
	displays an informational message in a "growl" like pop-up window

	Parameters:
		template	-	Text to display. Numbered replacement variables
						"{0},{1}...{n}" will be replaced with any following
						parameters

	Example:
	(code)
		C.infoMsg("Comment Saved");
		C.infoMsg("User '{0}' not found in system",input.value);

	(end)
	*/
	C.infoMsg= function(template/*,replacement 1,replacement 2,... */){
		var s = Ext.String.format.apply(String, Array.prototype.slice.call(arguments, 0));
		Ext.create('widget.uxNotification', {
			title: 'Notification',
			corner: 'tr',
			//stickOnClick: false,
			manager: 'center_tabs',
			iconCls: 'ux-notification-icon-information',
			slideInDuration: 800,
			//closable:false,
			slideBackDuration: 1500,
			slideInAnimation: 'elasticIn',
			slideBackAnimation: 'elasticIn',
			cls: 'ux-notification-light',
			html: s
		}).show();
	};
/* Function: C.loadValues
	loads values fro this applicaiton from cust_values

	Parameters:
		callback	-	Function.
						*Optional, default null*
						if defined, causes this load to be asynchronous, and
						this callback will be called when C.values is populated

	Detail:
		loads values associated with this application and the current user into
		C.values. Normally a synchronous call, if _callback_ is passed
		loadValues is called asynchronously and _callback_ is called when values
		are loaded.

		If values have already been loaded, this function will return immediately

	See:
		* <C.options.loadValues>
		* <C.saveValue>
		* <C.deleteValues>


	*/
	C.loadValues=function(callback){
		console.error("Deprecated - call C.Settings.load() instead");
		C.Settings.load();
		if (typeof callback == "function") return callback();
	};
/* Function: C.saveValue
	Saves a value to cust_values
		Parameters:
			key			-	String key
			value		-	value (Object, Array, Number, Date or String) to save.
							Complex objects will be JSON encoded in the database
			callback	-	Function. If set, the save is async and this
							function is called when complete.
	*/
	C.saveValue = function(key, value, callback){
		console.error("Deprecated - call C.Settings.app.set() instead");
		if (key.listLen(".") > 1 && key.listFirst(".") == univnm.user_id){
			return C.saveUserValue(key.listAfter("."),value,callback);
		}
		C.Settings.app.set(key,value);
		if (typeof callback == "function") return callback();
	};
/* Function: C.saveUserValue
	Saves a value to cust_values, specific to the current user, these values
	will only be loaded again for this user.

		Parameters:
			key			-	String key
			value		-	value (Object, Array, Number, Date or String) to save.
							Complex objects will be JSON encoded in the database
			callback	-	Function. If set, the save is async and this
							function is called when complete.
	*/
	C.saveUserValue = function(key, value, callback){
		console.error("Deprecated - call C.Settings.user.set() instead");
		C.Settings.user.set(key,value);
		if (typeof callback == "function") return callback();
	};
/* Function: C.deleteValue
	Deletes a specific key from cust_values for the current application

	Parameters:
		key			-	key to remove
		callback	-	if defined, the delete is async and this function
						is executed when value is removed
	*/
	C.deleteValue=function(key,callback){
		console.error("Deprecated - call C.Settings.app.remove() instead");
		C.Settings.app.remove(key);
		if (typeof callback == "function") return callback();
	};
/* Function: C.deleteUserValue
	Deletes a specific key from cust_values for the current application and user

	Parameters:
		key			-	key to remove
		callback	-	if defined, the delete is async and this function
						is executed when value is removed
	*/
	C.deleteUserValue=function(key,callback){
		console.error("Deprecated - call C.Settings.user.remove() instead");
		C.Settings.app.remove(key);
		if (typeof callback == "function") return callback();
	};
/* Function: C.deleteUserValues
	Deletes all user values for the current user, normally called by the "reset"
	button in the "about" window

	Parameters:
		callback	-	optional callback function that is executed when values
						are removed
	*/
	C.deleteUserValues=function(callback){
		console.error("Deprecated - call C.Settings.user.resetAll() instead");
		return C.Settings.user.resetAll(callback);
	};
/* Function: C.showWin
	Opens a large centered window with the supplied config

	Parameters:
		title	-	title of the window
		config	-	Ext config object for window content
		modal	-	Boolean.
					*Optional, default false*
					Should the window be modal?
	*/
	C.showWin=function(title,config,modal){
		var body = Ext.get(document.body);
		var win=new Ext.Window({
			title:title,
			width:Math.min(body.getWidth(1)-100,800),
			height:body.getHeight(1)-100,
			closeable:true,
			maximizable:true,
			modal:modal,
			layout:"fit",

			items:[config]
		});
		win.show();
	};
/* Function: C.showWinText
	Opens a large centered window with the supplied plain text content

	Parameters:
		title	-	title of the window
		text	-	plain text to display
		modal	-	Boolean.
					*Optional, default false*
					Should the window be modal?
	*/
	C.showWinText=function(title,text,modal){
		var body = Ext.get(document.body);
		C.showWin(title,{
			autoScroll:true,
			width:Math.min(body.getWidth(1)-100,800),
			height:body.getHeight(1)-100,
			closeable:true,
			maximizable:true,
			modal:modal,
			xtype:"textarea",
			value:text
		});

	};
/* Function: C.showWinHtml
	Opens a large centered window with the supplied html content

	Parameters:
		title	-	title of the window
		html	-	html to display
		modal	-	Boolean.
					*Optional, default false*
					Should the window be modal?
	*/
	C.showWinHtml=function(title,html){
		C.showWin(title,{
			autoScroll:true,
			title:title,
			width:Math.min(body.getWidth(1)-100,800),
			height:body.getHeight(1)-100,
			closeable:true,
			maximizable:true,
			modal:modal,
			html:html
		});

	};
/* ---------------- isEmpty ------------------------------------------------- */
	C.isEmpty=function(obj){
		for(var prop in obj) {
		if(obj.hasOwnProperty(prop))
			return false;
		}
		return true;
	};
/* ---------------- stupid xtype fix ---------------------------------------- */
	Ext.ClassManager.instantiateByAlias=function() {
		var alias = arguments[0],
			args = Array.parse(arguments),
			className = this.getNameByAlias(alias);

		if (!className) {
			className = this.maps.aliasToName[alias];
			if (!className) {
				C.console.log(args[1],"Config Object");
				throw new Error("Unknown xtype: " + alias);
			}


			Ext.syncRequire(className);
		}

		args[0] = className;

		return this.instantiate.apply(this, args);
	};
/* ---------------- hack for loadMasks -------------------------------------- */
	if ((Ext.versions.core.major == 4 && Ext.versions.core.minor > 0) || (Ext.versions.core.major > 4)) {
		Ext.override(Ext.view.AbstractView, {
			onRender: function()
			{
				var me = this;
				this.callOverridden();

				if (me.loadMask && Ext.isObject(me.store)) {
					me.setMaskBind(me.store);
				}
			}
		});
	}
/* ---------------- redirect to external login is configured ---------------- */
	if (
		$env.mpageType == "external" &&
			$env.loginUrl &&
			!jaaulde.utils.cookies.get("CAC_"+$env.domain)
	){
	var url = $env.loginUrl + "?domain={0}&callback={1}&appname={2}".format(
			$env.domain,
			encodeURIComponent(location.href)
		);

		//debugger;
		location.href=url;
	}

/* =================== Classes ============================================== */
	/* ----------- C.AdminView ---------------------------------------------- */
		Ext.define('C.AdminView' ,{
			extend: 'Ext.window.Window',
			alias: 'widget.admin_view',

			title:"Admin View",
			modal:true,
			autoShow:true,

			items:[{
				frame:true,
				items:[{
					xtype: 'combobox',
					width:300,
					triggerAction: 'all',
					allQuery:"__FAIL__",
					fieldLabel:"Re-login as",
					store: {
						//storeId:"admin_view_masq",
						//autoLoad:true,
						proxy:{
							type:"query",
							sql:[
								'select ',
									'person_id user_id,',
									'name_full_formatted alias',
								'from prsnl p',
								'where 1=1',
									'<tpl if="query"> ',
										'and (',
											'p.name_last_key like upper(\'{query}%\')',
											'or ',
											'p.name_first_key like upper(\'{query}%\')',
										')',
									'</tpl>',
									'and active_ind = 1',
								'order by 2',
							''].join("\n")
						},
						pageSize:10000,
						remoteSort:false
					},
					displayField:'alias',
					valueField:'user_id',
					triggerCls:"x-form-search-trigger",
					minChars:1,
					lazyRender: true,
					listClass: 'x-combo-list-small',
					listeners:{
						select:function(combo,recArray){
							var user_id = recArray.first().get("user_id");
							var url =location.href;
							this.up("window").close();
							location.href = url.listBefore("?")+"?" +
								(url.listAfter("?").replace(/&?user_id=\d+/g,"")||"d=0") +
								"&user_id=" + user_id;

						}
					}
				}],
				buttons:[{
					xtype:"button",
					text:"Launch MPage Permissions...",
					handler:function(){
						this.up("window").close();
						location.href="../deity/index.html";

					}
				}]
			}],
			listeners:{

			},
			initComponent:function(){
				this.callParent(arguments);
			}
		});
	/* ----------- univnm.ext.CCLProvider ----------------------------------- */
		Ext.define('univnm.ext.CCLProvider', {
			extend: 'Ext.state.Provider',

			constructor: function(config){
				var me = this;
				me.app_name = 'general';
				me.callParent(arguments);
				me.state = me.readState();
			},

			// private
			set: function(name, value){
				var me = this;
				if(typeof value == "undefined" || value === null){
					me.clear(name);
					return;
				}
				me.setState(name, value);
				me.callParent(arguments);
			},

			// private
			clear: function(name){
				this.clearState(name);
				this.callParent(arguments);
			},

			// private
			readState: function(){
				return C.values;
				//return(C.values_mine);
				/* var me = this;
				var values = C.values;

				var my_id = ''+univnm.user_id+'.';
				var defaultValues = {};
				var values_mine = values.filter(function(element, index, array){
					if(element.key.match(my_id) !== -1){
						var key_cleaned = element.key.replace(my_id, '');

						defaultValues[key_cleaned] = element.value;
						return(true);
					}
					return(false);
				});
				return defaultValues; */
			},

			// private
			setState: function(name, value){
				C.Settings.user.set(name, value);
			},

			// private
			clearState: function(name){
				C.Settings.user.remove(name);
			}
		});
	/* ----------- MPAGE.controllers.ControllerInit ------------------------- */
		C.controllers.push("MPAGE.controller.ControllerInit");
		Ext.define('MPAGE.controller.ControllerInit', {
			extend: 'Ext.app.Controller',
			requires:[
				"univnm.db",
				"univnm.ext.QueryStore",
				"univnm.ext.SupaGrid",
				"univnm.ext.Notification"

			],
			init: function() {
				this.control({
					'viewport':{
						afterrender:function(viewport){
							var mp = viewport.down("panel");
							var title = C.options.displayName;
							if (!C.options.suppressTitle){
								if ($env.purpose.toUpperCase() != 'PROD'){
									title += ' <span style="width:97%;font-size:1.3em;background-color:red;margin-left:10px; color:white; text-align:center; font-weight:bold;padding:4px;">TESTING: This information for non-clinical use ONLY</span>';
								}
								mp.setTitle(title);
								mp.updateHeader();

								C.tools.forEach(function(tool){
									// if (mp.header.items.length <= 1){
										mp.header.items.add(new Ext.panel.Tool(tool));
									// }
								});


								mp.ownerCt.doLayout();
							}
							if (Ext.Loader && Ext.Loader.history.length && $env.compilerUrl){
								window.setTimeout(function(){
									var url = $env.compilerUrl +
									"/main/build_dependencies/{name}?list={list}&paths={paths}".format({
										name:C.options.appname,
										list:Ext.Loader.history.join(),
										paths:univnm.jslib.jsonEncode(Ext.Loader.config.paths)
									});
									univnm.jslib.loadScript(url);
								});

							}
							C.Settings.fireQueuedEvents();
						},
						controller_about:function(event){
							C.about();
						}
					}
				});
			}



		});
	/* ----------- MPAGE.controllers.Test ----------------------------------- */
		C.controllers.push("MPAGE.controller.Test");
		Ext.define("MPAGE.controller.Test", {
			extend: "Ext.app.Controller",
			firstRun: true,

			init: function(app) {
				var $this = this;
				app.on("test", function() {
					$this.testApp(app.name);
				});
				this.control({
					"controller_about": {
						run_tests: this.runtests_click
					}
				});

			},

			runtests_click: function(b) {
				this.application.fireEvent("test");
			},

			defineInsanity: function() {

				this.firstRun = true;
			},

			testApp: function(appName) {
				var ctModules = 0, completeModules = 0;
				var app_total = 0, app_passed = 0;
				var failed = false;
				var me = this;

				if (!this.firstRun) return this.defineInsanity();
				this.firstRun = false;

				var store = Ext.create("Ext.data.Store", {
					fields: [
						"class",
						"name",
						"passed",
						"message",
						"stack"
					],
					groupField: "class"
				});
				var handler = function(controller) {
					var done = $profiler.status("Testing " + controller.$className);
					var callback = function(className, total, passed, results) {
						completeModules++;
						app_total += total;
						app_passed += passed;

						for (var r in results) {
							store.add({
								"class": className,
								name: r,
								passed: results[r].ok,
								message: results[r].message,
								stack: results[r].stack
							});
						}
						if (completeModules == ctModules) {
							/* show results */
								var failures = store.data.items.reduce(function(outV, record) {
									if (!record.data.passed) {
										outV.push(record.get("class"));
									}
									return outV;
								}, []).getUnique();
								var testPane = Ext.ComponentQuery.query("controller_about  *[itemId=test_pane]").first();
								testPane.removeAll();
								testPane.add({
									xtype: "grid",
									features: [{ftype:'grouping'}],
									left: 0,
									top: 0,
									tbar: [{
										xtype: "toolbar",
										items: [{
											xtype: "tbtext",
											text: app_passed + " passed of " + app_total + " attempted"
										}]
									}],
									columns: [
										{
											header: "Test Name",
											dataIndex: "name",
											flex: 2
										},
										{
											header: "Passed",
											dataIndex: "passed",
											flex: 1
										},
										{
											header: "Message",
											dataIndex: "message",
											flex: 3
										}
									],
									store: store,
									listeners: {
										itemdblclick: function (grid, record) {
											if (record.get("stack"))
												Ext.Msg.alert(record.get("message"), record.get("stack"));
										}
									}
								});


								setTimeout(function() {
									var grouping = testPane.down("grid").view.features.reduce(function(expectedFeature, feature) {
										if (feature.ftype == "grouping") return feature; else return expectedFeature;
									}, null);
									if (!grouping) return;
									grouping.collapseAll();
									failures.forEach(function(group) {
										grouping.expand(group);
									});
								});

						}
						done();
					};

					me.doUnitTests(controller, callback);
				};

				var modules = univnm.ObjectLib.getProperties(Ext.ClassManager.classes);
				ctModules = modules.length;
				modules.forEach(function(klass) {
					var c = klass.split(".").reduce(function(object, property) {
						return object[property];
					}, window);
					if (c && c.prototype && c.prototype.$className && c.prototype.tests) {
						handler.call(this, c.prototype);
					} else {
						ctModules--;
					}
				}, this);
			},

			doUnitTests: function(classdef, callback) {
				var totalTests = ("tests" in classdef)? Object.keys(classdef.tests).length: 1,
					completedTests = 0,
					results = {},
					passedTests = 0,
					subject = "",
					recorder = function(key, unitOk, message, stack) {
						completedTests++;
						results[key] = { ok: unitOk, message: message, stack: stack };
						passedTests += unitOk? 1: 0;
						if (completedTests == totalTests) {
							callback(classdef.$className, totalTests, passedTests, results);
						}
					},
					tester = function(obj, method, key) {
						try {
							var caution = setTimeout(function() {
								if (obj.id) {
									C.infoMsg("I've flipped the hourglass of truth more than once since " + key + " has been running on " + obj.id);
								} else {
									C.infoMsg("I've flipped the hourglass of truth more than once since " + key + " started running on " + obj.$className);
								}
							}, 30000);
							var f = method.call(obj, function(unitOk, message) {
								recorder(key, unitOk, message);
								clearTimeout(caution);
							});
							if (typeof f != "undefined") {
								clearTimeout(caution);
								recorder(key, f, "Callback to pass message");
							}
						} catch (e) {
							recorder(key, false, e.message, e.stack);
						}
					},
					instances = [];

				if (!("tests" in classdef) || Object.keys(classdef.tests).length === 0) {
					return callback(classdef.$className, 0, 0, {});
				}
				var tests = classdef.tests, key;
				for (key in tests) {
					subject = tests[key];
					if (typeof subject == "function") {
						tester(Ext.create(classdef.$className, {}), tests[key], key);
					} else if (typeof subject == "object") {
						if (!("fn" in subject)) {
							recorder(key, false, "`fn` must be defined in complex unit tests");
							continue;
						}
						switch (subject.source) {
							case "query":
								instances = Ext.ComponentQuery.query(subject.query);
								if (instances.length === 0) {
									// if no matching elements, result is defined by the emptyOk setting
									recorder(key, "emptyOk" in subject);
								} else {
									// increase totalTests by the matching number of elements minus the
									// automatic test we got by counting # of tests above
									totalTests += (instances.length-1);
									instances.forEach(function(el) {
										tester(el, subject.fn, key + ": " + el.id);
									});
								}
								break;
							case "singleton":
								if (!("alias" in subject)) {
									recorder(key, false, "`alias` must be defined for singleton tests");
									continue;
								}
								if (classdef instanceof Ext.data.Store) {
									instances = Ext.data.StoreManager.get(subject.alias);
								} else if (classdef instanceof Ext.data.Model) {
									instances = Ext.data.ModelManager.get(subject.alias);
								} else if (classdef instanceof Ext.app.Controller) {
									instances = this.get(subject.alias);
								} else {
									throw("Don't know how to get a singleton for `" + obj.$className + "` object ");
								}
								tester(instances, subject.fn, key);
								break;
							case "this":
								tester(Ext.create(classdef.$className, {}), subject.fn, key);
								break;
						}
					}
				}
			}
		});
	/* ----------- C.ControllerAbout ---------------------------------------- */
		Ext.define('C.ControllerAbout', {
			extend: 'Ext.window.Window',
			alias:'widget.controller_about',
			statics:{
				loading:false
			},
			constructor:function(config){
				if (C.ControllerAbout.loading) return;
				C.ControllerAbout.loading=true;
				var name=C.options?C.options.displayName||C.options.appname||"":"";
				var body = Ext.get(document.body);
				var isDBA = !!C.localMode||univnm.db.query([
					'Select',
						'code_value,',
						'display',
					'From',
						'code_value cv join prsnl p on (',
							'p.position_cd = cv.code_value',
						')',
					'Where',
						'1=1',
						'and code_set= 88',
						'and cv.active_ind= 1',
						'and display=\'DBA\'',
						'and p.person_id = {user_id} ',
				''],univnm).length;
				var tb;
				Ext.applyIf(config,{
					title:name +", version " + ($env.version||""),
					autoShow:true,
					layout:"fit",
					modal:true,
					width:Math.min(body.getWidth(1)-100,800),
					height:body.getHeight(1)-100,
					closeable:true,
					maximizable:true,
					items:[{
						xtype:"tabpanel",
						activeTab:0,
						//stateful: false,
						items:tb=[{//tab "reset"
							title:"Reset",
							layout:"anchor",
							frame:"true",
							items:[{
								xtype:"button",
								text:"RESET all of my CUSTOM SETTINGS for this Application ",
								handler: function(){
									C.Settings.user.resetAll(function(){
										alert("User settings reset. Click OK to reload MPage.");
										location.href=location.href;
									});
								}
							}]
						}]
					}]
				});


				tb.unshift({//tab Debugging
					title:"Debugging",
					//xtype:"form",
					frame:"true",
					layout:"border",
					//stateful: false,
					items:[{//north - variables
						region:"north",
						height:125,
						//bodyStyle:"padding:10px;",
						bodyCls:C.frameClass,
						layout:{
							type:"hbox",
							align:"stretch",
							defaultMargins:{left:2,right:2,top:2,bottom:2}
						},
						defaults:{
							//layout:"form",
							frame:true,

							//bodyCls:C.frameClass,
							border:false,
							autoScroll:true,
							defaults:{

								labelStyle:"font-weight:bold"
							},
							flex:1
							//columnWidth:.333
						},

						items:[{
							items:[{
								xtype:"displayfield",
								fieldLabel:"User",
								//labelAlign:"top",
								width:240,
								value:univnm.full_name + " (" +univnm.user_id+")"
							},{
								xtype:"displayfield",
								fieldLabel:"Patient ID",
								value:univnm.patient_id
							},{
								xtype:"displayfield",
								fieldLabel:"Encounter ID",
								value:univnm.encounter_id
							}]
						},{
							items:[{
								xtype:"displayfield",
								fieldLabel:"Script User",
								value:univnm.cur_user
							},{
								xtype:"displayfield",
								fieldLabel:"Script Node",
								value:univnm.cur_node
							},{
								xtype:"displayfield",
								fieldLabel:"Server Number",
								value:univnm.cur_server
							}]
						},{
							items:[{
								xtype:"displayfield",
								fieldLabel:"$env.purpose",
								value:$env.purpose
							},{
								xtype:"displayfield",
								fieldLabel:"$env.baseUrl",
								value:$env.baseUrl
							},{
								xtype:"displayfield",
								fieldLabel:"$env.cclMask",
								value:$env.cclMask
							}]
						}],
						tbar:[{
							xtype:"label",
							text:"URL: " +window.location.pathname + window.location.search
						}]
					},{//center - grid tabs
						region:"center",
						border:true,
						plain:true,
						xtype:"tabpanel",
						activeTab: 1,
						//stateful: false,
						items:[{//callbacks
							title:"Callbacks",
							xtype:"supagrid",
							filterMode:"local",
							filterSuppressTitle:true,
							stripeRows:true,
							store: Ext.create('Ext.data.Store',{
								storeId:"CONTROLLER_CALLBACK_GRID",
								data:univnm.jslib.ccl_callback.history,
								aurtoLoad:true,
								proxy:{
									type:"memory",
									reader: {
										type:"json",
										id: "id"
									}
								},
								fields:[
									{name:"id"},
									{name:"ccl"},
									{name:"params"},
									{name:"responseText"},
									{name:"xhr"},
									{name:"options"},
									{name:"started"},
									{name:"ended"},
									{name:"elapsed"}

								],
								remoteSort: false
							}),
							columns:[
								{header: "ID", width:30,  dataIndex: 'id', sortable: true, filterable:true},
								{header: "Script", width:150,  dataIndex: 'ccl', sortable: false, flex:1, filterable:true},
								{header: "Parameters", width:200,dataIndex: 'params', sortable: false, flex:2,filterable:true},
								{header: "Status", width:100, dataIndex: 'xhr', sortable: false,renderer:function(val){
									return val.status +" " + val.statusText;
								}},
								{header: "Started", dataIndex: 'started', renderer:function(v){return v.format("H:i:s");}},
								{header: "Time", dataIndex: 'elapsed',
									renderer:function(v){
										return Date.formatInterval(v,{
											scale:2,
											sep:" ",
											style:"short"
										});
									}
								}
							],
							loadMask: true,
							listeners: {
								beforerender:function(){

								},
								cellclick:function(
								/* Ext.grid.View		*/	view,
								/* HTMLElement			*/	cell,
								/* Number				*/	cellIndex,
								/* Ext.data.Mode		*/	record,
								/* HTMLElement			*/	row,
								/* Number				*/	rowIndex,
								/* Ext.EventObject		*/	e
								){
									var col =view.headerCt.gridDataColumns[cellIndex];
									var value = record.get(col.dataIndex);
									var items=[];
									var table="";
									try{
										var r = JSON.parse(record.get("xhr").responseText);
										r= r[0].data?
											univnm.jslib.fixCclJson(r[0].data)
											: r;
										table = r.toDataSet().toHtmlTable();
										if (r.length){
											items.push({
												title:"HTML Response",
												xtype:"panel",
												html:table
											});
										}
									} catch (e){
										items.push({
											title:"HTML Response",
											xtype:"panel",
											html:record.get("xhr").responseText
										});
									}
									var sql;

									items.push({
										title:"Raw Response",
										xtype:"textarea",
										value:record.get("xhr").responseText
									});
									items.push({
										title:"Params",
										xtype:"textarea",
										value:record.get("params")
									});
									items.push({
										title:"XHR",
										html:(function(){
											try{
											return $O(record.get("xhr")).toArray().toDataSet().toHtmlTable();
											}catch(e){
												return "Error reading XHR";
											}
										})()
									});
									try{
										var options =record.get("options");
										if (!options.sql && /runsql/.test(options.parameters)){

											sql = String(options.parameters)
												.replace(/__CARET__/g,"^")
												.match(/runsql.*~.(.*?).$/)[1]
												.replace(/__DQUOTE__/g,'"')
												.replace(/CCL_DIRECT_PIPE/g,"|")
												.replace(/CCL_DIRECT_TILDE/g,"~");
											items.push({
												title:"SQL",
												xtype:"textarea",
												value:sql
											});
										}
									} catch (e){}
									items.push({
										title:"Request Options",
										html:$O(record.get("options")).toArray().toDataSet().toHtmlTable()
									});
									C.showWin("Callback {0} detail".format(record.get("id")),{
										xtype:"tabpanel",
										defaults:{
											autoScroll:true
										},
										items:items
									});




								},
								rowclick:function(grid,rowIndex,e){
									var record = grid.getStore().getAt(rowIndex);
								},
								rowdblclick:function(grid,rowIndex,e){

								}
							}
						},{// tab2 profiler
							title:"Profiler",
							xtype:"grid",
							stateId:"profiler_tab",
							stripeRows:true,
							stateful: true,
							store: Ext.create('Ext.data.Store',{
								storeId:"CONTROLLER_PROFILER_GRID",
								data:univnm.jslib.ccl_callback.history,
								aurtoLoad:true,
								proxy:{
									type:"profiler",
									reader: {
										type:"json",
										id: "id"
									}
								},
								fields:[
									{name:"type"},
									{name:"label"},
									{name:"elapsed"},
									{name:"total"}
								],
								remoteSort: false
							}),
							columns:[
								{header: "Type", width:65,  dataIndex:'type', sortable:false},
								{header: "Label", flex:1, width:60,  dataIndex:'label', sortable:true},
								{header: "Elapsed", width:70,  dataIndex:'elapsed', sortable:true,
									renderer:function(val){
										return Date.formatInterval(val,{
											scale:2,
											sep:" ",
											style:"short"
										});
									}
								},
								{header: "Total", width:70,dataIndex:'total', sortable:true,
									renderer:function(val){
										return Date.formatInterval(val,{
											scale:2,
											sep:" ",
											style:"short"
										});
									}
								}


							],
							loadMask: true,
							listeners: {
								beforerender:function(){
									Ext.StoreMgr.get("CONTROLLER_PROFILER_GRID").load();
								},
								cellclick:function(
								/*Ext.grid.View		*/	view,
								/*HTMLElement			*/	cell,
								/*Number				*/	cellIndex,
								/*Ext.data.Mode	l	*/	record,
								/*HTMLElement			*/	row,
								/*Number				*/	rowIndex,
								/*Ext.EventObject		*/	e
								){
									var col =view.headerCt.gridDataColumns[cellIndex];
									var value = record.get(col.dataIndex);

									C.showWin("Request",{
										xtype:"textarea",
										autoScroll:true,
										title:"Label",
										value:record.get("label")
									});
								}

							}
						},{//tab 3 "Console"
							title:"Console",
							layout:"fit",
							frame:"true",
							//stateful: false,
							itemId:"consolePanel",
							items:[{
								xtype:"grid",
								stateful:false,
								store:new Ext.data.Store({
									storeId:"aboutDebugConsole",
									proxy: {
										type: 'memory',
										reader: {
											type: 'json'
											//root: 'data'
										}
									},
									fields:[
										{//label
											name:"label"
										},
										{//type
											name:"type"
										},
										{//detail
											name:"detail"
										},
										{//stack
											name:"stack_label"
										},
										{//ts
											name:"ts",
											type:"date"
										}
									],
									data: C.console.data
								}),
								stripeRows:true,
								columns:[
									{width:20,  dataIndex:"label", header:"#",renderer:function(v,m,r,i){return i+1;}},
									{flex:1,  dataIndex:"label", header:"Label"},
									{dataIndex:"type", header:"Type"},
									{dataIndex:"stack_label", header:"Log Stack", hidden:Ext.isIE},
									{dataIndex:"ts", header:"TS"}
								],
								features:[
									Ext.create('Ext.grid.feature.RowBody', {
										getAdditionalData : function(data, rowIndex, record, orig) {
											var headerCt = this.view.headerCt,
												colspan = headerCt.getColumnCount()
											;
											return {
												rowBody : '<div style="-webkit-user-select: text !important;-o-user-select: text !important; -khtml-user-select: all !important; -ms-user-select: text !important; user-select: text !important; -moz-user-select: text !important;padding-left:10px;border-bottom:1px solid gray;">' + record.get("detail") +'</div>',
												rowBodyCls : this.rowBodyCls,
												rowBodyColspan : colspan
											};
										}
									})
								]

							}],
							bbar:isDBA?[{
								xtype:"textfield",
								fieldLabel:"Log",
								enableKeyEvents:true,
								flex:1,
								listeners:{
									keydown:function(f,e){
										if (e.getKey() == e.ENTER){
											C.console.debug(eval("(" +f.getValue() + ")"),f.getValue());
											f.up("panel[itemId=consolePanel]").down("grid").getStore().loadData(C.console.data);
										}
									}
								}
							}]:undefined
						},{//tab 4 Tests
							title:"Tests",
							layout:"fit",
							frame:true,
							itemId:"test_pane",
							buttons:isDBA?[{
								text:"Run Tests",
								handler:function(b){
									var view = b.up("controller_about");
									view.fireEvent("run_tests",{src:view});
								}
							}]:undefined
						}]
					}]
				});
				if (C.options && C.options.helpPanel){
					tb.unshift({
						title:"Help",
						layout:"fit",
						items:[C.options.helpPanel]
					});
				}
				if (config.errorText){
					var errorId = C.createUuid().replace(/-/g,"");
					config.errorText = "ID: " + errorId + "\n" + config.errorText;
					var data={
						iframe_id:Ext.id(),
						form_id:Ext.id(),
						detail_id:Ext.id(),
						env:univnm.jslib.jsonEncode({
							$env:$env,
							error_id:errorId,
							location:window.location.pathname + window.location.search,
							ids:{
								user_id:univnm.user_id,
								patient_id:univnm.patient_id,
								encounter_id:univnm.encounter_id,
								cur_node:univnm.cur_node,
								cur_user:univnm.cur_user,
								cur_server:univnm.cur_server,
								app_name:C.options.appname,
								full_name:univnm.full_name
							},
							profiler:$profiler.getSummaryArray(),
							console:C.console.data,
							appname:C.options.appname,
							full_name:univnm.full_name,
							callbacks:"history" in univnm.jslib.ccl_callback?univnm.jslib.ccl_callback.history.map(function(row){
								return {
									id:row.id,
									ccl:row.ccl,
									xhr:(function(){
										try{
											return {
												status:row.xhr.status,
												statusText:row.xhr.statusText,
												responseText:row.xhr.responseText
											};
										}catch(e){
											return {
												status:"",
												statusText:"",
												responseText:""
											};
										}
									})(),
									params:row.params,
									options:row.options,
									responseText:(function(){
										try{
											return row.xhr.responseText;
										}catch(e){
											return e;
										}
									})()
								};
							}):""
						}),

						detail:config.errorText,
						errorUrl:$env.errorUrl

					};

					tb.unshift({
						title:"Report an Error",
						layout:"anchor",
						frame:"true",
						itemId:"errorWin",
						items:[{
							xtype:"displayfield",
							value:"Report a problem: ",
							style:"font-weight:bold"
						},{
							xtype:"textarea",
							//stateful: false,
							anchor:"100% 97%",
							style:{
								"font-family":"monospace",
								"font-size":"8pt"
							},
							itemId:"errorText",
							value:config.errorText
						},{
							xtype:"panel",
							hidden:true,
							height:1,
							html:[
								'<iframe name="{iframe_id}"  style="display:none"></iframe>',
								'<form  id="{form_id}"  action="{errorUrl}" target="{iframe_id}" method="POST" >',
									'<textarea name="env" style="display:none" >{env}</textarea>',
									'<textarea id="{detail_id}" name="detail" >{detail}</textarea>',
								'</form>'
							].join("\n").format(data),
							anchor:"100% 100%"

						}],
						buttons:[{
							hidden:!$env.errorUrl,
							text:"Send Error Report",
							handler:function(b){
								var text = b
									.up("*[itemId=errorWin]")
									.down("*[itemId=errorText]")
									.getValue();
								Ext.get(data.detail_id).dom.value = text;
								Ext.get(data.form_id).dom.submit();
							}
						}],
						listeners:{
							afterrender:function(){
								if ($env.errorUrl){
									window.setTimeout(function(){
										Ext.get(data.form_id).dom.submit();
									},1000);
								}
							}
						}
					});
				}

				C.ControllerAbout.loading=false;
				this.callParent(arguments);
			}

		});


/* ---------------- Ext.onReady --------------------------------------------- */
	Ext.onReady(function(){


		univnm.jslib.load_mpage_ids();
		/* setup konami code */
			var code=[1,1,2,2,3,4,3,4,5,6,0];
			var curKeys=[];
			var keys=[
				Ext.EventObject.ENTER,
				Ext.EventObject.UP,
				Ext.EventObject.DOWN,
				Ext.EventObject.LEFT,
				Ext.EventObject.RIGHT,
				Ext.EventObject.B,
				Ext.EventObject.A

			];

			var map = new Ext.util.KeyMap(document, {
				key: keys,
				fn: function(keyCode){
					if (keyCode==keys[code[curKeys.length]]){
						curKeys.push(keyCode);
					} else {
						curKeys=[];
					}
					if (curKeys.length == code.length){
						Ext.get(document.body).mask();
						window.setTimeout(function(){
							/* Must be DBA to ACL */
							var isDBA = !!C.localMode||univnm.db.query([
								'Select',
									'code_value,',
									'display',
								'From',
									'code_value cv join prsnl p on (',
										'p.position_cd = cv.code_value',
									')',
								'Where',
									'1=1',
									'and code_set= 88',
									'and cv.active_ind= 1',
									'and display=\'DBA\'',
									'and p.person_id = {user_id} ',
							''],univnm).length;

							Ext.get(document.body).unmask();
							if (!isDBA) {
								alert("Only Position 'DBA' can access the admin interface");
								return;
							}
							Ext.widget("admin_view");
						},100);

					}
				}
			});
		var options = C.options;
		C.session_id = C.createUuid();
		if (!options.dontAcl && !C.hasAccess(options.appname)){

			alert("You do not have access to this MPage.");
			if (history.length >1) {
				history.back();
				return new Ext.Panel();
			} else {
				throw new Error("You do not have access to this MPage.");
			}
		}

		//logs access
		C.logStat();
		univnm.jslib.ccl_callback.defaults.onexception=function (e,xmlhttp,options){
			C.handleError({
				type:"callback_exception",
				e:e,
				xhr:xmlhttp,
				options:options
			});
		};
		univnm.jslib.ccl_callback.defaults.onfailure=function (xmlhttp,options){
			C.handleError({
				type:"callback",
				xhr:xmlhttp,
				options:options
			});
		};
		C.body = Ext.get(document.body);

		//effectively disabled Ext AJAX timeout
		Ext.Ajax.timeout = 5*60*1000;


		var oldDecode = (Ext.JSON?Ext.JSON:Ext.util.JSON).decode;
		Ext.decode = (Ext.JSON?Ext.JSON:Ext.util.JSON).decode = function(text){
			try{
				if (!text || text.trim().length === 0) return "";
				return univnm.jsonDecode(text);
			} catch(e){
				C.handleError({
					type:"decode",
					e:e,
					json:text
				});
				//now in global error handler
				//C.body.unmask();
				throw e;
			}
		};

		//Provides attractive and customizable tooltips for any element.
		Ext.QuickTips.init();

		//Ext.form.BasicForm.prototype.trackResetOnLoad =true;

		/* Ext.Direct.on('exception',function(e){
			C.handleError({
				type:"direct",
				errorObj:e
			})
		},this); */


		try {
			if (!options.version){
				if ($env.version){
					options.version = $env.version;
				}else {
					univnm.jslib.loadScript("version.js",function(){
						options.version = $env.version;
					});
				}
			}
		} catch(e){
			//we don't care if this doesn't work

		}
		var apps=[];

		if (!options.displayName && !C.localMode){
			apps = univnm.db.query([
					"select  ",
					"a.app_name, ",
					"a.display_name, ",
					"a.is_portlet ",
					"from unmh.cust_applications a ",
					"where '{app_name}' = 'ALL' or app_name = '{app_name}'"

				],
				{
					app_name:options.appname.toLowerCase()
				}
			);
			if (apps && apps.length){
				options.displayName=apps[0].display_name;
			} else {
				options.displayName=options.appname;
			}
		}

		C.tools=[{
			id:"help",
			tooltip:"Debugging and Error Reporting",
			handler:function(){
				var view = Ext.ComponentQuery.query("viewport")[0];
				view.fireEvent("controller_about",{
					src:view
				});
			}

		}];
		if (C.hasAccess(C.options.appname + "/admin")){
			C.tools.push({
				type:"gear",
				id:"deity_edit_users",
				tooltip:"Edit User Access",

				handler:function(){
					/*location.href="../deity/index.html?edit_app={appname}".format(C.options);*/
					C.showWin("Edit users for this application",{
						html:[
							'<iframe ',
								'src="../deity/index.html?edit_app={appname}"',
								'scrollbars="no"',
								'frameborder="no"',
								'width="100%"',
								'height="100%"',
							'></iframe>',
						''].join(" ").format(C.options)
					},true);
				}
			});
		}
		if(C.options.tools){
			C.tools = C.options.tools.concat(C.tools);
		}

		if ($env.mpageType =="external" && $env.logoutUrl){
			C.tools.push({
				id:"close",
				qtip:"Log out of this MPage",
				handler:function(){
					location.href=$env.logoutUrl;
				}

			});
		}

		// C.loadValues();
		C.Settings.load();
		//should make state management optional
		//if (C.options.loadValues.enableStateManagement){
			Ext.state.Manager.setProvider(new univnm.ext.CCLProvider({
				app_name: C.options.appname
			}));
		//}

	});





}{

/* Property: C.options
	options object for the controller

	Properties:
		dontAcl		-	set to true to disable ACL checks
		appname		-	name of the application, defaults to folder name
		version		-	app version, defaults to $env.version or tjhe contents
						of version.txt
		displayName	-	Human readable name of the application, defaults to
						displayName from deity for _C.options.appname_, or
						_C.options.appname_ itself
		tools		-	Ext tools to add to the global toolbar

	*/
	C.options={
		dontAcl:false,
		appname:String(location.pathname).listBefore("/").listLast("/") ||
			String(location.pathname).listBefore("\\").listLast("\\")
	};
/* Function: C.console.log
		Displays the "about" screen. This is the same window triggered by
		clicking the "help" tool

		Parameters:
			detail	-	Text of log
			label	-	*Optional, default "log"*
						Log label
			type	-	*Optional, default "debug"*
						Log type

		These logs are saved to C.console.data and can be viewed in the "debug"
		tab of the about window

		Example:
		(code)
			try {
			...
			}catch (e){
				C.console.log(e.message,"Error in call","error")
			}
		(end)
	*/
	C.console = {
		data:[]
	};
	C.console.log = function log(detail,label,type){


		var row = {
			detail:detail||"",
			label:label,
			type:type||"info",
			ts:new Date()
		};
		row.value = detail;
		row.title = label;
		var index = this.data.push(row) -1;



		if (row.detail && typeof row.detail === "object" && !(row.detail instanceof Date)){
			row.detail = [
				'<span style="color:blue;cursor:pointer;text-decoration:underline;"',
					'onclick="univnm.jslib.debug_window(',
						'C.console.data[{0}].value,',
						'\'Log row {1}: \' +C.console.data[{0}].title',
						')"',
				'>[ object ]</span>',
			''].join("").format(index,index+1);
		}
		if (!row.label && typeof row.detail != "object") {
			row.label = row.detail;
			row.detail ="";
		}

		try {
			throw new Error("Console Stack");
		}catch(e){
			row.stack = e.stack;
			row.stack_label = [
				'<span =style="color:blue;cursor:pointer;text-decoration:underline;"',
					'onclick="alert(',
						'C.console.data[{0}].stack',
						')"',
				'>[ view ]</span>',
			''].join("").format(index);
		}

		if (this.nativeConsole) {
			this.nativeConsole.log((row.title||"")+":" ,row.value||"");
		}

		var store = Ext.StoreMgr.get("aboutDebugConsole");
		if (store){
			store.load();
		}

	};

	C.console.error =function error(detail,label,type){
		return this.log(detail,label,"error");
	};
	C.console.debug =function debug(detail,label,type){
		return this.log(detail,label,"debug");
	};

	/* copy to native console */
	if ("console" in this){
		C.console.nativeConsole = this.console;
		//var console= C.console;
	}else{
		window.console= C.console;
	}
/* Function: C.CCL
		Executes a CCL callback via univnm.jslib.ccl_callback

		Parameters:
			ccl_name		-	name of CCL to execute
			arg1..n			-	*Optional*
								arguments to ccl, not counting "MINE"
			callback		-	*Optional*
								Function. If defined, ccl will  be caled
								async and _callback_ will be called with the
								result of the callback. Otherwise CCL
								executes sync and returns the result directly

		Examples:
		(code)
			C.CCL("uh_mp_ro_save",0,alias,model,foreign_key,pid,function(result){
				Ext.StoreMgr.get("ro_member_grid").load()
			})

		(end)
	*/
	C.CCL = function(){
		var args = Array.parse(arguments);
		var cb=false;
		if (typeof args.last() == "function"){
			cb = args.pop();
		}
		var ccl = args.shift();
		if (!args.length || args[0] !=  "MINE")
		args.unshift("MINE");
		args.compact();
		return univnm.jslib.ccl_callback({
			ccl:ccl,
			eval_result:false,
			onsuccess:function(result){
				if (result) result =univnm.jslib.fixCclJson(result.parseJson());
				if (cb) cb(result);
			},
			parameters:args,
			async:!!cb
		});
	};
/* Function: C.hasAccess
	returns true if the current user has access to the requested item

	Parameters:
		co			-	requested object, ex: nbicu, nbicu/admin
						Note that is is not necessary to pass the instance
						prefix e.g. build/nbicu, because this will
						happen automatically if "instance" is defined in $env
		prefix		-	*Optional. default null*
						application instance prefix. Set this to override
						$env.instance
	*/
	C.hasAccess = function(co,prefix){
		if (C.localMode) return true;
		var me,my;
		me=my=arguments.callee;
		if (!("perms" in me)) my.perms={};//permissions cache
		var path = co;
		if (prefix){
			path ="{0}/{1}".format(prefix,co);
		} else  if ($env.instance){
			path ="{0}/{1}".format($env.instance,co);
		}
		if (!(path in my.perms)){
			var result = univnm.db.query([
				'Select',
					'distinct rc.id',
				'From',
					'cust_aros_acos rc ',
					'join cust_acos co on (',
						'rc.aco_id =co.id',
					')',
				'Where',
					'rc.aro_id in (',
						'Select',
							'parent_id',
						'From',
							'cust_aros ro',
						'Where',
							'exists (',
								'Select',
									'\'x\'',
								'From',
									'code_value cv ',
									'join prsnl p on (',
										'cv.code_value = p.position_cd',
									')',
								'Where',
									'cv.code_value = ro.foreign_key',
									'and ro.model =\'CernerRole\'',
									'and code_set= 88',
									'and cv.active_ind= 1',
									'and p.person_id = {person_id} ',
							')',
							'or (',
								'ro.model =\'User\'',
								'and ro.foreign_key = {person_id} ',
							') ',
					')',
					'and alias =\'{path}\'',
			''], {person_id: univnm.user_id, path:path});
			my.perms[path] =!!result.length;
		}
		return my.perms[path];
	};


/* Function: C.logStat
	Logs to cust_stats.

	Parameters:
		detail		-	*Optional, default "access"*

	Saves session_id, app_name, person_id(user id), detail and purpose to
	cust_stats
	*/
	C.logStat = function(detail, appname, callback){
		if (C.localMode) return;
		univnm.db.saveRow("stats","insert",{
			id:C.createUuid(),
			session_id:C.session_id,
			app_name:appname || C.options.appname,
			person_id:univnm.user_id,
			detail:detail||"access",
			purpose:$env.purpose||"UNKNOWN"
		}, callback? callback: function(){});
	};
/* Function: C.createUuid
	returns a Universally Unique IDentifier string.
	*/
	Ext.require("Ext.data.UuidGenerator");
	C.createUuid = function(){

		return Ext.data.IdGenerator.get('uuid').generate();
	};

/* Function: C.genClickFunction
	generates a script for use in an text event hander that fires an Ext event

	Parameters:
		id			-	Id of the element that this handler will be attached to. It
						is important that this is unique and accurate to prevent
						memory leaks
		viewQuery	-	Ext.ComponentQuery query of the component that should
						fire this event
		eventName	-	Event name to fire
		value		-	Value to attach to this event. This will be the "value"
						property of the event data when fired

	Event Data:
		src		-	the Ext Component firing the event
		element	-	The DOM element the firing the event
		value	-	the value registered for this event

	Example:
	(code)
		//in a grid ..
		id:"main_grid",
		columns:[{
			dataIndex:"id",
			text:"ID"
		},{
			text:"Display",
			flex:1,
			dataIndex:"display_name",
			renderer:function(val,md,record){
				var id =Ext.id();
				return new Ext.Template(
					'<a id="{id}" href="#" onclick="{onclick}">{val}</a>',
				'').apply({
					onclick:C.genClickFunction(
						id,
						"#main_grid",
						"click_display",
						record
					),
					val:val,
					id:id
				})
			}
		}],
		listeners:{
			click_display:function(data){
				console.log(data.src,"Ext source component")
				console.log(data.element,"DOM element")
				console.log(data.value,"Event Value")
			}
		}
	(end)
	*/
	C.genClickFunction = function(id,viewQuery,eventName,value){
		C.valueCache[id] =function(){
			var view = Ext.ComponentQuery.query(viewQuery)[0];
			view.fireEvent(eventName,{
				src:view,
				element:document.getElementById(id),
				value:value
			});
		};
		//clean up cache
		C.cleanValueCache();
		var fn ="C.valueCache['{0}']()".format(id);
		//console.log(fn,"fn")
		return fn;
	};
	C.cleanValueCache = Ext.Function.createBuffered(function(){
		for (var id in C.valueCache){
			if (!document.getElementById(id)) {
				delete C.valueCache[id];
				//console.log("removed " + id)
			}
		}
	},1000);
	C.valueCache={};
/* ---------------- handleError --------------------------------------------- */
	C.handleError = function(options){
		var formatJsError=function(e){
			C.error =e;
			C.console.error(e.stack||e);


			return new Ext.Template([
				'Message:     {message}',
				'{stack}'
			].join("\n")).apply(e);
		};
		var detail="";
		switch(options.type){
			case "decode":
				detail = new Ext.Template([
					'JSON decode Error: ',
					'{error}',
					'JSON: {json}'
				].join("\n")).apply({
					error:formatJsError(options.e),
					json:options.json
				});
				break;
			case "callback_exception":
				var error="";
				if (options.e instanceof SyntaxError){
					error = "\n"+options.xhr.responseText.replace(/\[/,"\n[");
				} else {
					error = formatJsError(options.e);
				}
				detail = new Ext.Template([
					'Error in Callback ID {cb_id}:',
					'{error}',
					'\nParameters:',
					'{params}'
				].join("\n")).apply({
					cb_id:options.options.callback_id,
					error:error,
					params:options.options.parameters
				});
				break;
			case "js":
				detail = new Ext.Template([
					'JS Error:',
					'{error}'
				].join("\n")).apply({
					error:formatJsError(options.e)
				});
				break;
			case "callback":
				detail = new Ext.Template([
					'Callback Failure:',
					'     CB ID:      {cb_id}',
					'     Status:     {status}',
					'     StatusText: {statusText}'
				].join("\n")).apply({
					cb_id:options.options.callback_id,
					status:options.xhr.status,
					statusText:options.xhr.statusText
				});
				break;
			default:
				//debug_window(options)
				detail = Ext.encode(options);
		}
		C.logStat('error');
		C.about(
			new Ext.Template([
				'An Error Occurred!',
				'{detail} ',
				' ',
				'Please describe what your were doing when this error occurred and click "Send Error Report" below',
				'------------------------------------------------------------------------------------------------'
			].join("\n")).apply({
				detail:detail
			})
		);

	};
/* =================== Classes ============================================== */
	/* ----------- C.Settings ----------------------------------------------- */
	console.log("Defining C.Settings");
		Ext.define("C.Settings", {
			mixins: {
				observable: "Ext.util.Observable"
			},
			requires: ["univnm.db"],
			singleton: true,
			queueEvents: true,
			eventQueue: [],
			app: (function() {
				var x = new Ext.util.HashMap({ });
				x.on({
					add: function(hm, key, val) { C.Settings.setGlobal(key, val, undefined); },
					remove: function(hm, key, val) { C.Settings.removeApp(key, val); },
					replace: function(hm, key, val, old) { C.Settings.setGlobal(key, val, old); }
				});
				return x;
			})(),
			user: (function() {
				var x = new Ext.util.HashMap({
					resetAll: function(callback) {
						univnm.jslib.async.marshal(
							function(done){ // new way
								univnm.db.saveRow(
									'values',
									'remove',
									{
										application:C.options.appname,
										user_id:univnm.user_id,
										instance:$env.instance||"prod"
									},
									done
								);
							},
							function(done){//legacy way
								univnm.db.saveRow(
									'values',
									'remove',
									{
										application:C.options.appname,
										"key like":univnm.user_id +".%",
										instance:$env.instance||"prod"
									},
									done
								);
							}
						).then(function(){
							for (var k in C.Settings.user.getKeys()) {
								C.Settings.mergedValues[k] = C.Settings.page.get(k) || C.Settings.app.get(k);
								C.Settings.fireEvent("deletedsetting",k);
								C.Settings.getViewport().fireEvent("deletedsetting", k);
							}
							C.Settings.user.clear();
							//C.infoMsg("User Values reset.")
							if (callback) callback();
						});
					}
				});
				x.on({
					add: function(hm, key, val) { C.Settings.setUser(key, val, undefined); },
					remove: function(hm, key, val) { C.Settings.removeUser(key, val); },
					replace: function(hm, key, val, old) { C.Settings.setUser(key, val, old); }
				});
				return x;
			})(),
			page: (function() {
				var x = Ext.create("Ext.util.HashMap", { });
				x.on({
					add: function(hm, key, val) { C.Settings.setTemp(key, val, undefined); },
					remove: function(hm, key, val) { C.Settings.removePage(key, val); },
					replace: function(hm, key, val, old) { C.Settings.setTemp(key, val, old); }
				});
				return x;
			})(),
			getViewport: function() {
				return Ext.ComponentQuery.query("viewport").first();
			},
			loaded: false,
			mergedValues:{},
			constructor: function(config) {
				var $this = this, db = univnm.db;
				this.callParent(arguments);
				this.mixins.observable.constructor.call(this, config);
				//this.getViewport().addEvents('settingchanged', 'settingdeleted');
				this.app.set = this.app.replace; // syntactic sugar
				this.page.set = this.page.replace;
				this.user.set = this.user.replace;
				C.values = this.mergedValues; // compatability
				C.defaultValues = this.mergedValues; // compatability
			},

			load: function() {
				var $this=this;
				if (this.loaded) {
					return this;
				}

				univnm.jslib.load_mpage_ids();
				records = univnm.db.query([
					"select ",
					"	v.key, ",
					"	v.value, ",
					"	1 perm, ",
					"	v.user_id ",
					"FROM ",
					"	UNMH.cust_values{tableExtension} v ",
					"WHERE ",
					"	v.application = '{appname}' ",
					"	AND ( ",
					"		user_id IS NULL or user_id = {user_id} ",
					"	) ",
					"	AND  not REGEXP_LIKE(v.key,'[[:digit:]]+\\.') ",
					"	AND instance ='{instance}' "
				], {
					appname: C.options.appname,
					instance: $env.instance || "prod",
					user_id: univnm.user_id
				});

				this.loaded = true;
				records.forEach(function(setting) {
					if (setting.user_id) {
						$this.user.set(setting.key, setting.value);
					} else {
						$this.app.set(setting.key, setting.value);
					}
				});
				Ext.apply($this.mergedValues, $this.app.map);
				Ext.apply($this.mergedValues, $this.user.map);
			},

			setGlobal: function(key, val, old) {
				if (!(this.user.containsKey(key) || this.page.containsKey(key))) this.mergedValues[key] = val;
				this.$persistValue(key, val, true, null);
				this.enqueueEvent(key, val, old, 'app');
			},

			fireQueuedEvents: function() {
				var ev;
				while (( ev = this.eventQueue.shift() )) {
					ev();
				}
				this.queueEvents = false;
				this.fireEvent("settingsloaded");
				this.getViewport().fireEvent("settingsloaded");
			},

			enqueueEvent: function(key, val, old, target) {
				var full = {
					type: target,
					key: key,
					value: val,
					oldvalue: old
				}, $this = this;

				var fireEvents = function() {
					if (old != val) {
						C.Settings.getViewport().fireEvent(key + "$changed", val, full);
						C.Settings.fireEvent(key + "$changed", val, full);
						C.Settings.getViewport().fireEvent("settingchanged", key, val, full);
						return C.Settings.fireEvent("settingchanged", key, val, full);
					}
				};
				if (this.queueEvents) {
					this.eventQueue.push(fireEvents);
				} else {
					fireEvents();
				}
			},

			setUser: function(key, val, old) {
				if (!this.page.containsKey(key)) this.mergedValues[key] = val;
				this.$persistValue(key, val, true, univnm.user_id);

				this.enqueueEvent(key, val, old, 'user');
			},

			setTemp: function(key, val, old) {
				this.mergedValues[key] = val;

				this.enqueueEvent(key, val, old, 'page');
			},

			$persistValue: function(key, val, perm, user_id) {
				var $this = this, m;
				if (perm && !this.queueEvents) {
					var dp = {
						"application = ":C.options.appname,
						"key = ": key,
						value: val,
						"instance =":$env.instance||"prod"
					};
					if (user_id) {
						dp["user_id ="] = user_id;
					}
					univnm.db.saveRow(
						'values',
						'set',
						dp,
						function() {

						}
					);
				}
				return true;
			},

			removeUser: function(key) {
				this.mergedValues[key] = this.page.get(key) || this.app.get(key);
				this.$removeValue(key, univnm.user_id);
			},

			removeApp: function(key) {
				this.mergedValues[key] = this.page.get(key) || this.user.get(key);
				this.$removeValue(key, null);
			},

			removePage: function(key) {
				this.mergedValues[key] = this.user.get(key) || this.app.get(key);
				this.getViewport().fireEvent("settingdeleted", key);
			},

			$removeValue: function (key, user_id) {
				var $this = this;

				univnm.db.saveRow(
					'values',
					'remove',
					{
						application:C.options.appname,
						key:key,
						instance:$env.instance||"prod",
						user_id: user_id === null? "#NULL": user_id
					},
					function() {
						$this.fireEvent("settingdeleted", key);
						$this.getViewport().fireEvent("settingdeleted", key);
					}
				);
			}


		});
	/* ----------- C.ProfilerProxy ------------------------------------------ */
		Ext.define('C.ProfilerProxy', {
			extend: 'Ext.data.proxy.Client',
			alias: 'proxy.profiler',
			constructor: function(config) {
				this.callParent([config]);

				//ensures that the reader has been instantiated properly
				this.setReader(this.reader);
			},
			read: function(operation, callback, scope) {
				var me     = this,
					reader = me.getReader(),
					result = reader.read($profiler.getSummaryArray());

				Ext.apply(operation, {
					resultSet: result
				});

				operation.setCompleted();
				operation.setSuccessful();
				Ext.callback(callback, scope || me, [operation]);
			},

			clear: Ext.emptyFn
		});



}{
/*global
	Ext:true,
	C:true
	univnm:true
	$env:true
	MPAGE:true
*/
Ext.Loader.setPath("MPAGE", "app");

//univnm.jslib.ccl_callback.defaults.historySize = 20;
C.options.dontAcl=true;
var sections=[
	"Application",
	"Right",
	"Group",
	"Perm",
	"Menu",
	"Section",
	"Entity"
];
var baseRights =[
	"{app_name}",
	"{app_name}/admin",
	"trogdor/{app_name}",
	"trogdor/{app_name}/admin",
	"build/{app_name}",
	"build/{app_name}/admin"
];
Ext.require([
		"univnm.ext.BetterActionColumn",
		"univnm.ext.RowProxy",
		"univnm.ext.SequenceGenerator",
		"univnm.db",
		"univnm.ext.SupaGrid"
],function () {
	univnm.ext.SupaGrid.prototype.filterOnSelect =true;	
});

var edit_app =univnm.jslib.getQuerystring("edit_app",false);
var edit_group_id =0;
univnm.jslib.load_mpage_ids();
if (edit_app && C.hasAccess(edit_app + "/admin")){
	if ($env.instance) edit_app = $env.instance +"/" +edit_app;
	
	C.options.dontAcl=true;
	Ext.define("MPAGE.view.Viewport", {
		extend: 'Ext.container.Viewport',
		requires:["MPAGE.view.GroupMemberGrid"],
		layout: 'fit',
		items:[{
				hidden:true
		},{
			xtype:"group_form",
			appEdit:true,
			preventHeader:true
		}],
		listeners:{
			render:function(p){
				var edit_group_id = univnm.db.query([
					'select id',
					'from cust_aros',
					'where alias=\'{edit_app}\' ',
					
				''],window)[0].id;
				MPAGE.model.Group.load(edit_group_id,{
					callback:function(record){
						var form =p.down("group_form").form;
						form.currentRecord =record;
						form.loadRecord(record);
						Ext.StoreMgr.get("ROSearch").getProxy().extraParams.pid =record.data.id;
						var ms = Ext.StoreMgr.get("GroupMember");
						ms.getProxy().extraParams.pid =record.data.id;
						ms.load();
					}
				});
			}
		}
			
	});
}

Ext.application({
	name: "MPAGE",
	appFolder: "app",
	requires: [
	],
	stores:sections.concat([
		"ROSearch",
		"GroupMember"
	]),
	models:sections.concat([
			
	]),
	controllers: C.controllers.concat(sections),
	autoCreateViewport: true,
	launch: function() {
	}
});


//hack for loadMasks
Ext.override(Ext.view.AbstractView, {
    onRender: function()
    {
        var me = this;
        this.callOverridden();

        if (me.loadMask && Ext.isObject(me.store)) {
            me.setMaskBind(me.store);
        }
    }
});


}