define(['app'],function(app){
	app.UnreadManager = Em.Object.extend(Em.Evented, {
		unreadCount: 0,
		postIncreaseEvent: function(){
			this.trigger('unread-increased');
		},
		addIncreaseObserver: function(callback){
			this.on('unread-increased',callback);
		},
		removeIncreaseObserver: function(toRemove){
			this.off('unread-increased',toRemove);
		},

		// Private
		_updateUnreadCount: function(newCount){
			var currentCount = this.unreadCount;
			if (currentCount == newCount) return;

			this.set('unreadCount',newCount);

			if (newCount > currentCount) {
				this.postIncreaseEvent();
			}
		},

		_pulling: false,
		_pullUnreadCountFromServer: function(callback){
			if (this._pulling) return;
			var api = app.currentAPI();
			var that = this;
			if (!api) return;

			this.set('_pulling', true);
			api.invisible = true; // Dont want the global loading indicator when polling.
			api.getUnread(function(data,error){
				that.set('_pulling',false);
				if (callback) callback(data,error);
			});
		},

		// Poll Interval Management
		minimalInterval: 4,
		maximumInterval: 30,
		nounreadTimes: 15, // +1 when unreadCount is 0, =0 when unreadCount not 0, initial value 15 for a low speed initial polling.

		// delta = 0,   interval = minimalInterval
		// delta = X,   interval = minimal + (maximum - minimal) * X
		// delta = 1,   interval = maximumInterval
		currentDelayDelta: function(){
			var c = this.nounreadTimes;
			if (c < 15) return 0;
			else if (c < 27) return 0.25;
			else if (c < 50) return 0.6;
			else return 1.0;
		},
		nextPullInterval: function(){
			var d = this.currentDelayDelta();
			if (d < 0) d = 0;
			if (d > 1) d = 1;

			return this.minimalInterval + (this.maximumInterval - this.minimalInterval) * d;
		},
		pollStarted: false,
		poll: function(){
			var that = this;
			this._pullUnreadCountFromServer(function(data,error){
				var newCount = 0;
				if (!error){
					newCount = data.unreadCount;
					that._updateUnreadCount(newCount);
				}

				if (newCount == 0){
					this.nounreadTimes++;
				} else {
					this.nounreadTimes = 0;
				}

				if (that.pollStarted) {
					var interval = that.nextPullInterval() * 1000;
					Em.run.later(that, that.poll, interval);
				}
			});
		},
		startPoll: function(){
			this.set('pollStarted',true);
			this.poll();
		},
		stopPoll: function(){
			this.set('pollStarted',false);
		}
	});
	app.unreadManager = app.UnreadManager.create();
});