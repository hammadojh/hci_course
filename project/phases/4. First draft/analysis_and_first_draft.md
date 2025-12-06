# Analysis & First Draft Guide

## What is the Analysis & First Draft Phase?

This phase transforms your raw data into meaningful insights and your insights into a complete academic paper. You will analyze collected data, present findings objectively, interpret results in context, and compile everything into a coherent research paper.

**Your paper should read like a published HCI research paper** — following the structure of papers from CHI, UIST, or other premier venues you encountered in your literature review.

**It's NOT:**
- A lab report with just numbers and graphs
- A personal reflection on what happened during your study
- A summary without interpretation or implications
- Results copied directly from statistical software output

**It IS:**
- A rigorous analysis of your collected data
- An objective presentation of findings with appropriate statistics/themes
- A thoughtful interpretation connecting results to theory and prior work
- A complete academic paper ready for peer review

## Goals of This Phase

By the end of this phase, you should be able to:

1. **Document Your Study**: Clearly describe what actually happened during data collection
2. **Analyze Rigorously**: Apply appropriate quantitative and/or qualitative methods
3. **Present Objectively**: Report findings without mixing in interpretation
4. **Interpret Thoughtfully**: Connect results to theory, literature, and practical implications
5. **Write Academically**: Produce a complete, well-structured research paper
6. **Reflect Critically**: Acknowledge limitations honestly and suggest future directions

---

## Part 1: Study Execution Documentation

### Why Document What Happened?

Your proposal described what you *planned* to do. Reality often differs. Documenting these differences:
- Allows readers to assess the validity of your findings
- Helps others replicate or extend your work
- Demonstrates research integrity and transparency

### What to Document

| Element | What to Include | Example |
|---------|-----------------|---------|
| **Participants** | Final sample vs. planned; demographics; dropouts | "Recruited 24, 2 dropped out, final N=22 (12F, 10M, ages 19-26, M=21.8, SD=2.1)" |
| **Procedure** | Protocol adherence; timing; any adaptations | "Sessions averaged 52 min (planned: 45). Added 5-min break after participant fatigue reports." |
| **Technical Issues** | Equipment problems; software bugs; workarounds | "App crashed for 3 participants during Task 2; restarted and repeated task." |
| **Environmental Factors** | Room conditions; interruptions; context changes | "Lab construction noise on Day 3 required rescheduling 4 sessions." |
| **Data Quality** | Missing data; outliers; protocol violations | "One participant misunderstood instructions; data excluded from Task 3 analysis." |

### Example Study Execution Summary

> **Participants**: Twenty-two undergraduate students (12 female, 10 male; ages 19-26, M=21.8, SD=2.1) completed the study. Two additional participants were recruited but excluded: one due to technical failure, one due to misunderstanding task instructions. All participants owned smartphones for at least 2 years and reported using mobile apps daily.
>
> **Procedure**: Data collection occurred over two weeks in the university usability lab. Sessions averaged 52 minutes (planned: 45 minutes). We extended the training phase from 5 to 8 minutes after the first three participants reported confusion with the interface.
>
> **Technical Issues**: The haptic feedback module failed to initialize for two participants; sessions were restarted and completed successfully. Data logging captured all planned measures without errors.
>
> **Deviations from Protocol**: We added a 3-minute break between conditions after observing fatigue in early participants. This was applied consistently to all remaining participants.

---

## Part 2: Data Analysis

### Choosing Your Analysis Approach

Your analysis approach depends on your data type and research questions:

| Data Type | When to Use | Approach | Output |
|-----------|-------------|----------|--------|
| **Quantitative** | Measuring performance, comparing conditions, testing hypotheses | Statistical analysis | Means, significance tests, effect sizes |
| **Qualitative** | Understanding experiences, exploring perceptions, generating themes | Thematic analysis | Themes, patterns, participant quotes |
| **Mixed Methods** | Comprehensive understanding with both measurement and exploration | Integration of both | Triangulated findings |

### Quantitative Analysis Guide

#### Step 1: Understand Your Data

Before running any tests, examine your data:

```
Checklist:
□ What type of variables do you have? (continuous, categorical, ordinal)
□ How many conditions/groups are you comparing?
□ Is your design within-subjects or between-subjects?
□ What is your sample size?
□ Are there missing values or outliers?
```

