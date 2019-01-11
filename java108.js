function SNIPERSKY() {
        this['init'] = function () {
                _0x8821x2c();
                _0x8821x2f();
                _0x8821x2d();
                _0x8821x31()
        };

        function _0x8821x2() {
                var _0x8821x3;
                var _0x8821x4;
                var _0x8821x5;
                var _0x8821x6;
                var _0x8821x7 = 200;
                var _0x8821x8 = 200;
                var _0x8821x9 = false;
                var _0x8821xa = 1E3 / 60;
                var _0x8821xb = {};
                this['createMap'] = function (_0x8821x9) {
                        if (_0x8821x9) {
                                _0x8821x7 = _0x8821x8 = _0x8821x9
                        };
                        $('body')['append']('<canvas id=\'minimapNode\'>');
                        $('body')['append']('<canvas id=\'minimap\' >');
                        _0x8821x3 = document['getElementById']('minimap');
                        _0x8821x4 = _0x8821x3['getContext']('2d');
                        _0x8821x3['width'] = _0x8821x7;
                        _0x8821x3['height'] = _0x8821x8;
                        _0x8821x4['scale'](1, 1);
                        _0x8821x4['strokeStyle'] = '#333';
                        _0x8821x4['fillStyle'] = '#000000';
                        _0x8821x4['globalAlpha'] = 0.5;
                        _0x8821x4['lineWidth'] = 2;
                        _0x8821x4['strokeRect'](0, 0, _0x8821x3['width'], _0x8821x3['height']);
                        _0x8821x4['fillRect'](0, 0, _0x8821x3['width'], _0x8821x3['height']);
                        _0x8821x4['textAlign'] = 'center';
                        _0x8821x4['textBaseline'] = 'middle';
                        _0x8821x4['globalAlpha'] = 0.2;
                        _0x8821x4['font'] = '18px Verdana';
                        _0x8821x4['fillStyle'] = '#FFFFFF';
                        _0x8821x4['fillText']('A1', _0x8821x7 / 5 / 2, _0x8821x8 / 5 / 2);
                        _0x8821x4['fillText']('A2', _0x8821x7 / 5 / 2 * 3, _0x8821x8 / 5 / 2);
                        _0x8821x4['fillText']('A3', _0x8821x7 / 5 / 2 * 5, _0x8821x8 / 5 / 2);
                        _0x8821x4['fillText']('A4', _0x8821x7 / 5 / 2 * 7, _0x8821x8 / 5 / 2);
                        _0x8821x4['fillText']('A5', _0x8821x7 / 5 / 2 * 9, _0x8821x8 / 5 / 2);
                        _0x8821x4['fillText']('B1', _0x8821x7 / 5 / 2, _0x8821x8 / 5 / 2 * 3);
                        _0x8821x4['fillText']('B2', _0x8821x7 / 5 / 2 * 3, _0x8821x8 / 5 / 2 * 3);
                        _0x8821x4['fillText']('B3', _0x8821x7 / 5 / 2 * 5, _0x8821x8 / 5 / 2 * 3);
                        _0x8821x4['fillText']('B4', _0x8821x7 / 5 / 2 * 7, _0x8821x8 / 5 / 2 * 3);
                        _0x8821x4['fillText']('B5', _0x8821x7 / 5 / 2 * 9, _0x8821x8 / 5 / 2 * 3);
                        _0x8821x4['fillText']('C1', _0x8821x7 / 5 / 2, _0x8821x8 / 5 / 2 * 5);
                        _0x8821x4['fillText']('C2', _0x8821x7 / 5 / 2 * 3, _0x8821x8 / 5 / 2 * 5);
                        _0x8821x4['fillText']('C3', _0x8821x7 / 5 / 2 * 5, _0x8821x8 / 5 / 2 * 5);
                        _0x8821x4['fillText']('C4', _0x8821x7 / 5 / 2 * 7, _0x8821x8 / 5 / 2 * 5);
                        _0x8821x4['fillText']('C5', _0x8821x7 / 5 / 2 * 9, _0x8821x8 / 5 / 2 * 5);
                        _0x8821x4['fillText']('D1', _0x8821x7 / 5 / 2, _0x8821x8 / 5 / 2 * 7);
                        _0x8821x4['fillText']('D2', _0x8821x7 / 5 / 2 * 3, _0x8821x8 / 5 / 2 * 7);
                        _0x8821x4['fillText']('D3', _0x8821x7 / 5 / 2 * 5, _0x8821x8 / 5 / 2 * 7);
                        _0x8821x4['fillText']('D4', _0x8821x7 / 5 / 2 * 7, _0x8821x8 / 5 / 2 * 7);
                        _0x8821x4['fillText']('D5', _0x8821x7 / 5 / 2 * 9, _0x8821x8 / 5 / 2 * 7);
                        _0x8821x4['fillText']('E1', _0x8821x7 / 5 / 2, _0x8821x8 / 5 / 2 * 9);
                        _0x8821x4['fillText']('E2', _0x8821x7 / 5 / 2 * 3, _0x8821x8 / 5 / 2 * 9);
                        _0x8821x4['fillText']('E3', _0x8821x7 / 5 / 2 * 5, _0x8821x8 / 5 / 2 * 9);
                        _0x8821x4['fillText']('E4', _0x8821x7 / 5 / 2 * 7, _0x8821x8 / 5 / 2 * 9);
                        _0x8821x4['fillText']('E5', _0x8821x7 / 5 / 2 * 9, _0x8821x8 / 5 / 2 * 9);
                        _0x8821x5 = document['getElementById']('minimapNode');
                        _0x8821x6 = _0x8821x5['getContext']('2d');
                        _0x8821x5['width'] = _0x8821x9;
                        _0x8821x5['height'] = _0x8821x9;
                        _0x8821x6['globalAlpha'] = 1;
                        _0x8821x6['scale'](1, 1);
                        _0x8821x6['textAlign'] = 'center';
                        _0x8821x6['textBaseline'] = 'middle';
                        _0x8821x6['font'] = 'bold 12px Ubuntu';
                        this['hide']();
                        setInterval(function () {
                                minimap['drawNodes']()
                        }, _0x8821xa)
                };
                this['uploadSelfPosition'] = function () {
                        if (window['getCurrentX']() && window['getCurrentY']()) {
                                _0x8821x9 = true;
                                conn['uploadCoords']({
                                        x: window['getCurrentX']()
                                        , y: window['getCurrentY']()
                                })
                        } else {
                                if (_0x8821x9) {
                                        conn['uploadCoords']({
                                                x: window['getCurrentX']()
                                                , y: window['getCurrentY']()
                                        });
                                        _0x8821x9 = false
                                }
                        }
                };
                this['isExists'] = function (_0x8821xc) {
                        var _0x8821xd = 0;
                        for (; _0x8821xd < nodeList['length']; _0x8821xd++) {
                                if (_0x8821xc == nodeList[_0x8821xd][0]) {
                                        return _0x8821xd
                                }
                        };
                        return null
                };
                this['updateNode'] = function (obj) {
                        var _0x8821xd;
                        var _0x8821xf = obj['id'];
                        var _0x8821x10 = obj['x'];
                        var _0x8821x11 = obj['y'];
                        var _0x8821x12 = obj['name']['substring'](obj['name']['indexOf']('}') + 1);
                        _0x8821x12 = _0x8821x12['split']('%*^')[0];
                        if (_0x8821xd = this['isExists'](_0x8821xf)) {
                                nodeList[_0x8821xd][1] = _0x8821x12;
                                nodeList[_0x8821xd][2] = _0x8821x10;
                                nodeList[_0x8821xd][3] = _0x8821x11;
                                nodeList[_0x8821xd][7] = true;
                                nodeList[_0x8821xd][4] = 0 == obj['c'] ? '#FF4444' : '#448AFF';
                                nodeList[_0x8821xd][8] = Date['now']();
                                if (!(nodeList[_0x8821xd][12] && nodeList[_0x8821xd][13])) {
                                        nodeList[_0x8821xd][12] = _0x8821x10;
                                        nodeList[_0x8821xd][13] = _0x8821x11
                                }
                        } else {
                                nodeList[nodeList['length']] = [_0x8821xf, _0x8821x12, null, null, '#448AFF', null, null]
                        }
                };
                this['addNode'] = function (_0x8821x13) {
                        nodeList[nodeList['length']] = [_0x8821x13['id'], _0x8821x13['name'], null, null, nodeColor, _0x8821x13['skinurl'], _0x8821x13['cellColor']]
                };
                this['deleteNode'] = function (_0x8821x14) {};
                this['drawNodes'] = function () {
                        var _0x8821x15 = window['getLengthX']();
                        var _0x8821x9 = window['getLengthY']();
                        _0x8821x6['clearRect'](0, 0, _0x8821x5['width'], _0x8821x5['height']);
                        var _0x8821x16 = window['getCurrentX']();
                        var _0x8821x17 = window['getCurrentY']();
                        if (_0x8821x16) {
                                if (_0x8821x17) {
                                        _0x8821xb['x'] = nodeList[0][2];
                                        _0x8821xb['y'] = nodeList[0][3]
                                }
                        };
                        nodeList[0][2] = _0x8821x16;
                        nodeList[0][3] = _0x8821x17;
                        nodeList[0][12] = _0x8821x16;
                        nodeList[0][13] = _0x8821x17;
                        if (SNIPERSKY['isSpectating']) {
                                nodeList[1][2] = window['getTop1X']();
                                nodeList[1][3] = window['getTop1Y']();
                                nodeList[1][12] = window['getTop1X']();
                                nodeList[1][13] = window['getTop1Y']()
                        };
                        var _0x8821xd = 0;
                        for (; _0x8821xd < nodeList['length']; _0x8821xd++) {
                                if (nodeList[_0x8821xd][2] && (nodeList[_0x8821xd][3] && (nodeList[_0x8821xd][12] && (nodeList[_0x8821xd][13] && 'del' != nodeList[_0x8821xd][0])))) {
                                        var _0x8821x18;
                                        var _0x8821x19;
                                        var _0x8821x1a;
                                        _0x8821x1a = 1 == _0x8821xd ? 7 : 5;
                                        nodeList[_0x8821xd][2] = ~~nodeList[_0x8821xd][2];
                                        nodeList[_0x8821xd][3] = ~~nodeList[_0x8821xd][3];
                                        nodeList[_0x8821xd][12] = ~~nodeList[_0x8821xd][12];
                                        nodeList[_0x8821xd][13] = ~~nodeList[_0x8821xd][13];
                                        nodeList[_0x8821xd][12] += (_0x8821x15 / 2 + nodeList[_0x8821xd][2] - (_0x8821x15 / 2 + nodeList[_0x8821xd][12])) / 30;
                                        nodeList[_0x8821xd][13] += (_0x8821x9 / 2 + nodeList[_0x8821xd][3] - (_0x8821x9 / 2 + nodeList[_0x8821xd][13])) / 30;
                                        _0x8821x18 = (_0x8821x15 / 2 + nodeList[_0x8821xd][12]) / _0x8821x15 * _0x8821x7;
                                        _0x8821x19 = (_0x8821x9 / 2 + nodeList[_0x8821xd][13]) / _0x8821x9 * _0x8821x8;
                                        _0x8821x6['beginPath']();
                                        _0x8821x6['arc'](_0x8821x18, _0x8821x19, _0x8821x1a, 0, 2 * Math['PI'], false);
                                        _0x8821x6['fillStyle'] = nodeList[_0x8821xd][4];
                                        if (_0x8821xd == 0) {
                                                _0x8821x6['strokeStyle'] = '#ffffff';
                                                _0x8821x6['lineWidth'] = 2
                                        } else {
                                                _0x8821x6['strokeStyle'] = 'rgba(51,51,51,0.5)';
                                                _0x8821x6['lineWidth'] = 1
                                        };
                                        _0x8821x6['fill']();
                                        _0x8821x6['stroke']();
                                        if (_0x8821xd > 1) {
                                                _0x8821x6['fillStyle'] = '#FFC0CB';
                                                _0x8821x6['fillText'](nodeList[_0x8821xd][1], _0x8821x18, _0x8821x19 - 10)
                                        }
                                }
                        };
                        if (_0x8821xb['x']) {
                                if (_0x8821xb['y']) {
                                        if (!(_0x8821x16 && _0x8821x17)) {
                                                _0x8821x18 = (_0x8821x15 / 2 + _0x8821xb['x']) / _0x8821x15 * _0x8821x7;
                                                _0x8821x19 = (_0x8821x9 / 2 + _0x8821xb['y']) / _0x8821x9 * _0x8821x8;
                                                _0x8821x6['beginPath']();
                                                _0x8821x6['moveTo'](_0x8821x18 - 3, _0x8821x19 - 3);
                                                _0x8821x6['lineTo'](_0x8821x18 + 3, _0x8821x19 + 3);
                                                _0x8821x6['moveTo'](_0x8821x18 + 3, _0x8821x19 - 3);
                                                _0x8821x6['lineTo'](_0x8821x18 - 3, _0x8821x19 + 3);
                                                _0x8821x6['stroke']();
                                                _0x8821x6['lineWidth'] = 1;
                                                _0x8821x6['strokeStyle'] = 'yellow';
                                                _0x8821x6['stroke']()
                                        }
                                }
                        }
                };
                this['hide'] = function () {
                        $('#minimap')['hide']();
                        $('#minimapNode')['hide']()
                };
                this['show'] = function () {
                        $('#minimap')['show']();
                        $('#minimapNode')['show']()
                };
                this['setDeadPosition'] = function (_0x8821x1b) {
                        _0x8821xb = _0x8821x1b ? _0x8821x1b : {}
                }
        }

        function _0x8821x1c() {
                var _0x8821x1d;
                var _0x8821x1e = this;
                _0x8821x1e['connect'] = function () {
                        socket = io('minimap.alis.io:8001', {
                                transports: ['websocket']
                        });
                        socket['on']('updateCoords', function (_0x8821x1f) {
                                minimap['updateNode'](_0x8821x1f)
                        });
                        socket['on']('na.gaver.io:9700', function (_0x8821x20) {})
                };
                _0x8821x1e['emit'] = function (_0x8821x21, _0x8821x20) {
                        socket['emit'](_0x8821x21, _0x8821x20)
                };
                _0x8821x1e['joinRoom'] = function (_0x8821x22) {
                        if (_0x8821x1d) {
                                _0x8821x1e['leaveRoom'](_0x8821x1d)
                        };
                        _0x8821x1e['emit']('joinRoom', {
                                p: _0x8821x22
                                , a: 1
                        });
                        _0x8821x1d = _0x8821x22
                };
                _0x8821x1e['leaveRoom'] = function (_0x8821x23) {
                        _0x8821x1e['emit']('leaveRoom', _0x8821x23)
                };
                _0x8821x1e['uploadCoords'] = function (_0x8821x20) {
                        _0x8821x20['name'] = SNIPERSKY['getName']();
                        _0x8821x20['serverAddress'] = SNIPERSKY['getCurrentIP']();
                        _0x8821x20['timeStamp'] = Date['now']();
                        _0x8821x20['socketRoom'] = _0x8821x1d;
                        _0x8821x1e['emit']('coords', _0x8821x20)
                };
                _0x8821x1e['sendMessage'] = function (_0x8821x24) {
                        _0x8821x24['socketRoom'] = _0x8821x1d;
                        _0x8821x1e['emit']('sendMessage', _0x8821x24)
                }
        }

        function _0x8821x25() {
                var _0x8821x26 = {
                        "\"": '&quot;'
                        , "&": '&amp;'
                        , "<": '&lt;'
                        , ">": '&gt;'
                };
                return function (_0x8821x27) {
                        return _0x8821x27['replace'](/[\"&<>]/g, function (_0x8821x28) {
                                return _0x8821x26[_0x8821x28]
                        })
                }
        }
        this['afterGameLoaded'] = function () {
                moveTo(null, null);
                minimap['setDeadPosition'](null);
                conn['joinRoom'](SNIPERSKY['getRoom']())
        };
        this['getLeaderBoard'] = function () {
                var _0x8821x29 = [];
                var _0x8821x2a = window['getLB']();
                if (_0x8821x2a) {
                        var _0x8821xd = 0;
                        for (; _0x8821xd < _0x8821x2a['length']; _0x8821xd++) {
                                _0x8821x29[_0x8821x29['length']] = '' == _0x8821x2a[_0x8821xd]['name'] ? 'An unnamed cell' : _0x8821x25(_0x8821x2a[_0x8821xd]['name'])
                        }
                };
                return _0x8821x29
        };
        this['updateLBInfo'] = function () {
                var _0x8821x2b = '';
                var _0x8821x2a = SNIPERSKY['getLeaderBoard']();
                if (_0x8821x2a) {
                        var _0x8821xd = 0;
                        for (; _0x8821xd < _0x8821x2a['length']; _0x8821xd++) {
                                _0x8821x2b += '<div>' + (_0x8821xd + 1) + '.  ' + _0x8821x25(_0x8821x2a[_0x8821xd]) + '</div>'
                        }
                }
        };

        function _0x8821x2c() {
                minimap['uploadSelfPosition']();
                setTimeout(_0x8821x2c, 1E3)
        }

        function _0x8821x2d() {
                var _0x8821xd = 1;
                for (; _0x8821xd < nodeList['length']; _0x8821xd++) {
                        var _0x8821x2e = nodeList[_0x8821xd][8];
                        if (_0x8821x2e) {
                                if (5E3 < Date['now']() - _0x8821x2e) {
                                        if (2 > _0x8821xd) {
                                                nodeList[_0x8821xd][2] = null;
                                                nodeList[_0x8821xd][3] = null
                                        } else {
                                                nodeList[_0x8821xd][0] = 'del'
                                        }
                                }
                        }
                };
                setTimeout(_0x8821x2d, 5E3)
        }

        function _0x8821x2f() {
                if (window['jQuery']('#overlays')['is'](':visible')) {
                        SNIPERSKY['updateLBInfo']()
                };
                setTimeout(_0x8821x2f, 1E3)
        }
        var _0x8821x30 = true;

        function _0x8821x31() {
                var _0x8821x32 = window['getLB']();
                var _0x8821x33 = window['getShowLeaderBoard']();
                if (_0x8821x32 !== null && _0x8821x33 == true) {
                        window['jQuery']('#div_lb')['show']()
                } else {
                        window['jQuery']('#div_lb')['hide']()
                };
                if (window['jQuery']('#div_lb')['is'](':visible')) {
                        var _0x8821x34 = '';
                        if (_0x8821x32) {
                                var _0x8821x16 = 0;
                                for (; _0x8821x16 < _0x8821x32['length']; _0x8821x16++) {
                                        var _0x8821x35 = _0x8821x32[_0x8821x16]['me'];
                                        var _0x8821xd = _0x8821x32[_0x8821x16]['name'];
                                        var _0x8821x36 = /\{([\w]+)\}/ ['exec'](_0x8821xd);
                                        if (_0x8821x36) {
                                                _0x8821xd = _0x8821xd['replace'](_0x8821xd[0], '')['trim']()
                                        };
                                        _0x8821xd = _0x8821xd['substring'](_0x8821xd['indexOf']('}') + 1) || 'An unnamed cell';
                                        if (_0x8821x30) {
                                                var _0x8821x37 = themeColors['leaderboardNamesColor'];
                                                var _0x8821x21 = _0x8821xd;
                                                var _0x8821x38;
                                                for (var _0x8821x39 in _0x8821x38) {
                                                        if (_0x8821x21['startsWith'](_0x8821x39)) {
                                                                _0x8821x37 = _0x8821x38[_0x8821x39]
                                                        }
                                                };
                                                _0x8821x34 = _0x8821x34 + '<div style=\'color:' + _0x8821x37 + '\'>'
                                        };
                                        _0x8821x34 = _0x8821x35 ? _0x8821x34 + '<div class=\'self\'>' : _0x8821x34 + '<div>';
                                        _0x8821x34 += _0x8821x16 + 1 + '. ' + _0x8821xd + '</div>'
                                }
                        };
                        document['getElementById']('lb_detail')['innerHTML'] = _0x8821x34
                };
                setTimeout(_0x8821x31, 1E3)
        }

        function _0x8821x3a() {
                if (window['localStorage']['getItem']('splitAnimation') != null) {
                        window['splitAnimation'] = window['localStorage']['getItem']('splitAnimation')
                } else {
                        window['localStorage']['setItem']('splitAnimation', 126);
                        window['splitAnimation'] = 126
                };
                if (window['localStorage']['getItem']('zoomSpeed') != null) {
                        window['zoomSpeed'] = window['localStorage']['getItem']('zoomSpeed')
                } else {
                        window['localStorage']['setItem']('zoomSpeed', 0.92);
                        window['zoomSpeed'] = 0.92
                };
                if (window['localStorage']['getItem']('cellalpha') != null) {
                        window['cellalpha'] = window['localStorage']['getItem']('cellalpha')
                } else {
                        window['localStorage']['setItem']('cellalpha', 1);
                        window['cellalpha'] = 1
                };
                window['jQuery']('#rangeSettingsContainer')['append']('<div class=\'labletap\' style=\'padding: 14px 5px 0px 0px;\'><label for=\'cellalpha\'style=\'width: 200px;\'>NEW    Transparency: <span id=\'cellalphaValue\'>' + (10 - (window['cellalpha'] * 10)) + '</span></label><input class=\'rangelesr\' id=\'cellalpha\' type=\'range\' min=\'.2\' max=\'1\' value=\'' + window['cellalpha'] + '\' step=\'.1\'></div>');
                window['jQuery']('#rangeSettingsContainer')['append']('<label for="splitAnimation">Animation: <span id="splitAnimationValue">' + window['splitAnimation'] + '</span></label><input class="range-slider__range" id="splitAnimation" type="range" min="20" max="500" value="170"' + window['splitAnimation'] + '" step="1">');
                window['jQuery']('#rangeSettingsContainer')['append']('<label for="zoomSpeed">Zoom Speed: <span id="zoomSpeedValue">' + window['zoomSpeed'] + '</span></label><input class="range-slider__range" id="zoomSpeed" type="range" min="0.88" max="0.99" value="0.93"' + window['zoomSpeed'] + '" step="0.01">');
                window['jQuery']('#splitAnimation')['on']('input', function () {
                        var _0x8821x22 = window['jQuery'](this)['val']();
                        window['jQuery']('#splitAnimationValue')['text'](_0x8821x22);
                        window['splitAnimation'] = _0x8821x22;
                        window['localStorage']['setItem']('splitAnimation', _0x8821x22)
                });
                window['jQuery']('#zoomSpeed')['on']('input', function () {
                        var _0x8821x22 = window['jQuery'](this)['val']();
                        window['jQuery']('#zoomSpeedValue')['text'](_0x8821x22);
                        window['zoomSpeed'] = _0x8821x22;
                        window['localStorage']['setItem']('zoomSpeed', _0x8821x22)
                });
                window['jQuery']('#cellalpha')['on']('input', function () {
                        var _0x8821x22 = window['jQuery'](this)['val']();
                        window['jQuery']('#cellalphaValue')['text'](10 - (_0x8821x22 * 10));
                        window['cellalpha'] = _0x8821x22;
                        window['localStorage']['setItem']('cellalpha', _0x8821x22)
                })
        }
        this['getCurrentIP'] = function () {
                return (currentIP == null) ? '' : currentIP['substring'](5, currentIP['length'])
        };
        this['getTeamName'] = function () {
                var _0x8821x3b = window['jQuery']('#soon')['val']();;;;;
                return ('' == _0x8821x3b) ? '' : _0x8821x3b['trim']()
        };
        this['getCustomSkinUrl'] = function () {
                var _0x8821x3c = window['jQuery']('#skin_url')['val']();
                return '' == _0x8821x3c ? '' : _0x8821x3c['trim']()
        };
        this['getSkin'] = function () {
                var _0x8821x3d = window['jQuery']('#skin')['val']();
                return '' == _0x8821x3d ? '' : _0x8821x3d['trim']()
        };
        this['getName'] = function () {
                var _0x8821x3e = window['jQuery']('#nick')['val']();
                return '' == _0x8821x3e ? '' : _0x8821x3e
        };
        this['getRoom'] = function () {
                return '' == SNIPERSKY['getTeamName']() ? SNIPERSKY['getCurrentIP']() : SNIPERSKY['getTeamName']() + SNIPERSKY['getCurrentIP']()
        };
        window['setLocalStorage'] = function (_0x8821x3f, _0x8821x22) {
                if ('string' == typeof _0x8821x22) {
                        localStorage['setItem'](_0x8821x3f, _0x8821x22)
                } else {
                        localStorage['setItem'](_0x8821x3f, JSON['stringify'](_0x8821x22))
                }
        };
        window['getLocalStorage'] = function (_0x8821x40) {
                return localStorage['getItem'](_0x8821x40)
        };

        function _0x8821x41() {
                window['jQuery']['each'](themeColors, function (_0x8821x42, _0x8821x22) {
                        if (localStorage['getItem'](_0x8821x42.toString()) == null) {
                                setLocalStorage(_0x8821x42, _0x8821x22)
                        } else {
                                themeColors[_0x8821x42] = getLocalStorage(_0x8821x42.toString())
                        }
                })
        }

        function _0x8821x43() {
                window['jQuery']['each'](themeColors, function (_0x8821x42, _0x8821x22) {
                        window['jQuery']('#' + _0x8821x42)['minicolors']({
                                defaultValue: _0x8821x22
                        });
                        $('#' + _0x8821x42)['val'](_0x8821x22)
                })
        }
        this['newGameImpl'] = function () {
                var _0x8821x44 = false;
                var _0x8821x45 = window['getCell']();
                var _0x8821x46 = window['getCellIds']();
                if (_0x8821x46[_0x8821x45[0]] !== undefined) {
                        _0x8821x44 = true
                };
                if (_0x8821x44 == true) {
                        nodeList[0][6] = _0x8821x46[_0x8821x45[0]]['color'];
                        conn['joinRoom'](SNIPERSKY['getRoom']())
                } else {
                        setTimeout(SNIPERSKY['newGameImpl'], 100)
                }
        };
        this['onDead'] = function () {
                conn['leaveRoom'](SNIPERSKY['getRoom']())
        };
        this['isSpectating'] = false;
        minimap = new _0x8821x2;
        conn = new _0x8821x1c;
        conn['connect']();
        window['jQuery'](document)['ready'](function () {
                _0x8821x3a();
                _0x8821x41();
                _0x8821x43();
                window['jQuery']('.minicolors')['change'](function () {
                        setLocalStorage(window['jQuery'](this)['attr']('id'), window['jQuery'](this)['val']());
                        themeColors[window['jQuery'](this)['attr']('id')] = window['jQuery'](this)['val']();
                        if (window['jQuery'](this)['attr']('id') == 'leaderboardColor') {
                                window['jQuery']('#div_lb .header')['css']('color', window['jQuery'](this)['val']())
                        };
                        if (window['jQuery'](this)['attr']('id') == 'leaderboardMyName') {
                                window['jQuery']('#lb_detail .self')['css']('color', window['jQuery'](this)['val']())
                        }
                });
                obj['init'](new MacroHotkeys(window));
                obj['hk']['init']();
                window['jQuery']('body')['append']('<div id = \'div_lb\'><div class=\'header\'>Leaderboard</div></div>');
                window['jQuery']('#div_lb')['append']('<div id=\'lb_detail\'></div>');
                window['jQuery']('#div_lb .header')['css']('color', themeColors['leaderboardColor']);
                window['jQuery']('#lb_detail .self')['css']('color', themeColors['leaderboardMyName'])
        })
}
var nodeList = [];
var socket = null;
var minimap = null;
var themeColors = {
        bgColor: '#000000'
        , borderColor: '#ffffff'
        , leaderboardColor: '#ffffff'
        , leaderboardNamesColor: '#ffffff'
        , leaderboardMyName: '#faaaaa'
        , cellTextColor: '#ffffff'
        , cellTextStrokColor: '#000000'
        , foodColor: '#5000ff'
        , virusColor: '#000000'
        , virusStrokColor: '#bdbbbb'
        , popupColor: '#000000'
        , popupTextColor: '#2573e8'
        , mapCellColor: '#000000'
        , statusColor: '#ffffff'
};
var conn = null;
var currentIP = null;
var announcementSent = false;
var playerDetailsByIdentifier = {};
var playerDetailsByNick = {};
var SNIPERSKY = new SNIPERSKY;

