# Study Report & Analysis Guide

## What is a Study Report?

A study report documents your data collection process and presents your initial findings. It transforms your proposal into executed research, showing what actually happened during your study and what patterns emerged from your data.

**Your report should read like the "Results" sections in academic papers** - objective presentation of findings without interpretation.

**It's NOT:**
- A discussion of what your results mean
- Speculation about implications or applications
- A repeat of your methodology from the proposal

**It IS:**
- Factual documentation of your data collection process
- Systematic presentation of your findings
- Evidence-based reporting with appropriate statistics/themes

## Goals

Document your study execution, present findings objectively, demonstrate analytical rigor, and prepare evidence for your final discussion.

## Building on Your Proposal

Your approved proposal serves as your **execution roadmap**. Document any deviations from your plan and justify necessary changes.

**Example Deviation Documentation:**
> **Planned**: 24 participants recruited via university mailing lists
> **Actual**: 20 participants (4 no-shows), recruited via mailing lists (15) and social media (5)
> **Impact**: Maintained statistical power as original power analysis showed n=18 minimum required

## Study Execution Documentation

### Data Collection Process
Document exactly what happened during your study:

**Participant Demographics**: Who actually participated (vs. who you planned to recruit)
**Procedure Adherence**: What went according to plan, what required adjustment
**Technical Issues**: Equipment problems, software glitches, environmental factors
**Data Quality**: Missing data, outliers, protocol violations

**Example Process Documentation:**
> **Participants**: 20 students (12 female, 8 male, ages 19-24, M=21.3, SD=1.8). All owned smartphones >2 years.
> **Sessions**: Conducted in usability lab over 2 weeks. Average session duration: 47 minutes (planned: 45).
> **Issues**: 2 participants experienced app crashes during Task 3, requiring restart. 1 participant was left-handed (not screened for), analyzed separately.

## Data Analysis Framework

Choose analysis approach based on your study type:

**Quantitative Data** → **Statistical Analysis**
- Descriptive statistics (means, SDs, distributions)
- Inferential tests (t-tests, ANOVA, non-parametric)
- Effect sizes and confidence intervals
- *Example: "Task completion time: Haptic M=23.4s (SD=4.2) vs Visual M=28.7s (SD=5.1), t(19)=3.24, p=.004, d=1.12"*

**Qualitative Data** → **Thematic Analysis**
- Systematic coding of interview/observation data
- Theme identification and validation
- Participant quote selection and anonymization
- *Example: "Three themes emerged: (1) Learning curve challenges, (2) Context-dependent preferences, (3) Accessibility benefits"*

**Mixed Data** → **Integrated Analysis**
- Quantitative results first, then qualitative insights
- Triangulation between data sources
- Convergent and divergent findings
- *Example: "While performance data showed no difference, interviews revealed strong user preferences for haptic feedback"*

## What to Submit

Your study report should be **2-3 pages maximum** and include:

> **💡 Tip for Success**: Focus on what you found, not what it means. Save interpretation for your final paper.

### 1. Study Execution Summary

**Participants**: Final sample characteristics, recruitment success, any demographic insights
**Procedure**: Adherence to protocol, timing, any necessary adaptations
**Data Quality**: Completeness, outliers, exclusions with justification

### 2. Results Presentation

#### Quantitative Results
**Descriptive Statistics**: Means, standard deviations, ranges for all key measures
**Statistical Tests**: Appropriate tests with effect sizes, confidence intervals
**Visualizations**: Clear graphs/tables supporting your statistical claims

**Example Results:**
> **Task Performance**: Participants completed tasks significantly faster with haptic feedback (M=23.4s, SD=4.2) than visual-only feedback (M=28.7s, SD=5.1), t(19)=3.24, p=.004, Cohen's d=1.12, 95% CI [1.8, 8.8].
> **Satisfaction Ratings**: NASA-TLX scores showed lower perceived workload for haptic condition (Mdn=3.2) vs visual (Mdn=4.1), Wilcoxon Z=-2.89, p=.004, r=.65.

#### Qualitative Results
**Coding Process**: How you analyzed interviews/observations
**Theme Development**: Major themes with supporting evidence
**Participant Voices**: Representative quotes (anonymized)

**Example Themes:**
> **Theme 1: Learning Curve Adaptation** (18/20 participants)
> "Initially the haptic feedback was distracting, but after the practice trials I found it really helpful" (P7)
> "I didn't notice it at first, but when it was gone I really missed it" (P14)

### 3. Data Integrity & Limitations

**Missing Data**: How much, why, how handled
**Outliers**: Identification method, inclusion/exclusion decisions
**Protocol Deviations**: What happened differently than planned
**Technical Issues**: Impact on data quality and analysis

### 4. Analysis Artifacts

**Statistical Output**: Key statistical test results, assumption checking
**Qualitative Codes**: Coding scheme, inter-rater reliability (if applicable)
**Raw Data Summary**: Anonymized data availability, storage procedures

