/* tslint:disable */
/* eslint-disable */
/**
 * SantokuApp Sandbox REST API
 * SantokuApp Sandbox REST API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * Error Response
 * @export
 * @interface ErrorResponse
 */
export interface ErrorResponse {
    /**
     * Error code
     * @type {string}
     * @memberof ErrorResponse
     */
    'code': string;
    /**
     * Error message
     * @type {string}
     * @memberof ErrorResponse
     */
    'message': string;
}
/**
 * ListTodoResponse
 * @export
 * @interface ListTodoResponse
 */
export interface ListTodoResponse {
    /**
     * Current page number
     * @type {number}
     * @memberof ListTodoResponse
     */
    'currentPage': number;
    /**
     * Next page number (return null if not exists)
     * @type {number}
     * @memberof ListTodoResponse
     */
    'nextPage': number | null;
    /**
     * 
     * @type {Array<Todo>}
     * @memberof ListTodoResponse
     */
    'data': Array<Todo>;
}
/**
 * Todo
 * @export
 * @interface Todo
 */
export interface Todo {
    /**
     * Todo Id
     * @type {number}
     * @memberof Todo
     */
    'id': number;
    /**
     * Todo title
     * @type {string}
     * @memberof Todo
     */
    'title': string;
    /**
     * Todo description
     * @type {string}
     * @memberof Todo
     */
    'description': string;
}
/**
 * TodoRegistration
 * @export
 * @interface TodoRegistration
 */
export interface TodoRegistration {
    /**
     * Todo title
     * @type {string}
     * @memberof TodoRegistration
     */
    'title': string;
    /**
     * Todo description
     * @type {string}
     * @memberof TodoRegistration
     */
    'description': string;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete todo
         * @summary Delete todo
         * @param {string} todoId Todo ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTodo: async (todoId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'todoId' is not null or undefined
            assertParamExists('deleteTodo', 'todoId', todoId)
            const localVarPath = `/todos/{todoId}`
                .replace(`{${"todoId"}}`, encodeURIComponent(String(todoId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Session required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get todo
         * @summary Get todo
         * @param {string} todoId Todo ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTodo: async (todoId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'todoId' is not null or undefined
            assertParamExists('getTodo', 'todoId', todoId)
            const localVarPath = `/todos/{todoId}`
                .replace(`{${"todoId"}}`, encodeURIComponent(String(todoId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Session required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List todo
         * @summary List todo
         * @param {number} [page] ページ番号
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listTodo: async (page?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/todos`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Session required

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create todo
         * @summary Create todo
         * @param {TodoRegistration} [todoRegistration] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postTodo: async (todoRegistration?: TodoRegistration, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/todos`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Session required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(todoRegistration, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update todo
         * @summary Update todo
         * @param {string} todoId Todo ID
         * @param {TodoRegistration} [todoRegistration] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putTodo: async (todoId: string, todoRegistration?: TodoRegistration, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'todoId' is not null or undefined
            assertParamExists('putTodo', 'todoId', todoId)
            const localVarPath = `/todos/{todoId}`
                .replace(`{${"todoId"}}`, encodeURIComponent(String(todoId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Session required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(todoRegistration, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * Delete todo
         * @summary Delete todo
         * @param {string} todoId Todo ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteTodo(todoId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTodo(todoId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get todo
         * @summary Get todo
         * @param {string} todoId Todo ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTodo(todoId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Todo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTodo(todoId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List todo
         * @summary List todo
         * @param {number} [page] ページ番号
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listTodo(page?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListTodoResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listTodo(page, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Create todo
         * @summary Create todo
         * @param {TodoRegistration} [todoRegistration] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postTodo(todoRegistration?: TodoRegistration, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Todo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postTodo(todoRegistration, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update todo
         * @summary Update todo
         * @param {string} todoId Todo ID
         * @param {TodoRegistration} [todoRegistration] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putTodo(todoId: string, todoRegistration?: TodoRegistration, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Todo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.putTodo(todoId, todoRegistration, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * Delete todo
         * @summary Delete todo
         * @param {string} todoId Todo ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTodo(todoId: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteTodo(todoId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get todo
         * @summary Get todo
         * @param {string} todoId Todo ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTodo(todoId: string, options?: any): AxiosPromise<Todo> {
            return localVarFp.getTodo(todoId, options).then((request) => request(axios, basePath));
        },
        /**
         * List todo
         * @summary List todo
         * @param {number} [page] ページ番号
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listTodo(page?: number, options?: any): AxiosPromise<ListTodoResponse> {
            return localVarFp.listTodo(page, options).then((request) => request(axios, basePath));
        },
        /**
         * Create todo
         * @summary Create todo
         * @param {TodoRegistration} [todoRegistration] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postTodo(todoRegistration?: TodoRegistration, options?: any): AxiosPromise<Todo> {
            return localVarFp.postTodo(todoRegistration, options).then((request) => request(axios, basePath));
        },
        /**
         * Update todo
         * @summary Update todo
         * @param {string} todoId Todo ID
         * @param {TodoRegistration} [todoRegistration] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putTodo(todoId: string, todoRegistration?: TodoRegistration, options?: any): AxiosPromise<Todo> {
            return localVarFp.putTodo(todoId, todoRegistration, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * Delete todo
     * @summary Delete todo
     * @param {string} todoId Todo ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public deleteTodo(todoId: string, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).deleteTodo(todoId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get todo
     * @summary Get todo
     * @param {string} todoId Todo ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getTodo(todoId: string, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).getTodo(todoId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List todo
     * @summary List todo
     * @param {number} [page] ページ番号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public listTodo(page?: number, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).listTodo(page, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create todo
     * @summary Create todo
     * @param {TodoRegistration} [todoRegistration] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public postTodo(todoRegistration?: TodoRegistration, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).postTodo(todoRegistration, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update todo
     * @summary Update todo
     * @param {string} todoId Todo ID
     * @param {TodoRegistration} [todoRegistration] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public putTodo(todoId: string, todoRegistration?: TodoRegistration, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).putTodo(todoId, todoRegistration, options).then((request) => request(this.axios, this.basePath));
    }
}


