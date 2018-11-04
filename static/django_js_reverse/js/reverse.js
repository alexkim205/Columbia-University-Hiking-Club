this.Urls=(function(){var Urls={};var self={url_patterns:{}};var _get_url=function(url_pattern){return function(){var _arguments,index,url,url_arg,url_args,_i,_len,_ref,_ref_list,match_ref,provided_keys,build_kwargs;_arguments=arguments;_ref_list=self.url_patterns[url_pattern];if(arguments.length==1&&typeof(arguments[0])=="object"){var provided_keys_list=Object.keys(arguments[0]);provided_keys={};for(_i=0;_i<provided_keys_list.length;_i++)
provided_keys[provided_keys_list[_i]]=1;match_ref=function(ref)
{var _i;if(ref[1].length!=provided_keys_list.length)
return false;for(_i=0;_i<ref[1].length&&ref[1][_i]in provided_keys;_i++);return _i==ref[1].length;}
build_kwargs=function(keys){return _arguments[0];}}else{match_ref=function(ref)
{return ref[1].length==_arguments.length;}
build_kwargs=function(keys){var kwargs={};for(var i=0;i<keys.length;i++){kwargs[keys[i]]=_arguments[i];}
return kwargs;}}
for(_i=0;_i<_ref_list.length&&!match_ref(_ref_list[_i]);_i++);if(_i==_ref_list.length)
return null;_ref=_ref_list[_i];url=_ref[0],url_args=build_kwargs(_ref[1]);for(url_arg in url_args){var url_arg_value=url_args[url_arg];if(url_arg_value===undefined||url_arg_value===null){url_arg_value='';}else{url_arg_value=url_arg_value.toString();}
url=url.replace("%("+url_arg+")s",url_arg_value);}
return'/'+url;};};var name,pattern,url,url_patterns,_i,_len,_ref;url_patterns=[['admin:accounts_hikeuser_add',[['admin/accounts/hikeuser/add/',[]]],],['admin:accounts_hikeuser_autocomplete',[['admin/accounts/hikeuser/autocomplete/',[]]],],['admin:accounts_hikeuser_change',[['admin/accounts/hikeuser/%(object_id)s/change/',['object_id',]]],],['admin:accounts_hikeuser_changelist',[['admin/accounts/hikeuser/',[]]],],['admin:accounts_hikeuser_delete',[['admin/accounts/hikeuser/%(object_id)s/delete/',['object_id',]]],],['admin:accounts_hikeuser_history',[['admin/accounts/hikeuser/%(object_id)s/history/',['object_id',]]],],['admin:app_list',[['admin/%(app_label)s/',['app_label',]]],],['admin:auth_group_add',[['admin/auth/group/add/',[]]],],['admin:auth_group_autocomplete',[['admin/auth/group/autocomplete/',[]]],],['admin:auth_group_change',[['admin/auth/group/%(object_id)s/change/',['object_id',]]],],['admin:auth_group_changelist',[['admin/auth/group/',[]]],],['admin:auth_group_delete',[['admin/auth/group/%(object_id)s/delete/',['object_id',]]],],['admin:auth_group_history',[['admin/auth/group/%(object_id)s/history/',['object_id',]]],],['admin:auth_user_password_change',[['admin/accounts/hikeuser/%(id)s/password/',['id',]]],],['admin:blog_hike_add',[['admin/blog/hike/add/',[]]],],['admin:blog_hike_autocomplete',[['admin/blog/hike/autocomplete/',[]]],],['admin:blog_hike_change',[['admin/blog/hike/%(object_id)s/change/',['object_id',]]],],['admin:blog_hike_changelist',[['admin/blog/hike/',[]]],],['admin:blog_hike_delete',[['admin/blog/hike/%(object_id)s/delete/',['object_id',]]],],['admin:blog_hike_history',[['admin/blog/hike/%(object_id)s/history/',['object_id',]]],],['admin:blog_hikerequest_add',[['admin/blog/hikerequest/add/',[]]],],['admin:blog_hikerequest_autocomplete',[['admin/blog/hikerequest/autocomplete/',[]]],],['admin:blog_hikerequest_change',[['admin/blog/hikerequest/%(object_id)s/change/',['object_id',]]],],['admin:blog_hikerequest_changelist',[['admin/blog/hikerequest/',[]]],],['admin:blog_hikerequest_delete',[['admin/blog/hikerequest/%(object_id)s/delete/',['object_id',]]],],['admin:blog_hikerequest_history',[['admin/blog/hikerequest/%(object_id)s/history/',['object_id',]]],],['admin:index',[['admin/',[]]],],['admin:jsi18n',[['admin/jsi18n/',[]]],],['admin:login',[['admin/login/',[]]],],['admin:logout',[['admin/logout/',[]]],],['admin:password_change',[['admin/password_change/',[]]],],['admin:password_change_done',[['admin/password_change/done/',[]]],],['admin:view_on_site',[['admin/r/%(content_type_id)s/%(object_id)s/',['content_type_id','object_id',]]],],['hike_api',[['api/hike/%(pk)s/',['pk',]]],],['hike_detail',[['hikes/%(pk)s/',['pk',]]],],['hike_list',[['hikes/',[]]],],['hike_list_api',[['api/hikes/',[]]],],['hike_request',[['hikes/request/',[]]],],['hike_requests_api',[['api/hike\u002Drequests/',[]]],],['hiker_api',[['api/hiker/%(pk)s',['pk',]]],],['hiker_list_api',[['api/hikers/',[]]],],['login',[['accounts/login/',[]]],],['logout',[['accounts/logout/',[]]],],['password_change',[['accounts/password_change/',[]]],],['password_change_done',[['accounts/password_change/done/',[]]],],['password_reset',[['accounts/password_reset/',[]]],],['password_reset_complete',[['accounts/reset/done/',[]]],],['password_reset_confirm',[['accounts/reset/%(uidb64)s/%(token)s/',['uidb64','token',]]],],['password_reset_done',[['accounts/password_reset/done/',[]]],],['signup',[['accounts/signup/',[]]]]];self.url_patterns={};for(_i=0,_len=url_patterns.length;_i<_len;_i++){_ref=url_patterns[_i],name=_ref[0],pattern=_ref[1];self.url_patterns[name]=pattern;url=_get_url(name);Urls[name]=url;Urls[name.replace(/-/g,'_')]=url;}
return Urls;})();