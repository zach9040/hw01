describe("builtins.trim(str)", function() {
  it("builtins.trim('  Horizons  ') -> 'Horizons'", function() {
    expect(builtins.trim("  Horizons  ")).toEqual("Horizons");
  });
  it("builtins.trim('Hello World!    ') -> 'Hello World!'", function() {
    expect(builtins.trim("Hello World!    ")).toEqual("Hello World!");
  });
});

describe("builtins.search(sourceString, searchString)", function() {
  it("builtins.search('Horizons', 'o') -> true", function() {
    expect(builtins.search("Horizons", "o")).toEqual(true);
  });
  it("builtins.search('Horizons', 'oz') -> false", function() {
    expect(builtins.search("Horizons", "oz")).toEqual(false);
  });
  it("builtins.search('rizo', 'Horizons') -> false", function() {
    expect(builtins.search("rizo", "Horizons")).toEqual(false);
  });
  it("builtins.search('', 'Horizons') -> false", function() {
    expect(builtins.search("", "Horizons")).toEqual(false);
  });
  it("builtins.search('Horizons', '') -> true", function() {
    expect(builtins.search("Horizons", "")).toEqual(true);
  });
  it("builtins.search('Horizons', 'h') -> false", function() {
    expect(builtins.search("Horizons", "h")).toEqual(false);
  });
});

describe("builtins.reverse(arr)", function() {
  it("builtins.reverse([1, 2, 3]) -> [3, 2, 1]", function() {
    expect(builtins.reverse([1, 2, 3])).toEqual([3, 2, 1]);
  });
  it("builtins.reverse(['dogs', 'cats', 'moose']) -> ['moose', 'cats', 'dogs']", function() {
    expect(builtins.reverse(["dogs", "cats", "moose"])).toEqual([
      "moose",
      "cats",
      "dogs"
    ]);
  });
  it("builtins.reverse([]) -> []", function() {
    expect(builtins.reverse([])).toEqual([]);
  });
  it("builtins.reverse([123]) -> [123]", function() {
    expect(builtins.reverse([123])).toEqual([123]);
  });
});
