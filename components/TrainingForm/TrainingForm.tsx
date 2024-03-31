import { Formik, Form, Field, FieldArray } from 'formik'
import React from 'react'

interface ExerciseFormValues {
  title: string
  series: { weight: string; reps: string }[]
}

const initialValues: ExerciseFormValues = {
  title: '',
  series: [{ weight: '', reps: '' }],
}

const MyForm: React.FC = () => (
  <div className="max-w-md mx-auto">
    <h1 className="text-2xl font-bold mb-4">Add Exercise</h1>
    <Formik
      initialValues={initialValues}
      onSubmit={(values: ExerciseFormValues) => {
        console.log(values)
      }}
    >
      {({ values }) => (
        <Form className="space-y-4">
          <div>
            <label htmlFor="title" className="block mb-1">
              Title
            </label>
            <Field
              id="title"
              name="title"
              placeholder="Title"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <FieldArray name="series">
            {({ push }) => (
              <div>
                {values.series.map((series, index) => (
                  <div key={index} className="flex space-x-4 items-center">
                    <div>
                      <label htmlFor={`series[${index}].weight`} className="block mb-1">
                        Weight
                      </label>
                      <Field
                        id={`series[${index}].weight`}
                        name={`series[${index}].weight`}
                        placeholder="Weight"
                        type="number"
                        className="border border-gray-300 rounded-md px-3 py-2 w-20"
                      />
                    </div>
                    <div>
                      <label htmlFor={`series[${index}].reps`} className="block mb-1">
                        Reps
                      </label>
                      <Field
                        id={`series[${index}].reps`}
                        name={`series[${index}].reps`}
                        placeholder="Reps"
                        type="number"
                        className="border border-gray-300 rounded-md px-3 py-2 w-20"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => push({ weight: '', reps: '' })}
                      className="bg-blue-500 text-black px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                      Add Series
                    </button>
                  </div>
                ))}
              </div>
            )}
          </FieldArray>

          <button type="submit" className="bg-green-500 text-black px-4 py-2 rounded-md hover:bg-green-600">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
)

export default MyForm