#### Step 2: Check Assumptions

Most statistical tests have assumptions. Common ones include:

| Assumption | What It Means | How to Check | If Violated |
|------------|---------------|--------------|-------------|
| **Normality** | Data is roughly bell-shaped | Shapiro-Wilk test, Q-Q plots | Use non-parametric tests |
| **Homogeneity of Variance** | Groups have similar spread | Levene's test | Use Welch's t-test or non-parametric |
| **Independence** | Observations don't influence each other | Study design | Use repeated-measures tests |

#### Step 3: Choose the Right Test

**For Beginners: Common Test Selection**

| Research Question | Data Type | Groups | Test |
|-------------------|-----------|--------|------|
| Compare two group means | Continuous | 2 independent | Independent t-test |
| Compare same participants across two conditions | Continuous | 2 related | Paired t-test |
| Compare more than two groups | Continuous | 3+ independent | One-way ANOVA |
| Compare same participants across 3+ conditions | Continuous | 3+ related | Repeated-measures ANOVA |
| Compare two groups (non-normal data) | Ordinal/Non-normal | 2 independent | Mann-Whitney U |
| Compare same participants (non-normal data) | Ordinal/Non-normal | 2 related | Wilcoxon signed-rank |
| Test relationship between two variables | Continuous | N/A | Pearson correlation |
| Test relationship (non-normal data) | Ordinal | N/A | Spearman correlation |
| Compare frequencies/proportions | Categorical | Any | Chi-square test |

#### Step 4: Report Results Properly

**The APA Formula for Statistical Reporting:**

```
[Test statistic](degrees of freedom) = value, p = value, effect size = value, 95% CI [lower, upper]
```

**Examples by Test Type:**

| Test | How to Report |
|------|---------------|
| **t-test** | "Task completion time was significantly faster with haptic feedback (M = 23.4s, SD = 4.2) than without (M = 28.7s, SD = 5.1), t(21) = 3.24, p = .004, d = 1.12, 95% CI [1.8, 8.8]." |
| **ANOVA** | "There was a significant main effect of feedback type on accuracy, F(2, 42) = 8.67, p < .001, η² = .29." |
| **Mann-Whitney** | "Satisfaction ratings were significantly higher in the haptic condition (Mdn = 6) than the visual condition (Mdn = 4), U = 89, p = .012, r = .45." |
| **Chi-square** | "Preference for dark mode was significantly associated with age group, χ²(2) = 12.45, p = .002, Cramér's V = .38." |
| **Correlation** | "Task time was negatively correlated with prior smartphone experience, r(20) = -.52, p = .013." |

#### Step 5: Calculate and Report Effect Sizes

**Why Effect Sizes Matter:**
P-values tell you IF an effect exists; effect sizes tell you HOW BIG it is. Always report both!

| Effect Size | Small | Medium | Large | When to Use |
|-------------|-------|--------|-------|-------------|
| **Cohen's d** | 0.2 | 0.5 | 0.8 | t-tests, comparing two means |
| **Eta-squared (η²)** | .01 | .06 | .14 | ANOVA |
| **Partial η²** | .01 | .06 | .14 | Factorial ANOVA |
| **r (correlation)** | .1 | .3 | .5 | Correlations, Mann-Whitney |
| **Cramér's V** | .1 | .3 | .5 | Chi-square |

**Example Interpretation:**
> "The effect size (d = 1.12) indicates a large practical difference between conditions, suggesting that haptic feedback provides meaningful benefits beyond statistical significance."

### Qualitative Analysis Guide

#### Thematic Analysis: Step-by-Step

Thematic analysis is a flexible method for identifying patterns in qualitative data. Follow these six steps (based on Braun & Clarke, 2006):

**Step 1: Familiarize Yourself with the Data**
- Transcribe interviews/observations if not already done
- Read through all data at least twice
- Take initial notes on interesting patterns
- Don't start coding yet—just immerse yourself

**Step 2: Generate Initial Codes**
- Go through data systematically
- Label meaningful segments with short codes
- Code everything potentially relevant
- Be inclusive—you can refine later

**Example Coding:**

