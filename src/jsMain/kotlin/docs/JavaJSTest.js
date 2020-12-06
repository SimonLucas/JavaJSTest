(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'JavaJSTest'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'JavaJSTest'.");
    }root.JavaJSTest = factory(typeof JavaJSTest === 'undefined' ? {} : JavaJSTest, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Random = Kotlin.kotlin.random.Random;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Unit = Kotlin.kotlin.Unit;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var Math_0 = Math;
  var print = Kotlin.kotlin.io.print_s8jyv4$;
  var println_0 = Kotlin.kotlin.io.println;
  var toString = Kotlin.toString;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var L_1 = Kotlin.Long.NEG_ONE;
  var ensureNotNull = Kotlin.ensureNotNull;
  var toDoubleArray = Kotlin.kotlin.collections.toDoubleArray_tcduak$;
  var asList = Kotlin.kotlin.collections.asList_us0mfu$;
  var throwCCE = Kotlin.throwCCE;
  var throwUPAE = Kotlin.throwUPAE;
  var math = Kotlin.kotlin.math;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var L10 = Kotlin.Long.fromInt(10);
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var sum = Kotlin.kotlin.collections.sum_plj8ka$;
  var abs = Kotlin.kotlin.math.abs_za3lpa$;
  var ArrayList = Kotlin.kotlin.collections.ArrayList;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var Array_0 = Array;
  var L0 = Kotlin.Long.ZERO;
  var arrayListOf = Kotlin.kotlin.collections.arrayListOf_i5x0yv$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var hashMapOf = Kotlin.kotlin.collections.hashMapOf_qfcya0$;
  var sequenceOf = Kotlin.kotlin.sequences.sequenceOf_i5x0yv$;
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  var numberToInt = Kotlin.numberToInt;
  var Random_0 = Kotlin.kotlin.random.Random_za3lpa$;
  var unboxChar = Kotlin.unboxChar;
  var toBoxedChar = Kotlin.toBoxedChar;
  var charArray = Kotlin.charArray;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var shuffle = Kotlin.kotlin.collections.shuffle_vvxzk3$;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var wrapFunction = Kotlin.wrapFunction;
  var Comparator = Kotlin.kotlin.Comparator;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var Random_1 = Kotlin.kotlin.random.Random_s8cxhz$;
  var shuffle_0 = Kotlin.kotlin.collections.shuffle_9jeydg$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var Exception = Kotlin.kotlin.Exception;
  var kotlin_js_internal_DoubleCompanionObject = Kotlin.kotlin.js.internal.DoubleCompanionObject;
  var asSequence = Kotlin.kotlin.collections.asSequence_abgq59$;
  var toCollection = Kotlin.kotlin.sequences.toCollection_gtszxp$;
  var L2 = Kotlin.Long.fromInt(2);
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var lines = Kotlin.kotlin.text.lines_gw00vp$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var addAll = Kotlin.kotlin.collections.addAll_ye1y7v$;
  var equals = Kotlin.equals;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException_init;
  var max = Kotlin.kotlin.collections.max_exjks8$;
  var L1 = Kotlin.Long.ONE;
  var L76 = Kotlin.Long.fromInt(76);
  var numberToDouble = Kotlin.numberToDouble;
  var Comparable = Kotlin.kotlin.Comparable;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var toLong = Kotlin.kotlin.text.toLong_pdl1vz$;
  var appendText = Kotlin.kotlinx.dom.appendText_46n0ku$;
  var TestTimeSource = Kotlin.kotlin.time.TestTimeSource;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var createElement = Kotlin.kotlinx.dom.createElement_7cgwi1$;
  Radial.prototype = Object.create(Positioner.prototype);
  Radial.prototype.constructor = Radial;
  Linear.prototype = Object.create(Positioner.prototype);
  Linear.prototype.constructor = Linear;
  Aim.prototype = Object.create(Enum.prototype);
  Aim.prototype.constructor = Aim;
  PlayerShip.prototype = Object.create(GameObject.prototype);
  PlayerShip.prototype.constructor = PlayerShip;
  Missile.prototype = Object.create(GameObject.prototype);
  Missile.prototype.constructor = Missile;
  Rock.prototype = Object.create(GameObject.prototype);
  Rock.prototype.constructor = Rock;
  MoveAction.prototype = Object.create(Enum.prototype);
  MoveAction.prototype.constructor = MoveAction;
  ObjectType.prototype = Object.create(Enum.prototype);
  ObjectType.prototype.constructor = ObjectType;
  CaveActions.prototype = Object.create(Enum.prototype);
  CaveActions.prototype.constructor = CaveActions;
  Fruit.prototype = Object.create(Item.prototype);
  Fruit.prototype.constructor = Fruit;
  Bomb.prototype = Object.create(Item.prototype);
  Bomb.prototype.constructor = Bomb;
  GriddleState.prototype = Object.create(Enum.prototype);
  GriddleState.prototype.constructor = GriddleState;
  Dir.prototype = Object.create(Enum.prototype);
  Dir.prototype.constructor = Dir;
  Actions.prototype = Object.create(Enum.prototype);
  Actions.prototype.constructor = Actions;
  CellState.prototype = Object.create(Enum.prototype);
  CellState.prototype.constructor = CellState;
  LineState.prototype = Object.create(Enum.prototype);
  LineState.prototype.constructor = LineState;
  GridState.prototype = Object.create(Enum.prototype);
  GridState.prototype.constructor = GridState;
  Split.prototype = Object.create(Enum.prototype);
  Split.prototype.constructor = Split;
  Split$V.prototype = Object.create(Split.prototype);
  Split$V.prototype.constructor = Split$V;
  Split$H.prototype = Object.create(Split.prototype);
  Split$H.prototype.constructor = Split$H;
  XMouseEventType.prototype = Object.create(Enum.prototype);
  XMouseEventType.prototype.constructor = XMouseEventType;
  XKeyEventType.prototype = Object.create(Enum.prototype);
  XKeyEventType.prototype.constructor = XKeyEventType;
  Horizontal.prototype = Object.create(Enum.prototype);
  Horizontal.prototype.constructor = Horizontal;
  Vertical.prototype = Object.create(Enum.prototype);
  Vertical.prototype.constructor = Vertical;
  Expansion_0.prototype = Object.create(Enum.prototype);
  Expansion_0.prototype.constructor = Expansion_0;
  Direction.prototype = Object.create(Enum.prototype);
  Direction.prototype.constructor = Direction;
  function DoNothingAgent(action) {
    if (action === void 0)
      action = 0;
    this.action = action;
  }
  DoNothingAgent.prototype.getAgentType = function () {
    return 'DoNothingAgent';
  };
  DoNothingAgent.prototype.getAction_84v5ee$ = function (gameState, playerId) {
    return this.action;
  };
  DoNothingAgent.prototype.reset = function () {
    return this;
  };
  DoNothingAgent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DoNothingAgent',
    interfaces: [SimplePlayerInterface]
  };
  DoNothingAgent.prototype.component1 = function () {
    return this.action;
  };
  DoNothingAgent.prototype.copy_za3lpa$ = function (action) {
    return new DoNothingAgent(action === void 0 ? this.action : action);
  };
  DoNothingAgent.prototype.toString = function () {
    return 'DoNothingAgent(action=' + Kotlin.toString(this.action) + ')';
  };
  DoNothingAgent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.action) | 0;
    return result;
  };
  DoNothingAgent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.action, other.action))));
  };
  var random;
  function Expansion(node, action, state) {
    this.node = node;
    this.action = action;
    this.state = state;
  }
  Expansion.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Expansion',
    interfaces: []
  };
  Expansion.prototype.component1 = function () {
    return this.node;
  };
  Expansion.prototype.component2 = function () {
    return this.action;
  };
  Expansion.prototype.component3 = function () {
    return this.state;
  };
  Expansion.prototype.copy_8j4umy$ = function (node, action, state) {
    return new Expansion(node === void 0 ? this.node : node, action === void 0 ? this.action : action, state === void 0 ? this.state : state);
  };
  Expansion.prototype.toString = function () {
    return 'Expansion(node=' + Kotlin.toString(this.node) + (', action=' + Kotlin.toString(this.action)) + (', state=' + Kotlin.toString(this.state)) + ')';
  };
  Expansion.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.node) | 0;
    result = result * 31 + Kotlin.hashCode(this.action) | 0;
    result = result * 31 + Kotlin.hashCode(this.state) | 0;
    return result;
  };
  Expansion.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.node, other.node) && Kotlin.equals(this.action, other.action) && Kotlin.equals(this.state, other.state)))));
  };
  function MctsAgent(rolloutLength, nPlayouts, k, opponentModel) {
    if (rolloutLength === void 0)
      rolloutLength = 200;
    if (nPlayouts === void 0)
      nPlayouts = 100;
    if (k === void 0)
      k = 10.0;
    if (opponentModel === void 0)
      opponentModel = new DoNothingAgent();
    this.rolloutLength = rolloutLength;
    this.nPlayouts = nPlayouts;
    this.k = k;
    this.opponentModel = opponentModel;
    this.root = new TreeNode();
    this.random_8be2vx$ = Random.Default;
  }
  MctsAgent.prototype.getAgentType = function () {
    return 'MCTSAgent';
  };
  MctsAgent.prototype.getAction_84v5ee$ = function (gameState, playerId) {
    var tmp$;
    this.reset();
    tmp$ = this.nPlayouts;
    for (var i = 0; i < tmp$; i++) {
      var state = gameState.copy();
      var toExpand = this.treePolicy_y3eu0y$(this.root, state, playerId);
      this.expand_pjxbov$(toExpand, playerId);
    }
    return this.recommendation_vvxoxg$(this.root, gameState);
  };
  MctsAgent.prototype.recommendation_vvxoxg$ = function (node, state) {
    var best = node.bestAction();
    if (best != null)
      return best;
    else
      return random.nextInt_za3lpa$(state.nActions());
  };
  MctsAgent.prototype.expand_pjxbov$ = function (ex, playerId) {
    var child = new TreeNode();
    child.parent = ex.node;
    var $receiver = ex.node.actions;
    var key = ex.action;
    $receiver.put_xwzc9p$(key, child);
    var state = this.act_90qpmw$(ex.state, ex.action, playerId);
    var reward = this.rollout_90qpmw$(state, playerId, this.rolloutLength);
    child.backup_14dthe$(reward);
  };
  MctsAgent.prototype.treePolicy_y3eu0y$ = function (node, state, playerId) {
    var action = node.bestUCT_tsk8so$(state);
    var child = node.actions.get_11rb$(action);
    if (child != null)
      return this.treePolicy_y3eu0y$(child, this.act_90qpmw$(state, action, playerId), playerId);
    else
      return new Expansion(node, action, state);
  };
  MctsAgent.prototype.act_90qpmw$ = function (state, ourAction, playerId) {
    var opponentAction = this.opponentModel.getAction_84v5ee$(state, playerId - 1 | 0);
    var actions = new Int32Array(2);
    actions[playerId] = ourAction;
    actions[1 - playerId | 0] = opponentAction;
    state.next_q5rwfd$(actions);
    return state;
  };
  MctsAgent.prototype.rollout_90qpmw$ = function (state, playerId, maxSteps) {
    var tmp$;
    var step = maxSteps;
    while ((tmp$ = step, step = tmp$ - 1 | 0, tmp$) > 0 && !state.isTerminal()) {
      var ourAction = this.random_8be2vx$.nextInt_za3lpa$(state.nActions());
      this.act_90qpmw$(state, ourAction, playerId);
    }
    var delta = state.score();
    return playerId === 0 ? delta : -delta;
  };
  MctsAgent.prototype.reset = function () {
    this.root = new TreeNode();
    return this;
  };
  MctsAgent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MctsAgent',
    interfaces: [SimplePlayerInterface]
  };
  MctsAgent.prototype.component1 = function () {
    return this.rolloutLength;
  };
  MctsAgent.prototype.component2 = function () {
    return this.nPlayouts;
  };
  MctsAgent.prototype.component3 = function () {
    return this.k;
  };
  MctsAgent.prototype.component4 = function () {
    return this.opponentModel;
  };
  MctsAgent.prototype.copy_gxh4ib$ = function (rolloutLength, nPlayouts, k, opponentModel) {
    return new MctsAgent(rolloutLength === void 0 ? this.rolloutLength : rolloutLength, nPlayouts === void 0 ? this.nPlayouts : nPlayouts, k === void 0 ? this.k : k, opponentModel === void 0 ? this.opponentModel : opponentModel);
  };
  MctsAgent.prototype.toString = function () {
    return 'MctsAgent(rolloutLength=' + Kotlin.toString(this.rolloutLength) + (', nPlayouts=' + Kotlin.toString(this.nPlayouts)) + (', k=' + Kotlin.toString(this.k)) + (', opponentModel=' + Kotlin.toString(this.opponentModel)) + ')';
  };
  MctsAgent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.rolloutLength) | 0;
    result = result * 31 + Kotlin.hashCode(this.nPlayouts) | 0;
    result = result * 31 + Kotlin.hashCode(this.k) | 0;
    result = result * 31 + Kotlin.hashCode(this.opponentModel) | 0;
    return result;
  };
  MctsAgent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.rolloutLength, other.rolloutLength) && Kotlin.equals(this.nPlayouts, other.nPlayouts) && Kotlin.equals(this.k, other.k) && Kotlin.equals(this.opponentModel, other.opponentModel)))));
  };
  var nodeCount;
  function TreeNode(k) {
    if (k === void 0)
      k = 100.0;
    this.k = k;
    this.epsilon = 1.0E-6;
    var tmp$;
    this.id = (tmp$ = nodeCount, nodeCount = tmp$ + 1 | 0, tmp$);
    this.n = 0;
    this.sum = 0.0;
    this.actions = HashMap_init();
    this.parent = null;
  }
  TreeNode.prototype.report = function () {
    println(this.toString());
    var tmp$;
    tmp$ = this.actions.values.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.report();
    }
  };
  TreeNode.prototype.toString = function () {
    return 'id: ' + this.id + '\t' + ' n: ' + this.n + '\t' + ' mean: ' + this.mean();
  };
  TreeNode.prototype.bestAction = function () {
    var picker = new Picker();
    var tmp$;
    tmp$ = this.actions.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var action = element.key;
      var stats = element.value;
      var value = stats.mean() + this.epsilon * random.nextDouble();
      picker.add_41hqm1$(value, action);
    }
    return picker.best;
  };
  TreeNode.prototype.bestUCT_tsk8so$ = function (state) {
    var tmp$;
    var picker = new Picker(Picker$Companion_getInstance().MAX_FIRST);
    tmp$ = state.nActions();
    for (var i = 0; i < tmp$; i++) {
      var value = this.epsilon * random.nextDouble();
      var child = this.actions.get_11rb$(i);
      if (child == null)
        value += this.uct_mqu1mq$(0.0, 0, this.n);
      else
        value += this.uct_mqu1mq$(child.mean(), child.n, this.n);
      picker.add_41hqm1$(value, i);
    }
    var best = picker.best;
    if (best != null)
      return best;
    else
      return random.nextInt_za3lpa$(state.nActions());
  };
  TreeNode.prototype.backup_14dthe$ = function (reward) {
    var tmp$;
    this.sum += reward;
    this.n = this.n + 1 | 0;
    (tmp$ = this.parent) != null ? (tmp$.backup_14dthe$(reward), Unit) : null;
  };
  TreeNode.prototype.mean = function () {
    return this.sum / this.n;
  };
  TreeNode.prototype.uct_mqu1mq$ = function (mean, n, N) {
    var tmp$ = this.k;
    var x = N + this.epsilon;
    var x_0 = Math_0.log2(x) / (n + this.epsilon);
    return mean + tmp$ * Math_0.sqrt(x_0);
  };
  TreeNode.prototype.size = function () {
    var count = {v: 1};
    var tmp$;
    tmp$ = this.actions.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var action = element.key;
      var state = element.value;
      count.v = count.v + state.size() | 0;
    }
    return count.v;
  };
  TreeNode.prototype.depth = function () {
    var temp = this.parent;
    return temp == null ? 0 : 1 + temp.depth() | 0;
  };
  TreeNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TreeNode',
    interfaces: []
  };
  TreeNode.prototype.component1 = function () {
    return this.k;
  };
  TreeNode.prototype.copy_14dthe$ = function (k) {
    return new TreeNode(k === void 0 ? this.k : k);
  };
  TreeNode.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.k) | 0;
    return result;
  };
  TreeNode.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.k, other.k))));
  };
  function main(args) {
    var range = 3;
    var n = 20;
    var mt = new MutationTransducer(void 0, 0.5);
    var nSteps = 20;
    var output = mt.repSeq_vux9f0$(n, 9);
    for (var i = 0; i < nSteps; i++) {
      println(i);
      var $receiver = output;
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        print(element);
      }
      println_0();
      output = mt.mutate_u4kcgn$(output, range);
    }
  }
  function MutationTransducer(mutProb, repeatProb) {
    if (mutProb === void 0)
      mutProb = 0.2;
    if (repeatProb === void 0)
      repeatProb = 0.5;
    this.mutProb = mutProb;
    this.repeatProb = repeatProb;
    this.random = Random.Default;
  }
  MutationTransducer.prototype.mutate_u4kcgn$ = function (input, range) {
    var output = new Int32Array(input.length);
    for (var i = 0; i < input.length; i++) {
      var p = this.random.nextDouble();
      if (p < this.mutProb) {
        output[i] = this.random.nextInt_za3lpa$(range);
      } else if (p < this.mutProb + this.repeatProb && i > 0) {
        output[i] = output[i - 1 | 0];
      } else {
        output[i] = input[i];
      }
    }
    return output;
  };
  MutationTransducer.prototype.randSeq_vux9f0$ = function (n, range) {
    var array = new Int32Array(n);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = this.random.nextInt_za3lpa$(range);
    }
    return array;
  };
  MutationTransducer.prototype.repSeq_vux9f0$ = function (n, v) {
    var array = new Int32Array(n);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = v;
    }
    return array;
  };
  MutationTransducer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MutationTransducer',
    interfaces: []
  };
  MutationTransducer.prototype.component1 = function () {
    return this.mutProb;
  };
  MutationTransducer.prototype.component2 = function () {
    return this.repeatProb;
  };
  MutationTransducer.prototype.copy_lu1900$ = function (mutProb, repeatProb) {
    return new MutationTransducer(mutProb === void 0 ? this.mutProb : mutProb, repeatProb === void 0 ? this.repeatProb : repeatProb);
  };
  MutationTransducer.prototype.toString = function () {
    return 'MutationTransducer(mutProb=' + Kotlin.toString(this.mutProb) + (', repeatProb=' + Kotlin.toString(this.repeatProb)) + ')';
  };
  MutationTransducer.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.mutProb) | 0;
    result = result * 31 + Kotlin.hashCode(this.repeatProb) | 0;
    return result;
  };
  MutationTransducer.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.mutProb, other.mutProb) && Kotlin.equals(this.repeatProb, other.repeatProb)))));
  };
  function PolicyEvoAgent(flipAtLeastOneValue, probMutation, sequenceLength, nEvals, useShiftBuffer, useMutationTransducer, repeatProb, discountFactor, opponentModel, initUsingPolicy, appendUsingPolicy, mutateUsingPolicy, policy, valueFunction, analysePlans) {
    if (flipAtLeastOneValue === void 0)
      flipAtLeastOneValue = true;
    if (probMutation === void 0)
      probMutation = 0.3;
    if (sequenceLength === void 0)
      sequenceLength = 200;
    if (nEvals === void 0)
      nEvals = 20;
    if (useShiftBuffer === void 0)
      useShiftBuffer = true;
    if (useMutationTransducer === void 0)
      useMutationTransducer = true;
    if (repeatProb === void 0)
      repeatProb = 0.5;
    if (discountFactor === void 0)
      discountFactor = 1.0;
    if (opponentModel === void 0)
      opponentModel = new DoNothingAgent();
    if (initUsingPolicy === void 0)
      initUsingPolicy = 0.8;
    if (appendUsingPolicy === void 0)
      appendUsingPolicy = 0.8;
    if (mutateUsingPolicy === void 0)
      mutateUsingPolicy = 0.5;
    if (policy === void 0)
      policy = null;
    if (valueFunction === void 0)
      valueFunction = null;
    if (analysePlans === void 0)
      analysePlans = false;
    this.flipAtLeastOneValue = flipAtLeastOneValue;
    this.probMutation = probMutation;
    this.sequenceLength = sequenceLength;
    this.nEvals = nEvals;
    this.useShiftBuffer = useShiftBuffer;
    this.useMutationTransducer = useMutationTransducer;
    this.repeatProb = repeatProb;
    this.discountFactor = discountFactor;
    this.opponentModel = opponentModel;
    this.initUsingPolicy = initUsingPolicy;
    this.appendUsingPolicy = appendUsingPolicy;
    this.mutateUsingPolicy = mutateUsingPolicy;
    this.policy = policy;
    this.valueFunction = valueFunction;
    this.analysePlans = analysePlans;
    this.random_8be2vx$ = Random.Default;
    this.planAnalyser_8be2vx$ = null;
    if (this.analysePlans)
      this.planAnalyser_8be2vx$ = new StickToPlanRate();
    this.buffer_8be2vx$ = null;
    this.solutions = ArrayList_init();
    this.scores = ArrayList_init();
    this.x = 1;
  }
  PolicyEvoAgent.prototype.getData = function () {
    return this.scores;
  };
  PolicyEvoAgent.prototype.getAgentType = function () {
    return 'SimpleEvoPolicyAgent';
  };
  PolicyEvoAgent.prototype.reset = function () {
    this.buffer_8be2vx$ = null;
    return this;
  };
  PolicyEvoAgent.prototype.getActions_0 = function (gameState, playerId) {
    var tmp$, tmp$_0;
    var solution;
    var buf = this.buffer_8be2vx$;
    if (this.useShiftBuffer) {
      if (buf == null) {
        solution = this.initialSequence_0(gameState);
      } else {
        solution = this.shiftLeftAndAppend_0(buf, gameState);
      }
    } else {
      solution = this.initialSequence_0(gameState);
    }
    this.solutions.clear();
    this.solutions.add_11rb$(solution);
    this.scores.clear();
    var bestScore = -1000.0;
    tmp$ = this.nEvals;
    for (var i = 0; i < tmp$; i++) {
      var scoreArrray1 = new Float64Array(solution.length);
      var scoreArrray2 = new Float64Array(solution.length);
      var mut = this.mutate_0(solution, this.probMutation, gameState, playerId);
      var curScore = this.evalSeq_0(gameState.copy(), solution, playerId, scoreArrray1);
      var mutScore = this.evalSeq_0(gameState.copy(), mut, playerId, scoreArrray2);
      var a = bestScore;
      bestScore = Math_0.max(a, curScore);
      var a_0 = bestScore;
      bestScore = Math_0.max(a_0, mutScore);
      if (mutScore >= curScore) {
        solution = mut;
      }this.solutions.add_11rb$(mut);
      this.scores.add_11rb$(scoreArrray1);
      this.scores.add_11rb$(scoreArrray2);
    }
    this.buffer_8be2vx$ = solution;
    (tmp$_0 = this.planAnalyser_8be2vx$) != null ? (tmp$_0.addSequence_q5rwfd$(solution), Unit) : null;
    return solution;
  };
  PolicyEvoAgent.prototype.mutate_0 = function (v, mutProb, gameState, playerId) {
    if (this.useMutationTransducer) {
      var mt = new MutationTransducer(mutProb, this.repeatProb);
      return mt.mutate_u4kcgn$(v, gameState.nActions());
    }var n = v.length;
    var x = new Int32Array(n);
    var ix = this.random_8be2vx$.nextInt_za3lpa$(n);
    if (!this.flipAtLeastOneValue) {
      ix = -1;
    }var gs = gameState.copy();
    for (var i = 0; i < n; i++) {
      if (i === ix || this.random_8be2vx$.nextDouble() < mutProb) {
        x[i] = this.mutateValue_0(v[i], gs, playerId);
      } else {
        x[i] = v[i];
      }
      gs.next_q5rwfd$(new Int32Array([x[i]]));
    }
    return x;
  };
  PolicyEvoAgent.prototype.mutateValue_0 = function (cur, gameState, playerId) {
    var vp = this.policy;
    if (vp != null && this.random_8be2vx$.nextDouble() < this.mutateUsingPolicy) {
      return vp.getAction_84v5ee$(gameState, playerId);
    } else {
      var nPossible = gameState.nActions();
      if (nPossible <= 1)
        return cur;
      var rx = this.random_8be2vx$.nextInt_za3lpa$(nPossible - 1 | 0);
      return rx >= cur ? rx + 1 | 0 : rx;
    }
  };
  PolicyEvoAgent.prototype.initialSequence_0 = function (gameState) {
    if (this.random_8be2vx$.nextDouble() < this.initUsingPolicy)
      return this.policySequence_0(gameState);
    else
      return this.randomSequence_0(gameState);
  };
  PolicyEvoAgent.prototype.randomSequence_0 = function (gameState) {
    var p = new Int32Array(this.sequenceLength);
    for (var i = 0; i !== p.length; ++i) {
      p[i] = this.random_8be2vx$.nextInt_za3lpa$(gameState.nActions());
      gameState.next_q5rwfd$(new Int32Array([p[i]]));
    }
    return p;
  };
  PolicyEvoAgent.prototype.policySequence_0 = function (gameState) {
    var vp = this.policy;
    if (vp == null)
      return this.randomSequence_0(gameState);
    var p = new Int32Array(this.sequenceLength);
    var gs = gameState.copy();
    for (var i = 0; i !== p.length; ++i) {
      p[i] = vp.getAction_84v5ee$(gs, 0);
      gs.next_q5rwfd$(new Int32Array([p[i]]));
    }
    return p;
  };
  PolicyEvoAgent.prototype.shiftLeftAndAppend_0 = function (v, gameState) {
    var tmp$;
    var p = new Int32Array(v.length);
    var gs = gameState.copy();
    tmp$ = p.length - 1 | 0;
    for (var i = 0; i < tmp$; i++) {
      p[i] = v[i + 1 | 0];
      gs.next_q5rwfd$(new Int32Array([p[i]]));
    }
    var vp = this.policy;
    if (vp == null || this.random_8be2vx$.nextDouble() >= this.appendUsingPolicy)
      p[p.length - 1 | 0] = this.random_8be2vx$.nextInt_za3lpa$(gs.nActions());
    else
      p[p.length - 1 | 0] = vp.getAction_84v5ee$(gs, 0);
    return p;
  };
  PolicyEvoAgent.prototype.vfCorrectedScore_0 = function (gameState) {
    var tmp$;
    var vf = this.valueFunction;
    return gameState.score() + ((tmp$ = vf != null ? vf.value_tsk8so$(gameState) : null) != null ? tmp$ : 0.0);
  };
  PolicyEvoAgent.prototype.evalSeq_0 = function (gs, seq, playerId, scoreArray) {
    var tmp$, tmp$_0;
    var gameState = gs.copy();
    var currentScore = this.vfCorrectedScore_0(gameState);
    var delta = 0.0;
    var discount = 1.0;
    var actions = new Int32Array(2);
    var ix = 0;
    for (tmp$ = 0; tmp$ !== seq.length; ++tmp$) {
      var action = seq[tmp$];
      actions[playerId] = action;
      actions[1 - playerId | 0] = this.opponentModel.getAction_84v5ee$(gameState, 1 - playerId | 0);
      gameState = gameState.next_q5rwfd$(actions);
      var nextScore = this.vfCorrectedScore_0(gameState);
      var tickDelta = nextScore - currentScore;
      currentScore = nextScore;
      scoreArray[tmp$_0 = ix, ix = tmp$_0 + 1 | 0, tmp$_0] = currentScore;
      delta += tickDelta * discount;
      discount *= this.discountFactor;
    }
    return playerId === 0 ? delta : -delta;
  };
  PolicyEvoAgent.prototype.toString = function () {
    return 'PolicyEvoAgent: ' + this.nEvals + ' : ' + this.sequenceLength + ' : ' + this.opponentModel + ' : ' + toString(this.policy);
  };
  PolicyEvoAgent.prototype.getAction_84v5ee$ = function (gameState, playerId) {
    return this.getActions_0(gameState, playerId)[0];
  };
  PolicyEvoAgent.prototype.getSolutionsCopy = function () {
    var x = ArrayList_init();
    x.addAll_brywnq$(this.solutions);
    return x;
  };
  PolicyEvoAgent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PolicyEvoAgent',
    interfaces: [RolloutDataSource, SimplePlayerInterface]
  };
  PolicyEvoAgent.prototype.component1 = function () {
    return this.flipAtLeastOneValue;
  };
  PolicyEvoAgent.prototype.component2 = function () {
    return this.probMutation;
  };
  PolicyEvoAgent.prototype.component3 = function () {
    return this.sequenceLength;
  };
  PolicyEvoAgent.prototype.component4 = function () {
    return this.nEvals;
  };
  PolicyEvoAgent.prototype.component5 = function () {
    return this.useShiftBuffer;
  };
  PolicyEvoAgent.prototype.component6 = function () {
    return this.useMutationTransducer;
  };
  PolicyEvoAgent.prototype.component7 = function () {
    return this.repeatProb;
  };
  PolicyEvoAgent.prototype.component8 = function () {
    return this.discountFactor;
  };
  PolicyEvoAgent.prototype.component9 = function () {
    return this.opponentModel;
  };
  PolicyEvoAgent.prototype.component10 = function () {
    return this.initUsingPolicy;
  };
  PolicyEvoAgent.prototype.component11 = function () {
    return this.appendUsingPolicy;
  };
  PolicyEvoAgent.prototype.component12 = function () {
    return this.mutateUsingPolicy;
  };
  PolicyEvoAgent.prototype.component13 = function () {
    return this.policy;
  };
  PolicyEvoAgent.prototype.component14 = function () {
    return this.valueFunction;
  };
  PolicyEvoAgent.prototype.component15 = function () {
    return this.analysePlans;
  };
  PolicyEvoAgent.prototype.copy_s3gkbw$ = function (flipAtLeastOneValue, probMutation, sequenceLength, nEvals, useShiftBuffer, useMutationTransducer, repeatProb, discountFactor, opponentModel, initUsingPolicy, appendUsingPolicy, mutateUsingPolicy, policy, valueFunction, analysePlans) {
    return new PolicyEvoAgent(flipAtLeastOneValue === void 0 ? this.flipAtLeastOneValue : flipAtLeastOneValue, probMutation === void 0 ? this.probMutation : probMutation, sequenceLength === void 0 ? this.sequenceLength : sequenceLength, nEvals === void 0 ? this.nEvals : nEvals, useShiftBuffer === void 0 ? this.useShiftBuffer : useShiftBuffer, useMutationTransducer === void 0 ? this.useMutationTransducer : useMutationTransducer, repeatProb === void 0 ? this.repeatProb : repeatProb, discountFactor === void 0 ? this.discountFactor : discountFactor, opponentModel === void 0 ? this.opponentModel : opponentModel, initUsingPolicy === void 0 ? this.initUsingPolicy : initUsingPolicy, appendUsingPolicy === void 0 ? this.appendUsingPolicy : appendUsingPolicy, mutateUsingPolicy === void 0 ? this.mutateUsingPolicy : mutateUsingPolicy, policy === void 0 ? this.policy : policy, valueFunction === void 0 ? this.valueFunction : valueFunction, analysePlans === void 0 ? this.analysePlans : analysePlans);
  };
  PolicyEvoAgent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.flipAtLeastOneValue) | 0;
    result = result * 31 + Kotlin.hashCode(this.probMutation) | 0;
    result = result * 31 + Kotlin.hashCode(this.sequenceLength) | 0;
    result = result * 31 + Kotlin.hashCode(this.nEvals) | 0;
    result = result * 31 + Kotlin.hashCode(this.useShiftBuffer) | 0;
    result = result * 31 + Kotlin.hashCode(this.useMutationTransducer) | 0;
    result = result * 31 + Kotlin.hashCode(this.repeatProb) | 0;
    result = result * 31 + Kotlin.hashCode(this.discountFactor) | 0;
    result = result * 31 + Kotlin.hashCode(this.opponentModel) | 0;
    result = result * 31 + Kotlin.hashCode(this.initUsingPolicy) | 0;
    result = result * 31 + Kotlin.hashCode(this.appendUsingPolicy) | 0;
    result = result * 31 + Kotlin.hashCode(this.mutateUsingPolicy) | 0;
    result = result * 31 + Kotlin.hashCode(this.policy) | 0;
    result = result * 31 + Kotlin.hashCode(this.valueFunction) | 0;
    result = result * 31 + Kotlin.hashCode(this.analysePlans) | 0;
    return result;
  };
  PolicyEvoAgent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.flipAtLeastOneValue, other.flipAtLeastOneValue) && Kotlin.equals(this.probMutation, other.probMutation) && Kotlin.equals(this.sequenceLength, other.sequenceLength) && Kotlin.equals(this.nEvals, other.nEvals) && Kotlin.equals(this.useShiftBuffer, other.useShiftBuffer) && Kotlin.equals(this.useMutationTransducer, other.useMutationTransducer) && Kotlin.equals(this.repeatProb, other.repeatProb) && Kotlin.equals(this.discountFactor, other.discountFactor) && Kotlin.equals(this.opponentModel, other.opponentModel) && Kotlin.equals(this.initUsingPolicy, other.initUsingPolicy) && Kotlin.equals(this.appendUsingPolicy, other.appendUsingPolicy) && Kotlin.equals(this.mutateUsingPolicy, other.mutateUsingPolicy) && Kotlin.equals(this.policy, other.policy) && Kotlin.equals(this.valueFunction, other.valueFunction) && Kotlin.equals(this.analysePlans, other.analysePlans)))));
  };
  function RandomAgent(seed) {
    if (seed === void 0)
      seed = L_1;
    this.seed = seed;
    this.random = Random.Default;
  }
  RandomAgent.prototype.getAgentType = function () {
    return 'RandomAgent';
  };
  RandomAgent.prototype.getAction_84v5ee$ = function (gameState, playerId) {
    if (gameState.nActions() < 1)
      return 0;
    else
      return this.random.nextInt_za3lpa$(gameState.nActions());
  };
  RandomAgent.prototype.getAction_ycovnx$ = function (gameState, playerId) {
    if (gameState.nActions_za3lpa$(playerId) < 1)
      return 0;
    else
      return this.random.nextInt_za3lpa$(gameState.nActions_za3lpa$(playerId));
  };
  RandomAgent.prototype.reset = function () {
    return this;
  };
  RandomAgent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RandomAgent',
    interfaces: [SimplePlayerInterfaceMulti, SimplePlayerInterface]
  };
  function SimpleEvoAgent(flipAtLeastOneValue, probMutation, totallyRandomMutations, sequenceLength, nEvals, useShiftBuffer, useMutationTransducer, repeatProb, discountFactor, opponentModel, epsilon) {
    if (flipAtLeastOneValue === void 0)
      flipAtLeastOneValue = true;
    if (probMutation === void 0)
      probMutation = 0.2;
    if (totallyRandomMutations === void 0)
      totallyRandomMutations = false;
    if (sequenceLength === void 0)
      sequenceLength = 200;
    if (nEvals === void 0)
      nEvals = 20;
    if (useShiftBuffer === void 0)
      useShiftBuffer = true;
    if (useMutationTransducer === void 0)
      useMutationTransducer = true;
    if (repeatProb === void 0)
      repeatProb = 0.5;
    if (discountFactor === void 0)
      discountFactor = null;
    if (opponentModel === void 0)
      opponentModel = new DoNothingAgent();
    if (epsilon === void 0)
      epsilon = 1.0E-6;
    this.flipAtLeastOneValue = flipAtLeastOneValue;
    this.probMutation = probMutation;
    this.totallyRandomMutations = totallyRandomMutations;
    this.sequenceLength = sequenceLength;
    this.nEvals = nEvals;
    this.useShiftBuffer = useShiftBuffer;
    this.useMutationTransducer = useMutationTransducer;
    this.repeatProb = repeatProb;
    this.discountFactor = discountFactor;
    this.opponentModel = opponentModel;
    this.epsilon = epsilon;
    this.random_8be2vx$ = Random.Default;
    this.buffer_8be2vx$ = null;
    this.solutions = ArrayList_init();
    this.scores = ArrayList_init();
    this.bestScore = null;
    this.x = 1;
  }
  SimpleEvoAgent.prototype.getAgentType = function () {
    return 'SimpleEvoAgent';
  };
  SimpleEvoAgent.prototype.reset = function () {
    return this;
  };
  SimpleEvoAgent.prototype.getActions_84v5ee$ = function (gameState, playerId) {
    var tmp$, tmp$_0;
    var solution = (tmp$ = this.buffer_8be2vx$) != null ? tmp$ : this.randomPoint_0(gameState.nActions());
    if (this.useShiftBuffer) {
      if (solution == null)
        solution = this.randomPoint_0(gameState.nActions());
      else
        solution = this.shiftLeftAndRandomAppend_0(solution, gameState.nActions());
    } else {
      solution = this.randomPoint_0(gameState.nActions());
    }
    this.solutions.clear();
    this.solutions.add_11rb$(solution);
    this.scores.clear();
    tmp$_0 = this.nEvals;
    for (var i = 0; i < tmp$_0; i++) {
      var scoreArrray1 = new Float64Array(solution.length);
      var scoreArrray2 = new Float64Array(solution.length);
      var mut = this.mutate_0(solution, this.probMutation, gameState.nActions());
      var curScore = this.epsilon * this.random_8be2vx$.nextDouble() + this.evalSeq_0(gameState.copy(), solution, playerId, scoreArrray1);
      var mutScore = this.epsilon * this.random_8be2vx$.nextDouble() + this.evalSeq_0(gameState.copy(), mut, playerId, scoreArrray2);
      this.bestScore = curScore > mutScore ? curScore : mutScore;
      if (mutScore >= curScore) {
        solution = mut;
      }this.solutions.add_11rb$(mut);
      this.scores.add_11rb$(scoreArrray1);
      this.scores.add_11rb$(scoreArrray2);
    }
    this.buffer_8be2vx$ = solution;
    return solution;
  };
  SimpleEvoAgent.prototype.mutate_0 = function (v, mutProb, nActions) {
    if (this.totallyRandomMutations) {
      return this.randomPoint_0(nActions);
    }if (this.useMutationTransducer) {
      var mt = new MutationTransducer(mutProb, this.repeatProb);
      return mt.mutate_u4kcgn$(v, nActions);
    }var n = v.length;
    var x = new Int32Array(n);
    var ix = this.random_8be2vx$.nextInt_za3lpa$(n);
    if (!this.flipAtLeastOneValue) {
      ix = -1;
    }for (var i = 0; i < n; i++) {
      if (i === ix || this.random_8be2vx$.nextDouble() < mutProb) {
        x[i] = this.mutateValue_0(v[i], nActions);
      } else {
        x[i] = v[i];
      }
    }
    return x;
  };
  SimpleEvoAgent.prototype.mutateValue_0 = function (cur, nPossible) {
    if (nPossible <= 1)
      return cur;
    var rx = this.random_8be2vx$.nextInt_za3lpa$(nPossible - 1 | 0);
    return rx >= cur ? rx + 1 | 0 : rx;
  };
  SimpleEvoAgent.prototype.randomPoint_0 = function (nValues) {
    var p = new Int32Array(this.sequenceLength);
    for (var i = 0; i !== p.length; ++i) {
      p[i] = this.random_8be2vx$.nextInt_za3lpa$(nValues);
    }
    return p;
  };
  SimpleEvoAgent.prototype.shiftLeftAndRandomAppend_0 = function (v, nActions) {
    var tmp$;
    var p = new Int32Array(v.length);
    tmp$ = p.length - 1 | 0;
    for (var i = 0; i < tmp$; i++) {
      p[i] = v[i + 1 | 0];
    }
    p[p.length - 1 | 0] = this.random_8be2vx$.nextInt_za3lpa$(nActions);
    return p;
  };
  SimpleEvoAgent.prototype.evalSeq_0 = function (gameState, seq, playerId, scoreArray) {
    var tmp$;
    if (this.discountFactor == null) {
      tmp$ = this.evalSeqNoDiscount_0(gameState, seq, playerId, scoreArray);
    } else {
      tmp$ = this.evalSeqDiscounted_0(gameState, seq, playerId, ensureNotNull(this.discountFactor), scoreArray);
    }
    return tmp$;
  };
  SimpleEvoAgent.prototype.evalSeqNoDiscount_0 = function (gameState, seq, playerId, scoreArray) {
    var tmp$, tmp$_0;
    var gameState_0 = gameState;
    var current = gameState_0.score();
    var actions = new Int32Array(2);
    var ix = 0;
    for (tmp$ = 0; tmp$ !== seq.length; ++tmp$) {
      var action = seq[tmp$];
      actions[playerId] = action;
      actions[1 - playerId | 0] = this.opponentModel.getAction_84v5ee$(gameState_0, 1 - playerId | 0);
      gameState_0 = gameState_0.next_q5rwfd$(actions);
      scoreArray[tmp$_0 = ix, ix = tmp$_0 + 1 | 0, tmp$_0] = gameState_0.score();
    }
    var delta = gameState_0.score() - current;
    return playerId === 0 ? delta : -delta;
  };
  SimpleEvoAgent.prototype.evalSeqDiscounted_0 = function (gameState, seq, playerId, discountFactor, scoreArray) {
    var tmp$, tmp$_0;
    var gameState_0 = gameState;
    var currentScore = gameState_0.score();
    var delta = 0.0;
    var discount = 1.0;
    var actions = new Int32Array(2);
    var ix = 0;
    for (tmp$ = 0; tmp$ !== seq.length; ++tmp$) {
      var action = seq[tmp$];
      actions[playerId] = action;
      actions[1 - playerId | 0] = this.opponentModel.getAction_84v5ee$(gameState_0, 1 - playerId | 0);
      gameState_0 = gameState_0.next_q5rwfd$(actions);
      var nextScore = gameState_0.score();
      var tickDelta = nextScore - currentScore;
      currentScore = nextScore;
      scoreArray[tmp$_0 = ix, ix = tmp$_0 + 1 | 0, tmp$_0] = currentScore;
      delta += tickDelta * discount;
      discount *= discountFactor;
    }
    return playerId === 0 ? delta : -delta;
  };
  SimpleEvoAgent.prototype.toString = function () {
    return 'SEA: ' + this.nEvals + ' : ' + this.sequenceLength + ' : ' + this.opponentModel;
  };
  SimpleEvoAgent.prototype.getAction_84v5ee$ = function (gameState, playerId) {
    return this.getActions_84v5ee$(gameState, playerId)[0];
  };
  SimpleEvoAgent.prototype.getSolutionsCopy = function () {
    var x = ArrayList_init();
    x.addAll_brywnq$(this.solutions);
    return x;
  };
  SimpleEvoAgent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimpleEvoAgent',
    interfaces: [SimplePlayerInterface]
  };
  SimpleEvoAgent.prototype.component1 = function () {
    return this.flipAtLeastOneValue;
  };
  SimpleEvoAgent.prototype.component2 = function () {
    return this.probMutation;
  };
  SimpleEvoAgent.prototype.component3 = function () {
    return this.totallyRandomMutations;
  };
  SimpleEvoAgent.prototype.component4 = function () {
    return this.sequenceLength;
  };
  SimpleEvoAgent.prototype.component5 = function () {
    return this.nEvals;
  };
  SimpleEvoAgent.prototype.component6 = function () {
    return this.useShiftBuffer;
  };
  SimpleEvoAgent.prototype.component7 = function () {
    return this.useMutationTransducer;
  };
  SimpleEvoAgent.prototype.component8 = function () {
    return this.repeatProb;
  };
  SimpleEvoAgent.prototype.component9 = function () {
    return this.discountFactor;
  };
  SimpleEvoAgent.prototype.component10 = function () {
    return this.opponentModel;
  };
  SimpleEvoAgent.prototype.component11 = function () {
    return this.epsilon;
  };
  SimpleEvoAgent.prototype.copy_6ee8o$ = function (flipAtLeastOneValue, probMutation, totallyRandomMutations, sequenceLength, nEvals, useShiftBuffer, useMutationTransducer, repeatProb, discountFactor, opponentModel, epsilon) {
    return new SimpleEvoAgent(flipAtLeastOneValue === void 0 ? this.flipAtLeastOneValue : flipAtLeastOneValue, probMutation === void 0 ? this.probMutation : probMutation, totallyRandomMutations === void 0 ? this.totallyRandomMutations : totallyRandomMutations, sequenceLength === void 0 ? this.sequenceLength : sequenceLength, nEvals === void 0 ? this.nEvals : nEvals, useShiftBuffer === void 0 ? this.useShiftBuffer : useShiftBuffer, useMutationTransducer === void 0 ? this.useMutationTransducer : useMutationTransducer, repeatProb === void 0 ? this.repeatProb : repeatProb, discountFactor === void 0 ? this.discountFactor : discountFactor, opponentModel === void 0 ? this.opponentModel : opponentModel, epsilon === void 0 ? this.epsilon : epsilon);
  };
  SimpleEvoAgent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.flipAtLeastOneValue) | 0;
    result = result * 31 + Kotlin.hashCode(this.probMutation) | 0;
    result = result * 31 + Kotlin.hashCode(this.totallyRandomMutations) | 0;
    result = result * 31 + Kotlin.hashCode(this.sequenceLength) | 0;
    result = result * 31 + Kotlin.hashCode(this.nEvals) | 0;
    result = result * 31 + Kotlin.hashCode(this.useShiftBuffer) | 0;
    result = result * 31 + Kotlin.hashCode(this.useMutationTransducer) | 0;
    result = result * 31 + Kotlin.hashCode(this.repeatProb) | 0;
    result = result * 31 + Kotlin.hashCode(this.discountFactor) | 0;
    result = result * 31 + Kotlin.hashCode(this.opponentModel) | 0;
    result = result * 31 + Kotlin.hashCode(this.epsilon) | 0;
    return result;
  };
  SimpleEvoAgent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.flipAtLeastOneValue, other.flipAtLeastOneValue) && Kotlin.equals(this.probMutation, other.probMutation) && Kotlin.equals(this.totallyRandomMutations, other.totallyRandomMutations) && Kotlin.equals(this.sequenceLength, other.sequenceLength) && Kotlin.equals(this.nEvals, other.nEvals) && Kotlin.equals(this.useShiftBuffer, other.useShiftBuffer) && Kotlin.equals(this.useMutationTransducer, other.useMutationTransducer) && Kotlin.equals(this.repeatProb, other.repeatProb) && Kotlin.equals(this.discountFactor, other.discountFactor) && Kotlin.equals(this.opponentModel, other.opponentModel) && Kotlin.equals(this.epsilon, other.epsilon)))));
  };
  function StickToPlanRate() {
    this.sequences = ArrayList_init();
    this.arrays = ArrayList_init();
  }
  StickToPlanRate.prototype.addSequence_q5rwfd$ = function (seq) {
    this.sequences.add_11rb$(seq);
  };
  StickToPlanRate.prototype.report_za3lpa$ = function (nActions) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = this.sequences.iterator();
    while (tmp$.hasNext()) {
      var s = tmp$.next();
      println(asList(s));
    }
    println_0();
    var history = this.analyse();
    tmp$_0 = history.entries.iterator();
    while (tmp$_0.hasNext()) {
      var tmp$_2 = tmp$_0.next();
      var key = tmp$_2.key;
      var ss = tmp$_2.value;
    }
    var dat = ArrayList_init();
    tmp$_1 = history.entries.iterator();
    while (tmp$_1.hasNext()) {
      var tmp$_3 = tmp$_1.next();
      var k = tmp$_3.key;
      var v = tmp$_3.value;
      dat.add_11rb$(v);
    }
    this.easyPlot_nlizq9$(dat, 1.0 / nActions);
  };
  StickToPlanRate.prototype.analyse = function () {
    var tmp$, tmp$_0, tmp$_1;
    var history = HashMap_init();
    tmp$ = this.sequences.size;
    for (var i = 0; i < tmp$; i++) {
      var seq = this.sequences.get_za3lpa$(i);
      var action = seq[0];
      var eql = ArrayList_init();
      tmp$_0 = Math_0.min(i, seq.length);
      for (var j = 0; j < tmp$_0; j++) {
        if (history.get_11rb$(j) == null) {
          var value = new StatSummary();
          history.put_xwzc9p$(j, value);
        }var sameScore = action === this.sequences.get_za3lpa$(i - j | 0)[j] ? 1 : 0;
        (tmp$_1 = history.get_11rb$(j)) != null ? tmp$_1.add_3p81yu$(sameScore) : null;
        eql.add_11rb$(sameScore);
      }
      this.arrays.add_11rb$(toDoubleArray(eql));
    }
    return history;
  };
  StickToPlanRate.prototype.easyPlot_nlizq9$ = function (data, guessRate) {
    return ArrayList_init();
  };
  StickToPlanRate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StickToPlanRate',
    interfaces: []
  };
  function main_0() {
    var pt = new PopTest();
  }
  function PopTest() {
  }
  PopTest.prototype.compete_6i3x5y$ = function (gs, s1, s2) {
    var tmp$;
    var state = Kotlin.isType(tmp$ = gs.copy(), ExtendedAbstractGameStateMulti) ? tmp$ : throwCCE();
    var ix1 = 0;
    var ix2 = 0;
    while (!state.isTerminal_za3lpa$(state.toMove())) {
    }
    return state.score_za3lpa$(state.toMove());
  };
  PopTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PopTest',
    interfaces: []
  };
  function TreeNode_0(owner, parent, nActions) {
    if (owner === void 0)
      owner = 0;
    if (parent === void 0)
      parent = null;
    if (nActions === void 0)
      nActions = null;
    this.owner = owner;
    this.parent = parent;
    this.nActions = nActions;
    this.nextMap = HashMap_init();
    this.ss = new StatSummary();
  }
  TreeNode_0.prototype.follow_za3lpa$ = function (action) {
    var nextNode = this.nextMap.get_11rb$(action);
    if (nextNode == null) {
      nextNode = new TreeNode_0(void 0, this);
      var $receiver = this.nextMap;
      var value = nextNode;
      $receiver.put_xwzc9p$(action, value);
    }return nextNode;
  };
  TreeNode_0.prototype.nNodes = function () {
    var tmp$;
    var n = {v: 1};
    tmp$ = this.nextMap.values.iterator();
    while (tmp$.hasNext()) {
      var node = tmp$.next();
      if (node != null) {
        n.v = n.v + node.nNodes() | 0;
      }}
    return n.v;
  };
  TreeNode_0.prototype.report_za3lpa$ = function (depth) {
    var tmp$;
    for (var index = 0; index < depth; index++) {
      print('  ');
    }
    println('Depth ' + depth + ', size: ' + this.nNodes() + ', tried ' + this.nextMap.size + ' from ' + toString(this.nActions));
    tmp$ = this.nextMap.values.iterator();
    while (tmp$.hasNext()) {
      var node = tmp$.next();
      if (node != null) {
        node.report_za3lpa$(1 + depth | 0);
      }}
  };
  TreeNode_0.prototype.height = function () {
    var tmp$;
    var maxHeight = {v: 0};
    tmp$ = this.nextMap.values.iterator();
    while (tmp$.hasNext()) {
      var node = tmp$.next();
      if (node != null) {
        var a = maxHeight.v;
        var b = node.height();
        maxHeight.v = Math_0.max(a, b);
      }}
    return 1 + maxHeight.v | 0;
  };
  TreeNode_0.prototype.noteScore_yrwdxb$ = function (score) {
    if (score != null)
      this.ss.add_14dthe$(score);
  };
  TreeNode_0.prototype.getScore = function () {
    if (this.ss.n() === 0)
      return null;
    if (this.owner === 0)
      return this.ss.max();
    else
      return this.ss.min();
  };
  TreeNode_0.prototype.minimax = function () {
    var tmp$;
    var current = this.getScore();
    if (!this.nextMap.isEmpty()) {
      this.ss.reset();
      tmp$ = this.nextMap.values.iterator();
      while (tmp$.hasNext()) {
        var child = tmp$.next();
        if (child != null) {
          this.ss.add_14dthe$(child.minimax());
        }}
    }var updated = this.getScore();
    if (current != updated) {
      println(toString(current) + ' -> ' + toString(updated));
    }if (this.owner === 0)
      return this.ss.max();
    else
      return this.ss.min();
  };
  TreeNode_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TreeNode',
    interfaces: []
  };
  function Tree() {
    this.root = new TreeNode_0();
  }
  Tree.prototype.add_e5jm6p$ = function (seq) {
    var tmp$;
    var node = this.root;
    tmp$ = seq.iterator();
    while (tmp$.hasNext()) {
      var x = tmp$.next();
      node = node.follow_za3lpa$(x);
    }
  };
  Tree.prototype.contains_e5jm6p$ = function (seq) {
    var tmp$;
    var node = this.root;
    tmp$ = seq.iterator();
    while (tmp$.hasNext()) {
      var x = tmp$.next();
      var next = node.nextMap.get_11rb$(x);
      if (next == null)
        return false;
      node = next;
    }
    return true;
  };
  Tree.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Tree',
    interfaces: []
  };
  function Positioner() {
  }
  Positioner.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Positioner',
    interfaces: []
  };
  function Radial() {
    Positioner.call(this);
    this.xg_h5d6ai$_0 = this.xg_h5d6ai$_0;
    this.nLevels = 0;
    this.ringSize = 0.0;
  }
  Object.defineProperty(Radial.prototype, 'xg', {
    configurable: true,
    get: function () {
      if (this.xg_h5d6ai$_0 == null)
        return throwUPAE('xg');
      return this.xg_h5d6ai$_0;
    },
    set: function (xg) {
      this.xg_h5d6ai$_0 = xg;
    }
  });
  Radial.prototype.setup_8pjuke$ = function (xg, nLevels) {
    this.xg = xg;
    this.nLevels = nLevels;
    var a = xg.width();
    var b = xg.height();
    this.ringSize = Math_0.min(a, b) / nLevels;
  };
  Radial.prototype.place_lu1900$ = function (depth, order) {
    var depthFac = depth > 0 ? depth + 0.5 : 0.0;
    var r = 1.0 * this.ringSize * depthFac;
    var theta = order * 2 * math.PI;
    return Vec2d$Companion_getInstance().polar_lu1900$(r, theta).plus_5lk9kw$(this.xg.centre());
  };
  Radial.prototype.drawBackground_7ngo8a$ = function (xp) {
    var a = this.xg.width();
    var b = this.xg.height();
    var ringSize = Math_0.min(a, b) / this.nLevels;
    var times = this.nLevels;
    for (var index = 0; index < times; index++) {
      var rad = (this.nLevels - index | 0) * ringSize;
      this.xg.draw_dvdmun$(new XEllipse(this.xg.centre(), rad, rad, new XStyle(xp.getColor_za3lpa$(index), void 0, void 0, false)));
    }
  };
  Radial.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Radial',
    interfaces: [Positioner]
  };
  function Linear() {
    Positioner.call(this);
    this.xg_76b6l0$_0 = this.xg_76b6l0$_0;
    this.nLevels = 0;
    this.levelSize = 0.0;
  }
  Object.defineProperty(Linear.prototype, 'xg', {
    configurable: true,
    get: function () {
      if (this.xg_76b6l0$_0 == null)
        return throwUPAE('xg');
      return this.xg_76b6l0$_0;
    },
    set: function (xg) {
      this.xg_76b6l0$_0 = xg;
    }
  });
  Linear.prototype.setup_8pjuke$ = function (xg, nLevels) {
    this.xg = xg;
    this.nLevels = nLevels;
    this.levelSize = xg.height() / nLevels;
  };
  Linear.prototype.place_lu1900$ = function (depth, order) {
    var x = this.xg.width() * order;
    var y = this.xg.height() * (depth + 0.5) / this.nLevels;
    return new Vec2d(x, y);
  };
  Linear.prototype.drawBackground_7ngo8a$ = function (xp) {
    var levelHeight = this.xg.height() / this.nLevels;
    var times = this.nLevels;
    for (var index = 0; index < times; index++) {
      var centre = new Vec2d(this.xg.width() / 2, (0.5 + index) * levelHeight);
      this.xg.draw_dvdmun$(new XRect(centre, this.xg.width(), levelHeight, new XStyle(xp.getColor_za3lpa$(index), void 0, void 0, false)));
    }
  };
  Linear.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Linear',
    interfaces: [Positioner]
  };
  function TreeDraw() {
    TreeDraw$Companion_getInstance();
    this.root = new TreeNode_0();
    this.widthMap = HashMap_init();
    this.drawMap = HashMap_init();
    this.drawNodes = ArrayList_init();
    this.positioner = new Radial();
  }
  function TreeDraw$Companion() {
    TreeDraw$Companion_instance = this;
    this.margin = 0.05;
  }
  TreeDraw$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TreeDraw$Companion_instance = null;
  function TreeDraw$Companion_getInstance() {
    if (TreeDraw$Companion_instance === null) {
      new TreeDraw$Companion();
    }return TreeDraw$Companion_instance;
  }
  TreeDraw.prototype.setup_7cbgj3$ = function (root) {
    this.root = root;
    this.widthMap.clear();
    this.drawNodes.clear();
    this.count_u5gfxf$(root, 0);
    println('Tree is ' + root.height() + ' nodes high');
    println_0();
    println('Width profile: ');
    var times = root.height();
    for (var index = 0; index < times; index++) {
      println(index.toString() + ' ' + '\t' + ' ->  ' + toString(this.widthMap.get_11rb$(index)));
    }
    return this;
  };
  TreeDraw.prototype.count_u5gfxf$ = function (node, depth) {
    var tmp$;
    var nd = this.widthMap.get_11rb$(depth);
    if (nd == null)
      nd = 0;
    var dn = new DrawNode(node, depth, nd);
    this.drawNodes.add_11rb$(dn);
    this.drawMap.put_xwzc9p$(node, dn);
    var $receiver = this.widthMap;
    var value = 1 + nd | 0;
    $receiver.put_xwzc9p$(depth, value);
    tmp$ = node.nextMap.values.iterator();
    while (tmp$.hasNext()) {
      var x = tmp$.next();
      if (x != null) {
        this.count_u5gfxf$(x, 1 + depth | 0);
      }}
  };
  TreeDraw.prototype.paint_vzjx8w$ = function (xg) {
    this.drawNodes_vzjx8w$(xg);
  };
  TreeDraw.prototype.drawNodes_vzjx8w$ = function (xg) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.positioner.setup_8pjuke$(xg, this.root.height());
    xg.draw_dvdmun$(new XRect(xg.centre(), xg.width(), xg.height()));
    var xp = new XPalette(void 0, 0.6, void 0, L10);
    this.positioner.drawBackground_7ngo8a$(xp);
    tmp$ = this.drawNodes.iterator();
    while (tmp$.hasNext()) {
      var dn = tmp$.next();
      var order = this.widthMap.get_11rb$(dn.depth);
      if (order != null) {
        dn.s = this.positioner.place_lu1900$(dn.depth, (dn.order + 0.5) / order);
      }}
    tmp$_0 = this.drawNodes.iterator();
    while (tmp$_0.hasNext()) {
      var dn_0 = tmp$_0.next();
      if ((tmp$_1 = dn_0.tn.parent) != null) {
        var to = this.drawMap.get_11rb$(tmp$_1);
        if (to != null) {
          xg.draw_dvdmun$(new XLine(dn_0.s, to.s));
        }}}
    var a = xg.width();
    var b = xg.height();
    var levelGap = Math_0.min(a, b) / this.root.height();
    var size = levelGap / 3;
    tmp$_2 = this.drawNodes.iterator();
    while (tmp$_2.hasNext()) {
      var dn_1 = tmp$_2.next();
      var style = new XStyle(this.getColor_yrwdxb$(dn_1.tn.getScore()));
      xg.draw_dvdmun$(new XEllipse(dn_1.s, size, size, style));
    }
  };
  TreeDraw.prototype.getColor_yrwdxb$ = function (score) {
    if (score == null)
      return XColor$Companion_getInstance().gray;
    if (score < 0.0)
      return XColor$Companion_getInstance().black;
    if (score === 0.0)
      return XColor$Companion_getInstance().yellow;
    if (score > 0.0)
      return XColor$Companion_getInstance().white;
    return XColor$Companion_getInstance().gray;
  };
  TreeDraw.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TreeDraw',
    interfaces: [XApp]
  };
  function DrawNode(tn, depth, order, s) {
    if (s === void 0)
      s = new Vec2d();
    this.tn = tn;
    this.depth = depth;
    this.order = order;
    this.s = s;
  }
  DrawNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DrawNode',
    interfaces: []
  };
  function GridDataSource() {
  }
  GridDataSource.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'GridDataSource',
    interfaces: []
  };
  function GridDataView(gd) {
    this.gd = gd;
    this.cellSize = 0.0;
    this.colors = [XColor$Companion_getInstance().yellow, XColor$Companion_getInstance().gray];
    this.message = null;
  }
  GridDataView.prototype.paint_vzjx8w$ = function (xg) {
    this.calcCellSize_vzjx8w$(xg);
    this.drawBackground_vzjx8w$(xg);
    this.drawCells_vzjx8w$(xg);
    this.drawMessage_0(xg);
  };
  GridDataView.prototype.drawMessage_0 = function (xg) {
    var tmp$;
    var textStyle = new TStyle(XColor$Companion_getInstance().black, void 0, this.cellSize);
    if ((tmp$ = this.message) != null) {
      xg.draw_dvdmun$(new XText(tmp$, new Vec2d(xg.width() / 2, this.cellSize), textStyle));
    }};
  GridDataView.prototype.drawBackground_vzjx8w$ = function (xg) {
    var rect = new XRect(xg.centre(), xg.width(), xg.height());
    xg.draw_dvdmun$(rect);
  };
  GridDataView.prototype.drawCells_vzjx8w$ = function (xg) {
    var tmp$, tmp$_0;
    var style = new XStyle();
    var rect = new XRect(xg.centre(), this.cellSize, this.cellSize, style);
    var max = this.gd.maxVisits();
    tmp$ = this.gd.nCols();
    for (var i = 0; i < tmp$; i++) {
      tmp$_0 = this.gd.nRows();
      for (var j = 0; j < tmp$_0; j++) {
        var iv = new IntVec2d(i, j);
        var heat = this.gd.nVisits_vux9f0$(i, j) / max;
        style.fg = (new XColorHeat()).getColor_14dthe$(heat);
        style.stroke = true;
        style.lc = XColor$Companion_getInstance().red;
        rect.centre = new Vec2d((i + 0.5) * this.cellSize, (j + 0.5) * this.cellSize);
        xg.draw_dvdmun$(rect);
        var tStyle = new TStyle(XColor$Companion_getInstance().black, void 0, this.cellSize / 2);
        xg.draw_dvdmun$(new XText(this.gd.nVisits_vux9f0$(i, j).toString(), rect.centre, tStyle));
      }
    }
  };
  GridDataView.prototype.getVec_2j9h0j$ = function (iv) {
    return new Vec2d((iv.x + 0.5) * this.cellSize, (iv.y + 0.5) * this.cellSize);
  };
  GridDataView.prototype.calcCellSize_vzjx8w$ = function (xg) {
    var colSize = xg.width() / this.gd.nCols();
    var rowSize = xg.height() / this.gd.nRows();
    this.cellSize = Math_0.min(colSize, rowSize);
  };
  GridDataView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridDataView',
    interfaces: [XApp]
  };
  function Aim(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Aim_initFields() {
    Aim_initFields = function () {
    };
    Aim$Minimise_instance = new Aim('Minimise', 0);
    Aim$Maximise_instance = new Aim('Maximise', 1);
  }
  var Aim$Minimise_instance;
  function Aim$Minimise_getInstance() {
    Aim_initFields();
    return Aim$Minimise_instance;
  }
  var Aim$Maximise_instance;
  function Aim$Maximise_getInstance() {
    Aim_initFields();
    return Aim$Maximise_instance;
  }
  Aim.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Aim',
    interfaces: [Enum]
  };
  function Aim$values() {
    return [Aim$Minimise_getInstance(), Aim$Maximise_getInstance()];
  }
  Aim.values = Aim$values;
  function Aim$valueOf(name) {
    switch (name) {
      case 'Minimise':
        return Aim$Minimise_getInstance();
      case 'Maximise':
        return Aim$Maximise_getInstance();
      default:throwISE('No enum constant evo.Aim.' + name);
    }
  }
  Aim.valueOf_61zpoe$ = Aim$valueOf;
  function SolutionEvaluator() {
  }
  SolutionEvaluator.prototype.select_1zogng$ = function (scoredMut, bestYet) {
    var tmp$, tmp$_0;
    if (this.aim() === Aim$Minimise_getInstance()) {
      if (scoredMut.f <= bestYet.f) {
        tmp$ = scoredMut;
      } else
        tmp$ = bestYet;
      return tmp$;
    } else {
      if (scoredMut.f >= bestYet.f) {
        tmp$_0 = scoredMut;
      } else
        tmp$_0 = bestYet;
      return tmp$_0;
    }
  };
  SolutionEvaluator.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SolutionEvaluator',
    interfaces: []
  };
  function MaxSum() {
  }
  MaxSum.prototype.fitness_e5jm6p$ = function (x) {
    return sum(x);
  };
  MaxSum.prototype.aim = function () {
    return Aim$Maximise_getInstance();
  };
  MaxSum.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MaxSum',
    interfaces: [SolutionEvaluator]
  };
  function MinSum() {
  }
  MinSum.prototype.fitness_e5jm6p$ = function (x) {
    return sum(x);
  };
  MinSum.prototype.aim = function () {
    return Aim$Minimise_getInstance();
  };
  MinSum.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MinSum',
    interfaces: [SolutionEvaluator]
  };
  function MinDiff(s) {
    this.s = s;
  }
  MinDiff.prototype.aim = function () {
    return Aim$Minimise_getInstance();
  };
  MinDiff.prototype.fitness_e5jm6p$ = function (x) {
    var $receiver = this.s;
    var first = $receiver.iterator();
    var second = x.iterator();
    var list = ArrayList_init_0(Math_0.min(collectionSizeOrDefault($receiver, 10), collectionSizeOrDefault(x, 10)));
    while (first.hasNext() && second.hasNext()) {
      list.add_11rb$(abs(first.next() - second.next() | 0));
    }
    return sum(list);
  };
  MinDiff.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MinDiff',
    interfaces: [SolutionEvaluator]
  };
  function ScoredSolution(s, f) {
    this.s = s;
    this.f = f;
  }
  ScoredSolution.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScoredSolution',
    interfaces: []
  };
  ScoredSolution.prototype.component1 = function () {
    return this.s;
  };
  ScoredSolution.prototype.component2 = function () {
    return this.f;
  };
  ScoredSolution.prototype.copy_7ose8z$ = function (s, f) {
    return new ScoredSolution(s === void 0 ? this.s : s, f === void 0 ? this.f : f);
  };
  ScoredSolution.prototype.toString = function () {
    return 'ScoredSolution(s=' + Kotlin.toString(this.s) + (', f=' + Kotlin.toString(this.f)) + ')';
  };
  ScoredSolution.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.s) | 0;
    result = result * 31 + Kotlin.hashCode(this.f) | 0;
    return result;
  };
  ScoredSolution.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.s, other.s) && Kotlin.equals(this.f, other.f)))));
  };
  function EvoUtil() {
    this.rand = Random.Default;
    this.message = 'Hello';
  }
  EvoUtil.prototype.randBin_za3lpa$ = function (n) {
    if (n === void 0)
      n = 20;
    var list = ArrayList_init();
    for (var index = 0; index < n; index++) {
      list.add_11rb$(this.rand.nextInt_za3lpa$(2));
    }
    return list.toString();
  };
  EvoUtil.prototype.randSeq = function () {
    return this.randBin_za3lpa$(10);
  };
  EvoUtil.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EvoUtil',
    interfaces: []
  };
  function SimpleEvo(n, m, eval_0, pOne) {
    if (m === void 0)
      m = 2;
    if (pOne === void 0)
      pOne = 0.0;
    this.n = n;
    this.m = m;
    this.eval = eval_0;
    this.pOne = pOne;
    this.rand = Random.Default;
    this.mutProb = 2.0 / this.n;
    this.bestYet_xo72xk$_0 = this.bestYet_xo72xk$_0;
    this.reset();
  }
  SimpleEvo.prototype.run_za3lpa$ = function (its) {
    for (var index = 0; index < its; index++) {
      var mut = this.mutate_e5jm6p$(this.bestYet.s);
      var scoredMut = new ScoredSolution(mut, this.eval.fitness_e5jm6p$(mut));
      this.bestYet = this.eval.select_1zogng$(scoredMut, this.bestYet);
    }
  };
  SimpleEvo.prototype.randSeq = function () {
    var list = ArrayList_init();
    var times = this.n;
    for (var index = 0; index < times; index++) {
      list.add_11rb$(this.rand.nextInt_za3lpa$(this.m));
    }
    return list;
  };
  SimpleEvo.prototype.randBinSeq = function () {
    var list = ArrayList_init();
    var times = this.n;
    for (var index = 0; index < times; index++) {
      list.add_11rb$(this.rand.nextDouble() < this.pOne ? 1 : 0);
    }
    return list;
  };
  SimpleEvo.prototype.mutate_e5jm6p$ = function (s) {
    var tmp$;
    var destination = ArrayList_init_0(collectionSizeOrDefault(s, 10));
    var tmp$_0;
    tmp$_0 = s.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(this.rand.nextDouble() < this.mutProb ? this.rand.nextInt_za3lpa$(this.m) : item);
    }
    return Kotlin.isType(tmp$ = destination, ArrayList) ? tmp$ : throwCCE();
  };
  Object.defineProperty(SimpleEvo.prototype, 'bestYet', {
    configurable: true,
    get: function () {
      if (this.bestYet_xo72xk$_0 == null)
        return throwUPAE('bestYet');
      return this.bestYet_xo72xk$_0;
    },
    set: function (bestYet) {
      this.bestYet_xo72xk$_0 = bestYet;
    }
  });
  SimpleEvo.prototype.reset = function () {
    var seq = this.m === 2 ? this.randBinSeq() : this.randSeq();
    var score = this.eval.fitness_e5jm6p$(seq);
    this.bestYet = new ScoredSolution(seq, score);
  };
  SimpleEvo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimpleEvo',
    interfaces: []
  };
  function PathSource() {
  }
  PathSource.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'PathSource',
    interfaces: []
  };
  function SimpleEvoApp() {
    this.nRows = 10;
    this.nCols = 20;
    this.eval = new MazeEval(this.nCols, this.nRows);
    this.evo = new SimpleEvo(Kotlin.imul(this.nCols, this.nRows), 2, this.eval, 0.0);
    this.view = new SimpleGridView(this.nCols, this.nRows);
    this.nCycles = 500;
    this.itsPerCycle = 10;
    this.n = 0;
    this.evo.reset();
    this.evo.mutProb = 5.0 / Kotlin.imul(this.nCols, this.nRows);
  }
  SimpleEvoApp.prototype.paint_vzjx8w$ = function (xg) {
    this.n = this.n + 1 | 0;
    this.evo.run_za3lpa$(this.itsPerCycle);
    var solutionPath = this.eval.best;
    this.view.setData_e5jm6p$(solutionPath.x);
    this.view.setPath_aq3443$(solutionPath.path);
    this.view.message = 'n = ' + Kotlin.imul(this.n, this.itsPerCycle) + ', best = ' + solutionPath.score;
    this.view.draw_vzjx8w$(xg);
    if (this.n % this.nCycles === 0) {
      this.evo.reset();
      this.n = 0;
      this.eval.best = new SolutionPath();
    }};
  SimpleEvoApp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimpleEvoApp',
    interfaces: [XApp]
  };
  function SolutionPath(x, path, score) {
    if (x === void 0)
      x = ArrayList_init();
    if (path === void 0)
      path = ArrayList_init();
    if (score === void 0)
      score = -1.0;
    this.x = x;
    this.path = path;
    this.score = score;
  }
  SolutionPath.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SolutionPath',
    interfaces: []
  };
  SolutionPath.prototype.component1 = function () {
    return this.x;
  };
  SolutionPath.prototype.component2 = function () {
    return this.path;
  };
  SolutionPath.prototype.component3 = function () {
    return this.score;
  };
  SolutionPath.prototype.copy_pucyzn$ = function (x, path, score) {
    return new SolutionPath(x === void 0 ? this.x : x, path === void 0 ? this.path : path, score === void 0 ? this.score : score);
  };
  SolutionPath.prototype.toString = function () {
    return 'SolutionPath(x=' + Kotlin.toString(this.x) + (', path=' + Kotlin.toString(this.path)) + (', score=' + Kotlin.toString(this.score)) + ')';
  };
  SolutionPath.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.path) | 0;
    result = result * 31 + Kotlin.hashCode(this.score) | 0;
    return result;
  };
  SolutionPath.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.path, other.path) && Kotlin.equals(this.score, other.score)))));
  };
  function MazeEval(nCols, nRows) {
    this.nCols = nCols;
    this.nRows = nRows;
    this.best = new SolutionPath();
  }
  MazeEval.prototype.fitness_e5jm6p$ = function (x) {
    var from = new IntVec2d(this.nCols / 2 | 0, this.nRows / 2 | 0);
    var to = new IntVec2d((this.nCols / 2 | 0) - 1 | 0, (this.nRows / 2 | 0) - 1 | 0);
    var eg = new EasyGraph(x, this.nCols, this.nRows, false);
    var score = eg.shortestPath_fuuqxa$(from, to);
    var path = eg.path;
    if (score >= this.best.score) {
      var cp = ArrayList_init();
      cp.addAll_brywnq$(x);
      this.best = new SolutionPath(cp, path, score);
    }return score;
  };
  MazeEval.prototype.aim = function () {
    return Aim$Maximise_getInstance();
  };
  MazeEval.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MazeEval',
    interfaces: [SolutionEvaluator]
  };
  function SimpleGridView(nCols, nRows) {
    this.nCols = nCols;
    this.nRows = nRows;
    var array = Array_0(this.nCols);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new Int32Array(this.nRows);
    }
    this.a = array;
    this.cellSize = 0.0;
    this.colors = [XColor$Companion_getInstance().yellow, XColor$Companion_getInstance().gray];
    this.message = null;
    this.pathStyle = new XStyle(void 0, void 0, XColor$Companion_getInstance().blue, void 0, false, 5.0);
    this.bestPath = null;
  }
  SimpleGridView.prototype.setData_e5jm6p$ = function (list) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var ix = 0;
    tmp$ = this.nRows;
    for (var y = 0; y < tmp$; y++) {
      tmp$_0 = this.nCols;
      for (var x = 0; x < tmp$_0; x++) {
        tmp$_2 = (tmp$_1 = ix, ix = tmp$_1 + 1 | 0, tmp$_1);
        this.a[x][y] = list.get_za3lpa$(tmp$_2);
      }
    }
  };
  SimpleGridView.prototype.draw_vzjx8w$ = function (xg) {
    this.calcCellSize_vzjx8w$(xg);
    this.drawBackground_vzjx8w$(xg);
    this.drawCells_vzjx8w$(xg);
    this.drawPath_vzjx8w$(xg);
    this.drawMessage_0(xg);
  };
  SimpleGridView.prototype.drawMessage_0 = function (xg) {
    var tmp$;
    var textStyle = new TStyle(XColor$Companion_getInstance().black, void 0, this.cellSize);
    if ((tmp$ = this.message) != null) {
      xg.draw_dvdmun$(new XText(tmp$, new Vec2d(xg.width() / 2, this.cellSize), textStyle));
    }};
  SimpleGridView.prototype.drawBackground_vzjx8w$ = function (xg) {
    var rect = new XRect(xg.centre(), xg.width(), xg.height());
    xg.draw_dvdmun$(rect);
  };
  SimpleGridView.prototype.drawCells_vzjx8w$ = function (xg) {
    var tmp$, tmp$_0;
    var style = new XStyle();
    var rect = new XRect(xg.centre(), this.cellSize, this.cellSize, style);
    tmp$ = this.nCols;
    for (var i = 0; i < tmp$; i++) {
      tmp$_0 = this.nRows;
      for (var j = 0; j < tmp$_0; j++) {
        var iv = new IntVec2d(i, j);
        style.fg = this.colors[this.a[i][j]];
        style.stroke = true;
        style.lineWidth = this.a[i][j] === 1 ? 3.0 : 1.0;
        style.lc = XColor$Companion_getInstance().red;
        style.stroke = this.a[i][j] === 0;
        rect.centre = new Vec2d((i + 0.5) * this.cellSize, (j + 0.5) * this.cellSize);
        xg.draw_dvdmun$(rect);
      }
    }
  };
  SimpleGridView.prototype.drawPath_vzjx8w$ = function (xg) {
    var tmp$;
    if ((tmp$ = this.bestPath) != null) {
      var vecList = ArrayList_init();
      var tmp$_0;
      tmp$_0 = tmp$.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        vecList.add_11rb$(this.getVec_2j9h0j$(element));
      }
      var polyLine = new XPoly(new Vec2d(), vecList, this.pathStyle, void 0, false);
      xg.draw_dvdmun$(polyLine);
    }};
  SimpleGridView.prototype.getVec_2j9h0j$ = function (iv) {
    return new Vec2d((iv.x + 0.5) * this.cellSize, (iv.y + 0.5) * this.cellSize);
  };
  SimpleGridView.prototype.calcCellSize_vzjx8w$ = function (xg) {
    var colSize = xg.width() / this.nCols;
    var rowSize = xg.height() / this.nRows;
    this.cellSize = Math_0.min(colSize, rowSize);
  };
  SimpleGridView.prototype.setPath_aq3443$ = function (bestPath) {
    this.bestPath = bestPath;
  };
  SimpleGridView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimpleGridView',
    interfaces: []
  };
  function AsteroidsParams(nLives) {
    if (nLives === void 0)
      nLives = 3;
    this.nLives = nLives;
  }
  AsteroidsParams.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AsteroidsParams',
    interfaces: []
  };
  AsteroidsParams.prototype.component1 = function () {
    return this.nLives;
  };
  AsteroidsParams.prototype.copy_za3lpa$ = function (nLives) {
    return new AsteroidsParams(nLives === void 0 ? this.nLives : nLives);
  };
  AsteroidsParams.prototype.toString = function () {
    return 'AsteroidsParams(nLives=' + Kotlin.toString(this.nLives) + ')';
  };
  AsteroidsParams.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.nLives) | 0;
    return result;
  };
  AsteroidsParams.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.nLives, other.nLives))));
  };
  function AsteroidsGame(w, h, gobs, ticks, intScore) {
    AsteroidsGame$Companion_getInstance();
    if (w === void 0)
      w = 640.0;
    if (h === void 0)
      h = 480.0;
    if (gobs === void 0)
      gobs = ArrayList_init();
    if (ticks === void 0)
      ticks = 0;
    if (intScore === void 0)
      intScore = 0;
    this.w = w;
    this.h = h;
    this.gobs = gobs;
    this.ticks = ticks;
    this.intScore = intScore;
    this.rockSizes = [0.06, 0.04, 0.02];
    this.rockScores = [50, 100, 200];
    this.velocityFactor = 1.0;
    this.bm = new BoxMuller();
    this.nRocks = 5;
    this.rand = Random.Default;
    this.gobMap = HashMap_init();
    this.avatarAlive = true;
    this.rockCount = this.nRocks;
    if (this.gobs.isEmpty())
      this.randomInitialState();
    this.nSpawns = 3;
    this.actionMap = hashMapOf([to(0, MoveAction$Neutral_getInstance()), to(1, MoveAction$Left_getInstance()), to(2, MoveAction$Right_getInstance()), to(3, MoveAction$Fire_getInstance()), to(4, MoveAction$Thrust_getInstance())]);
  }
  AsteroidsGame.prototype.copy = function () {
    var cp = ArrayList_init();
    var tmp$;
    tmp$ = this.gobs.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      cp.add_11rb$(element.copy());
    }
    var gameCopy = new AsteroidsGame(this.w, this.h, cp, this.ticks, this.intScore);
    gameCopy.avatarAlive = this.avatarAlive;
    gameCopy.rockCount = this.rockCount;
    return gameCopy;
  };
  AsteroidsGame.prototype.createRocks_za3lpa$ = function (sizeIndex) {
    if (sizeIndex === void 0)
      sizeIndex = 0;
    var rocks = ArrayList_init();
    while (rocks.size < this.nRocks) {
      var rock = this.randRock_1ph2q2$(sizeIndex);
      if (this.acceptRock_4u4hyu$(rock))
        rocks.add_11rb$(rock);
    }
    this.gobs.addAll_brywnq$(rocks);
  };
  AsteroidsGame.prototype.acceptRock_4u4hyu$ = function (rock) {
    var tmp$ = (new Vec2d(this.w / 2, this.h / 2)).distanceTo_5lk9kw$(rock.s);
    var a = this.w / 4;
    var b = this.h / 4;
    return tmp$ > Math_0.min(a, b);
  };
  AsteroidsGame.prototype.avatarStatus = function () {
    return this.gobMap.get_11rb$(ObjectType$Avatar_getInstance()) != null;
  };
  AsteroidsGame.prototype.countRocks = function () {
    var tmp$;
    return (tmp$ = this.gobMap.get_11rb$(ObjectType$AlienObject_getInstance())) != null ? tmp$.size : null;
  };
  AsteroidsGame.prototype.handleRockDeath_4u4hyu$ = function (rock) {
    var tmp$;
    this.intScore = this.intScore + this.rockScores[rock.sizeIndex] | 0;
    var nextIndex = rock.sizeIndex + 1 | 0;
    if (nextIndex < this.rockSizes.length) {
      tmp$ = this.nSpawns;
      for (var i = 0; i < tmp$; i++)
        this.addObject_bqu2si$(this.randRock_1ph2q2$(nextIndex, rock.s));
    }};
  AsteroidsGame.prototype.randRock_1ph2q2$ = function (sizeIndex, s) {
    if (s === void 0)
      s = this.randPosition();
    var a = this.w;
    var b = this.h;
    var size = Math_0.min(a, b);
    var rad = size * this.rockSizes[sizeIndex];
    var poly = (new Asteroid(8, rad)).getPoly();
    var v = (new Vec2d(this.bm.nextGaussian(), this.bm.nextGaussian())).times_14dthe$(this.velocityFactor);
    var ellipse = new XEllipse(s, rad * 2, rad * 2);
    return new Rock(ellipse, s, v, sizeIndex);
  };
  AsteroidsGame.prototype.randPosition = function () {
    return new Vec2d(this.rand.nextDouble_14dthe$(this.w), this.rand.nextDouble_14dthe$(this.h));
  };
  AsteroidsGame.prototype.gameObjects = function () {
    return this.gobs;
  };
  function AsteroidsGame$Companion() {
    AsteroidsGame$Companion_instance = this;
    this.totalTicks_8be2vx$ = L0;
    this.lifeLossPenalty = 0;
    this.collisionMap = hashMapOf([to(ObjectType$Avatar_getInstance(), arrayListOf([ObjectType$AlienObject_getInstance()])), to(ObjectType$P1Missile_getInstance(), arrayListOf([ObjectType$AlienObject_getInstance()]))]);
    this.useActionAdapter = true;
    this.actionAdapter = new ActionAdapter();
    this.neutralAction = new ShipAction();
  }
  AsteroidsGame$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AsteroidsGame$Companion_instance = null;
  function AsteroidsGame$Companion_getInstance() {
    if (AsteroidsGame$Companion_instance === null) {
      new AsteroidsGame$Companion();
    }return AsteroidsGame$Companion_instance;
  }
  AsteroidsGame.prototype.testCollisions_mybawp$ = function (gobs) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.gobMap.clear();
    tmp$ = gobs.iterator();
    while (tmp$.hasNext()) {
      var g = tmp$.next();
      if (this.gobMap.get_11rb$(g.type) == null) {
        var $receiver = this.gobMap;
        var key = g.type;
        var value = ArrayList_init();
        $receiver.put_xwzc9p$(key, value);
      }(tmp$_0 = this.gobMap.get_11rb$(g.type)) != null ? tmp$_0.add_11rb$(g) : null;
    }
    this.avatarAlive = this.gobMap.get_11rb$(ObjectType$Avatar_getInstance()) != null;
    this.rockCount = (tmp$_2 = (tmp$_1 = this.gobMap.get_11rb$(ObjectType$AlienObject_getInstance())) != null ? tmp$_1.size : null) != null ? tmp$_2 : 0;
    this.testCollisions_dqfcs2$(this.gobMap);
  };
  AsteroidsGame.prototype.testCollisions_dqfcs2$ = function (obMap) {
    var tmp$, tmp$_0;
    tmp$ = AsteroidsGame$Companion_getInstance().collisionMap.keys.iterator();
    while (tmp$.hasNext()) {
      var a = tmp$.next();
      var canCollideWith = AsteroidsGame$Companion_getInstance().collisionMap.get_11rb$(a);
      if (canCollideWith != null) {
        tmp$_0 = canCollideWith.iterator();
        while (tmp$_0.hasNext()) {
          var b = tmp$_0.next();
          this.testCollisions_1wevv8$(this.gobMap.get_11rb$(a), this.gobMap.get_11rb$(b));
        }
      }}
  };
  AsteroidsGame.prototype.testCollisions_1wevv8$ = function (al, bl) {
    var tmp$, tmp$_0;
    if (al == null || bl == null)
      return;
    tmp$ = al.iterator();
    while (tmp$.hasNext()) {
      var a = tmp$.next();
      tmp$_0 = bl.iterator();
      while (tmp$_0.hasNext()) {
        var b = tmp$_0.next();
        a.testCollision_bqu2si$(b);
      }
    }
  };
  AsteroidsGame.prototype.totalTicks = function () {
    return AsteroidsGame$Companion_getInstance().totalTicks_8be2vx$;
  };
  AsteroidsGame.prototype.resetTotalTicks = function () {
    AsteroidsGame$Companion_getInstance().totalTicks_8be2vx$ = L0;
  };
  AsteroidsGame.prototype.randomInitialState = function () {
    this.createRocks_za3lpa$();
    this.addShip_0();
    return this;
  };
  AsteroidsGame.prototype.addShip_0 = function () {
    this.gobs.add_11rb$(new PlayerShip(new Vec2d(this.w / 2, this.h / 2)));
  };
  AsteroidsGame.prototype.next_q5rwfd$ = function (actions) {
    return this.next_g5da3n$(AsteroidsGame$Companion_getInstance().actionAdapter.getAction_za3lpa$(actions[0]));
  };
  AsteroidsGame.prototype.next_g5da3n$ = function (action) {
    var tmp$;
    var safeCopy = ArrayList_init();
    safeCopy.addAll_brywnq$(this.gobs);
    this.testCollisions_mybawp$(this.gobs);
    this.gobs.clear();
    var tmp$_0;
    tmp$_0 = safeCopy.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (element.alive)
        this.gobs.add_11rb$(element);
    }
    var tmp$_1;
    tmp$_1 = safeCopy.iterator();
    while (tmp$_1.hasNext()) {
      var element_0 = tmp$_1.next();
      element_0.update_3v7g8x$(this.w, this.h, action, this);
    }
    tmp$ = AsteroidsGame$Companion_getInstance().totalTicks_8be2vx$;
    AsteroidsGame$Companion_getInstance().totalTicks_8be2vx$ = tmp$.inc();
    this.ticks = this.ticks + 1 | 0;
    return this;
  };
  AsteroidsGame.prototype.nActions = function () {
    return AsteroidsGame$Companion_getInstance().useActionAdapter ? AsteroidsGame$Companion_getInstance().actionAdapter.actions.size : this.actionMap.size;
  };
  AsteroidsGame.prototype.nObjects = function () {
    return this.gobs.size;
  };
  AsteroidsGame.prototype.score = function () {
    return this.intScore;
  };
  AsteroidsGame.prototype.isTerminal = function () {
    return !this.avatarAlive && this.rockCount > 0;
  };
  AsteroidsGame.prototype.nTicks = function () {
    return this.ticks;
  };
  AsteroidsGame.prototype.addObject_bqu2si$ = function (gob) {
    this.gobs.add_11rb$(gob);
  };
  AsteroidsGame.prototype.shipDeath = function () {
    this.intScore = this.intScore - AsteroidsGame$Companion_getInstance().lifeLossPenalty | 0;
  };
  AsteroidsGame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AsteroidsGame',
    interfaces: [ExtendedAbstractGameState]
  };
  function GameObject(geometry, type, s, v, rot, rotRate, alive, colliding, age) {
    if (type === void 0)
      type = ObjectType$AlienObject_getInstance();
    if (s === void 0)
      s = new Vec2d();
    if (v === void 0)
      v = new Vec2d();
    if (rot === void 0)
      rot = 0.0;
    if (rotRate === void 0)
      rotRate = math.PI / 180;
    if (alive === void 0)
      alive = true;
    if (colliding === void 0)
      colliding = false;
    if (age === void 0)
      age = 0;
    this.geometry = geometry;
    this.type = type;
    this.s = s;
    this.v = v;
    this.rot = rot;
    this.rotRate = rotRate;
    this.alive = alive;
    this.colliding = colliding;
    this.age = age;
  }
  GameObject.prototype.radius = function () {
    return this.geometry.radius();
  };
  GameObject.prototype.copy = function () {
    return new GameObject(this.geometry, this.type, this.s, this.v, this.rot, this.rotRate, this.alive, this.colliding, this.age);
  };
  GameObject.prototype.collides_r9bfjc$ = function (a, b) {
    return a.alive && b.alive && a.s.distanceTo_5lk9kw$(b.s) <= a.radius() + b.radius();
  };
  GameObject.prototype.collidesContainer_r9bfjc$ = function (a, b) {
    return this.geometry.contains_vi8533$(b.s) || b.geometry.contains_vi8533$(this.s);
  };
  GameObject.prototype.testCollision_bqu2si$ = function (b) {
    if (this.collides_r9bfjc$(this, b)) {
      this.applyCollision_bqu2si$(b);
      return true;
    } else
      return false;
  };
  GameObject.prototype.applyCollision_bqu2si$ = function (b) {
    if (b.geometry.contains_vi8533$(this.s)) {
      this.alive = false;
      this.colliding = true;
      b.colliding = true;
      b.alive = false;
    }};
  GameObject.prototype.update_3v7g8x$$default = function (w, h, action, game) {
    this.s = this.s.plus_5lk9kw$(this.v);
    this.s = this.wrap_r9gazo$(this.s, w, h);
    this.rot += this.rotRate;
    this.geometry.centre = this.s;
    this.geometry.rotation = this.rot;
    this.age = this.age + 1 | 0;
    this.geometry.dStyle.fill = this.colliding;
  };
  GameObject.prototype.update_3v7g8x$ = function (w, h, action, game, callback$default) {
    if (action === void 0)
      action = AsteroidsGame$Companion_getInstance().neutralAction;
    if (game === void 0)
      game = null;
    callback$default ? callback$default(w, h, action, game) : this.update_3v7g8x$$default(w, h, action, game);
  };
  GameObject.prototype.wrap_r9gazo$ = function (v, w, h) {
    return new Vec2d((v.x + w) % w, (v.y + h) % h);
  };
  GameObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameObject',
    interfaces: []
  };
  function PlayerShip(s, v, rot, wait) {
    if (v === void 0)
      v = new Vec2d();
    if (rot === void 0)
      rot = 0.0;
    if (wait === void 0)
      wait = 0;
    GameObject.call(this, (new Ship()).getPoly(), ObjectType$Avatar_getInstance(), s, v, rot, 0.0);
    this.wait = wait;
    this.geometry.dStyle.lc = XColor$Companion_getInstance().magenta;
    this.d = new Vec2d(0.0, -1.0);
    this.turn = 10 * math.PI / 180.0;
    this.thrustFac = 0.5;
    this.lossFac = 0.97;
    this.cooldown = 10;
    this.missileSpeed = 7.0;
    this.missileLifetime = 50;
  }
  PlayerShip.prototype.copy = function () {
    return new PlayerShip(this.s, this.v, this.rot, this.wait);
  };
  PlayerShip.prototype.update_3v7g8x$$default = function (w, h, action, game) {
    this.update_3v7g8x$(w, h, action, game, GameObject.prototype.update_3v7g8x$$default.bind(this));
    if (this.wait > 0) {
      this.wait = this.wait - 1 | 0;
    }if (action.fire)
      this.fireMissile_0(game);
    if (action.thrust)
      this.v = this.v.plus_5lk9kw$(this.d.rotatedBy_14dthe$(this.rot).times_14dthe$(this.thrustFac));
    this.v = this.v.times_14dthe$(this.lossFac);
    this.rot = this.rot + action.turn * this.turn;
    this.geometry.dStyle.stroke = this.colliding;
    this.geometry.dStyle.fill = true;
    if (this.colliding)
      game != null ? (game.shipDeath(), Unit) : null;
  };
  PlayerShip.prototype.fireMissile_0 = function (game) {
    if (game == null)
      return;
    if (this.wait <= 0) {
      this.wait = this.cooldown;
      var missile = new Missile(this.s, this.d.rotatedBy_14dthe$(this.rot).times_14dthe$(this.missileSpeed), this.missileLifetime, true);
      game.addObject_bqu2si$(missile);
    }};
  PlayerShip.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlayerShip',
    interfaces: [GameObject]
  };
  function Missile(s, v, toLive, alive) {
    if (toLive === void 0)
      toLive = 5;
    if (alive === void 0)
      alive = true;
    GameObject.call(this, new XEllipse(new Vec2d(), 10.0, 10.0), ObjectType$P1Missile_getInstance(), s, v, void 0, void 0, alive);
    this.toLive = toLive;
  }
  Missile.prototype.copy = function () {
    return new Missile(this.s, this.v, this.toLive, this.alive);
  };
  Missile.prototype.radius = function () {
    return 2 * GameObject.prototype.radius.call(this);
  };
  Missile.prototype.update_3v7g8x$$default = function (w, h, action, game) {
    this.toLive = this.toLive - 1 | 0;
    if (this.toLive < 0)
      this.alive = false;
    if (this.colliding)
      this.alive = false;
    this.update_3v7g8x$(w, h, action, game, GameObject.prototype.update_3v7g8x$$default.bind(this));
  };
  Missile.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Missile',
    interfaces: [GameObject]
  };
  function Rock(poly, s, v, sizeIndex) {
    if (sizeIndex === void 0)
      sizeIndex = 0;
    GameObject.call(this, poly, ObjectType$AlienObject_getInstance(), s, v);
    this.sizeIndex = sizeIndex;
  }
  Rock.prototype.update_3v7g8x$$default = function (w, h, action, game) {
    if (this.colliding)
      game != null ? (game.handleRockDeath_4u4hyu$(this), Unit) : null;
    this.update_3v7g8x$(w, h, action, game, GameObject.prototype.update_3v7g8x$$default.bind(this));
  };
  Rock.prototype.copy = function () {
    return new Rock(this.geometry, this.s, this.v, this.sizeIndex);
  };
  Rock.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Rock',
    interfaces: [GameObject]
  };
  function RolloutDataSource() {
  }
  RolloutDataSource.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RolloutDataSource',
    interfaces: []
  };
  function ArcadeTestApp() {
    this.mousePosition = null;
    this.game = null;
    this.controller = new AsteroidsKeyController();
    this.agent = new SimpleEvoAgent(void 0, 0.2, void 0, 100, 20, void 0, void 0, void 0, 0.98);
    this.agent = null;
  }
  ArcadeTestApp.prototype.getData = function () {
    var tmp$, tmp$_0;
    return Kotlin.isType(this.agent, RolloutDataSource) ? (tmp$_0 = (tmp$ = this.agent) == null || Kotlin.isType(tmp$, RolloutDataSource) ? tmp$ : throwCCE()) != null ? tmp$_0.getData() : null : null;
  };
  ArcadeTestApp.prototype.paint_vzjx8w$ = function (xg) {
    var tmp$, tmp$_0, tmp$_1;
    if (this.game == null)
      this.game = new AsteroidsGame(xg.width(), xg.height());
    var safe = Kotlin.isType(tmp$_0 = (tmp$ = this.game) != null ? tmp$.copy() : null, AsteroidsGame) ? tmp$_0 : throwCCE();
    if (safe == null)
      return;
    var actionAI = this.agent != null && this.game != null ? (tmp$_1 = this.agent) != null ? tmp$_1.getAction_84v5ee$(ensureNotNull(this.game), 0) : null : null;
    if (actionAI == null) {
      safe.next_g5da3n$(this.controller.getAction_84v5ee$(safe, 0));
    } else {
      safe.next_q5rwfd$(new Int32Array([actionAI]));
    }
    var gobs = safe.gameObjects();
    var bgstyle = new XStyle(XColor$Companion_getInstance().black);
    xg.draw_dvdmun$(new XRect(xg.centre(), xg.width(), xg.height(), bgstyle));
    var tmp$_2;
    tmp$_2 = gobs.iterator();
    while (tmp$_2.hasNext()) {
      var element = tmp$_2.next();
      xg.draw_dvdmun$(element.geometry);
    }
    xg.draw_dvdmun$(this.statusText_0(xg));
    this.game = safe;
  };
  ArcadeTestApp.prototype.statusText_0 = function (xg) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var rocks = (tmp$_0 = (tmp$ = this.game) != null ? tmp$.countRocks() : null) != null ? tmp$_0 : 0;
    var avatar = (tmp$_1 = this.game) != null ? tmp$_1.avatarStatus() : null;
    var str = 'Score: ' + toString((tmp$_2 = this.game) != null ? tmp$_2.intScore : null) + ', [' + toString(avatar) + ', ' + rocks + ', ' + toString((tmp$_3 = this.game) != null ? tmp$_3.nTicks() : null) + ']';
    var text = new XText(str, new Vec2d(xg.width() / 2, xg.height() / 20));
    return text;
  };
  ArcadeTestApp.prototype.handleMouseEvent_x4hb96$ = function (e) {
    this.mousePosition = e.s;
  };
  ArcadeTestApp.prototype.handleKeyEvent_wtf8cg$ = function (e) {
    this.controller.handleKeyEvent_wtf8cg$(e);
  };
  ArcadeTestApp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArcadeTestApp',
    interfaces: [RolloutDataSource, XApp]
  };
  function MoveAction(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MoveAction_initFields() {
    MoveAction_initFields = function () {
    };
    MoveAction$Neutral_instance = new MoveAction('Neutral', 0);
    MoveAction$Left_instance = new MoveAction('Left', 1);
    MoveAction$Right_instance = new MoveAction('Right', 2);
    MoveAction$Up_instance = new MoveAction('Up', 3);
    MoveAction$Down_instance = new MoveAction('Down', 4);
    MoveAction$Fire_instance = new MoveAction('Fire', 5);
    MoveAction$Jump_instance = new MoveAction('Jump', 6);
    MoveAction$Thrust_instance = new MoveAction('Thrust', 7);
  }
  var MoveAction$Neutral_instance;
  function MoveAction$Neutral_getInstance() {
    MoveAction_initFields();
    return MoveAction$Neutral_instance;
  }
  var MoveAction$Left_instance;
  function MoveAction$Left_getInstance() {
    MoveAction_initFields();
    return MoveAction$Left_instance;
  }
  var MoveAction$Right_instance;
  function MoveAction$Right_getInstance() {
    MoveAction_initFields();
    return MoveAction$Right_instance;
  }
  var MoveAction$Up_instance;
  function MoveAction$Up_getInstance() {
    MoveAction_initFields();
    return MoveAction$Up_instance;
  }
  var MoveAction$Down_instance;
  function MoveAction$Down_getInstance() {
    MoveAction_initFields();
    return MoveAction$Down_instance;
  }
  var MoveAction$Fire_instance;
  function MoveAction$Fire_getInstance() {
    MoveAction_initFields();
    return MoveAction$Fire_instance;
  }
  var MoveAction$Jump_instance;
  function MoveAction$Jump_getInstance() {
    MoveAction_initFields();
    return MoveAction$Jump_instance;
  }
  var MoveAction$Thrust_instance;
  function MoveAction$Thrust_getInstance() {
    MoveAction_initFields();
    return MoveAction$Thrust_instance;
  }
  MoveAction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MoveAction',
    interfaces: [Enum]
  };
  function MoveAction$values() {
    return [MoveAction$Neutral_getInstance(), MoveAction$Left_getInstance(), MoveAction$Right_getInstance(), MoveAction$Up_getInstance(), MoveAction$Down_getInstance(), MoveAction$Fire_getInstance(), MoveAction$Jump_getInstance(), MoveAction$Thrust_getInstance()];
  }
  MoveAction.values = MoveAction$values;
  function MoveAction$valueOf(name) {
    switch (name) {
      case 'Neutral':
        return MoveAction$Neutral_getInstance();
      case 'Left':
        return MoveAction$Left_getInstance();
      case 'Right':
        return MoveAction$Right_getInstance();
      case 'Up':
        return MoveAction$Up_getInstance();
      case 'Down':
        return MoveAction$Down_getInstance();
      case 'Fire':
        return MoveAction$Fire_getInstance();
      case 'Jump':
        return MoveAction$Jump_getInstance();
      case 'Thrust':
        return MoveAction$Thrust_getInstance();
      default:throwISE('No enum constant games.arcade.MoveAction.' + name);
    }
  }
  MoveAction.valueOf_61zpoe$ = MoveAction$valueOf;
  function ObjectType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ObjectType_initFields() {
    ObjectType_initFields = function () {
    };
    ObjectType$Avatar_instance = new ObjectType('Avatar', 0);
    ObjectType$P1Missile_instance = new ObjectType('P1Missile', 1);
    ObjectType$AlienMissile_instance = new ObjectType('AlienMissile', 2);
    ObjectType$AlienObject_instance = new ObjectType('AlienObject', 3);
  }
  var ObjectType$Avatar_instance;
  function ObjectType$Avatar_getInstance() {
    ObjectType_initFields();
    return ObjectType$Avatar_instance;
  }
  var ObjectType$P1Missile_instance;
  function ObjectType$P1Missile_getInstance() {
    ObjectType_initFields();
    return ObjectType$P1Missile_instance;
  }
  var ObjectType$AlienMissile_instance;
  function ObjectType$AlienMissile_getInstance() {
    ObjectType_initFields();
    return ObjectType$AlienMissile_instance;
  }
  var ObjectType$AlienObject_instance;
  function ObjectType$AlienObject_getInstance() {
    ObjectType_initFields();
    return ObjectType$AlienObject_instance;
  }
  ObjectType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ObjectType',
    interfaces: [Enum]
  };
  function ObjectType$values() {
    return [ObjectType$Avatar_getInstance(), ObjectType$P1Missile_getInstance(), ObjectType$AlienMissile_getInstance(), ObjectType$AlienObject_getInstance()];
  }
  ObjectType.values = ObjectType$values;
  function ObjectType$valueOf(name) {
    switch (name) {
      case 'Avatar':
        return ObjectType$Avatar_getInstance();
      case 'P1Missile':
        return ObjectType$P1Missile_getInstance();
      case 'AlienMissile':
        return ObjectType$AlienMissile_getInstance();
      case 'AlienObject':
        return ObjectType$AlienObject_getInstance();
      default:throwISE('No enum constant games.arcade.ObjectType.' + name);
    }
  }
  ObjectType.valueOf_61zpoe$ = ObjectType$valueOf;
  function AsteroidsKeyController() {
    this.action = new ShipAction();
  }
  AsteroidsKeyController.prototype.handleKeyEvent_wtf8cg$ = function (e) {
    if (e.t === XKeyEventType$Pressed_getInstance() || e.t === XKeyEventType$Down_getInstance()) {
      this.keyPressed_za3lpa$(e.keyCode);
    } else if (e.t === XKeyEventType$Released_getInstance()) {
      this.keyReleased_za3lpa$(e.keyCode);
    }};
  AsteroidsKeyController.prototype.keyPressed_za3lpa$ = function (keyCode) {
    switch (keyCode) {
      case 37:
        this.action.turn = -1.0;
        break;
      case 39:
        this.action.turn = 1.0;
        break;
      case 32:
        this.action.fire = true;
        break;
      case 38:
        this.action.thrust = true;
        break;
    }
  };
  AsteroidsKeyController.prototype.keyReleased_za3lpa$ = function (keyCode) {
    switch (keyCode) {
      case 37:
        this.action.turn = 0.0;
        break;
      case 39:
        this.action.turn = 0.0;
        break;
      case 32:
        this.action.fire = false;
        break;
      case 38:
        this.action.thrust = false;
        break;
    }
  };
  AsteroidsKeyController.prototype.getAction_84v5ee$ = function (gameState, playerId) {
    return this.action;
  };
  AsteroidsKeyController.prototype.getAgentType = function () {
    return 'Asteroids Key Controller';
  };
  AsteroidsKeyController.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AsteroidsKeyController',
    interfaces: []
  };
  function ShipAction(turn, thrust, fire) {
    if (turn === void 0)
      turn = 0.0;
    if (thrust === void 0)
      thrust = false;
    if (fire === void 0)
      fire = false;
    this.turn = turn;
    this.thrust = thrust;
    this.fire = fire;
  }
  ShipAction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShipAction',
    interfaces: []
  };
  ShipAction.prototype.component1 = function () {
    return this.turn;
  };
  ShipAction.prototype.component2 = function () {
    return this.thrust;
  };
  ShipAction.prototype.component3 = function () {
    return this.fire;
  };
  ShipAction.prototype.copy_7trt9e$ = function (turn, thrust, fire) {
    return new ShipAction(turn === void 0 ? this.turn : turn, thrust === void 0 ? this.thrust : thrust, fire === void 0 ? this.fire : fire);
  };
  ShipAction.prototype.toString = function () {
    return 'ShipAction(turn=' + Kotlin.toString(this.turn) + (', thrust=' + Kotlin.toString(this.thrust)) + (', fire=' + Kotlin.toString(this.fire)) + ')';
  };
  ShipAction.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.turn) | 0;
    result = result * 31 + Kotlin.hashCode(this.thrust) | 0;
    result = result * 31 + Kotlin.hashCode(this.fire) | 0;
    return result;
  };
  ShipAction.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.turn, other.turn) && Kotlin.equals(this.thrust, other.thrust) && Kotlin.equals(this.fire, other.fire)))));
  };
  function ActionAdapter() {
    this.actions = ArrayList_init();
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = sequenceOf([-1.0, 0.0, 1.0]).iterator();
    while (tmp$.hasNext()) {
      var turn = tmp$.next();
      tmp$_0 = sequenceOf([false, true]).iterator();
      while (tmp$_0.hasNext()) {
        var thrust = tmp$_0.next();
        tmp$_1 = sequenceOf([false, true]).iterator();
        while (tmp$_1.hasNext()) {
          var fire = tmp$_1.next();
          this.actions.add_11rb$(new ShipAction(turn, thrust, fire));
        }
      }
    }
  }
  ActionAdapter.prototype.getAction_za3lpa$ = function (i) {
    return this.actions.get_za3lpa$(i);
  };
  ActionAdapter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionAdapter',
    interfaces: []
  };
  function ISprite() {
  }
  ISprite.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ISprite',
    interfaces: []
  };
  function SpriteData(geom, type, s, v, rot, rotRate, ttl, alive) {
    SpriteData$Companion_getInstance();
    if (s === void 0)
      s = new Vec2d();
    if (v === void 0)
      v = new Vec2d();
    if (rot === void 0)
      rot = 0.0;
    if (rotRate === void 0)
      rotRate = 0.0;
    if (ttl === void 0)
      ttl = -1;
    if (alive === void 0)
      alive = true;
    this.geom = geom;
    this.type = type;
    this.s = s;
    this.v = v;
    this.rot = rot;
    this.rotRate = rotRate;
    this.ttl = ttl;
    this.alive = alive;
  }
  function SpriteData$Companion() {
    SpriteData$Companion_instance = this;
    this.d = new Vec2d(0.0, -1.0);
    this.bm = new BoxMuller();
  }
  SpriteData$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SpriteData$Companion_instance = null;
  function SpriteData$Companion_getInstance() {
    if (SpriteData$Companion_instance === null) {
      new SpriteData$Companion();
    }return SpriteData$Companion_instance;
  }
  SpriteData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SpriteData',
    interfaces: []
  };
  SpriteData.prototype.component1 = function () {
    return this.geom;
  };
  SpriteData.prototype.component2 = function () {
    return this.type;
  };
  SpriteData.prototype.component3 = function () {
    return this.s;
  };
  SpriteData.prototype.component4 = function () {
    return this.v;
  };
  SpriteData.prototype.component5 = function () {
    return this.rot;
  };
  SpriteData.prototype.component6 = function () {
    return this.rotRate;
  };
  SpriteData.prototype.component7 = function () {
    return this.ttl;
  };
  SpriteData.prototype.component8 = function () {
    return this.alive;
  };
  SpriteData.prototype.copy_h8ylko$ = function (geom, type, s, v, rot, rotRate, ttl, alive) {
    return new SpriteData(geom === void 0 ? this.geom : geom, type === void 0 ? this.type : type, s === void 0 ? this.s : s, v === void 0 ? this.v : v, rot === void 0 ? this.rot : rot, rotRate === void 0 ? this.rotRate : rotRate, ttl === void 0 ? this.ttl : ttl, alive === void 0 ? this.alive : alive);
  };
  SpriteData.prototype.toString = function () {
    return 'SpriteData(geom=' + Kotlin.toString(this.geom) + (', type=' + Kotlin.toString(this.type)) + (', s=' + Kotlin.toString(this.s)) + (', v=' + Kotlin.toString(this.v)) + (', rot=' + Kotlin.toString(this.rot)) + (', rotRate=' + Kotlin.toString(this.rotRate)) + (', ttl=' + Kotlin.toString(this.ttl)) + (', alive=' + Kotlin.toString(this.alive)) + ')';
  };
  SpriteData.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.geom) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.s) | 0;
    result = result * 31 + Kotlin.hashCode(this.v) | 0;
    result = result * 31 + Kotlin.hashCode(this.rot) | 0;
    result = result * 31 + Kotlin.hashCode(this.rotRate) | 0;
    result = result * 31 + Kotlin.hashCode(this.ttl) | 0;
    result = result * 31 + Kotlin.hashCode(this.alive) | 0;
    return result;
  };
  SpriteData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.geom, other.geom) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.s, other.s) && Kotlin.equals(this.v, other.v) && Kotlin.equals(this.rot, other.rot) && Kotlin.equals(this.rotRate, other.rotRate) && Kotlin.equals(this.ttl, other.ttl) && Kotlin.equals(this.alive, other.alive)))));
  };
  function BasicSprite(spriteData) {
    this.spriteData = spriteData;
  }
  BasicSprite.prototype.update_4nb1db$ = function (action, updater) {
    updater.inplace_cyq92w$(this.spriteData, action);
  };
  BasicSprite.prototype.data = function () {
    return this.spriteData;
  };
  BasicSprite.prototype.copy = function () {
    return new BasicSprite(this.spriteData.copy_h8ylko$());
  };
  BasicSprite.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BasicSprite',
    interfaces: [ISprite]
  };
  function RockSprite(sd, sizeIndex) {
    if (sizeIndex === void 0)
      sizeIndex = 0;
    this.sd = sd;
    this.sizeIndex = sizeIndex;
  }
  RockSprite.prototype.data = function () {
    return this.sd;
  };
  RockSprite.prototype.copy = function () {
    return new RockSprite(this.sd.copy_h8ylko$(), this.sizeIndex);
  };
  RockSprite.prototype.update_4nb1db$ = function (action, updater) {
    updater.inplace_cyq92w$(this.sd, action);
  };
  RockSprite.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RockSprite',
    interfaces: [ISprite]
  };
  function SpriteShip(sd, wait) {
    SpriteShip$Companion_getInstance();
    if (wait === void 0)
      wait = 0;
    this.sd = sd;
    this.wait = wait;
  }
  SpriteShip.prototype.data = function () {
    return this.sd;
  };
  SpriteShip.prototype.copy = function () {
    return new SpriteShip(this.sd.copy_h8ylko$(), this.wait);
  };
  function SpriteShip$Companion() {
    SpriteShip$Companion_instance = this;
    this.lossFac = 0.97;
    this.thrustFac = 0.5;
    this.turn = 10 * math.PI / 180;
    this.muzzleVelocity = 10.0;
    this.coolDown = 10;
  }
  SpriteShip$Companion.prototype.makeData_5lk9kw$ = function (s) {
    return new SpriteData((new Ship()).getPoly(), ObjectType$Avatar_getInstance(), s, new Vec2d());
  };
  SpriteShip$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SpriteShip$Companion_instance = null;
  function SpriteShip$Companion_getInstance() {
    if (SpriteShip$Companion_instance === null) {
      new SpriteShip$Companion();
    }return SpriteShip$Companion_instance;
  }
  SpriteShip.prototype.update_4nb1db$ = function (action, updater) {
    updater.inplace_cyq92w$(this.sd, action);
    if (this.wait > 0) {
      this.wait = this.wait - 1 | 0;
    }if (action.fire && this.wait <= 0) {
      updater.fireMissile_pf9zg2$(this.sd, SpriteShip$Companion_getInstance().muzzleVelocity);
      this.wait = SpriteShip$Companion_getInstance().coolDown;
    }var $receiver = this.sd;
    if (action.thrust)
      $receiver.v = $receiver.v.plus_5lk9kw$(SpriteData$Companion_getInstance().d.rotatedBy_14dthe$($receiver.rot).times_14dthe$(SpriteShip$Companion_getInstance().thrustFac));
    $receiver.v = $receiver.v.times_14dthe$(SpriteShip$Companion_getInstance().lossFac);
    $receiver.rot += action.turn * SpriteShip$Companion_getInstance().turn;
  };
  SpriteShip.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SpriteShip',
    interfaces: [ISprite]
  };
  function SpriteShip_init(s, $this) {
    $this = $this || Object.create(SpriteShip.prototype);
    SpriteShip.call($this, SpriteShip$Companion_getInstance().makeData_5lk9kw$(s));
    return $this;
  }
  function CollisionAction() {
  }
  CollisionAction.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CollisionAction',
    interfaces: []
  };
  function rockHit$lambda(a, b, g) {
    if (g != null && Kotlin.isType(a, RockSprite)) {
      var child = g.update.spawnHeading_n5mgon$(a.sd, new XEllipse(new Vec2d(), 10.0, 20.0), ObjectType$AlienObject_getInstance(), a.sd.v.mag * 2);
      g.addObject_vjoh43$(new RockSprite(a.sd.copy_h8ylko$(void 0, void 0, void 0, void 0, a.sd.rot + math.PI / 2, void 0, void 0, true), 1));
      g.scoreX = g.scoreX + 100;
    }return Unit;
  }
  var rockHit;
  function Update(w, h, game) {
    if (game === void 0)
      game = null;
    this.w = w;
    this.h = h;
    this.game = game;
  }
  Update.prototype.spawnHeading_n5mgon$ = function (source, geom, type, speed) {
    return new SpriteData(geom, type, source.s, SpriteData$Companion_getInstance().d.rotatedBy_14dthe$(source.rot).times_14dthe$(speed));
  };
  Update.prototype.fireMissile_pf9zg2$ = function (source, speed) {
    var safe = this.game;
    if (safe == null) {
      println('Null game in updater; not firing missile');
      return;
    }var geom = new XEllipse(new Vec2d(), 10.0, 10.0);
    var missile = this.spawnHeading_n5mgon$(source, geom, ObjectType$P1Missile_getInstance(), speed);
    missile.ttl = 50;
    safe.addObject_vjoh43$(new BasicSprite(missile));
  };
  Update.prototype.standard_suyxuo$ = function (sprite) {
    return sprite.copy_h8ylko$(void 0, void 0, this.wrap_5lk9kw$(sprite.s.plus_5lk9kw$(sprite.v)), void 0, sprite.rot + sprite.rotRate);
  };
  Update.prototype.inplace_cyq92w$ = function (sprite, action) {
    if (action === void 0)
      action = null;
    sprite.s = this.wrap_5lk9kw$(sprite.s.plus_5lk9kw$(sprite.v));
    sprite.rot = sprite.rot + sprite.rotRate;
    sprite.geom.centre = sprite.s;
    sprite.geom.rotation = sprite.rot;
    if (sprite.ttl > 0) {
      sprite.ttl = sprite.ttl - 1 | 0;
      if (sprite.ttl <= 0)
        sprite.alive = false;
    }};
  Update.prototype.wrap_5lk9kw$ = function (s) {
    return new Vec2d((s.x + this.w) % this.w, (s.y + this.h) % this.h);
  };
  Update.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Update',
    interfaces: []
  };
  function SampleSpriteGame(w, h) {
    if (w === void 0)
      w = 640.0;
    if (h === void 0)
      h = 480.0;
    this.w = w;
    this.h = h;
    this.bm = new BoxMuller();
    this.sprites = ArrayList_init();
    this.rockSizes = [0.06, 0.04, 0.02];
    this.velocityFactor = 1.0;
    this.rand = Random.Default;
  }
  SampleSpriteGame.prototype.asteroids = function () {
    var update = new Update(this.w, this.h);
    this.createRocks_za3lpa$();
    this.addShip_0();
    return new SpriteGame(update, this.sprites);
  };
  SampleSpriteGame.prototype.addShip_0 = function () {
    this.sprites.add_11rb$(SpriteShip_init(new Vec2d(this.w / 2, this.h / 2)));
  };
  SampleSpriteGame.prototype.createRocks_za3lpa$ = function (sizeIndex) {
    if (sizeIndex === void 0)
      sizeIndex = 0;
    var rocks = ArrayList_init();
    var nRocks = 10;
    while (rocks.size < nRocks) {
      var rock = this.randRock_1ph2q2$(sizeIndex);
      if (this.acceptRock_suyxuo$(rock.data()))
        rocks.add_11rb$(rock);
    }
    this.sprites.addAll_brywnq$(rocks);
  };
  SampleSpriteGame.prototype.acceptRock_suyxuo$ = function (sprite) {
    var tmp$ = (new Vec2d(this.w / 2, this.h / 2)).distanceTo_5lk9kw$(sprite.s);
    var a = this.w / 4;
    var b = this.h / 4;
    return tmp$ > Math_0.min(a, b);
  };
  SampleSpriteGame.prototype.randRock_1ph2q2$ = function (sizeIndex, s) {
    if (s === void 0)
      s = this.randPosition();
    var tmp$;
    var a = this.w;
    var b = this.h;
    var size = Math_0.min(a, b);
    var rad = size * this.rockSizes[sizeIndex];
    var poly = (new Asteroid(16, rad, rad * 0.3)).getPoly();
    var v = (new Vec2d(this.bm.nextGaussian(), this.bm.nextGaussian())).times_14dthe$(this.velocityFactor);
    tmp$ = XColor$Companion_getInstance().blue;
    var style = new XStyle(XColor$Companion_getInstance().yellow, void 0, tmp$, true, true);
    var ellipse = new XEllipse(s, rad * 2, rad * 2, style);
    poly.dStyle = style;
    var rotRate = 2 * this.bm.nextGaussian() * math.PI / 180;
    return new RockSprite(new SpriteData(poly, ObjectType$AlienObject_getInstance(), s, v, void 0, rotRate));
  };
  SampleSpriteGame.prototype.randPosition = function () {
    return new Vec2d(this.rand.nextDouble_14dthe$(this.w), this.rand.nextDouble_14dthe$(this.h));
  };
  SampleSpriteGame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SampleSpriteGame',
    interfaces: []
  };
  function SpriteGame(update, sprites, scoreX, nTicksX) {
    SpriteGame$Companion_getInstance();
    if (update === void 0)
      update = new Update(640.0, 480.0);
    if (sprites === void 0)
      sprites = ArrayList_init();
    if (scoreX === void 0)
      scoreX = 0.0;
    if (nTicksX === void 0)
      nTicksX = 0;
    this.update = update;
    this.sprites = sprites;
    this.scoreX = scoreX;
    this.nTicksX = nTicksX;
    this.actionMap = hashMapOf([to(0, MoveAction$Neutral_getInstance()), to(1, MoveAction$Left_getInstance()), to(2, MoveAction$Right_getInstance()), to(3, MoveAction$Fire_getInstance()), to(4, MoveAction$Thrust_getInstance())]);
  }
  function SpriteGame$Companion() {
    SpriteGame$Companion_instance = this;
    this.totalTicks_8be2vx$ = L0;
    this.typeMap = hashMapOf([to(ObjectType$Avatar_getInstance(), arrayListOf([ObjectType$AlienObject_getInstance()])), to(ObjectType$P1Missile_getInstance(), arrayListOf([ObjectType$AlienObject_getInstance()]))]);
    this.colliders = hashMapOf([to(ObjectType$AlienObject_getInstance(), rockHit)]);
  }
  SpriteGame$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SpriteGame$Companion_instance = null;
  function SpriteGame$Companion_getInstance() {
    if (SpriteGame$Companion_instance === null) {
      new SpriteGame$Companion();
    }return SpriteGame$Companion_instance;
  }
  SpriteGame.prototype.copy = function () {
    var tmp$;
    var listCopy = ArrayList_init();
    tmp$ = this.sprites.iterator();
    while (tmp$.hasNext()) {
      var s = tmp$.next();
      listCopy.add_11rb$(s.copy());
    }
    return new SpriteGame(this.update, listCopy, this.scoreX, this.nTicksX);
  };
  SpriteGame.prototype.totalTicks = function () {
    return SpriteGame$Companion_getInstance().totalTicks_8be2vx$;
  };
  SpriteGame.prototype.resetTotalTicks = function () {
    SpriteGame$Companion_getInstance().totalTicks_8be2vx$ = L0;
  };
  SpriteGame.prototype.randomInitialState = function () {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Not yet implemented');
  };
  SpriteGame.prototype.next_q5rwfd$ = function (actions) {
    return this.next_g5da3n$(AsteroidsGame$Companion_getInstance().actionAdapter.getAction_za3lpa$(actions[0]));
  };
  SpriteGame.prototype.next_g5da3n$ = function (action) {
    var tmp$, tmp$_0;
    var spriteMap = this.spriteMap_c9dmfm$(this.sprites);
    var safeList = ArrayList_init();
    safeList.addAll_brywnq$(this.sprites);
    this.sprites.clear();
    this.update.game = this;
    tmp$ = safeList.iterator();
    while (tmp$.hasNext()) {
      var sprite = tmp$.next();
      if (sprite.data().alive) {
        sprite.update_4nb1db$(action, this.update);
        this.checkCollisions_0(sprite, SpriteGame$Companion_getInstance().typeMap, spriteMap);
      }}
    var tmp$_1;
    tmp$_1 = AsteroidsGame$Companion_getInstance();
    tmp$_1.totalTicks_8be2vx$ = tmp$_1.totalTicks_8be2vx$.inc();
    this.nTicksX = this.nTicksX + 1 | 0;
    tmp$_0 = safeList.iterator();
    while (tmp$_0.hasNext()) {
      var s = tmp$_0.next();
      if (s.data().alive)
        this.sprites.add_11rb$(s);
    }
    return this;
  };
  SpriteGame.prototype.checkCollisions_0 = function (sprite, typeMap, spriteMap) {
    var tmp$, tmp$_0;
    var colliderTypes = typeMap.get_11rb$(sprite.data().type);
    if (colliderTypes == null)
      return;
    tmp$ = colliderTypes.iterator();
    while (tmp$.hasNext()) {
      var collider = tmp$.next();
      if ((tmp$_0 = spriteMap.get_11rb$(collider)) != null) {
        var tmp$_1;
        tmp$_1 = tmp$_0.iterator();
        while (tmp$_1.hasNext()) {
          var element = tmp$_1.next();
          var tmp$_2, tmp$_3;
          if (this.collides_0(sprite, element)) {
            sprite.data().alive = false;
            element.data().alive = false;
            (tmp$_2 = SpriteGame$Companion_getInstance().colliders.get_11rb$(sprite.data().type)) != null ? tmp$_2(sprite, element, this.update.game) : null;
            (tmp$_3 = SpriteGame$Companion_getInstance().colliders.get_11rb$(element.data().type)) != null ? tmp$_3(element, sprite, this.update.game) : null;
            return;
          }}
      }}
  };
  SpriteGame.prototype.collides_0 = function (a, b) {
    return a.data().alive && b.data().alive && a.data().s.distanceTo_5lk9kw$(b.data().s) <= a.data().geom.radius() + b.data().geom.radius();
  };
  SpriteGame.prototype.spriteMap_c9dmfm$ = function (sprites) {
    var tmp$, tmp$_0;
    var map = HashMap_init();
    tmp$ = sprites.iterator();
    while (tmp$.hasNext()) {
      var s = tmp$.next();
      if (map.get_11rb$(s.data().type) == null) {
        var key = s.data().type;
        var value = ArrayList_init();
        map.put_xwzc9p$(key, value);
      }(tmp$_0 = map.get_11rb$(s.data().type)) != null ? tmp$_0.add_11rb$(s) : null;
    }
    return map;
  };
  SpriteGame.prototype.nActions = function () {
    return AsteroidsGame$Companion_getInstance().useActionAdapter ? AsteroidsGame$Companion_getInstance().actionAdapter.actions.size : this.actionMap.size;
  };
  SpriteGame.prototype.score = function () {
    return this.scoreX;
  };
  SpriteGame.prototype.isTerminal = function () {
    return this.nTicksX > 0 && this.sprites.isEmpty();
  };
  SpriteGame.prototype.nTicks = function () {
    return this.nTicksX;
  };
  SpriteGame.prototype.addObject_vjoh43$ = function (sprite) {
    this.sprites.add_11rb$(sprite);
  };
  SpriteGame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SpriteGame',
    interfaces: [ExtendedAbstractGameState]
  };
  function SpriteEngineApp() {
    this.mp = null;
    this.game = null;
    this.controller = new AsteroidsKeyController();
    this.agent = new SimpleEvoAgent(void 0, 0.2, void 0, 100, 20, void 0, void 0, void 0, 0.98);
    this.agent = null;
  }
  SpriteEngineApp.prototype.getData = function () {
    var tmp$, tmp$_0;
    return Kotlin.isType(this.agent, RolloutDataSource) ? (tmp$_0 = (tmp$ = this.agent) == null || Kotlin.isType(tmp$, RolloutDataSource) ? tmp$ : throwCCE()) != null ? tmp$_0.getData() : null : null;
  };
  SpriteEngineApp.prototype.paint_vzjx8w$ = function (xg) {
    var tmp$, tmp$_0, tmp$_1;
    if (this.game == null) {
      this.game = (new SampleSpriteGame(xg.width(), xg.height())).asteroids();
      println('Made new game: ' + toString(this.game));
    }var safe = Kotlin.isType(tmp$_0 = (tmp$ = this.game) != null ? tmp$.copy() : null, SpriteGame) ? tmp$_0 : throwCCE();
    if (safe == null)
      return;
    var actionAI = this.agent != null && this.game != null ? (tmp$_1 = this.agent) != null ? tmp$_1.getAction_84v5ee$(ensureNotNull(this.game), 0) : null : null;
    if (actionAI == null) {
      safe.next_g5da3n$(this.controller.getAction_84v5ee$(safe, 0));
    } else {
      safe.next_q5rwfd$(new Int32Array([actionAI]));
    }
    var bgstyle = new XStyle(XColor$Companion_getInstance().black);
    xg.draw_dvdmun$(new XRect(xg.centre(), xg.width(), xg.height(), bgstyle));
    var tmp$_2;
    tmp$_2 = safe.sprites.iterator();
    while (tmp$_2.hasNext()) {
      var element = tmp$_2.next();
      xg.draw_dvdmun$(element.data().geom);
    }
    xg.draw_dvdmun$(this.statusText_0(xg));
    this.game = safe;
  };
  SpriteEngineApp.prototype.statusText_0 = function (xg) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var rocks = (tmp$_1 = (tmp$_0 = (tmp$ = this.game) != null ? tmp$.sprites : null) != null ? tmp$_0.size : null) != null ? tmp$_1 : 0;
    var avatar = 'N/A';
    var str = 'Score: ' + toString((tmp$_3 = (tmp$_2 = this.game) != null ? tmp$_2.scoreX : null) != null ? numberToInt(tmp$_3) : null) + ', [' + avatar + ', ' + rocks + ', ' + toString((tmp$_4 = this.game) != null ? tmp$_4.nTicks() : null) + ']';
    var text = new XText(str, new Vec2d(xg.width() / 2, xg.height() / 20));
    return text;
  };
  SpriteEngineApp.prototype.handleMouseEvent_x4hb96$ = function (e) {
    this.mp = e.s;
  };
  SpriteEngineApp.prototype.handleKeyEvent_wtf8cg$ = function (e) {
    this.controller.handleKeyEvent_wtf8cg$(e);
  };
  SpriteEngineApp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SpriteEngineApp',
    interfaces: [RolloutDataSource, XApp]
  };
  function Shape() {
  }
  Shape.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Shape',
    interfaces: []
  };
  function Asteroid(n, rad, radRange, angRange, rand) {
    if (radRange === void 0)
      radRange = rad * 0.7;
    if (angRange === void 0)
      angRange = 0.2 * math.PI / n;
    if (rand === void 0)
      rand = Random.Default;
    this.n = n;
    this.rad = rad;
    this.radRange = radRange;
    this.angRange = angRange;
    this.rand = rand;
  }
  Asteroid.prototype.getPoly = function () {
    var tmp$, tmp$_0, tmp$_1;
    var points = ArrayList_init();
    var angleStep = 2 * math.PI / this.n;
    tmp$ = this.n;
    for (var i = 0; i < tmp$; i++) {
      var theta = i * angleStep + this.rand.nextDouble_lu1900$(-this.angRange, this.angRange);
      var r = this.rad + this.rand.nextDouble_lu1900$(-this.radRange, this.radRange);
      points.add_11rb$(new Vec2d(r * Math_0.cos(theta), r * Math_0.sin(theta)));
    }
    tmp$_0 = XColor$Companion_getInstance().red;
    tmp$_1 = XColor$Companion_getInstance().green;
    var style = new XStyle(tmp$_0, XColor$Companion_getInstance().cyan, tmp$_1, true, false, 3.0);
    return new XPoly(new Vec2d(), points, style);
  };
  Asteroid.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Asteroid',
    interfaces: [Shape]
  };
  function Ship(l) {
    if (l === void 0)
      l = 10.0;
    this.l = l;
  }
  Ship.prototype.getPoly = function () {
    var tmp$, tmp$_0;
    var points = arrayListOf([new Vec2d(-this.l, this.l), new Vec2d(0.0, -this.l), new Vec2d(this.l, this.l), new Vec2d(0.0, 0.0)]);
    tmp$ = XColor$Companion_getInstance().white;
    tmp$_0 = XColor$Companion_getInstance().white;
    var style = new XStyle(tmp$, XColor$Companion_getInstance().cyan, tmp$_0, false, true, 2.0);
    return new XPoly(new Vec2d(), points, style);
  };
  Ship.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Ship',
    interfaces: [Shape]
  };
  function CaveActions(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function CaveActions_initFields() {
    CaveActions_initFields = function () {
    };
    CaveActions$Release_instance = new CaveActions('Release', 0);
    CaveActions$Attach_instance = new CaveActions('Attach', 1);
  }
  var CaveActions$Release_instance;
  function CaveActions$Release_getInstance() {
    CaveActions_initFields();
    return CaveActions$Release_instance;
  }
  var CaveActions$Attach_instance;
  function CaveActions$Attach_getInstance() {
    CaveActions_initFields();
    return CaveActions$Attach_instance;
  }
  CaveActions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CaveActions',
    interfaces: [Enum]
  };
  function CaveActions$values() {
    return [CaveActions$Release_getInstance(), CaveActions$Attach_getInstance()];
  }
  CaveActions.values = CaveActions$values;
  function CaveActions$valueOf(name) {
    switch (name) {
      case 'Release':
        return CaveActions$Release_getInstance();
      case 'Attach':
        return CaveActions$Attach_getInstance();
      default:throwISE('No enum constant games.caveswing.CaveActions.' + name);
    }
  }
  CaveActions.valueOf_61zpoe$ = CaveActions$valueOf;
  function CaveGameState() {
    CaveGameState$Companion_getInstance();
    this.state = new CaveGameInternalState();
  }
  CaveGameState.prototype.randomInitialState = function () {
    println('Resetting after score of ' + this.score());
    this.state = new CaveGameInternalState(this.state.params);
    return this;
  };
  CaveGameState.prototype.resetTotalTicks = function () {
    CaveGameState$Companion_getInstance().totalTicks = L0;
  };
  function CaveGameState$Companion() {
    CaveGameState$Companion_instance = this;
    this.totalTicks = L0;
  }
  CaveGameState$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CaveGameState$Companion_instance = null;
  function CaveGameState$Companion_getInstance() {
    if (CaveGameState$Companion_instance === null) {
      new CaveGameState$Companion();
    }return CaveGameState$Companion_instance;
  }
  CaveGameState.prototype.totalTicks = function () {
    return CaveGameState$Companion_getInstance().totalTicks;
  };
  CaveGameState.prototype.nTicks = function () {
    return this.state.nTicks;
  };
  CaveGameState.prototype.score = function () {
    var $receiver = this.state;
    var score = $receiver.avatar.s.x * $receiver.params.pointPerX + $receiver.avatar.s.y * $receiver.params.pointPerY - Kotlin.imul($receiver.nTicks, $receiver.params.costPerTick);
    if ($receiver.avatar.s.x >= $receiver.params.width) {
      score += $receiver.params.successBonus;
    }if ($receiver.avatar.s.y < 0 || $receiver.avatar.s.y >= $receiver.params.height) {
      score -= $receiver.params.failurePenalty;
    }score += $receiver.bonusScore;
    return Math_0.floor(score);
  };
  CaveGameState.prototype.isTerminal = function () {
    var $receiver = this.state;
    if ($receiver.gameOver)
      return $receiver.gameOver;
    if ($receiver.nTicks >= $receiver.params.maxTicks || !$receiver.map.bounds.contains_vi8533$($receiver.avatar.s)) {
      $receiver.gameOver = true;
    }return $receiver.gameOver;
  };
  CaveGameState.prototype.setup_vpbbpv$ = function (params) {
    if (params === void 0)
      params = this.state.params;
    var $receiver = this.state;
    $receiver.map = (new CaveMap()).setup_vpbbpv$(params);
    var s = new Vec2d(params.width / 10, params.height / 2);
    $receiver.avatar = new MovableObject(s, new Vec2d());
    return this;
  };
  CaveGameState.prototype.copy = function () {
    var cp = new CaveGameState();
    cp.state = this.state.deepCopy();
    return cp;
  };
  CaveGameState.prototype.collision_qlrit1$ = function (state) {
    var x = numberToInt(state.avatar.s.x / state.params.gridScale);
    var y = numberToInt(state.avatar.s.y / state.params.gridScale);
    var item = state.map.items.get_11rb$(new ItemPosition(x, y));
    if (item != null) {
      item.applyEffect_qlrit1$(state);
    }};
  CaveGameState.prototype.next_q5rwfd$ = function (actions) {
    var tmp$;
    if (this.isTerminal())
      return this;
    var $receiver = this.state;
    var tmp$_0, tmp$_1;
    this.collision_qlrit1$(this.state);
    var action = actions[0];
    var resultantForce = {v: $receiver.params.gravity};
    if (action === CaveActions$Attach_getInstance().ordinal) {
      if ($receiver.currentAnchor == null) {
        $receiver.currentAnchor = $receiver.map.getClosestAnchor_5lk9kw$($receiver.avatar.s);
      }if ((tmp$_0 = $receiver.currentAnchor) != null) {
        var tension = tmp$_0.minus_5lk9kw$($receiver.avatar.s).times_14dthe$($receiver.params.hooke);
        resultantForce.v = resultantForce.v.plus_5lk9kw$(tension);
      }} else if (action === CaveActions$Release_getInstance().ordinal) {
      $receiver.currentAnchor = null;
    }$receiver.avatar.update_6neuge$(resultantForce.v, $receiver.params.lossFactor);
    tmp$_1 = $receiver.nTicks, $receiver.nTicks = tmp$_1 + 1 | 0;
    tmp$ = CaveGameState$Companion_getInstance().totalTicks;
    CaveGameState$Companion_getInstance().totalTicks = tmp$.inc();
    return this;
  };
  CaveGameState.prototype.nActions = function () {
    return CaveActions$values().length;
  };
  CaveGameState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CaveGameState',
    interfaces: [ExtendedAbstractGameState]
  };
  function CaveMap() {
    this.anchors = ArrayList_init();
    this.items = hashMapOf([to(new ItemPosition(10, 5), new Fruit()), to(new ItemPosition(20, 7), new Bomb())]);
    this.bounds = new XRect(new Vec2d(), 100.0, 100.0);
  }
  CaveMap.prototype.getAnchor_za3lpa$ = function (index) {
    var tmp$;
    if (index < this.anchors.size) {
      tmp$ = this.anchors.get_za3lpa$(index);
    } else {
      tmp$ = null;
    }
    return tmp$;
  };
  CaveMap.prototype.getClosestAnchor_5lk9kw$ = function (s) {
    var tmp$;
    var picker = new Picker(Picker$Companion_getInstance().MIN_FIRST);
    tmp$ = this.anchors.iterator();
    while (tmp$.hasNext()) {
      var a = tmp$.next();
      picker.add_41hqm1$(a.distanceTo_5lk9kw$(s), a);
    }
    return picker.best;
  };
  CaveMap.prototype.setBounds_lu1900$ = function (width, height) {
    this.bounds = new XRect(new Vec2d(width / 2, height / 2), width, height);
    return this;
  };
  CaveMap.prototype.setAnchors_5wr77w$ = function (nAnchors, meanHeight) {
    this.anchors = ArrayList_init();
    var gap = this.bounds.w / (nAnchors + 1 | 0);
    var x = gap / 2;
    for (var i = 0; i < nAnchors; i++) {
      var s = new Vec2d(x, meanHeight);
      this.anchors.add_11rb$(s);
      x += gap;
    }
    return this;
  };
  CaveMap.prototype.setup_vpbbpv$ = function (params) {
    this.setBounds_lu1900$(params.width, params.height);
    this.setAnchors_5wr77w$(params.nAnchors, params.meanAnchorHeight);
    return this;
  };
  CaveMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CaveMap',
    interfaces: []
  };
  function ItemPosition(x, y) {
    this.x = x;
    this.y = y;
  }
  ItemPosition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ItemPosition',
    interfaces: []
  };
  ItemPosition.prototype.component1 = function () {
    return this.x;
  };
  ItemPosition.prototype.component2 = function () {
    return this.y;
  };
  ItemPosition.prototype.copy_vux9f0$ = function (x, y) {
    return new ItemPosition(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  ItemPosition.prototype.toString = function () {
    return 'ItemPosition(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  ItemPosition.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  ItemPosition.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function Item() {
    this.alive = true;
  }
  Item.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Item',
    interfaces: []
  };
  function Fruit() {
    Item.call(this);
  }
  Fruit.prototype.applyEffect_qlrit1$ = function (state) {
    if (this.alive) {
      state.bonusScore = state.bonusScore + 5000 | 0;
      this.alive = false;
    }};
  Fruit.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Fruit',
    interfaces: [Item]
  };
  function Bomb() {
    Item.call(this);
  }
  Bomb.prototype.applyEffect_qlrit1$ = function (state) {
    if (this.alive) {
      state.bonusScore = state.bonusScore - 5000 | 0;
      this.alive = false;
    }};
  Bomb.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bomb',
    interfaces: [Item]
  };
  function CaveGameInternalState(params, map, nTicks, avatar, gameOver, currentAnchor, bonusScore) {
    if (params === void 0)
      params = new CaveSwingParams();
    if (map === void 0)
      map = (new CaveMap()).setup_vpbbpv$(params);
    if (nTicks === void 0)
      nTicks = 0;
    if (avatar === void 0)
      avatar = new MovableObject();
    if (gameOver === void 0)
      gameOver = false;
    if (currentAnchor === void 0)
      currentAnchor = null;
    if (bonusScore === void 0)
      bonusScore = 0;
    this.params = params;
    this.map = map;
    this.nTicks = nTicks;
    this.avatar = avatar;
    this.gameOver = gameOver;
    this.currentAnchor = currentAnchor;
    this.bonusScore = bonusScore;
  }
  CaveGameInternalState.prototype.deepCopy = function () {
    var cgs = new CaveGameInternalState();
    cgs.avatar = this.avatar.copy();
    cgs.params = this.params.copy_dqovla$();
    cgs.map = this.map;
    cgs.currentAnchor = this.currentAnchor;
    cgs.nTicks = this.nTicks;
    cgs.gameOver = this.gameOver;
    cgs.bonusScore = this.bonusScore;
    return cgs;
  };
  CaveGameInternalState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CaveGameInternalState',
    interfaces: []
  };
  CaveGameInternalState.prototype.component1 = function () {
    return this.params;
  };
  CaveGameInternalState.prototype.component2 = function () {
    return this.map;
  };
  CaveGameInternalState.prototype.component3 = function () {
    return this.nTicks;
  };
  CaveGameInternalState.prototype.component4 = function () {
    return this.avatar;
  };
  CaveGameInternalState.prototype.component5 = function () {
    return this.gameOver;
  };
  CaveGameInternalState.prototype.component6 = function () {
    return this.currentAnchor;
  };
  CaveGameInternalState.prototype.component7 = function () {
    return this.bonusScore;
  };
  CaveGameInternalState.prototype.copy_1x6lyl$ = function (params, map, nTicks, avatar, gameOver, currentAnchor, bonusScore) {
    return new CaveGameInternalState(params === void 0 ? this.params : params, map === void 0 ? this.map : map, nTicks === void 0 ? this.nTicks : nTicks, avatar === void 0 ? this.avatar : avatar, gameOver === void 0 ? this.gameOver : gameOver, currentAnchor === void 0 ? this.currentAnchor : currentAnchor, bonusScore === void 0 ? this.bonusScore : bonusScore);
  };
  CaveGameInternalState.prototype.toString = function () {
    return 'CaveGameInternalState(params=' + Kotlin.toString(this.params) + (', map=' + Kotlin.toString(this.map)) + (', nTicks=' + Kotlin.toString(this.nTicks)) + (', avatar=' + Kotlin.toString(this.avatar)) + (', gameOver=' + Kotlin.toString(this.gameOver)) + (', currentAnchor=' + Kotlin.toString(this.currentAnchor)) + (', bonusScore=' + Kotlin.toString(this.bonusScore)) + ')';
  };
  CaveGameInternalState.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.params) | 0;
    result = result * 31 + Kotlin.hashCode(this.map) | 0;
    result = result * 31 + Kotlin.hashCode(this.nTicks) | 0;
    result = result * 31 + Kotlin.hashCode(this.avatar) | 0;
    result = result * 31 + Kotlin.hashCode(this.gameOver) | 0;
    result = result * 31 + Kotlin.hashCode(this.currentAnchor) | 0;
    result = result * 31 + Kotlin.hashCode(this.bonusScore) | 0;
    return result;
  };
  CaveGameInternalState.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.params, other.params) && Kotlin.equals(this.map, other.map) && Kotlin.equals(this.nTicks, other.nTicks) && Kotlin.equals(this.avatar, other.avatar) && Kotlin.equals(this.gameOver, other.gameOver) && Kotlin.equals(this.currentAnchor, other.currentAnchor) && Kotlin.equals(this.bonusScore, other.bonusScore)))));
  };
  function CaveSwingApp() {
    this.gameState = new CaveGameState();
    this.gameView = new CaveView();
    this.player = new SimpleEvoAgent();
  }
  CaveSwingApp.prototype.paint_vzjx8w$ = function (xg) {
    var action = this.player.getAction_84v5ee$(this.gameState, 0);
    this.gameState.next_q5rwfd$(new Int32Array([action]));
    if (this.gameState.isTerminal())
      this.gameState.randomInitialState();
    this.gameView.setupGameState_5ki6rs$(this.gameState);
    this.gameView.draw_vzjx8w$(xg);
  };
  CaveSwingApp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CaveSwingApp',
    interfaces: [XApp]
  };
  function CaveSwingParams(maxTicks, gravity, hooke, lossFactor, width, height, nAnchors, gridScale, meanAnchorHeight, successBonus, failurePenalty, pointPerX, pointPerY, costPerTick, sandpit, random) {
    if (maxTicks === void 0)
      maxTicks = 1000;
    if (gravity === void 0)
      gravity = new Vec2d(0.0, 0.4);
    if (hooke === void 0)
      hooke = 0.02;
    if (lossFactor === void 0)
      lossFactor = 0.9999;
    if (width === void 0)
      width = 1500;
    if (height === void 0)
      height = 350;
    if (nAnchors === void 0)
      nAnchors = 10;
    if (gridScale === void 0)
      gridScale = 20;
    if (meanAnchorHeight === void 0)
      meanAnchorHeight = height * 0.4;
    if (successBonus === void 0)
      successBonus = 1000;
    if (failurePenalty === void 0)
      failurePenalty = 1000;
    if (pointPerX === void 0)
      pointPerX = 10;
    if (pointPerY === void 0)
      pointPerY = -10;
    if (costPerTick === void 0)
      costPerTick = 10;
    if (sandpit === void 0)
      sandpit = 0.9;
    if (random === void 0)
      random = Random.Default;
    this.maxTicks = maxTicks;
    this.gravity = gravity;
    this.hooke = hooke;
    this.lossFactor = lossFactor;
    this.width = width;
    this.height = height;
    this.nAnchors = nAnchors;
    this.gridScale = gridScale;
    this.meanAnchorHeight = meanAnchorHeight;
    this.successBonus = successBonus;
    this.failurePenalty = failurePenalty;
    this.pointPerX = pointPerX;
    this.pointPerY = pointPerY;
    this.costPerTick = costPerTick;
    this.sandpit = sandpit;
    this.random = random;
  }
  CaveSwingParams.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CaveSwingParams',
    interfaces: []
  };
  CaveSwingParams.prototype.component1 = function () {
    return this.maxTicks;
  };
  CaveSwingParams.prototype.component2 = function () {
    return this.gravity;
  };
  CaveSwingParams.prototype.component3 = function () {
    return this.hooke;
  };
  CaveSwingParams.prototype.component4 = function () {
    return this.lossFactor;
  };
  CaveSwingParams.prototype.component5 = function () {
    return this.width;
  };
  CaveSwingParams.prototype.component6 = function () {
    return this.height;
  };
  CaveSwingParams.prototype.component7 = function () {
    return this.nAnchors;
  };
  CaveSwingParams.prototype.component8 = function () {
    return this.gridScale;
  };
  CaveSwingParams.prototype.component9 = function () {
    return this.meanAnchorHeight;
  };
  CaveSwingParams.prototype.component10 = function () {
    return this.successBonus;
  };
  CaveSwingParams.prototype.component11 = function () {
    return this.failurePenalty;
  };
  CaveSwingParams.prototype.component12 = function () {
    return this.pointPerX;
  };
  CaveSwingParams.prototype.component13 = function () {
    return this.pointPerY;
  };
  CaveSwingParams.prototype.component14 = function () {
    return this.costPerTick;
  };
  CaveSwingParams.prototype.component15 = function () {
    return this.sandpit;
  };
  CaveSwingParams.prototype.component16 = function () {
    return this.random;
  };
  CaveSwingParams.prototype.copy_dqovla$ = function (maxTicks, gravity, hooke, lossFactor, width, height, nAnchors, gridScale, meanAnchorHeight, successBonus, failurePenalty, pointPerX, pointPerY, costPerTick, sandpit, random) {
    return new CaveSwingParams(maxTicks === void 0 ? this.maxTicks : maxTicks, gravity === void 0 ? this.gravity : gravity, hooke === void 0 ? this.hooke : hooke, lossFactor === void 0 ? this.lossFactor : lossFactor, width === void 0 ? this.width : width, height === void 0 ? this.height : height, nAnchors === void 0 ? this.nAnchors : nAnchors, gridScale === void 0 ? this.gridScale : gridScale, meanAnchorHeight === void 0 ? this.meanAnchorHeight : meanAnchorHeight, successBonus === void 0 ? this.successBonus : successBonus, failurePenalty === void 0 ? this.failurePenalty : failurePenalty, pointPerX === void 0 ? this.pointPerX : pointPerX, pointPerY === void 0 ? this.pointPerY : pointPerY, costPerTick === void 0 ? this.costPerTick : costPerTick, sandpit === void 0 ? this.sandpit : sandpit, random === void 0 ? this.random : random);
  };
  CaveSwingParams.prototype.toString = function () {
    return 'CaveSwingParams(maxTicks=' + Kotlin.toString(this.maxTicks) + (', gravity=' + Kotlin.toString(this.gravity)) + (', hooke=' + Kotlin.toString(this.hooke)) + (', lossFactor=' + Kotlin.toString(this.lossFactor)) + (', width=' + Kotlin.toString(this.width)) + (', height=' + Kotlin.toString(this.height)) + (', nAnchors=' + Kotlin.toString(this.nAnchors)) + (', gridScale=' + Kotlin.toString(this.gridScale)) + (', meanAnchorHeight=' + Kotlin.toString(this.meanAnchorHeight)) + (', successBonus=' + Kotlin.toString(this.successBonus)) + (', failurePenalty=' + Kotlin.toString(this.failurePenalty)) + (', pointPerX=' + Kotlin.toString(this.pointPerX)) + (', pointPerY=' + Kotlin.toString(this.pointPerY)) + (', costPerTick=' + Kotlin.toString(this.costPerTick)) + (', sandpit=' + Kotlin.toString(this.sandpit)) + (', random=' + Kotlin.toString(this.random)) + ')';
  };
  CaveSwingParams.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.maxTicks) | 0;
    result = result * 31 + Kotlin.hashCode(this.gravity) | 0;
    result = result * 31 + Kotlin.hashCode(this.hooke) | 0;
    result = result * 31 + Kotlin.hashCode(this.lossFactor) | 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    result = result * 31 + Kotlin.hashCode(this.nAnchors) | 0;
    result = result * 31 + Kotlin.hashCode(this.gridScale) | 0;
    result = result * 31 + Kotlin.hashCode(this.meanAnchorHeight) | 0;
    result = result * 31 + Kotlin.hashCode(this.successBonus) | 0;
    result = result * 31 + Kotlin.hashCode(this.failurePenalty) | 0;
    result = result * 31 + Kotlin.hashCode(this.pointPerX) | 0;
    result = result * 31 + Kotlin.hashCode(this.pointPerY) | 0;
    result = result * 31 + Kotlin.hashCode(this.costPerTick) | 0;
    result = result * 31 + Kotlin.hashCode(this.sandpit) | 0;
    result = result * 31 + Kotlin.hashCode(this.random) | 0;
    return result;
  };
  CaveSwingParams.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.maxTicks, other.maxTicks) && Kotlin.equals(this.gravity, other.gravity) && Kotlin.equals(this.hooke, other.hooke) && Kotlin.equals(this.lossFactor, other.lossFactor) && Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height) && Kotlin.equals(this.nAnchors, other.nAnchors) && Kotlin.equals(this.gridScale, other.gridScale) && Kotlin.equals(this.meanAnchorHeight, other.meanAnchorHeight) && Kotlin.equals(this.successBonus, other.successBonus) && Kotlin.equals(this.failurePenalty, other.failurePenalty) && Kotlin.equals(this.pointPerX, other.pointPerX) && Kotlin.equals(this.pointPerY, other.pointPerY) && Kotlin.equals(this.costPerTick, other.costPerTick) && Kotlin.equals(this.sandpit, other.sandpit) && Kotlin.equals(this.random, other.random)))));
  };
  function CaveView() {
    CaveView$Companion_getInstance();
    this.params = null;
    this.gameState = null;
    this.internalState = null;
    this.bg = XColor$Companion_getInstance().black;
    this.deadZone = XColor$Companion_getInstance().gray;
    this.goalZone = XColor$Companion_getInstance().green;
    this.finishZone = new XColor(0.7, 1.0, 1.0);
    this.sandpit = XColor$Companion_getInstance().yellow;
    this.nStars = 200;
    this.rad = 10;
    this.anchorColor = XColor$Companion_getInstance().magenta;
    this.avatarColor = XColor$Companion_getInstance().pink;
    this.fruitColor = XColor$Companion_getInstance().green;
    this.scoreFontSize = 16;
    this.planetFontSize = 14;
    this.scrollView = true;
    this.scrollWidth = 600;
    this.playouts = ArrayList_init();
    this.scale = 1.0;
    this.avatarStyle = new XStyle(this.avatarColor, void 0, void 0, false);
    this.anchorPlain = new XStyle(this.anchorColor, void 0, void 0, false);
    this.anchorSelected = new XStyle(XColor$Companion_getInstance().white, void 0, XColor$Companion_getInstance().red, void 0, void 0, 2.0);
    this.nPaints = 0;
    this.centre = new Vec2d();
    this.stars = ArrayList_init();
  }
  CaveView.prototype.setupGameState_5ki6rs$ = function (gameState) {
    this.gameState = gameState;
    this.internalState = gameState.state;
    this.setParams_bmtofm$(ensureNotNull(this.internalState).params);
    return this;
  };
  CaveView.prototype.setParams_bmtofm$ = function (params) {
    this.params = params;
    this.setStars_0();
    return this;
  };
  CaveView.prototype.setStars_0 = function () {
    var tmp$;
    tmp$ = this.nStars;
    for (var i = 0; i < tmp$; i++) {
    }
  };
  Object.defineProperty(CaveView.prototype, 'title', {
    configurable: true,
    get: function () {
      return ensureNotNull(this.internalState).nTicks.toString() + ' : ' + toString(this.nPaints);
    }
  });
  CaveView.prototype.draw_vzjx8w$ = function (xg) {
    var tmp$;
    if (!((tmp$ = xg.centre()) != null ? tmp$.equals(this.centre) : null)) {
      this.centre = xg.centre();
      this.placeStars_0(xg);
    }xg.draw_dvdmun$(new XRect(xg.centre(), xg.width(), xg.height()));
    var iState = this.internalState;
    if (iState == null)
      return;
    var xScroll = -iState.avatar.s.x + (this.scrollWidth / 2 | 0);
    if (this.scrollView) {
      xg.setTranslate_lu1900$(xScroll, 0.0);
    }this.paintStars_0(xg);
    this.paintZones_0(xg);
    this.paintAnchors_0(xg, iState.avatar.s, iState.map.anchors);
    this.paintAvatar_0(xg, iState.avatar.s, iState.currentAnchor);
    this.paintItems_0(xg);
    if (this.scrollView) {
      xg.setTranslate_lu1900$(-xScroll, 0.0);
    }this.paintScore_0(xg);
    this.nPaints = this.nPaints + 1 | 0;
  };
  CaveView.prototype.placeStars_0 = function (xg) {
    var tmp$;
    var nStars = 100;
    this.stars.clear();
    if ((tmp$ = this.params) != null) {
      var w = tmp$.width;
      var h = tmp$.height;
      for (var index = 0; index < nStars; index++) {
        var s = new Vec2d(CaveView$Companion_getInstance().rand.nextDouble_14dthe$(w), CaveView$Companion_getInstance().rand.nextDouble_14dthe$(h));
        var star = new Star(s);
        this.stars.add_11rb$(star);
      }
    }};
  CaveView.prototype.paintAnchors_0 = function (xg, avatar, anchors) {
    var picker = new Picker(Picker$Companion_getInstance().MIN_FIRST);
    var tmp$;
    tmp$ = anchors.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      picker.add_41hqm1$(element.distanceTo_5lk9kw$(avatar), element);
    }
    var closest = picker.best;
    var tmp$_0;
    tmp$_0 = anchors.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      xg.draw_dvdmun$(new XEllipse(element_0, 10.0, 10.0, this.anchorPlain));
    }
    if (closest != null) {
      xg.draw_dvdmun$(new XEllipse(closest, 10.0, 10.0, this.anchorSelected));
    }};
  CaveView.prototype.paintItems_0 = function (xg) {
  };
  CaveView.prototype.paintAvatar_0 = function (xg, s, anchor) {
    var disc = new XEllipse(s, 10.0, 10.0, this.avatarStyle);
    xg.draw_dvdmun$(disc);
    if (anchor != null) {
      xg.draw_dvdmun$(new XLine(s, anchor, CaveView$Companion_getInstance().ropeStyle));
    }};
  CaveView.prototype.paintScore_0 = function (xg) {
    var tmp$;
    if ((tmp$ = this.gameState) != null) {
      var str = 'Score: ' + numberToInt(tmp$.score());
      var style = new TStyle(XColor$Companion_getInstance().white, void 0, xg.height() / 20);
      var xText = new XText(str, new Vec2d(xg.centre().x, xg.height() / 10), style);
      xg.draw_dvdmun$(xText);
    }};
  CaveView.prototype.paintStars_0 = function (xg) {
    var tmp$;
    tmp$ = this.stars.iterator();
    while (tmp$.hasNext()) {
      var star = tmp$.next();
      star.draw_vzjx8w$(xg);
    }
  };
  CaveView.prototype.paintZones_0 = function (xg) {
    var tmp$;
    if ((tmp$ = this.params) != null) {
      var h = xg.height();
      var deadStyle = new XStyle(this.deadZone, void 0, void 0, false);
      var deadZoneRect = new XRect(new Vec2d((-CaveView$Companion_getInstance().zoneWidth | 0) / 2.0, h / 2), CaveView$Companion_getInstance().zoneWidth, h, deadStyle);
      xg.draw_dvdmun$(deadZoneRect);
      var topRect = new XRect(new Vec2d(tmp$.width / 2.0, CaveView$Companion_getInstance().borderRatio * h / 2), tmp$.width, h * CaveView$Companion_getInstance().borderRatio, deadStyle);
      xg.draw_dvdmun$(topRect);
      var bottomRect = new XRect(new Vec2d(tmp$.width / 2.0, h - CaveView$Companion_getInstance().borderRatio * h / 2), tmp$.width, h * CaveView$Companion_getInstance().borderRatio, deadStyle);
      xg.draw_dvdmun$(bottomRect);
      deadStyle.fg = this.finishZone;
      var finishRect = new XRect(new Vec2d(tmp$.width + CaveView$Companion_getInstance().zoneWidth / 2.0, h / 2), CaveView$Companion_getInstance().zoneWidth, xg.height(), deadStyle);
      xg.draw_dvdmun$(finishRect);
    }};
  function CaveView$Companion() {
    CaveView$Companion_instance = this;
    this.ropeColor = new XColor(0.6, 0.12, 0.12);
    this.ropeStyle = new XStyle(this.ropeColor, void 0, void 0, void 0, void 0, 4.0);
    this.zoneWidth = 400;
    this.goalRatio = 10;
    this.borderRatio = 0.05;
    this.rand = Random_0(1);
  }
  CaveView$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CaveView$Companion_instance = null;
  function CaveView$Companion_getInstance() {
    if (CaveView$Companion_instance === null) {
      new CaveView$Companion();
    }return CaveView$Companion_instance;
  }
  CaveView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CaveView',
    interfaces: []
  };
  function Star(s) {
    this.s = s;
    this.inc = 0.05 * (1.0 + CaveView$Companion_getInstance().rand.nextDouble() * 0.5);
    this.shine = CaveView$Companion_getInstance().rand.nextDouble_14dthe$(2 * math.PI);
  }
  Star.prototype.draw_vzjx8w$ = function (xg) {
    this.shine += this.inc;
    var x = this.shine;
    var bright = (1 + Math_0.sin(x)) / 2;
    var col = new XColor(bright, 1 - bright, bright);
    var rect = new XEllipse(this.s, 3.0, 3.0, new XStyle(col, void 0, void 0, false));
    xg.draw_dvdmun$(rect);
  };
  Star.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Star',
    interfaces: []
  };
  function MovableObject(s, v) {
    if (s === void 0)
      s = new Vec2d();
    if (v === void 0)
      v = new Vec2d();
    this.s = s;
    this.v = v;
  }
  MovableObject.prototype.update_6neuge$ = function (resultantForce, lossFactor) {
    this.v = this.v.plus_5lk9kw$(resultantForce);
    this.s = this.s.plus_5lk9kw$(this.v);
    this.v = this.v.times_14dthe$(lossFactor);
    return this;
  };
  MovableObject.prototype.toString = function () {
    return this.s.toString() + ' : ' + this.v;
  };
  MovableObject.prototype.copy = function () {
    return new MovableObject(this.s.copy_lu1900$(), this.v.copy_lu1900$());
  };
  MovableObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MovableObject',
    interfaces: []
  };
  MovableObject.prototype.component1 = function () {
    return this.s;
  };
  MovableObject.prototype.component2 = function () {
    return this.v;
  };
  MovableObject.prototype.copy_yw3f10$ = function (s, v) {
    return new MovableObject(s === void 0 ? this.s : s, v === void 0 ? this.v : v);
  };
  MovableObject.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.s) | 0;
    result = result * 31 + Kotlin.hashCode(this.v) | 0;
    return result;
  };
  MovableObject.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.s, other.s) && Kotlin.equals(this.v, other.v)))));
  };
  function GriddleControl() {
  }
  GriddleControl.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'GriddleControl',
    interfaces: []
  };
  function DefaultControl() {
  }
  DefaultControl.prototype.getSeed = function () {
    return L_1;
  };
  DefaultControl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultControl',
    interfaces: [GriddleControl]
  };
  function GriddleController(control) {
    if (control === void 0)
      control = new DefaultControl();
    this.control = control;
    this.game = new GriddleGame(this.control);
    this.gv = new GriddleView(this.game.nCols, this.game.nRows);
    this.xgTemp = null;
    this.testData_0();
  }
  GriddleController.prototype.loadWords_mhpeer$ = function (words) {
    this.game.dict.addWords_mhpeer$(words);
  };
  GriddleController.prototype.testData_0 = function () {
    this.gv.setGrid_tpqcw7$(this.game.grid());
  };
  GriddleController.prototype.paint_vzjx8w$ = function (xg) {
    this.gv.paint_vzjx8w$(xg);
    this.xgTemp = xg;
  };
  GriddleController.prototype.handleMouseEvent_x4hb96$ = function (e) {
    if (e.t === XMouseEventType$Down_getInstance()) {
      var cell = this.gv.getGridCell_5lk9kw$(e.s);
      this.game.nextState_5u5kb7$(cell);
      this.gv.setData_e9vbbz$(this.game.grid(), unboxChar(this.game.current), this.game.score());
      var xg = this.xgTemp;
      if (xg != null) {
        this.gv.paint_vzjx8w$(xg);
      }}};
  GriddleController.prototype.handleKeyEvent_wtf8cg$ = function (e) {
  };
  GriddleController.prototype.newGame = function () {
    this.game.newGame();
    this.gv.setData_e9vbbz$(this.game.grid(), unboxChar(this.game.current), this.game.score());
    var xg = this.xgTemp;
    if (xg != null) {
      this.gv.paint_vzjx8w$(xg);
    }};
  GriddleController.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GriddleController',
    interfaces: [XApp]
  };
  function GriddleState(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function GriddleState_initFields() {
    GriddleState_initFields = function () {
    };
    GriddleState$Ready_instance = new GriddleState('Ready', 0);
    GriddleState$GameOn_instance = new GriddleState('GameOn', 1);
    GriddleState$GameOver_instance = new GriddleState('GameOver', 2);
  }
  var GriddleState$Ready_instance;
  function GriddleState$Ready_getInstance() {
    GriddleState_initFields();
    return GriddleState$Ready_instance;
  }
  var GriddleState$GameOn_instance;
  function GriddleState$GameOn_getInstance() {
    GriddleState_initFields();
    return GriddleState$GameOn_instance;
  }
  var GriddleState$GameOver_instance;
  function GriddleState$GameOver_getInstance() {
    GriddleState_initFields();
    return GriddleState$GameOver_instance;
  }
  GriddleState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GriddleState',
    interfaces: [Enum]
  };
  function GriddleState$values() {
    return [GriddleState$Ready_getInstance(), GriddleState$GameOn_getInstance(), GriddleState$GameOver_getInstance()];
  }
  GriddleState.values = GriddleState$values;
  function GriddleState$valueOf(name) {
    switch (name) {
      case 'Ready':
        return GriddleState$Ready_getInstance();
      case 'GameOn':
        return GriddleState$GameOn_getInstance();
      case 'GameOver':
        return GriddleState$GameOver_getInstance();
      default:throwISE('No enum constant games.griddle.GriddleState.' + name);
    }
  }
  GriddleState.valueOf_61zpoe$ = GriddleState$valueOf;
  function GriddleGame(control) {
    GriddleGame$Companion_getInstance();
    if (control === void 0)
      control = new DefaultControl();
    this.control = control;
    this.dict = new TrieDict();
    this.gridScan = new GridScan();
    this.gridScan.dict = this.dict;
    this.state = GriddleState$Ready_getInstance();
    this.nCols = 5;
    this.nRows = 5;
    this.a = this.emptyGrid();
    this.deck = (new StatDeck()).getDeck_s8cxhz$(this.control.getSeed());
    this.current = toBoxedChar(63);
    this.currentScore = 0;
    this.words = ArrayList_init();
    this.enableAI = true;
  }
  function GriddleGame$Companion() {
    GriddleGame$Companion_instance = this;
    this.vacant = toBoxedChar(32);
  }
  GriddleGame$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GriddleGame$Companion_instance = null;
  function GriddleGame$Companion_getInstance() {
    if (GriddleGame$Companion_instance === null) {
      new GriddleGame$Companion();
    }return GriddleGame$Companion_instance;
  }
  GriddleGame.prototype.emptyGrid = function () {
    var array = Array_0(this.nCols);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var tmp$_0;
      var array_0 = charArray(this.nRows, null);
      tmp$_0 = array_0.length - 1 | 0;
      for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
        var value = unboxChar(GriddleGame$Companion_getInstance().vacant);
        array_0[i_0] = value;
      }
      array[i] = array_0;
    }
    return array;
  };
  GriddleGame.prototype.grid = function () {
    return this.a;
  };
  GriddleGame.prototype.nextState_5u5kb7$ = function (cell) {
    if (cell === void 0)
      cell = null;
    switch (this.state.name) {
      case 'Ready':
        var letter = unboxChar(this.deck.next());
        if (letter != null) {
          this.current = toBoxedChar(letter);
          this.state = GriddleState$GameOn_getInstance();
        } else {
          this.deck = (new StatDeck()).getDeck_s8cxhz$(this.control.getSeed());
        }

        break;
      case 'GameOn':
        var playedCell = cell;
        if (cell == null && this.enableAI) {
          var player = new MCPlayer(this.dict);
          playedCell = player.getAction_x2ua0m$(new LetterGridModel(this.a), this.deck, unboxChar(this.current));
        }
        if (playedCell != null && this.a[playedCell.x][playedCell.y] === unboxChar(GriddleGame$Companion_getInstance().vacant)) {
          this.placeLetter_svxxs3$(playedCell, unboxChar(this.current));
          var letter_0 = unboxChar(this.deck.next());
          if (letter_0 != null)
            this.current = toBoxedChar(letter_0);
          else {
            this.current = toBoxedChar(63);
            this.state = GriddleState$GameOver_getInstance();
          }
        }
        break;
      case 'GameOver':
        this.state = GriddleState$Ready_getInstance();
        this.a = this.emptyGrid();
        this.deck = (new StatDeck()).getDeck_s8cxhz$(this.control.getSeed());
        break;
    }
  };
  GriddleGame.prototype.placeLetter_svxxs3$ = function (cell, letter) {
    this.a[cell.x][cell.y] = letter;
    this.words = this.gridScan.findWords_lyd8co$(this.a);
    var tmp$;
    var sum = 0;
    tmp$ = this.words.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      sum = sum + element.score() | 0;
    }
    this.currentScore = sum;
  };
  GriddleGame.prototype.score = function () {
    return this.currentScore;
  };
  GriddleGame.prototype.calcScore_lyd8co$ = function (grid) {
    var tmp$;
    var sum = 0;
    tmp$ = this.gridScan.findWords_lyd8co$(grid).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      sum = sum + element.score() | 0;
    }
    return sum;
  };
  GriddleGame.prototype.newGame = function () {
    this.state = GriddleState$Ready_getInstance();
    this.a = this.emptyGrid();
    this.deck = (new StatDeck()).getDeck_s8cxhz$(this.control.getSeed());
    this.a = this.emptyGrid();
    this.deck = (new StatDeck()).getDeck_s8cxhz$(this.control.getSeed());
    this.current = toBoxedChar(63);
    this.currentScore = 0;
  };
  GriddleGame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GriddleGame',
    interfaces: []
  };
  function GridCell(x, y) {
    this.x = x;
    this.y = y;
  }
  GridCell.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridCell',
    interfaces: []
  };
  GridCell.prototype.component1 = function () {
    return this.x;
  };
  GridCell.prototype.component2 = function () {
    return this.y;
  };
  GridCell.prototype.copy_vux9f0$ = function (x, y) {
    return new GridCell(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  GridCell.prototype.toString = function () {
    return 'GridCell(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  GridCell.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  GridCell.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function GriddleView(nCols, nRows) {
    GriddleView$Companion_getInstance();
    this.nCols = nCols;
    this.nRows = nRows;
    this.count = 0;
    this.a = null;
    this.w = 1.0;
    this.h = 1.0;
    this.cellSize = 50.0;
    this.centre = new Vec2d();
    this.messageText = null;
    this.scoreText = new XText('', new Vec2d(), new TStyle(), new XStyle());
    this.message = '?';
    this.score = 0;
  }
  GriddleView.prototype.paint_vzjx8w$ = function (xg) {
    this.calcCellSize_vzjx8w$(xg);
    this.drawBackground_vzjx8w$(xg);
    this.draw_w2bsgl$(xg, this.a);
    this.drawMessage_rhlq3t$(xg, this.messageText);
    this.drawScore_qlxduy$(xg, this.scoreText);
  };
  GriddleView.prototype.calcCellSize_vzjx8w$ = function (xg) {
    this.centre = new Vec2d(xg.width() / 2, xg.height() / 2);
    var nc = this.nCols;
    var nr = this.nRows;
    if (xg.width() > xg.height()) {
      nc = nc + 1 | 0;
    } else {
      nr = nr + 1 | 0;
    }
    var colSize = xg.width() / nc;
    var rowSize = xg.height() / nr;
    this.cellSize = Math_0.min(colSize, rowSize);
    if (xg.width() > xg.height()) {
      var spare = xg.width() - this.nCols * this.cellSize;
      var cTile = new Vec2d(this.cellSize * this.nCols + spare / 2, 3 * xg.height() / 4);
      var cScore = new Vec2d(this.cellSize * this.nCols + spare / 2, xg.height() / 4);
      this.messageText = new XText(this.message, cTile, new TStyle(void 0, void 0, spare / 2), new XStyle());
      this.scoreText = new XText(this.score.toString(), cScore, new TStyle(void 0, void 0, spare / 2), new XStyle());
    } else {
      var spare_0 = xg.height() - this.nRows * this.cellSize;
      var cTile_0 = new Vec2d(xg.width() / 2, this.cellSize * this.nRows + 3 * spare_0 / 4);
      var cScore_0 = new Vec2d(xg.width() / 2, this.cellSize * this.nRows + spare_0 / 4);
      this.messageText = new XText(this.message, cTile_0, new TStyle(void 0, void 0, spare_0 / 2), new XStyle());
      this.scoreText = new XText(this.score.toString(), cScore_0, new TStyle(void 0, void 0, spare_0 / 2), new XStyle());
    }
  };
  GriddleView.prototype.drawScore_qlxduy$ = function (xg, scoreText) {
    scoreText.str = this.score.toString();
    xg.draw_dvdmun$(scoreText);
  };
  GriddleView.prototype.drawMessage_rhlq3t$ = function (xg, text) {
    if (text != null)
      xg.draw_dvdmun$(text);
  };
  GriddleView.prototype.setData_e9vbbz$ = function (a, ch, score) {
    if (score === void 0)
      score = 0;
    this.setGrid_tpqcw7$(a);
    this.setLetter_s8itvh$(ch);
    this.score = score;
  };
  GriddleView.prototype.setGrid_tpqcw7$ = function (a) {
    this.a = a;
  };
  GriddleView.prototype.setLetter_s8itvh$ = function (ch) {
    this.message = String.fromCharCode(ch);
  };
  GriddleView.prototype.drawBackground_vzjx8w$ = function (xg) {
    var style = new XStyle();
    var rect = new XRect(this.centre, xg.width(), xg.height(), style);
    style.fg = XColor$Companion_getInstance().black;
    xg.draw_dvdmun$(rect);
  };
  GriddleView.prototype.draw_w2bsgl$ = function (xg, a) {
    var tmp$, tmp$_0;
    if (a == null)
      return;
    var style = new XStyle();
    var tStyle = new TStyle(void 0, void 0, this.cellSize);
    var text = new XText(' ', this.centre, tStyle, style);
    tmp$ = this.nCols;
    for (var i = 0; i < tmp$; i++) {
      tmp$_0 = this.nRows;
      for (var j = 0; j < tmp$_0; j++) {
        var centre = new Vec2d((i + 0.5) * this.cellSize, (j + 0.5) * this.cellSize);
        (new LetterTile()).draw_pxm805$(xg, centre, this.cellSize, a[i][j]);
      }
    }
  };
  GriddleView.prototype.getGridCell_5lk9kw$ = function (s) {
    var col = numberToInt(s.x / this.cellSize);
    var row = numberToInt(s.y / this.cellSize);
    if (row < this.nRows && col < this.nCols)
      return new GridCell(col, row);
    else
      return null;
  };
  function GriddleView$Companion() {
    GriddleView$Companion_instance = this;
    this.frame = XColor$Companion_getInstance().blue;
  }
  GriddleView$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GriddleView$Companion_instance = null;
  function GriddleView$Companion_getInstance() {
    if (GriddleView$Companion_instance === null) {
      new GriddleView$Companion();
    }return GriddleView$Companion_instance;
  }
  GriddleView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GriddleView',
    interfaces: []
  };
  function LetterTile() {
    this.size = 0.9;
  }
  LetterTile.prototype.draw_pxm805$ = function (xg, centre, cellSize, ch) {
    var style = new XStyle();
    var rect = new XRoundedRect(centre, cellSize * this.size, cellSize * this.size, 0.1, void 0, style);
    var tStyle = new TStyle(void 0, void 0, cellSize * this.size);
    var text = new XText(' ', centre, tStyle, style);
    style.fg = XColor$Companion_getInstance().red;
    style.stroke = true;
    style.lc = XColor$Companion_getInstance().gray;
    xg.draw_dvdmun$(rect);
    if (ch === 32) {
      style.stroke = true;
      style.lc = XColor$Companion_getInstance().blue;
      style.fg = XColor$Companion_getInstance().green;
      xg.draw_dvdmun$(rect);
    } else {
      text.str = String.fromCharCode(ch);
      text.p = rect.centre;
      xg.draw_dvdmun$(text);
    }
  };
  LetterTile.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LetterTile',
    interfaces: []
  };
  var compareByDescending$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(b), selector(a));
      };
    };
  });
  function LetterGridModel(g) {
    var array = Array_0(this.n());
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var tmp$_0;
      var array_0 = charArray(this.n(), null);
      tmp$_0 = array_0.length - 1 | 0;
      for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
        var value = unboxChar(GriddleGame$Companion_getInstance().vacant);
        array_0[i_0] = value;
      }
      array[i] = array_0;
    }
    this.grid = array;
    var tmp$_1, tmp$_2;
    tmp$_1 = this.n();
    for (var i_1 = 0; i_1 < tmp$_1; i_1++) {
      tmp$_2 = this.n();
      for (var j = 0; j < tmp$_2; j++)
        this.grid[i_1][j] = g[i_1][j];
    }
  }
  LetterGridModel.prototype.vacancies = function () {
    var tmp$, tmp$_0;
    var va = ArrayList_init();
    tmp$ = this.n();
    for (var i = 0; i < tmp$; i++) {
      tmp$_0 = this.n();
      for (var j = 0; j < tmp$_0; j++)
        if (this.grid[i][j] === unboxChar(GriddleGame$Companion_getInstance().vacant))
          va.add_11rb$(new GridCell(i, j));
    }
    return va;
  };
  LetterGridModel.prototype.toString = function () {
    var tmp$, tmp$_0;
    var sb = StringBuilder_init();
    tmp$ = this.n();
    for (var i = 0; i < tmp$; i++) {
      tmp$_0 = this.n();
      for (var j = 0; j < tmp$_0; j++)
        sb.append_s8itvh$(this.grid[i][j]);
      sb.append_pdl1vj$('\n');
    }
    return sb.toString();
  };
  LetterGridModel.prototype.isFull = function () {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Not yet implemented');
  };
  LetterGridModel.prototype.randSwapTwo_57bg73$ = function (rand) {
    var ix = rand.nextInt_za3lpa$(this.n());
    var iy = rand.nextInt_za3lpa$(this.n());
    var jx = rand.nextInt_za3lpa$(this.n());
    var jy = rand.nextInt_za3lpa$(this.n());
    var tmp = this.grid[ix][iy];
    this.grid[ix][iy] = this.grid[jx][jy];
    this.grid[jx][jy] = tmp;
  };
  LetterGridModel.prototype.n = function () {
    return 5;
  };
  LetterGridModel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LetterGridModel',
    interfaces: []
  };
  function Player() {
  }
  Player.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Player',
    interfaces: []
  };
  function ScoredCell(cell, score, scoreTrace) {
    if (scoreTrace === void 0)
      scoreTrace = null;
    this.cell = cell;
    this.score = score;
    this.scoreTrace = scoreTrace;
  }
  ScoredCell.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScoredCell',
    interfaces: []
  };
  ScoredCell.prototype.component1 = function () {
    return this.cell;
  };
  ScoredCell.prototype.component2 = function () {
    return this.score;
  };
  ScoredCell.prototype.component3 = function () {
    return this.scoreTrace;
  };
  ScoredCell.prototype.copy_w0imxm$ = function (cell, score, scoreTrace) {
    return new ScoredCell(cell === void 0 ? this.cell : cell, score === void 0 ? this.score : score, scoreTrace === void 0 ? this.scoreTrace : scoreTrace);
  };
  ScoredCell.prototype.toString = function () {
    return 'ScoredCell(cell=' + Kotlin.toString(this.cell) + (', score=' + Kotlin.toString(this.score)) + (', scoreTrace=' + Kotlin.toString(this.scoreTrace)) + ')';
  };
  ScoredCell.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.cell) | 0;
    result = result * 31 + Kotlin.hashCode(this.score) | 0;
    result = result * 31 + Kotlin.hashCode(this.scoreTrace) | 0;
    return result;
  };
  ScoredCell.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.cell, other.cell) && Kotlin.equals(this.score, other.score) && Kotlin.equals(this.scoreTrace, other.scoreTrace)))));
  };
  function swap(grid, a, b) {
    var tmp = grid[a.x][a.y];
    grid[a.x][a.y] = grid[b.x][b.y];
    grid[b.x][b.y] = tmp;
  }
  function MCPlayer(dict) {
    MCPlayer$Companion_getInstance();
    this.dict = dict;
    this.sorted = ArrayList_init();
  }
  function MCPlayer$Companion() {
    MCPlayer$Companion_instance = this;
    this.nShuffles = 200;
    this.fairPlayout = true;
  }
  MCPlayer$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MCPlayer$Companion_instance = null;
  function MCPlayer$Companion_getInstance() {
    if (MCPlayer$Companion_instance === null) {
      new MCPlayer$Companion();
    }return MCPlayer$Companion_instance;
  }
  function MCPlayer$getAction$lambda(it) {
    return it.score;
  }
  MCPlayer.prototype.getAction_x2ua0m$ = function (model, deck, toPlace) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var scoreMap = HashMap_init();
    var scoreTraceMap = HashMap_init();
    var vacancies = model.vacancies();
    var tmp$_3;
    tmp$_3 = vacancies.iterator();
    while (tmp$_3.hasNext()) {
      var element = tmp$_3.next();
      var value = new StatSummary();
      scoreMap.put_xwzc9p$(element, value);
      var value_0 = ArrayList_init();
      scoreTraceMap.put_xwzc9p$(element, value_0);
    }
    var nScores = 0;
    tmp$ = MCPlayer$Companion_getInstance().nShuffles;
    for (var n = 0; n < tmp$; n++) {
      var modelCopy = new LetterGridModel(model.grid);
      var first = vacancies.get_za3lpa$(0);
      modelCopy.grid[first.x][first.y] = toPlace;
      var deckCopy = deck.deepCopy();
      if (MCPlayer$Companion_getInstance().fairPlayout) {
        deckCopy.shuffleRemainingCards();
      } else {
        deckCopy.shuffleRemainingDealtCards();
      }
      tmp$_0 = vacancies.size;
      for (var i = 1; i < tmp$_0; i++) {
        var v = vacancies.get_za3lpa$(i);
        var next = unboxChar(deckCopy.next());
        if (next != null) {
          modelCopy.grid[v.x][v.y] = next;
        } else
          throw RuntimeException_init('Unexpected empty deck');
      }
      var gridScan = new GridScan();
      gridScan.dict = this.dict;
      tmp$_1 = vacancies.size;
      for (var i_0 = 0; i_0 < tmp$_1; i_0++) {
        swap(modelCopy.grid, vacancies.get_za3lpa$(0), vacancies.get_za3lpa$(i_0));
        var tmp$_4;
        var sum = 0;
        tmp$_4 = gridScan.findWords_lyd8co$(modelCopy.grid).iterator();
        while (tmp$_4.hasNext()) {
          var element_0 = tmp$_4.next();
          sum = sum + element_0.score() | 0;
        }
        var score = sum;
        nScores = nScores + 1 | 0;
        var ss = scoreMap.get_11rb$(vacancies.get_za3lpa$(i_0));
        if (ss != null) {
          ss.add_3p81yu$(score);
          var trace = scoreTraceMap.get_11rb$(vacancies.get_za3lpa$(i_0));
          if (trace != null)
            trace.add_11rb$(ss.sum());
        }swap(modelCopy.grid, vacancies.get_za3lpa$(0), vacancies.get_za3lpa$(i_0));
      }
    }
    var scoredList = ArrayList_init();
    tmp$_2 = scoreMap.entries.iterator();
    while (tmp$_2.hasNext()) {
      var tmp$_5 = tmp$_2.next();
      var k = tmp$_5.key;
      var v_0 = tmp$_5.value;
      scoredList.add_11rb$(new ScoredCell(k, v_0.mean(), scoreTraceMap.get_11rb$(k)));
    }
    this.sorted = sortedWith(scoredList, new Comparator(compareByDescending$lambda(MCPlayer$getAction$lambda)));
    return this.sorted.get_za3lpa$(0).cell;
  };
  MCPlayer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MCPlayer',
    interfaces: [Player]
  };
  function OpenDealRandomPlayer(dict) {
    this.dict = dict;
  }
  OpenDealRandomPlayer.prototype.nPlays_12f1fz$ = function (model, deck, n) {
    var tmp$, tmp$_0, tmp$_1;
    var deckCopy = deck.deepCopy();
    var vacancies = model.vacancies();
    var gridScan = new GridScan();
    gridScan.dict = this.dict;
    var cards = ArrayList_init();
    tmp$ = vacancies.size;
    for (var i = 0; i < tmp$; i++) {
      if ((tmp$_0 = unboxChar(deckCopy.next())) != null) {
        cards.add_11rb$(tmp$_0);
      }}
    var ss = new StatSummary();
    var picker = new Picker();
    for (var i_0 = 0; i_0 < n; i_0++) {
      shuffle(cards);
      var modelCopy = new LetterGridModel(model.grid);
      tmp$_1 = cards.size;
      for (var j = 0; j < tmp$_1; j++) {
        var v = vacancies.get_za3lpa$(j);
        modelCopy.grid[v.x][v.y] = unboxChar(cards.get_za3lpa$(j));
      }
      var tmp$_2;
      var sum = 0;
      tmp$_2 = gridScan.findWords_lyd8co$(modelCopy.grid).iterator();
      while (tmp$_2.hasNext()) {
        var element = tmp$_2.next();
        sum = sum + element.score() | 0;
      }
      var score = sum;
      ss.add_3p81yu$(score);
      picker.add_41hqm1$(score, modelCopy);
    }
    println(ss);
    return picker;
  };
  OpenDealRandomPlayer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OpenDealRandomPlayer',
    interfaces: []
  };
  function OpenDealEvoPlayer(dict) {
    this.dict = dict;
    this.rand = Random.Default;
  }
  OpenDealEvoPlayer.prototype.nPlays_12f1fz$ = function (model, deck, n) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var deckCopy = deck.deepCopy();
    var vacancies = model.vacancies();
    var gridScan = new GridScan();
    gridScan.dict = this.dict;
    var cards = ArrayList_init();
    tmp$ = vacancies.size;
    for (var i = 0; i < tmp$; i++) {
      if ((tmp$_0 = unboxChar(deckCopy.next())) != null) {
        cards.add_11rb$(tmp$_0);
      }}
    var ss = new StatSummary();
    var picker = new Picker();
    shuffle(cards);
    var modelCopy = new LetterGridModel(model.grid);
    tmp$_1 = cards.size;
    for (var j = 0; j < tmp$_1; j++) {
      var v = vacancies.get_za3lpa$(j);
      modelCopy.grid[v.x][v.y] = unboxChar(cards.get_za3lpa$(j));
    }
    var tmp$_3;
    var sum = 0;
    tmp$_3 = gridScan.findWords_lyd8co$(modelCopy.grid).iterator();
    while (tmp$_3.hasNext()) {
      var element = tmp$_3.next();
      sum = sum + element.score() | 0;
    }
    var score = {v: sum};
    picker.add_41hqm1$(score.v, modelCopy);
    for (var i_0 = 0; i_0 < n; i_0++) {
      if ((tmp$_2 = picker.best) != null) {
        var mc = new LetterGridModel(tmp$_2.grid);
        mc.randSwapTwo_57bg73$(this.rand);
        var tmp$_4;
        var sum_0 = 0;
        tmp$_4 = gridScan.findWords_lyd8co$(mc.grid).iterator();
        while (tmp$_4.hasNext()) {
          var element_0 = tmp$_4.next();
          sum_0 = sum_0 + element_0.score() | 0;
        }
        score.v = sum_0;
        picker.add_41hqm1$(score.v, mc);
      }ss.add_3p81yu$(score.v);
    }
    println(ss);
    return picker;
  };
  OpenDealEvoPlayer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OpenDealEvoPlayer',
    interfaces: []
  };
  function FastMCPlayer() {
    this.nSims = 100;
  }
  FastMCPlayer.prototype.getAction_b587p7$ = function (game) {
    return new GridCell(0, 0);
  };
  FastMCPlayer.prototype.playout_uecoty$ = function (game, cell, letter) {
    var tmp$;
    var ss = new StatSummary();
    tmp$ = this.nSims;
    for (var i = 0; i < tmp$; i++) {
      var deck = game.deck.deepCopy();
      var grid = new LetterGridModel(game.a);
      deck.shuffleRemainingCards();
    }
    return ss;
  };
  FastMCPlayer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FastMCPlayer',
    interfaces: []
  };
  function PermPlaayer(game) {
    this.game = game;
  }
  PermPlaayer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PermPlaayer',
    interfaces: []
  };
  function FastSampleDeck(cha, ix) {
    FastSampleDeck$Companion_getInstance();
    if (ix === void 0)
      ix = 0;
    this.cha = cha;
    this.ix = ix;
    this.rand = Random.Default;
  }
  function FastSampleDeck$Companion() {
    FastSampleDeck$Companion_instance = this;
    this.dealSize = 25;
  }
  FastSampleDeck$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FastSampleDeck$Companion_instance = null;
  function FastSampleDeck$Companion_getInstance() {
    if (FastSampleDeck$Companion_instance === null) {
      new FastSampleDeck$Companion();
    }return FastSampleDeck$Companion_instance;
  }
  FastSampleDeck.prototype.deepCopy = function () {
    return new FastSampleDeck(this.cha.slice(), this.ix);
  };
  FastSampleDeck.prototype.next = function () {
    var tmp$;
    if (this.ix < FastSampleDeck$Companion_getInstance().dealSize) {
      return this.cha[tmp$ = this.ix, this.ix = tmp$ + 1 | 0, tmp$];
    } else
      return null;
  };
  FastSampleDeck.prototype.isEmpty = function () {
    return this.ix >= FastSampleDeck$Companion_getInstance().dealSize;
  };
  FastSampleDeck.prototype.shuffleRemainingCards = function () {
    var tmp$, tmp$_0;
    tmp$ = this.ix;
    tmp$_0 = FastSampleDeck$Companion_getInstance().dealSize;
    for (var i = tmp$; i < tmp$_0; i++) {
      var sw = i + this.rand.nextInt_za3lpa$(this.cha.length - i | 0) | 0;
      this.swap_lizitn$(this.cha, i, sw);
    }
  };
  FastSampleDeck.prototype.shuffleRemainingDealtCards = function () {
    var tmp$, tmp$_0;
    tmp$ = this.ix;
    tmp$_0 = FastSampleDeck$Companion_getInstance().dealSize;
    for (var i = tmp$; i < tmp$_0; i++) {
      var sw = i + this.rand.nextInt_za3lpa$(FastSampleDeck$Companion_getInstance().dealSize - i | 0) | 0;
      this.swap_lizitn$(this.cha, i, sw);
    }
  };
  FastSampleDeck.prototype.swap_lizitn$ = function (a, i, j) {
    var tmp = unboxChar(a[i]);
    a[i] = a[j];
    a[j] = toBoxedChar(tmp);
  };
  FastSampleDeck.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FastSampleDeck',
    interfaces: []
  };
  function LetterDeck(cha, ix) {
    if (ix === void 0)
      ix = cha.length - 1 | 0;
    this.cha = cha;
    this.ix = ix;
  }
  LetterDeck.prototype.deepCopy = function () {
    return new LetterDeck(this.cha.slice(), this.ix);
  };
  LetterDeck.prototype.next = function () {
    var tmp$;
    if (this.ix >= 0) {
      return this.cha[tmp$ = this.ix, this.ix = tmp$ - 1 | 0, tmp$];
    } else
      return null;
  };
  LetterDeck.prototype.isEmpty = function () {
    return this.ix < 0;
  };
  LetterDeck.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LetterDeck',
    interfaces: []
  };
  function GenDeck(array, ix) {
    if (ix === void 0)
      ix = array.length - 1 | 0;
    this.array = array;
    this.ix = ix;
  }
  GenDeck.prototype.deepCopy = function () {
    return new GenDeck(this.array.slice(), this.ix);
  };
  GenDeck.prototype.next = function () {
    var tmp$;
    if (this.ix >= 0) {
      return this.array[tmp$ = this.ix, this.ix = tmp$ - 1 | 0, tmp$];
    } else
      return null;
  };
  GenDeck.prototype.isEmpty = function () {
    return this.ix < 0;
  };
  GenDeck.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GenDeck',
    interfaces: []
  };
  function StatDeck() {
    StatDeck$Companion_getInstance();
  }
  function StatDeck$Companion() {
    StatDeck$Companion_instance = this;
    this.rawDeck = copyToArray(split('SEAOI RLTN DUPM CYHGBKF WVZXJQ', [' ']));
    this.reps = new Int32Array([5, 4, 3, 2, 1]);
    this.nLetters = 26;
    this.deckString = this.makeCards();
  }
  StatDeck$Companion.prototype.makeCards = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var cha = ArrayList_init();
    var repIndex = 0;
    tmp$ = this.rawDeck;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var s = tmp$[tmp$_0];
      tmp$_1 = iterator(s.substring(0, s.length));
      while (tmp$_1.hasNext()) {
        var ch = unboxChar(tmp$_1.next());
        tmp$_2 = this.reps[repIndex];
        for (var i = 0; i < tmp$_2; i++) {
          cha.add_11rb$(toBoxedChar(ch));
        }
      }
      repIndex = repIndex + 1 | 0;
    }
    return cha;
  };
  StatDeck$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var StatDeck$Companion_instance = null;
  function StatDeck$Companion_getInstance() {
    if (StatDeck$Companion_instance === null) {
      new StatDeck$Companion();
    }return StatDeck$Companion_instance;
  }
  StatDeck.prototype.getDeck_s8cxhz$ = function (seed) {
    if (seed === void 0)
      seed = L_1;
    var tmp$;
    var rand = seed.toNumber() < 0 ? Random.Default : Random_1(seed);
    var deck = StatDeck$Companion_getInstance().makeCards();
    var nTries = 0;
    do {
      shuffle_0(deck, rand);
      var deal = copyToArray(deck.subList_vux9f0$(0, 25));
      if (ShuffleValidator_getInstance().accept_eh991n$(deal)) {
        return new FastSampleDeck(copyToArray(deck));
      }if ((tmp$ = nTries, nTries = tmp$ + 1 | 0, tmp$) > 100) {
        println('Returning a non-ideal deck after ' + nTries);
      }}
     while (true);
  };
  StatDeck.prototype.letterDistribution_chstmu$ = function (deck) {
    var tots = new Int32Array(StatDeck$Companion_getInstance().nLetters);
    for (var i = 0; i !== deck.size; ++i) {
      var tmp$;
      tmp$ = unboxChar(deck.get_za3lpa$(i)) - 65;
      tots[tmp$] = tots[tmp$] + 1 | 0;
    }
    return tots;
  };
  StatDeck.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StatDeck',
    interfaces: []
  };
  function ShuffleValidator() {
    ShuffleValidator_instance = this;
    this.vowels = 'AEIOU';
    this.vowelChars = this.vowels.substring(0, this.vowels.length);
    this.minVowels = 8;
    this.maxVowels = 12;
    this.maxPairs = 1;
  }
  ShuffleValidator.prototype.accept_eh991n$ = function (chars) {
    return this.consecutivePairs_eh991n$(chars) <= this.maxPairs && this.countVowels_eh991n$(chars) >= this.minVowels && this.countVowels_eh991n$(chars) <= this.maxVowels;
  };
  ShuffleValidator.prototype.consecutivePairs_eh991n$ = function (chars) {
    var nPairs = 0;
    for (var i = 1; i < chars.length; i++) {
      if (unboxChar(chars[i - 1 | 0]) === unboxChar(chars[i])) {
        nPairs = nPairs + 1 | 0;
      }}
    return nPairs;
  };
  ShuffleValidator.prototype.countVowels_eh991n$ = function (chars) {
    var tmp$;
    var tot = 0;
    for (tmp$ = 0; tmp$ !== chars.length; ++tmp$) {
      var ch = unboxChar(chars[tmp$]);
      if (this.isVowel_s8itvh$(ch)) {
        tot = tot + 1 | 0;
      }}
    return tot;
  };
  ShuffleValidator.prototype.isVowel_s8itvh$ = function (ch) {
    var tmp$;
    tmp$ = iterator(this.vowelChars);
    while (tmp$.hasNext()) {
      var c = unboxChar(tmp$.next());
      if (c === ch)
        return true;
    }
    return false;
  };
  ShuffleValidator.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ShuffleValidator',
    interfaces: []
  };
  var ShuffleValidator_instance = null;
  function ShuffleValidator_getInstance() {
    if (ShuffleValidator_instance === null) {
      new ShuffleValidator();
    }return ShuffleValidator_instance;
  }
  function GridScan() {
    GridScan$Companion_getInstance();
    this.dict = new TrieDict();
  }
  function GridScan$Companion() {
    GridScan$Companion_instance = this;
    this.minLen = 2;
    this.maxLen = 5;
  }
  GridScan$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GridScan$Companion_instance = null;
  function GridScan$Companion_getInstance() {
    if (GridScan$Companion_instance === null) {
      new GridScan$Companion();
    }return GridScan$Companion_instance;
  }
  GridScan.prototype.findWords_lyd8co$ = function (a) {
    var tmp$, tmp$_0;
    var words = ArrayList_init();
    tmp$ = Dir$values();
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var dir = tmp$[tmp$_0];
      var origin = new GridCell(0, 0);
      for (var i = 0; i !== a.length; ++i) {
        var start = dir.stepBy_x0di76$(origin, i);
        this.lineScan_8mnjnf$(a, start, dir.perp(), words);
      }
    }
    return words;
  };
  GridScan.prototype.lineScan_8mnjnf$ = function (a, lineStart, dir, words) {
    var tmp$;
    tmp$ = a.length - GridScan$Companion_getInstance().minLen | 0;
    for (var offset = 0; offset <= tmp$; offset++) {
      var tn = this.dict.root;
      var cur = dir.stepBy_x0di76$(lineStart, offset);
      var wordStart = cur;
      var i = 0;
      var max = GridScan$Companion_getInstance().maxLen - offset | 0;
      var sb = StringBuilder_init();
      while (tn != null && i < max) {
        tn = tn.follow_s8itvh$(a[cur.x][cur.y]);
        sb.append_s8itvh$(a[cur.x][cur.y]);
        if (tn != null && tn.isWord) {
          var word = new GridWord(sb.toString(), wordStart, dir);
          words.add_11rb$(word);
        }i = i + 1 | 0;
        cur = dir.step_23phzo$(cur);
      }
    }
  };
  GridScan.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridScan',
    interfaces: []
  };
  function GridUtil() {
    GridUtil$Companion_getInstance();
  }
  function GridUtil$Companion() {
    GridUtil$Companion_instance = this;
    this.sampleGrid = [Kotlin.charArrayOf(32, 32, 70, 32, 70), Kotlin.charArrayOf(76, 32, 85, 32, 82), Kotlin.charArrayOf(65, 32, 32, 32, 69), Kotlin.charArrayOf(32, 32, 32, 32, 69), Kotlin.charArrayOf(71, 82, 73, 68, 32)];
  }
  GridUtil$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GridUtil$Companion_instance = null;
  function GridUtil$Companion_getInstance() {
    if (GridUtil$Companion_instance === null) {
      new GridUtil$Companion();
    }return GridUtil$Companion_instance;
  }
  GridUtil.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridUtil',
    interfaces: []
  };
  function Dir(name, ordinal, dx, dy) {
    Enum.call(this);
    this.dx = dx;
    this.dy = dy;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Dir_initFields() {
    Dir_initFields = function () {
    };
    Dir$H_instance = new Dir('H', 0, 1, 0);
    Dir$V_instance = new Dir('V', 1, 0, 1);
  }
  var Dir$H_instance;
  function Dir$H_getInstance() {
    Dir_initFields();
    return Dir$H_instance;
  }
  var Dir$V_instance;
  function Dir$V_getInstance() {
    Dir_initFields();
    return Dir$V_instance;
  }
  Dir.prototype.step_23phzo$ = function (cell) {
    return new GridCell(cell.x + this.dx | 0, cell.y + this.dy | 0);
  };
  Dir.prototype.stepBy_x0di76$ = function (cell, n) {
    return new GridCell(cell.x + Kotlin.imul(n, this.dx) | 0, cell.y + Kotlin.imul(n, this.dy) | 0);
  };
  Dir.prototype.perp = function () {
    return this === Dir$H_getInstance() ? Dir$V_getInstance() : Dir$H_getInstance();
  };
  Dir.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Dir',
    interfaces: [Enum]
  };
  function Dir$values() {
    return [Dir$H_getInstance(), Dir$V_getInstance()];
  }
  Dir.values = Dir$values;
  function Dir$valueOf(name) {
    switch (name) {
      case 'H':
        return Dir$H_getInstance();
      case 'V':
        return Dir$V_getInstance();
      default:throwISE('No enum constant games.griddle.words.Dir.' + name);
    }
  }
  Dir.valueOf_61zpoe$ = Dir$valueOf;
  function GridWord(s, start, dir) {
    GridWord$Companion_getInstance();
    this.s = s;
    this.start = start;
    this.dir = dir;
  }
  GridWord.prototype.score = function () {
    return GridWord$Companion_getInstance().scores[this.s.length];
  };
  GridWord.prototype.toString = function () {
    return this.s + ' : ' + toString(this.start) + ' : ' + toString(this.dir) + ' : ' + toString(this.score());
  };
  function GridWord$Companion() {
    GridWord$Companion_instance = this;
    this.scores = new Int32Array([0, 0, 1, 3, 7, 10, 15]);
  }
  GridWord$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GridWord$Companion_instance = null;
  function GridWord$Companion_getInstance() {
    if (GridWord$Companion_instance === null) {
      new GridWord$Companion();
    }return GridWord$Companion_instance;
  }
  GridWord.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridWord',
    interfaces: []
  };
  function TrieDict() {
    this.root = null;
    this.nWords = 0;
    this.root = new TrieNode();
  }
  TrieDict.prototype.addWord_61zpoe$ = function (s) {
    var tmp$;
    var tn = this.root;
    tmp$ = iterator(s.substring(0, s.length));
    while (tmp$.hasNext()) {
      var ch = unboxChar(tmp$.next());
      tn = tn.add_s8itvh$(ch);
    }
    if (!tn.isWord) {
      tn.isWord = true;
      this.nWords = this.nWords + 1 | 0;
    }};
  TrieDict.prototype.addWords_mhpeer$ = function (words) {
    var tmp$;
    tmp$ = words.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      this.addWord_61zpoe$(trim(Kotlin.isCharSequence(tmp$_0 = element) ? tmp$_0 : throwCCE()).toString());
    }
  };
  TrieDict.prototype.testWord_61zpoe$ = function (s) {
    var chars = s.substring(0, s.length);
    var ix = 0;
    var tn = this.root;
    while (tn != null && ix < chars.length) {
      tn = tn.follow_s8itvh$(chars.charCodeAt(ix));
      if (tn != null)
        println(String.fromCharCode(chars.charCodeAt(ix)) + '\t ' + toString(tn.isWord));
      ix = ix + 1 | 0;
    }
  };
  TrieDict.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TrieDict',
    interfaces: []
  };
  function TrieNode() {
    TrieNode$Companion_getInstance();
    this.isWord = false;
    this.next = null;
  }
  TrieNode.prototype.rangeCheck_s8itvh$ = function (ch) {
    if (ch < unboxChar(TrieNode$Companion_getInstance().first) || ch > unboxChar(TrieNode$Companion_getInstance().last))
      throw RuntimeException_init('TrieNode char out of range: ' + String.fromCharCode(ch));
  };
  TrieNode.prototype.outOfRange_s8itvh$ = function (ch) {
    return ch < unboxChar(TrieNode$Companion_getInstance().first) || ch > unboxChar(TrieNode$Companion_getInstance().last);
  };
  TrieNode.prototype.follow_s8itvh$ = function (ch) {
    if (this.next == null)
      return null;
    if (this.outOfRange_s8itvh$(ch))
      return null;
    var ix = ch - 65;
    return ensureNotNull(this.next)[ix];
  };
  TrieNode.prototype.add_s8itvh$ = function (ch) {
    this.rangeCheck_s8itvh$(ch);
    var ix = ch - 65;
    if (this.next == null)
      this.next = Kotlin.newArray(TrieNode$Companion_getInstance().range, null);
    if (ensureNotNull(this.next)[ix] == null)
      ensureNotNull(this.next)[ix] = new TrieNode();
    return ensureNotNull(ensureNotNull(this.next)[ix]);
  };
  function TrieNode$Companion() {
    TrieNode$Companion_instance = this;
    this.first = toBoxedChar(65);
    this.last = toBoxedChar(90);
    this.range = 1 + (unboxChar(this.last) | 0) - (unboxChar(this.first) | 0) | 0;
  }
  TrieNode$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TrieNode$Companion_instance = null;
  function TrieNode$Companion_getInstance() {
    if (TrieNode$Companion_instance === null) {
      new TrieNode$Companion();
    }return TrieNode$Companion_instance;
  }
  TrieNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TrieNode',
    interfaces: []
  };
  function GridGame() {
  }
  GridGame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridGame',
    interfaces: []
  };
  function TicTacToe(lg, toMoveVar) {
    TicTacToe$Companion_getInstance();
    if (toMoveVar === void 0)
      toMoveVar = 0;
    this.lg = lg;
    this.toMoveVar = toMoveVar;
    this.nTic = 0;
  }
  function TicTacToe$Companion() {
    TicTacToe$Companion_instance = this;
    this.totTicks = 0;
  }
  TicTacToe$Companion.prototype.getGame_za3lpa$ = function (n) {
    if (n === void 0)
      n = 3;
    var lineTester = new LineTester();
    lineTester.addAllDirections_za3lpa$(n);
    var lineGrid = new LineGrid(n, n, lineTester);
    var gridGame = new TicTacToe(lineGrid);
    return gridGame;
  };
  TicTacToe$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TicTacToe$Companion_instance = null;
  function TicTacToe$Companion_getInstance() {
    if (TicTacToe$Companion_instance === null) {
      new TicTacToe$Companion();
    }return TicTacToe$Companion_instance;
  }
  TicTacToe.prototype.copy = function () {
    var gridCopy = this.lg.copy();
    return new TicTacToe(gridCopy, this.toMoveVar);
  };
  TicTacToe.prototype.next_q5rwfd$ = function (actions) {
    try {
      this.next_2j9h0j$(this.lg.vacancies().get_za3lpa$(actions[0]));
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        println(e);
      } else
        throw e;
    }
    return this;
  };
  TicTacToe.prototype.next_2j9h0j$ = function (placeAt) {
    var tmp$;
    if (this.lg.isVacant_2j9h0j$(placeAt)) {
      this.lg.play_1xt2oh$(placeAt, this.toMoveVar);
      this.toMoveVar = 1 - this.toMoveVar | 0;
      this.nTic = this.nTic + 1 | 0;
      tmp$ = TicTacToe$Companion_getInstance().totTicks;
      TicTacToe$Companion_getInstance().totTicks = tmp$ + 1 | 0;
    }};
  TicTacToe.prototype.nActions_za3lpa$ = function (playerId) {
    return this.lg.nVacant();
  };
  TicTacToe.prototype.score_za3lpa$ = function (playerId) {
    var state = this.lg.gridState();
    if (state === GridState$Win1_getInstance())
      return 1.0;
    if (state === GridState$Win2_getInstance())
      return -1.0;
    return 0.0;
  };
  TicTacToe.prototype.isTerminal_za3lpa$ = function (playerId) {
    return this.lg.nVacant() === 0;
  };
  TicTacToe.prototype.nTicks = function () {
    return this.nTic;
  };
  TicTacToe.prototype.toMove = function () {
    return this.toMoveVar;
  };
  TicTacToe.prototype.totalTicks = function () {
    return Kotlin.Long.fromInt(TicTacToe$Companion_getInstance().totTicks);
  };
  TicTacToe.prototype.reset = function () {
    this.nTic = 0;
    this.toMoveVar = 0;
    this.lg.reset();
  };
  TicTacToe.prototype.randomInitialState = function () {
    this.reset();
    return this;
  };
  TicTacToe.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TicTacToe',
    interfaces: [ExtendedAbstractGameStateMulti]
  };
  function GridGameApp() {
    this.n = 3;
    this.lineTester = new LineTester();
    this.lineGrid = new LineGrid(this.n, this.n, this.lineTester);
    this.gridGame = new TicTacToe(this.lineGrid);
    this.gridView = new GridView(this.lineGrid);
    this.lineTester.addAllDirections_za3lpa$(this.n);
    this.gridGame.next_2j9h0j$(new IntVec2d(1, 1));
    println(this.gridGame.lg.gridState());
    println(this.gridGame.lg.lineTester.lines.size);
    println(this.lineTester.lines.size);
  }
  GridGameApp.prototype.paint_vzjx8w$ = function (xg) {
    this.gridView.draw_vzjx8w$(xg);
  };
  GridGameApp.prototype.handleMouseEvent_x4hb96$ = function (e) {
    println(e);
    if (e.t === XMouseEventType$Clicked_getInstance()) {
      var cell = this.gridView.getCell_5lk9kw$(e.s);
      if (cell != null) {
        this.gridGame.next_2j9h0j$(cell);
      }}};
  GridGameApp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridGameApp',
    interfaces: [XApp]
  };
  function GridView(lg, gs) {
    if (lg === void 0)
      lg = new LineGrid(3, 3, new LineTester());
    if (gs === void 0)
      gs = new GridStyle();
    this.lg = lg;
    this.gs = gs;
    this.cellSize = 0.0;
    this.centre = new Vec2d();
  }
  GridView.prototype.getCell_5lk9kw$ = function (s) {
    if (this.cellSize <= 0.0)
      return null;
    var leftX = this.centre.x - this.cellSize * this.lg.w * 0.5;
    var topY = this.centre.y - this.cellSize * this.lg.h * 0.5;
    var x = (s.x - leftX) / this.cellSize;
    var y = (s.y - topY) / this.cellSize;
    if (x < 0.0 || y < 0.0 || x >= this.lg.w || y >= this.lg.h)
      return null;
    var cell = new IntVec2d(numberToInt(x), numberToInt(y));
    println(cell);
    return cell;
  };
  GridView.prototype.draw_vzjx8w$ = function (xg) {
    var tmp$, tmp$_0;
    var ratio = 1.0 - 2.0 * this.gs.boardMargin;
    var xCell = xg.width() * ratio / this.lg.w;
    var yCell = xg.height() * ratio / this.lg.h;
    this.cellSize = Math_0.min(xCell, yCell);
    this.centre = xg.centre();
    xg.draw_dvdmun$(new XRect(xg.centre(), xg.width(), xg.height(), new XStyle(this.gs.bg, void 0, void 0, false, true)));
    tmp$ = this.lg.w;
    for (var x = 0; x < tmp$; x++) {
      tmp$_0 = this.lg.h;
      for (var y = 0; y < tmp$_0; y++) {
        var gx = xg.centre().x + (x - (this.lg.w - 1 | 0) * 0.5) * this.cellSize;
        var gy = xg.centre().y + (y - (this.lg.h - 1 | 0) * 0.5) * this.cellSize;
        var cellStyle = new XStyle(this.gs.boardCell, void 0, this.gs.cellBorderColor, void 0, void 0, this.gs.cellBorder * this.cellSize);
        var cell = new XRect(new Vec2d(gx, gy), this.cellSize, this.cellSize, cellStyle);
        xg.draw_dvdmun$(cell);
        if (this.lg.grid[x][y] !== CellState$Empty_getInstance()) {
          var str = this.lg.grid[x][y] === CellState$P1_getInstance() ? 'X' : 'O';
          var tStyle = new TStyle(this.gs.tc, void 0, this.cellSize);
          var text = new XText(str, new Vec2d(gx, gy), tStyle, new XStyle());
          xg.draw_dvdmun$(text);
        }}
    }
  };
  GridView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridView',
    interfaces: []
  };
  function GridStyle(cellBorder, boardMargin, bg, tc, boardCell, cellBorderColor) {
    if (cellBorder === void 0)
      cellBorder = 0.08;
    if (boardMargin === void 0)
      boardMargin = 0.1;
    if (bg === void 0)
      bg = XColor$Companion_getInstance().black;
    if (tc === void 0)
      tc = XColor$Companion_getInstance().white;
    if (boardCell === void 0)
      boardCell = XColor$Companion_getInstance().blue;
    if (cellBorderColor === void 0)
      cellBorderColor = XColor$Companion_getInstance().gray;
    this.cellBorder = cellBorder;
    this.boardMargin = boardMargin;
    this.bg = bg;
    this.tc = tc;
    this.boardCell = boardCell;
    this.cellBorderColor = cellBorderColor;
  }
  GridStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridStyle',
    interfaces: []
  };
  GridStyle.prototype.component1 = function () {
    return this.cellBorder;
  };
  GridStyle.prototype.component2 = function () {
    return this.boardMargin;
  };
  GridStyle.prototype.component3 = function () {
    return this.bg;
  };
  GridStyle.prototype.component4 = function () {
    return this.tc;
  };
  GridStyle.prototype.component5 = function () {
    return this.boardCell;
  };
  GridStyle.prototype.component6 = function () {
    return this.cellBorderColor;
  };
  GridStyle.prototype.copy_qxpbv4$ = function (cellBorder, boardMargin, bg, tc, boardCell, cellBorderColor) {
    return new GridStyle(cellBorder === void 0 ? this.cellBorder : cellBorder, boardMargin === void 0 ? this.boardMargin : boardMargin, bg === void 0 ? this.bg : bg, tc === void 0 ? this.tc : tc, boardCell === void 0 ? this.boardCell : boardCell, cellBorderColor === void 0 ? this.cellBorderColor : cellBorderColor);
  };
  GridStyle.prototype.toString = function () {
    return 'GridStyle(cellBorder=' + Kotlin.toString(this.cellBorder) + (', boardMargin=' + Kotlin.toString(this.boardMargin)) + (', bg=' + Kotlin.toString(this.bg)) + (', tc=' + Kotlin.toString(this.tc)) + (', boardCell=' + Kotlin.toString(this.boardCell)) + (', cellBorderColor=' + Kotlin.toString(this.cellBorderColor)) + ')';
  };
  GridStyle.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.cellBorder) | 0;
    result = result * 31 + Kotlin.hashCode(this.boardMargin) | 0;
    result = result * 31 + Kotlin.hashCode(this.bg) | 0;
    result = result * 31 + Kotlin.hashCode(this.tc) | 0;
    result = result * 31 + Kotlin.hashCode(this.boardCell) | 0;
    result = result * 31 + Kotlin.hashCode(this.cellBorderColor) | 0;
    return result;
  };
  GridStyle.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.cellBorder, other.cellBorder) && Kotlin.equals(this.boardMargin, other.boardMargin) && Kotlin.equals(this.bg, other.bg) && Kotlin.equals(this.tc, other.tc) && Kotlin.equals(this.boardCell, other.boardCell) && Kotlin.equals(this.cellBorderColor, other.cellBorderColor)))));
  };
  function MaxGame(n, m) {
    MaxGame$Companion_getInstance();
    if (n === void 0)
      n = 10;
    if (m === void 0)
      m = 2;
    this.n = n;
    this.m = m;
    this.scoreX = 0;
    this.position = 0;
    this.nTicksX = 0;
  }
  function MaxGame$Companion() {
    MaxGame$Companion_instance = this;
    this.totalTicks = L0;
  }
  MaxGame$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MaxGame$Companion_instance = null;
  function MaxGame$Companion_getInstance() {
    if (MaxGame$Companion_instance === null) {
      new MaxGame$Companion();
    }return MaxGame$Companion_instance;
  }
  MaxGame.prototype.copy = function () {
    var maxGame = new MaxGame(this.n, this.m);
    maxGame.scoreX = this.scoreX;
    maxGame.position = this.position;
    maxGame.nTicksX = this.nTicksX;
    return maxGame;
  };
  MaxGame.prototype.next_q5rwfd$ = function (actions) {
    var tmp$;
    if (this.isTerminal())
      return this;
    this.scoreX = this.scoreX + actions[0] | 0;
    this.position = this.position + 1 | 0;
    tmp$ = MaxGame$Companion_getInstance().totalTicks;
    MaxGame$Companion_getInstance().totalTicks = tmp$.inc();
    this.nTicksX = this.nTicksX + 1 | 0;
    return this;
  };
  MaxGame.prototype.nActions = function () {
    return this.m;
  };
  MaxGame.prototype.score = function () {
    return this.scoreX;
  };
  MaxGame.prototype.isTerminal = function () {
    return this.position >= this.n;
  };
  MaxGame.prototype.nTicks = function () {
    return this.nTicksX;
  };
  MaxGame.prototype.totalTicks = function () {
    return MaxGame$Companion_getInstance().totalTicks;
  };
  MaxGame.prototype.resetTotalTicks = function () {
    MaxGame$Companion_getInstance().totalTicks = L0;
  };
  MaxGame.prototype.randomInitialState = function () {
    return this;
  };
  MaxGame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MaxGame',
    interfaces: [ExtendedAbstractGameState]
  };
  MaxGame.prototype.component1 = function () {
    return this.n;
  };
  MaxGame.prototype.component2 = function () {
    return this.m;
  };
  MaxGame.prototype.copy_vux9f0$ = function (n, m) {
    return new MaxGame(n === void 0 ? this.n : n, m === void 0 ? this.m : m);
  };
  MaxGame.prototype.toString = function () {
    return 'MaxGame(n=' + Kotlin.toString(this.n) + (', m=' + Kotlin.toString(this.m)) + ')';
  };
  MaxGame.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.n) | 0;
    result = result * 31 + Kotlin.hashCode(this.m) | 0;
    return result;
  };
  MaxGame.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.n, other.n) && Kotlin.equals(this.m, other.m)))));
  };
  function Graph(g) {
    Graph$Companion_getInstance();
    if (g === void 0)
      g = HashMap_init();
    this.g = g;
  }
  function Graph$Companion() {
    Graph$Companion_instance = this;
    this.emptySet = HashMap_init();
    this.maxCost = kotlin_js_internal_DoubleCompanionObject.MAX_VALUE;
    this.maxPath = new ScoredPath(this.maxCost);
  }
  Graph$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Graph$Companion_instance = null;
  function Graph$Companion_getInstance() {
    if (Graph$Companion_instance === null) {
      new Graph$Companion();
    }return Graph$Companion_instance;
  }
  Graph.prototype.outArcs_za3rmp$ = function (ix) {
    var tmp$;
    return (tmp$ = this.g.get_11rb$(ix)) != null ? tmp$ : Graph$Companion_getInstance().emptySet;
  };
  Graph.prototype.cost_wn2jw4$ = function (from, to) {
    var tmp$;
    return (tmp$ = this.g.get_11rb$(from)) != null ? tmp$.get_11rb$(to) : null;
  };
  Graph.prototype.ithEntry_wn2dyp$ = function (from, toIndex) {
    var scoredPathArcs = this.g.get_11rb$(from);
    if (scoredPathArcs == null)
      return null;
    var al = toCollection(asSequence(scoredPathArcs), ArrayList_init());
    if (toIndex < al.size)
      return al.get_za3lpa$(toIndex);
    else
      return null;
  };
  Graph.prototype.updateCost_m7l82n$ = function (from, to, cost, path) {
    if (path === void 0)
      path = null;
    var tmp$, tmp$_0, tmp$_1;
    var oldCost = (tmp$_0 = (tmp$ = this.g.get_11rb$(from)) != null ? tmp$.get_11rb$(to) : null) != null ? tmp$_0 : Graph$Companion_getInstance().maxPath;
    if (cost < oldCost.score) {
      if (this.g.get_11rb$(from) == null) {
        var $receiver = this.g;
        var value = HashMap_init();
        $receiver.put_xwzc9p$(from, value);
      }(tmp$_1 = this.g.get_11rb$(from)) != null ? tmp$_1.put_xwzc9p$(to, new ScoredPath(cost, path)) : null;
    }};
  Graph.prototype.print = function () {
    var tmp$;
    tmp$ = this.g.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var k = tmp$_0.key;
      var v = tmp$_0.value;
      println('Node: ' + k.toString());
      println('\t' + ' Arcs: ' + v);
      println_0();
    }
  };
  Graph.prototype.clear = function () {
    this.g = HashMap_init();
  };
  Graph.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Graph',
    interfaces: []
  };
  function main_1() {
    println(Levels$list_getInstance().noSubgoals);
  }
  function GridWorldView(gridWorld, updater) {
    GridWorldView$Companion_getInstance();
    if (updater === void 0)
      updater = null;
    this.gridWorld = gridWorld;
    this.updater = updater;
    this.graph = null;
    this.count = 0;
    this.paths = ArrayList_init();
    this.boldPaths = ArrayList_init();
    this.a = null;
    this.w = 1.0;
    this.h = 1.0;
    this.cellSize = 20.0;
    this.centre = new Vec2d();
  }
  GridWorldView.prototype.paint_vzjx8w$ = function (xg) {
    var tmp$, tmp$_0;
    (tmp$ = this.updater) != null ? (tmp$.invoke(), Unit) : null;
    this.calcCellSize_vzjx8w$(xg);
    this.drawBackground_vzjx8w$(xg);
    this.draw_w2bsgl$(xg, this.gridWorld.a);
    this.drawPaths_g16lc6$(xg, this.paths);
    if ((tmp$_0 = this.graph) != null) {
      this.drawGraph_c761mr$(xg, tmp$_0);
    }};
  GridWorldView.prototype.drawPaths_g16lc6$ = function (xg, paths, bold) {
    if (bold === void 0)
      bold = false;
    var tmp$, tmp$_0;
    var xs = new XStyle(void 0, void 0, void 0, void 0, false);
    var colors = new XPalette(paths.size, 0.0, 0.5, L2);
    var ix = 0;
    tmp$ = paths.iterator();
    while (tmp$.hasNext()) {
      var path = tmp$.next();
      xs.lc = colors.getColor_za3lpa$((tmp$_0 = ix, ix = tmp$_0 + 1 | 0, tmp$_0));
      xs.lc.a = bold ? 1.0 : 0.5;
      var points = ArrayList_init();
      var tmp$_1;
      tmp$_1 = path.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        points.add_11rb$(this.getVec_2j9h0j$(element));
      }
      var xp = new XPoly(new Vec2d(), points, xs, void 0, false);
      xg.draw_dvdmun$(xp);
    }
  };
  GridWorldView.prototype.drawMainPaths_i1ns0x$ = function (xg, paths) {
    var tmp$;
    var xs = new XStyle(void 0, void 0, XColor$Companion_getInstance().blue, void 0, false, 5.0);
    var ix = 0;
    tmp$ = paths.iterator();
    while (tmp$.hasNext()) {
      var path = tmp$.next();
      var points = ArrayList_init();
      var tmp$_0;
      tmp$_0 = path.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        points.add_11rb$(this.getVec_2j9h0j$(element));
      }
      var xp = new XPoly(new Vec2d(), points, xs, void 0, false);
      xg.draw_dvdmun$(xp);
    }
  };
  GridWorldView.prototype.drawGraph_c761mr$ = function (xg, graph, drawPaths) {
    if (drawPaths === void 0)
      drawPaths = true;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var xs = new XStyle(void 0, void 0, void 0, void 0, false);
    var ix = 0;
    var mainPaths = ArrayList_init();
    tmp$ = graph.g.keys.iterator();
    while (tmp$.hasNext()) {
      var node = tmp$.next();
      tmp$_0 = graph.outArcs_za3rmp$(node).entries.iterator();
      while (tmp$_0.hasNext()) {
        var arc = tmp$_0.next();
        var from = Kotlin.isType(tmp$_1 = node, IntVec2d) ? tmp$_1 : throwCCE();
        var to = Kotlin.isType(tmp$_2 = arc.key, IntVec2d) ? tmp$_2 : throwCCE();
        xs.lc = XColor$Companion_getInstance().magenta;
        xs.lc.a = 1.0;
        var line = new XLine(this.getVec_2j9h0j$(from), this.getVec_2j9h0j$(to), xs);
        xg.draw_dvdmun$(line);
        if ((tmp$_3 = arc.value.path) != null) {
          mainPaths.add_11rb$(tmp$_3);
        }}
    }
    this.drawMainPaths_i1ns0x$(xg, mainPaths);
  };
  GridWorldView.prototype.getVec_2j9h0j$ = function (iv) {
    return new Vec2d((iv.x + 0.5) * this.cellSize, (iv.y + 0.5) * this.cellSize);
  };
  GridWorldView.prototype.getVec_lu1900$ = function (x, y) {
    return new Vec2d((x + 0.5) * this.cellSize, (y + 0.5) * this.cellSize);
  };
  GridWorldView.prototype.calcCellSize_vzjx8w$ = function (xg) {
    this.centre = new Vec2d(xg.width() / 2, xg.height() / 2);
    var colSize = xg.width() / this.gridWorld.nCols;
    var rowSize = xg.height() / this.gridWorld.nRows;
    this.cellSize = Math_0.min(colSize, rowSize);
  };
  GridWorldView.prototype.handleMouseEvent_x4hb96$ = function (e) {
  };
  GridWorldView.prototype.handleKeyEvent_wtf8cg$ = function (e) {
  };
  GridWorldView.prototype.setData_e14pso$ = function (a) {
    this.a = a;
  };
  GridWorldView.prototype.drawBackground_vzjx8w$ = function (xg) {
    var style = new XStyle();
    var rect = new XRect(this.centre, xg.width(), xg.height(), style);
    style.fg = XColor$Companion_getInstance().black;
    xg.draw_dvdmun$(rect);
  };
  GridWorldView.prototype.draw_w2bsgl$ = function (xg, a) {
    var tmp$, tmp$_0, tmp$_1;
    var style = new XStyle();
    var rect = new XRect(this.centre, this.cellSize, this.cellSize, style);
    tmp$ = this.gridWorld.nCols;
    for (var i = 0; i < tmp$; i++) {
      tmp$_0 = this.gridWorld.nRows;
      for (var j = 0; j < tmp$_0; j++) {
        var iv = new IntVec2d(i, j);
        style.fg = this.getColor_2j9h0j$(iv);
        style.stroke = true;
        style.lineWidth = 1.0;
        style.lc = XColor$Companion_getInstance().gray;
        rect.centre = new Vec2d((i + 0.5) * this.cellSize, (j + 0.5) * this.cellSize);
        xg.draw_dvdmun$(rect);
        if (this.gridWorld.atSubgoal_2j9h0j$(iv)) {
          var ds = new XStyle(XColor$Companion_getInstance().green);
          var disc = new XEllipse(rect.centre, this.cellSize, this.cellSize, ds);
          xg.draw_dvdmun$(disc);
        }if (this.gridWorld.atGoal_2j9h0j$(iv)) {
          var ds_0 = new XStyle(XColor$Companion_getInstance().blue);
          var points = (new PolyUtil()).makePolygon_w4xg1m$(3, this.cellSize / 2);
          xg.draw_dvdmun$(new XPoly(rect.centre, points, ds_0));
        }if ((tmp$_1 = this.gridWorld.startPosition()) != null ? tmp$_1.equals(iv) : null) {
          var ds_1 = new XStyle(XColor$Companion_getInstance().red);
          var points_0 = (new PolyUtil()).makePolygon_w4xg1m$(4, this.cellSize / 2);
          xg.draw_dvdmun$(new XPoly(rect.centre, points_0, ds_1, 0.0));
        }}
    }
  };
  GridWorldView.prototype.getColor_2j9h0j$ = function (iv) {
    if (this.gridWorld.navigable_2j9h0j$(iv))
      return XColor$Companion_getInstance().yellow;
    else
      return XColor$Companion_getInstance().black;
  };
  function GridWorldView$Companion() {
    GridWorldView$Companion_instance = this;
    this.colors = HashMap_init();
    this.cellSize = 20;
    this.frame = XColor$Companion_getInstance().blue;
    this.BG = 7;
  }
  GridWorldView$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GridWorldView$Companion_instance = null;
  function GridWorldView$Companion_getInstance() {
    if (GridWorldView$Companion_instance === null) {
      new GridWorldView$Companion();
    }return GridWorldView$Companion_instance;
  }
  GridWorldView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridWorldView',
    interfaces: [XApp]
  };
  function Levels() {
    Levels$list_getInstance();
  }
  function Levels$list() {
    Levels$list_instance = this;
    this.subgoals = trimIndent('\n        wwwwwwwwwwwwwwwwwwwwwwwww\n        w.....w.....s.....w....5w\n        w.....w.....w.....w.....w\n        w.....w.....w.....w.....w\n        w.....s.....w.....w.....w\n        w.....w.....w.....s.....w\n        wswwwww.....wwwwwsw.....w\n        w.....wwwwsww.....wwswwww\n        w.....w.....s.....w.....w\n        w.....w.....w.....w.....w\n        w.....w.....w.....w.....w\n        wA....s.....w.....s.....w\n        wwwwwwwwwwwwwwwwwwwwwwwww\n    ');
    this.noSubgoals = trimIndent('\n            wwwwwwwwwwwwwwwwwwwwwwwww\n            w.....w...........w....5w\n            w.....w.....w.....w.....w\n            w.....w.....w.....w.....w\n            w...........w.....w.....w\n            w.....w.....w...........w\n            w.wwwww.....wwwww.w.....w\n            w.....wwww.ww.....ww.wwww\n            w.....w...........w.....w\n            w.....w.....w.....w.....w\n            w.....w.....w.....w.....w\n            wA..........w...........w\n            wwwwwwwwwwwwwwwwwwwwwwwww\n        ');
    this.midroom = trimIndent('\n            wwwwwwwwwwwwwwwwwwwwwwwww\n            w.....w...........w....5w\n            w.....w.....w.....w.....w\n            w.....w.....w.....w.....w\n            w...........w.....w.....w\n            w.....w.....w...........w\n            w.wwwww.....wwwww.w.....w\n            w.....wwww.ww.....ww.wwww\n            w.....w...........w.....w\n            w..A..w.....w.....w.....w\n            w.....w.s...w.....w.....w\n            w...........w...........w\n            wwwwwwwwwwwwwwwwwwwwwwwww\n        ');
    this.doorway = trimIndent('\n            wwwwwwwwwwwwwwwwwwwwwwwww\n            w.....w...........w....5w\n            w.....w.....w.....w.....w\n            w.....w.....w.....w.....w\n            w...........w.....w.....w\n            w.....w.....w...........w\n            wswwwww.....wwwww.w.....w\n            w.....wwww.ww.....ww.wwww\n            w.....w...........w.....w\n            w.....w.....w.....w.....w\n            w.....w.....w.....w.....w\n            wA..........w...........w\n            wwwwwwwwwwwwwwwwwwwwwwwww\n        ');
  }
  Levels$list.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'list',
    interfaces: []
  };
  var Levels$list_instance = null;
  function Levels$list_getInstance() {
    if (Levels$list_instance === null) {
      new Levels$list();
    }return Levels$list_instance;
  }
  Levels.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Levels',
    interfaces: []
  };
  function TestMacroAgent(agent) {
    this.agent = agent;
  }
  TestMacroAgent.prototype.runTest_xd3pvk$ = function (world, maxSteps) {
    if (maxSteps === void 0)
      maxSteps = 100;
    for (var i = 0; i < maxSteps; i++) {
      var action = this.agent.getAction_84v5ee$(world.copy(), 0);
      world.next_q5rwfd$(new Int32Array([action]));
      if (world.isTerminal()) {
        return world.score();
      }}
    println('Failed to reach goal');
    return -1000.0;
  };
  TestMacroAgent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TestMacroAgent',
    interfaces: []
  };
  function MacroWorld(node, value, nTicksX, graph, starts, sub, foundGoal) {
    MacroWorld$Companion_getInstance();
    if (node === void 0)
      node = new IntVec2d();
    if (value === void 0)
      value = 0.0;
    if (nTicksX === void 0)
      nTicksX = 0;
    if (graph === void 0)
      graph = new Graph();
    if (starts === void 0)
      starts = HashSet_init();
    if (foundGoal === void 0)
      foundGoal = false;
    this.node = node;
    this.value = value;
    this.nTicksX = nTicksX;
    this.graph = graph;
    this.starts = starts;
    this.sub = sub;
    this.foundGoal = foundGoal;
    this.paths = ArrayList_init();
    this.verbose = false;
  }
  MacroWorld.prototype.copy = function () {
    return new MacroWorld(this.node, this.value, this.nTicksX, this.graph, this.starts, this.sub, this.foundGoal);
  };
  function MacroWorld$Companion() {
    MacroWorld$Companion_instance = this;
    this.maxLen = 100;
    this.goalScore = 100.0;
    this.stopAtSubgoal = true;
    this.totalTicks = L0;
  }
  MacroWorld$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MacroWorld$Companion_instance = null;
  function MacroWorld$Companion_getInstance() {
    if (MacroWorld$Companion_instance === null) {
      new MacroWorld$Companion();
    }return MacroWorld$Companion_instance;
  }
  MacroWorld.prototype.reset = function () {
    this.starts.clear();
    this.starts.add_11rb$(this.sub.startPosition());
    this.paths.clear();
    this.graph.clear();
  };
  MacroWorld.prototype.allPaths = function () {
    return this.paths;
  };
  MacroWorld.prototype.bestPaths = function () {
    var tmp$, tmp$_0, tmp$_1;
    var bp = ArrayList_init();
    tmp$ = this.graph.g.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_2 = tmp$.next();
      var k = tmp$_2.key;
      var v = tmp$_2.value;
      tmp$_0 = v.entries.iterator();
      while (tmp$_0.hasNext()) {
        var tmp$_3 = tmp$_0.next();
        var key = tmp$_3.key;
        var sp = tmp$_3.value;
        if ((tmp$_1 = sp.path) != null) {
          bp.add_11rb$(tmp$_1);
        }}
    }
    return bp;
  };
  MacroWorld.prototype.explorePaths_za3lpa$ = function (n) {
    var tmp$;
    for (var i = 0; i < n; i++) {
      var temp = ArrayList_init();
      temp.addAll_brywnq$(this.starts);
      tmp$ = temp.iterator();
      while (tmp$.hasNext()) {
        var start = tmp$.next();
        this.paths.add_11rb$(this.randomPath_2j9h0j$(start));
      }
    }
  };
  MacroWorld.prototype.makeMacros_za3lpa$ = function (n) {
    var tmp$;
    this.starts.clear();
    this.starts.addAll_brywnq$(this.sub.subgoals);
    this.starts.add_11rb$(this.sub.startPosition());
    for (var i = 0; i < n; i++) {
      tmp$ = this.starts.iterator();
      while (tmp$.hasNext()) {
        var start = tmp$.next();
        this.randomWalk_2j9h0j$(start);
      }
    }
  };
  MacroWorld.prototype.randomWalk_2j9h0j$ = function (start) {
    var tmp$, tmp$_0;
    var state = new SubGridState(start, this.sub);
    var path = ArrayList_init();
    path.add_11rb$(start);
    tmp$ = MacroWorld$Companion_getInstance().maxLen;
    for (var i = 1; i <= tmp$; i++) {
      state.next_za3lpa$(Random.Default.nextInt_za3lpa$(state.nActions()));
      path.add_11rb$(state.s);
      if (this.sub.atSubgoal_2j9h0j$(state.s) && !((tmp$_0 = state.s) != null ? tmp$_0.equals(start) : null)) {
        this.graph.updateCost_m7l82n$(start, state.s, i);
        if (MacroWorld$Companion_getInstance().stopAtSubgoal)
          return;
      }}
  };
  MacroWorld.prototype.randomPath_2j9h0j$ = function (start) {
    var tmp$, tmp$_0;
    var path = ArrayList_init();
    var state = new SubGridState(start, this.sub);
    path.add_11rb$(start);
    tmp$ = MacroWorld$Companion_getInstance().maxLen;
    for (var i = 1; i <= tmp$; i++) {
      state.next_za3lpa$(Random.Default.nextInt_za3lpa$(state.nActions()));
      path.add_11rb$(state.s);
      if (this.sub.atSubgoal_2j9h0j$(state.s) && !((tmp$_0 = state.s) != null ? tmp$_0.equals(start) : null)) {
        this.graph.updateCost_m7l82n$(start, state.s, i, path);
        this.starts.add_11rb$(state.s);
        if (MacroWorld$Companion_getInstance().stopAtSubgoal)
          return path;
      }}
    return path;
  };
  MacroWorld.prototype.totalTicks = function () {
    var tmp$;
    tmp$ = MacroWorld$Companion_getInstance().totalTicks;
    MacroWorld$Companion_getInstance().totalTicks = tmp$.inc();
    return MacroWorld$Companion_getInstance().totalTicks;
  };
  MacroWorld.prototype.resetTotalTicks = function () {
    MacroWorld$Companion_getInstance().totalTicks = L0;
  };
  MacroWorld.prototype.randomInitialState = function () {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Not yet implemented');
  };
  MacroWorld.prototype.next_q5rwfd$ = function (actions) {
    var tmp$, tmp$_0;
    if (this.isTerminal())
      return this;
    this.nTicksX = this.nTicksX + 1 | 0;
    var action = actions[0];
    if (this.verbose) {
      println('\n' + 'Aiming for action ' + action + ' from ' + toString(this.graph.g.get_11rb$(this.node)));
      println('nActions = ' + this.nActions() + ', map size = ' + toString((tmp$ = this.graph.g.get_11rb$(this.node)) != null ? tmp$.size : null));
    }var next = this.graph.ithEntry_wn2dyp$(this.node, action);
    if (next != null) {
      this.value -= next.value.score;
      this.node = next.key;
      if (Kotlin.isType(this.node, IntVec2d)) {
        if (this.sub.atGoal_2j9h0j$(Kotlin.isType(tmp$_0 = this.node, IntVec2d) ? tmp$_0 : throwCCE())) {
          this.foundGoal = true;
        }}}return this;
  };
  MacroWorld.prototype.nActions = function () {
    return this.graph.outArcs_za3rmp$(this.node).size;
  };
  MacroWorld.prototype.score = function () {
    var score = this.isTerminal() ? MacroWorld$Companion_getInstance().goalScore : 0.0;
    return score + this.value;
  };
  MacroWorld.prototype.isTerminal = function () {
    return this.foundGoal;
  };
  MacroWorld.prototype.nTicks = function () {
    return this.nTicksX;
  };
  MacroWorld.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MacroWorld',
    interfaces: [ExtendedAbstractGameState]
  };
  function SubGridSnap(s, score, subgoalReached) {
    this.s = s;
    this.score = score;
    this.subgoalReached = subgoalReached;
  }
  SubGridSnap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SubGridSnap',
    interfaces: []
  };
  SubGridSnap.prototype.component1 = function () {
    return this.s;
  };
  SubGridSnap.prototype.component2 = function () {
    return this.score;
  };
  SubGridSnap.prototype.component3 = function () {
    return this.subgoalReached;
  };
  SubGridSnap.prototype.copy_qubmmg$ = function (s, score, subgoalReached) {
    return new SubGridSnap(s === void 0 ? this.s : s, score === void 0 ? this.score : score, subgoalReached === void 0 ? this.subgoalReached : subgoalReached);
  };
  SubGridSnap.prototype.toString = function () {
    return 'SubGridSnap(s=' + Kotlin.toString(this.s) + (', score=' + Kotlin.toString(this.score)) + (', subgoalReached=' + Kotlin.toString(this.subgoalReached)) + ')';
  };
  SubGridSnap.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.s) | 0;
    result = result * 31 + Kotlin.hashCode(this.score) | 0;
    result = result * 31 + Kotlin.hashCode(this.subgoalReached) | 0;
    return result;
  };
  SubGridSnap.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.s, other.s) && Kotlin.equals(this.score, other.score) && Kotlin.equals(this.subgoalReached, other.subgoalReached)))));
  };
  function SubGridState(s, grid, nTicksX, subgoalReached) {
    SubGridState$Companion_getInstance();
    if (nTicksX === void 0)
      nTicksX = 0;
    if (subgoalReached === void 0)
      subgoalReached = false;
    this.s = s;
    this.grid = grid;
    this.nTicksX = nTicksX;
    this.subgoalReached = subgoalReached;
  }
  SubGridState.prototype.toString = function () {
    return (new SubGridSnap(this.s, this.score(), this.subgoalReached)).toString();
  };
  SubGridState.prototype.equals = function (other) {
    var tmp$;
    if (Kotlin.isType(other, SubGridState))
      return (tmp$ = this.s) != null ? tmp$.equals(other.s) : null;
    else
      return false;
  };
  SubGridState.prototype.hashCode = function () {
    return this.s.hashCode();
  };
  SubGridState.prototype.next_q5rwfd$ = function (actions) {
    this.next_za3lpa$(actions[0]);
    return this;
  };
  SubGridState.prototype.next_za3lpa$ = function (action) {
    var temp = this.s.plus_2j9h0j$(this.grid.actions.get_za3lpa$(action));
    if (this.grid.navigable_2j9h0j$(temp)) {
      this.s = temp;
      if (this.grid.atSubgoal_2j9h0j$(this.s))
        this.subgoalReached = true;
    }if (!this.subgoalReached) {
      this.nTicksX = this.nTicksX + 1 | 0;
    }};
  function SubGridState$Companion() {
    SubGridState$Companion_instance = this;
    this.totalTicks = L0;
    this.subGoalScore = 100.0;
    this.goalScore = 1000.0;
  }
  SubGridState$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SubGridState$Companion_instance = null;
  function SubGridState$Companion_getInstance() {
    if (SubGridState$Companion_instance === null) {
      new SubGridState$Companion();
    }return SubGridState$Companion_instance;
  }
  SubGridState.prototype.totalTicks = function () {
    return SubGridState$Companion_getInstance().totalTicks;
  };
  SubGridState.prototype.resetTotalTicks = function () {
    SubGridState$Companion_getInstance().totalTicks = L0;
  };
  SubGridState.prototype.randomInitialState = function () {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Not yet implemented');
  };
  SubGridState.prototype.copy = function () {
    return new SubGridState(this.s.copy_vux9f0$(), this.grid, this.nTicksX, this.subgoalReached);
  };
  SubGridState.prototype.nActions = function () {
    return this.grid.nActions();
  };
  SubGridState.prototype.score = function () {
    var x = this.subgoalReached ? SubGridState$Companion_getInstance().subGoalScore : 0.0;
    return x - this.nTicksX;
  };
  SubGridState.prototype.isTerminal = function () {
    return this.grid.atGoal_2j9h0j$(this.s);
  };
  SubGridState.prototype.nTicks = function () {
    return this.nTicksX;
  };
  SubGridState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SubGridState',
    interfaces: [ExtendedAbstractGameState]
  };
  function SubGridWorld(str) {
    this.str = str;
    this.nCols = 0;
    this.nRows = 0;
    this.a = null;
    this.avatar = iv(0, 0);
    this.goal = iv(0, 0);
    this.subgoals = HashSet_init();
    this.wallChar = toBoxedChar(119);
    this.goalChar = toBoxedChar(53);
    this.subGoalChar = toBoxedChar(115);
    this.avatarChar = toBoxedChar(65);
    this.allowDoNothing = true;
    this.actions = arrayListOf([iv(1, 0), iv(0, 1), iv(-1, 0), iv(0, -1)]);
    this.navigables = 0;
    var tmp$, tmp$_0;
    var lines_0 = lines(this.str);
    this.nCols = lines_0.get_za3lpa$(0).length;
    this.nRows = lines_0.size;
    var array = Array_0(this.nCols);
    var tmp$_1;
    tmp$_1 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_1; i++) {
      array[i] = Kotlin.charArray(this.nRows);
    }
    this.a = array;
    tmp$ = this.nCols;
    for (var i_0 = 0; i_0 < tmp$; i_0++) {
      tmp$_0 = this.nRows;
      for (var j = 0; j < tmp$_0; j++) {
        this.a[i_0][j] = lines_0.get_za3lpa$(j).charCodeAt(i_0);
        if (this.navigable_2j9h0j$(iv(i_0, j))) {
          this.navigables = this.navigables + 1 | 0;
        }switch (this.a[i_0][j]) {
          case 53:
            this.goal = iv(i_0, j);
            break;
          case 115:
            this.subgoals.add_11rb$(iv(i_0, j));
            break;
          case 65:
            this.avatar = iv(i_0, j);
            break;
        }
      }
    }
    if (this.allowDoNothing)
      this.actions.add_11rb$(iv(0, 0));
    this.subgoals.add_11rb$(this.goal);
    println('Goal position: ' + toString(this.goal));
    println('Navigable locations = ' + this.navigables);
    println(1.0 / this.navigables);
  }
  SubGridWorld.prototype.navigable_2j9h0j$ = function (iv) {
    return this.a[iv.x][iv.y] !== unboxChar(this.wallChar);
  };
  SubGridWorld.prototype.startPosition = function () {
    return this.avatar;
  };
  SubGridWorld.prototype.atGoal_2j9h0j$ = function (iv) {
    return iv != null ? iv.equals(this.goal) : null;
  };
  SubGridWorld.prototype.atSubgoal_2j9h0j$ = function (iv) {
    return this.subgoals.contains_11rb$(iv);
  };
  SubGridWorld.prototype.nActions = function () {
    return this.actions.size;
  };
  SubGridWorld.prototype.addRandomSubgoals_za3lpa$ = function (n) {
    var tmp$;
    var totalAttempts = 10 * n | 0;
    var nAdditions = 0;
    for (var i = 0; i < totalAttempts; i++) {
      var p = new IntVec2d(Random.Default.nextInt_za3lpa$(this.nCols), Random.Default.nextInt_za3lpa$(this.nRows));
      if (this.navigable_2j9h0j$(p) && !this.subgoals.contains_11rb$(p) && !((tmp$ = this.goal) != null ? tmp$.equals(p) : null)) {
        this.subgoals.add_11rb$(p);
        nAdditions = nAdditions + 1 | 0;
        if (nAdditions >= n)
          return;
      }}
  };
  SubGridWorld.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SubGridWorld',
    interfaces: []
  };
  function SubgoalDemoControl() {
  }
  SubgoalDemoControl.prototype.nSubgoals = function () {
    return 0;
  };
  SubgoalDemoControl.prototype.useDoorways = function () {
    return false;
  };
  SubgoalDemoControl.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SubgoalDemoControl',
    interfaces: []
  };
  function DefaultDemoControl(n) {
    if (n === void 0)
      n = 10;
    this.n = n;
  }
  DefaultDemoControl.prototype.nSubgoals = function () {
    return this.n;
  };
  DefaultDemoControl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultDemoControl',
    interfaces: [SubgoalDemoControl]
  };
  function SubgoalDemo(control) {
    if (control === void 0)
      control = new DefaultDemoControl();
    this.control = control;
    this.xp = new XPalette();
    this.viewApp = null;
    this.reset();
  }
  SubgoalDemo.prototype.reset = function () {
    println('Resetting with ' + this.control.nSubgoals() + ' subgoals');
    println('Resetting with ' + this.control.useDoorways() + ' subgoals');
    var level = this.control.useDoorways() ? Levels$list_getInstance().subgoals : Levels$list_getInstance().noSubgoals;
    var gridWorld = new SubGridWorld(level);
    gridWorld.addRandomSubgoals_za3lpa$(this.control.nSubgoals());
    var macro = new MacroWorld(void 0, void 0, void 0, void 0, void 0, gridWorld);
    var app = new GridWorldView(gridWorld);
    var updater = new DemoUpdater(app, macro, gridWorld);
    app.updater = updater;
    this.viewApp = app;
  };
  SubgoalDemo.prototype.paint_vzjx8w$ = function (xg) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var layout = new Layout(0.05);
    var panes = layout.vPartition_pk60e5$(xg.width(), xg.height(), 2, arrayListOf([0.8, 0.2]));
    panes.get_za3lpa$(0).app = this.viewApp;
    panes.get_za3lpa$(1).app = null;
    var cIndex = 0;
    var bgRect = new XRect(xg.centre(), xg.width(), xg.height(), new XStyle(this.xp.colors.get_za3lpa$((tmp$ = cIndex, cIndex = tmp$ + 1 | 0, tmp$))));
    xg.draw_dvdmun$(bgRect);
    tmp$_0 = panes.iterator();
    while (tmp$_0.hasNext()) {
      var pane = tmp$_0.next();
      var xRext = pane.XRect_gibxdg$(new XStyle(this.xp.colors.get_za3lpa$((tmp$_1 = cIndex, cIndex = tmp$_1 + 1 | 0, tmp$_1))));
      xg.draw_dvdmun$(xRext);
      if ((tmp$_2 = pane.app) != null) {
        xg.setBounds_z39lsx$(pane);
        tmp$_2.paint_vzjx8w$(xg);
        xg.releaseBounds();
      }}
  };
  SubgoalDemo.prototype.handleMouseEvent_x4hb96$ = function (e) {
  };
  SubgoalDemo.prototype.handleKeyEvent_wtf8cg$ = function (e) {
  };
  SubgoalDemo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SubgoalDemo',
    interfaces: [XApp]
  };
  function DemoUpdater(view, macro, gridWorld) {
    DemoUpdater$Companion_getInstance();
    this.view = view;
    this.macro = macro;
    this.gridWorld = gridWorld;
    this.count = 0;
    this.paths = ArrayList_init();
  }
  function DemoUpdater$Companion() {
    DemoUpdater$Companion_instance = this;
    this.skip = 50;
  }
  DemoUpdater$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DemoUpdater$Companion_instance = null;
  function DemoUpdater$Companion_getInstance() {
    if (DemoUpdater$Companion_instance === null) {
      new DemoUpdater$Companion();
    }return DemoUpdater$Companion_instance;
  }
  DemoUpdater.prototype.invoke = function () {
    this.count = this.count + 1 | 0;
    if (this.count % DemoUpdater$Companion_getInstance().skip === 0) {
      this.macro.reset();
    } else {
      this.macro.explorePaths_za3lpa$(1);
    }
    this.view.paths = this.macro.allPaths();
    this.view.boldPaths = this.macro.bestPaths();
    this.view.graph = this.macro.graph;
  };
  DemoUpdater.prototype.addRandomPaths = function () {
    var nPaths = 1;
    var tmp$;
    tmp$ = (new IntRange(1, nPaths)).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.paths.add_11rb$(this.macro.randomPath_2j9h0j$(this.gridWorld.startPosition()));
    }
    this.view.paths = this.paths;
  };
  DemoUpdater.prototype.resetPaths = function () {
    this.paths.clear();
  };
  DemoUpdater.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DemoUpdater',
    interfaces: [Updater]
  };
  function ScoredPath(score, path) {
    if (path === void 0)
      path = null;
    this.score = score;
    this.path = path;
  }
  ScoredPath.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScoredPath',
    interfaces: []
  };
  ScoredPath.prototype.component1 = function () {
    return this.score;
  };
  ScoredPath.prototype.component2 = function () {
    return this.path;
  };
  ScoredPath.prototype.copy_6f9tkv$ = function (score, path) {
    return new ScoredPath(score === void 0 ? this.score : score, path === void 0 ? this.path : path);
  };
  ScoredPath.prototype.toString = function () {
    return 'ScoredPath(score=' + Kotlin.toString(this.score) + (', path=' + Kotlin.toString(this.path)) + ')';
  };
  ScoredPath.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.score) | 0;
    result = result * 31 + Kotlin.hashCode(this.path) | 0;
    return result;
  };
  ScoredPath.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.score, other.score) && Kotlin.equals(this.path, other.path)))));
  };
  function Updater() {
  }
  Updater.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Updater',
    interfaces: []
  };
  function TetrisController() {
    this.tg = null;
    this.keyController = new TetrisKeyController();
    this.agent = this.keyController;
    this.nCols = 10;
    this.nRows = 22;
    this.tv = new TetrisView(this.nCols, this.nRows);
    this.setModelParams_0();
    this.tg = new TetrisGame();
  }
  TetrisController.prototype.paint_vzjx8w$ = function (xg) {
    if (this.tg.isTerminal()) {
      this.tg = new TetrisGame();
    } else {
      var action = this.agent.getAction_84v5ee$(this.tg.copy(), 0);
      this.tg.next_q5rwfd$(new Int32Array([action]));
      var score = this.tg.score();
      var message = this.tg.nTicks().toString() + '\t' + ' ' + score + '\t' + ' ' + action + '\t' + ' ' + this.tg.totalTicks().toString() + '\t' + ' ' + this.tg.subGoal();
    }
    this.tv.setData_pz4dsq$(this.tg.tm.a, this.tg.tm.tetronSprite, this.tg.tm.getGhost(), numberToInt(this.tg.score()));
    this.tv.paint_vzjx8w$(xg);
  };
  TetrisController.prototype.handleMouseEvent_x4hb96$ = function (e) {
  };
  TetrisController.prototype.handleKeyEvent_wtf8cg$ = function (e) {
    this.keyController.handleKeyEvent_wtf8cg$(e);
  };
  TetrisController.prototype.setModelParams_0 = function () {
    TetrisModel$Companion_getInstance().defaultCols = this.nCols;
    TetrisModel$Companion_getInstance().defaultRows = this.nRows;
    TetrisModel$Companion_getInstance().includeColumnDiffs = false;
    TetrisModel$Companion_getInstance().gameOverPenalty = 0;
    TetrisModel$Companion_getInstance().cyclicBlockType = false;
    TetrisModel$Companion_getInstance().randomInitialRotation = true;
    TetrisModel$Companion_getInstance().randomShapeColours = false;
    TetrisModel$Companion_getInstance().gameOverPenalty = 0;
    TetrisModel$Companion_getInstance().dropSkip = 50;
  };
  TetrisController.prototype.getData = function () {
    var safe = this.agent;
    if (Kotlin.isType(safe, RolloutDataSource))
      return safe != null ? safe.getData() : null;
    else
      return null;
  };
  TetrisController.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TetrisController',
    interfaces: [RolloutDataSource, XApp]
  };
  function TetrisKeyController() {
    this.currentKey = null;
    this.keyMap = hashMapOf([to(XKeyMap$Companion_getInstance().left, Actions$Left_getInstance().ordinal), to(XKeyMap$Companion_getInstance().up, Actions$Rotate_getInstance().ordinal), to(XKeyMap$Companion_getInstance().right, Actions$Right_getInstance().ordinal), to(XKeyMap$Companion_getInstance().down, Actions$Down_getInstance().ordinal), to(XKeyMap$Companion_getInstance().space, Actions$Drop_getInstance().ordinal)]);
  }
  TetrisKeyController.prototype.handleKeyEvent_wtf8cg$ = function (e) {
    println(e);
    if (e.t === XKeyEventType$Pressed_getInstance() || e.t === XKeyEventType$Down_getInstance()) {
      this.currentKey = e.keyCode;
      println('Set current key to ' + toString(this.currentKey));
    } else if (e.t === XKeyEventType$Released_getInstance()) {
      this.currentKey = null;
    }};
  TetrisKeyController.prototype.getAgentType = function () {
    return 'Tetris Key Controller';
  };
  TetrisKeyController.prototype.getAction_84v5ee$ = function (gameState, playerId) {
    var key = this.currentKey;
    if (key == null)
      return Actions$DoNothing_getInstance().ordinal;
    else {
      var proposed = this.keyMap.get_11rb$(key);
      println('Returning proposed action: ' + toString(proposed));
      this.currentKey = null;
      return proposed == null ? Actions$DoNothing_getInstance().ordinal : proposed;
    }
  };
  TetrisKeyController.prototype.reset = function () {
    return this;
  };
  TetrisKeyController.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TetrisKeyController',
    interfaces: [SimplePlayerInterface]
  };
  function Actions(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Actions_initFields() {
    Actions_initFields = function () {
    };
    Actions$DoNothing_instance = new Actions('DoNothing', 0);
    Actions$Left_instance = new Actions('Left', 1);
    Actions$Right_instance = new Actions('Right', 2);
    Actions$Rotate_instance = new Actions('Rotate', 3);
    Actions$Down_instance = new Actions('Down', 4);
    Actions$Drop_instance = new Actions('Drop', 5);
  }
  var Actions$DoNothing_instance;
  function Actions$DoNothing_getInstance() {
    Actions_initFields();
    return Actions$DoNothing_instance;
  }
  var Actions$Left_instance;
  function Actions$Left_getInstance() {
    Actions_initFields();
    return Actions$Left_instance;
  }
  var Actions$Right_instance;
  function Actions$Right_getInstance() {
    Actions_initFields();
    return Actions$Right_instance;
  }
  var Actions$Rotate_instance;
  function Actions$Rotate_getInstance() {
    Actions_initFields();
    return Actions$Rotate_instance;
  }
  var Actions$Down_instance;
  function Actions$Down_getInstance() {
    Actions_initFields();
    return Actions$Down_instance;
  }
  var Actions$Drop_instance;
  function Actions$Drop_getInstance() {
    Actions_initFields();
    return Actions$Drop_instance;
  }
  Actions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Actions',
    interfaces: [Enum]
  };
  function Actions$values() {
    return [Actions$DoNothing_getInstance(), Actions$Left_getInstance(), Actions$Right_getInstance(), Actions$Rotate_getInstance(), Actions$Down_getInstance(), Actions$Drop_getInstance()];
  }
  Actions.values = Actions$values;
  function Actions$valueOf(name) {
    switch (name) {
      case 'DoNothing':
        return Actions$DoNothing_getInstance();
      case 'Left':
        return Actions$Left_getInstance();
      case 'Right':
        return Actions$Right_getInstance();
      case 'Rotate':
        return Actions$Rotate_getInstance();
      case 'Down':
        return Actions$Down_getInstance();
      case 'Drop':
        return Actions$Drop_getInstance();
      default:throwISE('No enum constant games.tetris.Actions.' + name);
    }
  }
  Actions.valueOf_61zpoe$ = Actions$valueOf;
  function TetrisGame() {
    TetrisGame$Companion_getInstance();
    this.nInternalTicks_0 = 0;
    this.tm = new TetrisModel();
    this.justLanded = false;
  }
  function TetrisGame$Companion() {
    TetrisGame$Companion_instance = this;
    this.nTotalTicks = L0;
    this.xLeft = -1;
    this.xRight = 1;
    this.down = 1;
    this.cyclicBlockType = true;
  }
  TetrisGame$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TetrisGame$Companion_instance = null;
  function TetrisGame$Companion_getInstance() {
    if (TetrisGame$Companion_instance === null) {
      new TetrisGame$Companion();
    }return TetrisGame$Companion_instance;
  }
  TetrisGame.prototype.totalTicks = function () {
    return TetrisGame$Companion_getInstance().nTotalTicks;
  };
  TetrisGame.prototype.resetTotalTicks = function () {
    TetrisGame$Companion_getInstance().nTotalTicks = L0;
  };
  TetrisGame.prototype.randomInitialState = function () {
    return this;
  };
  TetrisGame.prototype.copy = function () {
    var tg = new TetrisGame();
    tg.tm = this.tm.copy();
    tg.nInternalTicks_0 = this.nInternalTicks_0;
    return tg;
  };
  TetrisGame.prototype.next_q5rwfd$ = function (actions) {
    var tmp$;
    this.takeAction_za3lpa$(actions[0]);
    if (TetrisModel$Companion_getInstance().dropSkip > 0 && this.nInternalTicks_0 % TetrisModel$Companion_getInstance().dropSkip === 0)
      this.takeAction_za3lpa$(Actions$Down_getInstance().ordinal);
    this.nInternalTicks_0 = this.nInternalTicks_0 + 1 | 0;
    tmp$ = TetrisGame$Companion_getInstance().nTotalTicks;
    TetrisGame$Companion_getInstance().nTotalTicks = tmp$.inc();
    return this;
  };
  TetrisGame.prototype.takeAction_za3lpa$ = function (action) {
    this.justLanded = false;
    if (action !== Actions$DoNothing_getInstance().ordinal)
      if (action === Actions$Left_getInstance().ordinal)
        this.tm.move_vux9f0$(TetrisGame$Companion_getInstance().xLeft, 0);
      else if (action === Actions$Right_getInstance().ordinal)
        this.tm.move_vux9f0$(TetrisGame$Companion_getInstance().xRight, 0);
      else if (action === Actions$Rotate_getInstance().ordinal)
        this.tm.rotate();
      else if (action === Actions$Down_getInstance().ordinal) {
        if (!this.tm.move_vux9f0$(0, TetrisGame$Companion_getInstance().down)) {
          this.tm.place();
          this.justLanded = true;
          this.tm.checkRows();
          this.tm.newShape();
        }} else if (action === Actions$Drop_getInstance().ordinal)
        this.dropDown_0();
  };
  TetrisGame.prototype.subGoal = function () {
    return this.justLanded;
  };
  TetrisGame.prototype.dropDown_0 = function () {
    while (this.tm.move_vux9f0$(0, TetrisGame$Companion_getInstance().down))
    ;
    this.tm.place();
    this.justLanded = true;
    this.tm.checkRows();
    this.tm.newShape();
  };
  TetrisGame.prototype.nActions = function () {
    return Actions$values().length;
  };
  TetrisGame.prototype.score = function () {
    var penalty = this.tm.gameOn() ? 0 : TetrisModel$Companion_getInstance().gameOverPenalty;
    var colDiff = TetrisModel$Companion_getInstance().includeColumnDiffs ? (new ColHeightDiff()).value_tsk8so$(this) : 0.0;
    return this.tm.score - penalty + colDiff;
  };
  TetrisGame.prototype.isTerminal = function () {
    return !this.tm.gameOn();
  };
  TetrisGame.prototype.nTicks = function () {
    return this.nInternalTicks_0;
  };
  TetrisGame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TetrisGame',
    interfaces: [ExtendedAbstractGameState]
  };
  function main_2() {
    var model = new TetrisModel();
    println(model.gameOn());
  }
  function TetrisModel(nCols, nRows) {
    TetrisModel$Companion_getInstance();
    if (nCols === void 0)
      nCols = TetrisModel$Companion_getInstance().defaultCols;
    if (nRows === void 0)
      nRows = TetrisModel$Companion_getInstance().defaultRows;
    this.nCols = nCols;
    this.nRows = nRows;
    var array = Array_0(this.nCols);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var array_0 = new Int32Array(this.nRows);
      var tmp$_0;
      tmp$_0 = array_0.length - 1 | 0;
      for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
        array_0[i_0] = TetrisConstants_getInstance().BG;
      }
      array[i] = array_0;
    }
    this.a = array;
    this.score = 0;
    this.tetronSprite = null;
    this.blockCount = 0;
    if (this.tetronSprite == null)
      this.newShape();
  }
  TetrisModel.prototype.copy = function () {
    var tmp$, tmp$_0, tmp$_1;
    var tm = new TetrisModel(this.nCols, this.nRows);
    tm.score = this.score;
    tm.blockCount = this.blockCount;
    tm.tetronSprite = (tmp$ = this.tetronSprite) != null ? tmp$.copy_4qozqa$() : null;
    tmp$_0 = this.nCols;
    for (var i = 0; i < tmp$_0; i++) {
      tmp$_1 = this.nRows;
      for (var j = 0; j < tmp$_1; j++)
        tm.a[i][j] = this.a[i][j];
    }
    return tm;
  };
  TetrisModel.prototype.checkRows = function () {
    var flag = false;
    var r = 0;
    while (r < this.nRows) {
      if (this.full_0(r)) {
        flag = true;
        this.score = this.score + TetrisModel$Companion_getInstance().baseReward | 0;
        this.clearRow_0(r);
        this.scroll_0(r);
        r = r - 1 | 0;
      }r = r + 1 | 0;
    }
    return flag;
  };
  TetrisModel.prototype.full_0 = function (r) {
    var tmp$;
    tmp$ = this.nCols;
    for (var i = 0; i < tmp$; i++) {
      if (this.a[i][r] === TetrisConstants_getInstance().BG) {
        return false;
      }}
    return true;
  };
  TetrisModel.prototype.clearRow_0 = function (r) {
    var tmp$;
    tmp$ = this.nCols;
    for (var i = 0; i < tmp$; i++) {
      this.a[i][r] = TetrisConstants_getInstance().BG;
    }
  };
  TetrisModel.prototype.scroll_0 = function (sr) {
    var tmp$;
    for (var r = sr; r >= 1; r--) {
      tmp$ = this.nCols;
      for (var c = 0; c < tmp$; c++)
        this.a[c][r] = this.a[c][r - 1 | 0];
    }
  };
  TetrisModel.prototype.move_vux9f0$ = function (dx, dy) {
    var tmp$;
    var ts = this.tetronSprite;
    if (ts != null) {
      tmp$ = ts.move_fwq3ux$(dx, dy, this.a);
    } else
      tmp$ = false;
    return tmp$;
  };
  TetrisModel.prototype.rotate = function () {
    var ts = this.tetronSprite;
    if (ts != null)
      ts.rotate_ytlutl$(this.a);
  };
  TetrisModel.prototype.place = function () {
    var ts = this.tetronSprite;
    if (ts != null) {
      ts.place_ytlutl$(this.a);
    }};
  TetrisModel.prototype.gameOn = function () {
    var ts = this.tetronSprite;
    return ts != null && ts.valid_ytlutl$(this.a);
  };
  TetrisModel.prototype.newShape = function () {
    var tmp$;
    if (TetrisModel$Companion_getInstance().cyclicBlockType) {
      tmp$ = this.blockCount % Tetrons_getInstance().shapes.length;
    } else {
      tmp$ = TetrisModel$Companion_getInstance().rand.nextInt_za3lpa$(Tetrons_getInstance().shapes.length);
    }
    var tType = tmp$;
    this.blockCount = this.blockCount + 1 | 0;
    var tColor = TetrisModel$Companion_getInstance().randomShapeColours ? TetrisModel$Companion_getInstance().rand.nextInt_za3lpa$(Tetrons_getInstance().shapes.length) : tType;
    var x = (this.nCols / 2 | 0) - 1 | 0;
    var y = 2;
    var rotation = TetrisModel$Companion_getInstance().randomInitialRotation ? TetrisModel$Companion_getInstance().rand.nextInt_za3lpa$(4) : 0;
    var ts = new TetronSprite(x, y, rotation, tType, tColor);
    if (ts.valid_ytlutl$(this.a)) {
      this.tetronSprite = ts;
      return true;
    } else {
      this.tetronSprite = null;
      return false;
    }
  };
  TetrisModel.prototype.getGhost = function () {
    var ts = this.tetronSprite;
    if (ts != null) {
      var ghost = ts.copy_4qozqa$();
      while (ghost.move_fwq3ux$(0, 1, this.a))
      ;
      return ghost;
    } else
      return null;
  };
  function TetrisModel$Companion() {
    TetrisModel$Companion_instance = this;
    this.rand = Random_0(10);
    this.baseReward = 100;
    this.heightFactor = 100;
    this.defaultRows = 24;
    this.defaultCols = 8;
    this.randomShapeColours = false;
    this.cyclicBlockType = true;
    this.randomInitialRotation = false;
    this.includeColumnDiffs = true;
    this.gameOverPenalty = 0;
    this.dropSkip = 10;
  }
  TetrisModel$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TetrisModel$Companion_instance = null;
  function TetrisModel$Companion_getInstance() {
    if (TetrisModel$Companion_instance === null) {
      new TetrisModel$Companion();
    }return TetrisModel$Companion_instance;
  }
  TetrisModel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TetrisModel',
    interfaces: []
  };
  function TetrisConstants() {
    TetrisConstants_instance = this;
    this.BG = Tetrons_getInstance().shapes.length;
    this.baseReward = 100;
    this.heightFactor = 100;
    this.defaultRows = 30;
    this.defaultCols = 60;
  }
  TetrisConstants.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'TetrisConstants',
    interfaces: []
  };
  var TetrisConstants_instance = null;
  function TetrisConstants_getInstance() {
    if (TetrisConstants_instance === null) {
      new TetrisConstants();
    }return TetrisConstants_instance;
  }
  function TetrisValueFunction() {
    TetrisValueFunction$Companion_getInstance();
  }
  function TetrisValueFunction$Companion() {
    TetrisValueFunction$Companion_instance = this;
    this.rand = Random.Default;
    this.eps = 1.0E-10;
    this.cellFactor = 0.01;
  }
  TetrisValueFunction$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TetrisValueFunction$Companion_instance = null;
  function TetrisValueFunction$Companion_getInstance() {
    if (TetrisValueFunction$Companion_instance === null) {
      new TetrisValueFunction$Companion();
    }return TetrisValueFunction$Companion_instance;
  }
  TetrisValueFunction.prototype.value_tsk8so$ = function (gameState) {
    var tmp$;
    var noise = TetrisValueFunction$Companion_getInstance().rand.nextDouble() * TetrisValueFunction$Companion_getInstance().eps;
    if (!Kotlin.isType(gameState, TetrisGame))
      return noise;
    var a = gameState.tm.a;
    var hScore = 0.0;
    for (var i = 0; i < a.length; i++) {
      tmp$ = a[i].length;
      for (var j = 0; j < tmp$; j++) {
        if (a[i][j] !== TetrisConstants_getInstance().BG)
          hScore += Kotlin.imul(j, j) * TetrisValueFunction$Companion_getInstance().cellFactor;
      }
    }
    return hScore;
  };
  TetrisValueFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TetrisValueFunction',
    interfaces: [AbstractValueFunction]
  };
  function ColHeightDiff() {
    ColHeightDiff$Companion_getInstance();
    this.heights = ArrayList_init();
  }
  function ColHeightDiff$Companion() {
    ColHeightDiff$Companion_instance = this;
    this.rand = Random.Default;
    this.eps = 1.0E-10;
  }
  ColHeightDiff$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ColHeightDiff$Companion_instance = null;
  function ColHeightDiff$Companion_getInstance() {
    if (ColHeightDiff$Companion_instance === null) {
      new ColHeightDiff$Companion();
    }return ColHeightDiff$Companion_instance;
  }
  ColHeightDiff.prototype.getHeights_tsk8so$ = function (gameState) {
    this.value_tsk8so$(gameState);
    return this.heights;
  };
  ColHeightDiff.prototype.value_tsk8so$ = function (gameState) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var noise = ColHeightDiff$Companion_getInstance().rand.nextDouble() * ColHeightDiff$Companion_getInstance().eps;
    if (!Kotlin.isType(gameState, TetrisGame))
      return noise;
    var a = gameState.tm.a;
    var tm = (Kotlin.isType(tmp$ = gameState, TetrisGame) ? tmp$ : throwCCE()).tm;
    var array = Array_0(a.length);
    var tmp$_3;
    tmp$_3 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_3; i++) {
      array[i] = tm.nRows;
    }
    var colHeights = array;
    tmp$_0 = tm.nCols;
    for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
      tmp$_1 = tm.nRows;
      for (var j = 0; j < tmp$_1; j++) {
        if (a[i_0][j] !== TetrisConstants_getInstance().BG) {
          var a_0 = colHeights[i_0];
          colHeights[i_0] = Math_0.min(a_0, j);
        }}
    }
    this.heights.clear();
    addAll(this.heights, colHeights);
    var hScore = 0.0;
    tmp$_2 = tm.nCols;
    for (var i_1 = 1; i_1 < tmp$_2; i_1++)
      hScore += abs(colHeights[i_1 - 1 | 0] - colHeights[i_1] | 0);
    return -hScore;
  };
  ColHeightDiff.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ColHeightDiff',
    interfaces: [AbstractValueFunction]
  };
  function TetrisView(nCols, nRows) {
    TetrisView$Companion_getInstance();
    this.nCols = nCols;
    this.nRows = nRows;
    this.count = 0;
    this.topVisibleRow = 0;
    this.shape = null;
    this.ghostShape = null;
    this.a = null;
    this.w = 1.0;
    this.h = 1.0;
    this.cellSize = 20.0;
    this.centre = new Vec2d();
    this.score = 0;
  }
  TetrisView.prototype.paint_vzjx8w$ = function (xg) {
    this.calcCellSize_vzjx8w$(xg);
    this.drawBackground_vzjx8w$(xg);
    this.binarise();
    this.draw_4kfqt8$(xg, this.a);
    this.drawGhostShape_bjye00$(xg, this.ghostShape);
    this.drawShape_bjye00$(xg, this.shape);
    this.statusText_0(xg);
  };
  TetrisView.prototype.binarise = function () {
    var tmp$, tmp$_0;
    var aa = this.a;
    if (aa == null)
      return;
    tmp$ = this.nCols;
    for (var i = 0; i < tmp$; i++) {
      tmp$_0 = this.nRows;
      for (var j = 0; j < tmp$_0; j++) {
        if (aa[i][j] !== TetrisView$Companion_getInstance().BG)
          aa[i][j] = TetrisView$Companion_getInstance().WHITE;
      }
    }
  };
  TetrisView.prototype.statusText_0 = function (xg) {
    var str = 'Score: ' + this.score;
    var ts = new TStyle(void 0, void 0, this.cellSize);
    var text = new XText(str, new Vec2d(this.cellSize * this.nCols / 2, this.cellSize), ts);
    xg.draw_dvdmun$(text);
  };
  TetrisView.prototype.calcCellSize_vzjx8w$ = function (xg) {
    this.centre = new Vec2d(xg.width() / 2, xg.height() / 2);
    var colSize = xg.width() / this.nCols;
    var rowSize = xg.height() / (this.nRows - this.topVisibleRow | 0);
    this.cellSize = Math_0.min(colSize, rowSize);
  };
  TetrisView.prototype.handleMouseEvent_x4hb96$ = function (e) {
  };
  TetrisView.prototype.handleKeyEvent_wtf8cg$ = function (e) {
  };
  TetrisView.prototype.setData_pz4dsq$ = function (a, shape, ghostShape, score) {
    if (score === void 0)
      score = 0;
    this.a = a;
    this.shape = shape;
    this.ghostShape = ghostShape;
    this.score = score;
  };
  TetrisView.prototype.drawBackground_vzjx8w$ = function (xg) {
    var style = new XStyle();
    var rect = new XRect(this.centre, xg.width(), xg.height(), style);
    style.fg = XColor$Companion_getInstance().black;
    xg.draw_dvdmun$(rect);
  };
  TetrisView.prototype.draw_4kfqt8$ = function (xg, a) {
    var tmp$, tmp$_0, tmp$_1;
    if (a == null)
      return;
    var style = new XStyle();
    var rect = new XRect(this.centre, this.cellSize, this.cellSize, style);
    tmp$ = this.nCols;
    for (var i = 0; i < tmp$; i++) {
      tmp$_0 = this.topVisibleRow;
      tmp$_1 = this.nRows;
      for (var j = tmp$_0; j < tmp$_1; j++) {
        style.fg = TetrisView$Companion_getInstance().colors[a[i][j]];
        style.stroke = true;
        style.lc = XColor$Companion_getInstance().gray;
        style.lineWidth = 1.0;
        rect.centre = new Vec2d((i + 0.5) * this.cellSize, (j + 0.5) * this.cellSize);
        xg.draw_dvdmun$(rect);
        if (a[i][j] === TetrisView$Companion_getInstance().BG) {
          style.stroke = true;
          style.lc = XColor$Companion_getInstance().blue;
          style.fg = TetrisView$Companion_getInstance().colors[TetrisView$Companion_getInstance().BG];
          xg.draw_dvdmun$(rect);
        }}
    }
  };
  TetrisView.prototype.drawShape_bjye00$ = function (xg, ts) {
    var tmp$;
    if (ts == null)
      return;
    var style = new XStyle();
    var rect = new XRect(this.centre, this.cellSize, this.cellSize, style);
    style.fg = TetrisView$Companion_getInstance().colors[ts.color];
    style.lc = XColor$Companion_getInstance().black.copy_7b5o5w$(void 0, void 0, void 0, 0.8);
    style.stroke = true;
    style.lineWidth = 1.0;
    tmp$ = ts.getCells().iterator();
    while (tmp$.hasNext()) {
      var cell = tmp$.next();
      rect.centre = new Vec2d((cell.x + 0.5) * this.cellSize, (cell.y + 0.5) * this.cellSize);
      xg.draw_dvdmun$(rect);
    }
  };
  TetrisView.prototype.drawGhostShape_bjye00$ = function (xg, ts) {
    var tmp$;
    if (ts == null)
      return;
    var style = new XStyle();
    var rect = new XRect(this.centre, this.cellSize, this.cellSize, style);
    style.fg = XColor$Companion_getInstance().gray;
    style.lc = XColor$Companion_getInstance().white;
    style.fg.a = 0.8;
    style.lineWidth = 1.0;
    style.stroke = true;
    tmp$ = ts.getCells().iterator();
    while (tmp$.hasNext()) {
      var cell = tmp$.next();
      rect.centre = new Vec2d((cell.x + 0.5) * this.cellSize, (cell.y + 0.5) * this.cellSize);
      xg.draw_dvdmun$(rect);
    }
  };
  function TetrisView$Companion() {
    TetrisView$Companion_instance = this;
    this.colors = [XColor$Companion_getInstance().green, XColor$Companion_getInstance().blue, XColor$Companion_getInstance().red, XColor$Companion_getInstance().yellow, XColor$Companion_getInstance().magenta, XColor$Companion_getInstance().pink, XColor$Companion_getInstance().cyan, XColor$Companion_getInstance().black, XColor$Companion_getInstance().gray, XColor$Companion_getInstance().white];
    this.cellSize = 20;
    this.frame = XColor$Companion_getInstance().blue;
    this.BG = 7;
    this.WHITE = this.colors.length - 1 | 0;
  }
  TetrisView$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TetrisView$Companion_instance = null;
  function TetrisView$Companion_getInstance() {
    if (TetrisView$Companion_instance === null) {
      new TetrisView$Companion();
    }return TetrisView$Companion_instance;
  }
  TetrisView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TetrisView',
    interfaces: [XApp]
  };
  function Tetrons() {
    Tetrons_instance = this;
    this.square = [[new Cell(0, 0), new Cell(0, 1), new Cell(1, 0), new Cell(1, 1)]];
    this.tee = [[new Cell(0, 0), new Cell(1, 0), new Cell(0, -1), new Cell(0, 1)], [new Cell(0, 0), new Cell(-1, 0), new Cell(1, 0), new Cell(0, 1)], [new Cell(0, 0), new Cell(-1, 0), new Cell(0, -1), new Cell(0, 1)], [new Cell(0, 0), new Cell(1, 0), new Cell(0, -1), new Cell(-1, 0)]];
    this.straight = [[new Cell(0, -1), new Cell(0, 0), new Cell(0, 1), new Cell(0, 2)], [new Cell(-1, 0), new Cell(0, 0), new Cell(1, 0), new Cell(2, 0)]];
    this.lCorn = [[new Cell(1, -1), new Cell(0, -1), new Cell(0, 0), new Cell(0, 1)], [new Cell(-1, 0), new Cell(0, 0), new Cell(1, 0), new Cell(1, 1)], [new Cell(0, 1), new Cell(1, -1), new Cell(1, 0), new Cell(1, 1)], [new Cell(-1, 0), new Cell(0, 0), new Cell(1, 0), new Cell(-1, -1)]];
    this.rCorn = [[new Cell(1, 1), new Cell(0, -1), new Cell(0, 0), new Cell(0, 1)], [new Cell(-1, 0), new Cell(0, 0), new Cell(1, 0), new Cell(-1, 1)], [new Cell(0, -1), new Cell(1, -1), new Cell(1, 0), new Cell(1, 1)], [new Cell(-1, 0), new Cell(0, 0), new Cell(1, 0), new Cell(1, -1)]];
    this.lSkew = [[new Cell(-1, 1), new Cell(0, 1), new Cell(0, 0), new Cell(1, 0)], [new Cell(0, -1), new Cell(0, 0), new Cell(1, 0), new Cell(1, 1)]];
    this.rSkew = [[new Cell(-1, 0), new Cell(0, 0), new Cell(0, 1), new Cell(1, 1)], [new Cell(0, 1), new Cell(0, 0), new Cell(1, 0), new Cell(1, -1)]];
    this.shapes = [this.square, this.lCorn, this.rCorn, this.straight, this.rSkew, this.lSkew, this.tee];
  }
  Tetrons.prototype.getShape_vux9f0$ = function (index, rot) {
    var n = this.shapes[index].length;
    return this.shapes[index][rot % n];
  };
  Tetrons.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Tetrons',
    interfaces: []
  };
  var Tetrons_instance = null;
  function Tetrons_getInstance() {
    if (Tetrons_instance === null) {
      new Tetrons();
    }return Tetrons_instance;
  }
  function TetronSprite(x, y, rot, tetron, color) {
    this.x = x;
    this.y = y;
    this.rot = rot;
    this.tetron = tetron;
    this.color = color;
  }
  TetronSprite.prototype.move_fwq3ux$ = function (dx, dy, a) {
    var tmp$;
    this.x = this.x + dx | 0;
    this.y = this.y + dy | 0;
    if (this.valid_ytlutl$(a)) {
      tmp$ = true;
    } else {
      this.x = this.x - dx | 0;
      this.y = this.y - dy | 0;
      tmp$ = false;
    }
    return tmp$;
  };
  TetronSprite.prototype.rotate_ytlutl$ = function (a) {
    var tmp$;
    this.rot = this.rot + 1 | 0;
    if (this.valid_ytlutl$(a)) {
      tmp$ = true;
    } else {
      this.rot = this.rot - 1 | 0;
      tmp$ = false;
    }
    return tmp$;
  };
  TetronSprite.prototype.outOfBounds_0 = function (a, cell) {
    return cell.x < 0 || cell.y < 0 || cell.x >= a.length || cell.y >= a[0].length;
  };
  TetronSprite.prototype.valid_ytlutl$ = function (a) {
    var tmp$, tmp$_0;
    var theta = this.rot % 4 * math.PI / 2;
    tmp$ = Tetrons_getInstance().getShape_vux9f0$(this.tetron, this.rot);
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var c = tmp$[tmp$_0];
      var cell = this.translate_tjgqye$(c);
      if (this.outOfBounds_0(a, cell))
        return false;
      if (a[cell.x][cell.y] !== TetrisView$Companion_getInstance().BG)
        return false;
    }
    return true;
  };
  TetronSprite.prototype.getCells = function () {
    var tmp$, tmp$_0;
    var cells = ArrayList_init();
    tmp$ = Tetrons_getInstance().getShape_vux9f0$(this.tetron, this.rot);
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var cell = tmp$[tmp$_0];
      cells.add_11rb$(this.translate_tjgqye$(cell));
    }
    return cells;
  };
  TetronSprite.prototype.cell_5lk9kw$ = function (p) {
    return new Cell(numberToInt(p.x), numberToInt(p.y));
  };
  TetronSprite.prototype.place_ytlutl$ = function (a) {
    var tmp$, tmp$_0;
    tmp$ = Tetrons_getInstance().getShape_vux9f0$(this.tetron, this.rot);
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var c = tmp$[tmp$_0];
      var cell = this.translate_tjgqye$(c);
      a[cell.x][cell.y] = this.color;
    }
  };
  TetronSprite.prototype.translate_tjgqye$ = function (cell) {
    return new Cell(this.x + cell.x | 0, this.y + cell.y | 0);
  };
  TetronSprite.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TetronSprite',
    interfaces: []
  };
  TetronSprite.prototype.component1 = function () {
    return this.x;
  };
  TetronSprite.prototype.component2 = function () {
    return this.y;
  };
  TetronSprite.prototype.component3 = function () {
    return this.rot;
  };
  TetronSprite.prototype.component4 = function () {
    return this.tetron;
  };
  TetronSprite.prototype.component5 = function () {
    return this.color;
  };
  TetronSprite.prototype.copy_4qozqa$ = function (x, y, rot, tetron, color) {
    return new TetronSprite(x === void 0 ? this.x : x, y === void 0 ? this.y : y, rot === void 0 ? this.rot : rot, tetron === void 0 ? this.tetron : tetron, color === void 0 ? this.color : color);
  };
  TetronSprite.prototype.toString = function () {
    return 'TetronSprite(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', rot=' + Kotlin.toString(this.rot)) + (', tetron=' + Kotlin.toString(this.tetron)) + (', color=' + Kotlin.toString(this.color)) + ')';
  };
  TetronSprite.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.rot) | 0;
    result = result * 31 + Kotlin.hashCode(this.tetron) | 0;
    result = result * 31 + Kotlin.hashCode(this.color) | 0;
    return result;
  };
  TetronSprite.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.rot, other.rot) && Kotlin.equals(this.tetron, other.tetron) && Kotlin.equals(this.color, other.color)))));
  };
  function Cell(x, y) {
    this.x = x;
    this.y = y;
  }
  Cell.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Cell',
    interfaces: []
  };
  Cell.prototype.component1 = function () {
    return this.x;
  };
  Cell.prototype.component2 = function () {
    return this.y;
  };
  Cell.prototype.copy_vux9f0$ = function (x, y) {
    return new Cell(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  Cell.prototype.toString = function () {
    return 'Cell(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  Cell.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  Cell.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function CellState(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function CellState_initFields() {
    CellState_initFields = function () {
    };
    CellState$Empty_instance = new CellState('Empty', 0);
    CellState$P1_instance = new CellState('P1', 1);
    CellState$P2_instance = new CellState('P2', 2);
  }
  var CellState$Empty_instance;
  function CellState$Empty_getInstance() {
    CellState_initFields();
    return CellState$Empty_instance;
  }
  var CellState$P1_instance;
  function CellState$P1_getInstance() {
    CellState_initFields();
    return CellState$P1_instance;
  }
  var CellState$P2_instance;
  function CellState$P2_getInstance() {
    CellState_initFields();
    return CellState$P2_instance;
  }
  CellState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CellState',
    interfaces: [Enum]
  };
  function CellState$values() {
    return [CellState$Empty_getInstance(), CellState$P1_getInstance(), CellState$P2_getInstance()];
  }
  CellState.values = CellState$values;
  function CellState$valueOf(name) {
    switch (name) {
      case 'Empty':
        return CellState$Empty_getInstance();
      case 'P1':
        return CellState$P1_getInstance();
      case 'P2':
        return CellState$P2_getInstance();
      default:throwISE('No enum constant games.uti.CellState.' + name);
    }
  }
  CellState.valueOf_61zpoe$ = CellState$valueOf;
  function LineState(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function LineState_initFields() {
    LineState_initFields = function () {
    };
    LineState$Empty_instance = new LineState('Empty', 0);
    LineState$Open_instance = new LineState('Open', 1);
    LineState$Mixed_instance = new LineState('Mixed', 2);
    LineState$Partial1_instance = new LineState('Partial1', 3);
    LineState$Partial2_instance = new LineState('Partial2', 4);
    LineState$P1_instance = new LineState('P1', 5);
    LineState$P2_instance = new LineState('P2', 6);
    LineState$Unwon_instance = new LineState('Unwon', 7);
  }
  var LineState$Empty_instance;
  function LineState$Empty_getInstance() {
    LineState_initFields();
    return LineState$Empty_instance;
  }
  var LineState$Open_instance;
  function LineState$Open_getInstance() {
    LineState_initFields();
    return LineState$Open_instance;
  }
  var LineState$Mixed_instance;
  function LineState$Mixed_getInstance() {
    LineState_initFields();
    return LineState$Mixed_instance;
  }
  var LineState$Partial1_instance;
  function LineState$Partial1_getInstance() {
    LineState_initFields();
    return LineState$Partial1_instance;
  }
  var LineState$Partial2_instance;
  function LineState$Partial2_getInstance() {
    LineState_initFields();
    return LineState$Partial2_instance;
  }
  var LineState$P1_instance;
  function LineState$P1_getInstance() {
    LineState_initFields();
    return LineState$P1_instance;
  }
  var LineState$P2_instance;
  function LineState$P2_getInstance() {
    LineState_initFields();
    return LineState$P2_instance;
  }
  var LineState$Unwon_instance;
  function LineState$Unwon_getInstance() {
    LineState_initFields();
    return LineState$Unwon_instance;
  }
  LineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LineState',
    interfaces: [Enum]
  };
  function LineState$values() {
    return [LineState$Empty_getInstance(), LineState$Open_getInstance(), LineState$Mixed_getInstance(), LineState$Partial1_getInstance(), LineState$Partial2_getInstance(), LineState$P1_getInstance(), LineState$P2_getInstance(), LineState$Unwon_getInstance()];
  }
  LineState.values = LineState$values;
  function LineState$valueOf(name) {
    switch (name) {
      case 'Empty':
        return LineState$Empty_getInstance();
      case 'Open':
        return LineState$Open_getInstance();
      case 'Mixed':
        return LineState$Mixed_getInstance();
      case 'Partial1':
        return LineState$Partial1_getInstance();
      case 'Partial2':
        return LineState$Partial2_getInstance();
      case 'P1':
        return LineState$P1_getInstance();
      case 'P2':
        return LineState$P2_getInstance();
      case 'Unwon':
        return LineState$Unwon_getInstance();
      default:throwISE('No enum constant games.uti.LineState.' + name);
    }
  }
  LineState.valueOf_61zpoe$ = LineState$valueOf;
  function GridState(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function GridState_initFields() {
    GridState_initFields = function () {
    };
    GridState$GameOn_instance = new GridState('GameOn', 0);
    GridState$Draw_instance = new GridState('Draw', 1);
    GridState$Win1_instance = new GridState('Win1', 2);
    GridState$Win2_instance = new GridState('Win2', 3);
  }
  var GridState$GameOn_instance;
  function GridState$GameOn_getInstance() {
    GridState_initFields();
    return GridState$GameOn_instance;
  }
  var GridState$Draw_instance;
  function GridState$Draw_getInstance() {
    GridState_initFields();
    return GridState$Draw_instance;
  }
  var GridState$Win1_instance;
  function GridState$Win1_getInstance() {
    GridState_initFields();
    return GridState$Win1_instance;
  }
  var GridState$Win2_instance;
  function GridState$Win2_getInstance() {
    GridState_initFields();
    return GridState$Win2_instance;
  }
  GridState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridState',
    interfaces: [Enum]
  };
  function GridState$values() {
    return [GridState$GameOn_getInstance(), GridState$Draw_getInstance(), GridState$Win1_getInstance(), GridState$Win2_getInstance()];
  }
  GridState.values = GridState$values;
  function GridState$valueOf(name) {
    switch (name) {
      case 'GameOn':
        return GridState$GameOn_getInstance();
      case 'Draw':
        return GridState$Draw_getInstance();
      case 'Win1':
        return GridState$Win1_getInstance();
      case 'Win2':
        return GridState$Win2_getInstance();
      default:throwISE('No enum constant games.uti.GridState.' + name);
    }
  }
  GridState.valueOf_61zpoe$ = GridState$valueOf;
  function LineGrid(w, h, lineTester) {
    this.w = w;
    this.h = h;
    this.lineTester = lineTester;
    var array = Array_0(this.w);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var array_0 = Array_0(this.h);
      var tmp$_0;
      tmp$_0 = array_0.length - 1 | 0;
      for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
        array_0[i_0] = CellState$Empty_getInstance();
      }
      array[i] = array_0;
    }
    this.grid = array;
  }
  LineGrid.prototype.copy = function () {
    var tmp$, tmp$_0;
    var cp = new LineGrid(this.w, this.h, this.lineTester);
    tmp$ = this.w;
    for (var i = 0; i < tmp$; i++) {
      tmp$_0 = this.h;
      for (var j = 0; j < tmp$_0; j++) {
        cp.grid[i][j] = this.grid[i][j];
      }
    }
    return cp;
  };
  LineGrid.prototype.nVacant = function () {
    var tmp$, tmp$_0;
    var vac = 0;
    tmp$ = this.w;
    for (var i = 0; i < tmp$; i++) {
      tmp$_0 = this.h;
      for (var j = 0; j < tmp$_0; j++) {
        if (this.grid[i][j] === CellState$Empty_getInstance()) {
          vac = vac + 1 | 0;
        }}
    }
    return vac;
  };
  LineGrid.prototype.isVacant_2j9h0j$ = function (s) {
    return this.grid[s.x][s.y] === CellState$Empty_getInstance();
  };
  LineGrid.prototype.vacancies = function () {
    var tmp$, tmp$_0;
    var list = ArrayList_init();
    tmp$ = this.w;
    for (var i = 0; i < tmp$; i++) {
      tmp$_0 = this.h;
      for (var j = 0; j < tmp$_0; j++) {
        if (this.grid[i][j] === CellState$Empty_getInstance())
          list.add_11rb$(new IntVec2d(i, j));
      }
    }
    return list;
  };
  LineGrid.prototype.testLine_mkf55g$ = function (line) {
    var tmp$;
    var counter = new HashCounter();
    tmp$ = line.iterator();
    while (tmp$.hasNext()) {
      var cell = tmp$.next();
      counter.count_za3rmp$(this.grid[cell.x][cell.y]);
    }
    if (counter.map.get_11rb$(CellState$P1_getInstance()) === line.size)
      return LineState$P1_getInstance();
    if (counter.map.get_11rb$(CellState$P2_getInstance()) === line.size)
      return LineState$P2_getInstance();
    if (counter.map.get_11rb$(CellState$Empty_getInstance()) === line.size)
      return LineState$Empty_getInstance();
    return LineState$Unwon_getInstance();
  };
  LineGrid.prototype.gridState = function () {
    var tmp$;
    var gameOn = false;
    tmp$ = this.lineTester.lines.iterator();
    while (tmp$.hasNext()) {
      var line = tmp$.next();
      var ls = this.testLine_mkf55g$(line);
      if (ls === LineState$P1_getInstance())
        return GridState$Win1_getInstance();
      if (ls === LineState$P2_getInstance())
        return GridState$Win2_getInstance();
      if (ls === LineState$Empty_getInstance())
        gameOn = true;
    }
    if (gameOn)
      return GridState$GameOn_getInstance();
    else
      return GridState$Draw_getInstance();
  };
  LineGrid.prototype.play_1xt2oh$ = function (s, toMove) {
    this.grid[s.x][s.y] = toMove === 0 ? CellState$P1_getInstance() : CellState$P2_getInstance();
  };
  LineGrid.prototype.reset = function () {
    var tmp$, tmp$_0;
    tmp$ = this.w;
    for (var i = 0; i < tmp$; i++) {
      tmp$_0 = this.h;
      for (var j = 0; j < tmp$_0; j++) {
        this.grid[i][j] = CellState$Empty_getInstance();
      }
    }
  };
  LineGrid.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LineGrid',
    interfaces: []
  };
  function LineTester() {
    this.lines = ArrayList_init();
  }
  LineTester.prototype.addAllDirections_za3lpa$ = function (n) {
    this.addHorizontal_za3lpa$(n);
    this.addVertical_za3lpa$(n);
    this.addLeading_za3lpa$(n);
    this.addReverse_za3lpa$(n);
    println('Made ' + this.lines.size + ' lines');
  };
  LineTester.prototype.addVertical_za3lpa$ = function (n) {
    for (var x = 0; x < n; x++) {
      var line = ArrayList_init();
      for (var y = 0; y < n; y++)
        line.add_11rb$(new IntVec2d(x, y));
      this.lines.add_11rb$(line);
    }
  };
  LineTester.prototype.addHorizontal_za3lpa$ = function (n) {
    for (var y = 0; y < n; y++) {
      var line = ArrayList_init();
      for (var x = 0; x < n; x++)
        line.add_11rb$(new IntVec2d(x, y));
      this.lines.add_11rb$(line);
    }
  };
  LineTester.prototype.addLeading_za3lpa$ = function (n) {
    var line = ArrayList_init();
    for (var i = 0; i < n; i++)
      line.add_11rb$(new IntVec2d(i, i));
    this.lines.add_11rb$(line);
  };
  LineTester.prototype.addReverse_za3lpa$ = function (n) {
    var line = ArrayList_init();
    for (var i = 0; i < n; i++)
      line.add_11rb$(new IntVec2d(i, n - 1 - i | 0));
    this.lines.add_11rb$(line);
  };
  LineTester.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LineTester',
    interfaces: []
  };
  function AbstractGameState() {
  }
  AbstractGameState.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AbstractGameState',
    interfaces: []
  };
  function ExtendedAbstractGameState() {
  }
  ExtendedAbstractGameState.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ExtendedAbstractGameState',
    interfaces: [AbstractGameState]
  };
  function AbstractGameStateMulti() {
  }
  AbstractGameStateMulti.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AbstractGameStateMulti',
    interfaces: []
  };
  function ExtendedAbstractGameStateMulti() {
  }
  ExtendedAbstractGameStateMulti.prototype.resetTotalTicks = function () {
  };
  ExtendedAbstractGameStateMulti.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ExtendedAbstractGameStateMulti',
    interfaces: [AbstractGameStateMulti]
  };
  function AbstractValueFunction() {
  }
  AbstractValueFunction.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AbstractValueFunction',
    interfaces: []
  };
  function SimplePlayerInterface() {
  }
  SimplePlayerInterface.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SimplePlayerInterface',
    interfaces: []
  };
  function SimplePlayerInterfaceMulti() {
  }
  SimplePlayerInterfaceMulti.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SimplePlayerInterfaceMulti',
    interfaces: []
  };
  function GameRunner() {
    this.verbose = true;
    this.maxTicks = 5000;
  }
  GameRunner.prototype.runGames_r6vqh1$ = function (gameState, agent, opponent, nGames) {
    if (opponent === void 0)
      opponent = new RandomAgent();
    if (nGames === void 0)
      nGames = 10;
    var scores = new StatSummary('Scores for: ' + agent.toString());
    gameState.resetTotalTicks();
    for (var i = 0; i < nGames; i++) {
      gameState.randomInitialState();
      var finalState = this.runOneGame_cbgesi$(gameState.copy(), agent, opponent);
      scores.add_14dthe$(finalState.score());
    }
    println(scores);
    println('Total ticks: ' + toString(gameState.totalTicks()));
    println_0();
    return scores;
  };
  GameRunner.prototype.runOneGame_cbgesi$ = function (gameState, player, opponent) {
    var tmp$;
    var playerId = 0;
    player.reset();
    var n = 0;
    println('maxTicks = ' + toString(this.maxTicks));
    while (!gameState.isTerminal() && (tmp$ = n, n = tmp$ + 1 | 0, tmp$) < this.maxTicks) {
      var actions = new Int32Array([player.getAction_84v5ee$(gameState.copy(), playerId), opponent.getAction_84v5ee$(gameState.copy(), 1 - playerId | 0)]);
      gameState.next_q5rwfd$(actions);
    }
    if (this.verbose) {
      println('Game score: ' + gameState.score());
      println('Game ticks: ' + gameState.nTicks());
      println_0();
    }return gameState;
  };
  GameRunner.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameRunner',
    interfaces: []
  };
  function EasyGraph(x, nCols, nRows, useFurthest) {
    if (useFurthest === void 0)
      useFurthest = true;
    this.x = x;
    this.nCols = nCols;
    this.nRows = nRows;
    this.useFurthest = useFurthest;
    this.grid = new ArrayAsGrid(this.x, this.nCols, this.nRows);
    this.path = ArrayList_init();
  }
  EasyGraph.prototype.shortestPath_fuuqxa$ = function (from, to) {
    this.path = ArrayList_init();
    if (!this.grid.passable_2j9h0j$(from))
      return 0.0;
    var search = new Searcher(this.grid, to);
    search.search_ligxv$(from, null, 0.0);
    var cost = this.useFurthest ? search.getFurthestDistance() : search.minCost.get_11rb$(to);
    if (cost == null)
      return 0.0;
    else {
      var target = this.useFurthest ? search.getFurthestNode() : to;
      this.path = search.getPath_fuuqxa$(from, target);
      return cost;
    }
  };
  EasyGraph.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EasyGraph',
    interfaces: []
  };
  function Searcher(grid, to) {
    this.grid = grid;
    this.to = to;
    this.minCost = HashMap_init();
    this.prevMap = HashMap_init();
  }
  Searcher.prototype.search_ligxv$ = function (cur, prev, cost) {
    var tmp$;
    var bestYet = this.minCost.get_11rb$(cur);
    if (bestYet == null || cost < bestYet) {
      this.minCost.put_xwzc9p$(cur, cost);
      this.prevMap.put_xwzc9p$(cur, prev);
      tmp$ = this.grid.nextNodes_2j9h0j$(cur).iterator();
      while (tmp$.hasNext()) {
        var next = tmp$.next();
        this.search_ligxv$(next, cur, 1 + cost);
      }
    }};
  Searcher.prototype.getPath_fuuqxa$ = function (from, to) {
    var cur = to;
    var path = ArrayList_init();
    while (cur != null) {
      path.add_11rb$(cur);
      if (equals(cur, from))
        return path;
      cur = this.prevMap.get_11rb$(cur);
    }
    return path;
  };
  Searcher.prototype.getFurthestDistance = function () {
    var iterator = this.minCost.entries.iterator();
    if (!iterator.hasNext())
      throw NoSuchElementException_init();
    var maxValue = iterator.next().value;
    while (iterator.hasNext()) {
      var v = iterator.next().value;
      maxValue = Math_0.max(maxValue, v);
    }
    return maxValue;
  };
  Searcher.prototype.getFurthestNode = function () {
    var tmp$;
    var $receiver_0 = this.minCost.entries;
    var maxByOrNull$result;
    maxByOrNull$break: do {
      var iterator = $receiver_0.iterator();
      if (!iterator.hasNext()) {
        maxByOrNull$result = null;
        break maxByOrNull$break;
      }var maxElem = iterator.next();
      if (!iterator.hasNext()) {
        maxByOrNull$result = maxElem;
        break maxByOrNull$break;
      }var maxValue = maxElem.value;
      do {
        var e = iterator.next();
        var v = e.value;
        if (Kotlin.compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }}
       while (iterator.hasNext());
      maxByOrNull$result = maxElem;
    }
     while (false);
    var pair = maxByOrNull$result;
    if (pair == null)
      return new IntVec2d();
    else
      return Kotlin.isType(tmp$ = pair.key, IntVec2d) ? tmp$ : throwCCE();
  };
  Searcher.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Searcher',
    interfaces: []
  };
  function ArrayAsGrid(a, nCols, nRows) {
    ArrayAsGrid$Companion_getInstance();
    this.a = a;
    this.nCols = nCols;
    this.nRows = nRows;
    this.nextHash = HashMap_init();
    if (this.a.size !== Kotlin.imul(this.nCols, this.nRows))
      throw Exception_init('Array size (' + this.a.size + ') does not match grid size (' + this.nCols + ' x ' + this.nRows + ')');
  }
  function ArrayAsGrid$Companion() {
    ArrayAsGrid$Companion_instance = this;
    this.moves = [new IntVec2d(1, 0), new IntVec2d(0, -1), new IntVec2d(-1, 0), new IntVec2d(0, 1)];
  }
  ArrayAsGrid$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ArrayAsGrid$Companion_instance = null;
  function ArrayAsGrid$Companion_getInstance() {
    if (ArrayAsGrid$Companion_instance === null) {
      new ArrayAsGrid$Companion();
    }return ArrayAsGrid$Companion_instance;
  }
  ArrayAsGrid.prototype.nextNodes_2j9h0j$ = function (s) {
    var tmp$, tmp$_0, tmp$_1;
    if ((tmp$ = this.nextHash.get_11rb$(s)) != null) {
      return tmp$;
    }var next = ArrayList_init();
    tmp$_0 = ArrayAsGrid$Companion_getInstance().moves;
    for (tmp$_1 = 0; tmp$_1 !== tmp$_0.length; ++tmp$_1) {
      var m = tmp$_0[tmp$_1];
      if (this.passable_2j9h0j$(s.plus_2j9h0j$(m)))
        next.add_11rb$(s.plus_2j9h0j$(m));
    }
    this.nextHash.put_xwzc9p$(s, next);
    return next;
  };
  ArrayAsGrid.prototype.passable_2j9h0j$ = function (s) {
    return this.passable_vux9f0$(s.x, s.y);
  };
  ArrayAsGrid.prototype.passable_vux9f0$ = function (x, y) {
    var ix = this.index_vux9f0$(x, y);
    if (ix == null)
      return false;
    else
      return this.a.get_za3lpa$(ix) === 0;
  };
  ArrayAsGrid.prototype.index_vux9f0$ = function (x, y) {
    if (x < 0 || x >= this.nCols)
      return null;
    if (y < 0 || y >= this.nRows)
      return null;
    return x + Kotlin.imul(y, this.nCols) | 0;
  };
  ArrayAsGrid.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArrayAsGrid',
    interfaces: []
  };
  function ShortestPath() {
  }
  ShortestPath.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShortestPath',
    interfaces: []
  };
  function ColorGradientApp() {
  }
  ColorGradientApp.prototype.paint_vzjx8w$ = function (xg) {
    var n = 16;
    var n2 = Kotlin.imul(n, n);
    var cw = xg.width() / n;
    var ch = xg.height() / n;
    var style = new XStyle(void 0, void 0, void 0, false);
    for (var index = 0; index < n2; index++) {
      var cx = (index % n + 0.5) * cw;
      var cy = ((index / n | 0) + 0.5) * ch;
      style.fg = (new XColorHeat()).getColor_14dthe$(index / (n2 - 1 | 0));
      xg.draw_dvdmun$(new XRect(new Vec2d(cx, cy), cw, ch, style));
    }
  };
  ColorGradientApp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ColorGradientApp',
    interfaces: [XApp]
  };
  function EasyGraphPlot(seed) {
    if (seed === void 0)
      seed = 1;
    this.seed = seed;
    this.xp = new XPalette(50, 0.2);
    this.rand = Random_0(this.seed);
    this.data_0 = null;
  }
  EasyGraphPlot.prototype.paint_vzjx8w$ = function (xg) {
    var tmp$;
    tmp$ = this.dataLines_rj0ub1$(xg, this.data_0).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      xg.draw_dvdmun$(element);
    }
  };
  EasyGraphPlot.prototype.dataLines_rj0ub1$ = function (xg, data) {
    var tmp$, tmp$_0;
    var lines = ArrayList_init();
    if (data == null)
      return lines;
    var ss = new StatSummary('Score Data');
    var destination = ArrayList_init_0(collectionSizeOrDefault(data, 10));
    var tmp$_1;
    tmp$_1 = data.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      destination.add_11rb$(item.length);
    }
    var maxLen = max(destination);
    if (maxLen == null)
      return lines;
    tmp$ = data.iterator();
    while (tmp$.hasNext()) {
      var a = tmp$.next();
      ss.add_d3e2cz$(asList(a));
    }
    ss.add_3p81yu$(0);
    ss.add_3p81yu$(5250);
    var ssy = new StatSummary('Y');
    var ssx = new StatSummary('X');
    tmp$_0 = data.size;
    for (var i = 0; i < tmp$_0; i++) {
      var style = new XStyle(void 0, void 0, this.xp.getColor_za3lpa$(i), void 0, false);
      var points = ArrayList_init();
      var xStep = xg.width() / maxLen;
      var da = data.get_za3lpa$(i);
      for (var j = 0; j < da.length; j++) {
        var p = new Vec2d(j * xStep, xg.height() * (1.0 - this.yVal_rtzl64$(da[j], ss)));
        points.add_11rb$(p);
        ssx.add_14dthe$(p.x);
        ssy.add_14dthe$(p.y);
      }
      var line = new XPoly(void 0, points, style, void 0, false);
      lines.add_11rb$(line);
    }
    return lines;
  };
  EasyGraphPlot.prototype.yVal_rtzl64$ = function (y, ss) {
    return (0.01 + y - ss.min()) / (1.0 + ss.max() - ss.min());
  };
  EasyGraphPlot.prototype.handleMouseEvent_x4hb96$ = function (e) {
  };
  EasyGraphPlot.prototype.handleKeyEvent_wtf8cg$ = function (e) {
  };
  EasyGraphPlot.prototype.setData_s13lqp$ = function (data) {
    this.data_0 = data;
  };
  EasyGraphPlot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EasyGraphPlot',
    interfaces: [XApp]
  };
  function HelloXGraphics() {
    this.x = 0;
    this.hexAngle = 0.0;
    this.angleInc = math.PI / 180;
    this.fillHex = true;
  }
  HelloXGraphics.prototype.paint_vzjx8w$ = function (xg) {
    var centre = new Vec2d(xg.width() / 2, xg.height() / 2);
    var rect = new XRect(centre, xg.width() / 2, xg.height() / 2, new XStyle());
    var bgRect = rect.copy_fh3pay$();
    bgRect.dStyle = new XStyle(XColor$Companion_getInstance().magenta, void 0, void 0, void 0, void 0, 10.0);
    bgRect.w = xg.width();
    bgRect.h = xg.height();
    xg.draw_dvdmun$(bgRect);
    xg.draw_dvdmun$(rect);
    var thickWhite = new XStyle(void 0, void 0, XColor$Companion_getInstance().white, void 0, void 0, 10.0);
    xg.draw_dvdmun$(new XLine(new Vec2d(0.0, 0.0), new Vec2d(xg.width(), xg.height()), thickWhite));
    xg.draw_dvdmun$(new XLine(new Vec2d(0.0, xg.height()), new Vec2d(xg.width(), 0.0), thickWhite));
    this.hexAngle += this.angleInc;
    var points = (new PolyUtil()).makePolygon_w4xg1m$(void 0, xg.height() / 5, this.hexAngle);
    var poly = new XPoly(new Vec2d(xg.width() / 2, xg.height() / 2), points);
    var $receiver = poly.dStyle;
    $receiver.fg = new XColor(0.5, 1.0);
    $receiver.lc = new XColor(0.5, void 0, 1.0);
    $receiver.lineWidth = 5.0;
    $receiver.fill = this.fillHex;
    xg.draw_dvdmun$(poly);
    var roundedRect = new XRoundedRect(new Vec2d(xg.width() / 8, xg.height() / 8), xg.width() / 4, xg.height() / 4, 50.0, false, void 0, this.hexAngle);
    xg.draw_dvdmun$(roundedRect);
    var text = new XText('Hello XKG', centre, new TStyle(XColor$Companion_getInstance().black), new XStyle());
    xg.draw_dvdmun$(text);
  };
  HelloXGraphics.prototype.handleMouseEvent_x4hb96$ = function (e) {
  };
  HelloXGraphics.prototype.handleKeyEvent_wtf8cg$ = function (e) {
    if (e.t === XKeyEventType$Pressed_getInstance())
      this.fillHex = !this.fillHex;
  };
  HelloXGraphics.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HelloXGraphics',
    interfaces: [XApp]
  };
  function HelloXKG() {
    this.n = 0;
  }
  HelloXKG.prototype.paint_vzjx8w$ = function (xg) {
    var tmp$;
    xg.draw_dvdmun$(new XRect(xg.centre(), xg.width() / 2, xg.height() / 2));
    var text = new XText('nRepaints: ' + (tmp$ = this.n, this.n = tmp$ + 1 | 0, tmp$), xg.centre(), new TStyle(XColor$Companion_getInstance().yellow));
    xg.draw_dvdmun$(text);
  };
  HelloXKG.prototype.handleMouseEvent_x4hb96$ = function (e) {
    this.n = 0;
  };
  HelloXKG.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HelloXKG',
    interfaces: [XApp]
  };
  function RandomGraphPlot(seed) {
    if (seed === void 0)
      seed = 1;
    this.seed = seed;
    this.xp = new XPalette();
    this.rand = Random_0(this.seed);
  }
  RandomGraphPlot.prototype.paint_vzjx8w$ = function (xg) {
    var tmp$;
    tmp$ = this.randLines_wb3cd9$(xg).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      xg.draw_dvdmun$(element);
    }
  };
  RandomGraphPlot.prototype.randLines_wb3cd9$ = function (xg, rand) {
    if (rand === void 0)
      rand = Random_1(L1);
    var tmp$, tmp$_0;
    var lines = ArrayList_init();
    var ss = new StatSummary();
    tmp$ = this.xp.nColors;
    for (var i = 0; i < tmp$; i++) {
      var style = new XStyle(this.xp.colors.get_za3lpa$(i), void 0, void 0, void 0, false);
      var points = ArrayList_init();
      tmp$_0 = numberToInt(xg.width());
      for (var j = 0; j < tmp$_0; j += 20) {
        var y = rand.nextDouble_lu1900$(0.0, xg.height());
        ss.add_14dthe$(y);
        points.add_11rb$(new Vec2d(j, y));
      }
      var line = new XPoly(void 0, points, style, void 0, false);
      lines.add_11rb$(line);
    }
    return lines;
  };
  RandomGraphPlot.prototype.handleMouseEvent_x4hb96$ = function (e) {
  };
  RandomGraphPlot.prototype.handleKeyEvent_wtf8cg$ = function (e) {
  };
  RandomGraphPlot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RandomGraphPlot',
    interfaces: [XApp]
  };
  function TreeRectApp() {
    this.tb = new TreeBuilder(5, 0.7);
    this.seed = L0;
    this.palette = new XPalette(100);
    this.strokeWidth = 5.0;
    this.updatePeriod = 50;
    this.n = 0;
  }
  TreeRectApp.prototype.paint_vzjx8w$ = function (xg) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    xg.draw_dvdmun$(new XRect(xg.centre(), xg.width(), xg.height()));
    var p1 = new Vec2d(0.0, 0.0);
    var p2 = new Vec2d(xg.width(), xg.height());
    var split = xg.width() > xg.height() ? Split$V_getInstance() : Split$H_getInstance();
    TreeBuilder$Companion_getInstance().rand = Random_1(this.seed);
    this.tb.build_kxd1x5$(p1, p2, split);
    var nc = 0;
    tmp$ = this.tb.rects.iterator();
    while (tmp$.hasNext()) {
      var xr = tmp$.next();
      tmp$_0 = this.strokeWidth > 0;
      tmp$_1 = this.strokeWidth;
      xr.dStyle = new XStyle(this.palette.getColor_za3lpa$((tmp$_2 = nc, nc = tmp$_2 + 1 | 0, tmp$_2)), void 0, XColor$Companion_getInstance().black, tmp$_0, void 0, tmp$_1);
      xg.draw_dvdmun$(xr);
    }
    this.n = this.n + 1 | 0;
    if (this.n % this.updatePeriod === 0) {
      this.seed = this.seed.inc();
    }};
  TreeRectApp.prototype.handleMouseEvent_x4hb96$ = function (e) {
    var tmp$;
    println(e.t);
    if (e.t === XMouseEventType$Down_getInstance()) {
      this.palette = new XPalette(100, 0.0, 1.0, (tmp$ = this.seed, this.seed = tmp$.inc(), tmp$));
      this.n = 0;
    }};
  TreeRectApp.prototype.handleKeyEvent_wtf8cg$ = function (e) {
    println('Key Event: ' + e);
    if (e.t === XKeyEventType$Pressed_getInstance()) {
      this.seed = this.seed.inc();
      this.n = 0;
    }};
  TreeRectApp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TreeRectApp',
    interfaces: [XApp]
  };
  function Split(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Split_initFields() {
    Split_initFields = function () {
    };
    new Split$V();
    new Split$H();
  }
  function Split$V() {
    Split$V_instance = this;
    Split.call(this, 'V', 0);
  }
  Split$V.prototype.flip = function () {
    return Split$H_getInstance();
  };
  Split$V.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'V',
    interfaces: [Split]
  };
  var Split$V_instance = null;
  function Split$V_getInstance() {
    Split_initFields();
    return Split$V_instance;
  }
  function Split$H() {
    Split$H_instance = this;
    Split.call(this, 'H', 1);
  }
  Split$H.prototype.flip = function () {
    return Split$V_getInstance();
  };
  Split$H.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'H',
    interfaces: [Split]
  };
  var Split$H_instance = null;
  function Split$H_getInstance() {
    Split_initFields();
    return Split$H_instance;
  }
  Split.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Split',
    interfaces: [Enum]
  };
  function Split$values() {
    return [Split$V_getInstance(), Split$H_getInstance()];
  }
  Split.values = Split$values;
  function Split$valueOf(name) {
    switch (name) {
      case 'V':
        return Split$V_getInstance();
      case 'H':
        return Split$H_getInstance();
      default:throwISE('No enum constant gui.Split.' + name);
    }
  }
  Split.valueOf_61zpoe$ = Split$valueOf;
  function RectPair(a, b) {
    this.a = a;
    this.b = b;
  }
  RectPair.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RectPair',
    interfaces: []
  };
  RectPair.prototype.component1 = function () {
    return this.a;
  };
  RectPair.prototype.component2 = function () {
    return this.b;
  };
  RectPair.prototype.copy_rpn50q$ = function (a, b) {
    return new RectPair(a === void 0 ? this.a : a, b === void 0 ? this.b : b);
  };
  RectPair.prototype.toString = function () {
    return 'RectPair(a=' + Kotlin.toString(this.a) + (', b=' + Kotlin.toString(this.b)) + ')';
  };
  RectPair.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.a) | 0;
    result = result * 31 + Kotlin.hashCode(this.b) | 0;
    return result;
  };
  RectPair.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.a, other.a) && Kotlin.equals(this.b, other.b)))));
  };
  function SplitRect(leftUpper, rightLower) {
    this.leftUpper = leftUpper;
    this.rightLower = rightLower;
  }
  SplitRect.prototype.split_965wpz$ = function (split, ratio) {
    if (split === Split$V_getInstance())
      return this.splitVertically_14dthe$(ratio);
    else
      return this.splitHorizontally_14dthe$(ratio);
  };
  SplitRect.prototype.splitVertically_14dthe$ = function (sp) {
    var xSplit = this.leftUpper.x + sp * (this.rightLower.x - this.leftUpper.x);
    return new RectPair(new SplitRect(this.leftUpper, new Vec2d(xSplit, this.rightLower.y)), new SplitRect(new Vec2d(xSplit, this.leftUpper.y), this.rightLower));
  };
  SplitRect.prototype.splitHorizontally_14dthe$ = function (sp) {
    var ySplit = this.leftUpper.y + sp * (this.rightLower.y - this.leftUpper.y);
    return new RectPair(new SplitRect(this.leftUpper, new Vec2d(this.rightLower.x, ySplit)), new SplitRect(new Vec2d(this.leftUpper.x, ySplit), this.rightLower));
  };
  SplitRect.prototype.w = function () {
    return this.rightLower.x - this.leftUpper.x;
  };
  SplitRect.prototype.h = function () {
    return this.rightLower.y - this.leftUpper.y;
  };
  SplitRect.prototype.c = function () {
    return new Vec2d(this.leftUpper.x + this.w() / 2, this.leftUpper.y + this.h() / 2);
  };
  SplitRect.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SplitRect',
    interfaces: []
  };
  SplitRect.prototype.component1 = function () {
    return this.leftUpper;
  };
  SplitRect.prototype.component2 = function () {
    return this.rightLower;
  };
  SplitRect.prototype.copy_yw3f10$ = function (leftUpper, rightLower) {
    return new SplitRect(leftUpper === void 0 ? this.leftUpper : leftUpper, rightLower === void 0 ? this.rightLower : rightLower);
  };
  SplitRect.prototype.toString = function () {
    return 'SplitRect(leftUpper=' + Kotlin.toString(this.leftUpper) + (', rightLower=' + Kotlin.toString(this.rightLower)) + ')';
  };
  SplitRect.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.leftUpper) | 0;
    result = result * 31 + Kotlin.hashCode(this.rightLower) | 0;
    return result;
  };
  SplitRect.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.leftUpper, other.leftUpper) && Kotlin.equals(this.rightLower, other.rightLower)))));
  };
  function TreeBuilder(maxDepth, splitProb, splitBig) {
    TreeBuilder$Companion_getInstance();
    if (maxDepth === void 0)
      maxDepth = 4;
    if (splitProb === void 0)
      splitProb = 0.7;
    if (splitBig === void 0)
      splitBig = false;
    this.maxDepth = maxDepth;
    this.splitProb = splitProb;
    this.splitBig = splitBig;
    this.rects = ArrayList_init();
  }
  function TreeBuilder$Companion() {
    TreeBuilder$Companion_instance = this;
    this.rand = Random_0(1);
    this.minSplit = 0.2;
  }
  TreeBuilder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TreeBuilder$Companion_instance = null;
  function TreeBuilder$Companion_getInstance() {
    if (TreeBuilder$Companion_instance === null) {
      new TreeBuilder$Companion();
    }return TreeBuilder$Companion_instance;
  }
  TreeBuilder.prototype.build_kxd1x5$ = function (leftUpper, rightLower, split) {
    if (split === void 0)
      split = Split$V_getInstance();
    this.rects.clear();
    this.rBuild_iyk4am$(new SplitRect(leftUpper, rightLower), 0, split);
  };
  TreeBuilder.prototype.rBuild_iyk4am$ = function (rect, depth, split) {
    var tmp$;
    if (depth >= this.maxDepth || TreeBuilder$Companion_getInstance().rand.nextDouble() > this.splitProb) {
      this.rects.add_11rb$(new XRect(rect.c(), rect.w(), rect.h()));
    } else {
      var ratio = TreeBuilder$Companion_getInstance().minSplit + (1.0 - 2 * TreeBuilder$Companion_getInstance().minSplit) * TreeBuilder$Companion_getInstance().rand.nextDouble();
      var pair = rect.split_965wpz$(split, ratio);
      if (this.splitBig) {
        tmp$ = rect.w() > rect.h() ? Split$H_getInstance() : Split$V_getInstance();
      } else
        tmp$ = split.flip();
      var sp = tmp$;
      this.rBuild_iyk4am$(pair.a, depth + 1 | 0, sp);
      this.rBuild_iyk4am$(pair.b, depth + 1 | 0, sp);
    }
  };
  TreeBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TreeBuilder',
    interfaces: []
  };
  function XColor(r, g, b, a) {
    XColor$Companion_getInstance();
    if (r === void 0)
      r = 0.0;
    if (g === void 0)
      g = 0.0;
    if (b === void 0)
      b = 0.0;
    if (a === void 0)
      a = 1.0;
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
  function XColor$Companion() {
    XColor$Companion_instance = this;
    this.red = new XColor(1.0);
    this.green = new XColor(void 0, 1.0);
    this.blue = new XColor(void 0, void 0, 1.0);
    this.magenta = new XColor(1.0, void 0, 1.0);
    this.cyan = new XColor(void 0, 1.0, 1.0);
    this.yellow = new XColor(1.0, 1.0);
    this.white = new XColor(1.0, 1.0, 1.0);
    this.black = new XColor();
    this.gray = new XColor(0.5, 0.5, 0.5);
    this.pink = new XColor(1.0, 0.5, 0.5);
  }
  XColor$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var XColor$Companion_instance = null;
  function XColor$Companion_getInstance() {
    if (XColor$Companion_instance === null) {
      new XColor$Companion();
    }return XColor$Companion_instance;
  }
  XColor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'XColor',
    interfaces: []
  };
  XColor.prototype.component1 = function () {
    return this.r;
  };
  XColor.prototype.component2 = function () {
    return this.g;
  };
  XColor.prototype.component3 = function () {
    return this.b;
  };
  XColor.prototype.component4 = function () {
    return this.a;
  };
  XColor.prototype.copy_7b5o5w$ = function (r, g, b, a) {
    return new XColor(r === void 0 ? this.r : r, g === void 0 ? this.g : g, b === void 0 ? this.b : b, a === void 0 ? this.a : a);
  };
  XColor.prototype.toString = function () {
    return 'XColor(r=' + Kotlin.toString(this.r) + (', g=' + Kotlin.toString(this.g)) + (', b=' + Kotlin.toString(this.b)) + (', a=' + Kotlin.toString(this.a)) + ')';
  };
  XColor.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.r) | 0;
    result = result * 31 + Kotlin.hashCode(this.g) | 0;
    result = result * 31 + Kotlin.hashCode(this.b) | 0;
    result = result * 31 + Kotlin.hashCode(this.a) | 0;
    return result;
  };
  XColor.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.r, other.r) && Kotlin.equals(this.g, other.g) && Kotlin.equals(this.b, other.b) && Kotlin.equals(this.a, other.a)))));
  };
  function XPalette(nColors, min, max, seed, alpha) {
    if (nColors === void 0)
      nColors = 30;
    if (min === void 0)
      min = 0.4;
    if (max === void 0)
      max = 0.9;
    if (seed === void 0)
      seed = L1;
    if (alpha === void 0)
      alpha = 1.0;
    this.nColors = nColors;
    this.min = min;
    this.max = max;
    this.seed = seed;
    this.alpha = alpha;
    this.colors = ArrayList_init();
    this.rand = equals(this.seed, L_1) ? Random.Default : Random_1(this.seed);
    var tmp$;
    tmp$ = this.nColors;
    for (var i = 0; i < tmp$; i++)
      this.colors.add_11rb$(new XColor(this.v(), this.v(), this.v(), this.alpha));
  }
  XPalette.prototype.getColor_za3lpa$ = function (ix) {
    return this.colors.get_za3lpa$(ix % this.colors.size);
  };
  XPalette.prototype.v = function () {
    return this.rand.nextDouble_lu1900$(this.min, this.max);
  };
  XPalette.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'XPalette',
    interfaces: []
  };
  XPalette.prototype.component1 = function () {
    return this.nColors;
  };
  XPalette.prototype.component2 = function () {
    return this.min;
  };
  XPalette.prototype.component3 = function () {
    return this.max;
  };
  XPalette.prototype.component4 = function () {
    return this.seed;
  };
  XPalette.prototype.component5 = function () {
    return this.alpha;
  };
  XPalette.prototype.copy_144i7c$ = function (nColors, min, max, seed, alpha) {
    return new XPalette(nColors === void 0 ? this.nColors : nColors, min === void 0 ? this.min : min, max === void 0 ? this.max : max, seed === void 0 ? this.seed : seed, alpha === void 0 ? this.alpha : alpha);
  };
  XPalette.prototype.toString = function () {
    return 'XPalette(nColors=' + Kotlin.toString(this.nColors) + (', min=' + Kotlin.toString(this.min)) + (', max=' + Kotlin.toString(this.max)) + (', seed=' + Kotlin.toString(this.seed)) + (', alpha=' + Kotlin.toString(this.alpha)) + ')';
  };
  XPalette.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.nColors) | 0;
    result = result * 31 + Kotlin.hashCode(this.min) | 0;
    result = result * 31 + Kotlin.hashCode(this.max) | 0;
    result = result * 31 + Kotlin.hashCode(this.seed) | 0;
    result = result * 31 + Kotlin.hashCode(this.alpha) | 0;
    return result;
  };
  XPalette.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.nColors, other.nColors) && Kotlin.equals(this.min, other.min) && Kotlin.equals(this.max, other.max) && Kotlin.equals(this.seed, other.seed) && Kotlin.equals(this.alpha, other.alpha)))));
  };
  function XColorHeat() {
  }
  XColorHeat.prototype.getColor_14dthe$ = function (x) {
    if (x === 0.0)
      return XColor$Companion_getInstance().black;
    var v = x;
    if (v < 0.0)
      v = 0.0;
    if (v > 1.0)
      v = 1.0;
    var b = 2 * (v - 0.5);
    var r = Math_0.max(0.0, b);
    var a = 2 * (0.5 - v);
    var b_0 = Math_0.max(a, 0.0);
    var g = 1.0 - (r + b_0);
    return new XColor(r, g, b_0);
  };
  XColorHeat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'XColorHeat',
    interfaces: []
  };
  function OldXColor(r, g, b, a) {
    if (r === void 0)
      r = 0.0;
    if (g === void 0)
      g = 0.0;
    if (b === void 0)
      b = 0.0;
    if (a === void 0)
      a = 1.0;
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
  OldXColor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OldXColor',
    interfaces: []
  };
  OldXColor.prototype.component1 = function () {
    return this.r;
  };
  OldXColor.prototype.component2 = function () {
    return this.g;
  };
  OldXColor.prototype.component3 = function () {
    return this.b;
  };
  OldXColor.prototype.component4 = function () {
    return this.a;
  };
  OldXColor.prototype.copy_6y0v78$ = function (r, g, b, a) {
    return new OldXColor(r === void 0 ? this.r : r, g === void 0 ? this.g : g, b === void 0 ? this.b : b, a === void 0 ? this.a : a);
  };
  OldXColor.prototype.toString = function () {
    return 'OldXColor(r=' + Kotlin.toString(this.r) + (', g=' + Kotlin.toString(this.g)) + (', b=' + Kotlin.toString(this.b)) + (', a=' + Kotlin.toString(this.a)) + ')';
  };
  OldXColor.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.r) | 0;
    result = result * 31 + Kotlin.hashCode(this.g) | 0;
    result = result * 31 + Kotlin.hashCode(this.b) | 0;
    result = result * 31 + Kotlin.hashCode(this.a) | 0;
    return result;
  };
  OldXColor.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.r, other.r) && Kotlin.equals(this.g, other.g) && Kotlin.equals(this.b, other.b) && Kotlin.equals(this.a, other.a)))));
  };
  function XGraphics() {
  }
  XGraphics.prototype.centre = function () {
    return new Vec2d(this.width() / 2, this.height() / 2);
  };
  XGraphics.prototype.saveTransform = function () {
  };
  XGraphics.prototype.restoreTransform = function () {
  };
  XGraphics.prototype.setTranslate_lu1900$ = function (x, y) {
  };
  XGraphics.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'XGraphics',
    interfaces: []
  };
  function XStyle(fg, bg, lc, stroke, fill, lineWidth) {
    if (fg === void 0)
      fg = XColor$Companion_getInstance().black;
    if (bg === void 0)
      bg = XColor$Companion_getInstance().white;
    if (lc === void 0)
      lc = XColor$Companion_getInstance().red;
    if (stroke === void 0)
      stroke = true;
    if (fill === void 0)
      fill = true;
    if (lineWidth === void 0)
      lineWidth = 2.0;
    this.fg = fg;
    this.bg = bg;
    this.lc = lc;
    this.stroke = stroke;
    this.fill = fill;
    this.lineWidth = lineWidth;
  }
  XStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'XStyle',
    interfaces: []
  };
  XStyle.prototype.component1 = function () {
    return this.fg;
  };
  XStyle.prototype.component2 = function () {
    return this.bg;
  };
  XStyle.prototype.component3 = function () {
    return this.lc;
  };
  XStyle.prototype.component4 = function () {
    return this.stroke;
  };
  XStyle.prototype.component5 = function () {
    return this.fill;
  };
  XStyle.prototype.component6 = function () {
    return this.lineWidth;
  };
  XStyle.prototype.copy_egb86o$ = function (fg, bg, lc, stroke, fill, lineWidth) {
    return new XStyle(fg === void 0 ? this.fg : fg, bg === void 0 ? this.bg : bg, lc === void 0 ? this.lc : lc, stroke === void 0 ? this.stroke : stroke, fill === void 0 ? this.fill : fill, lineWidth === void 0 ? this.lineWidth : lineWidth);
  };
  XStyle.prototype.toString = function () {
    return 'XStyle(fg=' + Kotlin.toString(this.fg) + (', bg=' + Kotlin.toString(this.bg)) + (', lc=' + Kotlin.toString(this.lc)) + (', stroke=' + Kotlin.toString(this.stroke)) + (', fill=' + Kotlin.toString(this.fill)) + (', lineWidth=' + Kotlin.toString(this.lineWidth)) + ')';
  };
  XStyle.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.fg) | 0;
    result = result * 31 + Kotlin.hashCode(this.bg) | 0;
    result = result * 31 + Kotlin.hashCode(this.lc) | 0;
    result = result * 31 + Kotlin.hashCode(this.stroke) | 0;
    result = result * 31 + Kotlin.hashCode(this.fill) | 0;
    result = result * 31 + Kotlin.hashCode(this.lineWidth) | 0;
    return result;
  };
  XStyle.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.fg, other.fg) && Kotlin.equals(this.bg, other.bg) && Kotlin.equals(this.lc, other.lc) && Kotlin.equals(this.stroke, other.stroke) && Kotlin.equals(this.fill, other.fill) && Kotlin.equals(this.lineWidth, other.lineWidth)))));
  };
  function TStyle(fg, font, size) {
    if (fg === void 0)
      fg = XColor$Companion_getInstance().cyan;
    if (font === void 0)
      font = 'Arial';
    if (size === void 0)
      size = 16.0;
    this.fg = fg;
    this.font = font;
    this.size = size;
  }
  TStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TStyle',
    interfaces: []
  };
  TStyle.prototype.component1 = function () {
    return this.fg;
  };
  TStyle.prototype.component2 = function () {
    return this.font;
  };
  TStyle.prototype.component3 = function () {
    return this.size;
  };
  TStyle.prototype.copy_wqk38i$ = function (fg, font, size) {
    return new TStyle(fg === void 0 ? this.fg : fg, font === void 0 ? this.font : font, size === void 0 ? this.size : size);
  };
  TStyle.prototype.toString = function () {
    return 'TStyle(fg=' + Kotlin.toString(this.fg) + (', font=' + Kotlin.toString(this.font)) + (', size=' + Kotlin.toString(this.size)) + ')';
  };
  TStyle.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.fg) | 0;
    result = result * 31 + Kotlin.hashCode(this.font) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    return result;
  };
  TStyle.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.fg, other.fg) && Kotlin.equals(this.font, other.font) && Kotlin.equals(this.size, other.size)))));
  };
  function XApp() {
  }
  XApp.prototype.paint_vzjx8w$ = function (xg) {
  };
  XApp.prototype.handleMouseEvent_x4hb96$ = function (e) {
  };
  XApp.prototype.handleKeyEvent_wtf8cg$ = function (e) {
  };
  XApp.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'XApp',
    interfaces: []
  };
  function XMouseEventType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function XMouseEventType_initFields() {
    XMouseEventType_initFields = function () {
    };
    XMouseEventType$Down_instance = new XMouseEventType('Down', 0);
    XMouseEventType$Up_instance = new XMouseEventType('Up', 1);
    XMouseEventType$Moved_instance = new XMouseEventType('Moved', 2);
    XMouseEventType$Dragged_instance = new XMouseEventType('Dragged', 3);
    XMouseEventType$Clicked_instance = new XMouseEventType('Clicked', 4);
  }
  var XMouseEventType$Down_instance;
  function XMouseEventType$Down_getInstance() {
    XMouseEventType_initFields();
    return XMouseEventType$Down_instance;
  }
  var XMouseEventType$Up_instance;
  function XMouseEventType$Up_getInstance() {
    XMouseEventType_initFields();
    return XMouseEventType$Up_instance;
  }
  var XMouseEventType$Moved_instance;
  function XMouseEventType$Moved_getInstance() {
    XMouseEventType_initFields();
    return XMouseEventType$Moved_instance;
  }
  var XMouseEventType$Dragged_instance;
  function XMouseEventType$Dragged_getInstance() {
    XMouseEventType_initFields();
    return XMouseEventType$Dragged_instance;
  }
  var XMouseEventType$Clicked_instance;
  function XMouseEventType$Clicked_getInstance() {
    XMouseEventType_initFields();
    return XMouseEventType$Clicked_instance;
  }
  XMouseEventType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'XMouseEventType',
    interfaces: [Enum]
  };
  function XMouseEventType$values() {
    return [XMouseEventType$Down_getInstance(), XMouseEventType$Up_getInstance(), XMouseEventType$Moved_getInstance(), XMouseEventType$Dragged_getInstance(), XMouseEventType$Clicked_getInstance()];
  }
  XMouseEventType.values = XMouseEventType$values;
  function XMouseEventType$valueOf(name) {
    switch (name) {
      case 'Down':
        return XMouseEventType$Down_getInstance();
      case 'Up':
        return XMouseEventType$Up_getInstance();
      case 'Moved':
        return XMouseEventType$Moved_getInstance();
      case 'Dragged':
        return XMouseEventType$Dragged_getInstance();
      case 'Clicked':
        return XMouseEventType$Clicked_getInstance();
      default:throwISE('No enum constant gui.XMouseEventType.' + name);
    }
  }
  XMouseEventType.valueOf_61zpoe$ = XMouseEventType$valueOf;
  function XMouseEvent(t, s) {
    this.t = t;
    this.s = s;
  }
  XMouseEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'XMouseEvent',
    interfaces: []
  };
  XMouseEvent.prototype.component1 = function () {
    return this.t;
  };
  XMouseEvent.prototype.component2 = function () {
    return this.s;
  };
  XMouseEvent.prototype.copy_ahly8o$ = function (t, s) {
    return new XMouseEvent(t === void 0 ? this.t : t, s === void 0 ? this.s : s);
  };
  XMouseEvent.prototype.toString = function () {
    return 'XMouseEvent(t=' + Kotlin.toString(this.t) + (', s=' + Kotlin.toString(this.s)) + ')';
  };
  XMouseEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.t) | 0;
    result = result * 31 + Kotlin.hashCode(this.s) | 0;
    return result;
  };
  XMouseEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.t, other.t) && Kotlin.equals(this.s, other.s)))));
  };
  function XKeyEventType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function XKeyEventType_initFields() {
    XKeyEventType_initFields = function () {
    };
    XKeyEventType$Pressed_instance = new XKeyEventType('Pressed', 0);
    XKeyEventType$Released_instance = new XKeyEventType('Released', 1);
    XKeyEventType$Typed_instance = new XKeyEventType('Typed', 2);
    XKeyEventType$Down_instance = new XKeyEventType('Down', 3);
  }
  var XKeyEventType$Pressed_instance;
  function XKeyEventType$Pressed_getInstance() {
    XKeyEventType_initFields();
    return XKeyEventType$Pressed_instance;
  }
  var XKeyEventType$Released_instance;
  function XKeyEventType$Released_getInstance() {
    XKeyEventType_initFields();
    return XKeyEventType$Released_instance;
  }
  var XKeyEventType$Typed_instance;
  function XKeyEventType$Typed_getInstance() {
    XKeyEventType_initFields();
    return XKeyEventType$Typed_instance;
  }
  var XKeyEventType$Down_instance;
  function XKeyEventType$Down_getInstance() {
    XKeyEventType_initFields();
    return XKeyEventType$Down_instance;
  }
  XKeyEventType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'XKeyEventType',
    interfaces: [Enum]
  };
  function XKeyEventType$values() {
    return [XKeyEventType$Pressed_getInstance(), XKeyEventType$Released_getInstance(), XKeyEventType$Typed_getInstance(), XKeyEventType$Down_getInstance()];
  }
  XKeyEventType.values = XKeyEventType$values;
  function XKeyEventType$valueOf(name) {
    switch (name) {
      case 'Pressed':
        return XKeyEventType$Pressed_getInstance();
      case 'Released':
        return XKeyEventType$Released_getInstance();
      case 'Typed':
        return XKeyEventType$Typed_getInstance();
      case 'Down':
        return XKeyEventType$Down_getInstance();
      default:throwISE('No enum constant gui.XKeyEventType.' + name);
    }
  }
  XKeyEventType.valueOf_61zpoe$ = XKeyEventType$valueOf;
  function XKeyEvent(t, keyCode) {
    this.t = t;
    this.keyCode = keyCode;
  }
  XKeyEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'XKeyEvent',
    interfaces: []
  };
  XKeyEvent.prototype.component1 = function () {
    return this.t;
  };
  XKeyEvent.prototype.component2 = function () {
    return this.keyCode;
  };
  XKeyEvent.prototype.copy_pvpu5w$ = function (t, keyCode) {
    return new XKeyEvent(t === void 0 ? this.t : t, keyCode === void 0 ? this.keyCode : keyCode);
  };
  XKeyEvent.prototype.toString = function () {
    return 'XKeyEvent(t=' + Kotlin.toString(this.t) + (', keyCode=' + Kotlin.toString(this.keyCode)) + ')';
  };
  XKeyEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.t) | 0;
    result = result * 31 + Kotlin.hashCode(this.keyCode) | 0;
    return result;
  };
  XKeyEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.t, other.t) && Kotlin.equals(this.keyCode, other.keyCode)))));
  };
  function XKeyMap() {
    XKeyMap$Companion_getInstance();
  }
  function XKeyMap$Companion() {
    XKeyMap$Companion_instance = this;
    this.left = 37;
    this.up = 38;
    this.right = 39;
    this.down = 40;
    this.space = 32;
  }
  XKeyMap$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var XKeyMap$Companion_instance = null;
  function XKeyMap$Companion_getInstance() {
    if (XKeyMap$Companion_instance === null) {
      new XKeyMap$Companion();
    }return XKeyMap$Companion_instance;
  }
  XKeyMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'XKeyMap',
    interfaces: []
  };
  function Drawable() {
  }
  Drawable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Drawable',
    interfaces: []
  };
  function GeomDrawable() {
  }
  GeomDrawable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'GeomDrawable',
    interfaces: [Drawable]
  };
  function XRect(centre, w, h, dStyle, rotation) {
    if (dStyle === void 0)
      dStyle = new XStyle();
    if (rotation === void 0)
      rotation = 0.0;
    this.centre_o9hsg6$_0 = centre;
    this.w = w;
    this.h = h;
    this.dStyle_i0iva0$_0 = dStyle;
    this.rotation_tbjryh$_0 = rotation;
  }
  Object.defineProperty(XRect.prototype, 'centre', {
    get: function () {
      return this.centre_o9hsg6$_0;
    },
    set: function (centre) {
      this.centre_o9hsg6$_0 = centre;
    }
  });
  Object.defineProperty(XRect.prototype, 'dStyle', {
    get: function () {
      return this.dStyle_i0iva0$_0;
    },
    set: function (dStyle) {
      this.dStyle_i0iva0$_0 = dStyle;
    }
  });
  Object.defineProperty(XRect.prototype, 'rotation', {
    get: function () {
      return this.rotation_tbjryh$_0;
    },
    set: function (rotation) {
      this.rotation_tbjryh$_0 = rotation;
    }
  });
  XRect.prototype.contains_vi8533$ = function (p) {
    if (p == null)
      return false;
    var tp = p.minus_5lk9kw$(this.centre).rotatedBy_14dthe$(-this.rotation);
    var x = tp.x;
    var tmp$ = Math_0.abs(x) <= this.w / 2;
    if (tmp$) {
      var x_0 = tp.y;
      tmp$ = Math_0.abs(x_0) <= this.h / 2;
    }return tmp$;
  };
  XRect.prototype.radius = function () {
    var a = this.w / 2;
    var b = this.h / 2;
    return Math_0.max(a, b);
  };
  XRect.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'XRect',
    interfaces: [GeomDrawable]
  };
  XRect.prototype.component1 = function () {
    return this.centre;
  };
  XRect.prototype.component2 = function () {
    return this.w;
  };
  XRect.prototype.component3 = function () {
    return this.h;
  };
  XRect.prototype.component4 = function () {
    return this.dStyle;
  };
  XRect.prototype.component5 = function () {
    return this.rotation;
  };
  XRect.prototype.copy_fh3pay$ = function (centre, w, h, dStyle, rotation) {
    return new XRect(centre === void 0 ? this.centre : centre, w === void 0 ? this.w : w, h === void 0 ? this.h : h, dStyle === void 0 ? this.dStyle : dStyle, rotation === void 0 ? this.rotation : rotation);
  };
  XRect.prototype.toString = function () {
    return 'XRect(centre=' + Kotlin.toString(this.centre) + (', w=' + Kotlin.toString(this.w)) + (', h=' + Kotlin.toString(this.h)) + (', dStyle=' + Kotlin.toString(this.dStyle)) + (', rotation=' + Kotlin.toString(this.rotation)) + ')';
  };
  XRect.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.centre) | 0;
    result = result * 31 + Kotlin.hashCode(this.w) | 0;
    result = result * 31 + Kotlin.hashCode(this.h) | 0;
    result = result * 31 + Kotlin.hashCode(this.dStyle) | 0;
    result = result * 31 + Kotlin.hashCode(this.rotation) | 0;
    return result;
  };
  XRect.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.centre, other.centre) && Kotlin.equals(this.w, other.w) && Kotlin.equals(this.h, other.h) && Kotlin.equals(this.dStyle, other.dStyle) && Kotlin.equals(this.rotation, other.rotation)))));
  };
  function XRoundedRect(centre, w, h, cornerRad, radInPercent, dStyle, rotation) {
    if (cornerRad === void 0)
      cornerRad = 0.025;
    if (radInPercent === void 0)
      radInPercent = true;
    if (dStyle === void 0)
      dStyle = new XStyle();
    if (rotation === void 0)
      rotation = 0.0;
    this.centre_n5k1nh$_0 = centre;
    this.w = w;
    this.h = h;
    this.cornerRad = cornerRad;
    this.radInPercent = radInPercent;
    this.dStyle_teiytn$_0 = dStyle;
    this.rotation_8n9l0a$_0 = rotation;
  }
  Object.defineProperty(XRoundedRect.prototype, 'centre', {
    get: function () {
      return this.centre_n5k1nh$_0;
    },
    set: function (centre) {
      this.centre_n5k1nh$_0 = centre;
    }
  });
  Object.defineProperty(XRoundedRect.prototype, 'dStyle', {
    get: function () {
      return this.dStyle_teiytn$_0;
    },
    set: function (dStyle) {
      this.dStyle_teiytn$_0 = dStyle;
    }
  });
  Object.defineProperty(XRoundedRect.prototype, 'rotation', {
    get: function () {
      return this.rotation_8n9l0a$_0;
    },
    set: function (rotation) {
      this.rotation_8n9l0a$_0 = rotation;
    }
  });
  XRoundedRect.prototype.contains_vi8533$ = function (p) {
    if (p == null)
      return false;
    var tp = p.minus_5lk9kw$(this.centre).rotatedBy_14dthe$(-this.rotation);
    var x = tp.x;
    var tmp$ = Math_0.abs(x) <= this.w / 2;
    if (tmp$) {
      var x_0 = tp.y;
      tmp$ = Math_0.abs(x_0) <= this.h / 2;
    }return tmp$;
  };
  XRoundedRect.prototype.radius = function () {
    var a = this.w / 2;
    var b = this.h / 2;
    return Math_0.max(a, b);
  };
  XRoundedRect.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'XRoundedRect',
    interfaces: [GeomDrawable]
  };
  XRoundedRect.prototype.component1 = function () {
    return this.centre;
  };
  XRoundedRect.prototype.component2 = function () {
    return this.w;
  };
  XRoundedRect.prototype.component3 = function () {
    return this.h;
  };
  XRoundedRect.prototype.component4 = function () {
    return this.cornerRad;
  };
  XRoundedRect.prototype.component5 = function () {
    return this.radInPercent;
  };
  XRoundedRect.prototype.component6 = function () {
    return this.dStyle;
  };
  XRoundedRect.prototype.component7 = function () {
    return this.rotation;
  };
  XRoundedRect.prototype.copy_734bzb$ = function (centre, w, h, cornerRad, radInPercent, dStyle, rotation) {
    return new XRoundedRect(centre === void 0 ? this.centre : centre, w === void 0 ? this.w : w, h === void 0 ? this.h : h, cornerRad === void 0 ? this.cornerRad : cornerRad, radInPercent === void 0 ? this.radInPercent : radInPercent, dStyle === void 0 ? this.dStyle : dStyle, rotation === void 0 ? this.rotation : rotation);
  };
  XRoundedRect.prototype.toString = function () {
    return 'XRoundedRect(centre=' + Kotlin.toString(this.centre) + (', w=' + Kotlin.toString(this.w)) + (', h=' + Kotlin.toString(this.h)) + (', cornerRad=' + Kotlin.toString(this.cornerRad)) + (', radInPercent=' + Kotlin.toString(this.radInPercent)) + (', dStyle=' + Kotlin.toString(this.dStyle)) + (', rotation=' + Kotlin.toString(this.rotation)) + ')';
  };
  XRoundedRect.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.centre) | 0;
    result = result * 31 + Kotlin.hashCode(this.w) | 0;
    result = result * 31 + Kotlin.hashCode(this.h) | 0;
    result = result * 31 + Kotlin.hashCode(this.cornerRad) | 0;
    result = result * 31 + Kotlin.hashCode(this.radInPercent) | 0;
    result = result * 31 + Kotlin.hashCode(this.dStyle) | 0;
    result = result * 31 + Kotlin.hashCode(this.rotation) | 0;
    return result;
  };
  XRoundedRect.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.centre, other.centre) && Kotlin.equals(this.w, other.w) && Kotlin.equals(this.h, other.h) && Kotlin.equals(this.cornerRad, other.cornerRad) && Kotlin.equals(this.radInPercent, other.radInPercent) && Kotlin.equals(this.dStyle, other.dStyle) && Kotlin.equals(this.rotation, other.rotation)))));
  };
  function XEllipse(centre, w, h, dStyle, rotation) {
    if (dStyle === void 0)
      dStyle = new XStyle();
    if (rotation === void 0)
      rotation = 0.0;
    this.centre_nfxci2$_0 = centre;
    this.w = w;
    this.h = h;
    this.dStyle_tow9o8$_0 = dStyle;
    this.rotation_1bvzif$_0 = rotation;
    this.a2 = this.w / 2 * (this.w / 2);
    this.b2 = this.h / 2 * (this.h / 2);
  }
  Object.defineProperty(XEllipse.prototype, 'centre', {
    get: function () {
      return this.centre_nfxci2$_0;
    },
    set: function (centre) {
      this.centre_nfxci2$_0 = centre;
    }
  });
  Object.defineProperty(XEllipse.prototype, 'dStyle', {
    get: function () {
      return this.dStyle_tow9o8$_0;
    },
    set: function (dStyle) {
      this.dStyle_tow9o8$_0 = dStyle;
    }
  });
  Object.defineProperty(XEllipse.prototype, 'rotation', {
    get: function () {
      return this.rotation_1bvzif$_0;
    },
    set: function (rotation) {
      this.rotation_1bvzif$_0 = rotation;
    }
  });
  XEllipse.prototype.contains_vi8533$ = function (p) {
    if (p == null)
      return false;
    var tp = p.minus_5lk9kw$(this.centre).rotatedBy_14dthe$(-this.rotation);
    return tp.x * tp.x / this.a2 + tp.y * tp.y / this.b2 <= 1;
  };
  XEllipse.prototype.radius = function () {
    var a = this.w / 2;
    var b = this.h / 2;
    return Math_0.max(a, b);
  };
  XEllipse.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'XEllipse',
    interfaces: [GeomDrawable]
  };
  XEllipse.prototype.component1 = function () {
    return this.centre;
  };
  XEllipse.prototype.component2 = function () {
    return this.w;
  };
  XEllipse.prototype.component3 = function () {
    return this.h;
  };
  XEllipse.prototype.component4 = function () {
    return this.dStyle;
  };
  XEllipse.prototype.component5 = function () {
    return this.rotation;
  };
  XEllipse.prototype.copy_fh3pay$ = function (centre, w, h, dStyle, rotation) {
    return new XEllipse(centre === void 0 ? this.centre : centre, w === void 0 ? this.w : w, h === void 0 ? this.h : h, dStyle === void 0 ? this.dStyle : dStyle, rotation === void 0 ? this.rotation : rotation);
  };
  XEllipse.prototype.toString = function () {
    return 'XEllipse(centre=' + Kotlin.toString(this.centre) + (', w=' + Kotlin.toString(this.w)) + (', h=' + Kotlin.toString(this.h)) + (', dStyle=' + Kotlin.toString(this.dStyle)) + (', rotation=' + Kotlin.toString(this.rotation)) + ')';
  };
  XEllipse.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.centre) | 0;
    result = result * 31 + Kotlin.hashCode(this.w) | 0;
    result = result * 31 + Kotlin.hashCode(this.h) | 0;
    result = result * 31 + Kotlin.hashCode(this.dStyle) | 0;
    result = result * 31 + Kotlin.hashCode(this.rotation) | 0;
    return result;
  };
  XEllipse.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.centre, other.centre) && Kotlin.equals(this.w, other.w) && Kotlin.equals(this.h, other.h) && Kotlin.equals(this.dStyle, other.dStyle) && Kotlin.equals(this.rotation, other.rotation)))));
  };
  function XLine(a, b, dStyle, rotation) {
    if (dStyle === void 0)
      dStyle = new XStyle();
    if (rotation === void 0)
      rotation = 0.0;
    this.a = a;
    this.b = b;
    this.dStyle_l6u5e0$_0 = dStyle;
    this.rotation_qiubsp$_0 = rotation;
  }
  Object.defineProperty(XLine.prototype, 'dStyle', {
    get: function () {
      return this.dStyle_l6u5e0$_0;
    },
    set: function (dStyle) {
      this.dStyle_l6u5e0$_0 = dStyle;
    }
  });
  Object.defineProperty(XLine.prototype, 'rotation', {
    get: function () {
      return this.rotation_qiubsp$_0;
    },
    set: function (rotation) {
      this.rotation_qiubsp$_0 = rotation;
    }
  });
  XLine.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'XLine',
    interfaces: [Drawable]
  };
  XLine.prototype.component1 = function () {
    return this.a;
  };
  XLine.prototype.component2 = function () {
    return this.b;
  };
  XLine.prototype.component3 = function () {
    return this.dStyle;
  };
  XLine.prototype.component4 = function () {
    return this.rotation;
  };
  XLine.prototype.copy_pv9aji$ = function (a, b, dStyle, rotation) {
    return new XLine(a === void 0 ? this.a : a, b === void 0 ? this.b : b, dStyle === void 0 ? this.dStyle : dStyle, rotation === void 0 ? this.rotation : rotation);
  };
  XLine.prototype.toString = function () {
    return 'XLine(a=' + Kotlin.toString(this.a) + (', b=' + Kotlin.toString(this.b)) + (', dStyle=' + Kotlin.toString(this.dStyle)) + (', rotation=' + Kotlin.toString(this.rotation)) + ')';
  };
  XLine.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.a) | 0;
    result = result * 31 + Kotlin.hashCode(this.b) | 0;
    result = result * 31 + Kotlin.hashCode(this.dStyle) | 0;
    result = result * 31 + Kotlin.hashCode(this.rotation) | 0;
    return result;
  };
  XLine.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.a, other.a) && Kotlin.equals(this.b, other.b) && Kotlin.equals(this.dStyle, other.dStyle) && Kotlin.equals(this.rotation, other.rotation)))));
  };
  function XText(str, p, tStyle, dStyle, rotation) {
    if (tStyle === void 0)
      tStyle = new TStyle();
    if (dStyle === void 0)
      dStyle = new XStyle();
    if (rotation === void 0)
      rotation = 0.0;
    this.str = str;
    this.p = p;
    this.tStyle = tStyle;
    this.dStyle_ayoq6n$_0 = dStyle;
    this.rotation_17n0w0$_0 = rotation;
  }
  Object.defineProperty(XText.prototype, 'dStyle', {
    get: function () {
      return this.dStyle_ayoq6n$_0;
    },
    set: function (dStyle) {
      this.dStyle_ayoq6n$_0 = dStyle;
    }
  });
  Object.defineProperty(XText.prototype, 'rotation', {
    get: function () {
      return this.rotation_17n0w0$_0;
    },
    set: function (rotation) {
      this.rotation_17n0w0$_0 = rotation;
    }
  });
  XText.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'XText',
    interfaces: [Drawable]
  };
  XText.prototype.component1 = function () {
    return this.str;
  };
  XText.prototype.component2 = function () {
    return this.p;
  };
  XText.prototype.component3 = function () {
    return this.tStyle;
  };
  XText.prototype.component4 = function () {
    return this.dStyle;
  };
  XText.prototype.component5 = function () {
    return this.rotation;
  };
  XText.prototype.copy_6n30n0$ = function (str, p, tStyle, dStyle, rotation) {
    return new XText(str === void 0 ? this.str : str, p === void 0 ? this.p : p, tStyle === void 0 ? this.tStyle : tStyle, dStyle === void 0 ? this.dStyle : dStyle, rotation === void 0 ? this.rotation : rotation);
  };
  XText.prototype.toString = function () {
    return 'XText(str=' + Kotlin.toString(this.str) + (', p=' + Kotlin.toString(this.p)) + (', tStyle=' + Kotlin.toString(this.tStyle)) + (', dStyle=' + Kotlin.toString(this.dStyle)) + (', rotation=' + Kotlin.toString(this.rotation)) + ')';
  };
  XText.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.str) | 0;
    result = result * 31 + Kotlin.hashCode(this.p) | 0;
    result = result * 31 + Kotlin.hashCode(this.tStyle) | 0;
    result = result * 31 + Kotlin.hashCode(this.dStyle) | 0;
    result = result * 31 + Kotlin.hashCode(this.rotation) | 0;
    return result;
  };
  XText.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.str, other.str) && Kotlin.equals(this.p, other.p) && Kotlin.equals(this.tStyle, other.tStyle) && Kotlin.equals(this.dStyle, other.dStyle) && Kotlin.equals(this.rotation, other.rotation)))));
  };
  function XPoly(centre, points, dStyle, rotation, closed) {
    if (centre === void 0)
      centre = new Vec2d();
    if (dStyle === void 0)
      dStyle = new XStyle();
    if (rotation === void 0)
      rotation = 0.0;
    if (closed === void 0)
      closed = true;
    this.centre_77jmu6$_0 = centre;
    this.points = points;
    this.dStyle_ykpo0$_0 = dStyle;
    this.rotation_mlbdzz$_0 = rotation;
    this.closed = closed;
    this.rad = 0.0;
    var tmp$;
    tmp$ = this.points.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var a = this.rad;
      var b = element.mag;
      this.rad = Math_0.max(a, b);
    }
  }
  Object.defineProperty(XPoly.prototype, 'centre', {
    get: function () {
      return this.centre_77jmu6$_0;
    },
    set: function (centre) {
      this.centre_77jmu6$_0 = centre;
    }
  });
  Object.defineProperty(XPoly.prototype, 'dStyle', {
    get: function () {
      return this.dStyle_ykpo0$_0;
    },
    set: function (dStyle) {
      this.dStyle_ykpo0$_0 = dStyle;
    }
  });
  Object.defineProperty(XPoly.prototype, 'rotation', {
    get: function () {
      return this.rotation_mlbdzz$_0;
    },
    set: function (rotation) {
      this.rotation_mlbdzz$_0 = rotation;
    }
  });
  XPoly.prototype.contains_vi8533$ = function (p) {
    if (p == null)
      return false;
    var tp = p.minus_5lk9kw$(this.centre).rotatedBy_14dthe$(-this.rotation);
    if (tp.mag > this.rad)
      return false;
    return (new Poly()).contains_i2bviv$(tp, this.points);
  };
  XPoly.prototype.radius = function () {
    return this.rad;
  };
  XPoly.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'XPoly',
    interfaces: [GeomDrawable]
  };
  XPoly.prototype.component1 = function () {
    return this.centre;
  };
  XPoly.prototype.component2 = function () {
    return this.points;
  };
  XPoly.prototype.component3 = function () {
    return this.dStyle;
  };
  XPoly.prototype.component4 = function () {
    return this.rotation;
  };
  XPoly.prototype.component5 = function () {
    return this.closed;
  };
  XPoly.prototype.copy_frr6jo$ = function (centre, points, dStyle, rotation, closed) {
    return new XPoly(centre === void 0 ? this.centre : centre, points === void 0 ? this.points : points, dStyle === void 0 ? this.dStyle : dStyle, rotation === void 0 ? this.rotation : rotation, closed === void 0 ? this.closed : closed);
  };
  XPoly.prototype.toString = function () {
    return 'XPoly(centre=' + Kotlin.toString(this.centre) + (', points=' + Kotlin.toString(this.points)) + (', dStyle=' + Kotlin.toString(this.dStyle)) + (', rotation=' + Kotlin.toString(this.rotation)) + (', closed=' + Kotlin.toString(this.closed)) + ')';
  };
  XPoly.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.centre) | 0;
    result = result * 31 + Kotlin.hashCode(this.points) | 0;
    result = result * 31 + Kotlin.hashCode(this.dStyle) | 0;
    result = result * 31 + Kotlin.hashCode(this.rotation) | 0;
    result = result * 31 + Kotlin.hashCode(this.closed) | 0;
    return result;
  };
  XPoly.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.centre, other.centre) && Kotlin.equals(this.points, other.points) && Kotlin.equals(this.dStyle, other.dStyle) && Kotlin.equals(this.rotation, other.rotation) && Kotlin.equals(this.closed, other.closed)))));
  };
  function PolyUtil() {
  }
  PolyUtil.prototype.makePolygon_w4xg1m$ = function (n, rad, startAngle) {
    if (n === void 0)
      n = 6;
    if (rad === void 0)
      rad = 10.0;
    if (startAngle === void 0)
      startAngle = 0.0;
    var verts = ArrayList_init();
    var step = 2 * math.PI / n;
    for (var i = 0; i < n; i++) {
      var angle = startAngle + i * step;
      var x = rad * Math_0.sin(angle);
      var y = rad * Math_0.cos(angle);
      verts.add_11rb$(new Vec2d(x, y));
    }
    return verts;
  };
  PolyUtil.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PolyUtil',
    interfaces: []
  };
  function ContainsTestApp() {
    this.xp = new XPalette(void 0, 0.2, void 0, L76);
    this.inColor = this.xp.colors.get_za3lpa$(0);
    this.outColour = this.xp.colors.get_za3lpa$(1);
    this.mp = null;
    this.rot = 0.0;
    this.rock = (new Asteroid(12, 20.0)).getPoly();
  }
  ContainsTestApp.prototype.paint_vzjx8w$ = function (xg) {
    var bgRect = new XRect(xg.centre(), xg.width(), xg.height(), new XStyle(XColor$Companion_getInstance().yellow));
    xg.draw_dvdmun$(bgRect);
    var rect = new XRect(xg.centre(), xg.width() / 2, xg.height() / 2);
    rect.rotation = this.rot;
    rect.dStyle.fg = rect.contains_vi8533$(this.mp) ? this.inColor : this.outColour;
    xg.draw_dvdmun$(rect);
    this.rot += math.PI / 180;
    var a = xg.width();
    var b = xg.height();
    var a_0 = Math_0.min(a, b) / 4;
    var points = arrayListOf([new Vec2d(0.0, a_0), new Vec2d(a_0, 0.0), new Vec2d(0.0, -a_0), new Vec2d(-a_0, 0.0)]);
    var poly = new XPoly(new Vec2d(xg.width() / 4, xg.height() / 2), points, void 0, this.rot);
    poly.dStyle.fg = poly.contains_vi8533$(this.mp) ? this.xp.colors.get_za3lpa$(2) : this.xp.colors.get_za3lpa$(3);
    xg.draw_dvdmun$(poly);
    this.rock.centre = new Vec2d(xg.width() / 4, xg.height() / 4);
    this.rock.rotation = this.rot;
    this.rock.dStyle.fill = this.rock.contains_vi8533$(this.mp);
    xg.draw_dvdmun$(this.rock);
    var ellipse = new XEllipse(new Vec2d(xg.width() * 0.75, xg.height() / 2), xg.width() / 2, xg.height() / 4);
    ellipse.rotation = this.rot;
    ellipse.dStyle.fg = ellipse.contains_vi8533$(this.mp) ? this.xp.colors.get_za3lpa$(4) : this.xp.colors.get_za3lpa$(5);
    xg.draw_dvdmun$(ellipse);
  };
  ContainsTestApp.prototype.handleMouseEvent_x4hb96$ = function (e) {
    this.mp = e.s;
  };
  ContainsTestApp.prototype.handleKeyEvent_wtf8cg$ = function (e) {
  };
  ContainsTestApp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ContainsTestApp',
    interfaces: [XApp]
  };
  function Poly() {
  }
  Poly.prototype.contains_i2bviv$ = function (p, points) {
    var tmp$;
    var result = false;
    var j = points.size - 1 | 0;
    tmp$ = points.size;
    for (var i = 0; i < tmp$; i++) {
      var pi = points.get_za3lpa$(i);
      var pj = points.get_za3lpa$(j);
      if (pi.y < p.y && pj.y >= p.y || (pj.y < p.y && pi.y >= p.y)) {
        if (pi.x + (p.y - pi.y) / (pj.y - pi.y) * (pj.x - pi.x) < p.x) {
          result = !result;
        }}j = i;
    }
    return result;
  };
  Poly.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Poly',
    interfaces: []
  };
  function GridXYFilterLayout(gd, gx, gy) {
    if (gx === void 0)
      gx = null;
    if (gy === void 0)
      gy = null;
    this.gd = gd;
    this.gx = gx;
    this.gy = gy;
  }
  GridXYFilterLayout.prototype.paint_vzjx8w$ = function (xg) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var layout = new Layout(0.025);
    var colWidth = 1.0 / (1 + this.gd.nCols() | 0);
    var rowHeight = 1.0 / (1 + this.gd.nRows() | 0);
    var hSpans = layout.getSpans_oxrv8x$(xg.width(), 2, arrayListOf([1.0 - colWidth, colWidth]));
    var vSpans = layout.getSpans_oxrv8x$(xg.height(), 2, arrayListOf([1.0 - rowHeight, rowHeight]));
    var panes = layout.expand_tiq6ww$(hSpans, vSpans);
    var xp = new XPalette();
    var cIndex = 0;
    var bgRect = new XRect(xg.centre(), xg.width(), xg.height(), new XStyle(xp.colors.get_za3lpa$((tmp$ = cIndex, cIndex = tmp$ + 1 | 0, tmp$))));
    xg.draw_dvdmun$(bgRect);
    panes.get_za3lpa$(0).app = new GridDataView(this.gd);
    if (this.gx != null)
      panes.get_za3lpa$(1).app = new GridDataView(this.gx);
    if (this.gy != null)
      panes.get_za3lpa$(2).app = new GridDataView(this.gy);
    tmp$_0 = panes.iterator();
    while (tmp$_0.hasNext()) {
      var pane = tmp$_0.next();
      var xRext = pane.XRect_gibxdg$(new XStyle(xp.colors.get_za3lpa$((tmp$_1 = cIndex, cIndex = tmp$_1 + 1 | 0, tmp$_1))));
      xg.draw_dvdmun$(xRext);
      if ((tmp$_2 = pane.app) != null) {
        xg.setBounds_z39lsx$(pane);
        tmp$_2.paint_vzjx8w$(xg);
        xg.releaseBounds();
      }}
  };
  GridXYFilterLayout.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridXYFilterLayout',
    interfaces: [XApp]
  };
  function Horizontal(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Horizontal_initFields() {
    Horizontal_initFields = function () {
    };
    Horizontal$Left_instance = new Horizontal('Left', 0);
    Horizontal$Center_instance = new Horizontal('Center', 1);
    Horizontal$Right_instance = new Horizontal('Right', 2);
    Horizontal$Any_instance = new Horizontal('Any', 3);
  }
  var Horizontal$Left_instance;
  function Horizontal$Left_getInstance() {
    Horizontal_initFields();
    return Horizontal$Left_instance;
  }
  var Horizontal$Center_instance;
  function Horizontal$Center_getInstance() {
    Horizontal_initFields();
    return Horizontal$Center_instance;
  }
  var Horizontal$Right_instance;
  function Horizontal$Right_getInstance() {
    Horizontal_initFields();
    return Horizontal$Right_instance;
  }
  var Horizontal$Any_instance;
  function Horizontal$Any_getInstance() {
    Horizontal_initFields();
    return Horizontal$Any_instance;
  }
  Horizontal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Horizontal',
    interfaces: [Enum]
  };
  function Horizontal$values() {
    return [Horizontal$Left_getInstance(), Horizontal$Center_getInstance(), Horizontal$Right_getInstance(), Horizontal$Any_getInstance()];
  }
  Horizontal.values = Horizontal$values;
  function Horizontal$valueOf(name) {
    switch (name) {
      case 'Left':
        return Horizontal$Left_getInstance();
      case 'Center':
        return Horizontal$Center_getInstance();
      case 'Right':
        return Horizontal$Right_getInstance();
      case 'Any':
        return Horizontal$Any_getInstance();
      default:throwISE('No enum constant gui.layout.Horizontal.' + name);
    }
  }
  Horizontal.valueOf_61zpoe$ = Horizontal$valueOf;
  function Vertical(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Vertical_initFields() {
    Vertical_initFields = function () {
    };
    Vertical$Top_instance = new Vertical('Top', 0);
    Vertical$Middle_instance = new Vertical('Middle', 1);
    Vertical$Bottom_instance = new Vertical('Bottom', 2);
    Vertical$Any_instance = new Vertical('Any', 3);
  }
  var Vertical$Top_instance;
  function Vertical$Top_getInstance() {
    Vertical_initFields();
    return Vertical$Top_instance;
  }
  var Vertical$Middle_instance;
  function Vertical$Middle_getInstance() {
    Vertical_initFields();
    return Vertical$Middle_instance;
  }
  var Vertical$Bottom_instance;
  function Vertical$Bottom_getInstance() {
    Vertical_initFields();
    return Vertical$Bottom_instance;
  }
  var Vertical$Any_instance;
  function Vertical$Any_getInstance() {
    Vertical_initFields();
    return Vertical$Any_instance;
  }
  Vertical.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Vertical',
    interfaces: [Enum]
  };
  function Vertical$values() {
    return [Vertical$Top_getInstance(), Vertical$Middle_getInstance(), Vertical$Bottom_getInstance(), Vertical$Any_getInstance()];
  }
  Vertical.values = Vertical$values;
  function Vertical$valueOf(name) {
    switch (name) {
      case 'Top':
        return Vertical$Top_getInstance();
      case 'Middle':
        return Vertical$Middle_getInstance();
      case 'Bottom':
        return Vertical$Bottom_getInstance();
      case 'Any':
        return Vertical$Any_getInstance();
      default:throwISE('No enum constant gui.layout.Vertical.' + name);
    }
  }
  Vertical.valueOf_61zpoe$ = Vertical$valueOf;
  function Expansion_0(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Expansion_initFields() {
    Expansion_initFields = function () {
    };
    Expansion$Fill_instance = new Expansion_0('Fill', 0);
    Expansion$Squash_instance = new Expansion_0('Squash', 1);
  }
  var Expansion$Fill_instance;
  function Expansion$Fill_getInstance() {
    Expansion_initFields();
    return Expansion$Fill_instance;
  }
  var Expansion$Squash_instance;
  function Expansion$Squash_getInstance() {
    Expansion_initFields();
    return Expansion$Squash_instance;
  }
  Expansion_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Expansion',
    interfaces: [Enum]
  };
  function Expansion$values() {
    return [Expansion$Fill_getInstance(), Expansion$Squash_getInstance()];
  }
  Expansion_0.values = Expansion$values;
  function Expansion$valueOf(name) {
    switch (name) {
      case 'Fill':
        return Expansion$Fill_getInstance();
      case 'Squash':
        return Expansion$Squash_getInstance();
      default:throwISE('No enum constant gui.layout.Expansion.' + name);
    }
  }
  Expansion_0.valueOf_61zpoe$ = Expansion$valueOf;
  function Direction(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Direction_initFields() {
    Direction_initFields = function () {
    };
  }
  Direction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Direction',
    interfaces: [Enum]
  };
  function Direction$values() {
    return [];
  }
  Direction.values = Direction$values;
  function Direction$valueOf(name) {
    throwISE('No enum constant gui.layout.Direction.' + name);
  }
  Direction.valueOf_61zpoe$ = Direction$valueOf;
  function LRect(xLeft, yTop, width, height, app) {
    if (xLeft === void 0)
      xLeft = 0.0;
    if (yTop === void 0)
      yTop = 0.0;
    if (app === void 0)
      app = null;
    this.xLeft = xLeft;
    this.yTop = yTop;
    this.width = width;
    this.height = height;
    this.app = app;
  }
  LRect.prototype.centre = function () {
    return new Vec2d(this.xLeft + this.width / 2, this.yTop + this.height / 2);
  };
  LRect.prototype.XRect_gibxdg$ = function (style) {
    return new XRect(this.centre(), this.width, this.height, style);
  };
  LRect.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LRect',
    interfaces: []
  };
  LRect.prototype.component1 = function () {
    return this.xLeft;
  };
  LRect.prototype.component2 = function () {
    return this.yTop;
  };
  LRect.prototype.component3 = function () {
    return this.width;
  };
  LRect.prototype.component4 = function () {
    return this.height;
  };
  LRect.prototype.component5 = function () {
    return this.app;
  };
  LRect.prototype.copy_9w6anp$ = function (xLeft, yTop, width, height, app) {
    return new LRect(xLeft === void 0 ? this.xLeft : xLeft, yTop === void 0 ? this.yTop : yTop, width === void 0 ? this.width : width, height === void 0 ? this.height : height, app === void 0 ? this.app : app);
  };
  LRect.prototype.toString = function () {
    return 'LRect(xLeft=' + Kotlin.toString(this.xLeft) + (', yTop=' + Kotlin.toString(this.yTop)) + (', width=' + Kotlin.toString(this.width)) + (', height=' + Kotlin.toString(this.height)) + (', app=' + Kotlin.toString(this.app)) + ')';
  };
  LRect.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.xLeft) | 0;
    result = result * 31 + Kotlin.hashCode(this.yTop) | 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    result = result * 31 + Kotlin.hashCode(this.app) | 0;
    return result;
  };
  LRect.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.xLeft, other.xLeft) && Kotlin.equals(this.yTop, other.yTop) && Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height) && Kotlin.equals(this.app, other.app)))));
  };
  function Span(from, to) {
    this.from = from;
    this.to = to;
  }
  Span.prototype.size = function () {
    return this.to - this.from;
  };
  Span.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Span',
    interfaces: []
  };
  Span.prototype.component1 = function () {
    return this.from;
  };
  Span.prototype.component2 = function () {
    return this.to;
  };
  Span.prototype.copy_lu1900$ = function (from, to) {
    return new Span(from === void 0 ? this.from : from, to === void 0 ? this.to : to);
  };
  Span.prototype.toString = function () {
    return 'Span(from=' + Kotlin.toString(this.from) + (', to=' + Kotlin.toString(this.to)) + ')';
  };
  Span.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.from) | 0;
    result = result * 31 + Kotlin.hashCode(this.to) | 0;
    return result;
  };
  Span.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.from, other.from) && Kotlin.equals(this.to, other.to)))));
  };
  function LPane(rect, aspectRatio, hPos, vPos, hFill, vFill, padding) {
    if (aspectRatio === void 0)
      aspectRatio = null;
    if (hPos === void 0)
      hPos = Horizontal$Any_getInstance();
    if (vPos === void 0)
      vPos = Vertical$Any_getInstance();
    if (hFill === void 0)
      hFill = Expansion$Fill_getInstance();
    if (vFill === void 0)
      vFill = Expansion$Fill_getInstance();
    if (padding === void 0)
      padding = 0.02;
    this.rect = rect;
    this.aspectRatio = aspectRatio;
    this.hPos = hPos;
    this.vPos = vPos;
    this.hFill = hFill;
    this.vFill = vFill;
    this.padding = padding;
  }
  LPane.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LPane',
    interfaces: []
  };
  LPane.prototype.component1 = function () {
    return this.rect;
  };
  LPane.prototype.component2 = function () {
    return this.aspectRatio;
  };
  LPane.prototype.component3 = function () {
    return this.hPos;
  };
  LPane.prototype.component4 = function () {
    return this.vPos;
  };
  LPane.prototype.component5 = function () {
    return this.hFill;
  };
  LPane.prototype.component6 = function () {
    return this.vFill;
  };
  LPane.prototype.component7 = function () {
    return this.padding;
  };
  LPane.prototype.copy_h7b47w$ = function (rect, aspectRatio, hPos, vPos, hFill, vFill, padding) {
    return new LPane(rect === void 0 ? this.rect : rect, aspectRatio === void 0 ? this.aspectRatio : aspectRatio, hPos === void 0 ? this.hPos : hPos, vPos === void 0 ? this.vPos : vPos, hFill === void 0 ? this.hFill : hFill, vFill === void 0 ? this.vFill : vFill, padding === void 0 ? this.padding : padding);
  };
  LPane.prototype.toString = function () {
    return 'LPane(rect=' + Kotlin.toString(this.rect) + (', aspectRatio=' + Kotlin.toString(this.aspectRatio)) + (', hPos=' + Kotlin.toString(this.hPos)) + (', vPos=' + Kotlin.toString(this.vPos)) + (', hFill=' + Kotlin.toString(this.hFill)) + (', vFill=' + Kotlin.toString(this.vFill)) + (', padding=' + Kotlin.toString(this.padding)) + ')';
  };
  LPane.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.rect) | 0;
    result = result * 31 + Kotlin.hashCode(this.aspectRatio) | 0;
    result = result * 31 + Kotlin.hashCode(this.hPos) | 0;
    result = result * 31 + Kotlin.hashCode(this.vPos) | 0;
    result = result * 31 + Kotlin.hashCode(this.hFill) | 0;
    result = result * 31 + Kotlin.hashCode(this.vFill) | 0;
    result = result * 31 + Kotlin.hashCode(this.padding) | 0;
    return result;
  };
  LPane.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.rect, other.rect) && Kotlin.equals(this.aspectRatio, other.aspectRatio) && Kotlin.equals(this.hPos, other.hPos) && Kotlin.equals(this.vPos, other.vPos) && Kotlin.equals(this.hFill, other.hFill) && Kotlin.equals(this.vFill, other.vFill) && Kotlin.equals(this.padding, other.padding)))));
  };
  function Layout(padding) {
    if (padding === void 0)
      padding = 0.02;
    this.padding = padding;
  }
  Layout.prototype.doLayout = function () {
  };
  Layout.prototype.spaceEvenly_za3lpa$ = function (n) {
    var panes = ArrayList_init();
    var padTotal = this.padding * (n + 1 | 0);
    var remaining = 1.0 - padTotal;
    return panes;
  };
  Layout.prototype.hPartition_pk60e5$ = function (w, h, n, ratios) {
    if (ratios === void 0)
      ratios = ArrayList_init();
    var hSpans = this.getSpans_oxrv8x$(w, n, ratios);
    var vSpans = this.getSpans_oxrv8x$(h, 1);
    return this.expand_tiq6ww$(hSpans, vSpans);
  };
  Layout.prototype.vPartition_pk60e5$ = function (w, h, n, ratios) {
    if (ratios === void 0)
      ratios = ArrayList_init();
    var hSpans = this.getSpans_oxrv8x$(w, 1);
    var vSpans = this.getSpans_oxrv8x$(h, n, ratios);
    return this.expand_tiq6ww$(hSpans, vSpans);
  };
  Layout.prototype.expand_tiq6ww$ = function (hSpans, vSpans) {
    var tmp$, tmp$_0;
    var panes = ArrayList_init();
    tmp$ = hSpans.iterator();
    while (tmp$.hasNext()) {
      var h = tmp$.next();
      tmp$_0 = vSpans.iterator();
      while (tmp$_0.hasNext()) {
        var v = tmp$_0.next();
        panes.add_11rb$(new LRect(h.from, v.from, h.size(), v.size()));
      }
    }
    return panes;
  };
  Layout.prototype.getSpans_oxrv8x$ = function (total, n, ratios) {
    if (ratios === void 0)
      ratios = ArrayList_init();
    if (ratios.isEmpty()) {
      var tmp$;
      tmp$ = (new IntRange(1, n)).iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        ratios.add_11rb$(1.0 / n);
      }
    }var spans = ArrayList_init();
    var padTotal = this.padding * (n + 1 | 0);
    var remaining = 1.0 - padTotal;
    var cur = 0.0;
    for (var i = 0; i < n; i++) {
      cur += this.padding * total;
      var sp = ratios.get_za3lpa$(i) * total * remaining;
      spans.add_11rb$(new Span(cur, cur + sp));
      cur += sp;
    }
    return spans;
  };
  Layout.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Layout',
    interfaces: []
  };
  function LayoutTest() {
    this.plotApp = new EasyGraphPlot();
    this.arcade = new SpriteEngineApp();
    this.xp = new XPalette(void 0, void 0, void 0, L1);
    this.arcade.agent = new PolicyEvoAgent(void 0, 0.2, 50, 50, true, true, void 0, 0.99);
  }
  LayoutTest.prototype.paint_vzjx8w$ = function (xg) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var layout = new Layout(0.05);
    var panes = layout.vPartition_pk60e5$(xg.width(), xg.height(), 2, arrayListOf([0.7, 0.3]));
    panes.get_za3lpa$(0).app = this.arcade;
    panes.get_za3lpa$(1).app = this.plotApp;
    this.plotApp.setData_s13lqp$(this.arcade.getData());
    var cIndex = 0;
    var bgRect = new XRect(xg.centre(), xg.width(), xg.height(), new XStyle(this.xp.colors.get_za3lpa$((tmp$ = cIndex, cIndex = tmp$ + 1 | 0, tmp$))));
    xg.draw_dvdmun$(bgRect);
    tmp$_0 = panes.iterator();
    while (tmp$_0.hasNext()) {
      var pane = tmp$_0.next();
      var xRext = pane.XRect_gibxdg$(new XStyle(this.xp.colors.get_za3lpa$((tmp$_1 = cIndex, cIndex = tmp$_1 + 1 | 0, tmp$_1))));
      xg.draw_dvdmun$(xRext);
      if ((tmp$_2 = pane.app) != null) {
        xg.setBounds_z39lsx$(pane);
        tmp$_2.paint_vzjx8w$(xg);
        xg.releaseBounds();
      }}
  };
  LayoutTest.prototype.handleMouseEvent_x4hb96$ = function (e) {
  };
  LayoutTest.prototype.handleKeyEvent_wtf8cg$ = function (e) {
    this.arcade.handleKeyEvent_wtf8cg$(e);
  };
  LayoutTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LayoutTest',
    interfaces: [XApp]
  };
  function TetrisDemoLayout() {
    this.plotApp = new EasyGraphPlot();
    this.arcade = new TetrisController();
    this.xp = new XPalette(void 0, void 0, void 0, L2);
    this.arcade.agent = new PolicyEvoAgent(void 0, 0.2, 100, 20, void 0, false, void 0, 0.99);
    TetrisModel$Companion_getInstance().includeColumnDiffs = true;
    TetrisModel$Companion_getInstance().cyclicBlockType = true;
  }
  TetrisDemoLayout.prototype.paint_vzjx8w$ = function (xg) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var layout = new Layout(0.05);
    var panes = layout.hPartition_pk60e5$(xg.width(), xg.height(), 2, arrayListOf([0.3, 0.7]));
    panes.get_za3lpa$(0).app = this.arcade;
    panes.get_za3lpa$(1).app = this.plotApp;
    this.plotApp.setData_s13lqp$(this.arcade.getData());
    var cIndex = 0;
    var bgRect = new XRect(xg.centre(), xg.width(), xg.height(), new XStyle(this.xp.getColor_za3lpa$((tmp$ = cIndex, cIndex = tmp$ + 1 | 0, tmp$))));
    xg.draw_dvdmun$(bgRect);
    tmp$_0 = panes.iterator();
    while (tmp$_0.hasNext()) {
      var pane = tmp$_0.next();
      var xRext = pane.XRect_gibxdg$(new XStyle(this.xp.colors.get_za3lpa$((tmp$_1 = cIndex, cIndex = tmp$_1 + 1 | 0, tmp$_1))));
      xg.draw_dvdmun$(xRext);
      if ((tmp$_2 = pane.app) != null) {
        xg.setBounds_z39lsx$(pane);
        tmp$_2.paint_vzjx8w$(xg);
        xg.releaseBounds();
      }}
  };
  TetrisDemoLayout.prototype.handleMouseEvent_x4hb96$ = function (e) {
  };
  TetrisDemoLayout.prototype.handleKeyEvent_wtf8cg$ = function (e) {
    this.arcade.handleKeyEvent_wtf8cg$(e);
  };
  TetrisDemoLayout.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TetrisDemoLayout',
    interfaces: [XApp]
  };
  function iv(x, y) {
    return new IntVec2d(x, y);
  }
  function IntVec2d(x, y) {
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    this.x = x;
    this.y = y;
  }
  IntVec2d.prototype.plus_2j9h0j$ = function (v) {
    return iv(this.x + v.x | 0, this.y + v.y | 0);
  };
  IntVec2d.prototype.unaryMinus = function () {
    return iv(-this.x | 0, -this.y | 0);
  };
  IntVec2d.prototype.minus_2j9h0j$ = function (v) {
    return iv(this.x - v.x | 0, this.y - v.y | 0);
  };
  IntVec2d.prototype.gridDistanceTo_2j9h0j$ = function (v) {
    return abs(this.x - v.x | 0) + abs(this.y - v.y | 0) | 0;
  };
  IntVec2d.prototype.isInRect_fuuqxa$ = function (topLeft, size) {
    return this.x >= topLeft.x && this.x <= (topLeft.x + size.x | 0) && this.y >= topLeft.y && this.y <= (topLeft.y + size.y | 0);
  };
  IntVec2d.prototype.toVec = function () {
    return new Vec2d(this.x, this.y);
  };
  IntVec2d.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntVec2d',
    interfaces: []
  };
  IntVec2d.prototype.component1 = function () {
    return this.x;
  };
  IntVec2d.prototype.component2 = function () {
    return this.y;
  };
  IntVec2d.prototype.copy_vux9f0$ = function (x, y) {
    return new IntVec2d(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  IntVec2d.prototype.toString = function () {
    return 'IntVec2d(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  IntVec2d.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  IntVec2d.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function v(x, y) {
    return new Vec2d(x, y);
  }
  function Vec2d(x, y) {
    Vec2d$Companion_getInstance();
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    this.x = x;
    this.y = y;
  }
  Vec2d.prototype.plus_5lk9kw$ = function (v_0) {
    return v(this.x + v_0.x, this.y + v_0.y);
  };
  Vec2d.prototype.unaryMinus = function () {
    return v(-this.x, -this.y);
  };
  Vec2d.prototype.minus_5lk9kw$ = function (v_0) {
    return v(this.x - v_0.x, this.y - v_0.y);
  };
  Vec2d.prototype.times_14dthe$ = function (koef) {
    return v(this.x * koef, this.y * koef);
  };
  Vec2d.prototype.distanceTo_5lk9kw$ = function (v) {
    var x = this.minus_5lk9kw$(v).sqr;
    return Math_0.sqrt(x);
  };
  Vec2d.prototype.gridDistanceTo_5lk9kw$ = function (v) {
    var x = this.x - v.x;
    var tmp$ = Math_0.abs(x);
    var x_0 = this.y - v.y;
    return tmp$ + Math_0.abs(x_0);
  };
  Vec2d.prototype.rotatedBy_14dthe$ = function (theta) {
    var sin = Math_0.sin(theta);
    var cos = Math_0.cos(theta);
    return v(this.x * cos - this.y * sin, this.x * sin + this.y * cos);
  };
  Vec2d.prototype.isInRect_yw3f10$ = function (topLeft, size) {
    return this.x >= topLeft.x && this.x <= topLeft.x + size.x && this.y >= topLeft.y && this.y <= topLeft.y + size.y;
  };
  Object.defineProperty(Vec2d.prototype, 'sqr', {
    configurable: true,
    get: function () {
      return this.x * this.x + this.y * this.y;
    }
  });
  Object.defineProperty(Vec2d.prototype, 'mag', {
    configurable: true,
    get: function () {
      var x = this.sqr;
      return Math_0.sqrt(x);
    }
  });
  Object.defineProperty(Vec2d.prototype, 'normalized', {
    configurable: true,
    get: function () {
      var x = this.sqr;
      return this.times_14dthe$(1.0 / Math_0.sqrt(x));
    }
  });
  Vec2d.prototype.sp_yw3f10$ = function (a, b) {
    return a.x * b.x + a.y * b.y;
  };
  Vec2d.prototype.sp_5lk9kw$ = function (a) {
    return this.x * a.x + this.y * a.y;
  };
  function Vec2d$Companion() {
    Vec2d$Companion_instance = this;
  }
  Vec2d$Companion.prototype.polar_lu1900$ = function (r, theta) {
    return new Vec2d(r * Math_0.cos(theta), r * Math_0.sin(theta));
  };
  Vec2d$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Vec2d$Companion_instance = null;
  function Vec2d$Companion_getInstance() {
    if (Vec2d$Companion_instance === null) {
      new Vec2d$Companion();
    }return Vec2d$Companion_instance;
  }
  Vec2d.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Vec2d',
    interfaces: []
  };
  Vec2d.prototype.component1 = function () {
    return this.x;
  };
  Vec2d.prototype.component2 = function () {
    return this.y;
  };
  Vec2d.prototype.copy_lu1900$ = function (x, y) {
    return new Vec2d(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  Vec2d.prototype.toString = function () {
    return 'Vec2d(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  Vec2d.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  Vec2d.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function hello() {
    return 'Hello from JS';
  }
  function CommonTest() {
  }
  CommonTest.prototype.message = function () {
    return 'Hello CommonTest';
  };
  CommonTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommonTest',
    interfaces: []
  };
  function main_3() {
    println('Hello');
  }
  function BoxMuller(rand) {
    if (rand === void 0)
      rand = Random.Default;
    this.rand = rand;
    this.saved = null;
  }
  BoxMuller.prototype.nextGaussian = function () {
    var safe = this.saved;
    if (safe != null) {
      this.saved = null;
      return safe;
    } else {
      var u1 = this.rand.nextDouble();
      var u2 = this.rand.nextDouble();
      var x = -2.0 * Math_0.log(u1);
      var r = Math_0.sqrt(x);
      var theta = u2 * 2 * math.PI;
      this.saved = r * Math_0.sin(theta);
      return r * Math_0.cos(theta);
    }
  };
  BoxMuller.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoxMuller',
    interfaces: []
  };
  function ElapsedTimer() {
    this.oldTime_8be2vx$ = L0;
  }
  ElapsedTimer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ElapsedTimer',
    interfaces: []
  };
  function InputFormBuilder() {
  }
  InputFormBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InputFormBuilder',
    interfaces: []
  };
  function Para(id, body) {
    this.id = id;
    this.body = body;
  }
  Para.prototype.getHtml = function () {
    return '<p>' + this.body + '<\/p>';
  };
  Para.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Para',
    interfaces: []
  };
  function IntField(id, value) {
    if (value === void 0)
      value = 0;
    this.id = id;
    this.value = value;
  }
  IntField.prototype.getHtml = function () {
    return '<input type=' + '"' + 'number' + '"' + ' id=' + '"' + this.id + '"' + ' value=' + '"' + this.value + '"' + ' />' + '\n';
  };
  IntField.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntField',
    interfaces: []
  };
  function HashCounter() {
    this.map = HashMap_init();
  }
  HashCounter.prototype.count_za3rmp$ = function (a) {
    var n = this.map.get_11rb$(a);
    if (n == null) {
      this.map.put_xwzc9p$(a, 1);
    } else {
      var $receiver = this.map;
      var value = n + 1 | 0;
      $receiver.put_xwzc9p$(a, value);
    }
  };
  HashCounter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HashCounter',
    interfaces: []
  };
  function Picker(order) {
    Picker$Companion_getInstance();
    if (order === void 0)
      order = Picker$Companion_getInstance().MAX_FIRST;
    this.order = order;
    this.best = null;
    this.bestScore = null;
    this.nItems = 0;
    this.reset();
  }
  Picker.prototype.add_41hqm1$ = function (score, value) {
    if (this.best == null) {
      this.bestScore = score;
      this.best = value;
    } else {
      if (this.order * score > ensureNotNull(this.bestScore) * this.order) {
        this.bestScore = score;
        this.best = value;
      }}
    this.nItems = this.nItems + 1 | 0;
  };
  Picker.prototype.reset = function () {
    this.nItems = 0;
    this.bestScore = null;
  };
  Picker.prototype.toString = function () {
    return 'Picker: ' + toString(this.best) + ' : ' + toString(this.bestScore);
  };
  function Picker$Companion() {
    Picker$Companion_instance = this;
    this.MAX_FIRST = 1;
    this.MIN_FIRST = -1;
  }
  Picker$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Picker$Companion_instance = null;
  function Picker$Companion_getInstance() {
    if (Picker$Companion_instance === null) {
      new Picker$Companion();
    }return Picker$Companion_instance;
  }
  Picker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Picker',
    interfaces: []
  };
  function StatSummary(name) {
    StatSummary$Companion_getInstance();
    if (name === void 0)
      name = '';
    this.name = name;
    this.sum_0 = 0;
    this.sumsq_0 = 0;
    this.min_0 = 0;
    this.max_0 = 0;
    this.mean_0 = 0;
    this.sd_0 = 0;
    this.strict_0 = false;
    this.n_8be2vx$ = 0;
    this.valid_8be2vx$ = false;
    this.n_8be2vx$ = 0;
    this.sum_0 = 0.0;
    this.sumsq_0 = 0.0;
    this.min_0 = kotlin_js_internal_DoubleCompanionObject.POSITIVE_INFINITY;
    this.max_0 = kotlin_js_internal_DoubleCompanionObject.NEGATIVE_INFINITY;
    this.valid_8be2vx$ = false;
  }
  StatSummary.prototype.setStrict_6taknv$ = function (strict) {
    this.strict_0 = strict;
    return this;
  };
  StatSummary.prototype.reset = function () {
    this.n_8be2vx$ = 0;
    this.sum_0 = 0.0;
    this.sumsq_0 = 0.0;
    this.min_0 = kotlin_js_internal_DoubleCompanionObject.POSITIVE_INFINITY;
    this.max_0 = kotlin_js_internal_DoubleCompanionObject.NEGATIVE_INFINITY;
  };
  StatSummary.prototype.max = function () {
    if (this.strict_0 && this.n_8be2vx$ < 1)
      throw RuntimeException_init(StatSummary$Companion_getInstance().strictMessage_8be2vx$);
    return this.max_0;
  };
  StatSummary.prototype.min = function () {
    if (this.strict_0 && this.n_8be2vx$ < 1)
      throw RuntimeException_init(StatSummary$Companion_getInstance().strictMessage_8be2vx$);
    return this.min_0;
  };
  StatSummary.prototype.mean = function () {
    if (this.strict_0 && this.n_8be2vx$ < 1)
      throw RuntimeException_init(StatSummary$Companion_getInstance().strictMessage_8be2vx$);
    if (!this.valid_8be2vx$)
      this.computeStats_0();
    return this.mean_0;
  };
  StatSummary.prototype.sum = function () {
    if (this.strict_0 && this.n_8be2vx$ < 1)
      throw RuntimeException_init(StatSummary$Companion_getInstance().strictMessage_8be2vx$);
    return this.sum_0;
  };
  StatSummary.prototype.sumSquareDiff = function () {
    return this.sumsq_0 - this.n_8be2vx$ * this.mean() * this.mean();
  };
  StatSummary.prototype.computeStats_0 = function () {
    if (!this.valid_8be2vx$) {
      this.mean_0 = this.sum_0 / this.n_8be2vx$;
      var num = this.sumsq_0 - this.n_8be2vx$ * this.mean_0 * this.mean_0;
      if (num < 0) {
        num = 0.0;
      }var x = num / (this.n_8be2vx$ - 1 | 0);
      this.sd_0 = Math_0.sqrt(x);
      this.valid_8be2vx$ = true;
    }};
  StatSummary.prototype.sd = function () {
    if (this.strict_0 && this.n_8be2vx$ < 2)
      throw RuntimeException_init(StatSummary$Companion_getInstance().strictMessage_8be2vx$);
    if (!this.valid_8be2vx$)
      this.computeStats_0();
    return this.sd_0;
  };
  StatSummary.prototype.n = function () {
    return this.n_8be2vx$;
  };
  StatSummary.prototype.stdErr = function () {
    var tmp$ = this.sd();
    var x = this.n_8be2vx$;
    return tmp$ / Math_0.sqrt(x);
  };
  StatSummary.prototype.add_qlj2oq$ = function (ss) {
    this.n_8be2vx$ = this.n_8be2vx$ + ss.n_8be2vx$ | 0;
    this.sum_0 += ss.sum_0;
    this.sumsq_0 += ss.sumsq_0;
    var a = this.max_0;
    var b = ss.max_0;
    this.max_0 = Math_0.max(a, b);
    var a_0 = this.min_0;
    var b_0 = ss.min_0;
    this.min_0 = Math_0.min(a_0, b_0);
    this.valid_8be2vx$ = false;
    return this;
  };
  StatSummary.prototype.add_14dthe$ = function (d) {
    this.n_8be2vx$ = this.n_8be2vx$ + 1 | 0;
    this.sum_0 += d;
    this.sumsq_0 += d * d;
    var a = this.min_0;
    this.min_0 = Math_0.min(a, d);
    var a_0 = this.max_0;
    this.max_0 = Math_0.max(a_0, d);
    this.valid_8be2vx$ = false;
    return this;
  };
  StatSummary.prototype.removeFromMean_14dthe$ = function (d) {
    if (this.n_8be2vx$ < 1) {
      this.n_8be2vx$ = this.n_8be2vx$ - 1 | 0;
      this.sum_0 -= d;
      this.sumsq_0 -= d * d;
      this.valid_8be2vx$ = false;
    }};
  StatSummary.prototype.add_3p81yu$ = function (n) {
    this.add_14dthe$(numberToDouble(n));
    return this;
  };
  StatSummary.prototype.add_yqxtqz$ = function (xa) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== xa.length; ++tmp$) {
      var x = xa[tmp$];
      this.add_14dthe$(x);
    }
    return this;
  };
  StatSummary.prototype.add_d3e2cz$ = function (xa) {
    var tmp$;
    tmp$ = xa.iterator();
    while (tmp$.hasNext()) {
      var x = tmp$.next();
      this.add_14dthe$(x);
    }
    return this;
  };
  StatSummary.prototype.toString = function () {
    var s = this.name == null ? '' : ensureNotNull(this.name) + '\n';
    s += ' min = ' + toString(this.min()) + '\n' + ' max = ' + toString(this.max()) + '\n' + ' ave = ' + toString(this.mean()) + '\n' + ' sd  = ' + toString(this.sd()) + '\n' + ' se  = ' + toString(this.stdErr()) + '\n' + ' sum  = ' + toString(this.sum_0) + '\n' + ' sumsq  = ' + toString(this.sumsq_0) + '\n' + ' n   = ' + toString(this.n_8be2vx$);
    return s;
  };
  StatSummary.prototype.compareTo_11rb$ = function (o) {
    if (this.mean() > o.mean())
      return 1;
    return this.mean() < o.mean() ? -1 : 0;
  };
  function StatSummary$Companion() {
    StatSummary$Companion_instance = this;
    this.strictMessage_8be2vx$ = 'No values in summary';
  }
  StatSummary$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var StatSummary$Companion_instance = null;
  function StatSummary$Companion_getInstance() {
    if (StatSummary$Companion_instance === null) {
      new StatSummary$Companion();
    }return StatSummary$Companion_instance;
  }
  StatSummary.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StatSummary',
    interfaces: [Comparable]
  };
  function URLUtil() {
  }
  URLUtil.prototype.getParams_61zpoe$ = function (url) {
    var tmp$;
    var map = HashMap_init();
    var paramSplit = split(url, ['?']);
    try {
      var paramString = paramSplit.get_za3lpa$(1);
      var pairs = split(paramString, ['&']);
      tmp$ = pairs.iterator();
      while (tmp$.hasNext()) {
        var pair = tmp$.next();
        var kv = split(pair, ['=']);
        var key = kv.get_za3lpa$(0);
        var value = kv.get_za3lpa$(1);
        map.put_xwzc9p$(key, value);
      }
      return map;
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        println(e);
        return map;
      } else
        throw e;
    }
  };
  URLUtil.prototype.setParams_mvjluj$ = function (base, map) {
    return split(base, ['?']).get_za3lpa$(0) + '?' + this.paramString_y0zsll$(map);
  };
  URLUtil.prototype.paramString_y0zsll$ = function (map) {
    var tmp$;
    var sb = StringBuilder_init();
    tmp$ = map.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var k = tmp$_0.key;
      var v = tmp$_0.value;
      var kvs = k + '=' + v;
      if (sb.length === 0)
        sb.append_pdl1vj$(kvs);
      else
        sb.append_pdl1vj$('&' + kvs);
    }
    return sb.toString();
  };
  URLUtil.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'URLUtil',
    interfaces: []
  };
  function ArticleMultiCanvas() {
    this.app = new HelloXKG();
    this.appMAP = HashMap_init();
    var tmp$;
    println('Article MultiCanvas ' + new Date());
    println('Title = ' + document.title);
    try {
      var canvas1 = Kotlin.isType(tmp$ = document.getElementById('bodyCanvas'), HTMLCanvasElement) ? tmp$ : throwCCE();
      println('Canvas element: ' + canvas1);
      var $receiver = this.appMAP;
      var value = this.app;
      $receiver.put_xwzc9p$(canvas1, value);
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        println(e);
      } else
        throw e;
    }
    this.intervalTime = 40;
  }
  ArticleMultiCanvas.prototype.update = function () {
    var tmp$;
    tmp$ = this.appMAP.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var canvas = element.key;
      var app = element.value;
      app.paint_vzjx8w$(new XGraphicsJS(canvas));
    }
  };
  function ArticleMultiCanvas$run$lambda(this$ArticleMultiCanvas) {
    return function () {
      this$ArticleMultiCanvas.update();
      return Unit;
    };
  }
  ArticleMultiCanvas.prototype.run = function () {
    document.bgColor = 'yellow';
    println('doc body: ' + toString(document.body));
    window.setInterval(ArticleMultiCanvas$run$lambda(this), this.intervalTime);
  };
  ArticleMultiCanvas.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArticleMultiCanvas',
    interfaces: []
  };
  function AsteroidsTest() {
    var tmp$;
    this.context = Kotlin.isType(tmp$ = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : throwCCE();
    this.height = canvas.height;
    this.width = canvas.width;
    this.xg = new XGraphicsJS(canvas);
    this.frameRate = 25;
    this.intervalTime = 1000 / this.frameRate | 0;
    this.app = new ArcadeTestApp();
  }
  AsteroidsTest.prototype.update = function () {
    this.app.paint_vzjx8w$(this.xg);
  };
  function AsteroidsTest$run$lambda(this$AsteroidsTest) {
    return function (e) {
      if (Kotlin.isType(e, KeyboardEvent)) {
        var eventType = XKeyEventType$Pressed_getInstance();
        this$AsteroidsTest.app.handleKeyEvent_wtf8cg$(new XKeyEvent(eventType, e.keyCode));
      }return Unit;
    };
  }
  function AsteroidsTest$run$lambda_0(this$AsteroidsTest) {
    return function (e) {
      if (Kotlin.isType(e, KeyboardEvent)) {
        var eventType = XKeyEventType$Down_getInstance();
        this$AsteroidsTest.app.handleKeyEvent_wtf8cg$(new XKeyEvent(eventType, e.keyCode));
      }return Unit;
    };
  }
  function AsteroidsTest$run$lambda_1(this$AsteroidsTest) {
    return function (e) {
      if (Kotlin.isType(e, KeyboardEvent)) {
        var eventType = XKeyEventType$Released_getInstance();
        this$AsteroidsTest.app.handleKeyEvent_wtf8cg$(new XKeyEvent(eventType, e.keyCode));
      }return Unit;
    };
  }
  function AsteroidsTest$run$lambda_2(this$AsteroidsTest) {
    return function () {
      this$AsteroidsTest.update();
      return Unit;
    };
  }
  AsteroidsTest.prototype.run = function () {
    document.bgColor = 'black';
    document.onkeypress = AsteroidsTest$run$lambda(this);
    document.onkeydown = AsteroidsTest$run$lambda_0(this);
    document.onkeyup = AsteroidsTest$run$lambda_1(this);
    window.setInterval(AsteroidsTest$run$lambda_2(this), this.intervalTime);
  };
  AsteroidsTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AsteroidsTest',
    interfaces: []
  };
  function FormCreateTest() {
    var tmp$, tmp$_0;
    try {
      var button = Kotlin.isType(tmp$ = document.getElementById('addText'), HTMLButtonElement) ? tmp$ : throwCCE();
      println('Button element: ' + button);
      var para = Kotlin.isType(tmp$_0 = document.getElementById('testPara'), HTMLParagraphElement) ? tmp$_0 : throwCCE();
      button.onclick = FormCreateTest_init$lambda(para, this);
      this.addText_0('default', para);
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        println(e);
      } else
        throw e;
    }
  }
  FormCreateTest.prototype.addText_0 = function (message, para) {
    if (message === void 0)
      message = 'Hello';
    println('Called addText: ' + message + ' ,  ' + para);
    for (var index = 0; index < 10; index++) {
      var el = document.createElement('h2');
      println(el);
      el.innerHTML = index.toString() + ' ';
      para.appendChild(el);
    }
  };
  function FormCreateTest_init$lambda(closure$para, this$FormCreateTest) {
    return function (it) {
      this$FormCreateTest.addText_0('clicked', closure$para);
      return Unit;
    };
  }
  FormCreateTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FormCreateTest',
    interfaces: []
  };
  function PolyTest() {
    var tmp$;
    this.context = Kotlin.isType(tmp$ = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : throwCCE();
    this.height = canvas.height;
    this.width = canvas.width;
    this.x = 0;
    this.xg = new XGraphicsJS(canvas);
    this.frameRate = 25;
    this.intervalTime = 1000 / this.frameRate | 0;
    this.app = null;
    document.bgColor = 'green';
    this.app = new ContainsTestApp();
    this.rect = canvas.getBoundingClientRect();
  }
  PolyTest.prototype.update = function () {
    this.app.paint_vzjx8w$(this.xg);
  };
  function PolyTest$run$lambda(this$PolyTest) {
    return function () {
      this$PolyTest.update();
      return Unit;
    };
  }
  function PolyTest$run$lambda_0(this$PolyTest) {
    return function (e) {
      if (Kotlin.isType(e, MouseEvent)) {
        var eventType = XMouseEventType$Down_getInstance();
        this$PolyTest.app.handleMouseEvent_x4hb96$(new XMouseEvent(eventType, new Vec2d(e.x - this$PolyTest.rect.left, e.y - this$PolyTest.rect.top)));
        println(e.y);
      }return Unit;
    };
  }
  function PolyTest$run$lambda_1(this$PolyTest) {
    return function (e) {
      if (Kotlin.isType(e, MouseEvent)) {
        var eventType = XMouseEventType$Moved_getInstance();
        this$PolyTest.app.handleMouseEvent_x4hb96$(new XMouseEvent(eventType, new Vec2d(e.x - this$PolyTest.rect.left, e.y - this$PolyTest.rect.top)));
        println(e.y);
      }return Unit;
    };
  }
  PolyTest.prototype.run = function () {
    console.log('In Poly Contains run()');
    window.setInterval(PolyTest$run$lambda(this), this.intervalTime);
    canvas.onmousedown = PolyTest$run$lambda_0(this);
    canvas.onmousemove = PolyTest$run$lambda_1(this);
  };
  PolyTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PolyTest',
    interfaces: []
  };
  function Sample() {
  }
  Sample.prototype.checkMe = function () {
    return 12;
  };
  Sample.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Sample',
    interfaces: []
  };
  function Platform() {
    Platform_instance = this;
    this.name = 'JS';
  }
  Platform.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Platform',
    interfaces: []
  };
  var Platform_instance = null;
  function Platform_getInstance() {
    if (Platform_instance === null) {
      new Platform();
    }return Platform_instance;
  }
  function main_4(args) {
    println('println() test just in main()');
  }
  function main_5() {
    println('Trick main');
  }
  var canvas;
  var test;
  function SampleJs() {
  }
  SampleJs.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SampleJs',
    interfaces: []
  };
  function initalizeCanvas() {
    var tmp$, tmp$_0;
    println('~~~Init canvas in SampleJS.kt');
    println('Document: ' + document);
    var canvas = Kotlin.isType(tmp$ = document.createElement('canvas'), HTMLCanvasElement) ? tmp$ : throwCCE();
    println('Canvas: ' + canvas);
    var context = Kotlin.isType(tmp$_0 = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : throwCCE();
    println('Context: ' + context);
    context.canvas.width = window.innerWidth - 50 | 0;
    context.canvas.height = window.innerHeight - 50 | 0;
    println(document.body);
    var body = document.body;
    body != null ? body.appendChild(canvas) : null;
    println('Returning the canvas');
    return canvas;
  }
  function Dispatcher() {
    this.title = document.title;
    if (contains(this.title, 'Tetris'))
      (new BasicTest()).run();
    else if (contains(this.title, 'Speed'))
      (new SpeedTest()).run();
    else if (contains(this.title, 'Griddle'))
      (new GriddleTest()).run();
    else if (contains(this.title, 'Poly'))
      (new PolyTest()).run();
    else if (contains(this.title, 'Asteroids'))
      (new AsteroidsTest()).run();
    else if (contains(this.title, 'Subgoal'))
      (new SubgoalDemoTest()).run();
    else if (contains(this.title, 'XKG'))
      (new ArticleMultiCanvas()).run();
    else if (contains(this.title, 'XMLHTTP'))
      (new HTTPTest()).run();
  }
  Dispatcher.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Dispatcher',
    interfaces: []
  };
  function GriddleTest() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.context = Kotlin.isType(tmp$ = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : throwCCE();
    this.height = canvas.height;
    this.width = canvas.width;
    this.x = 0;
    this.xg = new XGraphicsJS(canvas);
    this.frameRate = 10;
    this.intervalTime = 1000 / this.frameRate | 0;
    this.shuffleSeed = null;
    this.app = null;
    document.bgColor = 'blue';
    var t1 = this.jsMillis();
    this.shuffleSeed = Kotlin.isType(tmp$_0 = document.getElementById('shuffleSeed'), HTMLInputElement) ? tmp$_0 : throwCCE();
    println('Shuffle seed input element: ' + toString(this.shuffleSeed));
    var button = Kotlin.isType(tmp$_1 = document.getElementById('newGame'), HTMLButtonElement) ? tmp$_1 : throwCCE();
    println('Button element: ' + button);
    button.onclick = GriddleTest_init$lambda(this);
    this.app = new GriddleController(this);
    var loadedScript = Kotlin.isType(tmp$_2 = document.getElementById('load'), HTMLScriptElement) ? tmp$_2 : throwCCE();
    println('Loaded script element: ' + loadedScript);
    println(loadedScript.innerText);
    println(loadedScript.src);
    var wordString = this.getWords();
    var words = split(wordString, ['\n']);
    this.app.loadWords_mhpeer$(words);
    this.rect = canvas.getBoundingClientRect();
  }
  GriddleTest.prototype.newGame = function () {
    println('New game');
    this.app.newGame();
  };
  GriddleTest.prototype.getWords = function () {
    return gridWords;
  };
  GriddleTest.prototype.jsTypeOf_za3rmp$ = function (o) {
    return typeof o;
  };
  GriddleTest.prototype.jsMillis = function () {
    return Date.now();
  };
  GriddleTest.prototype.update = function () {
    this.app.paint_vzjx8w$(this.xg);
  };
  function GriddleTest$run$lambda(this$GriddleTest) {
    return function () {
      this$GriddleTest.update();
      return Unit;
    };
  }
  function GriddleTest$run$lambda_0(this$GriddleTest) {
    return function (e) {
      if (Kotlin.isType(e, MouseEvent)) {
        var eventType = XMouseEventType$Down_getInstance();
        this$GriddleTest.app.handleMouseEvent_x4hb96$(new XMouseEvent(eventType, new Vec2d(e.x - this$GriddleTest.rect.left, e.y - this$GriddleTest.rect.top)));
        document.title = this$GriddleTest.app.game.score().toString();
      }return Unit;
    };
  }
  GriddleTest.prototype.run = function () {
    console.log('In Griddle run()');
    println(document.title);
    window.setInterval(GriddleTest$run$lambda(this), this.intervalTime);
    canvas.onmousedown = GriddleTest$run$lambda_0(this);
  };
  GriddleTest.prototype.getSeed = function () {
    var input = this.shuffleSeed;
    if (input != null) {
      println('Returning seed = ' + input.value);
      var $receiver = input.value;
      var tmp$;
      return toLong(trim(Kotlin.isCharSequence(tmp$ = $receiver) ? tmp$ : throwCCE()).toString());
    } else {
      println('Failed null check: ' + toString(this.shuffleSeed));
      return L10;
    }
  };
  function GriddleTest_init$lambda(this$GriddleTest) {
    return function (it) {
      this$GriddleTest.newGame();
      return Unit;
    };
  }
  GriddleTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GriddleTest',
    interfaces: [GriddleControl]
  };
  function HTTPTest() {
  }
  HTTPTest.prototype.run = function () {
    console.log('In HTTPTest run()');
    document.title = 'Testing XML HTTP';
    ensureNotNull(document.body).innerHTML = '<h1> Making the request <\/h1>';
    var responsePromise = window.fetch('./index.html');
    println(responsePromise);
  };
  HTTPTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HTTPTest',
    interfaces: []
  };
  function SpeedTest() {
    this.running = false;
    this.gamesPerTest = 10;
    this.now = (new TestTimeSource()).markNow();
  }
  function SpeedTest$run$lambda(this$SpeedTest) {
    return function (e) {
      if (Kotlin.isType(e, KeyboardEvent)) {
        var eventType = XKeyEventType$Pressed_getInstance();
        this$SpeedTest.runTest();
      }return Unit;
    };
  }
  SpeedTest.prototype.run = function () {
    document.onkeypress = SpeedTest$run$lambda(this);
  };
  SpeedTest.prototype.runTest = function () {
    if (!this.running) {
      this.running = true;
      ensureNotNull(document.body).innerText = 'Running: ';
      var agent = new RandomAgent();
      agent = new SimpleEvoAgent(void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, 0.99);
      var game = new TetrisGame();
      var stats = (new GameRunner()).runGames_r6vqh1$(game, agent, agent, this.gamesPerTest);
      appendText(ensureNotNull(document.body), 'Average score: ' + stats.mean() + 'b' + '\n' + ' ');
      ensureNotNull(document.body).append('Elapsed: ( ' + this.now.elapsedNow() + ' )');
      ensureNotNull(document.body).append('<p>nTicks: ' + game.totalTicks().toString() + '<\/p>');
      this.running = false;
    }};
  SpeedTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SpeedTest',
    interfaces: []
  };
  function BasicTest() {
    var tmp$;
    this.context = Kotlin.isType(tmp$ = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : throwCCE();
    this.height = canvas.height;
    this.width = canvas.width;
    this.x = 0;
    this.xg = new XGraphicsJS(canvas);
    this.app = new TetrisController();
    this.frameRate = 25;
    this.intervalTime = 1000 / this.frameRate | 0;
    document.bgColor = 'red';
    if (contains(document.title, 'Speed'))
      document.title = 'Picked up Speed';
  }
  BasicTest.prototype.setData_bxpe9y$ = function (tv) {
    var tmp$, tmp$_0, tmp$_1;
    var array = Array_0(tv.nCols);
    var tmp$_2;
    tmp$_2 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_2; i++) {
      var array_0 = new Int32Array(tv.nRows);
      var tmp$_3;
      tmp$_3 = array_0.length - 1 | 0;
      for (var i_0 = 0; i_0 <= tmp$_3; i_0++) {
        array_0[i_0] = TetrisView$Companion_getInstance().BG;
      }
      array[i] = array_0;
    }
    var a = array;
    tmp$ = tv.nCols;
    for (var i_1 = 0; i_1 < tmp$; i_1++) {
      tmp$_0 = tv.nRows / 2 | 0;
      tmp$_1 = tv.nRows;
      for (var j = tmp$_0; j < tmp$_1; j++)
        a[i_1][j] = Random.Default.nextInt_za3lpa$(TetrisView$Companion_getInstance().colors.length);
    }
    var shape = new TetronSprite(tv.nCols / 2 | 0, 3, 2, 1, 2);
    var ghost = new TetronSprite(tv.nCols / 2 | 0, 7, 2, 3, 2);
    tv.setData_pz4dsq$(a, shape, ghost);
  };
  BasicTest.prototype.update = function () {
    this.app.paint_vzjx8w$(this.xg);
  };
  function BasicTest$run$lambda(this$BasicTest) {
    return function (e) {
      if (Kotlin.isType(e, KeyboardEvent)) {
        var eventType = XKeyEventType$Pressed_getInstance();
        this$BasicTest.app.handleKeyEvent_wtf8cg$(new XKeyEvent(eventType, e.keyCode));
      }return Unit;
    };
  }
  function BasicTest$run$lambda_0(this$BasicTest) {
    return function (e) {
      if (Kotlin.isType(e, KeyboardEvent)) {
        var eventType = XKeyEventType$Down_getInstance();
        this$BasicTest.app.handleKeyEvent_wtf8cg$(new XKeyEvent(eventType, e.keyCode));
      }return Unit;
    };
  }
  function BasicTest$run$lambda_1(this$BasicTest) {
    return function (e) {
      if (Kotlin.isType(e, KeyboardEvent)) {
        var eventType = XKeyEventType$Released_getInstance();
        this$BasicTest.app.handleKeyEvent_wtf8cg$(new XKeyEvent(eventType, e.keyCode));
      }return Unit;
    };
  }
  function BasicTest$run$lambda_2(this$BasicTest) {
    return function () {
      this$BasicTest.update();
      return Unit;
    };
  }
  BasicTest.prototype.run = function () {
    console.log('In run()');
    println(document.title);
    document.onkeypress = BasicTest$run$lambda(this);
    document.onkeydown = BasicTest$run$lambda_0(this);
    document.onkeyup = BasicTest$run$lambda_1(this);
    window.setInterval(BasicTest$run$lambda_2(this), this.intervalTime);
  };
  BasicTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BasicTest',
    interfaces: []
  };
  function SubgoalDemoTest() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.context = Kotlin.isType(tmp$ = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : throwCCE();
    this.height = canvas.height;
    this.width = canvas.width;
    this.xg = new XGraphicsJS(canvas);
    this.frameRate = 10;
    this.intervalTime = 1000 / this.frameRate | 0;
    this.app = new SubgoalDemo(this);
    this.nSubgoalsField = null;
    this.useDoorwaysField = null;
    this.nSubgoalsX = 10;
    this.useDoorwaysX = false;
    println('Init');
    try {
      var button = Kotlin.isType(tmp$_0 = document.getElementById('restartButton'), HTMLButtonElement) ? tmp$_0 : throwCCE();
      println('Button element: ' + button);
      button.onclick = SubgoalDemoTest_init$lambda(this);
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        println(e);
      } else
        throw e;
    }
    try {
      println(document.URL);
      println(window.location.href);
      println('Search params = [ ' + new URLSearchParams(window.location.href) + ' ]');
      println('nSubgoals = [ ' + toString((new URLSearchParams(window.location.href)).get('nSubgoals')) + ' ]');
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        println(e);
      } else
        throw e;
    }
    try {
      this.nSubgoalsField = Kotlin.isType(tmp$_1 = document.getElementById('nSubgoals'), HTMLInputElement) ? tmp$_1 : throwCCE();
      this.useDoorwaysField = Kotlin.isType(tmp$_2 = document.getElementById('useDoorsX'), HTMLInputElement) ? tmp$_2 : throwCCE();
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        println(e);
      } else
        throw e;
    }
    println('Shuffle seed input element: ' + toString(this.nSubgoalsField));
    this.period = 10;
    this.count = 0;
  }
  SubgoalDemoTest.prototype.nSubgoals = function () {
    var tmp$;
    if ((tmp$ = this.nSubgoalsField) != null) {
      var $receiver = tmp$.value;
      var tmp$_0;
      return toInt(trim(Kotlin.isCharSequence(tmp$_0 = $receiver) ? tmp$_0 : throwCCE()).toString());
    }return this.nSubgoalsX;
  };
  SubgoalDemoTest.prototype.useDoorways = function () {
    var tmp$;
    if ((tmp$ = this.useDoorwaysField) != null) {
      return tmp$.checked;
    }return this.useDoorwaysX;
  };
  function SubgoalDemoTest$update$lambda($receiver) {
    return Unit;
  }
  SubgoalDemoTest.prototype.update = function () {
    this.app.paint_vzjx8w$(this.xg);
    this.count = this.count + 1 | 0;
    try {
      if (this.count % this.period === 0) {
        var el = document.getElementById('kControls');
        if (el != null) {
          var sib = createElement(document, 'h3', SubgoalDemoTest$update$lambda);
          sib.textContent = 'Hello h3';
          el.innerHTML = '<h2>Count = ' + this.count + '<\/h2>';
        }}} catch (e) {
      if (Kotlin.isType(e, Exception)) {
        println(e);
      } else
        throw e;
    }
  };
  function SubgoalDemoTest$run$lambda(this$SubgoalDemoTest) {
    return function () {
      this$SubgoalDemoTest.update();
      return Unit;
    };
  }
  SubgoalDemoTest.prototype.run = function () {
    document.bgColor = 'yellow';
    window.setInterval(SubgoalDemoTest$run$lambda(this), this.intervalTime);
  };
  function SubgoalDemoTest_init$lambda(this$SubgoalDemoTest) {
    return function (it) {
      this$SubgoalDemoTest.app.reset();
      return Unit;
    };
  }
  SubgoalDemoTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SubgoalDemoTest',
    interfaces: [SubgoalDemoControl]
  };
  function XAppLauncher(canvasID, appName, intervalTime) {
    if (appName === void 0)
      appName = 'HelloXKG';
    if (intervalTime === void 0)
      intervalTime = 100;
    this.canvasID = canvasID;
    this.appName = appName;
    this.intervalTime = intervalTime;
    this.appMap = hashMapOf([to('HelloXKG', new HelloXKG()), to('HelloXKGraphics', new HelloXGraphics()), to('OXO', new GridGameApp()), to('TreeRect', new TreeRectApp()), to('CaveSwing', new CaveSwingApp()), to('EvoMaze', new SimpleEvoApp())]);
    this.app = new HelloXKG();
    this.canvas1 = null;
    var tmp$;
    println('XApp Launcher ' + new Date());
    try {
      this.canvas1 = Kotlin.isType(tmp$ = document.getElementById(this.canvasID), HTMLCanvasElement) ? tmp$ : throwCCE();
      var tmp = this.appMap.get_11rb$(this.appName);
      if (tmp != null) {
        this.app = tmp;
      }println('XApp instance: ' + this.app);
      println('XAppLauncher canvas element: ' + toString(this.canvas1));
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        println(e);
      } else
        throw e;
    }
    this.x = 0;
  }
  XAppLauncher.prototype.update = function () {
    var tmp$;
    if ((tmp$ = this.canvas1) != null) {
      this.app.paint_vzjx8w$(new XGraphicsJS(tmp$));
    }};
  function XAppLauncher$run$lambda(this$XAppLauncher) {
    return function () {
      this$XAppLauncher.update();
      return Unit;
    };
  }
  function XAppLauncher$run$lambda_0(this$XAppLauncher, closure$rect) {
    return function (e) {
      var eventType = XMouseEventType$Down_getInstance();
      var s = new Vec2d(e.x, e.y);
      this$XAppLauncher.app.handleMouseEvent_x4hb96$(new XMouseEvent(eventType, new Vec2d(e.x - closure$rect.left, e.y - closure$rect.top)));
      return Unit;
    };
  }
  function XAppLauncher$run$lambda_1(this$XAppLauncher, closure$rect) {
    return function (e) {
      var eventType = XMouseEventType$Clicked_getInstance();
      var s = new Vec2d(e.x, e.y);
      this$XAppLauncher.app.handleMouseEvent_x4hb96$(new XMouseEvent(eventType, new Vec2d(e.x - closure$rect.left, e.y - closure$rect.top)));
      return Unit;
    };
  }
  function XAppLauncher$run$lambda_2(this$XAppLauncher) {
    return function (e) {
      if (Kotlin.isType(e, KeyboardEvent)) {
        var eventType = XKeyEventType$Pressed_getInstance();
        this$XAppLauncher.app.handleKeyEvent_wtf8cg$(new XKeyEvent(eventType, e.keyCode));
      }return Unit;
    };
  }
  function XAppLauncher$run$lambda_3(this$XAppLauncher) {
    return function (e) {
      if (Kotlin.isType(e, KeyboardEvent)) {
        var eventType = XKeyEventType$Down_getInstance();
        this$XAppLauncher.app.handleKeyEvent_wtf8cg$(new XKeyEvent(eventType, e.keyCode));
      }return Unit;
    };
  }
  function XAppLauncher$run$lambda_4(this$XAppLauncher) {
    return function (e) {
      if (Kotlin.isType(e, KeyboardEvent)) {
        var eventType = XKeyEventType$Released_getInstance();
        this$XAppLauncher.app.handleKeyEvent_wtf8cg$(new XKeyEvent(eventType, e.keyCode));
      }return Unit;
    };
  }
  XAppLauncher.prototype.run = function () {
    document.bgColor = '#FFEEEE';
    window.setInterval(XAppLauncher$run$lambda(this), this.intervalTime);
    var canv = this.canvas1;
    if (canv != null) {
      var rect = canv.getBoundingClientRect();
      println('Attaching: ' + this.canvasID + ' : ' + toString(canv));
      canv.onmousedown = XAppLauncher$run$lambda_0(this, rect);
      canv.onclick = XAppLauncher$run$lambda_1(this, rect);
      canv.onkeypress = XAppLauncher$run$lambda_2(this);
      canv.onkeydown = XAppLauncher$run$lambda_3(this);
      canv.onkeyup = XAppLauncher$run$lambda_4(this);
    }};
  XAppLauncher.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'XAppLauncher',
    interfaces: []
  };
  function XGraphicsJS(canvas) {
    this.canvas = canvas;
    this.drawList = ArrayList_init();
    this.rect = null;
    this.translate = new Vec2d();
    this.intStyle = new XStyle();
  }
  XGraphicsJS.prototype.setBounds_z39lsx$ = function (rect) {
    this.rect = rect;
  };
  XGraphicsJS.prototype.setTranslate_lu1900$ = function (x, y) {
    this.translate = this.translate.plus_5lk9kw$(new Vec2d(x, y));
  };
  XGraphicsJS.prototype.releaseBounds = function () {
    this.rect = null;
  };
  XGraphicsJS.prototype.width = function () {
    var bounds = this.rect;
    return bounds != null ? bounds.width : this.canvas.width;
  };
  XGraphicsJS.prototype.height = function () {
    var bounds = this.rect;
    return bounds != null ? bounds.height : this.canvas.height;
  };
  XGraphicsJS.prototype.draw_dvdmun$ = function (toDraw) {
    var tmp$;
    var context = Kotlin.isType(tmp$ = this.canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : throwCCE();
    context.save();
    var r = this.rect;
    if (r != null) {
      context.translate(r.xLeft, r.yTop);
      var path2D = new Path2D();
      path2D.rect(0.0, 0.0, r.width, r.height);
      context.clip(path2D);
    }context.translate(this.translate.x, this.translate.y);
    if (Kotlin.isType(toDraw, XRect))
      this.drawRect_ax8lih$(toDraw);
    if (Kotlin.isType(toDraw, XRoundedRect))
      this.drawRoundedRect_o1693g$(toDraw);
    if (Kotlin.isType(toDraw, XEllipse))
      this.drawEllipse_lu1dfr$(toDraw);
    if (Kotlin.isType(toDraw, XPoly))
      this.drawPoly_ax7j69$(toDraw);
    if (Kotlin.isType(toDraw, XLine))
      this.drawLine_ax4ut5$(toDraw);
    if (Kotlin.isType(toDraw, XText))
      this.drawText_ax9vzm$(toDraw);
    context.restore();
  };
  XGraphicsJS.prototype.drawRect_ax8lih$ = function (rect) {
    var g = this.canvas;
    var receiver = rect.dStyle;
    var tmp$;
    var context = Kotlin.isType(tmp$ = g.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : throwCCE();
    context.save();
    context.globalAlpha = 1.0;
    context.translate(rect.centre.x, rect.centre.y);
    context.rotate(rect.rotation);
    if (receiver.fill) {
      context.fillStyle = this.rgba_gr83cy$(receiver.fg);
      context.fillRect(-rect.w / 2, -rect.h / 2, rect.w, rect.h);
    }if (receiver.stroke) {
      context.strokeStyle = this.rgba_gr83cy$(receiver.lc);
      context.lineWidth = receiver.lineWidth;
      context.strokeRect(-rect.w / 2, -rect.h / 2, rect.w, rect.h);
    }context.restore();
  };
  XGraphicsJS.prototype.drawRoundedRect_o1693g$ = function (rect) {
    var g = this.canvas;
    var receiver = rect.dStyle;
    var tmp$;
    var context = Kotlin.isType(tmp$ = g.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : throwCCE();
    context.save();
    context.globalAlpha = 1.0;
    context.translate(rect.centre.x, rect.centre.y);
    context.rotate(rect.rotation);
    var tmp$_0;
    if (rect.radInPercent) {
      var a = rect.w;
      var b = rect.h;
      tmp$_0 = Math_0.min(a, b) * rect.cornerRad;
    } else
      tmp$_0 = rect.cornerRad;
    var rad = tmp$_0;
    this.roundRectPath_3tq200$(context, rect.w, rect.h, rad);
    if (receiver.fill) {
      context.fillStyle = this.rgba_gr83cy$(receiver.fg);
      context.fill();
    }if (receiver.stroke) {
      context.strokeStyle = this.rgba_gr83cy$(receiver.lc);
      context.lineWidth = context.lineWidth;
      context.stroke();
    }context.restore();
  };
  XGraphicsJS.prototype.roundRectPath_3tq200$ = function (context, w, h, rad) {
    var r = {v: rad};
    var x = -w / 2;
    var y = -h / 2;
    if (w < 2 * r.v)
      r.v = w / 2;
    if (h < 2 * r.v)
      r.v = h / 2;
    context.beginPath();
    context.moveTo(x + r.v, y);
    context.arcTo(x + w, y, x + w, y + h, r.v);
    context.arcTo(x + w, y + h, x, y + h, r.v);
    context.arcTo(x, y + h, x, y, r.v);
    context.arcTo(x, y, x + w, y, r.v);
    context.closePath();
  };
  XGraphicsJS.prototype.roundRectPathOld_3tq200$ = function (context, w, h, rad) {
    var r = {v: rad};
    var x = -w / 2;
    var y = -h / 2;
    if (w < 2 * r.v)
      r.v = w / 2;
    if (h < 2 * r.v)
      r.v = h / 2;
    context.beginPath();
    context.moveTo(x + r.v, y);
    context.lineTo(x + w - r.v, y);
    context.quadraticCurveTo(x + w, y, x + w, y + r.v);
    context.lineTo(x + w, y + h - r.v);
    context.quadraticCurveTo(x + w, y + h, x + w - r.v, y + h);
    context.lineTo(x + r.v, y + h);
    context.quadraticCurveTo(x, y + h, x, y + h - r.v);
    context.lineTo(x, y + r.v);
    context.quadraticCurveTo(x, y, x + r.v, y);
    context.closePath();
  };
  XGraphicsJS.prototype.drawEllipse_lu1dfr$ = function (ellipse) {
    var g = this.canvas;
    var receiver = ellipse.dStyle;
    var tmp$;
    var context = Kotlin.isType(tmp$ = g.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : throwCCE();
    context.save();
    context.globalAlpha = 1.0;
    context.translate(ellipse.centre.x, ellipse.centre.y);
    context.rotate(ellipse.rotation);
    context.beginPath();
    context.ellipse(0.0, 0.0, ellipse.w / 2, ellipse.h / 2, 0.0, 0.0, math.PI * 2, true);
    if (receiver.fill) {
      context.fillStyle = this.rgba_gr83cy$(receiver.fg);
      context.fill();
    }if (receiver.stroke) {
      context.strokeStyle = this.rgba_gr83cy$(receiver.lc);
      context.lineWidth = receiver.lineWidth;
      context.stroke();
    }context.restore();
  };
  XGraphicsJS.prototype.drawLine_ax4ut5$ = function (line) {
    var g = this.canvas;
    var path = new Path2D();
    path.moveTo(line.a.x, line.a.y);
    path.lineTo(line.b.x, line.b.y);
    path.closePath();
    var receiver = line.dStyle;
    var tmp$;
    var context = Kotlin.isType(tmp$ = g.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : throwCCE();
    context.save();
    if (receiver.stroke) {
      context.strokeStyle = this.rgba_gr83cy$(receiver.lc);
      context.lineWidth = receiver.lineWidth;
      context.stroke(path);
    }context.restore();
  };
  XGraphicsJS.prototype.drawText_ax9vzm$ = function (text) {
    var g = this.canvas;
    if (g != null) {
      var receiver = text.tStyle;
      var tmp$;
      var context = Kotlin.isType(tmp$ = g.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : throwCCE();
      context.save();
      context.font = numberToInt(receiver.size).toString() + 'px Arial';
      context.fillStyle = this.rgba_gr83cy$(receiver.fg);
      context.textAlign = 'center';
      var metrics = context.measureText(text.str);
      context.fillText(text.str, text.p.x, text.p.y + metrics.actualBoundingBoxAscent / 2);
      context.restore();
    }};
  XGraphicsJS.prototype.v_mx4ult$ = function (x) {
    return numberToInt(255 * x);
  };
  XGraphicsJS.prototype.rgba_gr83cy$ = function (xColor) {
    return 'rgba(' + this.v_mx4ult$(xColor.r) + ', ' + this.v_mx4ult$(xColor.g) + ', ' + this.v_mx4ult$(xColor.b) + ', ' + xColor.a + ')';
  };
  XGraphicsJS.prototype.drawPoly_ax7j69$ = function (poly) {
    var path = new Path2D();
    var tmp$;
    path.moveTo(poly.points.get_za3lpa$(0).x, poly.points.get_za3lpa$(0).y);
    tmp$ = poly.points.iterator();
    while (tmp$.hasNext()) {
      var v = tmp$.next();
      path.lineTo(v.x, v.y);
    }
    if (poly.closed)
      path.closePath();
    var g = this.canvas;
    if (g != null) {
      var $receiver = poly.dStyle;
      var tmp$_0;
      var context = Kotlin.isType(tmp$_0 = g.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : throwCCE();
      context.save();
      context.lineWidth = $receiver.lineWidth;
      context.translate(poly.centre.x, poly.centre.y);
      context.rotate(poly.rotation);
      context.fillStyle = this.rgba_gr83cy$($receiver.fg);
      if ($receiver.fill)
        context.fill(path);
      if ($receiver.stroke)
        context.strokeStyle = this.rgba_gr83cy$($receiver.lc);
      context.stroke(path);
      context.restore();
    }};
  XGraphicsJS.prototype.drawables = function () {
    return this.drawList;
  };
  XGraphicsJS.prototype.redraw = function () {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Not yet implemented');
  };
  Object.defineProperty(XGraphicsJS.prototype, 'style', {
    configurable: true,
    get: function () {
      return this.intStyle;
    },
    set: function (value) {
      this.intStyle = value;
    }
  });
  XGraphicsJS.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'XGraphicsJS',
    interfaces: [XGraphics]
  };
  var package$agents = _.agents || (_.agents = {});
  package$agents.DoNothingAgent = DoNothingAgent;
  Object.defineProperty(package$agents, 'random', {
    get: function () {
      return random;
    }
  });
  package$agents.Expansion = Expansion;
  package$agents.MctsAgent = MctsAgent;
  Object.defineProperty(package$agents, 'nodeCount', {
    get: function () {
      return nodeCount;
    },
    set: function (value) {
      nodeCount = value;
    }
  });
  package$agents.TreeNode = TreeNode;
  package$agents.main_kand9s$ = main;
  package$agents.MutationTransducer = MutationTransducer;
  package$agents.PolicyEvoAgent = PolicyEvoAgent;
  package$agents.RandomAgent = RandomAgent;
  package$agents.SimpleEvoAgent = SimpleEvoAgent;
  var package$analyse = package$agents.analyse || (package$agents.analyse = {});
  package$analyse.StickToPlanRate = StickToPlanRate;
  var package$coev = _.coev || (_.coev = {});
  package$coev.main = main_0;
  package$coev.PopTest = PopTest;
  package$coev.TreeNode = TreeNode_0;
  package$coev.Tree = Tree;
  var package$draw = _.draw || (_.draw = {});
  package$draw.Positioner = Positioner;
  package$draw.Radial = Radial;
  package$draw.Linear = Linear;
  Object.defineProperty(TreeDraw, 'Companion', {
    get: TreeDraw$Companion_getInstance
  });
  package$draw.TreeDraw = TreeDraw;
  package$draw.DrawNode = DrawNode;
  var package$evo = _.evo || (_.evo = {});
  package$evo.GridDataSource = GridDataSource;
  package$evo.GridDataView = GridDataView;
  Object.defineProperty(Aim, 'Minimise', {
    get: Aim$Minimise_getInstance
  });
  Object.defineProperty(Aim, 'Maximise', {
    get: Aim$Maximise_getInstance
  });
  package$evo.Aim = Aim;
  package$evo.SolutionEvaluator = SolutionEvaluator;
  package$evo.MaxSum = MaxSum;
  package$evo.MinSum = MinSum;
  package$evo.MinDiff = MinDiff;
  package$evo.ScoredSolution = ScoredSolution;
  package$evo.EvoUtil = EvoUtil;
  package$evo.SimpleEvo = SimpleEvo;
  package$evo.PathSource = PathSource;
  package$evo.SimpleEvoApp = SimpleEvoApp;
  package$evo.SolutionPath = SolutionPath;
  package$evo.MazeEval = MazeEval;
  package$evo.SimpleGridView = SimpleGridView;
  var package$games = _.games || (_.games = {});
  var package$arcade = package$games.arcade || (package$games.arcade = {});
  package$arcade.AsteroidsParams = AsteroidsParams;
  Object.defineProperty(AsteroidsGame, 'Companion', {
    get: AsteroidsGame$Companion_getInstance
  });
  package$arcade.AsteroidsGame = AsteroidsGame;
  package$arcade.GameObject = GameObject;
  package$arcade.PlayerShip = PlayerShip;
  package$arcade.Missile = Missile;
  package$arcade.Rock = Rock;
  package$arcade.RolloutDataSource = RolloutDataSource;
  package$arcade.ArcadeTestApp = ArcadeTestApp;
  Object.defineProperty(MoveAction, 'Neutral', {
    get: MoveAction$Neutral_getInstance
  });
  Object.defineProperty(MoveAction, 'Left', {
    get: MoveAction$Left_getInstance
  });
  Object.defineProperty(MoveAction, 'Right', {
    get: MoveAction$Right_getInstance
  });
  Object.defineProperty(MoveAction, 'Up', {
    get: MoveAction$Up_getInstance
  });
  Object.defineProperty(MoveAction, 'Down', {
    get: MoveAction$Down_getInstance
  });
  Object.defineProperty(MoveAction, 'Fire', {
    get: MoveAction$Fire_getInstance
  });
  Object.defineProperty(MoveAction, 'Jump', {
    get: MoveAction$Jump_getInstance
  });
  Object.defineProperty(MoveAction, 'Thrust', {
    get: MoveAction$Thrust_getInstance
  });
  package$arcade.MoveAction = MoveAction;
  Object.defineProperty(ObjectType, 'Avatar', {
    get: ObjectType$Avatar_getInstance
  });
  Object.defineProperty(ObjectType, 'P1Missile', {
    get: ObjectType$P1Missile_getInstance
  });
  Object.defineProperty(ObjectType, 'AlienMissile', {
    get: ObjectType$AlienMissile_getInstance
  });
  Object.defineProperty(ObjectType, 'AlienObject', {
    get: ObjectType$AlienObject_getInstance
  });
  package$arcade.ObjectType = ObjectType;
  package$arcade.AsteroidsKeyController = AsteroidsKeyController;
  package$arcade.ShipAction = ShipAction;
  package$arcade.ActionAdapter = ActionAdapter;
  package$arcade.ISprite = ISprite;
  Object.defineProperty(SpriteData, 'Companion', {
    get: SpriteData$Companion_getInstance
  });
  package$arcade.SpriteData = SpriteData;
  package$arcade.BasicSprite = BasicSprite;
  package$arcade.RockSprite = RockSprite;
  Object.defineProperty(SpriteShip, 'Companion', {
    get: SpriteShip$Companion_getInstance
  });
  package$arcade.SpriteShip_init_5lk9kw$ = SpriteShip_init;
  package$arcade.SpriteShip = SpriteShip;
  package$arcade.CollisionAction = CollisionAction;
  Object.defineProperty(package$arcade, 'rockHit', {
    get: function () {
      return rockHit;
    }
  });
  package$arcade.Update = Update;
  package$arcade.SampleSpriteGame = SampleSpriteGame;
  Object.defineProperty(SpriteGame, 'Companion', {
    get: SpriteGame$Companion_getInstance
  });
  package$arcade.SpriteGame = SpriteGame;
  package$arcade.SpriteEngineApp = SpriteEngineApp;
  var package$vehicles = package$arcade.vehicles || (package$arcade.vehicles = {});
  package$vehicles.Shape = Shape;
  package$vehicles.Asteroid = Asteroid;
  package$vehicles.Ship = Ship;
  Object.defineProperty(CaveActions, 'Release', {
    get: CaveActions$Release_getInstance
  });
  Object.defineProperty(CaveActions, 'Attach', {
    get: CaveActions$Attach_getInstance
  });
  var package$caveswing = package$games.caveswing || (package$games.caveswing = {});
  package$caveswing.CaveActions = CaveActions;
  Object.defineProperty(CaveGameState, 'Companion', {
    get: CaveGameState$Companion_getInstance
  });
  package$caveswing.CaveGameState = CaveGameState;
  package$caveswing.CaveMap = CaveMap;
  package$caveswing.ItemPosition = ItemPosition;
  package$caveswing.Item = Item;
  package$caveswing.Fruit = Fruit;
  package$caveswing.Bomb = Bomb;
  package$caveswing.CaveGameInternalState = CaveGameInternalState;
  package$caveswing.CaveSwingApp = CaveSwingApp;
  package$caveswing.CaveSwingParams = CaveSwingParams;
  Object.defineProperty(CaveView, 'Companion', {
    get: CaveView$Companion_getInstance
  });
  package$caveswing.CaveView = CaveView;
  package$caveswing.Star = Star;
  package$caveswing.MovableObject = MovableObject;
  var package$griddle = package$games.griddle || (package$games.griddle = {});
  package$griddle.GriddleControl = GriddleControl;
  package$griddle.DefaultControl = DefaultControl;
  package$griddle.GriddleController = GriddleController;
  Object.defineProperty(GriddleState, 'Ready', {
    get: GriddleState$Ready_getInstance
  });
  Object.defineProperty(GriddleState, 'GameOn', {
    get: GriddleState$GameOn_getInstance
  });
  Object.defineProperty(GriddleState, 'GameOver', {
    get: GriddleState$GameOver_getInstance
  });
  package$griddle.GriddleState = GriddleState;
  Object.defineProperty(GriddleGame, 'Companion', {
    get: GriddleGame$Companion_getInstance
  });
  package$griddle.GriddleGame = GriddleGame;
  package$griddle.GridCell = GridCell;
  Object.defineProperty(GriddleView, 'Companion', {
    get: GriddleView$Companion_getInstance
  });
  package$griddle.GriddleView = GriddleView;
  package$griddle.LetterTile = LetterTile;
  var package$ai = package$griddle.ai || (package$griddle.ai = {});
  package$ai.LetterGridModel = LetterGridModel;
  package$ai.Player = Player;
  package$ai.ScoredCell = ScoredCell;
  package$ai.swap_w2dapk$ = swap;
  Object.defineProperty(MCPlayer, 'Companion', {
    get: MCPlayer$Companion_getInstance
  });
  package$ai.MCPlayer = MCPlayer;
  package$ai.OpenDealRandomPlayer = OpenDealRandomPlayer;
  package$ai.OpenDealEvoPlayer = OpenDealEvoPlayer;
  package$ai.FastMCPlayer = FastMCPlayer;
  package$ai.PermPlaayer = PermPlaayer;
  Object.defineProperty(FastSampleDeck, 'Companion', {
    get: FastSampleDeck$Companion_getInstance
  });
  var package$deck = package$griddle.deck || (package$griddle.deck = {});
  package$deck.FastSampleDeck = FastSampleDeck;
  package$deck.LetterDeck = LetterDeck;
  package$deck.GenDeck = GenDeck;
  Object.defineProperty(StatDeck, 'Companion', {
    get: StatDeck$Companion_getInstance
  });
  package$deck.StatDeck = StatDeck;
  Object.defineProperty(package$deck, 'ShuffleValidator', {
    get: ShuffleValidator_getInstance
  });
  Object.defineProperty(GridScan, 'Companion', {
    get: GridScan$Companion_getInstance
  });
  var package$words = package$griddle.words || (package$griddle.words = {});
  package$words.GridScan = GridScan;
  Object.defineProperty(GridUtil, 'Companion', {
    get: GridUtil$Companion_getInstance
  });
  package$words.GridUtil = GridUtil;
  Object.defineProperty(Dir, 'H', {
    get: Dir$H_getInstance
  });
  Object.defineProperty(Dir, 'V', {
    get: Dir$V_getInstance
  });
  package$words.Dir = Dir;
  Object.defineProperty(GridWord, 'Companion', {
    get: GridWord$Companion_getInstance
  });
  package$words.GridWord = GridWord;
  package$words.TrieDict = TrieDict;
  Object.defineProperty(TrieNode, 'Companion', {
    get: TrieNode$Companion_getInstance
  });
  package$words.TrieNode = TrieNode;
  var package$gridgames = package$games.gridgames || (package$games.gridgames = {});
  package$gridgames.GridGame = GridGame;
  Object.defineProperty(TicTacToe, 'Companion', {
    get: TicTacToe$Companion_getInstance
  });
  package$gridgames.TicTacToe = TicTacToe;
  package$gridgames.GridGameApp = GridGameApp;
  package$gridgames.GridView = GridView;
  package$gridgames.GridStyle = GridStyle;
  Object.defineProperty(MaxGame, 'Companion', {
    get: MaxGame$Companion_getInstance
  });
  var package$maxgame = package$games.maxgame || (package$games.maxgame = {});
  package$maxgame.MaxGame = MaxGame;
  Object.defineProperty(Graph, 'Companion', {
    get: Graph$Companion_getInstance
  });
  var package$subgoal = package$games.subgoal || (package$games.subgoal = {});
  package$subgoal.Graph = Graph;
  package$subgoal.main = main_1;
  Object.defineProperty(GridWorldView, 'Companion', {
    get: GridWorldView$Companion_getInstance
  });
  package$subgoal.GridWorldView = GridWorldView;
  Object.defineProperty(Levels, 'list', {
    get: Levels$list_getInstance
  });
  package$subgoal.Levels = Levels;
  package$subgoal.TestMacroAgent = TestMacroAgent;
  Object.defineProperty(MacroWorld, 'Companion', {
    get: MacroWorld$Companion_getInstance
  });
  package$subgoal.MacroWorld = MacroWorld;
  package$subgoal.SubGridSnap = SubGridSnap;
  Object.defineProperty(SubGridState, 'Companion', {
    get: SubGridState$Companion_getInstance
  });
  package$subgoal.SubGridState = SubGridState;
  package$subgoal.SubGridWorld = SubGridWorld;
  package$subgoal.SubgoalDemoControl = SubgoalDemoControl;
  package$subgoal.DefaultDemoControl = DefaultDemoControl;
  package$subgoal.SubgoalDemo = SubgoalDemo;
  Object.defineProperty(DemoUpdater, 'Companion', {
    get: DemoUpdater$Companion_getInstance
  });
  package$subgoal.DemoUpdater = DemoUpdater;
  package$subgoal.ScoredPath = ScoredPath;
  package$subgoal.Updater = Updater;
  var package$tetris = package$games.tetris || (package$games.tetris = {});
  package$tetris.TetrisController = TetrisController;
  package$tetris.TetrisKeyController = TetrisKeyController;
  Object.defineProperty(Actions, 'DoNothing', {
    get: Actions$DoNothing_getInstance
  });
  Object.defineProperty(Actions, 'Left', {
    get: Actions$Left_getInstance
  });
  Object.defineProperty(Actions, 'Right', {
    get: Actions$Right_getInstance
  });
  Object.defineProperty(Actions, 'Rotate', {
    get: Actions$Rotate_getInstance
  });
  Object.defineProperty(Actions, 'Down', {
    get: Actions$Down_getInstance
  });
  Object.defineProperty(Actions, 'Drop', {
    get: Actions$Drop_getInstance
  });
  package$tetris.Actions = Actions;
  Object.defineProperty(TetrisGame, 'Companion', {
    get: TetrisGame$Companion_getInstance
  });
  package$tetris.TetrisGame = TetrisGame;
  package$tetris.main = main_2;
  Object.defineProperty(TetrisModel, 'Companion', {
    get: TetrisModel$Companion_getInstance
  });
  package$tetris.TetrisModel = TetrisModel;
  Object.defineProperty(package$tetris, 'TetrisConstants', {
    get: TetrisConstants_getInstance
  });
  Object.defineProperty(TetrisValueFunction, 'Companion', {
    get: TetrisValueFunction$Companion_getInstance
  });
  package$tetris.TetrisValueFunction = TetrisValueFunction;
  Object.defineProperty(ColHeightDiff, 'Companion', {
    get: ColHeightDiff$Companion_getInstance
  });
  package$tetris.ColHeightDiff = ColHeightDiff;
  Object.defineProperty(TetrisView, 'Companion', {
    get: TetrisView$Companion_getInstance
  });
  package$tetris.TetrisView = TetrisView;
  Object.defineProperty(package$tetris, 'Tetrons', {
    get: Tetrons_getInstance
  });
  package$tetris.TetronSprite = TetronSprite;
  package$tetris.Cell = Cell;
  Object.defineProperty(CellState, 'Empty', {
    get: CellState$Empty_getInstance
  });
  Object.defineProperty(CellState, 'P1', {
    get: CellState$P1_getInstance
  });
  Object.defineProperty(CellState, 'P2', {
    get: CellState$P2_getInstance
  });
  var package$uti = package$games.uti || (package$games.uti = {});
  package$uti.CellState = CellState;
  Object.defineProperty(LineState, 'Empty', {
    get: LineState$Empty_getInstance
  });
  Object.defineProperty(LineState, 'Open', {
    get: LineState$Open_getInstance
  });
  Object.defineProperty(LineState, 'Mixed', {
    get: LineState$Mixed_getInstance
  });
  Object.defineProperty(LineState, 'Partial1', {
    get: LineState$Partial1_getInstance
  });
  Object.defineProperty(LineState, 'Partial2', {
    get: LineState$Partial2_getInstance
  });
  Object.defineProperty(LineState, 'P1', {
    get: LineState$P1_getInstance
  });
  Object.defineProperty(LineState, 'P2', {
    get: LineState$P2_getInstance
  });
  Object.defineProperty(LineState, 'Unwon', {
    get: LineState$Unwon_getInstance
  });
  package$uti.LineState = LineState;
  Object.defineProperty(GridState, 'GameOn', {
    get: GridState$GameOn_getInstance
  });
  Object.defineProperty(GridState, 'Draw', {
    get: GridState$Draw_getInstance
  });
  Object.defineProperty(GridState, 'Win1', {
    get: GridState$Win1_getInstance
  });
  Object.defineProperty(GridState, 'Win2', {
    get: GridState$Win2_getInstance
  });
  package$uti.GridState = GridState;
  package$uti.LineGrid = LineGrid;
  package$uti.LineTester = LineTester;
  var package$ggi = _.ggi || (_.ggi = {});
  package$ggi.AbstractGameState = AbstractGameState;
  package$ggi.ExtendedAbstractGameState = ExtendedAbstractGameState;
  package$ggi.AbstractGameStateMulti = AbstractGameStateMulti;
  package$ggi.ExtendedAbstractGameStateMulti = ExtendedAbstractGameStateMulti;
  package$ggi.AbstractValueFunction = AbstractValueFunction;
  package$ggi.SimplePlayerInterface = SimplePlayerInterface;
  package$ggi.SimplePlayerInterfaceMulti = SimplePlayerInterfaceMulti;
  var package$ggik = _.ggik || (_.ggik = {});
  package$ggik.GameRunner = GameRunner;
  var package$graph = _.graph || (_.graph = {});
  package$graph.EasyGraph = EasyGraph;
  package$graph.Searcher = Searcher;
  Object.defineProperty(ArrayAsGrid, 'Companion', {
    get: ArrayAsGrid$Companion_getInstance
  });
  package$graph.ArrayAsGrid = ArrayAsGrid;
  package$graph.ShortestPath = ShortestPath;
  var package$gui = _.gui || (_.gui = {});
  package$gui.ColorGradientApp = ColorGradientApp;
  package$gui.EasyGraphPlot = EasyGraphPlot;
  package$gui.HelloXGraphics = HelloXGraphics;
  package$gui.HelloXKG = HelloXKG;
  package$gui.RandomGraphPlot = RandomGraphPlot;
  package$gui.TreeRectApp = TreeRectApp;
  Object.defineProperty(Split, 'V', {
    get: Split$V_getInstance
  });
  Object.defineProperty(Split, 'H', {
    get: Split$H_getInstance
  });
  package$gui.Split = Split;
  package$gui.RectPair = RectPair;
  package$gui.SplitRect = SplitRect;
  Object.defineProperty(TreeBuilder, 'Companion', {
    get: TreeBuilder$Companion_getInstance
  });
  package$gui.TreeBuilder = TreeBuilder;
  Object.defineProperty(XColor, 'Companion', {
    get: XColor$Companion_getInstance
  });
  package$gui.XColor = XColor;
  package$gui.XPalette = XPalette;
  package$gui.XColorHeat = XColorHeat;
  package$gui.OldXColor = OldXColor;
  package$gui.XGraphics = XGraphics;
  package$gui.XStyle = XStyle;
  package$gui.TStyle = TStyle;
  package$gui.XApp = XApp;
  Object.defineProperty(XMouseEventType, 'Down', {
    get: XMouseEventType$Down_getInstance
  });
  Object.defineProperty(XMouseEventType, 'Up', {
    get: XMouseEventType$Up_getInstance
  });
  Object.defineProperty(XMouseEventType, 'Moved', {
    get: XMouseEventType$Moved_getInstance
  });
  Object.defineProperty(XMouseEventType, 'Dragged', {
    get: XMouseEventType$Dragged_getInstance
  });
  Object.defineProperty(XMouseEventType, 'Clicked', {
    get: XMouseEventType$Clicked_getInstance
  });
  package$gui.XMouseEventType = XMouseEventType;
  package$gui.XMouseEvent = XMouseEvent;
  Object.defineProperty(XKeyEventType, 'Pressed', {
    get: XKeyEventType$Pressed_getInstance
  });
  Object.defineProperty(XKeyEventType, 'Released', {
    get: XKeyEventType$Released_getInstance
  });
  Object.defineProperty(XKeyEventType, 'Typed', {
    get: XKeyEventType$Typed_getInstance
  });
  Object.defineProperty(XKeyEventType, 'Down', {
    get: XKeyEventType$Down_getInstance
  });
  package$gui.XKeyEventType = XKeyEventType;
  package$gui.XKeyEvent = XKeyEvent;
  Object.defineProperty(XKeyMap, 'Companion', {
    get: XKeyMap$Companion_getInstance
  });
  package$gui.XKeyMap = XKeyMap;
  package$gui.Drawable = Drawable;
  package$gui.GeomDrawable = GeomDrawable;
  package$gui.XRect = XRect;
  package$gui.XRoundedRect = XRoundedRect;
  package$gui.XEllipse = XEllipse;
  package$gui.XLine = XLine;
  package$gui.XText = XText;
  package$gui.XPoly = XPoly;
  package$gui.PolyUtil = PolyUtil;
  var package$geometry = package$gui.geometry || (package$gui.geometry = {});
  package$geometry.ContainsTestApp = ContainsTestApp;
  package$geometry.Poly = Poly;
  var package$layout = package$gui.layout || (package$gui.layout = {});
  package$layout.GridXYFilterLayout = GridXYFilterLayout;
  Object.defineProperty(Horizontal, 'Left', {
    get: Horizontal$Left_getInstance
  });
  Object.defineProperty(Horizontal, 'Center', {
    get: Horizontal$Center_getInstance
  });
  Object.defineProperty(Horizontal, 'Right', {
    get: Horizontal$Right_getInstance
  });
  Object.defineProperty(Horizontal, 'Any', {
    get: Horizontal$Any_getInstance
  });
  package$layout.Horizontal = Horizontal;
  Object.defineProperty(Vertical, 'Top', {
    get: Vertical$Top_getInstance
  });
  Object.defineProperty(Vertical, 'Middle', {
    get: Vertical$Middle_getInstance
  });
  Object.defineProperty(Vertical, 'Bottom', {
    get: Vertical$Bottom_getInstance
  });
  Object.defineProperty(Vertical, 'Any', {
    get: Vertical$Any_getInstance
  });
  package$layout.Vertical = Vertical;
  Object.defineProperty(Expansion_0, 'Fill', {
    get: Expansion$Fill_getInstance
  });
  Object.defineProperty(Expansion_0, 'Squash', {
    get: Expansion$Squash_getInstance
  });
  package$layout.Expansion = Expansion_0;
  package$layout.Direction = Direction;
  package$layout.LRect = LRect;
  package$layout.Span = Span;
  package$layout.LPane = LPane;
  package$layout.Layout = Layout;
  package$layout.LayoutTest = LayoutTest;
  package$layout.TetrisDemoLayout = TetrisDemoLayout;
  var package$math = _.math || (_.math = {});
  package$math.iv_vux9f0$ = iv;
  package$math.IntVec2d = IntVec2d;
  package$math.v_lu1900$ = v;
  Object.defineProperty(Vec2d, 'Companion', {
    get: Vec2d$Companion_getInstance
  });
  package$math.Vec2d = Vec2d;
  var package$sample = _.sample || (_.sample = {});
  package$sample.hello = hello;
  var package$test = _.test || (_.test = {});
  package$test.CommonTest = CommonTest;
  package$test.main = main_3;
  var package$util = _.util || (_.util = {});
  package$util.BoxMuller = BoxMuller;
  package$util.ElapsedTimer = ElapsedTimer;
  package$util.InputFormBuilder = InputFormBuilder;
  package$util.Para = Para;
  package$util.IntField = IntField;
  package$util.HashCounter = HashCounter;
  Object.defineProperty(Picker, 'Companion', {
    get: Picker$Companion_getInstance
  });
  package$util.Picker = Picker;
  Object.defineProperty(StatSummary, 'Companion', {
    get: StatSummary$Companion_getInstance
  });
  package$util.StatSummary = StatSummary;
  package$util.URLUtil = URLUtil;
  package$sample.ArticleMultiCanvas = ArticleMultiCanvas;
  package$sample.AsteroidsTest = AsteroidsTest;
  package$sample.FormCreateTest = FormCreateTest;
  package$sample.PolyTest = PolyTest;
  package$sample.Sample = Sample;
  Object.defineProperty(package$sample, 'Platform', {
    get: Platform_getInstance
  });
  package$sample.main_kand9s$ = main_4;
  package$sample.main = main_5;
  Object.defineProperty(package$sample, 'canvas', {
    get: function () {
      return canvas;
    }
  });
  Object.defineProperty(package$sample, 'test', {
    get: function () {
      return test;
    }
  });
  package$sample.SampleJs = SampleJs;
  package$sample.initalizeCanvas = initalizeCanvas;
  package$sample.Dispatcher = Dispatcher;
  package$sample.GriddleTest = GriddleTest;
  package$sample.HTTPTest = HTTPTest;
  package$sample.SpeedTest = SpeedTest;
  package$sample.BasicTest = BasicTest;
  package$sample.SubgoalDemoTest = SubgoalDemoTest;
  package$sample.XAppLauncher = XAppLauncher;
  package$test.XGraphicsJS = XGraphicsJS;
  TreeDraw.prototype.handleMouseEvent_x4hb96$ = XApp.prototype.handleMouseEvent_x4hb96$;
  TreeDraw.prototype.handleKeyEvent_wtf8cg$ = XApp.prototype.handleKeyEvent_wtf8cg$;
  GridDataView.prototype.handleMouseEvent_x4hb96$ = XApp.prototype.handleMouseEvent_x4hb96$;
  GridDataView.prototype.handleKeyEvent_wtf8cg$ = XApp.prototype.handleKeyEvent_wtf8cg$;
  MaxSum.prototype.select_1zogng$ = SolutionEvaluator.prototype.select_1zogng$;
  MinSum.prototype.select_1zogng$ = SolutionEvaluator.prototype.select_1zogng$;
  MinDiff.prototype.select_1zogng$ = SolutionEvaluator.prototype.select_1zogng$;
  SimpleEvoApp.prototype.handleMouseEvent_x4hb96$ = XApp.prototype.handleMouseEvent_x4hb96$;
  SimpleEvoApp.prototype.handleKeyEvent_wtf8cg$ = XApp.prototype.handleKeyEvent_wtf8cg$;
  MazeEval.prototype.select_1zogng$ = SolutionEvaluator.prototype.select_1zogng$;
  CaveSwingApp.prototype.handleMouseEvent_x4hb96$ = XApp.prototype.handleMouseEvent_x4hb96$;
  CaveSwingApp.prototype.handleKeyEvent_wtf8cg$ = XApp.prototype.handleKeyEvent_wtf8cg$;
  TicTacToe.prototype.resetTotalTicks = ExtendedAbstractGameStateMulti.prototype.resetTotalTicks;
  GridGameApp.prototype.handleKeyEvent_wtf8cg$ = XApp.prototype.handleKeyEvent_wtf8cg$;
  DefaultDemoControl.prototype.useDoorways = SubgoalDemoControl.prototype.useDoorways;
  ColorGradientApp.prototype.handleMouseEvent_x4hb96$ = XApp.prototype.handleMouseEvent_x4hb96$;
  ColorGradientApp.prototype.handleKeyEvent_wtf8cg$ = XApp.prototype.handleKeyEvent_wtf8cg$;
  HelloXKG.prototype.handleKeyEvent_wtf8cg$ = XApp.prototype.handleKeyEvent_wtf8cg$;
  GridXYFilterLayout.prototype.handleKeyEvent_wtf8cg$ = XApp.prototype.handleKeyEvent_wtf8cg$;
  GridXYFilterLayout.prototype.handleMouseEvent_x4hb96$ = XApp.prototype.handleMouseEvent_x4hb96$;
  XGraphicsJS.prototype.centre = XGraphics.prototype.centre;
  XGraphicsJS.prototype.restoreTransform = XGraphics.prototype.restoreTransform;
  XGraphicsJS.prototype.saveTransform = XGraphics.prototype.saveTransform;
  random = Random.Default;
  nodeCount = 0;
  rockHit = rockHit$lambda;
  canvas = initalizeCanvas();
  test = new Dispatcher();
  main([]);
  Kotlin.defineModule('JavaJSTest', _);
  return _;
}));

//# sourceMappingURL=JavaJSTest.js.map
