(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'JavaJSTest', 'kotlin-test'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('JavaJSTest'), require('kotlin-test'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'JavaJSTest-test'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'JavaJSTest-test'.");
    }if (typeof JavaJSTest === 'undefined') {
      throw new Error("Error loading module 'JavaJSTest-test'. Its dependency 'JavaJSTest' was not found. Please, check whether 'JavaJSTest' is loaded prior to 'JavaJSTest-test'.");
    }if (typeof this['kotlin-test'] === 'undefined') {
      throw new Error("Error loading module 'JavaJSTest-test'. Its dependency 'kotlin-test' was not found. Please, check whether 'kotlin-test' is loaded prior to 'JavaJSTest-test'.");
    }root['JavaJSTest-test'] = factory(typeof this['JavaJSTest-test'] === 'undefined' ? {} : this['JavaJSTest-test'], kotlin, JavaJSTest, this['kotlin-test']);
  }
}(this, function (_, Kotlin, $module$JavaJSTest, $module$kotlin_test) {
  'use strict';
  var Sample = $module$JavaJSTest.sample.Sample;
  var assertTrue = $module$kotlin_test.kotlin.test.assertTrue_ifx8ge$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var test = $module$kotlin_test.kotlin.test.test;
  var suite = $module$kotlin_test.kotlin.test.suite;
  var hello = $module$JavaJSTest.sample.hello;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  function SampleTests() {
  }
  SampleTests.prototype.testMe = function () {
    assertTrue((new Sample()).checkMe() > 0);
  };
  SampleTests.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SampleTests',
    interfaces: []
  };
  function SampleTestsJS() {
  }
  SampleTestsJS.prototype.testHello = function () {
    assertTrue(contains(hello(), 'JS'));
  };
  SampleTestsJS.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SampleTestsJS',
    interfaces: []
  };
  var package$sample = _.sample || (_.sample = {});
  package$sample.SampleTests = SampleTests;
  package$sample.SampleTestsJS = SampleTestsJS;
  suite('sample', false, function () {
    suite('SampleTests', false, function () {
      test('testMe', false, function () {
        return (new SampleTests()).testMe();
      });
    });
    suite('SampleTestsJS', false, function () {
      test('testHello', false, function () {
        return (new SampleTestsJS()).testHello();
      });
    });
  });
  Kotlin.defineModule('JavaJSTest-test', _);
  return _;
}));

//# sourceMappingURL=JavaJSTest-test.js.map