| Participant Quote | Initial Code |
|-------------------|--------------|
| "At first the vibrations were annoying, but I got used to them" | Initial frustration; Adaptation over time |
| "I didn't have to keep looking at the screen" | Reduced visual attention; Eyes-free interaction |
| "It felt more natural after a while" | Naturalness; Learning curve |

**Step 3: Search for Themes**
- Group related codes together
- Look for patterns across participants
- Create candidate themes
- Use visual tools (mind maps, affinity diagrams)

**Example Theme Development:**

```
Initial Codes:                    →    Candidate Theme:
- Initial frustration                  "LEARNING CURVE AND
- Adaptation over time                  ADAPTATION"
- Learning curve
- Got easier with practice

- Reduced visual attention            "ATTENTION AND
- Eyes-free interaction                MULTITASKING BENEFITS"
- Could focus on other things
```

**Step 4: Review Themes**
- Check if themes work with coded extracts
- Check if themes work with entire dataset
- Refine, split, or merge themes as needed
- Create a thematic map

**Step 5: Define and Name Themes**
- Write a clear definition for each theme
- Identify what's unique and specific about each
- Choose clear, concise names
- Ensure themes don't overlap too much

**Example Theme Definition:**

> **Theme 1: Learning Curve and Adaptation (18/22 participants)**
> 
> *Definition*: Participants initially experienced a period of adjustment when first encountering haptic feedback, characterized by distraction or confusion, followed by gradual adaptation and often preference formation.
> 
> *Scope*: This theme captures the temporal dimension of user experience, including initial reactions, the adaptation process, and eventual comfort levels.

**Step 6: Write Up**
- Present themes with supporting quotes
- Show prevalence (how many participants)
- Connect to research questions
- Use quotes to illustrate, not just prove

### Mixed Methods Integration

If you collected both quantitative and qualitative data, integrate them thoughtfully:

**Integration Strategies:**

| Strategy | Description | Example |
|----------|-------------|---------|
| **Convergence** | Qual and quant findings agree | "Both the performance data (23% faster) and interview themes support the benefit of haptic feedback" |
| **Expansion** | Qual explains quant findings | "While times improved significantly, interviews revealed this was due to reduced visual checking" |
| **Divergence** | Qual and quant findings differ | "Despite lower satisfaction ratings, participants verbally expressed strong preferences" |

**Example Integration:**
> "Quantitative results showed significantly faster task completion with haptic feedback (d = 1.12). Qualitative analysis helps explain this finding: participants reported that haptic cues allowed 'eyes-free' confirmation of actions, reducing the need to visually verify each tap. As P12 noted, 'I could feel when I hit the right button without looking.'"

---

## Part 3: Results Presentation

### The Golden Rule: Results ≠ Discussion

| Results Section | Discussion Section |
|-----------------|-------------------|
| Reports WHAT you found | Explains WHAT IT MEANS |
| Objective, factual | Interpretive, analytical |
| Numbers, statistics, themes | Explanations, implications |
| "Participants were faster..." | "This improvement suggests..." |
| No interpretation | Heavy interpretation |

### Writing Quantitative Results

**Structure for Each Finding:**
1. State the analysis performed
2. Report descriptive statistics
3. Report inferential statistics
4. Reference any figures/tables

**Good Example:**
> "To examine the effect of feedback type on task completion time, we conducted a paired-samples t-test. Participants completed tasks significantly faster with haptic feedback (M = 23.4s, SD = 4.2) than with visual feedback alone (M = 28.7s, SD = 5.1), t(21) = 3.24, p = .004, d = 1.12 (see Figure 2). This represents an 18.5% improvement in task speed."

**Bad Example:**
> "Haptic feedback was better than visual feedback for completing tasks (p < .05). This shows that designers should use haptic feedback in mobile apps because it helps users."

*What's wrong: Missing descriptive stats, incomplete inferential stats, no effect size, and discussion content (implications) mixed into results.*

### Writing Qualitative Results

**Structure for Each Theme:**
1. Name and define the theme
2. Report prevalence (n/N participants)
3. Provide 2-3 illustrative quotes
4. Describe variations within the theme

