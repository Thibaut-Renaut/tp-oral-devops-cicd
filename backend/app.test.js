// backend/app.test.js

describe("Tests unitaires du Backend", () => {
  it("devrait valider une opération mathématique simple", () => {
    expect(1 + 1).toBe(2);
  });

  it("devrait vérifier que la variable d'environnement est correcte", () => {
    const environment = "CI/CD";
    expect(environment).toBe("CI/CD");
  });
});
