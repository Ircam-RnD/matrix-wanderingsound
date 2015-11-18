// Import external libraries
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

// Import Soundworks modules (server side)

var _soundworksServer = require('soundworks/server');

var _soundworksServer2 = _interopRequireDefault(_soundworksServer);

// Import Soundfield modules (server side)

var _PlayerPerformanceJs = require('./PlayerPerformance.js');

var _PlayerPerformanceJs2 = _interopRequireDefault(_PlayerPerformanceJs);

var _SoloistPerformanceJs = require('./SoloistPerformance.js');

var _SoloistPerformanceJs2 = _interopRequireDefault(_SoloistPerformanceJs);

// Instantiate the modules
var express = require('express');
var path = require('path');
var server = _soundworksServer2['default'].server;var setup = new _soundworksServer2['default'].Setup();
setup.generate('surface', { height: 1, width: 1 });
var locator = new _soundworksServer2['default'].Locator({ setup: setup });
var playerPerformance = new _PlayerPerformanceJs2['default']();
var soloistPerformance = new _SoloistPerformanceJs2['default'](playerPerformance, setup);

// Launch server
var app = express();
var dir = path.join(process.cwd(), 'public');
server.start(app, dir, process.env.PORT || 3000);

// Map modules to client types:
// - the `player` clients need to communicate with the `setup`, the `locator`
//   and the `playerPerformance` on the server side;
// - the `soloist` clients need to communicate with the `setup` and the
//   `soloistPerformance` on the server side.
server.map('player', setup, locator, playerPerformance);
server.map('soloist', setup, soloistPerformance);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2JpL0Rldi9jb2xsZWN0aXZlLXNvdW5kd29ya3MtZGV2ZWxvcC9zb3VuZGZpZWxkL3NyYy9zZXJ2ZXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztnQ0FLdUIsbUJBQW1COzs7Ozs7bUNBSVosd0JBQXdCOzs7O29DQUN2Qix5QkFBeUI7Ozs7O0FBVHhELElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNuQyxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFJN0IsSUFBTSxNQUFNLEdBQUcsOEJBQVcsTUFBTSxDQUFDLEFBT2pDLElBQU0sS0FBSyxHQUFHLElBQUksOEJBQVcsS0FBSyxFQUFFLENBQUM7QUFDckMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ25ELElBQU0sT0FBTyxHQUFHLElBQUksOEJBQVcsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDekQsSUFBTSxpQkFBaUIsR0FBRyxzQ0FBdUIsQ0FBQztBQUNsRCxJQUFNLGtCQUFrQixHQUFHLHNDQUF1QixpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQzs7O0FBRzVFLElBQU0sR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQy9DLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQzs7Ozs7OztBQU9qRCxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixDQUFDLENBQUM7QUFDeEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixDQUFDLENBQUMiLCJmaWxlIjoiL1VzZXJzL3JvYmkvRGV2L2NvbGxlY3RpdmUtc291bmR3b3Jrcy1kZXZlbG9wL3NvdW5kZmllbGQvc3JjL3NlcnZlci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCBleHRlcm5hbCBsaWJyYXJpZXNcbmNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG4vLyBJbXBvcnQgU291bmR3b3JrcyBtb2R1bGVzIChzZXJ2ZXIgc2lkZSlcbmltcG9ydCBzZXJ2ZXJTaWRlIGZyb20gJ3NvdW5kd29ya3Mvc2VydmVyJztcbmNvbnN0IHNlcnZlciA9IHNlcnZlclNpZGUuc2VydmVyO1xuXG4vLyBJbXBvcnQgU291bmRmaWVsZCBtb2R1bGVzIChzZXJ2ZXIgc2lkZSlcbmltcG9ydCBQbGF5ZXJQZXJmb3JtYW5jZSBmcm9tICcuL1BsYXllclBlcmZvcm1hbmNlLmpzJztcbmltcG9ydCBTb2xvaXN0UGVyZm9ybWFuY2UgZnJvbSAnLi9Tb2xvaXN0UGVyZm9ybWFuY2UuanMnO1xuXG4vLyBJbnN0YW50aWF0ZSB0aGUgbW9kdWxlc1xuY29uc3Qgc2V0dXAgPSBuZXcgc2VydmVyU2lkZS5TZXR1cCgpO1xuc2V0dXAuZ2VuZXJhdGUoJ3N1cmZhY2UnLCB7IGhlaWdodDogMSwgd2lkdGg6IDEgfSk7XG5jb25zdCBsb2NhdG9yID0gbmV3IHNlcnZlclNpZGUuTG9jYXRvcih7IHNldHVwOiBzZXR1cCB9KTtcbmNvbnN0IHBsYXllclBlcmZvcm1hbmNlID0gbmV3IFBsYXllclBlcmZvcm1hbmNlKCk7XG5jb25zdCBzb2xvaXN0UGVyZm9ybWFuY2UgPSBuZXcgU29sb2lzdFBlcmZvcm1hbmNlKHBsYXllclBlcmZvcm1hbmNlLCBzZXR1cCk7XG5cbi8vIExhdW5jaCBzZXJ2ZXJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmNvbnN0IGRpciA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAncHVibGljJyk7XG5zZXJ2ZXIuc3RhcnQoYXBwLCBkaXIsIHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMCk7XG5cbi8vIE1hcCBtb2R1bGVzIHRvIGNsaWVudCB0eXBlczpcbi8vIC0gdGhlIGBwbGF5ZXJgIGNsaWVudHMgbmVlZCB0byBjb21tdW5pY2F0ZSB3aXRoIHRoZSBgc2V0dXBgLCB0aGUgYGxvY2F0b3JgXG4vLyAgIGFuZCB0aGUgYHBsYXllclBlcmZvcm1hbmNlYCBvbiB0aGUgc2VydmVyIHNpZGU7XG4vLyAtIHRoZSBgc29sb2lzdGAgY2xpZW50cyBuZWVkIHRvIGNvbW11bmljYXRlIHdpdGggdGhlIGBzZXR1cGAgYW5kIHRoZVxuLy8gICBgc29sb2lzdFBlcmZvcm1hbmNlYCBvbiB0aGUgc2VydmVyIHNpZGUuXG5zZXJ2ZXIubWFwKCdwbGF5ZXInLCBzZXR1cCwgbG9jYXRvciwgcGxheWVyUGVyZm9ybWFuY2UpO1xuc2VydmVyLm1hcCgnc29sb2lzdCcsIHNldHVwLCBzb2xvaXN0UGVyZm9ybWFuY2UpO1xuIl19