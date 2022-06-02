"use strict";(self.webpackChunkmobile_app_crib_notes=self.webpackChunkmobile_app_crib_notes||[]).push([[7517],{83360:function(e){e.exports=JSON.parse('{"url":"redocusaurus/plugin-redoc-0.yaml","themeId":"theme-redoc","spec":{"openapi":"3.0.3","info":{"title":"SantokuApp REST API","version":"1.0.0","description":"SantokuApp\u306eREST API\u3002","contact":{}},"tags":[{"name":"System"},{"name":"Account"},{"name":"Terms"},{"name":"Team"}],"servers":[{"url":"http://localhost:9080/api"}],"security":[{"Session":[]}],"paths":{"/system/csrf-token":{"get":{"summary":"CSRF\u30c8\u30fc\u30af\u30f3\u306e\u53d6\u5f97","tags":["System"],"description":"CSRF\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002","operationId":"get-csrf-token","responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/CsrfTokenResponse"}}}}}}},"/system/app-updates/{type}/{version}":{"parameters":[{"schema":{"type":"string","enum":["ios","android"]},"name":"type","in":"path","required":true,"description":"\u30a2\u30d7\u30ea\u306e\u7a2e\u5225"},{"schema":{"type":"string"},"name":"version","in":"path","required":true,"description":"\u30a2\u30d7\u30ea\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u756a\u53f7"}],"get":{"summary":"\u30a2\u30d7\u30ea\u66f4\u65b0\u60c5\u5831\u306e\u53d6\u5f97","operationId":"get-app-updates","responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AppUpdatesResponse"},"examples":{}}}},"404":{"$ref":"#/components/responses/BadRequest"}},"description":"\u6307\u5b9a\u3055\u308c\u305f\u30a2\u30d7\u30ea\u306e\u7a2e\u5225\u30fb\u30d0\u30fc\u30b8\u30e7\u30f3\u756a\u53f7\u306b\u5bfe\u3057\u3001\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u304c\u5fc5\u8981\u304b\u3069\u3046\u304b\u306e\u5224\u65ad\u7d50\u679c\u3092\u8fd4\u3057\u307e\u3059\u3002\\n\\n\u30b5\u30fc\u30d0\u306b\u8a2d\u5b9a\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\u756a\u53f7\u3068\u6307\u5b9a\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\u756a\u53f7\u306e\u6bd4\u8f03\u3067\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u306e\u8981\u5426\u304c\u6c7a\u5b9a\u3057\u307e\u3059\u3002\\n\u5927\u5c0f\u6bd4\u8f03\u306f\u30bb\u30de\u30f3\u30c6\u30a3\u30c3\u30af\u30d0\u30fc\u30b8\u30e7\u30cb\u30f3\u30b0\u306e\u30eb\u30fc\u30eb\u306b\u6cbf\u3063\u3066\u5b9f\u65bd\u3055\u308c\u307e\u3059\u3002\\n\u5b9f\u969b\u306b\u5b58\u5728\u3059\u308b\u30d0\u30fc\u30b8\u30e7\u30f3\u756a\u53f7\u304b\u3069\u3046\u304b\u306f\u5224\u65ad\u7d50\u679c\u306b\u5f71\u97ff\u3057\u307e\u305b\u3093\u3002\\n\\n\u6b21\u306e\u5834\u5408\u306fHTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9404\uff08Not Found\uff09\u3092\u5fdc\u7b54\u3057\u307e\u3059\u3002\\n- ios\u307e\u305f\u306fandroid\u4ee5\u5916\u306e\u7a2e\u5225\u304c\u6307\u5b9a\u3055\u308c\u305f\u5834\u5408\\n- \u30bb\u30de\u30f3\u30c6\u30a3\u30c3\u30af\u30d0\u30fc\u30b8\u30e7\u30f3\u3068\u3057\u3066\u8a8d\u8b58\u3055\u308c\u306a\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u756a\u53f7\u304c\u6307\u5b9a\u3055\u308c\u305f\u5834\u5408\\n","tags":["System"]}},"/signup":{"post":{"summary":"\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u767b\u9332","tags":["Account"],"description":"\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u767b\u9332\u3057\u307e\u3059\u3002\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u767b\u9332\u306b\u306f\u3001\u30cb\u30c3\u30af\u30cd\u30fc\u30e0\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u5fc5\u8981\u3067\u3059\u3002\\n","operationId":"post-signup","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/AccountRegistration"}}}},"responses":{"201":{"description":"Created","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Account"}}},"headers":{"Location":{"schema":{"type":"string","format":"uri-reference","example":"/api/accounts/me"}}}},"400":{"$ref":"#/components/responses/BadRequest"}}}},"/login":{"post":{"summary":"\u30ed\u30b0\u30a4\u30f3\u3059\u308b","description":"\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u6307\u5b9a\u3057\u3066\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3059\u3002\\n","tags":["Account"],"operationId":"post-login","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/AccountLogin"},"examples":{"example":{"value":{"accountId":"30b65d82-8a64-4a3a-a097-031313f43c69","password":"f48ad168-68e7-4393-845e-e936795799d3"}}}}}},"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AccountLoginResponse"},"examples":{"example":{"value":{"status":"COMPLETE"}}}}}},"400":{"$ref":"#/components/responses/BadRequest"},"401":{"$ref":"#/components/responses/Unauthorized"}}}},"/logout":{"post":{"summary":"\u30ed\u30b0\u30a2\u30a6\u30c8\u3059\u308b","description":"","tags":["Account"],"operationId":"post-logout","responses":{"204":{"description":"No Content"},"400":{"$ref":"#/components/responses/BadRequest"},"403":{"$ref":"#/components/responses/Forbidden"}}}},"/accounts/{accountId}":{"parameters":[{"name":"accountId","in":"path","description":"\u30a2\u30ab\u30a6\u30f3\u30c8\u306eID","required":true,"schema":{"type":"string"}}],"get":{"summary":"\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u53d6\u5f97","description":"\u30a2\u30ab\u30a6\u30f3\u30c8ID\u3092\u30ad\u30fc\u3068\u3057\u3066\u767b\u9332\u3055\u308c\u3066\u3044\u308b\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u53d6\u5f97\u3059\u308b\u3002\\n","tags":["Account"],"operationId":"get-accounts-accountId","responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Account"}}}}}}},"/accounts/{accountId}/avatar":{"parameters":[{"name":"accountId","in":"path","description":"\u30a2\u30ab\u30a6\u30f3\u30c8\u306eID","required":true,"schema":{"type":"string"}}],"get":{"summary":"\u30a2\u30d0\u30bf\u30fc\u3092\u53d6\u5f97\u3059\u308b","description":"\u30a2\u30d0\u30bf\u30fc\u3092\u53d6\u5f97\u3059\u308b\u3002\\n","tags":["Account"],"operationId":"get-accounts-accountId-avatar","responses":{"200":{"description":"OK","content":{"image/*":{"schema":{"$ref":"#/components/schemas/AvatarImage"}}}}}}},"/accounts/me":{"get":{"summary":"\u30ed\u30b0\u30a4\u30f3\u6e08\u307f\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u53d6\u5f97","description":"\u30ed\u30b0\u30a4\u30f3\u6e08\u307f\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u53d6\u5f97\u3059\u308b\u3002\\n","tags":["Account"],"operationId":"get-accounts-me","responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Account"}}}},"403":{"$ref":"#/components/responses/Forbidden"}}}},"/accounts/me/avatar":{"get":{"summary":"\u30ed\u30b0\u30a4\u30f3\u6e08\u307f\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30a2\u30d0\u30bf\u30fc\u3092\u53d6\u5f97\u3059\u308b","description":"\u30ed\u30b0\u30a4\u30f3\u6e08\u307f\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30a2\u30d0\u30bf\u30fc\u3092\u53d6\u5f97\u3059\u308b\u3002\\n","tags":["Account"],"operationId":"get-accounts-me-avatar","responses":{"200":{"description":"OK","content":{"image/*":{"schema":{"$ref":"#/components/schemas/AvatarImage"}}}}}},"put":{"summary":"\u30ed\u30b0\u30a4\u30f3\u6e08\u307f\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30a2\u30d0\u30bf\u30fc\u3092\u767b\u9332\u3059\u308b","description":"\u30ed\u30b0\u30a4\u30f3\u6e08\u307f\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30a2\u30d0\u30bf\u30fc\u3092\u767b\u9332\u3059\u308b\u3002\\n","tags":["Account"],"operationId":"put-accounts-me-avatar","requestBody":{"content":{"multipart/form-data":{"schema":{"$ref":"#/components/schemas/AvatarImage"},"encoding":{"avatarImage":{"contentType":"image/*"}}}}},"responses":{"201":{"description":"Created","headers":{"Location":{"schema":{"type":"string","format":"uri-reference"},"description":"\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30a2\u30d0\u30bf\u30fc\u753b\u50cf\u306eURL"}}}}}},"/accounts/me/device-token":{"post":{"summary":"\u30ed\u30b0\u30a4\u30f3\u6e08\u307f\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30c7\u30d0\u30a4\u30b9\u767b\u9332\u30c8\u30fc\u30af\u30f3\u306e\u66f4\u65b0","description":"\u30ed\u30b0\u30a4\u30f3\u6e08\u307f\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30c7\u30d0\u30a4\u30b9\u767b\u9332\u30c8\u30fc\u30af\u30f3\u3092\u66f4\u65b0\u3059\u308b\u3002\\n","tags":["Account"],"operationId":"post-accounts-me-device-token","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/UpdateDeviceToken"}}}},"responses":{"204":{"description":"No Content"}}}},"/accounts/me/terms":{"get":{"summary":"\u30ed\u30b0\u30a4\u30f3\u6e08\u307f\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u5229\u7528\u898f\u7d04\u540c\u610f\u72b6\u614b\u78ba\u8a8d","description":"\u30ed\u30b0\u30a4\u30f3\u6e08\u307f\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u6709\u52b9\u306a\u5229\u7528\u898f\u7d04\u306b\u540c\u610f\u3057\u3066\u3044\u308b\u304b\u306e\u72b6\u614b\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002\\n","tags":["Account"],"operationId":"get-accounts-me-terms","responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/TermsOfServiceAgreementStatus"}}}}}},"post":{"summary":"\u30ed\u30b0\u30a4\u30f3\u6e08\u307f\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u5229\u7528\u898f\u7d04\u540c\u610f","description":"\u30ed\u30b0\u30a4\u30f3\u6e08\u307f\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u304a\u3044\u3066\u3001\u6307\u5b9a\u3055\u308c\u305f\u5229\u7528\u898f\u7d04\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u540c\u610f\u3057\u307e\u3059\u3002\\n","tags":["Account"],"operationId":"post-accounts-me-terms","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/TermsOfServiceAgreementStatus"}}}},"responses":{"201":{"description":"Created","content":{"application/json":{"schema":{"$ref":"#/components/schemas/TermsOfServiceAgreementStatus"}}}},"400":{"$ref":"#/components/responses/BadRequest"}}}},"/accounts/me/delete":{"post":{"summary":"\u30ed\u30b0\u30a4\u30f3\u6e08\u307f\u30a2\u30ab\u30a6\u30f3\u30c8\u524a\u9664","description":"\u30ed\u30b0\u30a4\u30f3\u6e08\u307f\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u524a\u9664\u3057\u307e\u3059\u3002\\n\\n\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u524a\u9664\u306b\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u8981\u6c42\u3059\u308b\u306e\u3067\u3001DELETE\u30e1\u30bd\u30c3\u30c9\u3067\u306f\u306a\u304fPOST\u30e1\u30bd\u30c3\u30c9\u3092\u5229\u7528\u3057\u3066\u3044\u307e\u3059\u3002\\n\\n\u53c2\u8003: [4.3.5. DELETE - RFC 7231](https://datatracker.ietf.org/doc/html/rfc7231#section-4.3.5)\\n\\n> A payload within a DELETE request message has no defined semantics;\\n> sending a payload body on a DELETE request might cause some existing\\n> implementations to reject the request.\\n","tags":["Account"],"operationId":"delete-accounts-me-delete","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/AccountDeletion"}}}},"responses":{"204":{"description":"No Content"},"400":{"$ref":"#/components/responses/BadRequest"},"401":{"$ref":"#/components/responses/Unauthorized"},"403":{"$ref":"#/components/responses/Forbidden"}}}},"/terms":{"get":{"summary":"\u6709\u52b9\u306a\u5229\u7528\u898f\u7d04\u306e\u53d6\u5f97","description":"\u6709\u52b9\u306a\u5229\u7528\u898f\u7d04\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002\u3053\u306eAPI\u306e\u547c\u3073\u51fa\u3057\u306b\u306f\u8a8d\u8a3c\u60c5\u5831\u306f\u4e0d\u8981\u3067\u3059\u3002\\n","tags":["Terms"],"security":[],"operationId":"get-terms","responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/TermsOfService"}}}}}}},"/teams":{"post":{"summary":"\u30c1\u30fc\u30e0\u767b\u9332","description":"\u30c1\u30fc\u30e0\u3092\u767b\u9332\u3057\u307e\u3059\u3002\u30c1\u30fc\u30e0\u3092\u4f5c\u6210\u3057\u305f\u30a2\u30ab\u30a6\u30f3\u30c8\u306f \u7279\u6a29\u30e6\u30fc\u30b6\u3068\u3057\u3066\u767b\u9332\u3055\u308c\u307e\u3059\u3002\\n","tags":["Team"],"operationId":"post-teams","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Team"}}}},"responses":{"201":{"description":"Created","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Team"}}}}}}},"/teams/{teamId}":{"parameters":[{"name":"teamId","in":"path","description":"\u30c1\u30fc\u30e0\u306eID","required":true,"schema":{"type":"string"}}],"get":{"summary":"\u30c1\u30fc\u30e0\u53d6\u5f97","description":"\u30c1\u30fc\u30e0ID\u3092\u6307\u5b9a\u3057\u3066\u3001\u30c1\u30fc\u30e0\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002\\n","tags":["Team"],"operationId":"get-teams-teamId","responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Team"}}}}}}},"/teams/{teamId}/invitation-code":{"parameters":[{"name":"teamId","in":"path","description":"\u30c1\u30fc\u30e0\u306eID","required":true,"schema":{"type":"string"}}],"post":{"summary":"\u62db\u5f85\u30b3\u30fc\u30c9\u767a\u884c","description":"\u30c1\u30fc\u30e0\u306e\u53c2\u52a0\u306b\u5fc5\u8981\u306a\u62db\u5f85\u30b3\u30fc\u30c9\u3092\u767a\u884c\u3057\u307e\u3059\u3002\\n","tags":["Team"],"operationId":"post-teams-teamId-invitation-code","responses":{"201":{"description":"Created","content":{"application/json":{"schema":{"$ref":"#/components/schemas/TeamInvitation"}}}}}}},"/teams/{teamId}/join":{"parameters":[{"name":"teamId","in":"path","description":"\u30c1\u30fc\u30e0\u306eID","required":true,"schema":{"type":"string"}}],"post":{"summary":"\u30c1\u30fc\u30e0\u53c2\u52a0","description":"\u30c1\u30fc\u30e0\u306b\u53c2\u52a0\u3057\u307e\u3059\u3002\\n","tags":["Team"],"operationId":"post-teams-teamId-join","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/TeamInvitation"}}}},"responses":{"201":{"description":"Created","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Team"}}}}}}},"/teams/{teamId}/timetable-templates":{"parameters":[{"name":"teamId","in":"path","description":"\u30c1\u30fc\u30e0\u306eID","required":true,"schema":{"type":"string"}}],"get":{"summary":"\u6642\u9593\u5272\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u4e00\u89a7\u53d6\u5f97","description":"\u6642\u9593\u5272\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u4e00\u89a7\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002\\n","tags":["Team"],"operationId":"get-teams-teamId-timetable-templates","parameters":[{"schema":{"type":"string"},"in":"query","name":"sort","description":"\u30bd\u30fc\u30c8"},{"schema":{"type":"number"},"in":"query","name":"limit","description":"1\u30da\u30fc\u30b8\u306e\u4e0a\u9650\u4ef6\u6570"},{"schema":{"type":"number"},"in":"query","name":"page","description":"\u53d6\u5f97\u3059\u308b\u30da\u30fc\u30b8\u756a\u53f7"}],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"type":"array","description":"\u6642\u9593\u5272\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u4e00\u89a7","items":{"$ref":"#/components/schemas/TimetableTemplate"}}}}}}},"post":{"summary":"\u6642\u9593\u5272\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u767b\u9332","description":"\u6642\u9593\u5272\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u767b\u9332\u3057\u307e\u3059\u3002\\n","tags":["Team"],"operationId":"post-teams-teamId-timetable-templates","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/TimetableTemplate"}}}},"responses":{"201":{"description":"Created","content":{"application/json":{"schema":{"$ref":"#/components/schemas/TimetableTemplate"}}}}}}},"/teams/{teamId}/timetable-templates/{templateId}":{"parameters":[{"name":"teamId","in":"path","description":"\u30c1\u30fc\u30e0\u306eID","required":true,"schema":{"type":"string"}},{"name":"templateId","in":"path","description":"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306eID","required":true,"schema":{"type":"string"}}],"get":{"summary":"\u6642\u9593\u5272\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u53d6\u5f97","description":"\u6642\u9593\u5272\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002\\n","tags":["Team"],"operationId":"get-teams-teamId-timetable-templates-templateId","responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/TimetableTemplate"}}}}}},"put":{"summary":"\u6642\u9593\u5272\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u66f4\u65b0","description":"\u6642\u9593\u5272\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002\\n","tags":["Team"],"operationId":"put-teams-teamId-timetable-templates-templateId","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/TimetableTemplate"}}}},"responses":{"201":{"description":"update","content":{"application/json":{"schema":{"$ref":"#/components/schemas/TimetableTemplate"}}}}}}},"/teams/{teamId}/timetables/{timetableId}":{"parameters":[{"schema":{"type":"string"},"name":"teamId","in":"path","required":true,"description":"\u30c1\u30fc\u30e0ID"},{"schema":{"type":"string"},"name":"timetableId","in":"path","required":true,"description":"\u6642\u9593\u5272ID"}],"get":{"summary":"\u5f53\u65e5\u306e\u6642\u9593\u5272\u53d6\u5f97","description":"\u5f53\u65e5\u306e\u6642\u9593\u5272\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002\\n","tags":["Team"],"operationId":"get-teams-teamId-timetables-timetableId","responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/TimetableOfDay"}}}}}},"put":{"summary":"\u4eca\u65e5\u306e\u6642\u9593\u5272\u958b\u59cb","description":"\u4eca\u65e5\u306e\u6642\u9593\u5272\u3092\u958b\u59cb\u3057\u307e\u3059\u3002\u30c1\u30fc\u30e0\u30e1\u30f3\u30d0\u30fc\u306b\u4eca\u65e5\u306e\u6642\u9593\u5272\u306e\u958b\u59cb\u3092\u901a\u77e5\u3057\u307e\u3059\u3002","tags":["Team"],"operationId":"put-teams-teamId-timetables-timetableId","responses":{"201":{"description":"update","content":{"application/json":{"schema":{"$ref":"#/components/schemas/TimetableOfDay"}}}}}}},"/teams/{teamId}/timetables":{"parameters":[{"schema":{"type":"string"},"name":"teamId","in":"path","required":true,"description":"\u30c1\u30fc\u30e0ID"}],"get":{"summary":"\u5f53\u65e5\u306e\u6642\u9593\u5272\u4e00\u89a7\u53d6\u5f97","description":"\u5f53\u65e5\u306e\u6642\u9593\u5272\u306e\u4e00\u89a7\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002\\n","tags":["Team"],"operationId":"get-teams-teamId-timetables","parameters":[{"name":"limit","in":"query","description":"\u4e0a\u9650\u4ef6\u6570","schema":{"type":"number"}},{"schema":{"type":"string"},"in":"query","name":"sort","description":"\u30bd\u30fc\u30c8"},{"schema":{"type":"number"},"in":"query","name":"since","description":"\u691c\u7d22\u5bfe\u8c61\u65e5\u4ed8From"},{"schema":{"type":"string"},"in":"query","name":"until","description":"\u691c\u7d22\u5bfe\u8c61\u65e5\u4ed8To"}],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"type":"array","description":"\u5f53\u65e5\u306e\u6642\u9593\u5272\u4e00\u89a7","items":{"$ref":"#/components/schemas/TimetableOfDay"}}}}}}},"post":{"summary":"\u5f53\u65e5\u306e\u6642\u9593\u5272\u767b\u9332","description":"\u5f53\u65e5\u306e\u6642\u9593\u5272\u3092\u767b\u9332\u3057\u307e\u3059\u3002","tags":["Team"],"operationId":"post-teams-teamId-timetables","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/TimetableOfDayInput"}}}},"responses":{"201":{"description":"Created","content":{"application/json":{"schema":{"$ref":"#/components/schemas/TimetableOfDay"}}}}}}}},"components":{"schemas":{"CsrfTokenResponse":{"title":"CSRF-Token","type":"object","description":"CSRF\u30c8\u30fc\u30af\u30f3\u30ec\u30b9\u30dd\u30f3\u30b9","properties":{"csrfTokenValue":{"type":"string","description":"\u30c8\u30fc\u30af\u30f3\u306e\u5024"},"csrfTokenHeaderName":{"type":"string","description":"\u30c8\u30fc\u30af\u30f3\u306e\u30d8\u30c3\u30c0\u30fc\u540d"},"csrfTokenParameterName":{"type":"string","description":"\u30c8\u30fc\u30af\u30f3\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u540d"}},"required":["csrfTokenValue","csrfTokenHeaderName","csrfTokenParameterName"]},"AppUpdatesResponse":{"title":"AppUpdatesResponse","type":"object","description":"\u30a2\u30d7\u30ea\u66f4\u65b0\u60c5\u5831\u306e\u30ec\u30b9\u30dd\u30f3\u30b9","properties":{"updateRequired":{"type":"boolean","description":"\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u304c\u5fc5\u8981\u304b\u3069\u3046\u304b"},"supportedVersion":{"type":"string","description":"\u30b5\u30dd\u30fc\u30c8\u30d0\u30fc\u30b8\u30e7\u30f3\u756a\u53f7"},"message":{"type":"string","description":"\u30e1\u30c3\u30bb\u30fc\u30b8"}},"required":["updateRequired","supportedVersion","message"]},"Profile":{"title":"Profile","type":"object","description":"\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u60c5\u5831","properties":{"nickname":{"type":"string","description":"\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30cb\u30c3\u30af\u30cd\u30fc\u30e0"},"avatarImageUrl":{"type":"string","description":"\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30a2\u30d0\u30bf\u30fc\u753b\u50cf\u306eURL"}}},"Account":{"title":"Account","description":"\u30a2\u30ab\u30a6\u30f3\u30c8","allOf":[{"$ref":"#/components/schemas/AccountProfile"},{"$ref":"#/components/schemas/AccountJoinedTeam"},{"$ref":"#/components/schemas/AccountDeviceTokens"}]},"AccountProfile":{"title":"AccountProfile","type":"object","description":"\u30a2\u30ab\u30a6\u30f3\u30c8\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u60c5\u5831","properties":{"accountId":{"type":"string","description":"\u30a2\u30ab\u30a6\u30f3\u30c8ID","readOnly":true},"profile":{"$ref":"#/components/schemas/Profile"}},"required":["accountId","nickname"]},"AccountJoinedTeam":{"title":"AccountJoinedTeam","type":"object","description":"\u30a2\u30ab\u30a6\u30f3\u30c8\u30c1\u30fc\u30e0\u60c5\u5831","properties":{"defaultTeamId":{"type":"string","description":"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30c1\u30fc\u30e0ID"},"joinedTeamIdList":{"type":"array","items":{"type":"string"},"description":"\u53c2\u52a0\u6e08\u307f\u30c1\u30fc\u30e0ID\u4e00\u89a7"}}},"AccountDeviceTokens":{"title":"AccountDeviceTokens","type":"object","description":"\u30a2\u30ab\u30a6\u30f3\u30c8\u7d10\u3065\u304f\u30c7\u30d0\u30a4\u30b9\u30c8\u30fc\u30af\u30f3","properties":{"deviceTokens":{"type":"array","items":{"type":"string"},"description":"\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u7d10\u3065\u304f\u30c7\u30d0\u30a4\u30b9\u30c8\u30fc\u30af\u30f3\uff08\u30c7\u30d0\u30a4\u30b9\u30c8\u30fc\u30af\u30f3\u306e\u66f4\u65b0\u671f\u9650\u3092\u8d85\u904e\u3057\u3066\u3044\u308b\u3082\u306e\u306f\u9664\u304f\uff09"}},"required":["deviceTokens"]},"AccountRegistration":{"title":"AccountRegistration","type":"object","description":"\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u767b\u9332\u60c5\u5831","properties":{"nickname":{"type":"string","description":"\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30cb\u30c3\u30af\u30cd\u30fc\u30e0"},"password":{"type":"string","description":"\u30d1\u30b9\u30ef\u30fc\u30c9"}}},"AccountLogin":{"title":"AccountLogin","type":"object","description":"\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30ed\u30b0\u30a4\u30f3\u60c5\u5831","properties":{"accountId":{"type":"string","description":"\u30a2\u30ab\u30a6\u30f3\u30c8ID"},"password":{"type":"string","description":"\u30d1\u30b9\u30ef\u30fc\u30c9"}}},"AccountLoginResponse":{"title":"AccountLoginResponse","type":"object","description":"\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30ed\u30b0\u30a4\u30f3\u7d50\u679c","properties":{"status":{"type":"string","enum":["COMPLETE"]}},"required":["status"]},"AccountDeletion":{"title":"AccountDeletion","type":"object","description":"\u30a2\u30ab\u30a6\u30f3\u30c8\u524a\u9664","properties":{"password":{"type":"string","description":"\u30d1\u30b9\u30ef\u30fc\u30c9"}}},"AvatarImage":{"title":"AvatarImage","type":"object","description":"\u30a2\u30d0\u30bf\u30fc\u753b\u50cf","properties":{"avatarImage":{"type":"string","format":"binary","description":"\u30a2\u30d0\u30bf\u30fc\u753b\u50cf"}}},"UpdateDeviceToken":{"title":"AddDeviceToken","type":"object","description":"\u66f4\u65b0\u3059\u308b\u30c7\u30d0\u30a4\u30b9\u767b\u9332\u30c8\u30fc\u30af\u30f3","properties":{"newDeviceToken":{"type":"string","description":"\u767b\u9332\u3059\u308b\u30c7\u30d0\u30a4\u30b9\u767b\u9332\u30c8\u30fc\u30af\u30f3"},"oldDeviceToken":{"type":"string","description":"\u524a\u9664\u3059\u308b\u30c7\u30d0\u30a4\u30b9\u767b\u9332\u30c8\u30fc\u30af\u30f3"}}},"TermsOfService":{"title":"TermsOfService","type":"object","description":"\u5229\u7528\u898f\u7d04","properties":{"version":{"type":"string","description":"\u6700\u65b0\u306e\u5229\u7528\u898f\u7d04\u306e\u30d0\u30fc\u30b8\u30e7\u30f3"},"url":{"type":"string","description":"\u5229\u7528\u898f\u7d04\u306eURL"}},"required":["version","url"]},"TermsOfServiceAgreementStatus":{"title":"TermsOfServiceAgreementStatus","type":"object","description":"\u5229\u7528\u898f\u7d04\u540c\u610f\u72b6\u614b","properties":{"hasAgreed":{"type":"boolean","description":"\u6709\u52b9\u306a\u5229\u7528\u898f\u7d04\u306b\u540c\u610f\u6e08\u307f\u304b\u3069\u3046\u304b","readOnly":true},"agreedVersion":{"type":"string","description":"\u540c\u610f\u3057\u305f\u5229\u7528\u898f\u7d04\u306e\u30d0\u30fc\u30b8\u30e7\u30f3"}},"required":["agreedVersion"]},"Team":{"title":"Team","type":"object","description":"\u30c1\u30fc\u30e0","properties":{"teamId":{"type":"string","description":"\u30c1\u30fc\u30e0ID","readOnly":true},"teamName":{"type":"string","description":"\u30c1\u30fc\u30e0\u540d"},"teamMemberList":{"type":"array","items":{"$ref":"#/components/schemas/TeamMember"},"description":"\u30c1\u30fc\u30e0\u30e1\u30f3\u30d0\u30fc","readOnly":true}},"x-examples":{}},"TeamMember":{"title":"TeamMember","description":"\u30c1\u30fc\u30e0\u30e1\u30f3\u30d0\u30fc","properties":{"teamMemberAuthority":{"type":"string","description":"\u30c1\u30fc\u30e0\u30e1\u30f3\u30d0\u30fc\u6a29\u9650"}},"allOf":[{"$ref":"#/components/schemas/AccountProfile"}],"x-examples":{}},"TeamInvitation":{"title":"TeamInvitation","type":"object","description":"\u30c1\u30fc\u30e0\u62db\u5f85","properties":{"invitationCode":{"type":"string","description":"\u62db\u5f85\u30b3\u30fc\u30c9"},"expirationDate":{"type":"string","description":"\u6709\u52b9\u671f\u9650","readOnly":true}}},"TimetableOfDay":{"title":"TimetableOfDay","type":"object","description":"\u5f53\u65e5\u306e\u6642\u9593\u5272","properties":{"timetableId":{"type":"string","description":"\u6642\u9593\u5272ID","readOnly":true},"timetableName":{"type":"string","description":"\u6642\u9593\u5272\u540d"},"timetableDate":{"type":"string","description":"\u5f53\u65e5\u65e5\u4ed8","format":"date"},"timetableStartedAt":{"type":"string","description":"\u6642\u9593\u5272\u958b\u59cb\u65e5\u6642","format":"date-time"},"periodList":{"type":"array","description":"\u30b3\u30de\u4e00\u89a7","items":{"$ref":"#/components/schemas/Period"}}}},"Period":{"description":"\u6642\u9593\u5272\u306e\u30b3\u30de","type":"object","title":"Period","properties":{"timeBoxName":{"type":"string","description":"\u30b3\u30de\u540d"},"startTime":{"type":"string","description":"\u958b\u59cb\u6642\u9593","format":"time"},"endTime":{"type":"string","description":"\u7d42\u4e86\u6642\u9593","format":"time"}}},"TimetableTemplate":{"title":"TimetableTemplate","type":"object","description":"\u6642\u9593\u5272\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30e2\u30c7\u30eb","properties":{"timetableTemplateId":{"type":"string","description":"\u6642\u9593\u5272\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8ID","readOnly":true},"timetableTemplateName":{"type":"string","description":"\u6642\u9593\u5272\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u540d"},"periodTemplateList":{"type":"array","description":"\u30b3\u30de\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u4e00\u89a7","items":{"$ref":"#/components/schemas/PeriodTemplate"}}}},"PeriodTemplate":{"description":"\u30b3\u30de\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30e2\u30c7\u30eb","type":"object","x-examples":{},"title":"PeriodTemplate","properties":{"timeBoxName":{"type":"string","description":"\u30b3\u30de\u540d"},"startTime":{"type":"string","description":"\u958b\u59cb\u6642\u9593","format":"time"},"endTime":{"type":"string","description":"\u7d42\u4e86\u6642\u9593","format":"time"}}},"TimetableOfDayInput":{"title":"TimetableOfDayInput","type":"object","properties":{"timetableTemplateId":{"type":"string","description":"\u6642\u9593\u5272\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8ID"},"timatebleDate":{"type":"string","description":"\u5f53\u65e5\u65e5\u4ed8","format":"date"}},"description":"\u5f53\u65e5\u6642\u9593\u5272\u767b\u9332\u306e\u30a4\u30f3\u30d7\u30c3\u30c8"},"ErrorResponse":{"title":"Error","type":"object","description":"\u30a8\u30e9\u30fc\u30ec\u30b9\u30dd\u30f3\u30b9","properties":{"code":{"type":"string","description":"\u30a8\u30e9\u30fc\u30b3\u30fc\u30c9"},"message":{"type":"string","description":"\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8"}},"required":["code","message"]}},"responses":{"BadRequest":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorResponse"}}}},"Unauthorized":{"description":"Unauthorized","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorResponse"}}}},"Forbidden":{"description":"Forbidden","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorResponse"}}}},"NotFound":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorResponse"}}}},"Conflict":{"description":"Conflict","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorResponse"}}}},"PayloadTooLarge":{"description":"Payload Too Large","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorResponse"}}}},"ServiceUnavailable":{"description":"Service Unavailable","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorResponse"}}}}},"securitySchemes":{"Session":{"type":"apiKey","in":"cookie","name":"NABLARCH_SID","description":"Cookie\u306b\u683c\u7d0d\u3055\u308c\u305f\u30bb\u30c3\u30b7\u30e7\u30f3ID\u3067\u8a8d\u8a3c\u72b6\u614b\u3092\u7dad\u6301\u3057\u307e\u3059\u3002"}}}}}')}}]);