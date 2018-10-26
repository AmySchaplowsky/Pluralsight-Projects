import {mapStateToProps, QuestionDetailDisplay} from "../QuestionDetail";
import renderer from 'react-test-renderer';
import React from 'react';

describe(`The question detail component`, () => {
    describe(`The Container Element`, () => {
        describe(`mapStateToPros`, () => {
            it(`should map the state to props correctly`, () => {
                // Arrange
                const sampleQuestion = {
                    question_id: 42,
                    body: "Space is big"
                };

                const appState = {
                    questions: [sampleQuestion]
                };

                const ownProps = {
                    question_id: 42
                };

                // Act
                const componentState = mapStateToProps(appState, ownProps);

                // Assert
                expect(componentState).toEqual(sampleQuestion);
            });
        });

        describe(`The display element`, () => {
            it(`should not regress`, () => {
                const tree = renderer.create(
                    <QuestionDetailDisplay
                        title="The meaning of life"
                        body="43"
                        answer_count={0}
                        tags={[`hitchhiking`]}
                    />
                );

                expect(tree.toJSON()).toMatchSnapshot()
            });
        });
    });
});