function Obj() {
        this['hk'];
        this['init'] = function (_0x8821x51) {
                this['hk'] = _0x8821x51;
                this['panelEvents']()
        };
        this['panelEvents'] = function () {
                var _0x8821x52 = this;
                window['jQuery']('#btnHotkeys')['on']('click', function () {
                        window['jQuery']('#hotkeysModalBody')['empty']();
                        var _0x8821x51;
                        window['jQuery']('#hotkeysModalBody')['append']('<div class="hotkey-container"></div>');
                        window['jQuery']['each'](_0x8821x52['hk']['hk'], function (_0x8821x42, _0x8821x22) {
                                window['jQuery']('#hotkeysModalBody .hotkey-container')['append']('<div class="hotkey-section">' + '<div class="hotkey-name">' + '<p class="hotkey-letter">' + _0x8821x22['name'] + '</p>' + '</div>' + '<div class="hotkey-keycode">' + '<input id="' + _0x8821x42 + '" class="form-control hk-txt" type="text" value="' + _0x8821x52['hk']['getStringKey'](_0x8821x22['defaultHotkey']) + '"/>' + '</div>' + '</div>')
                        });
                        window['jQuery']['each'](_0x8821x52['hk']['hk'], function (_0x8821x42, _0x8821x22) {
                                window['jQuery']('#' + _0x8821x42)['on']('keydown', function (_0x8821x53) {
                                        if (_0x8821x52['hk']['isValidHotkey'](_0x8821x53)) {
                                                var _0x8821x54 = $(this);
                                                var _0x8821x55 = _0x8821x52['hk']['getPresedKey'](_0x8821x53);
                                                var _0x8821x56 = _0x8821x53['keyCode'];
                                                _0x8821x54['val'](_0x8821x55);
                                                _0x8821x54['blur']();
                                                _0x8821x52['hk']['hk'][_0x8821x54['attr']('id')]['defaultHotkey'] = _0x8821x56;
                                                window['localStorage']['setItem'](_0x8821x54['attr']('id'), _0x8821x56)
                                        } else {
                                                _0x8821x53['preventDefault']()
                                        }
                                })
                        })
                })
        }
}