**Good Example:**
> **Theme 2: Attention and Multitasking Benefits (15/22 participants)**
> 
> Most participants reported that haptic feedback reduced their need to visually monitor the interface, enabling divided attention. This theme encompassed two sub-patterns: reduced visual checking and improved multitasking ability.
> 
> Participants frequently described being able to operate the interface without looking:
> 
> > "I didn't have to keep staring at my screen. I could feel when something happened." (P7)
> > 
> > "It was like... the phone was communicating with me without needing my eyes." (P15)
> 
> Several participants (8/22) specifically connected this to multitasking scenarios:
> 
> > "I could see this being useful when I'm walking. I wouldn't have to keep looking down." (P3)
> 
> However, three participants noted that the benefit depended on learning the haptic patterns first, suggesting an initial investment is required before multitasking benefits emerge.

### Creating Effective Visualizations

**Choose the Right Chart:**

| Data Type | Comparison | Chart Type |
|-----------|------------|------------|
| Continuous | Two groups | Bar chart with error bars |
| Continuous | Multiple groups | Grouped bar chart |
| Continuous | Over time | Line graph |
| Categorical | Frequencies | Bar chart or pie chart |
| Continuous | Distribution | Histogram or box plot |
| Two continuous variables | Relationship | Scatter plot |
| Likert scale | Ratings | Stacked bar chart or diverging bar |

**Visualization Best Practices:**

✅ **Do:**
- Include error bars (SD or 95% CI)
- Label axes clearly with units
- Use consistent colors across figures
- Reference figures in text
- Include figure captions

❌ **Don't:**
- Use 3D effects
- Start y-axis at non-zero (unless justified)
- Include chart junk (unnecessary decoration)
- Use pie charts for more than 5 categories
- Forget to report what error bars represent

**Example Figure Caption:**
> *Figure 2*. Mean task completion time by feedback condition. Error bars represent 95% confidence intervals. Asterisk indicates significant difference (p < .01).

### Creating Results Tables

**Example Descriptive Statistics Table:**

| Measure | Haptic Feedback | Visual Only | Difference |
|---------|-----------------|-------------|------------|
| Task Time (s) | 23.4 (4.2) | 28.7 (5.1) | 5.3** |
| Errors | 1.2 (0.8) | 2.1 (1.1) | 0.9* |
| Satisfaction (1-7) | 5.8 (0.9) | 4.2 (1.2) | 1.6** |
| NASA-TLX | 32.1 (8.4) | 41.7 (9.2) | 9.6** |

*Note*. Values represent M (SD). * p < .05, ** p < .01.

---

## Part 4: Discussion & Interpretation

### Discussion Framework

Your discussion should address four key areas:

#### 1. Findings Interpretation (What do results mean?)

**Pattern:** State finding → Propose mechanism → Connect to theory

> "Participants showed 18% faster task completion with haptic feedback (d = 1.12). This improvement likely occurs because haptic cues provide immediate confirmation without requiring visual attention, effectively distributing cognitive load across sensory channels. This aligns with Wickens' (2002) Multiple Resource Theory, which predicts performance benefits when information is presented across modalities rather than overloading a single channel."

#### 2. Literature Integration (How do findings relate to prior work?)

**Pattern:** Compare with proxy paper → Note agreements/disagreements → Explain differences

> "Our findings extend Smith et al.'s (2023) desktop results to mobile contexts. While they found a 12% improvement in task time, we observed an 18% improvement, possibly because mobile users have less screen space for visual feedback, making haptic alternatives more valuable. However, unlike Chen et al. (2022), we did not find significant differences in error rates, which may reflect our shorter task duration or different participant population."

#### 3. Practical Implications (What should designers do?)

**Pattern:** Specific recommendation → Supporting evidence → Implementation consideration

> "Based on our findings, mobile app designers should incorporate haptic feedback for confirmation of discrete actions such as button presses and toggles. The learning curve we observed (Theme 1) suggests that haptic feedback should be introduced gradually, perhaps with initial visual redundancy that fades as users gain experience. Designers should also consider providing haptic customization options, as participant preferences varied substantially."

#### 4. Theoretical Contributions (What new knowledge does this add?)

**Pattern:** Gap addressed → Novel insight → Broader significance

