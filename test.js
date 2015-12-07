import test from 'ava';
import fn from './';

test('parse', t => {
	t.same(fn(), {});
	t.same(fn('foo, bar'), {});
	t.same(fn('<foo>; rel="next", <bar>; rel="last"'), {next: 'foo', last: 'bar'});
	t.same(fn('<foo>; rel="first", <bar>; rel="prev", <baz>; rel="next"'), {first: 'foo', prev: 'bar', next: 'baz'});
});
