// ADD THIS FILE

import BudgetSummary from "../../components/finance/BudgetSummary";
import IncomeExpenseGrid from "../../components/finance/IncomeExpenseGrid";
import BudgetChartsPlaceholder from "../../components/finance/BudgetChartsPlaceholder";

export default function FinancePage() {
  return (
    <>
      <BudgetSummary />
      <IncomeExpenseGrid />
      <BudgetChartsPlaceholder />
    </>
  );
}
