import { describe, expect, it } from "@jest/globals";
import { getOptimalTokenBalance } from "../getOptimalTokenBalance";

describe("getOptimalTokenBalance", () => {
  it("should return the balance 0.0 if the balance is an empty string", () => {
    const balance = "";
    const tokenBalance = "0.0 ZND";

    expect(getOptimalTokenBalance(balance)).toBe(tokenBalance);
  });

  it("should return the balance 0.0 if the balance is 0.0", () => {
    const balance = "0.0";
    const tokenBalance = "0.0 ZND";

    expect(getOptimalTokenBalance(balance)).toBe(tokenBalance);
  });

  it("should return the balance 0.0 if the balance is 0.", () => {
    const balance = "0.";
    const tokenBalance = "0.0 ZND";

    expect(getOptimalTokenBalance(balance)).toBe(tokenBalance);
  });

  it("should return the balance 0.0 if the balance is 0", () => {
    const balance = "0";
    const tokenBalance = "0.0 ZND";

    expect(getOptimalTokenBalance(balance)).toBe(tokenBalance);
  });

  it("should return the balance 1787372.5556 if the balance is 1787372.5556", () => {
    const balance = "1787372.5556";
    const tokenBalance = "1787372.5556 ZND";

    expect(getOptimalTokenBalance(balance)).toBe(tokenBalance);
  });

  it("should return the balance 0.0 if the balance is 0.0000000", () => {
    const balance = "0.0000000";
    const tokenBalance = "0.0 ZND";

    expect(getOptimalTokenBalance(balance)).toBe(tokenBalance);
  });

  it("should return the balance 1.007 if the balance is 1.007025000", () => {
    const balance = "1.007025000";
    const tokenBalance = "1.007 ZND";

    expect(getOptimalTokenBalance(balance)).toBe(tokenBalance);
  });

  it("should return the balance 3.999 if the balance is 3.999", () => {
    const balance = "3.999";
    const tokenBalance = "3.999 ZND";

    expect(getOptimalTokenBalance(balance)).toBe(tokenBalance);
  });

  it("should return the balance 6.9999 if the balance is 6.9999", () => {
    const balance = "6.9999";
    const tokenBalance = "6.9999 ZND";

    expect(getOptimalTokenBalance(balance)).toBe(tokenBalance);
  });

  it("should return the balance 9.9999 if the balance is 9.999999", () => {
    const balance = "9.999999";
    const tokenBalance = "9.9999 ZND";

    expect(getOptimalTokenBalance(balance)).toBe(tokenBalance);
  });

  it("should return the balance 1.9999 if the balance is 1.999999999999999999", () => {
    const balance = "1.999999999999999999";
    const tokenBalance = "1.9999 ZND";

    expect(getOptimalTokenBalance(balance)).toBe(tokenBalance);
  });

  it("should return the balance 7.0 if the balance is 7", () => {
    const balance = "7";
    const tokenBalance = "7.0 ZND";

    expect(getOptimalTokenBalance(balance)).toBe(tokenBalance);
  });

  it("should return the balance 8.0 with the passed token symbol if the balance is 8", () => {
    const balance = "8";
    const tokenBalance = "8.0 XYZ";

    expect(getOptimalTokenBalance(balance, "XYZ")).toBe(tokenBalance);
  });
});
