import test from 'ava';
import fn from './';

test('parse', t => {
	t.same(fn('<https://api.github.com/user/abc/events?page=2>; rel="next", <https://api.github.com/user/abc/events?page=10>; rel="last"'), {
		next: 'https://api.github.com/user/abc/events?page=2',
		last: 'https://api.github.com/user/abc/events?page=10'
	});

	t.same(fn('<https://api.github.com/user/abc/events?page=1>; rel="first", <https://api.github.com/user/abc/events?page=9>; rel="prev"'), {
		first: 'https://api.github.com/user/abc/events?page=1',
		prev: 'https://api.github.com/user/abc/events?page=9'
	});
});