function MacroHotkeys(_0x8821x58) {
        var _0x8821x52 = this;
        this['wHandle'];
        this['toFeed'] = false;
        this['speed'] = 25;
        this['init'] = function () {
                this['hk'] = {
                        hk_macroFeed: {
                                defaultHotkey: 69
                                , name: 'Macro Feed'
                                , run: function () {
                                        _0x8821x52['toFeed'] = true;
                                        setTimeout(_0x8821x52['mass'], _0x8821x52['speed'])
                                }
                        }
                        , hk_x64: {
                                defaultHotkey: 81
                                , name: '64 Split'
                                , run: function () {
                                        _0x8821x52['split']();
                                        setTimeout(_0x8821x52['split'], _0x8821x52['speed']);
                                        setTimeout(_0x8821x52['split'], _0x8821x52['speed'] * 2);
                                        setTimeout(_0x8821x52['split'], _0x8821x52['speed'] * 3);
                                        setTimeout(_0x8821x52['split'], _0x8821x52['speed'] * 4);
                                        setTimeout(_0x8821x52['split'], _0x8821x52['speed'] * 5);
                                        setTimeout(_0x8821x52['split'], _0x8821x52['speed'] * 6)
                                }
                        }
                        , hk_doubleSplit: {
                                defaultHotkey: 68
                                , name: 'Double Split'
                                , run: function () {
                                        _0x8821x52['split']();
                                        setTimeout(_0x8821x52['split'], 40)
                                }
                        }
                        , hk_tripleSplit: {
                                defaultHotkey: 84
                                , name: 'Triple Split'
                                , run: function () {
                                        _0x8821x52['split']();
                                        setTimeout(_0x8821x52['split'], _0x8821x52['speed']);
                                        setTimeout(_0x8821x52['split'], _0x8821x52['speed'] * 2)
                                }
                        }
                        , hk_names: {
                                defaultHotkey: 86
                                , name: 'Hide/Show Names'
                                , run: function () {
                                        window['jQuery']('#opt_names')['click']()
                                }
                        }
                        , hk_myName: {
                                defaultHotkey: 78
                                , name: 'Hide/Show My Name'
                                , run: function () {
                                        window['jQuery']('#opt_myName')['click']()
                                }
                        }
                        , hk_mass: {
                                defaultHotkey: 66
                                , name: 'Hide/Show Mass'
                                , run: function () {
                                        window['jQuery']('#opt_mass')['click']()
                                }
                        }
                        , hk_minimap: {
                                defaultHotkey: 77
                                , name: 'Hide/Show Minimap'
                                , run: function () {
                                        window['jQuery']('#opt_minimap')['click']()
                                }
                        }
                        , hk_skins: {
                                defaultHotkey: 67
                                , name: 'Hide/Show Skins'
                                , run: function () {
                                        window['jQuery']('#opt_skins')['click']()
                                }
                        }
                        , hk_customSkins: {
                                defaultHotkey: 88
                                , name: 'Hide/Show Custom Skins'
                                , run: function () {
                                        window['jQuery']('#opt_customSkins')['click']()
                                }
                        }
                        , hk_auto_zoom: {
                                defaultHotkey: 65
                                , name: 'Auto Zoom'
                                , run: function () {
                                        window['jQuery']('#opt_auto_zoom')['click']()
                                }
                        }
                        , hk_zoom: {
                                defaultHotkey: 90
                                , name: 'Zoom'
                                , run: function () {
                                        window['jQuery']('#opt_zoom')['click']()
                                }
                        }
                        , grid_locations: {
                                defaultHotkey: 71
                                , name: 'Hide/Show Grid Locations'
                                , run: function () {
                                        window['jQuery']('#opt_grid_locations')['click']()
                                }
                        }
                        , show_leaderBoard: {
                                defaultHotkey: 76
                                , name: 'Hide/Show LeaderBoard'
                                , run: function () {
                                        window['jQuery']('#opt_leaderboard')['click']()
                                }
                        }
                        , respawn: {
                                defaultHotkey: 75
                                , name: 'Respawn'
                                , run: function () {
                                        respawn()
                                }
                        }
                        , zoom_a: {
                                defaultHotkey: 49
                                , name: 'Zoom level 1'
                                , run: function () {
                                        window['setZoomLevel'](0.75)
                                }
                        }
                        , zoom_b: {
                                defaultHotkey: 50
                                , name: 'Zoom level 2'
                                , run: function () {
                                        window['setZoomLevel'](0.65)
                                }
                        }
                        , zoom_c: {
                                defaultHotkey: 51
                                , name: 'Zoom level 3'
                                , run: function () {
                                        window['setZoomLevel'](0.55)
                                }
                        }
                        , zoom_d: {
                                defaultHotkey: 52
                                , name: 'Zoom level 4'
                                , run: function () {
                                        window['setZoomLevel'](0.3)
                                }
                        }
                        , zoom_e: {
                                defaultHotkey: 53
                                , name: 'Zoom level 5'
                                , run: function () {
                                        window['setZoomLevel'](0.2)
                                }
                        }
                };
                this['wHandle'] = _0x8821x58;
                this['loadHotkeys']();
                this['enableMacroHotkeys']()
        };
        this['loadHotkeys'] = function () {
                $['each'](_0x8821x52['hk'], function (_0x8821x42, _0x8821x22) {
                        if (window['localStorage']['getItem'](_0x8821x42)) {
                                _0x8821x22['defaultHotkey'] = window['localStorage']['getItem'](_0x8821x42)
                        }
                })
        };
        this['getPresedKey'] = function (_0x8821x53) {
                var _0x8821x51 = '';
                if (_0x8821x53['keyCode']) {
                        _0x8821x51 += String['fromCharCode'](_0x8821x53['keyCode'])
                };
                return _0x8821x51
        };
        this['getStringKey'] = function (_0x8821x59) {
                var _0x8821x51 = '';
                if (_0x8821x59) {
                        _0x8821x51 += String['fromCharCode'](_0x8821x59)
                };
                return _0x8821x51
        };
        this['isValidHotkey'] = function (_0x8821x53) {
                if (_0x8821x53['keyCode'] >= 65 && _0x8821x53['keyCode'] <= 90) {
                        return true
                } else {
                        return false
                }
        };
        this['enableMacroHotkeys'] = function () {
                window['addEventListener']('keydown', _0x8821x52['keydown']);
                window['addEventListener']('keyup', _0x8821x52['keyup'])
        };
        this['split'] = function () {
                $('body')['trigger']($.Event('keydown', {
                        keyCode: 32
                }));
                $('body')['trigger']($.Event('keyup', {
                        keyCode: 32
                }))
        };
        this['mass'] = function () {
                if (_0x8821x52['toFeed']) {
                        window['onkeydown']({
                                keyCode: 87
                        });
                        window['onkeyup']({
                                keyCode: 87
                        });
                        setTimeout(_0x8821x52['mass'], _0x8821x52['speed'])
                }
        };
        this['keydown'] = function (_0x8821x5a) {
                if ($('#hotkeysModal')['hasClass']('in') || window['jQuery']('#chat_textbox')['is'](':focus') || window['jQuery']('#overlays')['is'](':visible')) {
                        return
                };
                $['each'](_0x8821x52['hk'], function (_0x8821x42, _0x8821x22) {
                        if (_0x8821x5a['keyCode'] == _0x8821x22['defaultHotkey']) {
                                _0x8821x52['hk'][_0x8821x42]['run']()
                        }
                })
        };
        this['keyup'] = function (_0x8821x5a) {
                if ($('#hotkeysModal')['hasClass']('in') || window['jQuery']('#chat_textbox')['is'](':focus')) {
                        return
                };
                if (_0x8821x5a['keyCode'] == _0x8821x52['hk']['hk_macroFeed']['defaultHotkey']) {
                        _0x8821x52['toFeed'] = false
                }
        }
}
$(document)['keydown'](function (_0x8821x5b) {
        if (_0x8821x5b['keyCode'] == 9) {
                _0x8821x5b['preventDefault']()
        }
});
var obj = new Obj();
(function (_0x8821x58, _0x8821x5c) {
        _0x8821x58['console']['log'] = () => {};
        if (navigator['appVersion']['indexOf']('MSIE') != -1) {
                alert('You\'re using a pretty old browser, some parts of the website might not work properly.')
        };
        Date['now'] || (Date['now'] = function () {
                return (+new Date)['getTime']()
        });
        var _0x8821x5d = Date['now']();
        Array['prototype']['peek'] = function () {
                return this[this['length'] - 1]
        };
        Array['prototype']['remove'] = function (_0x8821x16) {
                var _0x8821xd = this['indexOf'](_0x8821x16);
                if (_0x8821xd !== -1) {
                        this['splice'](_0x8821xd, 1)
                };
                return _0x8821xd !== -1
        };

        function _0x8821x5e(_0x8821x1b, _0x8821x5f, _0x8821x17) {
                var _0x8821x60 = ('00' + (~~_0x8821x1b)
                        .toString(16))['slice'](-2);
                var _0x8821x61 = ('00' + (~~_0x8821x5f)
                        .toString(16))['slice'](-2);
                var _0x8821x62 = ('00' + (~~_0x8821x17)
                        .toString(16))['slice'](-2);
                return '#' + _0x8821x60 + _0x8821x61 + _0x8821x62
        }

        function _0x8821x63(_0x8821x64) {
                if (_0x8821x64['length'] === 4) {
                        return {
                                r: parseInt(_0x8821x64[1] + _0x8821x64[1], 16)
                                , g: parseInt(_0x8821x64[2] + _0x8821x64[2], 16)
                                , b: parseInt(_0x8821x64[3] + _0x8821x64[3], 16)
                        }
                } else {
                        if (_0x8821x64['length'] === 7) {
                                return {
                                        r: parseInt(_0x8821x64[1] + _0x8821x64[2], 16)
                                        , g: parseInt(_0x8821x64[3] + _0x8821x64[4], 16)
                                        , b: parseInt(_0x8821x64[5] + _0x8821x64[6], 16)
                                }
                        }
                };
                throw new Error('invalid color ' + _0x8821x64)
        }

        function _0x8821x65(_0x8821x64) {
                var _0x8821x16 = _0x8821x63(_0x8821x64);
                return _0x8821x5e(_0x8821x16['r'] * 0.9, _0x8821x16['g'] * 0.9, _0x8821x16['b'] * 0.9)
        }

        function _0x8821x66(_0x8821x67) {
                for (var _0x8821xd in _0x8821x67) {
                        delete _0x8821x67[_0x8821xd]
                }
        }
        var _0x8821x68 = new DataView(new ArrayBuffer(8));

        function _0x8821x69(_0x8821x6a) {
                this['_e'] = _0x8821x6a;
                this['reset']();
                return this
        }
        _0x8821x69['prototype'] = {
                writer: true
                , reset: function (_0x8821x6a) {
                        this['_b'] = [];
                        this['_o'] = 0
                }
                , setUint8: function (_0x8821x16) {
                        if (_0x8821x16 >= 0 && _0x8821x16 < 256) {
                                this['_b']['push'](_0x8821x16)
                        };
                        return this
                }
                , setInt8: function (_0x8821x16) {
                        if (_0x8821x16 >= -128 && _0x8821x16 < 128) {
                                this['_b']['push'](_0x8821x16)
                        };
                        return this
                }
                , setUint16: function (_0x8821x16) {
                        _0x8821x68['setUint16'](0, _0x8821x16, this._e);
                        this._move(2);
                        return this
                }
                , setInt16: function (_0x8821x16) {
                        _0x8821x68['setInt16'](0, _0x8821x16, this._e);
                        this._move(2);
                        return this
                }
                , setUint32: function (_0x8821x16) {
                        _0x8821x68['setUint32'](0, _0x8821x16, this._e);
                        this._move(4);
                        return this
                }
                , setInt32: function (_0x8821x16) {
                        _0x8821x68['setInt32'](0, _0x8821x16, this._e);
                        this._move(4);
                        return this
                }
                , setFloat32: function (_0x8821x16) {
                        _0x8821x68['setFloat32'](0, _0x8821x16, this._e);
                        this._move(4);
                        return this
                }
                , setFloat64: function (_0x8821x16) {
                        _0x8821x68['setFloat64'](0, _0x8821x16, this._e);
                        this._move(8);
                        return this
                }
                , _move: function (_0x8821x17) {
                        for (var _0x8821xd = 0; _0x8821xd < _0x8821x17; _0x8821xd++) {
                                this['_b']['push'](_0x8821x68['getUint8'](_0x8821xd))
                        }
                }
                , setStringUTF8: function (_0x8821x9) {
                        var _0x8821x6b = unescape(encodeURIComponent(_0x8821x9));
                        for (var _0x8821xd = 0, _0x8821x10 = _0x8821x6b['length']; _0x8821xd < _0x8821x10; _0x8821xd++) {
                                this['_b']['push'](_0x8821x6b['charCodeAt'](_0x8821xd))
                        };
                        this['_b']['push'](0);
                        return this
                }
                , build: function () {
                        return new Uint8Array(this._b)
                }
        };

        function _0x8821x6c(_0x8821x6d, _0x8821x6e, _0x8821x6a) {
                this['_e'] = _0x8821x6a;
                if (_0x8821x6d) {
                        this['repurpose'](_0x8821x6d, _0x8821x6e)
                }
        }
        _0x8821x6c['prototype'] = {
                reader: true
                , repurpose: function (_0x8821x6d, _0x8821x6e) {
                        this['view'] = _0x8821x6d;
                        this['_o'] = _0x8821x6e || 0
                }
                , getUint8: function () {
                        return this['view']['getUint8'](this['_o']++, this._e)
                }
                , getInt8: function () {
                        return this['view']['getInt8'](this['_o']++, this._e)
                }
                , getUint16: function () {
                        return this['view']['getUint16']((this['_o'] += 2) - 2, this._e)
                }
                , getInt16: function () {
                        return this['view']['getInt16']((this['_o'] += 2) - 2, this._e)
                }
                , getUint32: function () {
                        return this['view']['getUint32']((this['_o'] += 4) - 4, this._e)
                }
                , getInt32: function () {
                        return this['view']['getInt32']((this['_o'] += 4) - 4, this._e)
                }
                , getFloat32: function () {
                        return this['view']['getFloat32']((this['_o'] += 4) - 4, this._e)
                }
                , getFloat64: function () {
                        return this['view']['getFloat64']((this['_o'] += 8) - 8, this._e)
                }
                , getStringUTF8: function () {
                        var _0x8821x9 = ''
                                , _0x8821x17;
                        while ((_0x8821x17 = this['view']['getUint8'](this['_o']++)) !== 0) {
                                _0x8821x9 += String['fromCharCode'](_0x8821x17)
                        };
                        return decodeURIComponent(escape(_0x8821x9))
                }
        };
        var _0x8821x6f = null
                , _0x8821x70 = './skins/'
                , _0x8821x71 = 'https:' == _0x8821x58['location']['protocol']
                , _0x8821x72 = Math['PI'] * 2
                , _0x8821x73 = new Uint8Array([254, 6, 0, 0, 0])
                , _0x8821x74 = new Uint8Array([255, 1, 0, 0, 0])
                , _0x8821x75 = {
                        1: new Uint8Array([1])
                        , 17: new Uint8Array([17])
                        , 21: new Uint8Array([21])
                        , 18: new Uint8Array([18])
                        , 19: new Uint8Array([19])
                        , 22: new Uint8Array([22])
                        , 23: new Uint8Array([23])
                        , 24: new Uint8Array([24])
                        , 254: new Uint8Array([254])
                };

        function _0x8821x76() {
                if (!_0x8821x9a) {
                        return
                };
                _0x8821x9a['onopen'] = null;
                _0x8821x9a['onmessage'] = null;
                _0x8821x9a['close']();
                _0x8821x9a = null
        }

        function _0x8821x77(_0x8821x78) {
                if (_0x8821x9a) {
                        _0x8821x76()
                };
                _0x8821x5c('#connecting')['show']();
                _0x8821x6f = _0x8821x78;
                _0x8821x9a = new WebSocket('ws://' + _0x8821x78, '3rb.bex');
                _0x8821x9a['binaryType'] = 'arraybuffer';
                _0x8821x9a['onopen'] = _0x8821x79;
                _0x8821x9a['onmessage'] = _0x8821x7e;
                _0x8821x9a['onerror'] = _0x8821x7a;
                _0x8821x9a['onclose'] = _0x8821x7c
        }

        function _0x8821x79() {
                _0x8821x9b = 1000;
                _0x8821x5c('#connecting')['hide']();
                _0x8821x7d(_0x8821x73);
                _0x8821x7d(_0x8821x74)
        }

        function _0x8821x7a(_0x8821x7b) {
                return
        }

        function _0x8821x7c(_0x8821x53) {
                _0x8821x76();
                _0x8821x94();
                setTimeout(function () {
                        if (_0x8821x9a && _0x8821x9a['readyState'] === 1) {
                                return
                        };
                        _0x8821x77(_0x8821x6f)
                }, _0x8821x9b *= 1.5)
        }

        function _0x8821x7d(_0x8821x20) {
                if (!_0x8821x9a) {
                        return
                };
                if (_0x8821x9a['readyState'] !== 1) {
                        return
                };
                if (_0x8821x20['build']) {
                        _0x8821x9a['send'](_0x8821x20['build']())
                } else {
                        _0x8821x9a['send'](_0x8821x20)
                }
        }

        function _0x8821x7e(_0x8821x20) {
                _0x8821x9c = Date['now']();
                var _0x8821x7f = new _0x8821x6c(new DataView(_0x8821x20['data']), 0, true);
                var _0x8821x80 = _0x8821x7f['getUint8']();
                switch (_0x8821x80) {
                case 0x10:
                        var _0x8821x81, _0x8821x82, _0x8821x83, _0x8821xf, _0x8821x18, _0x8821x19, _0x8821x9, _0x8821x84, _0x8821x85, _0x8821x86, _0x8821x87, _0x8821x88, _0x8821x89, _0x8821x64, _0x8821x21, _0x8821x3d;
                        _0x8821x89 = _0x8821x7f['getUint16']();
                        for (var _0x8821xd = 0; _0x8821xd < _0x8821x89; _0x8821xd++) {
                                _0x8821x81 = _0x8821x7f['getUint32']();
                                _0x8821x82 = _0x8821x7f['getUint32']();
                                if (!_0x8821x95['byId']['hasOwnProperty'](_0x8821x81) || !_0x8821x95['byId']['hasOwnProperty'](_0x8821x82)) {
                                        continue
                                };
                                _0x8821x95['byId'][_0x8821x82]['destroy'](_0x8821x81)
                        };
                        while (true) {
                                _0x8821x83 = _0x8821x7f['getUint32']();
                                if (_0x8821x83 === 0) {
                                        break
                                };
                                _0x8821x18 = _0x8821x7f['getInt32']();
                                _0x8821x19 = _0x8821x7f['getInt32']();
                                _0x8821x9 = _0x8821x7f['getUint16']();
                                _0x8821x84 = _0x8821x7f['getUint8']();
                                _0x8821x86 = !!(_0x8821x84 & 0x02);
                                _0x8821x87 = !!(_0x8821x84 & 0x08);
                                _0x8821x88 = !!(_0x8821x84 & 0x04);
                                _0x8821x64 = _0x8821x86 ? _0x8821x5e(_0x8821x7f['getUint8'](), _0x8821x7f['getUint8'](), _0x8821x7f['getUint8']()) : null;
                                _0x8821x3d = _0x8821x88 ? _0x8821x7f['getStringUTF8']() : null;
                                _0x8821x21 = _0x8821x87 ? _0x8821x7f['getStringUTF8']() : null;
                                if (_0x8821x95['byId']['hasOwnProperty'](_0x8821x83)) {
                                        _0x8821x85 = _0x8821x95['byId'][_0x8821x83];
                                        _0x8821x85['update'](_0x8821x9c);
                                        _0x8821x85['updated'] = _0x8821x9c;
                                        _0x8821x85['ox'] = _0x8821x85['x'];
                                        _0x8821x85['oy'] = _0x8821x85['y'];
                                        _0x8821x85['os'] = _0x8821x85['s'];
                                        _0x8821x85['nx'] = _0x8821x18;
                                        _0x8821x85['ny'] = _0x8821x19;
                                        _0x8821x85['ns'] = _0x8821x9;
                                        if (_0x8821x64) {
                                                _0x8821x85['setColor'](_0x8821x64)
                                        };
                                        if (_0x8821x3d) {
                                                _0x8821x85['setSkin'](_0x8821x3d)
                                        };
                                        if (_0x8821x21) {
                                                _0x8821x85['setName'](_0x8821x21)
                                        }
                                } else {
                                        if (_0x8821xb2['pointsColor'] == true && _0x8821x9 <= 45 && _0x8821x84 != 34) {
                                                _0x8821x64 = themeColors['foodColor']
                                        };
                                        _0x8821x85 = new _0x8821xda(_0x8821x83, _0x8821x18, _0x8821x19, _0x8821x9, _0x8821x21, _0x8821x64, _0x8821x3d, _0x8821x84);
                                        _0x8821x95['byId'][_0x8821x83] = _0x8821x85;
                                        _0x8821x95['list']['push'](_0x8821x85)
                                }
                        };
                        _0x8821x89 = _0x8821x7f['getUint16']();
                        for (_0x8821xd = 0; _0x8821xd < _0x8821x89; _0x8821xd++) {
                                _0x8821x82 = _0x8821x7f['getUint32']();
                                if (_0x8821x95['byId']['hasOwnProperty'](_0x8821x82) && !_0x8821x95['byId'][_0x8821x82]['destroyed']) {
                                        _0x8821x95['byId'][_0x8821x82]['destroy'](null)
                                }
                        };
                        if (!_0x8821x95['byId']) {
                                SNIPERSKY['onDead']()
                        };
                        break;
                case 0x11:
                        _0x8821xab = _0x8821x7f['getFloat32']();
                        _0x8821xac = _0x8821x7f['getFloat32']();
                        _0x8821xad = _0x8821x7f['getFloat32']();
                        break;
                case 0x12:
                        for (var _0x8821xd in _0x8821x95['byId']) {
                                _0x8821x95['byId'][_0x8821xd]['destroy'](null)
                        };
                case 0x14:
                        _0x8821x95['mine'] = [];
                        break;
                case 0x15:
                        break;
                case 0x20:
                        _0x8821x95['mine']['push'](_0x8821x7f['getUint32']());
                        break;
                case 0x30:
                        _0x8821x97['items'] = [];
                        _0x8821x97['type'] = 'text';
                        var _0x8821x89 = _0x8821x7f['getUint32']();
                        for (_0x8821xd = 0; _0x8821xd < _0x8821x89; ++_0x8821xd) {
                                _0x8821x97['items']['push'](_0x8821x7f['getStringUTF8']())
                        };
                        break;
                case 0x31:
                        _0x8821x97['items'] = [];
                        _0x8821x97['type'] = 'ffa';
                        var _0x8821x89 = _0x8821x7f['getUint32']();
                        for (_0x8821xd = 0; _0x8821xd < _0x8821x89; ++_0x8821xd) {
                                _0x8821x97['items']['push']({
                                        me: !!_0x8821x7f['getUint32']()
                                        , name: _0x8821x7f['getStringUTF8']() || 'An unnamed cell'
                                })
                        };
                        break;
                case 0x32:
                        _0x8821x97['items'] = [];
                        _0x8821x97['type'] = 'pie';
                        var _0x8821x89 = _0x8821x7f['getUint32']();
                        for (_0x8821xd = 0; _0x8821xd < _0x8821x89; ++_0x8821xd) {
                                _0x8821x97['items']['push'](_0x8821x7f['getFloat32']())
                        };
                        break;
                case 0x40:
                        _0x8821x96['left'] = _0x8821x7f['getFloat64']();
                        _0x8821x96['top'] = _0x8821x7f['getFloat64']();
                        _0x8821x96['right'] = _0x8821x7f['getFloat64']();
                        _0x8821x96['bottom'] = _0x8821x7f['getFloat64']();
                        _0x8821x96['width'] = _0x8821x96['right'] - _0x8821x96['left'];
                        _0x8821x96['height'] = _0x8821x96['bottom'] - _0x8821x96['top'];
                        _0x8821x96['centerX'] = (_0x8821x96['left'] + _0x8821x96['right']) / 2;
                        _0x8821x96['centerY'] = (_0x8821x96['top'] + _0x8821x96['bottom']) / 2;
                        if (_0x8821x20['data']['byteLength'] === 33) {
                                break
                        };
                        if (!_0x8821xa6) {
                                _0x8821xa6 = true;
                                _0x8821xa7 = _0x8821xab = _0x8821x96['centerX'];
                                _0x8821xa8 = _0x8821xac = _0x8821x96['centerY'];
                                _0x8821xa9 = _0x8821xad = 1
                        };
                        _0x8821x7f['getUint32']();
                        if (!/MultiOgar|OgarII/ ['test'](_0x8821x7f['getStringUTF8']()) || _0x8821x99['pingLoopId']) {
                                break
                        };
                        _0x8821x99['pingLoopId'] = setInterval(function () {
                                _0x8821x7d(_0x8821x75[254]);
                                _0x8821x99['pingLoopStamp'] = Date['now']()
                        }, 2000);
                        SNIPERSKY['afterGameLoaded']();
                        break;
                case 0x63:
                        var _0x8821x84 = _0x8821x7f['getUint8']();
                        var _0x8821x64 = _0x8821x5e(_0x8821x7f['getUint8'](), _0x8821x7f['getUint8'](), _0x8821x7f['getUint8']());
                        var _0x8821x21 = _0x8821x7f['getStringUTF8']()['trim']();
                        var _0x8821x36 = /\{([\w]+)\}/ ['exec'](_0x8821x21);
                        if (_0x8821x36) {
                                _0x8821x21 = _0x8821x21['replace'](_0x8821x36[0], '')['trim']()
                        };
                        _0x8821x21 = _0x8821x21['substring'](_0x8821x21['indexOf']('}') + 1);
                        var _0x8821x24 = _0x8821x7f['getStringUTF8']();
                        var _0x8821x8a = !!(_0x8821x84 & 0x80)
                                , _0x8821x8b = !!(_0x8821x84 & 0x40)
                                , _0x8821x8c = !!(_0x8821x84 & 0x20);
                        if (_0x8821x8a && _0x8821x21 !== 'SERVER') {
                                _0x8821x21 = '[SERVER] ' + _0x8821x21
                        };
                        if (_0x8821x8b) {
                                _0x8821x21 = '[ADMIN] ' + _0x8821x21
                        };
                        if (_0x8821x8c) {
                                _0x8821x21 = '[MOD] ' + _0x8821x21
                        };
                        var _0x8821x8d = Math['max'](3000, 1000 + _0x8821x24['length'] * 150);
                        _0x8821x98['waitUntil'] = _0x8821x9c - _0x8821x98['waitUntil'] > 1000 ? _0x8821x9c + _0x8821x8d : _0x8821x98['waitUntil'] + _0x8821x8d;
                        _0x8821x98['messages']['push']({
                                server: _0x8821x8a
                                , admin: _0x8821x8b
                                , mod: _0x8821x8c
                                , color: _0x8821x64
                                , name: _0x8821x21
                                , message: _0x8821x24
                                , time: _0x8821x9c
                        });
                        _0x8821xbb(_0x8821x21, _0x8821x24);
                        _0x8821xbc();
                        break;
                case 0xFE:
                        _0x8821x99['info'] = JSON['parse'](_0x8821x7f['getStringUTF8']());
                        _0x8821x99['latency'] = _0x8821x9c - _0x8821x99['pingLoopStamp'];
                        _0x8821xc5();
                        break;
                default:
                        _0x8821x76();
                        break
                }
        }

        function _0x8821x8e(_0x8821x18, _0x8821x19) {
                var _0x8821x8f = new _0x8821x69(true);
                _0x8821x8f['setUint8'](0x10);
                _0x8821x8f['setUint32'](_0x8821x18);
                _0x8821x8f['setUint32'](_0x8821x19);
                _0x8821x8f['_b']['push'](0, 0, 0, 0);
                _0x8821x7d(_0x8821x8f)
        }

        function _0x8821x90(_0x8821x21) {
                var _0x8821x91 = '';
                if (SNIPERSKY['getSkin']() != '') {
                        _0x8821x91 = '{' + SNIPERSKY['getSkin']() + '}'
                };
                _0x8821x91 += _0x8821x21 + '';
                _0x8821x21 = _0x8821x91;
                var _0x8821x8f = new _0x8821x69(true);
                _0x8821x8f['setUint8'](0x00);
                _0x8821x8f['setStringUTF8'](_0x8821x21);
                _0x8821x7d(_0x8821x8f);
                nodeList[0][1] = _0x8821x21;
                nodeList[0][5] = SNIPERSKY['getCustomSkinUrl']()
        }

        function _0x8821x92(_0x8821x93) {
                var _0x8821x8f = new _0x8821x69();
                _0x8821x8f['setUint8'](0x63);
                _0x8821x8f['setUint8'](0);
                _0x8821x8f['setStringUTF8'](_0x8821x93);
                _0x8821x7d(_0x8821x8f);
                jQuery('#chat_textbox')['hide']()
        }

        function _0x8821x94() {
                _0x8821x66(_0x8821x95);
                _0x8821x66(_0x8821x96);
                _0x8821x66(_0x8821x97);
                _0x8821x66(_0x8821x98);
                _0x8821x66(_0x8821x99);
                _0x8821x98['messages'] = [];
                _0x8821x97['items'] = [];
                _0x8821x95['mine'] = [];
                _0x8821x95['byId'] = {};
                _0x8821x95['list'] = [];
                _0x8821xa7 = _0x8821xa8 = _0x8821xab = _0x8821xac = 0;
                _0x8821xa9 = _0x8821xad = 1;
                _0x8821xa6 = false;
                SNIPERSKY['isSpectating'] = false
        }
        var _0x8821x95 = Object['create']({
                mine: []
                , byId: {}
                , list: []
        });
        var _0x8821x96 = Object['create']({
                left: -2000
                , right: 2000
                , top: -2000
                , bottom: 2000
                , width: 4000
                , height: 4000
                , centerX: -1
                , centerY: -1
        });
        var _0x8821x97 = Object['create']({
                type: NaN
                , items: null
                , canvas: document['createElement']('canvas')
                , teams: ['#F33', '#3F3', '#33F']
        });
        var _0x8821x98 = Object['create']({
                messages: []
                , waitUntil: 0
                , canvas: document['createElement']('canvas')
                , visible: false
        });
        var _0x8821x99 = Object['create']({
                framesPerSecond: 0
                , latency: NaN
                , supports: null
                , info: null
                , pingLoopId: NaN
                , pingLoopStamp: null
                , canvas: document['createElement']('canvas')
                , visible: false
                , score: NaN
                , maxScore: 0
        });
        var _0x8821x9a = null;
        var _0x8821x6f = null;
        var _0x8821x9b = 1000;
        var _0x8821x9c = Date['now']();
        var _0x8821x9d = Date['now']();
        var _0x8821x9e = null;
        var _0x8821x9f = null;
        var _0x8821xa0 = {};
        var _0x8821xa1 = {};
        var _0x8821xa2 = {};
        var _0x8821xa3 = false;
        var _0x8821xa4 = false;
        var _0x8821xa5 = null;
        var _0x8821xa6 = false;
        var _0x8821xa7 = 0;
        var _0x8821xa8 = 0;
        var _0x8821xa9 = 1;
        var _0x8821xaa = 1;
        var _0x8821xab = 0;
        var _0x8821xac = 0;
        var _0x8821xad = 1;
        var _0x8821xae = 1;
        var _0x8821xaf = NaN;
        var _0x8821xb0 = NaN;
        var _0x8821xb1 = 1;
        var _0x8821xb2 = {
                mobile: 'createTouch' in document
                , showMass: true
                , showNames: true
                , showLeaderboard: true
                , showChat: true
                , showGrid: false
                , showTextOutline: true
                , showColor: true
                , showSkins: false
                , showCustomSkins: true
                , showMinimap: true
                , darkTheme: true
                , autoZoom: false
                , zoom: true
                , animation: false
                , gridLocations: false
                , hideMyName: true
                , pointsColor: true
                , chatPopup: true
                , showLeaderBord: true
                , chatBox: false
                , allowGETipSet: false
                , showStatus: true
                , autoHideText: false
        };
        var _0x8821xb3 = {
                space: false
                , w: false
                , e: false
                , r: false
                , t: false
                , p: false
                , q: false
                , esc: false
        };
        if (null !== _0x8821x58['localStorage']) {
                _0x8821x5c(window)['load'](function () {
                        _0x8821x5c('.save')['each'](function () {
                                var _0x8821x83 = _0x8821x5c(this)['data']('box-id');
                                var _0x8821x22 = _0x8821x58['localStorage']['getItem']('checkbox-' + _0x8821x83);
                                if (_0x8821x22 && _0x8821x22 == 'true' && 0 != _0x8821x83 && 9 != _0x8821x83 && 10 != _0x8821x83 && 13 != _0x8821x83) {
                                        _0x8821x5c(this)['prop']('checked', 'true');
                                        _0x8821x5c(this)['trigger']('change')
                                } else {
                                        if ((_0x8821x83 == 0 || _0x8821x83 == 9 || _0x8821x83 == 10 || _0x8821x83 == 13) && _0x8821x22 != null) {
                                                _0x8821x5c(this)['val'](_0x8821x22)
                                        }
                                }
                        });
                        _0x8821x5c('.save')['change'](function () {
                                var _0x8821x83 = _0x8821x5c(this)['data']('box-id');
                                var _0x8821x22 = (_0x8821x83 == 0 || _0x8821x83 == 9 || _0x8821x83 == 10 || _0x8821x83 == 13) ? _0x8821x5c(this)['val']() : _0x8821x5c(this)['prop']('checked');
                                _0x8821x58['localStorage']['setItem']('checkbox-' + _0x8821x83, _0x8821x22)
                        })
                })
        };
        _0x8821x5c['ajax']({
                type: 'POST'
                , dataType: 'json'
                , url: 'checkdir.php'
                , data: {
                        "action": 'getSkins'
                }
                , success: function (_0x8821x20) {
                        var _0x8821xb4 = Date['now']();
                        response = JSON['parse'](_0x8821x20['names']);
                        for (var _0x8821xd = 0; _0x8821xd < response['length']; _0x8821xd++) {
                                _0x8821xa0[response[_0x8821xd]] = _0x8821xb4
                        };
                        for (var _0x8821xd in _0x8821xa0) {
                                if (_0x8821xa0[_0x8821xd] !== _0x8821xb4) {
                                        delete _0x8821xa0[_0x8821xd]
                                }
                        }
                }
        });

        function _0x8821xb5() {
                _0x8821xa3 = false;
                _0x8821x5c('#overlays')['hide']()
        }

        function _0x8821xb6() {
                _0x8821xa3 = true;
                _0x8821x5c('#overlays')['fadeIn'](300)
        }

        function _0x8821xb7(_0x8821x4) {
                _0x8821x4['translate'](_0x8821x9e['width'] / 2, _0x8821x9e['height'] / 2);
                _0x8821xb8(_0x8821x4);
                _0x8821x4['translate'](-_0x8821xa7, -_0x8821xa8)
        }

        function _0x8821xb8(_0x8821x4) {
                _0x8821x4['scale'](_0x8821xa9, _0x8821xa9)
        }

        function _0x8821xb9(_0x8821x4) {
                _0x8821x4['scale'](_0x8821xaa, _0x8821xaa)
        }

        function _0x8821xba(_0x8821x4) {
                _0x8821x4['translate'](_0x8821xa7, _0x8821xa8);
                _0x8821xb9(_0x8821x4);
                _0x8821x4['translate'](-_0x8821x9e['width'] / 2, -_0x8821x9e['height'] / 2)
        }

        function _0x8821xbb(_0x8821x21, _0x8821x24) {
                if (!_0x8821xb2['chatPopup'] || _0x8821xb2['chatBox'] || !_0x8821xb2['showChat']) {
                        return
                };
                alertify['warning'](_0x8821x21 + ' : ' + _0x8821x24);
                jQuery('.ajs-warning')['css']('background', themeColors['popupColor']);
                jQuery('.ajs-warning')['css']('opacity', 0.96);
                jQuery('.ajs-warning')['css']('color', themeColors['popupTextColor'])
        }

        function _0x8821xbc() {
                if (_0x8821xb2['chatPopup'] || !_0x8821xb2['chatBox']) {
                        return
                };
                if (_0x8821x98['messages']['length'] === 0 && _0x8821xb2['showChat']) {
                        return _0x8821x98['visible'] = false
                };
                _0x8821x98['visible'] = true;
                var _0x8821x3 = _0x8821x98['canvas'];
                var _0x8821x4 = _0x8821x3['getContext']('2d');
                var _0x8821xbd = _0x8821x98['messages']['slice'](-15);
                var _0x8821xbe = [];
                for (var _0x8821xd = 0, _0x8821xbf = _0x8821xbd['length']; _0x8821xd < _0x8821xbf; _0x8821xd++) {
                        _0x8821xbe['push']([{
                                text: _0x8821xbd[_0x8821xd]['name']
                                , color: _0x8821xbd[_0x8821xd]['color']
                        }, {
                                text: ' ' + _0x8821xbd[_0x8821xd]['message']
                                , color: _0x8821xb2['darkTheme'] ? '#FFF' : '#000'
                        }])
                };
                var _0x8821xc0 = 0;
                var _0x8821xc1 = 20 * _0x8821xbf + 2;
                for (var _0x8821xd = 0; _0x8821xd < _0x8821xbf; _0x8821xd++) {
                        var _0x8821xc2 = 0;
                        var _0x8821xc3 = _0x8821xbe[_0x8821xd];
                        for (var _0x8821xc4 = 0; _0x8821xc4 < _0x8821xc3['length']; _0x8821xc4++) {
                                _0x8821x4['font'] = '18px Ubuntu';
                                _0x8821xc3[_0x8821xc4]['width'] = _0x8821x4['measureText'](_0x8821xc3[_0x8821xc4]['text'])['width'];
                                _0x8821xc2 += _0x8821xc3[_0x8821xc4]['width']
                        };
                        _0x8821xc0 = Math['max'](_0x8821xc2, _0x8821xc0)
                };
                _0x8821x3['width'] = _0x8821xc0;
                _0x8821x3['height'] = _0x8821xc1;
                for (var _0x8821xd = 0; _0x8821xd < _0x8821xbf; _0x8821xd++) {
                        _0x8821xc0 = 0;
                        var _0x8821xc3 = _0x8821xbe[_0x8821xd];
                        for (var _0x8821xc4 = 0; _0x8821xc4 < _0x8821xc3['length']; _0x8821xc4++) {
                                _0x8821x4['font'] = '18px Ubuntu';
                                _0x8821x4['fillStyle'] = _0x8821xc3[_0x8821xc4]['color'];
                                _0x8821x4['fillText'](_0x8821xc3[_0x8821xc4]['text'], _0x8821xc0, 20 * (1 + _0x8821xd));
                                _0x8821xc0 += _0x8821xc3[_0x8821xc4]['width']
                        }
                }
        }

        function _0x8821xc5() {
                if (!_0x8821x99['info']) {
                        return _0x8821x99['visible'] = false
                };
                _0x8821x99['visible'] = false;
                var _0x8821x3 = _0x8821x99['canvas'];
                var _0x8821x4 = _0x8821x3['getContext']('2d');
                _0x8821x4['font'] = '14px Ubuntu';
                var _0x8821xc6 = [_0x8821x99['info']['name'] + '(' + _0x8821x99['info']['mode'] + ')', _0x8821x99['info']['playersTotal'] + ' / ' + _0x8821x99['info']['playersLimit'] + ' players', _0x8821x99['info']['playersAlive'] + ' playing', _0x8821x99['info']['playersSpect'] + ' spectating', (_0x8821x99['info']['update'] * 2.5)['toFixed'](1) + '% load @ ' + _0x8821xc7(_0x8821x99['info']['uptime'])];
                var _0x8821xc0 = 0;
                for (var _0x8821xd = 0; _0x8821xd < _0x8821xc6['length']; _0x8821xd++) {
                        _0x8821xc0 = Math['max'](_0x8821xc0, 2 + _0x8821x4['measureText'](_0x8821xc6[_0x8821xd])['width'] + 2)
                };
                _0x8821x3['width'] = _0x8821xc0;
                _0x8821x3['height'] = _0x8821xc6['length'] * (14 + 2);
                _0x8821x4['font'] = '14px Ubuntu';
                _0x8821x4['fillStyle'] = _0x8821xb2['darkTheme'] ? '#AAA' : '#555';
                _0x8821x4['textBaseline'] = 'top';
                for (var _0x8821xd = 0; _0x8821xd < _0x8821xc6['length']; _0x8821xd++) {
                        _0x8821x4['fillText'](_0x8821xc6[_0x8821xd], 2, -2 + _0x8821xd * (14 + 2))
                }
        }

        function _0x8821xc7(_0x8821xc8) {
                _0x8821xc8 = ~~_0x8821xc8;
                var _0x8821xc9 = ~~(_0x8821xc8 / 60);
                if (_0x8821xc9 < 1) {
                        return '<1 min'
                };
                var _0x8821xca = ~~(_0x8821xc9 / 60);
                if (_0x8821xca < 1) {
                        return _0x8821xc9 + 'min'
                };
                var _0x8821xcb = ~~(_0x8821xca / 24);
                if (_0x8821xcb < 1) {
                        return _0x8821xca + 'h'
                };
                return _0x8821xcb + 'd'
        }

        function _0x8821xcc() {
                _0x8821x9f['save']();
                _0x8821x9f['lineWidth'] = 1;
                _0x8821x9f['strokeStyle'] = _0x8821xb2['darkTheme'] ? '#AAA' : '#000';
                _0x8821x9f['globalAlpha'] = 0.2;
                var _0x8821xcd = 50
                        , _0x8821xd;
                cW = _0x8821x9e['width'] / _0x8821xa9, cH = _0x8821x9e['height'] / _0x8821xa9, startLeft = (-_0x8821xa7 + cW / 2) % _0x8821xcd, startTop = (-_0x8821xa8 + cH / 2) % _0x8821xcd;
                _0x8821xb8(_0x8821x9f);
                _0x8821x9f['beginPath']();
                for (_0x8821xd = startLeft; _0x8821xd < cW; _0x8821xd += _0x8821xcd) {
                        _0x8821x9f['moveTo'](_0x8821xd, 0);
                        _0x8821x9f['lineTo'](_0x8821xd, cH)
                };
                for (_0x8821xd = startTop; _0x8821xd < cH; _0x8821xd += _0x8821xcd) {
                        _0x8821x9f['moveTo'](0, _0x8821xd);
                        _0x8821x9f['lineTo'](cW, _0x8821xd)
                };
                _0x8821x9f['closePath']();
                _0x8821x9f['stroke']();
                _0x8821x9f['restore']()
        }

        function _0x8821xce() {
                var _0x8821x18 = Math['round'](_0x8821x96['left']) + 40;
                var _0x8821x19 = Math['round'](_0x8821x96['top']) + 40;
                var _0x8821xcf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' ['split']('');
                var _0x8821xd0 = (Math['round'](_0x8821x96['right']) - 40 - _0x8821x18) / 5;
                var _0x8821x8 = (Math['round'](_0x8821x96['bottom']) - 40 - _0x8821x19) / 5;
                _0x8821x9f['save']();
                _0x8821x9f['beginPath']();
                _0x8821x9f['lineWidth'] = 40;
                _0x8821x9f['textAlign'] = 'center';
                _0x8821x9f['textBaseline'] = 'middle';
                _0x8821x9f['font'] = 0.7 * _0x8821xd0 + 'px Ubuntu';
                _0x8821x9f['fillStyle'] = '#1A1A1A';
                var _0x8821xc4 = 0;
                for (; 5 > _0x8821xc4; _0x8821xc4++) {
                        var _0x8821xd = 0;
                        for (; 5 > _0x8821xd; _0x8821xd++) {
                                _0x8821x9f['fillText'](_0x8821xcf[_0x8821xc4] + (_0x8821xd + 1), _0x8821x18 + _0x8821xd0 * _0x8821xd + _0x8821xd0 / 2, _0x8821x19 + _0x8821x8 * _0x8821xc4 + _0x8821x8 / 2)
                        }
                };
                _0x8821x9f['lineWidth'] = 100;
                _0x8821x9f['strokeStyle'] = '#1A1A1A';
                _0x8821xc4 = 0;
                for (; 5 > _0x8821xc4; _0x8821xc4++) {
                        _0x8821xd = 0;
                        for (; 5 > _0x8821xd; _0x8821xd++) {
                                _0x8821x9f['strokeRect'](_0x8821x18 + _0x8821xd0 * _0x8821xd, _0x8821x19 + _0x8821x8 * _0x8821xc4, _0x8821xd0, _0x8821x8)
                        }
                };
                _0x8821x9f['stroke']();
                _0x8821x9f['restore']()
        }

        function _0x8821xd1() {
                _0x8821x9f['save']();
                _0x8821x9f['beginPath']();
                _0x8821x9f['strokeStyle'] = themeColors['borderColor'];
                var _0x8821xd2 = _0x8821x9f['lineWidth'] = 90;
                _0x8821x9f['strokeRect'](_0x8821x96['left'] - _0x8821xd2 / 2, _0x8821x96['top'] - _0x8821xd2 / 2, _0x8821x96['right'] - _0x8821x96['left'] + _0x8821xd2, _0x8821x96['bottom'] - _0x8821x96['top'] + _0x8821xd2);
                _0x8821x9f['restore']()
        }

        function _0x8821xd3() {
                _0x8821x99['framesPerSecond'] += (1000 / Math['max'](Date['now']() - _0x8821x9d, 1) - _0x8821x99['framesPerSecond']) / 10;
                _0x8821x9d = Date['now']();
                var _0x8821xd4 = _0x8821x95['list']['slice'](0)['sort'](_0x8821xd6);
                for (var _0x8821xd = 0, _0x8821x10 = _0x8821xd4['length']; _0x8821xd < _0x8821x10; _0x8821xd++) {
                        _0x8821xd4[_0x8821xd]['update'](_0x8821x9d)
                };
                _0x8821xd8();
                _0x8821x9f['save']();
                _0x8821x9f['fillStyle'] = themeColors['bgColor'];
                _0x8821x9f['fillRect'](0, 0, _0x8821x9e['width'], _0x8821x9e['height']);
                if (_0x8821xb2['showGrid']) {
                        _0x8821xcc()
                };
                _0x8821xb7(_0x8821x9f);
                _0x8821xd1();
                if (_0x8821xb2['gridLocations']) {
                        _0x8821xce()
                };
                for (var _0x8821xd = 0, _0x8821x10 = _0x8821xd4['length']; _0x8821xd < _0x8821x10; _0x8821xd++) {
                        _0x8821xd4[_0x8821xd]['draw'](_0x8821x9f)
                };
                _0x8821xba(_0x8821x9f);
                _0x8821x9f['scale'](_0x8821xae, _0x8821xae);
                var _0x8821xc1 = 2;
                if (_0x8821xb2['showStatus'] == true) {
                        _0x8821x9f['fillStyle'] = themeColors['statusColor'];
                        _0x8821x9f['textBaseline'] = 'top';
                     	  if (!isNaN(_0x8821x99['maxScore'])) {
                               var _0x8821xd5 = 'Score: ' + _0x8821x99['maxScore'] + ' | '
                        } else {
                               var _0x8821xd5 = ''
                        };
						
                        if (!isNaN(_0x8821x99['score'])) {
                                _0x8821xd5 += 'Mass: ' + _0x8821x99['score'] + ' | '
                        } else {
                                _0x8821xd5 += 'Mass: 0 | '
                        };
                        _0x8821x9f['font'] = '30px Titillium Web';
                        _0x8821xd5 += 'FPS: ' + (~~_0x8821x99['framesPerSecond']);
                        if (!isNaN(_0x8821x99['latency'])) {
                                _0x8821xd5 += ' | ' + _0x8821x99['latency'] + ' ms ping'
                        };
                        _0x8821x9f['fillText'](_0x8821xd5, 2, _0x8821xc1)
                };
                _0x8821xc1 += 24;
                if (_0x8821x99['visible']) {
                        _0x8821x9f['drawImage'](_0x8821x99['canvas'], 2, _0x8821xc1)
                };
                if (_0x8821x97['visible']) {
                        _0x8821x9f['drawImage'](_0x8821x97['canvas'], _0x8821x9e['width'] / _0x8821xae - 10 - _0x8821x97['canvas']['width'], 10)
                };
                if (_0x8821x98['visible'] || _0x8821xa4) {
                        _0x8821x9f['globalAlpha'] = _0x8821xa4 ? 1 : Math['max'](1000 - _0x8821x9d + _0x8821x98['waitUntil'], 0) / 1000;
                        _0x8821x9f['drawImage'](_0x8821x98['canvas'], 10 / _0x8821xae, (_0x8821x9e['height'] - 55) / _0x8821xae - _0x8821x98['canvas']['height']);
                        _0x8821x9f['globalAlpha'] = 1
                };
                _0x8821x9f['restore']();
                _0x8821xe5();
                _0x8821x58['requestAnimationFrame'](_0x8821xd3)
        }

        function _0x8821xd6(_0x8821x16, _0x8821x17) {
                return _0x8821x16['s'] === _0x8821x17['s'] ? _0x8821x16['id'] - _0x8821x17['id'] : _0x8821x16['s'] - _0x8821x17['s']
        }

        function _0x8821xd7() {
                return 1 * Math['max'](_0x8821x9e['height'] / 1080, _0x8821x9e['width'] / 1920) * _0x8821xb1
        }

        function _0x8821xd8() {
                var _0x8821x45 = [];
                for (var _0x8821xd = 0; _0x8821xd < _0x8821x95['mine']['length']; _0x8821xd++) {
                        if (_0x8821x95['byId']['hasOwnProperty'](_0x8821x95['mine'][_0x8821xd])) {
                                _0x8821x45['push'](_0x8821x95['byId'][_0x8821x95['mine'][_0x8821xd]])
                        }
                };
                if (_0x8821x45['length'] > 0) {
                        var _0x8821x18 = 0
                                , _0x8821x19 = 0
                                , _0x8821x9 = 0
                                , _0x8821xd9 = 0;
                        for (var _0x8821xd = 0, _0x8821x10 = _0x8821x45['length']; _0x8821xd < _0x8821x10; _0x8821xd++) {
                                var _0x8821x85 = _0x8821x45[_0x8821xd];
                                _0x8821xd9 += ~~(_0x8821x85['ns'] * _0x8821x85['ns'] / 100);
                                _0x8821x18 += _0x8821x85['x'];
                                _0x8821x19 += _0x8821x85['y'];
                                _0x8821x9 += _0x8821x85['s']
                        };
                        _0x8821xab = _0x8821x18 / _0x8821x10;
                        _0x8821xac = _0x8821x19 / _0x8821x10;
                        if (_0x8821xb2['autoZoom'] == true) {
                                _0x8821xad = Math['pow'](Math['min'](64 / _0x8821x9, 1), 0.4) * _0x8821xd7()
                        } else {
                                _0x8821xad = _0x8821xd7()
                        };
                        _0x8821xa7 += (_0x8821xab - _0x8821xa7) / 2;
                        _0x8821xa8 += (_0x8821xac - _0x8821xa8) / 2;
                        _0x8821x99['score'] = _0x8821xd9;
                        _0x8821x99['maxScore'] = Math['max'](_0x8821x99['maxScore'], _0x8821xd9)
                } else {
                        _0x8821x99['score'] = NaN;
                        _0x8821x99['maxScore'] = 0;
                        _0x8821xa7 += (_0x8821xab - _0x8821xa7) / 20;
                        _0x8821xa8 += (_0x8821xac - _0x8821xa8) / 20
                };
                _0x8821xa9 += (_0x8821xad * _0x8821xae * _0x8821xb1 - _0x8821xa9) / 9;
                _0x8821xaa = 1 / _0x8821xa9
        }

        function _0x8821xda(_0x8821x83, _0x8821x18, _0x8821x19, _0x8821x9, _0x8821x21, _0x8821x64, _0x8821x3d, _0x8821x84) {
                this['id'] = _0x8821x83;
                this['x'] = this['nx'] = this['ox'] = _0x8821x18;
                this['y'] = this['ny'] = this['oy'] = _0x8821x19;
                this['s'] = this['ns'] = this['os'] = _0x8821x9;
                this['setColor'](_0x8821x64);
                this['setName'](_0x8821x21);
                this['setSkin'](_0x8821x3d);
                this['jagged'] = _0x8821x84 & 0x01 || _0x8821x84 & 0x10;
                this['ejected'] = !!(_0x8821x84 & 0x20);
                this['flags'] = _0x8821x84;
                this['born'] = _0x8821x9c
        }
        _0x8821xda['prototype'] = {
                destroyed: false
                , id: 0
                , diedBy: 0
                , ox: 0
                , x: 0
                , nx: 0
                , oy: 0
                , y: 0
                , ny: 0
                , os: 0
                , s: 0
                , ns: 0
                , nameSize: 0
                , drawNameSize: 0
                , color: '#FFF'
                , sColor: '#E5E5E5'
                , skin: null
                , customSkin: null
                , jagged: false
                , born: null
                , updated: null
                , dead: null
                , destroy: function (_0x8821xdb) {
                        delete _0x8821x95['byId'][this['id']];
                        if (_0x8821x95['mine']['remove'](this['id']) && _0x8821x95['mine']['length'] === 0) {
                                _0x8821xb6()
                        };
                        this['destroyed'] = true;
                        this['dead'] = _0x8821x9c;
                        if (_0x8821xdb && !this['diedBy']) {
                                this['diedBy'] = _0x8821xdb
                        }
                }
                , update: function (_0x8821xdc) {
                        var _0x8821xdd = (_0x8821xdc - this['updated']) / window['splitAnimation'];
                        _0x8821xdd = Math['max'](Math['min'](_0x8821xdd, 1), 0);
                        if (this['destroyed'] && Date['now']() > this['dead'] + 200) {
                                _0x8821x95['list']['remove'](this)
                        } else {
                                if (this['diedBy'] && _0x8821x95['byId']['hasOwnProperty'](this['diedBy'])) {
                                        this['nx'] = _0x8821x95['byId'][this['diedBy']]['x'];
                                        this['ny'] = _0x8821x95['byId'][this['diedBy']]['y']
                                }
                        };
                        this['x'] = this['ox'] + (this['nx'] - this['ox']) * _0x8821xdd;
                        this['y'] = this['oy'] + (this['ny'] - this['oy']) * _0x8821xdd;
                        this['s'] = this['os'] + (this['ns'] - this['os']) * _0x8821xdd;
                        this['nameSize'] = ~~(~~(Math['max'](~~(0.3 * this['ns']), 24)) / 3) * 3;
                        this['drawNameSize'] = ~~(~~(Math['max'](~~(0.3 * this['s']), 24)) / 3) * 3
                }
                , setName: function (_0x8821x22) {
                        var _0x8821xde = /\{([\w\W]+)\}/ ['exec'](_0x8821x22);
                        if (this['skin'] === null && _0x8821xde !== null) {
                                this['name'] = _0x8821x22['replace'](_0x8821xde[0], '')['trim']();
                                this['setSkin'](_0x8821xde[1])
                        } else {
                                this['name'] = _0x8821x22
                        }
                }
                , setSkin: function (_0x8821x22) {
                        this['skin'] = (_0x8821x22 && _0x8821x22[0] === '%' ? _0x8821x22['slice'](1) : _0x8821x22) || this['skin'];
                        if (this['skin'] === null || !_0x8821xa0['hasOwnProperty'](this['skin']) || _0x8821xa1[this['skin']]) {
                                return
                        };
                        _0x8821xa1[this['skin']] = new Image();
                        _0x8821xa1[this['skin']]['src'] = _0x8821x70 + this['skin'] + '.png'
                }
                , setCustomSkin: function (_0x8821x22) {
                        this['customSkin'] = _0x8821x22;
                        if (this['customSkin'] === null || _0x8821xa2[this['customSkin']]) {
                                return
                        };
                        _0x8821xa2[this['customSkin']] = new Image();
                        _0x8821xa2[this['customSkin']]['src'] = this['customSkin']
                }
                , setColor: function (_0x8821x22) {
                        this['color'] = _0x8821x22;
                        this['sColor'] = _0x8821x65(_0x8821x22)
                }
                , draw: function (_0x8821x4) {
                        _0x8821x4['save']();
                        this['drawShape'](_0x8821x4);
                        this['drawText'](_0x8821x4);
                        _0x8821x4['restore']()
                }
                , drawShape: function (_0x8821x4) {
                        _0x8821x4['fillStyle'] = _0x8821xb2['showColor'] ? this['color'] : _0x8821xda['prototype']['color'];
                        _0x8821x4['strokeStyle'] = _0x8821xb2['showColor'] ? this['sColor'] : _0x8821xda['prototype']['sColor'];
                        _0x8821x4['lineWidth'] = _0x8821xb2['animation'] ? Math['max'](~~(this['s'] / 50), 10) : 0;
                        if (!this['ejected'] && 45 < this['s']) {
                                this['s'] -= _0x8821x4['lineWidth'] / 2 - 2
                        };
                        _0x8821x4['beginPath']();
                        if (this['jagged']) {
                                if (_0x8821xb2['animation'] == true) {
                                        var _0x8821xdf = 120;
                                        var _0x8821xe0 = _0x8821x72 / _0x8821xdf;
                                        _0x8821x4['moveTo'](this['x'], this['y'] + this['s'] + 3);
                                        for (var _0x8821xd = 1; _0x8821xd < _0x8821xdf; _0x8821xd++) {
                                                var _0x8821xe1 = _0x8821xd * _0x8821xe0;
                                                var _0x8821xe2 = this['s'] - 3 + (_0x8821xd % 2 === 0) * 6;
                                                _0x8821x4['lineTo'](this['x'] + _0x8821xe2 * Math['sin'](_0x8821xe1), this['y'] + _0x8821xe2 * Math['cos'](_0x8821xe1))
                                        };
                                        _0x8821x4['lineTo'](this['x'], this['y'] + this['s'] + 3)
                                } else {
                                        _0x8821x4['fillStyle'] = themeColors['virusColor'];
                                        _0x8821x4['globalAlpha'] = 0.8;
                                        _0x8821x4['lineWidth'] = 35;
                                        _0x8821x4['strokeStyle'] = themeColors['virusStrokColor'];
                                        _0x8821x4['arc'](this['x'], this['y'], this['s'], 0, _0x8821x72, false)
                                }
                        } else {
                                _0x8821x4['arc'](this['x'], this['y'], this['s'], 0, _0x8821x72, false)
                        };
                        _0x8821x4['closePath']();
                        if (this['destroyed']) {
                                _0x8821x4['globalAlpha'] = Math['max'](200 - Date['now']() + this['dead'], 0) / 100
                        } else {
                                if (45 < this['s'] && !this['jagged']) {
                                        _0x8821x4['globalAlpha'] = Math['min'](window['cellalpha'], (Math['min'](Date['now']() - this['born'], 200) / 100))
                                } else {
                                        _0x8821x4['globalAlpha'] = (Math['min'](Date['now']() - this['born'], 200) / 100)
                                }
                        };
                        if (!this['ejected'] && 20 < this['s'] && (_0x8821xb2['animation'] || (this['jagged'] && !_0x8821xb2['animation']))) {
                                _0x8821x4['stroke']()
                        };
                        _0x8821x4['fill']();
                        if (playerDetailsByIdentifier[this['name'] + this['color']] !== undefined) {
                                var _0x8821x3c = playerDetailsByIdentifier[this['name'] + this['color']]['url'];
                                this['setCustomSkin'](_0x8821x3c)
                        };
                        if ((_0x8821xb2['showSkins'] && this['skin']) || (_0x8821xb2['showCustomSkins'] && this['customSkin'])) {
                                var _0x8821x3d;
                                if (_0x8821xb2['showSkins'] && this['skin']) {
                                        _0x8821x3d = _0x8821xa1[this['skin']]
                                };
                                if (_0x8821xb2['showCustomSkins'] && this['customSkin']) {
                                        _0x8821x3d = _0x8821xa2[this['customSkin']]
                                };
                                if (_0x8821x3d && _0x8821x3d['complete'] && _0x8821x3d['width'] && _0x8821x3d['height']) {
                                        _0x8821x4['save']();
                                        _0x8821x4['clip']();
                                        _0x8821xb9(_0x8821x4);
                                        var _0x8821xe3 = this['s'] * _0x8821xa9;
                                        _0x8821x4['drawImage'](_0x8821x3d, this['x'] * _0x8821xa9 - _0x8821xe3, this['y'] * _0x8821xa9 - _0x8821xe3, _0x8821xe3 *= 2, _0x8821xe3);
                                        _0x8821xb8(_0x8821x4);
                                        _0x8821x4['restore']()
                                }
                        };
                        if (!this['ejected'] && 20 < this['s']) {
                                this['s'] += _0x8821x4['lineWidth'] / 2 - 2
                        }
                }
                , drawText: function (_0x8821x4) {
                        if (this['s'] <= 45 || this['jagged']) {
                                return
                        };
                        if (_0x8821xb2['showMass']) {
                                var _0x8821xe4 = (~~(this['s'] * this['s'] / 100))
                                        .toString();
                                if (this['name'] && _0x8821xb2['showNames']) {
                                        if (_0x8821x95['mine']['indexOf'](this['id']) === -1 || !_0x8821xb2['hideMyName']) {
                                                _0x8821xf3(_0x8821x4, false, this['x'], this['y'], this['nameSize'], this['drawNameSize'], this['name'])
                                        };
                                        var _0x8821x19 = this['y'] + Math['max'](this['s'] / 4.5, this['nameSize'] / 1.5);
                                        if (!_0x8821xb2['hideMyName'] || _0x8821x95['mine']['indexOf'](this['id']) === -1) {
                                                _0x8821xf3(_0x8821x4, true, this['x'], _0x8821x19, this['nameSize'] / 2, this['drawNameSize'] / 2, _0x8821xe4)
                                        } else {
                                                _0x8821xf3(_0x8821x4, true, this['x'], this['y'], this['nameSize'] / 2, this['drawNameSize'] / 2, _0x8821xe4)
                                        }
                                } else {
                                        _0x8821xf3(_0x8821x4, true, this['x'], this['y'], this['nameSize'] / 2, this['drawNameSize'] / 2, _0x8821xe4)
                                }
                        } else {
                                if (this['name'] && _0x8821xb2['showNames']) {
                                        if (_0x8821x95['mine']['indexOf'](this['id']) != -1 && !_0x8821xb2['hideMyName']) {
                                                _0x8821xf3(_0x8821x4, false, this['x'], this['y'], this['nameSize'], this['drawNameSize'], this['name'])
                                        } else {
                                                if (_0x8821x95['mine']['indexOf'](this['id']) === -1) {
                                                        _0x8821xf3(_0x8821x4, false, this['x'], this['y'], this['nameSize'], this['drawNameSize'], this['name'])
                                                }
                                        }
                                }
                        }
                }
        };

        function _0x8821xe5() {
                for (var _0x8821xd in _0x8821xe6) {
                        for (var _0x8821xc4 in _0x8821xe6[_0x8821xd]) {
                                if (_0x8821x9d - _0x8821xe6[_0x8821xd][_0x8821xc4]['accessTime'] >= 5000) {
                                        delete _0x8821xe6[_0x8821xd][_0x8821xc4]
                                }
                        };
                        if (_0x8821xe6[_0x8821xd] === {}) {
                                delete _0x8821xe6[_0x8821xd]
                        }
                };
                for (var _0x8821xd in _0x8821xe7) {
                        if (_0x8821x9d - _0x8821xe7[_0x8821xd]['accessTime'] >= 5000) {
                                delete _0x8821xe7[_0x8821xd]
                        }
                }
        }
        var _0x8821xe6 = {};
        var _0x8821xe7 = {};

        function _0x8821xe8(_0x8821x3, _0x8821x4, _0x8821x93, _0x8821xe9) {
                _0x8821x4['font'] = _0x8821xe9 + 'px Ubuntu';
                _0x8821x4['lineWidth'] = _0x8821xb2['showTextOutline'] ? Math['max'](~~(_0x8821xe9 / 10), 2) : 0;
                _0x8821x3['width'] = _0x8821x4['measureText'](_0x8821x93)['width'] + 2 * _0x8821x4['lineWidth'];
                _0x8821x3['height'] = 4 * _0x8821xe9;
                _0x8821x4['font'] = _0x8821xe9 + 'px Ubuntu';
                _0x8821x4['lineWidth'] = _0x8821xb2['showTextOutline'] ? Math['max'](~~(_0x8821xe9 / 10), 2) : 0;
                _0x8821x4['textBaseline'] = 'middle';
                _0x8821x4['textAlign'] = 'center';
                _0x8821x4['fillStyle'] = themeColors['cellTextColor'];
                _0x8821x4['strokeStyle'] = themeColors['cellTextStrokColor'];
                _0x8821x4['translate'](_0x8821x3['width'] / 2, 2 * _0x8821xe9);
                (_0x8821x4['lineWidth'] !== 1) && _0x8821x4['strokeText'](_0x8821x93, 0, 0);
                _0x8821x4['fillText'](_0x8821x93, 0, 0)
        }

        function _0x8821xea(_0x8821x4, _0x8821x18, _0x8821x19, _0x8821x93, _0x8821xe9) {
                _0x8821x4['font'] = _0x8821xe9 + 'px Ubuntu';
                _0x8821x4['textBaseline'] = 'middle';
                _0x8821x4['textAlign'] = 'center';
                _0x8821x4['lineWidth'] = _0x8821xb2['showTextOutline'] ? Math['max'](~~(_0x8821xe9 / 10), 2) : 0;
                _0x8821x4['fillStyle'] = themeColors['cellTextColor'];
                _0x8821x4['strokeStyle'] = themeColors['cellTextStrokColor'];
                (_0x8821x4['lineWidth'] !== 1) && _0x8821x4['strokeText'](_0x8821x93, _0x8821x18, _0x8821x19);
                _0x8821x4['fillText'](_0x8821x93, _0x8821x18, _0x8821x19);
                _0x8821x4['restore']()
        }

        function _0x8821xeb(_0x8821x22, _0x8821xe9) {
                var _0x8821x3 = document['createElement']('canvas');
                var _0x8821x4 = _0x8821x3['getContext']('2d');
                _0x8821xe8(_0x8821x3, _0x8821x4, _0x8821x22, _0x8821xe9);
                _0x8821xe6[_0x8821x22] = _0x8821xe6[_0x8821x22] || {};
                _0x8821xe6[_0x8821x22][_0x8821xe9] = {
                        width: _0x8821x3['width']
                        , height: _0x8821x3['height']
                        , canvas: _0x8821x3
                        , value: _0x8821x22
                        , size: _0x8821xe9
                        , accessTime: _0x8821x9d
                };
                return _0x8821xe6[_0x8821x22][_0x8821xe9]
        }

        function _0x8821xec(_0x8821xe9) {
                var _0x8821xed = {
                        "0": {}
                        , "1": {}
                        , "2": {}
                        , "3": {}
                        , "4": {}
                        , "5": {}
                        , "6": {}
                        , "7": {}
                        , "8": {}
                        , "9": {}
                };
                for (var _0x8821x22 in _0x8821xed) {
                        var _0x8821x3 = _0x8821xed[_0x8821x22]['canvas'] = document['createElement']('canvas');
                        var _0x8821x4 = _0x8821x3['getContext']('2d');
                        _0x8821xe8(_0x8821x3, _0x8821x4, _0x8821x22, _0x8821xe9);
                        _0x8821xed[_0x8821x22]['canvas'] = _0x8821x3;
                        _0x8821xed[_0x8821x22]['width'] = _0x8821x3['width'];
                        _0x8821xed[_0x8821x22]['height'] = _0x8821x3['height']
                };
                _0x8821xe7[_0x8821xe9] = {
                        canvases: _0x8821xed
                        , size: _0x8821xe9
                        , lineWidth: _0x8821xb2['showTextOutline'] ? Math['max'](~~(_0x8821xe9 / 10), 2) : 0
                        , accessTime: _0x8821x9d
                };
                return _0x8821xe7[_0x8821xe9]
        }

        function _0x8821xee(_0x8821x16, _0x8821x17, _0x8821xef) {
                return (_0x8821x16 - _0x8821xef) <= _0x8821x17 && _0x8821x17 <= (_0x8821x16 + _0x8821xef)
        }

        function _0x8821xf0(_0x8821x22, _0x8821xe9) {
                if (!_0x8821xe6[_0x8821x22]) {
                        return _0x8821xeb(_0x8821x22, _0x8821xe9)
                };
                var _0x8821xf1 = Object['keys'](_0x8821xe6[_0x8821x22]);
                for (var _0x8821xd = 0, _0x8821x10 = _0x8821xf1['length']; _0x8821xd < _0x8821x10; _0x8821xd++) {
                        if (_0x8821xee(_0x8821xe9, _0x8821xf1[_0x8821xd], _0x8821xe9 / 4)) {
                                return _0x8821xe6[_0x8821x22][_0x8821xf1[_0x8821xd]]
                        }
                };
                return _0x8821xeb(_0x8821x22, _0x8821xe9)
        }

        function _0x8821xf2(_0x8821xe9) {
                var _0x8821xf1 = Object['keys'](_0x8821xe7);
                for (var _0x8821xd = 0, _0x8821x10 = _0x8821xf1['length']; _0x8821xd < _0x8821x10; _0x8821xd++) {
                        if (_0x8821xee(_0x8821xe9, _0x8821xf1[_0x8821xd], _0x8821xe9 / 4)) {
                                return _0x8821xe7[_0x8821xf1[_0x8821xd]]
                        }
                };
                return _0x8821xec(_0x8821xe9)
        }

        function _0x8821xf3(_0x8821x4, _0x8821xf4, _0x8821x18, _0x8821x19, _0x8821xe9, _0x8821xf5, _0x8821x22) {
                if ((_0x8821xe9 * _0x8821xb1 < 100) && _0x8821xb2['autoHideText'] == true) {
                        return
                };
                _0x8821x4['save']();
                if (_0x8821xe9 > 500) {
                        return _0x8821xea(_0x8821x4, _0x8821x18, _0x8821x19, _0x8821x22, _0x8821xf5)
                };
                _0x8821x4['imageSmoothingQuality'] = 'high';
                if (_0x8821xf4) {
                        var _0x8821xf6 = _0x8821xf2(_0x8821xe9);
                        _0x8821xf6['accessTime'] = _0x8821x9d;
                        var _0x8821xed = _0x8821xf6['canvases'];
                        var _0x8821xf7 = _0x8821xf5 / _0x8821xf6['size'];
                        var _0x8821xc0 = 0;
                        for (var _0x8821xd = 0; _0x8821xd < _0x8821x22['length']; _0x8821xd++) {
                                _0x8821xc0 += _0x8821xed[_0x8821x22[_0x8821xd]]['width'] - 2 * _0x8821xf6['lineWidth']
                        };
                        _0x8821x4['scale'](_0x8821xf7, _0x8821xf7);
                        _0x8821x18 /= _0x8821xf7;
                        _0x8821x19 /= _0x8821xf7;
                        _0x8821x18 -= _0x8821xc0 / 2;
                        for (var _0x8821xd = 0; _0x8821xd < _0x8821x22['length']; _0x8821xd++) {
                                var _0x8821xf8 = _0x8821xed[_0x8821x22[_0x8821xd]];
                                _0x8821x4['drawImage'](_0x8821xf8['canvas'], _0x8821x18, _0x8821x19 - _0x8821xf8['height'] / 2);
                                _0x8821x18 += _0x8821xf8['width'] - 2 * _0x8821xf6['lineWidth']
                        }
                } else {
                        var _0x8821xf6 = _0x8821xf0(_0x8821x22, _0x8821xe9);
                        _0x8821xf6['accessTime'] = _0x8821x9d;
                        var _0x8821x3 = _0x8821xf6['canvas'];
                        var _0x8821xf7 = _0x8821xf5 / _0x8821xf6['size'];
                        _0x8821x4['scale'](_0x8821xf7, _0x8821xf7);
                        _0x8821x18 /= _0x8821xf7;
                        _0x8821x19 /= _0x8821xf7;
                        _0x8821x4['drawImage'](_0x8821x3, _0x8821x18 - _0x8821x3['width'] / 2, _0x8821x19 - _0x8821x3['height'] / 2)
                };
                _0x8821x4['restore']()
        }
        socket['on']('playerUpdated', function (_0x8821xf9) {
                if ('join' == _0x8821xf9['action'] || 'spectate' == _0x8821xf9['action']) {
                        if (_0x8821x95['byId'][_0x8821x95['mine'][0]] !== undefined) {
                                conn['emit']('playerUpdated', _0x8821x100('update'))
                        }
                };
                if (_0x8821xf9['identifier']) {
                        playerDetailsByIdentifier[_0x8821xf9['identifier']] = _0x8821xf9;
                        playerDetailsByNick[_0x8821xf9['nick']] = _0x8821xf9
                }
        });

        function _0x8821xfa() {
                _0x8821x9e = document['getElementById']('canvas');
                _0x8821x9f = _0x8821x9e['getContext']('2d');
                _0x8821xa5 = document['getElementById']('chat_textbox');
                _0x8821x9e['focus']();
                nodeList[0] = ['me', SNIPERSKY['getName'](), null, null, themeColors['mapCellColor']];
                nodeList[1] = ['top1', '', null, null, 'white'];
                nodeList[0][8] = Date['now']();
                nodeList[1][8] = Date['now']();
                minimap['createMap'](200);
                c = document['createElement']('canvas');
                var _0x8821x6 = c['getContext']('2d');
                _0x8821x6['beginPath']();
                _0x8821x6['lineWidth'] = 10;
                _0x8821x6['moveTo'](0, 0);
                _0x8821x6['lineTo'](100, 0);
                _0x8821x6['lineTo'](50, 50);
                _0x8821x6['closePath']();
                _0x8821x6['strokeStyle'] = 'white';
                _0x8821x6['fillStyle'] = 'white';
                _0x8821x6['stroke']();
                _0x8821x6['fill']();
                if (_0x8821xb2['showMinimap'] === true) {
                        minimap['show']()
                } else {
                        minimap['hide']()
                };
                setserver('54.36.205.10:8803');

                function _0x8821xfb(_0x8821x5a) {
                        _0x8821xb1 *= Math['pow'](window['zoomSpeed'], _0x8821x5a['wheelDelta'] / -120 || _0x8821x5a['detail'] || 0);
                        if (!_0x8821xb2['zoom']) {
                                1 > _0x8821xb1 && (_0x8821xb1 = 1);
                                _0x8821xb1 > 4 / _0x8821xb1 && (_0x8821xb1 = 4 / _0x8821xb1)
                        }
                }
                if (/firefox/i ['test'](navigator['userAgent'])) {
                        document['addEventListener']('DOMMouseScroll', _0x8821xfb, false)
                } else {
                        document['body']['onmousewheel'] = _0x8821xfb
                };
                _0x8821x58['onkeydown'] = function (_0x8821x5a) {
                        switch (_0x8821x5a['keyCode']) {
                        case 13:
                                jQuery('#chat_textbox')['show']();
                                if (_0x8821xa3) {
                                        break
                                };
                                if (!_0x8821xb2['showChat']) {
                                        break
                                };
                                if (_0x8821xa4) {
                                        _0x8821xa5['blur']();
                                        var _0x8821xfc = _0x8821xa5['value'];
                                        if (_0x8821xfc['length'] > 0) {
                                                _0x8821x92(_0x8821xfc)
                                        };
                                        _0x8821xa5['value'] = ''
                                } else {
                                        _0x8821xa5['focus']()
                                };
                                break;
                        case 32:
                                if (_0x8821xa4 || _0x8821xa3 || _0x8821xb3['space']) {
                                        break
                                };
                                _0x8821x7d(_0x8821x75[17]);
                                _0x8821xb3['space'] = true;
                                break;
                        case 87:
                                if (_0x8821xa4 || _0x8821xa3) {
                                        break
                                };
                                _0x8821x7d(_0x8821x75[21]);
                                _0x8821xb3['w'] = true;
                                break;
                        case 81:
                                if (_0x8821xa4 || _0x8821xa3 || _0x8821xb3['q']) {
                                        break
                                };
                                _0x8821x7d(_0x8821x75[18]);
                                _0x8821xb3['q'] = true;
                                break;
                        case 69:
                                if (_0x8821xa4 || _0x8821xa3 || _0x8821xb3['e']) {
                                        break
                                };
                                _0x8821x7d(_0x8821x75[22]);
                                _0x8821xb3['e'] = true;
                                break;
                        case 82:
                                if (_0x8821xa4 || _0x8821xa3 || _0x8821xb3['r']) {
                                        break
                                };
                                _0x8821x7d(_0x8821x75[23]);
                                _0x8821xb3['r'] = true;
                                break;
                        case 84:
                                if (_0x8821xa4 || _0x8821xa3 || _0x8821xb3['t']) {
                                        break
                                };
                                _0x8821x7d(_0x8821x75[24]);
                                _0x8821xb3['t'] = true;
                                break;
                        case 80:
                                if (_0x8821xa4 || _0x8821xa3 || _0x8821xb3['p']) {
                                        break
                                };
                                _0x8821x7d(_0x8821x75[25]);
                                _0x8821xb3['p'] = true;
                                break;
                        case 27:
                                if (_0x8821xb3['esc']) {
                                        break
                                };
                                _0x8821xb3['esc'] = true;
                                if (_0x8821xa3) {
                                        _0x8821xb5()
                                } else {
                                        _0x8821xb6()
                                };
                                break
                        }
                };
                _0x8821x58['onkeyup'] = function (_0x8821x5a) {
                        switch (_0x8821x5a['keyCode']) {
                        case 32:
                                _0x8821xb3['space'] = false;
                                break;
                        case 87:
                                _0x8821xb3['w'] = false;
                                break;
                        case 81:
                                if (_0x8821xb3['q']) {
                                        _0x8821x7d(_0x8821x75[19])
                                };
                                _0x8821xb3['q'] = false;
                                break;
                        case 69:
                                _0x8821xb3['e'] = false;
                                break;
                        case 82:
                                _0x8821xb3['r'] = false;
                                break;
                        case 84:
                                _0x8821xb3['t'] = false;
                                break;
                        case 80:
                                _0x8821xb3['p'] = false;
                                break;
                        case 27:
                                _0x8821xb3['esc'] = false;
                                break
                        }
                };
                _0x8821xa5['onblur'] = function () {
                        _0x8821xa4 = false;
                        jQuery('#chat_textbox')['hide']();
                        _0x8821xbc()
                };
                _0x8821xa5['onfocus'] = function () {
                        _0x8821xa4 = true;
                        _0x8821xbc()
                };
                _0x8821x9e['onmousemove'] = function (_0x8821x5a) {
                        _0x8821xaf = _0x8821x5a['clientX'];
                        _0x8821xb0 = _0x8821x5a['clientY']
                };
                setInterval(function () {
                        _0x8821x8e((_0x8821xaf - _0x8821x9e['width'] / 2) / _0x8821xa9 + _0x8821xa7, (_0x8821xb0 - _0x8821x9e['height'] / 2) / _0x8821xa9 + _0x8821xa8)
                }, 40);
                _0x8821x58['onresize'] = function () {
                        var _0x8821xfd = _0x8821x9e['width'] = _0x8821x58['innerWidth']
                                , _0x8821xfe = _0x8821x9e['height'] = _0x8821x58['innerHeight'];
                        _0x8821xae = Math['sqrt'](Math['min'](_0x8821xfe / 1080, _0x8821xfd / 1920))
                };
                _0x8821x58['onresize']();
                _0x8821x94();
                _0x8821xb6();
                if (_0x8821xb2['allowGETipSet'] && _0x8821x58['location']['search']) {
                        var _0x8821xff = /ip=([\w\W]+):([0-9]+)/ ['exec'](_0x8821x58['location']['search']['slice'](1));
                        if (_0x8821xff) {
                                _0x8821x77(_0x8821xff[1] + ':' + _0x8821xff[2])
                        }
                };
                window['requestAnimationFrame'](_0x8821xd3)
        }

        function _0x8821x100(_0x8821x101) {
                var _0x8821xf9 = null;
                if (_0x8821x95['byId'][_0x8821x95['mine'][0]] !== undefined) {
                        _0x8821xf9 = _0x8821x95['byId'][_0x8821x95['mine'][0]];
                        _0x8821xf9 = _0x8821xf9['name'] + _0x8821xf9['color']
                };
                return {
                        displayName: SNIPERSKY['getName']()
                        , action: _0x8821x101
                        , socketRoom: SNIPERSKY['getRoom']()
                        , identifier: _0x8821xf9
                        , url: SNIPERSKY['getCustomSkinUrl']()
                        , nick: SNIPERSKY['getName']()
                        , team: SNIPERSKY['getTeamName']()
                        , token: ''
                }
        }

        function _0x8821x102() {
                if (!announcementSent) {
                        if (_0x8821x95['byId'][_0x8821x95['mine'][0]] !== undefined) {
                                announcementSent = true;
                                var _0x8821x20 = _0x8821x100('join');
                                playerDetailsByIdentifier[_0x8821x20['identifier']] = _0x8821x20;
                                playerDetailsByNick[_0x8821x20['nick']] = _0x8821x20;
                                conn['emit']('playerEntered', _0x8821x20)
                        } else {
                                setTimeout(_0x8821x102, 100)
                        }
                }
        }
        _0x8821x58['setserver'] = function (_0x8821x103) {
                if (_0x8821x6f === _0x8821x103) {
                        return
                };
                currentIP = _0x8821x103;
                _0x8821x77(_0x8821x103)
        };
        _0x8821x58['respawn'] = function () {
                _0x8821x92('/kill');
                setTimeout(function () {
                        _0x8821x5c('#play-btn')['click']()
                }, 150)
        };
        _0x8821x58['setDarkTheme'] = function (_0x8821x16) {
                _0x8821xb2['darkTheme'] = _0x8821x16;
                _0x8821xc5()
        };
        _0x8821x58['setShowMass'] = function (_0x8821x16) {
                _0x8821xb2['showMass'] = _0x8821x16
        };
        _0x8821x58['setSkins'] = function (_0x8821x16) {
                _0x8821xb2['showSkins'] = _0x8821x16
        };
        _0x8821x58['setColors'] = function (_0x8821x16) {
                _0x8821xb2['showColor'] = !_0x8821x16
        };
        _0x8821x58['setNames'] = function (_0x8821x16) {
                _0x8821xb2['showNames'] = _0x8821x16
        };
        _0x8821x58['setChatHide'] = function (_0x8821x16) {
                _0x8821xb2['showChat'] = !_0x8821x16;
                _0x8821xbc()
        };
        _0x8821x58['setMinimap'] = function (_0x8821x16) {
                _0x8821xb2['showMinimap'] = !_0x8821x16;
                if (_0x8821xb2['showMinimap'] === true) {
                        minimap['show']()
                } else {
                        minimap['hide']()
                }
        };
        _0x8821x58['setCustomSkins'] = function (_0x8821x16) {
                _0x8821xb2['showCustomSkins'] = _0x8821x16
        };
        _0x8821x58['setShowGrid'] = function (_0x8821x16) {
                _0x8821xb2['showGrid'] = _0x8821x16
        };
        _0x8821x58['setAutoZoom'] = function (_0x8821x16) {
                _0x8821xb2['autoZoom'] = _0x8821x16
        };
        _0x8821x58['setZoom'] = function (_0x8821x16) {
                _0x8821xb2['zoom'] = _0x8821x16
        };
        _0x8821x58['setAnimation'] = function (_0x8821x16) {
                _0x8821xb2['animation'] = _0x8821x16
        };
        _0x8821x58['setTextOutline'] = function (_0x8821x16) {
                _0x8821xb2['showTextOutline'] = _0x8821x16
        };
        _0x8821x58['setGridLocations'] = function (_0x8821x16) {
                _0x8821xb2['gridLocations'] = _0x8821x16
        };
        _0x8821x58['setHideMyName'] = function (_0x8821x16) {
                _0x8821xb2['hideMyName'] = _0x8821x16
        };
        _0x8821x58['setEnablePointsColor'] = function (_0x8821x16) {
                _0x8821xb2['pointsColor'] = _0x8821x16
        };
        _0x8821x58['setChatPopUp'] = function (_0x8821x16) {
                _0x8821xb2['chatPopup'] = _0x8821x16
        };
        _0x8821x58['setChatBox'] = function (_0x8821x16) {
                _0x8821xb2['chatBox'] = _0x8821x16
        };
        _0x8821x58['setShowStatus'] = function (_0x8821x16) {
                _0x8821xb2['showStatus'] = _0x8821x16
        };
        _0x8821x58['AutoHideText'] = function (_0x8821x16) {
                _0x8821xb2['autoHideText'] = _0x8821x16
        };
        _0x8821x58['setShowLeaderBoard'] = function (_0x8821x16) {
                _0x8821xb2['showLeaderboard'] = !_0x8821x16
        };
        _0x8821x58['spectate'] = function (_0x8821x16) {
                _0x8821x7d(_0x8821x75[1]);
                _0x8821x99['maxScore'] = 0;
                conn['joinRoom'](SNIPERSKY['getRoom']());
                SNIPERSKY['isSpectating'] = true;
                var _0x8821x104 = _0x8821x100('spectate');
                conn['emit']('playerEntered', _0x8821x104);
                _0x8821xb5()
        };
        _0x8821x58['play'] = function (_0x8821x16) {
                _0x8821x90(_0x8821x16);
                SNIPERSKY['isSpectating'] = false;
                SNIPERSKY['newGameImpl']();
                announcementSent = false;
                _0x8821x102();
                _0x8821xb5()
        };
        _0x8821x58['setZoomLevel'] = function (_0x8821x105) {
                if (_0x8821xb2['zoom'] == true) {
                        _0x8821xb1 = _0x8821x105
                }
        };
        _0x8821x58['getCurrentX'] = function () {
                return _0x8821x95['mine']['length'] !== 0 ? _0x8821xab : ''
        };
        _0x8821x58['getCurrentY'] = function () {
                return _0x8821x95['mine']['length'] !== 0 ? _0x8821xac : ''
        };
        _0x8821x58['getLengthX'] = function () {
                return _0x8821x96['width']
        };
        _0x8821x58['getLengthY'] = function () {
                return _0x8821x96['height']
        };
        _0x8821x58['getTop1X'] = function () {
                return _0x8821xab
        };
        _0x8821x58['getTop1Y'] = function () {
                return _0x8821xac
        };
        _0x8821x58['getCell'] = function () {
                return _0x8821x95['mine']
        };
        _0x8821x58['getCellIds'] = function () {
                return _0x8821x95['byId']
        };
        _0x8821x58['getLB'] = function () {
                return _0x8821x97['items']
        };
        _0x8821x58['getShowLeaderBoard'] = function () {
                return _0x8821xb2['showLeaderboard']
        };
        _0x8821x58['openSkinsList'] = function () {
                if (_0x8821x5c('#inPageModalTitle')['text']() === 'Skins') {
                        return
                };
                _0x8821x5c['get']('include/gallery.php')['then'](function (_0x8821x20) {
                        _0x8821x5c('#inPageModalTitle')['text']('Skins');
                        _0x8821x5c('#inPageModalBody')['html'](_0x8821x20);
                        _0x8821x5c('#inPageModalBody ul .skin')['prop']('onclick', null)['off']('click');
                        _0x8821x5c('#inPageModalBody .modal-footer .btn-default')['prop']('onclick', null)['off']('click')
                })
        };
        (function () {
                var _0x8821x106 = ['ms', 'moz', 'webkit', 'o'];
                var _0x8821x18 = 0;
                for (; _0x8821x18 < _0x8821x106['length'] && !self['requestAnimationFrame']; ++_0x8821x18) {
                        self['requestAnimationFrame'] = self[_0x8821x106[_0x8821x18] + 'RequestAnimationFrame'];
                        self['cancelAnimationFrame'] = self[_0x8821x106[_0x8821x18] + 'CancelAnimationFrame'] || self[_0x8821x106[_0x8821x18] + 'CancelRequestAnimationFrame']
                };
                if (!self['requestAnimationFrame']) {
                        self['requestAnimationFrame'] = function (_0x8821x107) {
                                return setTimeout(_0x8821x107, 1E3 / 60)
                        };
                        self['cancelAnimationFrame'] = function (_0x8821x83) {
                                clearTimeout(_0x8821x83)
                        }
                }
        })();
        _0x8821x58['onload'] = _0x8821xfa
})(window, window['jQuery']), SNIPERSKY['init'](), window['jQuery'](document)['on']('click', '.skin', function (_0x8821x5a) {
        window['jQuery']('#skin')['val']($(this)['find']('.title')['text']());
        window['jQuery']('#skin')['trigger']('change')
});