## Analysis Quality Checklist

Ensure your analysis meets research standards:

**✅ Statistical Rigor**: Appropriate tests, assumptions checked, effect sizes reported
**✅ Qualitative Validity**: Systematic coding, theme saturation, participant validation
**✅ Transparency**: Clear methodology, reproducible procedures, honest reporting
**✅ Ethical Compliance**: Anonymization, consent adherence, data protection

## Common Analysis Pitfalls

**❌ Avoid These Mistakes:**
- Cherry-picking results that support your hypothesis
- Over-interpreting non-significant findings
- Ignoring assumption violations in statistical tests
- Presenting themes without sufficient evidence
- Conflating correlation with causation

**✅ Best Practices:**
- Report all planned analyses, even non-significant results
- Use appropriate statistical corrections for multiple comparisons
- Validate qualitative themes with multiple coders when possible
- Present confidence intervals alongside p-values
- Acknowledge limitations honestly

## Writing Tips for Results

### Do's:
- **Use past tense** - "Participants completed..." not "Participants complete..."
- **Be objective** - Report what happened, not what you think it means
- **Include effect sizes** - Statistical significance alone is insufficient
- **Use precise language** - "Participants showed higher accuracy" not "Participants were better"
- **Reference figures/tables** - "As shown in Figure 1..." 

### Don'ts:
- Interpret results (save for final paper)
- Speculate about causes or implications
- Hide non-significant or unexpected findings
- Use causal language unless experimental design supports it
- Include raw data dumps without summary

## Resources for Analysis

- **Statistical Software**: R, SPSS, jamovi (free alternative)
- **Qualitative Analysis**: NVivo, ATLAS.ti, or manual coding in Word/Excel
- **Visualization**: ggplot2 (R), matplotlib (Python), or Excel for simple graphs
- **Statistical Help**: University statistics center, online tutorials, textbooks
- **Writing Support**: Academic writing center, peer review groups

## Assessment Rubric

| Criteria (Weight) | Excellent (90-100%) | Good (80-89%) | Satisfactory (70-79%) | Needs Improvement (60-69%) | Poor (Below 60%) |
|----------|-------------------|--------------|---------------------|---------------------------|-----------------|
| **Study Execution Documentation (25%)** | Complete documentation of actual procedures, participants, and deviations. Excellent transparency about what happened vs. planned. Clear impact assessment of any changes. | Good documentation with minor gaps. Most deviations explained. Generally clear about actual vs. planned procedures. | Basic documentation present. Some explanation of major deviations. Adequate transparency about execution. | Limited documentation with significant gaps. Poor explanation of deviations. Unclear what actually happened. | No clear documentation of execution or major omissions. No explanation of deviations from proposal. |
| **Data Analysis Quality (35%)** | Excellent analysis using appropriate methods. Perfect statistical reporting with effect sizes. Rigorous qualitative coding with clear themes. All assumptions checked. | Good analysis with appropriate methods. Most statistical requirements met. Solid qualitative themes with evidence. Minor technical issues. | Adequate analysis with standard methods. Basic statistical reporting. Reasonable qualitative themes. Some technical gaps. | Weak analysis with questionable methods. Poor statistical reporting. Weak qualitative themes. Major technical issues. | Inappropriate or missing analysis. No proper statistical reporting. No systematic qualitative analysis. |
| **Results Presentation (25%)** | Clear, objective presentation of all findings. Excellent use of tables/figures. Perfect organization and flow. No interpretation mixed with results. | Good presentation with clear findings. Appropriate visualizations. Well-organized. Minimal interpretation in results. | Adequate presentation of main findings. Basic visualizations. Generally well-organized. Some interpretation mixed in. | Poor presentation with unclear findings. Inadequate visualizations. Poor organization. Significant interpretation mixed with results. | Very poor or missing results presentation. No appropriate visualizations. Completely disorganized. |
| **Data Integrity & Transparency (10%)** | Complete transparency about limitations, missing data, and analysis decisions. Excellent handling of data quality issues. Perfect ethical compliance. | Good transparency with minor gaps. Appropriate handling of data issues. Good ethical compliance. | Basic transparency about major issues. Adequate data quality handling. Satisfactory ethical compliance. | Limited transparency. Poor handling of data quality issues. Some ethical concerns. | No transparency about limitations or data issues. Poor ethical compliance. |
| **Writing Quality & Organization (5%)** | Excellent academic writing with perfect results format. Clear, objective prose. Perfect adherence to page limits. No interpretation in results section. | Good academic writing with appropriate format. Generally objective. Stays within page limits. Minimal interpretation. | Adequate writing quality. Basic results format. Meets page requirements. Some subjective language. | Poor writing quality. Inappropriate format. Page limit issues. Significant subjective language or interpretation. | Very poor writing. No appropriate results format. Major organizational problems. |

**Remember**: Good results sections are boring - they just report facts. Save the exciting interpretations for your final paper!
