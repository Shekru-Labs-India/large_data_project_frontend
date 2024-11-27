"use strict";$(function(){var a=$(".datatable-project");a.length&&a.DataTable({ajax:assetsPath+"json/pages-profile-user.json",columns:[{data:"id"},{data:"id"},{data:"project_name"},{data:"leader"},{data:"avatar"},{data:"progress"},{data:" "}],columnDefs:[{className:"control",searchable:!1,orderable:!1,responsivePriority:2,targets:0,render:function(a,e,t,r){return""}},{targets:1,orderable:!1,searchable:!1,responsivePriority:4,checkboxes:!0,checkboxes:{selectAllRender:'<input type="checkbox" class="form-check-input">'},render:function(){return'<input type="checkbox" class="dt-checkboxes form-check-input">'}},{targets:2,responsivePriority:1,render:function(a,e,t,r){var s=t.project_name,n=t.framework,l=t.project_image;return'<div class="d-flex justify-content-left align-items-center"><div class="avatar-wrapper"><div class="avatar avatar-sm me-3">'+(l?'<img src="'+assetsPath+"img/icons/brands/"+l+'" alt="Project Image" class="rounded-circle">':'<span class="avatar-initial rounded-circle bg-label-'+["success","danger","warning","info","dark","primary","secondary"][Math.floor(6*Math.random())+1]+'">'+(l=(((l=(s=t.full_name).match(/\b\w/g)||[]).shift()||"")+(l.pop()||"")).toUpperCase())+"</span>")+'</div></div><div class="d-flex flex-column"><span class="text-truncate fw-medium text-heading">'+s+"</span><small>"+n+"</small></div></div>"}},{targets:3,render:function(a,e,t,r){return'<span class="text-heading">'+t.leader+"</span>"}},{targets:5,render:function(a,e,t,r){t=t.progress;return'<div class="d-flex align-items-center"><div div class="progress rounded-pill w-px-75" style="height: 8px;"><div class="progress-bar" role="progressbar" style="width:'+t+'%;" aria-valuenow="'+t+'" aria-valuemin="0" aria-valuemax="100"></div></div><div class="text-heading ms-2">'+t+"%</div></div>"}},{targets:4,render:function(a,e,t,r){for(var s=t.avatar,n="",l=0,i=0;i<s.length&&(n+='<li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Kim Karlos" class="avatar avatar-sm pull-up"><img class="rounded-circle" src="'+assetsPath+"img/avatars/"+s[i]+'.png" alt="Avatar"></li>',!(2<++l));i++);return 2<l&&0<(t=s.length-3)&&(n+='<li class="avatar avatar-sm"><span class="avatar-initial rounded-circle pull-up text-heading" data-bs-toggle="tooltip" data-bs-placement="top" title="'+t+' more">+'+t+"</span ></li>"),'<div class="d-flex align-items-center"><ul class="list-unstyled d-flex align-items-center avatar-group mb-0 z-2">'+n+"</ul></div>"}},{targets:-1,title:"Actions",searchable:!1,orderable:!1,render:function(a,e,t,r){return'<div><div class="dropdown"><a href="javascript:;" class="btn btn-sm btn-icon btn-text-secondary dropdown-toggle hide-arrow rounded-pill waves-effect" data-bs-toggle="dropdown"><i class="ri-more-2-line ri-22px"></i></a><div class="dropdown-menu dropdown-menu-end"><a href="javascript:;" class="dropdown-item">Download</a><a href="javascript:;" class="dropdown-item">Delete</a><a href="javascript:;" class="dropdown-item">View</a></div></div></div>'}}],order:[[2,"desc"]],dom:"t",displayLength:7,lengthMenu:[7,10,25,50,75,100],language:{sLengthMenu:"Show _MENU_",search:"",searchPlaceholder:"Search Project"},responsive:{details:{display:$.fn.dataTable.Responsive.display.modal({header:function(a){return"Details of "+a.data().full_name}}),type:"column",renderer:function(a,e,t){t=$.map(t,function(a,e){return""!==a.title?'<tr data-dt-row="'+a.rowIndex+'" data-dt-column="'+a.columnIndex+'"><td>'+a.title+":</td> <td>"+a.data+"</td></tr>":""}).join("");return!!t&&$('<table class="table"/><tbody />').append(t)}}}})});