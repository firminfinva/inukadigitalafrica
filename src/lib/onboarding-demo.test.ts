import { describe, it as test } from "node:test";
import { deepStrictEqual, strictEqual } from "node:assert";
import { assessDemo, createDemoTasks } from "./onboarding-demo";

describe("enterprise onboarding demo", () => {
  test("creates training tasks from the company's stated responsibilities", () => {
    deepStrictEqual(createDemoTasks({ company: "Inuka", role: "Analyst", tools: "Excel", responsibilities: " Prepare the sales report\n\nCheck invoices; Update the CRM " }), ["Prepare the sales report", "Check invoices", "Update the CRM"]);
  });
  test("rates the employee based on submitted exercise answers", () => {
    deepStrictEqual(assessDemo(["plan", "deliver", "verify"]), { criteria: [true, true, true], score: 100 });
    deepStrictEqual(assessDemo(["rush", "deliver", "skip"]), { criteria: [false, true, false], score: 33 });
    strictEqual(assessDemo(["rush", "copy", "skip"]).score, 0);
  });
});