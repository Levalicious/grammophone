var tests = {};

tests["sanity"] = {
  views: ["sanity"],
  calculations: {
    unreachable: "grammar.unreachable",
    unrealizable: "grammar.unrealizable",
    cycle: "grammar.cycle",
    nullAmbiguity: "grammar.nullAmbiguity",
    productions: "grammar.productions",
    info: "grammar.symbolInfo"
  }
};

tests["vitals"] = {
  views: ["nullable", "endable", "first", "follow"],
  calculations: {
    nullable: "grammar.nullable",
    endable: "grammar.endable",
    first: "grammar.first",
    follow: "grammar.follow",
    info: "grammar.symbolInfo"
  }
}

tests["ll1"] = {
  views: ["ll1_table"],
  calculations: {
    table: "parsing.ll.ll1_table",
    productions: "grammar.productions",
    info: "grammar.symbolInfo"
  }
}

tests["lr0"] = {
  views: ["lr_automaton", "lr0_table"],
  calculations: {
    automaton: "parsing.lr.lr0_automaton",
    table: "parsing.lr.lr0_table",
    productions: "grammar.productions",
    start: "grammar.start",
    info: "grammar.symbolInfo"
  }
}

tests["slr1"] = {
  views: ["lr_automaton", "lr1_table"],
  calculations: {
    automaton: "parsing.lr.lr0_automaton",
    table: "parsing.lr.slr1_table",
    productions: "grammar.productions",
    start: "grammar.start",
    info: "grammar.symbolInfo"
  }
}

tests["lr1"] = {
  views: ["lr_automaton", "lr1_table"],
  calculations: {
    automaton: "parsing.lr.lr1_automaton",
    table: "parsing.lr.lr1_table",
    productions: "grammar.productions",
    start: "grammar.start",
    info: "grammar.symbolInfo"
  }
}

tests["lalr1"] = {
  views: ["lr_automaton", "lr1_table"],
  calculations: {
    automaton: "parsing.lr.lalr1_automaton",
    table: "parsing.lr.lalr1_table",
    productions: "grammar.productions",
    start: "grammar.start",
    info: "grammar.symbolInfo"
  }
}
