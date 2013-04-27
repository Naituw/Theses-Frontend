/*
 * file upload
 * https://github.com/maccman/jquery.upload.js
 */ 

(function($){

var uploadDefaults = {
  progress: $.noop,
  load:     $.noop,
  method:   "POST"
};

$.upload = function(file, options){
  options = $.extend( {}, uploadDefaults, options);
  
  $.ajax({
    url: options.url,
    type: options.method,
    success: options.success,
    error: options.error,
    complete: options.complete,
    headers: options.headers,
    processData: false,
    contentType: "multipart/form-data",
    
    beforeSend: function(xhr){
      var upload = xhr.upload;
      upload.addEventListener("progress", options.progress, false);
      upload.addEventListener("load", options.load, false);
      
      xhr.setRequestHeader("Cache-Control", "no-cache");
      xhr.setRequestHeader("X-File-Name", file.fileName);
      xhr.setRequestHeader("X-File-Size", file.fileSize);
    },
    
    data: file
  });
};

})(jQuery);


(function($, window, undefined) {
    var oldXHR = $.ajaxSettings.xhr;
    $.ajaxSettings.xhr = function() {
        var xhr = oldXHR();
        if(xhr instanceof window.XMLHttpRequest) {
            xhr.addEventListener('progress', this.progress, false);
        }
        
        if(xhr.upload) {
            xhr.upload.addEventListener('progress', this.progress, false);
        }
        
        return xhr;
    };
})(jQuery, window);

/*
 * base64
 */ 

 "use strict";jQuery.base64=(function($){var _PADCHAR="=",_ALPHA="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",_VERSION="1.0";function _getbyte64(s,i){var idx=_ALPHA.indexOf(s.charAt(i));if(idx===-1){throw"Cannot decode base64"}return idx}function _decode(s){var pads=0,i,b10,imax=s.length,x=[];s=String(s);if(imax===0){return s}if(imax%4!==0){throw"Cannot decode base64"}if(s.charAt(imax-1)===_PADCHAR){pads=1;if(s.charAt(imax-2)===_PADCHAR){pads=2}imax-=4}for(i=0;i<imax;i+=4){b10=(_getbyte64(s,i)<<18)|(_getbyte64(s,i+1)<<12)|(_getbyte64(s,i+2)<<6)|_getbyte64(s,i+3);x.push(String.fromCharCode(b10>>16,(b10>>8)&255,b10&255))}switch(pads){case 1:b10=(_getbyte64(s,i)<<18)|(_getbyte64(s,i+1)<<12)|(_getbyte64(s,i+2)<<6);x.push(String.fromCharCode(b10>>16,(b10>>8)&255));break;case 2:b10=(_getbyte64(s,i)<<18)|(_getbyte64(s,i+1)<<12);x.push(String.fromCharCode(b10>>16));break}return x.join("")}function _getbyte(s,i){var x=s.charCodeAt(i);if(x>255){throw"INVALID_CHARACTER_ERR: DOM Exception 5"}return x}function _encode(s){if(arguments.length!==1){throw"SyntaxError: exactly one argument required"}s=String(s);var i,b10,x=[],imax=s.length-s.length%3;if(s.length===0){return s}for(i=0;i<imax;i+=3){b10=(_getbyte(s,i)<<16)|(_getbyte(s,i+1)<<8)|_getbyte(s,i+2);x.push(_ALPHA.charAt(b10>>18));x.push(_ALPHA.charAt((b10>>12)&63));x.push(_ALPHA.charAt((b10>>6)&63));x.push(_ALPHA.charAt(b10&63))}switch(s.length-imax){case 1:b10=_getbyte(s,i)<<16;x.push(_ALPHA.charAt(b10>>18)+_ALPHA.charAt((b10>>12)&63)+_PADCHAR+_PADCHAR);break;case 2:b10=(_getbyte(s,i)<<16)|(_getbyte(s,i+1)<<8);x.push(_ALPHA.charAt(b10>>18)+_ALPHA.charAt((b10>>12)&63)+_ALPHA.charAt((b10>>6)&63)+_PADCHAR);break}return x.join("")}return{decode:_decode,encode:_encode,VERSION:_VERSION}}(jQuery));


/* =========================================================
 * bootstrap-datepicker.js
 * http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Copyright 2012 Stefan Petre
 * Improvements by Andrew Rowls
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */

