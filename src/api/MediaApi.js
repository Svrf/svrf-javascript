/**
 * SVRF API
 * # Getting Started  SVRF's API allows you to supercharge your project or app with the first and largest search engine for immersive experiences. We make it simple for any developer to incorporate highly immersive experiences with all kinds of applications: virtual reality, augmented reality, mixed reality, mobile, and web.  The SVRF API is based on REST principles, allowing it to integrate cross-platform. Our endpoints return responses in [JSON][]. We support [CORS][], allowing you to access immersive experiences indexed by SVRF on your own web domains. We provide a variety of resolutions, projections, and file formats to support most modern clients.  The SVRF API Documentation is available at [https://developers.svrf.com][SVRF Dev].  ## Access and API Keys  The SVRF API is currently in private beta and access is limited to select partners. If you are interested in using the SVRF API for your app or project, please contact us at [api@svrf.com][API Email]. We cannot guarantee immediate access for all requests, but we will announce a public release in the coming months.  See our [terms of service][TOS] for restrictions on using the SVRF API.  If you have any questions please contact us at [api@svrf.com][API Email]. Submit API corrections via [GitHub Issues][].  ## API Highlights  ### Search Endpoint  The [SVRF Search Endpoint][Docs Search] brings the power of immersive search found on [SVRF.com][SVRF] to your app or project. Our search engine enables your users to instantly find the immersive experience they are seeking. Content is sorted by the SVRF rating system, ensuring that the highest quality and most relevant search results are returned first.  ### Trending Endpoint  The [SVRF Trending Endpoint][Docs Trending] provides your app or project with the hottest immersive content - curated by real humans. The experiences returned mirror the [SVRF homepage][SVRF], from timely cultural content to trending pop-culture references. The experiences are updated regularly to ensure users always get a fresh list of immersive content.  ## Attribution  ### Authors and Site Credit  At SVRF, we believe in giving credit where credit is due. Do your best to provide attribution to the `authors` and `site` where the content originated. We suggest using the format: __by {authors} via {site}__.  If possible, provide a way for users to discover and visit the page the content originally came from (`url`).  ### Powered By SVRF  As per section 5a of the [terms of service][TOS], __we require all apps that use the SVRF API to conspicuously display \"Powered By SVRF\" attribution marks where the API is utilized.__  ## Rate Limits  The SVRF API has a generous rate limit to ensure the best experience for your users. We rate limit by IP address with a maximum of 100 requests per second. If you exceed this rate limit, requests will be blocked for 60 seconds. Requests blocked by the rate limit will return with status code `429`.  [API Email]: mailto:api@svrf.com [CORS]: https://en.wikipedia.org/wiki/Cross-origin_resource_sharing [Docs Search]: https://developers.svrf.com/#tag/Media/paths/~1vr~1search?q={q}/get [Docs Trending]: https://developers.svrf.com/#tag/Media/paths/~1vr~1trending/get [GitHub Issues]: https://github.com/Svrf/svrf-api/issues [JSON]: http://www.json.org/ [SVRF]: https://www.svrf.com [SVRF Dev]: https://developers.svrf.com [TOS]: https://www.svrf.com/terms 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: api@svrf.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ErrorResponse', 'model/RateLimitResponse', 'model/SearchMediaResponse', 'model/SingleMediaResponse', 'model/TrendingResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorResponse'), require('../model/RateLimitResponse'), require('../model/SearchMediaResponse'), require('../model/SingleMediaResponse'), require('../model/TrendingResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.SVRF) {
      root.SVRF = {};
    }
    root.SVRF.MediaApi = factory(root.SVRF.ApiClient, root.SVRF.ErrorResponse, root.SVRF.RateLimitResponse, root.SVRF.SearchMediaResponse, root.SVRF.SingleMediaResponse, root.SVRF.TrendingResponse);
  }
}(this, function(ApiClient, ErrorResponse, RateLimitResponse, SearchMediaResponse, SingleMediaResponse, TrendingResponse) {
  'use strict';

  /**
   * Media service.
   * @module api/MediaApi
   * @version 1.0.0
   */

  /**
   * Constructs a new MediaApi. 
   * @alias module:api/MediaApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Media by ID Endpoint
     * Fetch media by its ID.
     * @param {String} id ID of Media
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SingleMediaResponse} and HTTP response
     */
    this.getByIdWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getById");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['XAppToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = SingleMediaResponse;

      return this.apiClient.callApi(
        '/vr/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Media by ID Endpoint
     * Fetch media by its ID.
     * @param {String} id ID of Media
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SingleMediaResponse}
     */
    this.getById = function(id) {
      return this.getByIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Trending Endpoint
     * The SVRF Trending Endpoint provides your app or project with the hottest immersive content curated by real humans. The experiences returned mirror the [SVRF homepage](https://www.svrf.com), from timely cultural content to trending pop-culture references. The trending experiences are updated regularly to ensure users always get fresh updates of immersive content.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of results per page.
     * @param {String} opts.nextPageCursor Pass this cursor ID to get the next page of results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TrendingResponse} and HTTP response
     */
    this.getTrendingWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'size': opts['size'],
        'nextPageCursor': opts['nextPageCursor'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['XAppToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TrendingResponse;

      return this.apiClient.callApi(
        '/vr/trending', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Trending Endpoint
     * The SVRF Trending Endpoint provides your app or project with the hottest immersive content curated by real humans. The experiences returned mirror the [SVRF homepage](https://www.svrf.com), from timely cultural content to trending pop-culture references. The trending experiences are updated regularly to ensure users always get fresh updates of immersive content.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of results per page.
     * @param {String} opts.nextPageCursor Pass this cursor ID to get the next page of results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TrendingResponse}
     */
    this.getTrending = function(opts) {
      return this.getTrendingWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search Endpoint
     * The SVRF Search Endpoint brings the power of immersive search found on [SVRF.com](https://www.svrf.com) to your app or project. SVRF&#39;s search engine enables your users to instantly find the immersive experience they&#39;re seeking. Content is sorted by the SVRF rating system, ensuring that the highest quality content and most prevalent search results are returned. 
     * @param {String} q Url-encoded search query
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.type The type of Media to be returned
     * @param {module:model/String} opts.stereoscopicType Search only for Media with a particular stereoscopic type
     * @param {Number} opts.size The number of results to return per-page, from 1 to 100 default: 10
     * @param {Number} opts.pageNum Pagination control to fetch the next page of results, if applicable
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SearchMediaResponse} and HTTP response
     */
    this.searchWithHttpInfo = function(q, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'q' is set
      if (q === undefined || q === null) {
        throw new Error("Missing the required parameter 'q' when calling search");
      }


      var pathParams = {
      };
      var queryParams = {
        'q': q,
        'type': opts['type'],
        'stereoscopicType': opts['stereoscopicType'],
        'size': opts['size'],
        'pageNum': opts['pageNum'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['XAppToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = SearchMediaResponse;

      return this.apiClient.callApi(
        '/vr/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Search Endpoint
     * The SVRF Search Endpoint brings the power of immersive search found on [SVRF.com](https://www.svrf.com) to your app or project. SVRF&#39;s search engine enables your users to instantly find the immersive experience they&#39;re seeking. Content is sorted by the SVRF rating system, ensuring that the highest quality content and most prevalent search results are returned. 
     * @param {String} q Url-encoded search query
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.type The type of Media to be returned
     * @param {module:model/String} opts.stereoscopicType Search only for Media with a particular stereoscopic type
     * @param {Number} opts.size The number of results to return per-page, from 1 to 100 default: 10
     * @param {Number} opts.pageNum Pagination control to fetch the next page of results, if applicable
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SearchMediaResponse}
     */
    this.search = function(q, opts) {
      return this.searchWithHttpInfo(q, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
