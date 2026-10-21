import { describe, expect, test } from "bun:test";
import { assessDemo, createDemoTasks } from "./onboarding-demo";

describe("enterprise onboarding demo", () => {
  test("creates training tasks from the company's stated responsibilities", () => {
    expect(createDemoTasks({ company: "Inuka", role: "Analyst", tools: "Excel", responsibilities: " Prepare the sales report\n\nCheck invoices; Update the CRM " })).toEqual(["Prepare the sales report", "Check invoices", "Update the CRM"]);
  });
  test("rates the employee based on submitted exercise answers", () => {
    expect(assessDemo(["plan", "deliver", "verify"])).toEqual({ criteria: [true, true, true], score: 100 });
    expect(assessDemo(["rush", "deliver", "skip"])).toEqual({ criteria: [false, true, false], score: 33 });
    expect(assessDemo(["rush", "copy", "skip"]).score).toBe(0);
  });
});