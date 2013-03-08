﻿describe('$utilityService', function () {
    describe('evalProperty should find the right property given a heirarchy', function () {
        var service;
        beforeEach(module('ngGrid'));
        beforeEach(inject(function ($utilityService) {
            service = $utilityService;
        }));
        it('returns "foundme"', function () {
            var obj = { foo: { bar: { hello: { world: "foundme" } } } };
            expect(service.evalProperty(obj, "foo.bar.hello.world")).toEqual("foundme");
        });
    });
});