function getSiInfo() {
        return 'VUVkT2JHSnVVbXhqYWpRNFdWTkNlbVJJYkhOYVZEQnBXbTE0ZGxsWVVUWmlSMVp0WkVSMGQxbFhVbXRoVnpWdVRGaFNkbU5FYjNoUFdFSTBUM2xKWjJGSVNteGFhakJwWVVoU01HTkViM1pNTTA1d1ltMXNlV0ZUTlc1WlV6aHBTVWhTYUdOdFpHeGtSREJwV0RKS2MxbFhOWEpKYWpWUVltNXNORWxGVmpSa1EwSTRaa05DVjAxRE5IbExSVXBzWkVkRmNFbERXbXBpTTBJMVQzbENWR0ZYTlhCamJXczRUREpGSzFCSFJXZGhTRXBzV21vd2FXRklVakJqU0UwMlRIazVNMlF6WTNWbFZ6a3haRWhXYVZwVE5XcGlNakIyV1RKb2FHSnROV3hpUXpsV1VUTktRMDVWV1hsYWJFNUpZMVJvUzFsc1FteFRhbHBKV2pOS1dVMHhSUzlqTTFacFdESk9kbUp0V25CamJURm9aRWRzZG1KcU1IaEphVUl3V1ZoS2JscFlVVGxKYkRscFlrZEdkV0Y1U1N0UVIyeDBXbmxDZW1SSWJITmFWREJwV20xNGRsbFlVVFpqYld4dVlVaFJOMGxwUW5wamJVMDVTVzFvTUdSSVFUWk1lVGw2WVZjMWNHTnRhM1ZhTWtWMllWY3hhRm95Vm5wTU0yeDJaRmhTTVZsdFZYVlpNMVo1U1dsQ2IxcFhiRzVoU0ZFNVNXcFpkMGxwUWpOaFYxSXdZVVF3YVU1cVFXbEpRemdyVUVNNWFGQnFkM1paTWxaMVpFZFdlVkJuUFQwPQ=='
}

