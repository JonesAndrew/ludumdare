import Fetch	 				from '../internal/fetch';

export default {
	GetCountUnread,
	GetCountAll,
	GetFeedUnread,
	GetFeedAll,
	SetMarkRead,
	GetSubscription,
	Subscribe,
	Unsubscribe,
};

//Gets count, caller_id, and satus for unread notifications
export function GetCountUnread() {
	return Fetch.Get(API_ENDPOINT+'/vx/notification/unread/count', true);
}

//Gets count, caller_id, and satus for all notifications
export function GetCountAll() {
	return Fetch.Get(API_ENDPOINT+'/vx/notification/all/count', true);
}

//Gets feed for unread notifications
export function GetFeedUnread( offset, length ) {
	return Fetch.Get(API_ENDPOINT+'/vx/notification/unread/feed?offset=' + offset + '&limit=' + length, true);
}

//Gets feed for all notifications
export function GetFeedAll( offset, length ) {
	return Fetch.Get(API_ENDPOINT+'/vx/notification/all/feed?offset=' + offset + '&limit=' + length, true);
}

export function SetMarkRead( id ) {
	return Fetch.Post(API_ENDPOINT+'/vx/notification/markread', {'max_read': id});
}

export function GetSubscription( id ) {
	return Fetch.Get(API_ENDPOINT+'/vx/notification/subscription/get/' + id, true);
}

export function Subscribe( id ) {
	return Fetch.Post(API_ENDPOINT+'/vx/notification/subscription/add/' + id, {});
}

export function Unsubscribe( id ) {
	return Fetch.Post(API_ENDPOINT+'/vx/notification/subscription/remove/' + id, {});
}