> "This study addresses the gap in mobile-specific haptic feedback research identified in our literature review. Our findings suggest that Multiple Resource Theory applies not just to desktop multitasking but to mobile contexts where visual attention is frequently divided. This has implications for the broader understanding of attention allocation in mobile interaction paradigms."

### Addressing Limitations

**Be Honest and Specific:**

Every study has limitations. Acknowledging them demonstrates scientific integrity and helps readers appropriately contextualize your findings.

**Types of Limitations to Address:**

| Type | Example | How to Address |
|------|---------|----------------|
| **Sample** | "Student participants may not represent general users" | Specify population your findings apply to |
| **Task** | "Simple tasks may not reflect real-world complexity" | Note ecological validity constraints |
| **Duration** | "Short-term use may not capture adaptation effects" | Suggest longitudinal follow-up |
| **Measures** | "Self-reported satisfaction may have social desirability bias" | Acknowledge measurement limitations |
| **Design** | "Within-subjects design may have order effects" | Note how you addressed (counterbalancing) |
| **Technical** | "Single device model limits generalizability" | Specify device-specific constraints |

**Example Limitations Section:**
> "Several limitations should be considered when interpreting these findings. First, our sample consisted entirely of university students aged 19-26, who may have more smartphone experience than older populations; results may differ for other age groups. Second, our controlled laboratory setting may not reflect real-world mobile use where distractions and movement are common. Third, the 45-minute sessions captured initial use patterns but may not predict long-term adoption. Finally, we tested only one type of haptic pattern; other patterns may produce different effects."

### Future Directions

Connect limitations to opportunities:

> "Future research should address these limitations by examining haptic feedback effectiveness across diverse age groups and in field studies. Longitudinal studies tracking adaptation over weeks rather than minutes would clarify whether the learning curve effects we observed persist. Additionally, systematic comparison of different haptic patterns (vibration intensity, duration, rhythm) could inform more nuanced design guidelines."

---

## Part 5: Complete Paper Structure

### Paper Components (6-8 pages total)

| Section | Length | Purpose | Key Elements |
|---------|--------|---------|--------------|
| **Abstract** | 150-200 words | Standalone summary for readers deciding whether to read | Problem, method, key results (with numbers), conclusions |
| **Introduction** | ~1 page | Establish significance and preview contribution | Hook, problem context, research gap, RQ/hypotheses, contribution preview |
| **Related Work** | 1-1.5 pages | Position your work in the literature | Updated lit review, theoretical framework, gap positioning |
| **Method** | ~1 page | Enable replication | Participants, materials, procedure, measures, analysis approach |
| **Results** | 1-1.5 pages | Report findings objectively | Quantitative results with stats, qualitative themes with quotes, visualizations |
| **Discussion** | 1.5-2 pages | Interpret and contextualize | Interpretation, literature integration, implications, limitations, future work |
| **Conclusion** | ~0.5 page | Memorable final impression | Key takeaways, broader impact, closing thought |
| **References** | As needed | Credit sources | APA format, all cited works |

### Writing the Abstract

Your abstract should be a **miniature version of your entire paper**. Write it last!

**Structure:**
1. **Background/Problem** (1-2 sentences): Why does this matter?
2. **Gap/Purpose** (1 sentence): What's missing? What did you do?
3. **Method** (1-2 sentences): How did you study this?
4. **Results** (2-3 sentences): What did you find? Include key numbers!
5. **Conclusions** (1-2 sentences): What does this mean?

**Example Abstract:**
> Mobile interfaces increasingly rely on haptic feedback, yet research on its effectiveness for everyday tasks remains limited to desktop contexts. We conducted a within-subjects experiment (N=22) comparing task performance with and without haptic feedback in a mobile interface. Participants completed timed selection tasks across both conditions while we measured completion time, error rate, and subjective workload. Results showed that haptic feedback significantly reduced task time by 18% (d = 1.12, p = .004) and decreased subjective workload scores. Qualitative analysis revealed themes of initial adaptation challenges followed by strong preference development. These findings extend prior desktop research to mobile contexts and suggest that haptic feedback should be incorporated into mobile interface design, particularly for eyes-free interaction scenarios.

### Updating Earlier Sections

Your introduction and related work sections from the proposal may need updates:

