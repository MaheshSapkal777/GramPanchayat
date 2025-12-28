// ADD THIS FILE

import BudgetSummary from "../../components/finance/BudgetSummary";
import IncomeExpenseGrid from "../../components/finance/IncomeExpenseGrid";
import BudgetChartsPlaceholder from "../../components/finance/BudgetChartsPlaceholder";
import BudgetPdfDownload from "../../components/finance/BudgetPdfDownload";


export default function FinancePage() {
  return (
    <>
      <BudgetSummary />
      <BudgetPdfDownload /> {/* ✅ ADDED */}
      <IncomeExpenseGrid />
      <BudgetChartsPlaceholder />
    </>
  );
}
