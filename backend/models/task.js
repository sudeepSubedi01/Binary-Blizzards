const mongoose = require("mongoose");
var slug = require("mongoose-slug-updater");
const { Schema } = mongoose;

mongoose.plugin(slug);

const taskSchema = new Schema(
  {
    disasterType: { type: String, required: true },
    volunteers: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Volunteers",
    }],
    location: { type: String, required: true },
    description: { type: String, required: true },
    slug: { type: String, slug: ["description"] },
  },
  {
    timestamps: true,
  }
);

const Tasks = mongoose.model("Tasks", taskSchema);

module.exports = Tasks;
