import React from "react";
import { Container, Row, Col, Card, Table } from "react-bootstrap";
import "./PALog.css";

function PALog() {
  const workoutData = [
    {
      week: "Week 1 (March 24-28)",
      sessions: [
        {
          date: "March 24",
          day: "MONDAY",
          exercises: [
            { name: "Kneeling Push Ups", sets: 3, reps: 10, superset: "Dumbbell Tricep Over Head (3 sets; 10 reps)" },
            { name: "Inch Worm", sets: 3, reps: 10, superset: "Skull Crushers (3 sets; 10 reps)" },
            { name: "Bench Dips", sets: 3, reps: 10, superset: "Leg Raises (3 sets; 10 reps)" },
            { name: "Planks Shoulder Tops", sets: 3, reps: 10, superset: "Russian Twist (3 sets; 30 reps)" }
          ],
          imageName: "/images/MONDAY_(March_24).jpg"
        },
        {
          date: "March 26",
          day: "WEDNESDAY",
          exercises: [
            { name: "Goblet Squats", sets: 4, reps: 15 },
            { name: "Split Squats", sets: 4, reps: 15 },
            { name: "Hip Trust", sets: 4, reps: 15 },
            { name: "Sumo Squats", sets: 4, reps: 15 },
            { name: "Donkey Kicks", sets: 4, reps: 15, superset: "Straight Leg Lift (4 sets; 15 reps)" }
          ],
          imageName: "images/WEDNESDAY_(March_26).jpg"
        },
        {
          date: "March 28",
          day: "FRIDAY",
          exercises: [
            { name: "Kneeling Push Ups", sets: 3, reps: 10, superset: "Dumbbell Tricep Over Head (3 sets; 10 reps)" },
            { name: "Inch Worm", sets: 3, reps: 10, superset: "Skull Crushers (3 sets; 10 reps)" },
            { name: "Bench Dips", sets: 3, reps: 10, superset: "Leg Raises (3 sets; 10 reps)" },
            { name: "Planks Shoulder Tops", sets: 3, reps: 10, superset: "Russian Twist (3 sets; 30 reps)" }
          ],
          imageName: "images/FRIDAY_(March_28).jpg"
        }
      ]
    },
    {
      week: "Week 2 (March 31-April 4)",
      sessions: [
        {
          date: "March 31",
          day: "MONDAY",
          exercises: [
            { name: "Goblet Squats", sets: 4, reps: 15 },
            { name: "Split Squats", sets: 4, reps: 15 },
            { name: "Hip Trust", sets: 4, reps: 15 },
            { name: "Sumo Squats", sets: 4, reps: 15 },
            { name: "Donkey Kicks", sets: 4, reps: 15, superset: "Straight Leg Lift (4 sets; 15 reps)" }
          ],
          imageName: "/images/MONDAY_(March_31).jpg"
        },
        {
          date: "April 2",
          day: "WEDNESDAY",
          exercises: [
            { name: "Kneeling Push Ups", sets: 3, reps: 10, superset: "Dumbbell Tricep Over Head (3 sets; 10 reps)" },
            { name: "Inch Worm", sets: 3, reps: 10, superset: "Skull Crushers (3 sets; 10 reps)" },
            { name: "Bench Dips", sets: 3, reps: 10, superset: "Leg Raises (3 sets; 10 reps)" },
            { name: "Planks Shoulder Tops", sets: 3, reps: 10, superset: "Russian Twist (3 sets; 30 reps)" }
          ],
          imageName: "/images/WEDNESDAY_(April_2).jpg"
        },
        {
          date: "April 4",
          day: "FRIDAY",
          exercises: [
            { name: "Goblet Squats", sets: 4, reps: 15 },
            { name: "Split Squats", sets: 4, reps: 15 },
            { name: "Hip Trust", sets: 4, reps: 15 },
            { name: "Sumo Squats", sets: 4, reps: 15 },
            { name: "Donkey Kicks", sets: 4, reps: 15, superset: "Straight Leg Lift (4 sets; 15 reps)" }
          ],
          imageName: "/images/FRIDAY_(April_4).jpg"
        }
      ]
    },
    {
      week: "Week 3 (April 7-11)",
      sessions: [
        {
          date: "April 7",
          day: "MONDAY",
          exercises: [
            { name: "Dumbbell Dead Lift", sets: 4, reps: 15, superset: "Diagonal Leg Lift (4 sets; 15 reps)" },
            { name: "Walking Lunges", sets: 4, reps: 15 },
            { name: "Squat Jumps", sets: 4, reps: 15 },
            { name: "Hip Bridges", sets: 4, reps: 15 },
            { name: "Fire Hydrant", sets: 4, reps: 15 }
          ],
          imageName: "/images/MONDAY_(April_7).jpg"
        },
        {
          date: "April 9",
          day: "WEDNESDAY",
          exercises: [
            { name: "Inch Worm w/ Knee to Chest", sets: 3, reps: 10, superset: "Plank Knee Taps" },
            { name: "Push Up Release", sets: 3, reps: 8, superset: "Elbow Plank (3 sets; 12 reps)" },
            { name: "Dumbbell Press", sets: 3, reps: 12, superset: "Bicycle (3 sets; 12 reps)" },
            { name: "Dumbbell Rows", sets: 3, reps: 12, superset: "Seated Knee to Chest (3 sets; 12 reps)" },
            { name: "Dumbbell Shrugs", sets: 3, reps: 12 }
          ],
          imageName: "/images/WEDNESDAY_(April_9).jpg"
        },
        {
          date: "April 11",
          day: "FRIDAY",
          exercises: [
            { name: "Dumbbell Dead Lift", sets: 4, reps: 15, superset: "Diagonal Leg Lift (4 sets; 15 reps)" },
            { name: "Walking Lunges", sets: 4, reps: 15 },
            { name: "Squat Jumps", sets: 4, reps: 15 },
            { name: "Hip Bridges", sets: 4, reps: 15 },
            { name: "Fire Hydrant", sets: 4, reps: 15 }
          ],
          imageName: "/images/FRIDAY_(April_11).jpg"
        }
      ]
    },
    {
      week: "Week 4 (April 14-18)",
      sessions: [
        {
          date: "April 14",
          day: "MONDAY",
          exercises: [
            { name: "Inch Worm w/ Knee to Chest", sets: 3, reps: 10, superset: "Plank Knee Taps" },
            { name: "Push Up Release", sets: 3, reps: 8, superset: "Elbow Plank (3 sets; 12 reps)" },
            { name: "Dumbbell Press", sets: 3, reps: 12, superset: "Bicycle (3 sets; 12 reps)" },
            { name: "Dumbbell Rows", sets: 3, reps: 12, superset: "Seated Knee to Chest (3 sets; 12 reps)" },
            { name: "Dumbbell Shrugs", sets: 3, reps: 12 }
          ],
          imageName: "/images/MONDAY_(April_14).jpg"
        },
        {
          date: "April 16",
          day: "WEDNESDAY",
          exercises: [
            { name: "Dumbbell Dead Lift", sets: 4, reps: 15, superset: "Diagonal Leg Lift (4 sets; 15 reps)" },
            { name: "Walking Lunges", sets: 4, reps: 15 },
            { name: "Squat Jumps", sets: 4, reps: 15 },
            { name: "Hip Bridges", sets: 4, reps: 15 },
            { name: "Fire Hydrant", sets: 4, reps: 15 }
          ],
          imageName: "/images/WEDNESDAY_(April_16).jpg"
        },
        {
          date: "April 18",
          day: "FRIDAY",
          exercises: [
            { name: "Inch Worm w/ Knee to Chest", sets: 3, reps: 10, superset: "Plank Knee Taps" },
            { name: "Push Up Release", sets: 3, reps: 8, superset: "Elbow Plank (3 sets; 12 reps)" },
            { name: "Dumbbell Press", sets: 3, reps: 12, superset: "Bicycle (3 sets; 12 reps)" },
            { name: "Dumbbell Rows", sets: 3, reps: 12, superset: "Seated Knee to Chest (3 sets; 12 reps)" },
            { name: "Dumbbell Shrugs", sets: 3, reps: 12 }
          ],
          imageName: "/images/FRIDAY_(April_18).jpg"
        }
      ]
    },
    {
      week: "Week 5 (April 21-25)",
      sessions: [
        {
          date: "April 21",
          day: "MONDAY",
          exercises: [
            { name: "Pushup and variations", sets: 4, reps: 25, superset: "Jumping Squats (4 sets; 25 reps)" },
            { name: "Pike Push-ups", sets: 4, reps: 25 },
            { name: "Close Grip Pushups", sets: 4, reps: 25 },
            { name: "Leg Raises", sets: 4, reps: 25 },
            { name: "Body Weight Calf Raises", sets: 4, reps: 25 }
          ],
          imageName: "/images/MONDAY_(April_21).jpg"
        },
        {
          date: "April 23",
          day: "WEDNESDAY",
          exercises: [
            { name: "Lunges", sets: 4, reps: 25, superset: "Body-Weight Calf Raises (4 sets; 25 reps)" },
            { name: "Reverse Pushups", sets: 4, reps: 25 },
            { name: "Bedsheet Rows", sets: 4, reps: 25 },
            { name: "Side-Lying Curl", sets: 4, reps: 25 },
            { name: "Leg Raises", sets: 4, reps: 25 }
          ],
          imageName: "/images/WEDNESDAY_(April_23).jpg"
        },
        {
          date: "April 25",
          day: "FRIDAY",
          exercises: [
            { name: "Pushup and variations", sets: 4, reps: 25, superset: "Jumping Squats (4 sets; 25 reps)" },
            { name: "Pike Push-ups", sets: 4, reps: 25 },
            { name: "Close Grip Pushups", sets: 4, reps: 25 },
            { name: "Leg Raises", sets: 4, reps: 25 },
            { name: "Body Weight Calf Raises", sets: 4, reps: 25 }
          ],
          imageName: "/images/FRIDAY_(April_25).jpg"
        }
      ]
    }
  ];

  // Helper to parse sets and reps from a superset string
  function parseSetsReps(str, fallbackSets, fallbackReps) {
    const setsMatch = str.match(/(\d+)\s*set/);
    const repsMatch = str.match(/(\d+)\s*rep/);
    return {
      sets: setsMatch ? parseInt(setsMatch[1]) : fallbackSets,
      reps: repsMatch ? parseInt(repsMatch[1]) : fallbackReps,
    };
  }

  // Helper to clean exercise names (remove 'superset' and extra spaces)
  function cleanExerciseName(name) {
    return name.replace(/superset/gi, '').replace(/\s+/g, ' ').trim();
  }

  // Transform all exercises and supersets into flat exercise entries
  const cleanedWorkoutData = workoutData.map(week => ({
    ...week,
    sessions: week.sessions.map(session => ({
      ...session,
      exercises: session.exercises.flatMap(ex => {
        if (ex.superset) {
          // Parse name, sets, reps for superset
          const supersetName = cleanExerciseName(ex.superset.replace(/\s*\([^)]*\)/, ''));
          const { sets, reps } = parseSetsReps(ex.superset, ex.sets, ex.reps);
          return [
            { name: supersetName, sets, reps },
            { name: cleanExerciseName(ex.name), sets: ex.sets, reps: ex.reps }
          ];
        } else {
          return [{ name: cleanExerciseName(ex.name), sets: ex.sets, reps: ex.reps }];
        }
      })
    }))
  }));

  return (
    <Container fluid className="about-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", marginBottom: "30px", textAlign: "center" }}>
              Physical Activity <span className="purple">Log</span>
            </h1>
            {cleanedWorkoutData.map((week, weekIndex) => (
              <Card key={weekIndex} className="mb-4">
                <Card.Header>
                  <h2>{week.week}</h2>
                </Card.Header>
                <Card.Body>
                  {week.sessions.map((session, sessionIndex) => (
                    <div key={sessionIndex} className="mb-4">
                      <h3>{session.day} - {session.date}</h3>
                      <Table striped bordered hover variant="dark">
                        <thead>
                          <tr>
                            <th>Exercise</th>
                            <th>Sets</th>
                            <th>Reps</th>
                          </tr>
                        </thead>
                        <tbody>
                          {session.exercises.map((exercise, exerciseIndex) => (
                            <tr key={exerciseIndex}>
                              <td>{exercise.name}</td>
                              <td>{exercise.sets}</td>
                              <td>{exercise.reps}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                      {session.imageName && (
                        <div className="text-center mt-3">
                          <img 
                            src={session.imageName} 
                            alt={`${session.day} workout`} 
                            style={{ maxWidth: '100%', height: 'auto' }}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default PALog; 