!function( $ ) {

  function UTCDate(){
    return new Date(Date.UTC.apply(Date, arguments));
  }
  function UTCToday(){
    var today = new Date();
    return UTCDate(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());
  }

  // Picker object

  var Datepicker = function(element, options) {
    var that = this;

    this.element = $(element);
    this.language = options.language||this.element.data('date-language')||"en";
    this.language = this.language in dates ? this.language : "en";
    this.isRTL = dates[this.language].rtl||false;
    this.format = DPGlobal.parseFormat(options.format||this.element.data('date-format')||'mm/dd/yyyy');
                this.isInline = false;
    this.isInput = this.element.is('input');
    this.component = this.element.is('.date') ? this.element.find('.add-on') : false;
    this.hasInput = this.component && this.element.find('input').length;
    if(this.component && this.component.length === 0)
      this.component = false;

    this._attachEvents();

    this.forceParse = true;
    if ('forceParse' in options) {
      this.forceParse = options.forceParse;
    } else if ('dateForceParse' in this.element.data()) {
      this.forceParse = this.element.data('date-force-parse');
    }


        this.picker = $(DPGlobal.template)
                            .appendTo(this.isInline ? this.element : 'body')
                            .on({
                                click: $.proxy(this.click, this),
                                mousedown: $.proxy(this.mousedown, this)
                            });

        if(this.isInline) {
            this.picker.addClass('datepicker-inline');
        } else {
            this.picker.addClass('datepicker-dropdown dropdown-menu');
        }
    if (this.isRTL){
      this.picker.addClass('datepicker-rtl');
      this.picker.find('.prev i, .next i')
            .toggleClass('icon-arrow-left icon-arrow-right');
    }
    $(document).on('mousedown', function (e) {
      // Clicked outside the datepicker, hide it
      if ($(e.target).closest('.datepicker').length === 0) {
        that.hide();
      }
    });

    this.autoclose = false;
    if ('autoclose' in options) {
      this.autoclose = options.autoclose;
    } else if ('dateAutoclose' in this.element.data()) {
      this.autoclose = this.element.data('date-autoclose');
    }

    this.keyboardNavigation = true;
    if ('keyboardNavigation' in options) {
      this.keyboardNavigation = options.keyboardNavigation;
    } else if ('dateKeyboardNavigation' in this.element.data()) {
      this.keyboardNavigation = this.element.data('date-keyboard-navigation');
    }

    this.viewMode = this.startViewMode = 0;
    switch(options.startView || this.element.data('date-start-view')){
      case 2:
      case 'decade':
        this.viewMode = this.startViewMode = 2;
        break;
      case 1:
      case 'year':
        this.viewMode = this.startViewMode = 1;
        break;
    }

    this.todayBtn = (options.todayBtn||this.element.data('date-today-btn')||false);
    this.todayHighlight = (options.todayHighlight||this.element.data('date-today-highlight')||false);

    this.weekStart = ((options.weekStart||this.element.data('date-weekstart')||dates[this.language].weekStart||0) % 7);
    this.weekEnd = ((this.weekStart + 6) % 7);
    this.startDate = -Infinity;
    this.endDate = Infinity;
    this.daysOfWeekDisabled = [];
    this.setStartDate(options.startDate||this.element.data('date-startdate'));
    this.setEndDate(options.endDate||this.element.data('date-enddate'));
    this.setDaysOfWeekDisabled(options.daysOfWeekDisabled||this.element.data('date-days-of-week-disabled'));
    this.fillDow();
    this.fillMonths();
    this.update();
    this.showMode();

        if(this.isInline) {
            this.show();
        }
  };

  Datepicker.prototype = {
    constructor: Datepicker,

    _events: [],
    _attachEvents: function(){
      this._detachEvents();
      if (this.isInput) { // single input
        this._events = [
          [this.element, {
            focus: $.proxy(this.show, this),
            keyup: $.proxy(this.update, this),
            keydown: $.proxy(this.keydown, this)
          }]
        ];
      }
      else if (this.component && this.hasInput){ // component: input + button
        this._events = [
          // For components that are not readonly, allow keyboard nav
          [this.element.find('input'), {
            focus: $.proxy(this.show, this),
            keyup: $.proxy(this.update, this),
            keydown: $.proxy(this.keydown, this)
          }],
          [this.component, {
            click: $.proxy(this.show, this)
          }]
        ];
      }
                        else if (this.element.is('div')) {  // inline datepicker
                            this.isInline = true;
                        }
      else {
        this._events = [
          [this.element, {
            click: $.proxy(this.show, this)
          }]
        ];
      }
      for (var i=0, el, ev; i<this._events.length; i++){
        el = this._events[i][0];
        ev = this._events[i][1];
        el.on(ev);
      }
    },
    _detachEvents: function(){
      for (var i=0, el, ev; i<this._events.length; i++){
        el = this._events[i][0];
        ev = this._events[i][1];
        el.off(ev);
      }
      this._events = [];
    },

    show: function(e) {
      this.picker.show();
      this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
      this.update();
      this.place();
      $(window).on('resize', $.proxy(this.place, this));
      if (e ) {
        e.stopPropagation();
        e.preventDefault();
      }
      this.element.trigger({
        type: 'show',
        date: this.date
      });
    },

    hide: function(e){
            if(this.isInline) return;
      this.picker.hide();
      $(window).off('resize', this.place);
      this.viewMode = this.startViewMode;
      this.showMode();
      if (!this.isInput) {
        $(document).off('mousedown', this.hide);
      }

      if (
        this.forceParse &&
        (
          this.isInput && this.element.val() ||
          this.hasInput && this.element.find('input').val()
        )
      )
        this.setValue();
      this.element.trigger({
        type: 'hide',
        date: this.date
      });
    },

    remove: function() {
      this._detachEvents();
      this.picker.remove();
      delete this.element.data().datepicker;
    },

    getDate: function() {
      var d = this.getUTCDate();
      return new Date(d.getTime() + (d.getTimezoneOffset()*60000));
    },

    getUTCDate: function() {
      return this.date;
    },

    setDate: function(d) {
      this.setUTCDate(new Date(d.getTime() - (d.getTimezoneOffset()*60000)));
    },

    setUTCDate: function(d) {
      this.date = d;
      this.setValue();
    },

    setValue: function() {
      var formatted = this.getFormattedDate();
      if (!this.isInput) {
        if (this.component){
          this.element.find('input').prop('value', formatted);
        }
        this.element.data('date', formatted);
      } else {
        this.element.prop('value', formatted);
      }
    },

        getFormattedDate: function(format) {
            if(format == undefined) format = this.format;
            return DPGlobal.formatDate(this.date, format, this.language);
        },

    setStartDate: function(startDate){
      this.startDate = startDate||-Infinity;
      if (this.startDate !== -Infinity) {
        this.startDate = DPGlobal.parseDate(this.startDate, this.format, this.language);
      }
      this.update();
      this.updateNavArrows();
    },

    setEndDate: function(endDate){
      this.endDate = endDate||Infinity;
      if (this.endDate !== Infinity) {
        this.endDate = DPGlobal.parseDate(this.endDate, this.format, this.language);
      }
      this.update();
      this.updateNavArrows();
    },

    setDaysOfWeekDisabled: function(daysOfWeekDisabled){
      this.daysOfWeekDisabled = daysOfWeekDisabled||[];
      if (!$.isArray(this.daysOfWeekDisabled)) {
        this.daysOfWeekDisabled = this.daysOfWeekDisabled.split(/,\s*/);
      }
      this.daysOfWeekDisabled = $.map(this.daysOfWeekDisabled, function (d) {
        return parseInt(d, 10);
      });
      this.update();
      this.updateNavArrows();
    },

    place: function(){
                        if(this.isInline) return;
      var zIndex = parseInt(this.element.parents().filter(function() {
              return $(this).css('z-index') != 'auto';
            }).first().css('z-index'))+10;
      var offset = this.component ? this.component.offset() : this.element.offset();
      this.picker.css({
        top: offset.top + this.height,
        left: offset.left,
        zIndex: zIndex
      });
    },

    update: function(){
            var date, fromArgs = false;
            if(arguments && arguments.length && (typeof arguments[0] === 'string' || arguments[0] instanceof Date)) {
                date = arguments[0];
                fromArgs = true;
            } else {
                date = this.isInput ? this.element.prop('value') : this.element.data('date') || this.element.find('input').prop('value');
            }

      this.date = DPGlobal.parseDate(date, this.format, this.language);

            if(fromArgs) this.setValue();

      var oldViewDate = this.viewDate;
      if (this.date < this.startDate) {
        this.viewDate = new Date(this.startDate);
      } else if (this.date > this.endDate) {
        this.viewDate = new Date(this.endDate);
      } else {
        this.viewDate = new Date(this.date);
      }

      if (oldViewDate && oldViewDate.getTime() != this.viewDate.getTime()){
        this.element.trigger({
          type: 'changeDate',
          date: this.viewDate
        });
      }
      this.fill();
    },

    fillDow: function(){
      var dowCnt = this.weekStart,
      html = '<tr>';
      while (dowCnt < this.weekStart + 7) {
        html += '<th class="dow">'+dates[this.language].daysMin[(dowCnt++)%7]+'</th>';
      }
      html += '</tr>';
      this.picker.find('.datepicker-days thead').append(html);
    },

    fillMonths: function(){
      var html = '',
      i = 0;
      while (i < 12) {
        html += '<span class="month">'+dates[this.language].monthsShort[i++]+'</span>';
      }
      this.picker.find('.datepicker-months td').html(html);
    },

    fill: function() {
      var d = new Date(this.viewDate),
        year = d.getUTCFullYear(),
        month = d.getUTCMonth(),
        startYear = this.startDate !== -Infinity ? this.startDate.getUTCFullYear() : -Infinity,
        startMonth = this.startDate !== -Infinity ? this.startDate.getUTCMonth() : -Infinity,
        endYear = this.endDate !== Infinity ? this.endDate.getUTCFullYear() : Infinity,
        endMonth = this.endDate !== Infinity ? this.endDate.getUTCMonth() : Infinity,
        currentDate = this.date.valueOf(),
        today = new Date();
      this.picker.find('.datepicker-days thead th:eq(1)')
            .text(dates[this.language].months[month]+' '+year);
      this.picker.find('tfoot th.today')
            .text(dates[this.language].today)
            .toggle(this.todayBtn !== false);
      this.updateNavArrows();
      this.fillMonths();
      var prevMonth = UTCDate(year, month-1, 28,0,0,0,0),
        day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
      prevMonth.setUTCDate(day);
      prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.weekStart + 7)%7);
      var nextMonth = new Date(prevMonth);
      nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
      nextMonth = nextMonth.valueOf();
      var html = [];
      var clsName;
      while(prevMonth.valueOf() < nextMonth) {
        if (prevMonth.getUTCDay() == this.weekStart) {
          html.push('<tr>');
        }
        clsName = '';
        if (prevMonth.getUTCFullYear() < year || (prevMonth.getUTCFullYear() == year && prevMonth.getUTCMonth() < month)) {
          clsName += ' old';
        } else if (prevMonth.getUTCFullYear() > year || (prevMonth.getUTCFullYear() == year && prevMonth.getUTCMonth() > month)) {
          clsName += ' new';
        }
        // Compare internal UTC date with local today, not UTC today
        if (this.todayHighlight &&
          prevMonth.getUTCFullYear() == today.getFullYear() &&
          prevMonth.getUTCMonth() == today.getMonth() &&
          prevMonth.getUTCDate() == today.getDate()) {
          clsName += ' today';
        }
        if (prevMonth.valueOf() == currentDate) {
          clsName += ' active';
        }
        if (prevMonth.valueOf() < this.startDate || prevMonth.valueOf() > this.endDate ||
          $.inArray(prevMonth.getUTCDay(), this.daysOfWeekDisabled) !== -1) {
          clsName += ' disabled';
        }
        html.push('<td class="day'+clsName+'">'+prevMonth.getUTCDate() + '</td>');
        if (prevMonth.getUTCDay() == this.weekEnd) {
          html.push('</tr>');
        }
        prevMonth.setUTCDate(prevMonth.getUTCDate()+1);
      }
      this.picker.find('.datepicker-days tbody').empty().append(html.join(''));
      var currentYear = this.date.getUTCFullYear();

      var months = this.picker.find('.datepicker-months')
            .find('th:eq(1)')
              .text(year)
              .end()
            .find('span').removeClass('active');
      if (currentYear == year) {
        months.eq(this.date.getUTCMonth()).addClass('active');
      }
      if (year < startYear || year > endYear) {
        months.addClass('disabled');
      }
      if (year == startYear) {
        months.slice(0, startMonth).addClass('disabled');
      }
      if (year == endYear) {
        months.slice(endMonth+1).addClass('disabled');
      }

      html = '';
      year = parseInt(year/10, 10) * 10;
      var yearCont = this.picker.find('.datepicker-years')
                .find('th:eq(1)')
                  .text(year + '-' + (year + 9))
                  .end()
                .find('td');
      year -= 1;
      for (var i = -1; i < 11; i++) {
        html += '<span class="year'+(i == -1 || i == 10 ? ' old' : '')+(currentYear == year ? ' active' : '')+(year < startYear || year > endYear ? ' disabled' : '')+'">'+year+'</span>';
        year += 1;
      }
      yearCont.html(html);
    },

    updateNavArrows: function() {
      var d = new Date(this.viewDate),
        year = d.getUTCFullYear(),
        month = d.getUTCMonth();
      switch (this.viewMode) {
        case 0:
          if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear() && month <= this.startDate.getUTCMonth()) {
            this.picker.find('.prev').css({visibility: 'hidden'});
          } else {
            this.picker.find('.prev').css({visibility: 'visible'});
          }
          if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear() && month >= this.endDate.getUTCMonth()) {
            this.picker.find('.next').css({visibility: 'hidden'});
          } else {
            this.picker.find('.next').css({visibility: 'visible'});
          }
          break;
        case 1:
        case 2:
          if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear()) {
            this.picker.find('.prev').css({visibility: 'hidden'});
          } else {
            this.picker.find('.prev').css({visibility: 'visible'});
          }
          if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear()) {
            this.picker.find('.next').css({visibility: 'hidden'});
          } else {
            this.picker.find('.next').css({visibility: 'visible'});
          }
          break;
      }
    },

    click: function(e) {
      e.stopPropagation();
      e.preventDefault();
      var target = $(e.target).closest('span, td, th');
      if (target.length == 1) {
        switch(target[0].nodeName.toLowerCase()) {
          case 'th':
            switch(target[0].className) {
              case 'switch':
                this.showMode(1);
                break;
              case 'prev':
              case 'next':
                var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className == 'prev' ? -1 : 1);
                switch(this.viewMode){
                  case 0:
                    this.viewDate = this.moveMonth(this.viewDate, dir);
                    break;
                  case 1:
                  case 2:
                    this.viewDate = this.moveYear(this.viewDate, dir);
                    break;
                }
                this.fill();
                break;
              case 'today':
                var date = new Date();
                date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);

                this.showMode(-2);
                var which = this.todayBtn == 'linked' ? null : 'view';
                this._setDate(date, which);
                break;
            }
            break;
          case 'span':
            if (!target.is('.disabled')) {
              this.viewDate.setUTCDate(1);
              if (target.is('.month')) {
                var month = target.parent().find('span').index(target);
                this.viewDate.setUTCMonth(month);
                this.element.trigger({
                  type: 'changeMonth',
                  date: this.viewDate
                });
              } else {
                var year = parseInt(target.text(), 10)||0;
                this.viewDate.setUTCFullYear(year);
                this.element.trigger({
                  type: 'changeYear',
                  date: this.viewDate
                });
              }
              this.showMode(-1);
              this.fill();
            }
            break;
          case 'td':
            if (target.is('.day') && !target.is('.disabled')){
              var day = parseInt(target.text(), 10)||1;
              var year = this.viewDate.getUTCFullYear(),
                month = this.viewDate.getUTCMonth();
              if (target.is('.old')) {
                if (month === 0) {
                  month = 11;
                  year -= 1;
                } else {
                  month -= 1;
                }
              } else if (target.is('.new')) {
                if (month == 11) {
                  month = 0;
                  year += 1;
                } else {
                  month += 1;
                }
              }
              this._setDate(UTCDate(year, month, day,0,0,0,0));
            }
            break;
        }
      }
    },

    _setDate: function(date, which){
      if (!which || which == 'date')
        this.date = date;
      if (!which || which  == 'view')
        this.viewDate = date;
      this.fill();
      this.setValue();
      this.element.trigger({
        type: 'changeDate',
        date: this.date
      });
      var element;
      if (this.isInput) {
        element = this.element;
      } else if (this.component){
        element = this.element.find('input');
      }
      if (element) {
        element.change();
        if (this.autoclose && (!which || which == 'date')) {
          this.hide();
        }
      }
    },

    moveMonth: function(date, dir){
      if (!dir) return date;
      var new_date = new Date(date.valueOf()),
        day = new_date.getUTCDate(),
        month = new_date.getUTCMonth(),
        mag = Math.abs(dir),
        new_month, test;
      dir = dir > 0 ? 1 : -1;
      if (mag == 1){
        test = dir == -1
          // If going back one month, make sure month is not current month
          // (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
          ? function(){ return new_date.getUTCMonth() == month; }
          // If going forward one month, make sure month is as expected
          // (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
          : function(){ return new_date.getUTCMonth() != new_month; };
        new_month = month + dir;
        new_date.setUTCMonth(new_month);
        // Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
        if (new_month < 0 || new_month > 11)
          new_month = (new_month + 12) % 12;
      } else {
        // For magnitudes >1, move one month at a time...
        for (var i=0; i<mag; i++)
          // ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
          new_date = this.moveMonth(new_date, dir);
        // ...then reset the day, keeping it in the new month
        new_month = new_date.getUTCMonth();
        new_date.setUTCDate(day);
        test = function(){ return new_month != new_date.getUTCMonth(); };
      }
      // Common date-resetting loop -- if date is beyond end of month, make it
      // end of month
      while (test()){
        new_date.setUTCDate(--day);
        new_date.setUTCMonth(new_month);
      }
      return new_date;
    },

    moveYear: function(date, dir){
      return this.moveMonth(date, dir*12);
    },

    dateWithinRange: function(date){
      return date >= this.startDate && date <= this.endDate;
    },

    keydown: function(e){
      if (this.picker.is(':not(:visible)')){
        if (e.keyCode == 27) // allow escape to hide and re-show picker
          this.show();
        return;
      }
      var dateChanged = false,
        dir, day, month,
        newDate, newViewDate;
      switch(e.keyCode){
        case 27: // escape
          this.hide();
          e.preventDefault();
          break;
        case 37: // left
        case 39: // right
          if (!this.keyboardNavigation) break;
          dir = e.keyCode == 37 ? -1 : 1;
          if (e.ctrlKey){
            newDate = this.moveYear(this.date, dir);
            newViewDate = this.moveYear(this.viewDate, dir);
          } else if (e.shiftKey){
            newDate = this.moveMonth(this.date, dir);
            newViewDate = this.moveMonth(this.viewDate, dir);
          } else {
            newDate = new Date(this.date);
            newDate.setUTCDate(this.date.getUTCDate() + dir);
            newViewDate = new Date(this.viewDate);
            newViewDate.setUTCDate(this.viewDate.getUTCDate() + dir);
          }
          if (this.dateWithinRange(newDate)){
            this.date = newDate;
            this.viewDate = newViewDate;
            this.setValue();
            this.update();
            e.preventDefault();
            dateChanged = true;
          }
          break;
        case 38: // up
        case 40: // down
          if (!this.keyboardNavigation) break;
          dir = e.keyCode == 38 ? -1 : 1;
          if (e.ctrlKey){
            newDate = this.moveYear(this.date, dir);
            newViewDate = this.moveYear(this.viewDate, dir);
          } else if (e.shiftKey){
            newDate = this.moveMonth(this.date, dir);
            newViewDate = this.moveMonth(this.viewDate, dir);
          } else {
            newDate = new Date(this.date);
            newDate.setUTCDate(this.date.getUTCDate() + dir * 7);
            newViewDate = new Date(this.viewDate);
            newViewDate.setUTCDate(this.viewDate.getUTCDate() + dir * 7);
          }
          if (this.dateWithinRange(newDate)){
            this.date = newDate;
            this.viewDate = newViewDate;
            this.setValue();
            this.update();
            e.preventDefault();
            dateChanged = true;
          }
          break;
        case 13: // enter
          this.hide();
          e.preventDefault();
          break;
        case 9: // tab
          this.hide();
          break;
      }
      if (dateChanged){
        this.element.trigger({
          type: 'changeDate',
          date: this.date
        });
        var element;
        if (this.isInput) {
          element = this.element;
        } else if (this.component){
          element = this.element.find('input');
        }
        if (element) {
          element.change();
        }
      }
    },

    showMode: function(dir) {
      if (dir) {
        this.viewMode = Math.max(0, Math.min(2, this.viewMode + dir));
      }
            /*
              vitalets: fixing bug of very special conditions:
              jquery 1.7.1 + webkit + show inline datepicker in bootstrap popover.
              Method show() does not set display css correctly and datepicker is not shown.
              Changed to .css('display', 'block') solve the problem.
              See https://github.com/vitalets/x-editable/issues/37

              In jquery 1.7.2+ everything works fine.
            */
            //this.picker.find('>div').hide().filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName).show();
      this.picker.find('>div').hide().filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName).css('display', 'block');
      this.updateNavArrows();
    }
  };

  $.fn.datepicker = function ( option ) {
    var args = Array.apply(null, arguments);
    args.shift();
    return this.each(function () {
      var $this = $(this),
        data = $this.data('datepicker'),
        options = typeof option == 'object' && option;
      if (!data) {
        $this.data('datepicker', (data = new Datepicker(this, $.extend({}, $.fn.datepicker.defaults,options))));
      }
      if (typeof option == 'string' && typeof data[option] == 'function') {
        data[option].apply(data, args);
      }
    });
  };

  $.fn.datepicker.defaults = {
  };
  $.fn.datepicker.Constructor = Datepicker;
  var dates = $.fn.datepicker.dates = {
    en: {
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      today: "Today"
    }
  };

  var DPGlobal = {
    modes: [
      {
        clsName: 'days',
        navFnc: 'Month',
        navStep: 1
      },
      {
        clsName: 'months',
        navFnc: 'FullYear',
        navStep: 1
      },
      {
        clsName: 'years',
        navFnc: 'FullYear',
        navStep: 10
    }],
    isLeapYear: function (year) {
      return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
    },
    getDaysInMonth: function (year, month) {
      return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
    },
    validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
    nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
    parseFormat: function(format){
      // IE treats \0 as a string end in inputs (truncating the value),
      // so it's a bad format delimiter, anyway
      var separators = format.replace(this.validParts, '\0').split('\0'),
        parts = format.match(this.validParts);
      if (!separators || !separators.length || !parts || parts.length == 0){
        throw new Error("Invalid date format.");
      }
      return {separators: separators, parts: parts};
    },
    parseDate: function(date, format, language) {
      if (date instanceof Date) return date;
      if (/^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(date)) {
        var part_re = /([-+]\d+)([dmwy])/,
          parts = date.match(/([-+]\d+)([dmwy])/g),
          part, dir;
        date = new Date();
        for (var i=0; i<parts.length; i++) {
          part = part_re.exec(parts[i]);
          dir = parseInt(part[1]);
          switch(part[2]){
            case 'd':
              date.setUTCDate(date.getUTCDate() + dir);
              break;
            case 'm':
              date = Datepicker.prototype.moveMonth.call(Datepicker.prototype, date, dir);
              break;
            case 'w':
              date.setUTCDate(date.getUTCDate() + dir * 7);
              break;
            case 'y':
              date = Datepicker.prototype.moveYear.call(Datepicker.prototype, date, dir);
              break;
          }
        }
        return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0);
      }
      var parts = date && date.match(this.nonpunctuation) || [],
        date = new Date(),
        parsed = {},
        setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
        setters_map = {
          yyyy: function(d,v){ return d.setUTCFullYear(v); },
          yy: function(d,v){ return d.setUTCFullYear(2000+v); },
          m: function(d,v){
            v -= 1;
            while (v<0) v += 12;
            v %= 12;
            d.setUTCMonth(v);
            while (d.getUTCMonth() != v)
              d.setUTCDate(d.getUTCDate()-1);
            return d;
          },
          d: function(d,v){ return d.setUTCDate(v); }
        },
        val, filtered, part;
      setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
      setters_map['dd'] = setters_map['d'];
      date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
      var fparts = format.parts.slice();
      // Remove noop parts
      if (parts.length != fparts.length) {
        fparts = $(fparts).filter(function(i,p){
          return $.inArray(p, setters_order) !== -1;
        }).toArray();
      }
      // Process remainder
      if (parts.length == fparts.length) {
        for (var i=0, cnt = fparts.length; i < cnt; i++) {
          val = parseInt(parts[i], 10);
          part = fparts[i];
          if (isNaN(val)) {
            switch(part) {
              case 'MM':
                filtered = $(dates[language].months).filter(function(){
                  var m = this.slice(0, parts[i].length),
                    p = parts[i].slice(0, m.length);
                  return m == p;
                });
                val = $.inArray(filtered[0], dates[language].months) + 1;
                break;
              case 'M':
                filtered = $(dates[language].monthsShort).filter(function(){
                  var m = this.slice(0, parts[i].length),
                    p = parts[i].slice(0, m.length);
                  return m == p;
                });
                val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
                break;
            }
          }
          parsed[part] = val;
        }
        for (var i=0, s; i<setters_order.length; i++){
          s = setters_order[i];
          if (s in parsed && !isNaN(parsed[s]))
            setters_map[s](date, parsed[s])
        }
      }
      return date;
    },
    formatDate: function(date, format, language){
      var val = {
        d: date.getUTCDate(),
        D: dates[language].daysShort[date.getUTCDay()],
        DD: dates[language].days[date.getUTCDay()],
        m: date.getUTCMonth() + 1,
        M: dates[language].monthsShort[date.getUTCMonth()],
        MM: dates[language].months[date.getUTCMonth()],
        yy: date.getUTCFullYear().toString().substring(2),
        yyyy: date.getUTCFullYear()
      };
      val.dd = (val.d < 10 ? '0' : '') + val.d;
      val.mm = (val.m < 10 ? '0' : '') + val.m;
      var date = [],
        seps = $.extend([], format.separators);
      for (var i=0, cnt = format.parts.length; i < cnt; i++) {
        if (seps.length)
          date.push(seps.shift())
        date.push(val[format.parts[i]]);
      }
      return date.join('');
    },
    headTemplate: '<thead>'+
              '<tr>'+
                '<th class="prev"><i class="icon-arrow-left"/></th>'+
                '<th colspan="5" class="switch"></th>'+
                '<th class="next"><i class="icon-arrow-right"/></th>'+
              '</tr>'+
            '</thead>',
    contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
    footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr></tfoot>'
  };
  DPGlobal.template = '<div class="datepicker">'+
              '<div class="datepicker-days">'+
                '<table class=" table-condensed">'+
                  DPGlobal.headTemplate+
                  '<tbody></tbody>'+
                  DPGlobal.footTemplate+
                '</table>'+
              '</div>'+
              '<div class="datepicker-months">'+
                '<table class="table-condensed">'+
                  DPGlobal.headTemplate+
                  DPGlobal.contTemplate+
                  DPGlobal.footTemplate+
                '</table>'+
              '</div>'+
              '<div class="datepicker-years">'+
                '<table class="table-condensed">'+
                  DPGlobal.headTemplate+
                  DPGlobal.contTemplate+
                  DPGlobal.footTemplate+
                '</table>'+
              '</div>'+
            '</div>';

    $.fn.datepicker.DPGlobal = DPGlobal;

}( window.jQuery );


