class ApplicationController < ActionController::Base

    require 'bundler'
  Bundler.require()

    # config.middleware.insert_before 0, "Rack::Cors" do
    #   allow do
    #     origins '*'
    #     resource(
    #       '*',
    #       headers: :any,
    #       methods: [:get, :patch, :put, :delete, :post, :options]
    #       )
    # end

    # binding.pry

    # "pry has finished -- here's some_text #{some_text}"

    # end

  # get '*' do
  #       halt 404
  # end
   

end 
