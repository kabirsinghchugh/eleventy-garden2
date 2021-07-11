# Train Function in R

3 possible ways of specifying variables
	- `train(y ~ x1 + x2, data = dat, ...)`
	- `train(x = predictor_df, y = outcome_vector, ...)`
	- `train(recipe_object, data = dat, ...)`

---

- `train` always creates dummies