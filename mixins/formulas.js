/*
 * formulas.js - calculator formulas
 * Copyright (C) 2019 kevin olson <acidjazz@gmail.com>
 *
 * Distributed under terms of the APACHE license.
 */

export default {
  computed: {
    totalJobs () {
      return (this.is_new ? this.constructionJobs : 0) +
        this.operationJobs +
        this.spendingJobs
    },
    totalImpact () {
      return (this.is_new ? this.constructionContribution : 0) +
        this.operationContribution +
        this.spendingContribution
    },
    constructionJobs () {
      return this.homes *
        this.constructionImpacts[this.key].Total_Employment /
        this.constructionImpacts[this.key].Building_Permits
    },
    operationJobs () {
      return this.homes *
        this.operationImpacts[this.key].Total_Jobs /
        this.operationImpacts[this.key].Total_Number_of_Apartments
    },
    spendingJobs () {
      return this.homes *
        this.spendingImpacts[this.key].Total_Jobs_Supported /
        this.spendingImpacts[this.key].Total_Number_of_Renter_Households
    },
    operationDollarsSpent () {
      return this.homes *
        this.operationImpacts[this.key].Total_Annual_Operation_Cost /
        this.operationImpacts[this.key].Total_Number_of_Apartments
    },
    constructionDirectOnSiteJobs () {
      return this.homes *
        this.constructionImpacts[this.key].Direct_Jobs /
        this.constructionImpacts[this.key].Building_Permits
    },
    operationDirectOnSiteJobs () {
      return this.homes *
        this.operationImpacts[this.key].Direct_On_Site_Jobs /
        this.operationImpacts[this.key].Total_Number_of_Apartments
    },
    operationContribution () {
      return this.homes *
        this.operationImpacts[this.key].Economic_Contribution /
        this.operationImpacts[this.key].Total_Number_of_Apartments
    },
    constructionContribution () {
      return this.homes *
        this.constructionImpacts[this.key].Economic_Contribution /
        this.constructionImpacts[this.key].Building_Permits
    },
    spendingDollars () {
      return this.homes *
        this.spendingImpacts[this.key].Direct_Consumer_Spending /
        this.spendingImpacts[this.key].Total_Number_of_Renter_Households
    },
    spendingDirectJobs () {
      return this.homes *
        this.spendingImpacts[this.key].Direct_Jobs_Supported /
        this.spendingImpacts[this.key].Total_Number_of_Renter_Households
    },
    spendingContribution () {
      return this.homes *
        this.spendingImpacts[this.key].Total_Consumer_Spending /
        this.spendingImpacts[this.key].Total_Number_of_Renter_Households
    },
  }
}