**Introduction Updates:**
- Shift from future tense ("we will examine") to past tense ("we examined")
- Add brief preview of what you found (without details)
- Ensure research questions match what you actually studied

**Related Work Updates:**
- Add any new relevant papers discovered during the study
- Strengthen connections to findings you'll present
- Ensure theoretical framework matches your analysis approach

### Section Flow and Transitions

Your paper should read as one coherent argument, not disconnected sections.

**Good Transitions:**

| From → To | Transition Strategy |
|-----------|---------------------|
| Introduction → Related Work | "To situate our research, we review prior work on..." |
| Related Work → Method | "Building on this foundation, we designed a study to..." |
| Method → Results | "We now present findings from this study..." |
| Results → Discussion | "These results have several implications..." |
| Discussion → Conclusion | "In summary, this research demonstrates..." |

---

## Writing Tips

### Results Writing Checklist

✅ Use past tense ("Participants completed...")  
✅ Be precise ("showed 18% higher accuracy" not "were better")  
✅ Include effect sizes alongside p-values  
✅ Reference figures/tables ("see Figure 2")  
✅ Report both significant AND non-significant findings  
✅ Group related findings logically  
❌ Don't interpret—just report facts  
❌ Don't use causal language unless warranted ("caused" vs. "was associated with")  
❌ Don't cherry-pick favorable results  

### Discussion Writing Checklist

✅ Lead with your strongest, most important findings  
✅ Use hedging language ("suggests," "indicates," "appears to")  
✅ Connect every claim to your evidence  
✅ Acknowledge alternative explanations  
✅ Be specific about practical implications  
✅ Discuss limitations honestly  
❌ Don't just repeat the results  
❌ Don't make claims beyond your study's scope  
❌ Don't ignore findings that contradict your hypotheses  

### Common Pitfalls to Avoid

| Pitfall | What It Looks Like | How to Fix |
|---------|-------------------|------------|
| **Cherry-picking** | Only reporting results supporting hypotheses | Report all pre-planned analyses |
| **HARKing** | Hypothesizing after results are known | Clearly label exploratory analyses |
| **Overclaiming** | "This proves haptic feedback is essential" | "These findings suggest haptic feedback may benefit..." |
| **Underclaiming** | "Results were somewhat different between conditions" | Report actual statistics and effect sizes |
| **Causation from correlation** | "Dark mode caused better performance" | "Dark mode was associated with better performance" |
| **Overgeneralizing** | "Users prefer haptic feedback" | "Student participants aged 19-26 preferred haptic feedback" |
| **P-value worship** | Treating p = .049 as important but p = .051 as nothing | Focus on effect sizes and practical significance |

---

## Data Integrity

### Handling Missing Data

| Situation | Approach | How to Report |
|-----------|----------|---------------|
| Random missing (technical failure) | Listwise deletion or imputation | "Two participants' data were lost due to technical failure; analyses based on N=20" |
| Systematic missing (participant dropout) | Analyze pattern; discuss implications | "Three participants did not complete post-test; attrition analysis showed no significant differences between completers and non-completers" |
| Missing questionnaire items | Use available data; note limitations | "NASA-TLX scores calculated from 5/6 items for 4 participants due to missing responses" |

### Handling Outliers

**Step 1: Identify**
- Visual inspection (box plots, scatter plots)
- Statistical criteria (>3 SD from mean, IQR method)

**Step 2: Investigate**
- Is it a data entry error? (Fix it)
- Is it a legitimate extreme value? (Consider keeping)
- Does it reflect a different population? (Consider excluding with justification)

**Step 3: Report Transparently**
> "One participant's task time (87s) was >3 SD above the mean and was excluded from analysis. Results remain significant with this participant included (p = .008 vs. p = .004)."

### Pre-registration and Transparency

If you pre-registered your study or analysis plan:
- Clearly distinguish confirmatory (pre-planned) from exploratory (post-hoc) analyses
- Report all pre-registered analyses, even if non-significant
- Label exploratory analyses as such

---

## Submission Checklist

Before submitting, verify:

