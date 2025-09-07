
# 🩺 AI Symptom-to-Disease Prediction Project — Master Prompt

## GOAL
Develop an **end-to-end AI/ML pipeline** that predicts diseases based on user-reported symptoms.  
The dataset is ~200 MB, raw, unfiltered, binary-encoded (first column = disease label, rest = symptoms with 1/0).  

The entire pipeline must be implemented **only inside Jupyter Notebooks** (`.ipynb`).  
- No standalone `.py` files unless explicitly exported from notebooks.  
- Every stage (EDA, preprocessing, NLP, feature engineering, model training, evaluation, explainability, API prototyping) must be inside notebooks.  
- Modularize using notebook sections and `%run` or `%load` for reuse.  

---

## ENVIRONMENT & PACKAGES
Install all required dependencies in a single notebook cell:

```bash
python -m pip install --upgrade pip
pip install pandas numpy scikit-learn xgboost lightgbm catboost \
tensorflow torch transformers sentence-transformers spacy symspellpy \
rapidfuzz textdistance shap eli5 matplotlib seaborn joblib mlflow \
fastapi uvicorn pydantic pytest black isort pre-commit python-dotenv \
sqlalchemy alembic jupyter nbextensions jupyterlab
````

---

## NOTEBOOK STRUCTURE

All work must be divided into these Jupyter Notebooks inside a `notebooks/` folder:

```
notebooks/
  1_data_loading_preprocessing.ipynb
  2_exploratory_data_analysis.ipynb
  3_symptom_vocabulary_and_nlp.ipynb
  4_feature_engineering.ipynb
  5_model_training_and_comparison.ipynb
  6_evaluation_and_explainability.ipynb
  7_api_prototype_with_fastapi.ipynb
  8_end_to_end_demo.ipynb
```

---

## TASKS (to be implemented step by step in the notebooks)

### 1. Data Loading & Preprocessing (`1_data_loading_preprocessing.ipynb`)

* Load CSV/TSV robustly, memory-efficient with `chunksize`.
* Validate: check duplicates, missingness, non-binary values.
* Normalize `disease` column (string → integer labels). Save mapping.
* Handle multi-label disease rows (split or multi-hot encode).
* Save cleaned dataset as `processed_data.csv`.

### 2. Exploratory Data Analysis (`2_exploratory_data_analysis.ipynb`)

* Show dataset shape, class balance, top symptoms, missing heatmap.
* Plots: class distribution, symptom frequency, correlation heatmap.
* Save plots in `reports/eda/`.

### 3. Symptom Vocabulary & NLP Pipeline (`3_symptom_vocabulary_and_nlp.ipynb`)

* Build canonical symptom list from dataset column names.
* NLP steps for free-text:

  * Lowercasing, unicode normalization.
  * Spell correction (SymSpell, fallback transformer).
  * Tokenization + lemmatization (spaCy).
  * Symptom extraction:

    * **Fuzzy matching** via RapidFuzz (threshold 85).
    * **Semantic similarity** via sentence-transformers (threshold 0.72).
* Output: binary vector aligned with dataset symptom columns.
* Save vocabulary as `symptom_vocab.json`.

### 4. Feature Engineering (`4_feature_engineering.ipynb`)

* Create binary vectors + engineered features:

  * Symptom counts, interaction features (via MI).
  * Symptom clusters/groups if beneficial.
* Save pipeline object.

### 5. Model Training & Comparison (`5_model_training_and_comparison.ipynb`)

* Models:

  * Logistic Regression (baseline)
  * RandomForest, XGBoost, LightGBM, CatBoost
  * Simple neural net (TensorFlow/PyTorch)
* Use **5-fold stratified CV**.
* Tune hyperparameters (Optuna or RandomizedSearchCV).
* Save best model + artifacts (`joblib` or native save).

### 6. Evaluation & Explainability (`6_evaluation_and_explainability.ipynb`)

* Metrics: accuracy, precision, recall, F1 (macro/micro), ROC-AUC, PR-AUC, Top-k accuracy.
* Confusion matrix and per-class breakdown.
* Explain predictions with SHAP:

  * Global importance (bar plot).
  * Local explanations (per input).
* Save report in `reports/evaluation.md`.

### 7. API Prototype (`7_api_prototype_with_fastapi.ipynb`)

* Build prototype **inside notebook** using `%%bash` cells to run FastAPI with Uvicorn.
* Endpoints:

  * `/predict` → accept user text, return top-k predictions + explanations.
  * `/health` → status.
  * `/metadata` → model info.
* Input validation with Pydantic.
* Return JSON with predictions, confidences, matched symptoms, and SHAP-based highlights.

### 8. End-to-End Demo (`8_end_to_end_demo.ipynb`)

* Show full pipeline:

  1. User enters text (with typos/grammar issues).
  2. NLP cleans & extracts symptoms.
  3. Symptom vector created.
  4. Model predicts disease (top-3 with probabilities).
  5. Display predictions + explanations.

---

## EDGE CASES TO HANDLE

* **Zero matched symptoms** → gracefully return fallback message or clarifying question.
* **Multi-label diseases** → automatically adapt training pipeline.
* **Severe class imbalance** → use class weights, focal loss, or resampling.
* **Large dataset (200 MB)** → chunk loading, memory optimization.
* **User text errors** → robust correction + semantic matching.

---

## DELIVERABLES

* `notebooks/` folder with all `.ipynb` files above.
* `reports/eda/` and `reports/evaluation.md`.
* `symptom_vocab.json` and trained model artifacts.
* `README.md` explaining how to run all notebooks end-to-end.
* Demo of API running inside a notebook.

---

## QUALITY REQUIREMENTS

* Every notebook section must be **fully runnable** top-to-bottom.
* Use clear markdown explanations between code cells.
* Provide plots, metrics tables, and inline visualizations.
* Code formatted (PEP8, black).
* Use docstrings and comments.
* Show example inputs/outputs for every stage.

---

## ACCEPTANCE CRITERIA

* With just the raw dataset and these notebooks, a user can:

  1. Clean and preprocess the dataset.
  2. Explore and visualize it.
  3. Extract symptoms from noisy text.
  4. Train multiple models and select the best one.
  5. Evaluate and explain predictions.
  6. Run an API prototype.
  7. Demo the full workflow interactively.

---

⚠️ **STRICT INSTRUCTION:**
All implementation must be done inside **Jupyter Notebooks only**. Do not create separate `.py` source files unless explicitly exported from a notebook cell.