;(function($){
  $.fn.datepicker.dates['zh-CN'] = {
        days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
      daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      daysMin:  ["日", "一", "二", "三", "四", "五", "六", "日"],
      months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
      monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
      today: "今日"
  };
}(jQuery));



Date.prototype.format = function(format) //author: meizz 
{ 
  var o = { 
    "M+" : this.getMonth()+1, //month 
    "d+" : this.getDate(),    //day 
    "h+" : this.getHours(),   //hour 
    "m+" : this.getMinutes(), //minute 
    "s+" : this.getSeconds(), //second 
    "q+" : Math.floor((this.getMonth()+3)/3),  //quarter 
    "S" : this.getMilliseconds() //millisecond 
  } 
  if(/(y+)/.test(format)) format=format.replace(RegExp.$1, 
    (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
  for(var k in o)if(new RegExp("("+ k +")").test(format)) 
    format = format.replace(RegExp.$1, 
      RegExp.$1.length==1 ? o[k] : 
        ("00"+ o[k]).substr((""+ o[k]).length)); 
  return format; 
}

if(!String.prototype.trim) {  
  String.prototype.trim = function () {  
    return this.replace(/^\s+|\s+$/g,'');  
  };  
}


(function() {/*
 A JavaScript implementation of the SHA family of hashes, as defined in FIPS
 PUB 180-2 as well as the corresponding HMAC implementation as defined in
 FIPS PUB 198a

 Copyright Brian Turek 2008-2012
 Distributed under the BSD License
 See http://caligatio.github.com/jsSHA/ for more information

 Several functions taken from Paul Johnson
*/
function n(a){throw a;}var r=null;function t(a,b){var c=[],f=(1<<b)-1,d=a.length*b,e;for(e=0;e<d;e+=b)c[e>>>5]|=(a.charCodeAt(e/b)&f)<<32-b-e%32;return{value:c,binLen:d}}function w(a){var b=[],c=a.length,f,d;0!==c%2&&n("String of HEX type must be in byte increments");for(f=0;f<c;f+=2)d=parseInt(a.substr(f,2),16),isNaN(d)&&n("String of HEX type contains invalid characters"),b[f>>>3]|=d<<24-4*(f%8);return{value:b,binLen:4*c}}
function A(a){var b=[],c=0,f,d,e,k,l;-1===a.search(/^[a-zA-Z0-9=+\/]+$/)&&n("Invalid character in base-64 string");f=a.indexOf("=");a=a.replace(/\=/g,"");-1!==f&&f<a.length&&n("Invalid '=' found in base-64 string");for(d=0;d<a.length;d+=4){l=a.substr(d,4);for(e=k=0;e<l.length;e+=1)f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(l[e]),k|=f<<18-6*e;for(e=0;e<l.length-1;e+=1)b[c>>2]|=(k>>>16-8*e&255)<<24-8*(c%4),c+=1}return{value:b,binLen:8*c}}
function D(a,b){var c="",f=4*a.length,d,e;for(d=0;d<f;d+=1)e=a[d>>>2]>>>8*(3-d%4),c+="0123456789abcdef".charAt(e>>>4&15)+"0123456789abcdef".charAt(e&15);return b.outputUpper?c.toUpperCase():c}
function E(a,b){var c="",f=4*a.length,d,e,k;for(d=0;d<f;d+=3){k=(a[d>>>2]>>>8*(3-d%4)&255)<<16|(a[d+1>>>2]>>>8*(3-(d+1)%4)&255)<<8|a[d+2>>>2]>>>8*(3-(d+2)%4)&255;for(e=0;4>e;e+=1)c=8*d+6*e<=32*a.length?c+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(k>>>6*(3-e)&63):c+b.b64Pad}return c}
function F(a){var b={outputUpper:!1,b64Pad:"="};try{a.hasOwnProperty("outputUpper")&&(b.outputUpper=a.outputUpper),a.hasOwnProperty("b64Pad")&&(b.b64Pad=a.b64Pad)}catch(c){}"boolean"!==typeof b.outputUpper&&n("Invalid outputUpper formatting option");"string"!==typeof b.b64Pad&&n("Invalid b64Pad formatting option");return b}function G(a,b){return a>>>b|a<<32-b}function H(a,b,c){return a&b^~a&c}function S(a,b,c){return a&b^a&c^b&c}function T(a){return G(a,2)^G(a,13)^G(a,22)}
function U(a){return G(a,6)^G(a,11)^G(a,25)}function V(a){return G(a,7)^G(a,18)^a>>>3}function W(a){return G(a,17)^G(a,19)^a>>>10}function X(a,b){var c=(a&65535)+(b&65535);return((a>>>16)+(b>>>16)+(c>>>16)&65535)<<16|c&65535}function Y(a,b,c,f){var d=(a&65535)+(b&65535)+(c&65535)+(f&65535);return((a>>>16)+(b>>>16)+(c>>>16)+(f>>>16)+(d>>>16)&65535)<<16|d&65535}
function Z(a,b,c,f,d){var e=(a&65535)+(b&65535)+(c&65535)+(f&65535)+(d&65535);return((a>>>16)+(b>>>16)+(c>>>16)+(f>>>16)+(d>>>16)+(e>>>16)&65535)<<16|e&65535}
function $(a,b,c){var f,d,e,k,l,j,z,B,I,g,J,u,h,m,s,p,x,y,q,K,L,M,N,O,P,Q,v=[],R,C;"SHA-224"===c||"SHA-256"===c?(J=64,m=16,s=1,P=Number,p=X,x=Y,y=Z,q=V,K=W,L=T,M=U,O=S,N=H,Q=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,
338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],g="SHA-224"===c?[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428]:[1779033703,3144134277,1013904242,2773480762,
1359893119,2600822924,528734635,1541459225]):n("Unexpected error in SHA-2 implementation");a[b>>>5]|=128<<24-b%32;a[(b+65>>>9<<4)+15]=b;R=a.length;for(u=0;u<R;u+=m){b=g[0];f=g[1];d=g[2];e=g[3];k=g[4];l=g[5];j=g[6];z=g[7];for(h=0;h<J;h+=1)v[h]=16>h?new P(a[h*s+u],a[h*s+u+1]):x(K(v[h-2]),v[h-7],q(v[h-15]),v[h-16]),B=y(z,M(k),N(k,l,j),Q[h],v[h]),I=p(L(b),O(b,f,d)),z=j,j=l,l=k,k=p(e,B),e=d,d=f,f=b,b=p(B,I);g[0]=p(b,g[0]);g[1]=p(f,g[1]);g[2]=p(d,g[2]);g[3]=p(e,g[3]);g[4]=p(k,g[4]);g[5]=p(l,g[5]);g[6]=
p(j,g[6]);g[7]=p(z,g[7])}"SHA-224"===c?C=[g[0],g[1],g[2],g[3],g[4],g[5],g[6]]:"SHA-256"===c?C=g:n("Unexpected error in SHA-2 implementation");return C}
window.jsSHA=function(a,b,c){var f=r,d=r,e=0,k=[0],l=0,j=r,l="undefined"!==typeof c?c:8;8===l||16===l||n("charSize must be 8 or 16");"HEX"===b?(0!==a.length%2&&n("srcString of HEX type must be in byte increments"),j=w(a),e=j.binLen,k=j.value):"ASCII"===b||"TEXT"===b?(j=t(a,l),e=j.binLen,k=j.value):"B64"===b?(j=A(a),e=j.binLen,k=j.value):n("inputFormat must be HEX, TEXT, ASCII, or B64");this.getHash=function(a,b,c){var g=r,l=k.slice(),j="";switch(b){case "HEX":g=D;break;case "B64":g=E;break;default:n("format must be HEX or B64")}"SHA-224"===
a?(r===f&&(f=$(l,e,a)),j=g(f,F(c))):"SHA-256"===a?(r===d&&(d=$(l,e,a)),j=g(d,F(c))):n("Chosen SHA variant is not supported");return j};this.getHMAC=function(a,b,c,d,f){var j,h,m,s,p,x=[],y=[],q=r;switch(d){case "HEX":j=D;break;case "B64":j=E;break;default:n("outputFormat must be HEX or B64")}"SHA-224"===c?(m=64,p=224):"SHA-256"===c?(m=64,p=256):n("Chosen SHA variant is not supported");"HEX"===b?(q=w(a),s=q.binLen,h=q.value):"ASCII"===b||"TEXT"===b?(q=t(a,l),s=q.binLen,h=q.value):"B64"===b?(q=A(a),
s=q.binLen,h=q.value):n("inputFormat must be HEX, TEXT, ASCII, or B64");a=8*m;b=m/4-1;m<s/8?(h=$(h,s,c),h[b]&=4294967040):m>s/8&&(h[b]&=4294967040);for(m=0;m<=b;m+=1)x[m]=h[m]^909522486,y[m]=h[m]^1549556828;c=$(y.concat($(x.concat(k),a+e,c)),a+p,c);return j(c,F(f))}};})();


(function($)
{
    /**
     * Auto-growing textareas; technique ripped from Facebook
     *
     * http://github.com/jaz303/jquery-grab-bag/tree/master/javascripts/jquery.autogrow-textarea.js
     */
    $.fn.autogrow = function(options)
    {
        return this.filter('textarea').each(function()
        {
            var self         = this;
            var $self        = $(self);
            var minHeight    = $self.height();
            var noFlickerPad = $self.hasClass('autogrow-short') ? 0 : parseInt($self.css('lineHeight')) || 0;

            var shadow = $('<div></div>').css({
                position:    'absolute',
                top:         -10000,
                left:        -10000,
                width:       $self.width(),
                fontSize:    $self.css('fontSize'),
                fontFamily:  $self.css('fontFamily'),
                fontWeight:  $self.css('fontWeight'),
                lineHeight:  $self.css('lineHeight'),
                resize:      'none',
          'word-wrap': 'break-word'
            }).appendTo(document.body);

            var update = function(event)
            {
                var times = function(string, number)
                {
                    for (var i=0, r=''; i<number; i++) r += string;
                    return r;
                };

                var val = self.value.replace(/</g, '&lt;')
                                    .replace(/>/g, '&gt;')
                                    .replace(/&/g, '&amp;')
                                    .replace(/\n$/, '<br/>&nbsp;')
                                    .replace(/\n/g, '<br/>')
                                    .replace(/ {2,}/g, function(space){ return times('&nbsp;', space.length - 1) + ' ' });

        // Did enter get pressed?  Resize in this keydown event so that the flicker doesn't occur.
        if (event && event.data && event.data.event === 'keydown' && event.keyCode === 13) {
          val += '<br />';
        }

                shadow.css('width', $self.width());
                shadow.html(val + (noFlickerPad === 0 ? '...' : '')); // Append '...' to resize pre-emptively.
                $self.height(Math.max(shadow.height() + noFlickerPad, minHeight));
            }

            $self.change(update).keyup(update).keydown({event:'keydown'},update);
            $(window).resize(update);

            update();
        });
    };
})(jQuery);