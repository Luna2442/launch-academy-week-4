require "sinatra"
require "sinatra/reloader"
require "sinatra/json"
require "json"
require "pry"

cereal = File.read('./data/cereal.json')
cereal_array = JSON.parse(cereal)

def selected_cereal(id, cereals)
  selected_cereal = cereals.find { |cereal| cereal["id"] == id }
end

get '/' do
  send_file File.expand_path('index.html', settings.public_folder)
end

get '/cereals/:id' do
  send_file File.expand_path('index.html', settings.public_folder)
end

get '/api/v1/cereals' do
  json cereal_array
end

get '/api/v1/cereals/:id' do
  selected_cereal_id = params[:id].to_i
  json selected_cereal(selected_cereal_id, cereal_array)
end