### Content
- [ ] Study execution clearly documented
- [ ] All planned analyses completed and reported
- [ ] Results separated from discussion
- [ ] All findings interpreted in discussion
- [ ] Limitations addressed honestly
- [ ] Future directions provided
- [ ] All sections complete (Abstract through References)

### Statistics & Data
- [ ] Descriptive statistics (M, SD) reported
- [ ] Appropriate tests used with justification
- [ ] Effect sizes included
- [ ] Confidence intervals where appropriate
- [ ] Non-significant results reported
- [ ] Figures and tables properly formatted

### Qualitative (if applicable)
- [ ] Coding process documented
- [ ] Theme prevalence reported (n/N)
- [ ] Quotes support themes (not just illustrate)
- [ ] Participant IDs anonymized

### Writing
- [ ] Past tense throughout
- [ ] No first-person in Results (optional style)
- [ ] APA citation format
- [ ] Page limit met (6-8 pages)
- [ ] Figures/tables referenced in text
- [ ] Consistent terminology throughout

### Ethics & Integrity
- [ ] No identifiable participant information
- [ ] All deviations from protocol explained
- [ ] Limitations honestly addressed
- [ ] No overclaiming or cherry-picking

---

## Assessment Rubric

| Criteria | Weight | Excellent (90-100%) | Good (80-89%) | Satisfactory (70-79%) | Needs Improvement (60-69%) | Poor (Below 60%) |
|----------|--------|---------------------|---------------|----------------------|---------------------------|------------------|
| **Study Execution & Documentation** | 15% | Complete, transparent documentation of what happened. Deviations clearly explained with impact assessment. Excellent data quality discussion. | Good documentation of study execution. Most deviations explained. Adequate data quality discussion. | Basic documentation present. Some deviations noted. Limited data quality discussion. | Poor documentation. Many details missing. Unclear what happened or why. | No meaningful documentation. Cannot assess what was actually done. |
| **Analysis Quality** | 25% | Appropriate methods with clear justification. Proper statistical reporting with effect sizes and CIs. Rigorous qualitative coding if applicable. Assumptions checked. | Good analysis methods. Statistical reporting mostly complete. Adequate qualitative analysis. Some assumption checking. | Basic analysis present. Some statistical reporting issues. Qualitative analysis lacks rigor. | Questionable analysis methods. Poor statistical reporting. Weak or missing qualitative analysis. | Inappropriate or absent analysis. No meaningful statistical reporting. |
| **Results Presentation** | 15% | Clear, objective findings. Excellent visualizations with proper formatting. Results and discussion appropriately separated. All findings reported. | Good results presentation. Adequate visualizations. Mostly objective reporting. | Basic results present. Some visualization issues. Some interpretation mixed with results. | Poor results organization. Inadequate visualizations. Heavy mixing of results and discussion. | Results unclear or absent. No visualizations. Cannot determine what was found. |
| **Discussion Quality** | 25% | Strong theoretical interpretation. Excellent literature integration showing deep understanding. Insightful, specific implications. Balanced, thoughtful limitations. | Good interpretation with theoretical grounding. Good literature connections. Clear implications. Adequate limitations discussion. | Basic interpretation present. Some literature connections. General implications. Limitations listed but not explored. | Weak interpretation. Minimal literature integration. Vague implications. Superficial limitations. | No meaningful interpretation. No literature connection. No implications. Limitations missing or dismissed. |
| **Paper Integration & Flow** | 10% | Coherent argument throughout. Excellent transitions between sections. Professional academic writing. Compelling narrative. | Good paper flow. Clear transitions. Solid academic writing. | Adequate organization. Some choppy transitions. Acceptable writing quality. | Poor section connections. Choppy flow. Writing issues affect comprehension. | No coherent structure. Very poor writing. Sections seem disconnected. |
| **Completeness & Format** | 10% | All sections complete and polished. Perfect APA citations. Adheres to page limits. Professional formatting. | All sections present. Minor citation issues. Meets page limits. Good formatting. | Most sections complete. Some citation problems. Close to page limits. Acceptable formatting. | Missing sections. Multiple citation errors. Page limit issues. Poor formatting. | Major sections missing. Citation problems throughout. Significant length issues. |


*Remember: A transparent study with honest limitations is more valuable than one that overclaims. Scientific integrity matters more than impressive p-values.*