function checkServers(_0x8821x10a) {
        window['jQuery']['ajax']({
                url: 'http://3rb.be/status.json'
                , success: function (_0x8821x10b) {
                        if (_0x8821x10a == true) {
                                var _0x8821xd = 1;
                                window['jQuery']['each'](_0x8821x10b, function (_0x8821x42, _0x8821x22) {
                                        window['jQuery']('#opt_ffa' + _0x8821xd)['html'](_0x8821x22['server_name'] + ' [' + _0x8821x22['current_players'] + '/' + _0x8821x22['max_players'] + ']');
                                        _0x8821xd++
                                })
                        }
                }
                , error: function () {
                        setTimeout(function () {
                                checkServers(false)
                        }, 45000)
                }
        })
}
window['jQuery'](document)['ready'](function () {
        window['jQuery']('#skin_url')['change'](function () {
                var _0x8821x10c = window['jQuery']('#skin_url')['val']();
                if (/^.*\.(jpg|jpeg|JPG|png|PNG)$/ ['test'](_0x8821x10c) !== !![]) {
                        alert('Skin must be in .png or .jpg format.');
                        window['jQuery']('#skin_url')['val']('')
                } else {
                        if (/^https?:\/\/i\.imgur\.com\/\w{7}\.(?:jpg|jpeg|JPG|png|PNG)$/ ['test'](_0x8821x10c) !== !('0' * 1)) {
                                alert('Skin must be hosted on imgur.com');
                                window['jQuery']('#skin_url')['val']('')
                        }
                }
        });
        window['jQuery']('#footer')['append'](window['atob'](window['atob'](window['atob'](getSiInfo()))));
        checkServers(true);
        setInterval(function () {
                checkServers(true)
        }, 300000)
})
